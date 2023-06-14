import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function Eventos() {
  //declaramos el estado
  const [eventos, setEventos] = useState([]);

  const obtenerEventos = () => {
    /**
     * el then hace referencia al exito de la peticion
     * catch hace referencia que hubo un error en la peticion
     * crud(get, post, push, delete)
     */
    axios.get("https://gateway.marvel.com/v1/public/events?ts=1&apikey=8be4a40aa5e3e301ec0f2a74266c4391&hash=23b90b396d7a2c629daf3656bf64aef4").then((response) => {
      console.log(response.data.data.results);
      setEventos(response.data.data.results);
    }).catch((error) => {
      console.log(error);
    })
  }

  useEffect(() =>{
    obtenerEventos();
  },[])

  console.log(eventos)
  return (
    <div className='container'>
      <h1 className='text-center text-white'>Lista de eventos</h1>
      <div className="row">
        {
          eventos.map((evento, indice) => {
            return (
              <div className='col-md-4 mt-4' key={indice}>
                <div className='card'>
                  <h5 className='card-header'>{evento.title}</h5>
                  <div className='card-body'>
                  <img src={`${evento.thumbnail.path}.${evento.thumbnail.extension}`} alt={evento.title} className='card-img-top'/>
                  <a href={evento.urls[0].url} className='btn btn-outline-success mt-3' target='_blank'>Ver más detalles</a>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
