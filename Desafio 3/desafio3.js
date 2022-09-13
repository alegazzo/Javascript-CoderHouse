// Objeto producto.

class Producto{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}

// array de productos.
const arrayProductos = [];

//funcion para agregar producto y funcion eliminar.

const agregarProducto = () => {

    let nombre = prompt("Ingrese el nombre del producto");

    let precio = parseInt(prompt("Ingrese el precio del producto"));

    let producto = new Producto(nombre, precio);

    let validacion = arrayProductos.findIndex(x => x.nombre == nombre);

    while(validacion != -1){

        alert("ya existe ese nombre de producto");

        nombre = prompt("Ingrese el nombre del producto");

        precio = parseInt(prompt("Ingrese el precio del producto"));

        producto = new Producto(nombre, precio);

        validacion = arrayProductos.findIndex(x => x.nombre == nombre);

    }

    arrayProductos.push(producto);
}

const eliminarProducto = (nombre) => {

    let indice = arrayProductos.findIndex(x => x.nombre == nombre);

    if(indice != -1){

        arrayProductos.splice(indice,1);
        console.log(arrayProductos);

    }
    else{

        alert("No existe ese producto");

    }
}

// desafio.
let cantProductos = parseInt(prompt("Ingrese la cantidad de productos a agregar"));

while(isNaN(cantProductos)){

    cantProductos = parseInt(prompt("Ingrese la cantidad de productos a agregar"));
}


for (let i = 0; i < cantProductos; i++) {
    
    agregarProducto();
    
}

// Muestro los porductos por consola con un forOf...
for (const item of arrayProductos) {
    
    console.log(`nombre: ${item.nombre}, precio: ${item.precio}`);

}

let eliminar = prompt("desea eliminar algun producto? S/N").toUpperCase();

if(eliminar == 'S'){

    eliminar = prompt("ingrese el nombre del producto a eliminar");

    eliminarProducto(eliminar);
}