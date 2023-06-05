Algoritmo descuento
	Escribir "¿Cuantos cafes desea ordenar?"
	Leer numcafe
	preciocafe = 25
	Si numcafe < 5 Entonces
		descuento0 = preciocafe * numcafe
		Escribir "Total: $", descuento0
		Escribir "No aplica descuento"
	SiNo
		Si numcafe >= 5 & numcafe <= 10 Entonces
			subtotal20 = preciocafe * numcafe
			descuento20 = subtotal20 * 0.2
			total20 = subtotal20 - descuento20
			Escribir "Subtotal: $", subtotal20
			Escribir "20% de descuento por su compra: $", descuento20
			Escribir "Total con descuento: $", total20
		SiNo
			Si numcafe > 10 & numcafe <= 20 Entonces
				subtotal40 = preciocafe * numcafe
				descuento40 = subtotal40 * 0.4
				total40 = subtotal40 - descuento40
				Escribir "Subtotal: $", subtotal40
				Escribir "40% de descuento por su compra: $", descuento40
				Escribir "Total con descuento: $", total40
			SiNo
				Si numcafe > 20 Entonces
					subtotal50 = preciocafe * numcafe
					descuento50 = subtotal50 * 0.5
					total50 = subtotal50 - descuento50
					Escribir "Subtotal: $", subtotal50
					Escribir "50% de descuento por su compra: $", descuento50
					Escribir "Total con descuento: $", total50
				FinSi
			FinSi
		FinSi
	FinSi
FinAlgoritmo