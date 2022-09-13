//ARRAYS 

let arrayCarrito = [];

let arrayProductos = [];

//VARIABLES DOM.

let divProductos = document.getElementById("divProductos");

let divSaludoInicial = document.getElementById("divSaludo");

// Objetos

class Producto  {
    constructor(id,nombre,precio,tipo){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.tipo = tipo;
    }
}

class ItemCarrito {
    constructor(id,nombre,precio,tipo,cantidad){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.tipo = tipo;
        this.cantidad - cantidad;
    }
}

//Funciones
const agregarProducto = () => {

    let id = prompt("Ingrese id del producto");

    let nombre = prompt("Ingrese el nombre del producto");

    let precio = parseInt(prompt("Ingrese el precio del producto"));

    let tipo = prompt("Detalle el Tipo de Producto");

    let producto = new Producto(id,nombre,precio,tipo);

    let validacion = arrayProductos.findIndex(x => x.id == id);

    while(validacion != -1){

        alert("ya existe ese nombre de producto");

        id = prompt("Ingrese id del producto");

        nombre = prompt("Ingrese el nombre del producto");

        precio = parseInt(prompt("Ingrese el precio del producto"));

        tipo = prompt("Detalle el Tipo de Producto");

        producto = new Producto(nombre, precio);

        validacion = arrayProductos.findIndex(x => x.id == id);

    }

    arrayProductos.push(producto);
}

const eliminarProducto = (id) => {

    let indice = arrayProductos.findIndex(x => x.id == id);

    if(indice != -1){

        arrayProductos.splice(indice,1);
        console.log(arrayProductos);

    }
    else{

        alert("No existe ese producto");

    }
}

const filtrarProductosXTipo = (tipo) => {

    let arrayFiltrado = arrayProductos.filter(x => x.tipo == tipo);

    return arrayFiltrado;
}

const filtrarProductosXNombre = (nombre) => {

    let arrayFiltrado = arrayProductos.filter(x => x.nombre == nombre);

    return arrayFiltrado;
}

// crea una card de producto
const crearCardProducto = (producto) => {

    let nuevaCard =  document.createElement("div");

    nuevaCard.classList.add("card","col-md-3");

    nuevaCard.innerHTML = `<img src="img/prueba.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${producto.nombre}</h5>
                                <p class="card-text">$${producto.precio}</p>
                                <p class="card-text">Tipo: ${producto.tipo}</p>
                                <a href="#" class="btn btn-primary">Add to Cart</a>
                            </div>`;

    divProductos.append(nuevaCard);

}

// carga la lista de productos
const  cargarProductos = () => {

    divProductos.innerHTML = ``;
    for (const item of arrayProductos) {
        crearCardProducto(item);
    }
}

// agrega el nombre del usuario al saludo
const saludo = (nombre) => {
    divSaludoInicial.innerHTML = `Bienvenido a mi Ecommerce ${nombre}!`;
}

//APLICACION. 

//EVENTO ON LOAD PARA CARGAR ALGO DEL HTML PRIMERO...
window.addEventListener('load', (event) => {

    let nombreUsuario = prompt("Bienvenido, ingrese su nombre por favor...");
    let cantProductos = parseInt(prompt("Ingrese la cantidad de productos a agregar"));

    while(isNaN(cantProductos)){

        cantProductos = parseInt(prompt("Ingrese la cantidad de productos a agregar"));
    }


    for (let i = 0; i < cantProductos; i++) {
        
        agregarProducto();
        
    }

    cargarProductos();
    saludo(nombreUsuario);

    //TIMEOUT PARA CARGAR EL HTML Y LUEGO MOSTRAR EL PROMPT.
    setTimeout(() => {
        let eliminar = prompt("desea eliminar algun producto? S/N").toUpperCase();

        if(eliminar == 'S'){

            eliminar = prompt("ingrese el id del producto a eliminar");

            eliminarProducto(eliminar);

            cargarProductos();
        }
    }, 2000);
    
});




// Muestro los porductos por consola con un forOf...
// for (const item of arrayProductos) {
    
//     console.log(`id:${item.id} nombre: ${item.nombre}, precio: ${item.precio}, tipo: ${item.tipo}`);

// }

