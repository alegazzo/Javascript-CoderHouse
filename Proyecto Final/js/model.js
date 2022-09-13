//ARRAYS 

let arrayCarrito = [];

let arrayProductos = [];


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