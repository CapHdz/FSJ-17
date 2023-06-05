const carrito = document.getElementById('carrito');
const bodyCarrito = document.querySelector('tbody');
const footerCarrito = document.querySelector('tfoot');
const vaciarCarrito = document.querySelector('#vaciar-carrito');
const listaCursos = document.getElementById('lista-cursos');
let arregloCarrito = [];

//llamando al metodo para que se ejecute
cargarEventos();

//metodo para cargar todos los eventos
function cargarEventos(){
    //addEventListener
    listaCursos.addEventListener('click', agregarCurso);

    carrito.addEventListener('click', eliminarItem);

    vaciarCarrito.addEventListener('click', () => {
        Swal.fire({
            title: '¿Estas seguro de vaciar el carrito?',
            text: "Se eliminaran los productos seleccionados",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, vaciar'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                'Carrito vacio',
                'Los productos fueron removidos',
                'success'
                ).then(function(){
                    arregloCarrito = [];
                    limpiarHTML(bodyCarrito);
                    limpiarHTML(footerCarrito);
                })
            }
        })
    })
}

/**agregando un curso */
function agregarCurso(e){
    //evitar que el hipervinculo siga a una url
    e.preventDefault();

    //condicionamos si la persona le dio click al boton
    if(e.target.classList.contains('agregar-carrito')){
        /**verificando que esto me trae informacion */
        console.log(e.target);

        /** devolviendo los elemento padre del boton agregar */
        const cursoSeleccionado = e.target.parentElement.parentElement;
        //console.log(cursoSeleccionado);
        leerDatosCurso(cursoSeleccionado); //argumento: es el valor que se le asigna al parametro
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Curso agregado',
            showConfirmButton: false,
            timer: 1500
        })
    }
}

//metodo para almacenar un curso al arreglo
function leerDatosCurso(curso){ //parametro que hace referencia a lo que el usuario me mandara
    console.log(curso);

    //creando un objeto de los valores que trae el curso
    const informacionCurso = {
        imagen: curso.querySelector('img').src, //capturando la ruta de la imagen
        titulo: curso.querySelector('h5').textContent,
        precio: curso.querySelector('.precio').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    //agregando los objetos del curso al arreglo
    // ... nos ayuda a hacer copias de los arreglos
    // guardamos en una copia el curso que habia seleccionado mas el actual
    //arregloCarrito = [...arregloCarrito, informacionCurso];

    //verificando si el curso existe en el arreglo
    // some, every => true or false

    const existe_curso = arregloCarrito.some(curso => curso.id === informacionCurso.id); //true or false

    if(existe_curso){
        //console.log('El curso ya existe');
        //iterar el arreglo para verificar el curso que vamos a actualizar
        arregloCarrito.map(curso => {
            if(curso.id === informacionCurso.id){
                curso.cantidad += 1; 
                return curso;
            } else{
                return curso;
            }
        });
    }else{
        arregloCarrito.push(informacionCurso);
    }
    console.table(arregloCarrito);
    //llamamos a la funcion para poner los cursos en la tabla
    carritoHTML();
}

/** metodo donde se va a mostrar la informacion del arreglo en la tabla */
function carritoHTML(){
    limpiarHTML(bodyCarrito);
    let total = 0;
    arregloCarrito.map(curso => {
        // creando el elemento tr
        const fila = document.createElement('tr');
        //splice, slice
        //slice => metodo para eliminar un caracter o posicion de una cadena
        let act_precio = curso.precio.slice(1, -1);
        const subTotal = Number(act_precio * curso.cantidad);
        /**
         * mathRound() => aproxima decimales
         * toFixed() => cuantos decimales queremos que se visualizen
         */
        fila.innerHTML = `
            <td>
                <img src="${curso.imagen}" width="100">
            </td>
            <td>${curso.titulo}</td>
            <td>${curso.precio}</td>
            <td>${curso.cantidad}</td>
            <td>$${subTotal.toFixed(2)}</td>
            <td>
                <a href="#" class="borrar-item" data-id="${curso.id}">X</a>
            </td>
        `;
        total += subTotal;
        //agregando el elemeto tr al html (tbody)
        bodyCarrito.appendChild(fila);
    })
    //asignacion de fila para el tfooter
    limpiarHTML(footerCarrito);
    const fila_foot = document.createElement('tr');
    fila_foot.innerHTML = `
        <td colspan="4">Total del pedido:</td>
        <td>$${total}</td>
    `;
    footerCarrito.appendChild(fila_foot);
}

// metodo para eliminar hijos repetitivos
function limpiarHTML(contenedorPadre){
    while(contenedorPadre.firstChild){
        contenedorPadre.removeChild(contenedorPadre.firstChild);
    }
}

//metodo para confirmar el pedido
function guardarPedido(){
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success mx-1',
            cancelButton: 'btn btn-danger mx-1'
        },
        buttonsStyling: false
    })
    swalWithBootstrapButtons.fire({
        title: '¿Estas seguro de guardar el pedido?',
        text: "El pedido se cargara a tu tarjeta",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Guardar pedido',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
            'Pedido exitoso',
            'Pedido se ha guardado correctamente',
            'success'
            ).then(function(){
                //redirecciona a una pagina
                window.location = "index.html";
            })
        } else if (
          /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire(
            'Cancelado',
            'Puedes seguir agregando mas productos',
            'error'
            )
        }
    })
}
// metodo para eliminar un item del pedido
function eliminarItem(e){
    if(e.target.classList.contains('borrar-item')){
        //obtenemos el id del curso seleccionado
        const cursoId = e.target.getAttribute('data-id');

        //filtrando los cursos que sean diferentes al id seleccionado
        // map(), filter()
        arregloCarrito = arregloCarrito.filter(curso => curso.id !== cursoId);
        carritoHTML();
    }
}