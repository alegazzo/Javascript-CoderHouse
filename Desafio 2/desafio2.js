//Funcion para calcular precio final del producto.
const CalcularPrecioFinal = (precioProducto, metodoPago) => {

    switch (metodoPago) {
        case 'E':

            return precioProducto * 0.80;
            break;

        case 'D':

            return precioProducto * 0.90;
            break;

        case 'C':

            let cuotas = parseInt(prompt("ingrese la cantidad de cuotas a pagar el producto (maximo de 12 cuotas sin interes)"));

            while (cuotas > 12 || cuotas < 1){

                cuotas = parseInt(prompt("ingrese la cantidad de cuotas a pagar el producto (maximo de 12 cuotas sin interes)"));
            }

            let precioCuota = precioProducto / cuotas;

            return precioCuota ;
            break;

        default:
            break;
    }
};




//CALCULAR EL PRECIO FINAL SEGUN EL TIPO DE PAGO Y CALCULAR PRECIO DE CUOTAS SI LO DESEA.
let precioProducto = parseInt(prompt("Bienvenido, ingrese el precio del producto a comprar"));

while (isNaN(precioProducto)){

    precioProducto = parseInt(prompt("Vuelva a ingresar el precio del producto a comprar"));

}

let  metodoPago = prompt("Ingrese el metodo de Pago: 'E'- Efectivo, 'D' - Debito, 'C' Credito").toUpperCase();

while (metodoPago !== 'E' && metodoPago !== 'D' && metodoPago !== 'C' ){

    alert("Metodo de pago incorrecto...");

    metodoPago = prompt("Ingrese el metodo de Pago: 'E'- Efectivo, 'D' - Debito, 'C' Credito").toUpperCase();

}

let precioFinal = CalcularPrecioFinal(precioProducto, metodoPago);

if (metodoPago === 'C'){

    alert(`Precio final de cada cuota: ${precioFinal}$`);

}
else{
    
    alert(`Precion final del producto con decuento incluido: ${precioFinal}$`);

}






