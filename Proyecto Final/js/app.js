import productos from './productos.json' assert {type: 'json'}; 

//ARRAYS GLOBALES

let arrayCarrito = [];

let arrayProductos = productos;

// Objetos

class ItemCarrito {
    constructor(id,nombre,precio,tipo,img){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.tipo = tipo;
        this.img = img,
        this.cantidad = 1;
    }
}

//Funciones
const agregarProducto = (id,nombre,precio,tipo,img) => {

    console.log("ok");

    let itemCarrito = new ItemCarrito(id,nombre,precio,tipo,img);

    console.log(itemCarrito);

    let validacion = arrayCarrito.findIndex(x => x.id == id);

    if(validacion != -1){
        arrayCarrito.find(x => x.id == id ).cantidad++;
    }
    else{
        arrayCarrito.push(itemCarrito);
    }

    cargarItemsCarrito();
}

const filtrarProductosXTipo = (tipo) => {

    let arrayFiltrado = arrayProductos.filter(x => x.tipo == tipo);

    return arrayFiltrado;
}

const filtrarProductosXNombre = (nombre) => {

    let arrayFiltrado = arrayProductos.filter(x => x.nombre.toLowerCase().includes(nombre.toLowerCase()));

    if(nombre == ""){
        console.log(arrayFiltrado);
        
        cargarProductos(arrayProductos);
    }
    else{
        cargarProductos(arrayFiltrado);
    }
    

}

// crea una card de producto
const crearCardProducto = (producto) => {

    let nuevaCard =  document.createElement("div");

    nuevaCard.classList.add("card","col-md-3","col-lg-2","col-sm-5");

    nuevaCard.innerHTML = ` <img src="img/prueba.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h4 id="idProducto" class="card-title">${producto.id}</h4>
                                <h5 class="card-title">${producto.nombre}</h5>
                                <p class="card-text">$${producto.precio}</p>
                                <p class="card-text">Type: ${producto.tipo}</p>
                                <a id="add-producto${producto.id}" class="btn btn-primary add-producto">Add to Cart</a>
                            </div>`;

    divProductos.append(nuevaCard);

    //evento para agregar el producto al carrito.
    let btnAgregarProducto = document.querySelector(`#add-producto${producto.id}`);
    
    btnAgregarProducto.addEventListener('click', (e) => {
                
            if(carrito.style.visibility === "hidden"){

                carrito.style.visibility = "visible";

                agregarProducto(producto.id,producto.nombre,producto.precio,producto.tipo,producto.img);

            }

    });

}

// carga la lista de productos
const  cargarProductos = (productos) => {

    divProductos.innerHTML = ``;
    for (const item of productos) {
        crearCardProducto(item);
    }

    
}

// crea un card item para el carrito
const crearItemCarrito = (producto) => {

    //AGREGA CARD ITEM CARRITO
    let nuevoItemCarrito =  document.createElement("div");

    nuevoItemCarrito.classList.add("carrito-producto");

    nuevoItemCarrito.innerHTML = ` <img src="img/play4.jpg" alt="">
                            <h2>${producto.nombre} X ${producto.cantidad}</h2>
                            <div class="producto-cantidades">
                            <a id="sumarItem${producto.id}" class="btn btn-success">+</a>
                            <a id="restarItem${producto.id}" class="btn btn-danger">-</a>
                            </div>
                            <p>$${producto.precio * producto.cantidad}</p>
                            <a id="eliminarItem${producto.id}" class="btn btn-danger">X</a>`;

    productosCarrito.append(nuevoItemCarrito);

    //eventos del item carrito
    //sumar 1 item.
    let btnSumarItem = document.querySelector(`#sumarItem${producto.id}`);
    
    btnSumarItem.addEventListener('click', () => {
     
        arrayCarrito.find(x => x.id == producto.id ).cantidad++;
        cargarItemsCarrito();
    });

    //restar 1 item
    let btnRestarItem = document.querySelector(`#restarItem${producto.id}`);
    
    btnRestarItem.addEventListener('click', () => {

        if(producto.cantidad > 1)
        {
            arrayCarrito.find(x => x.id == producto.id ).cantidad--;
        }
        else{
            let eliminar = arrayCarrito.findIndex(x => x.id == producto.id);
            arrayCarrito.splice(eliminar,1);
        }
        cargarItemsCarrito();
    });

    //Eliminar Item
    let btnEliminarItem = document.querySelector(`#eliminarItem${producto.id}`);

    btnEliminarItem.addEventListener('click', () => {
     
        let eliminar = arrayCarrito.findIndex(x => x.id == producto.id);
        arrayCarrito.splice(eliminar,1);
        cargarItemsCarrito();
    });

}

// carga lista de el carrito, guarda en local storage.
const  cargarItemsCarrito = () => {

    productosCarrito.innerHTML = "";
    for (const item of arrayCarrito) {
        crearItemCarrito(item);
    }
    if(productosCarrito.innerHTML == ""){
        productosCarrito.innerHTML = "El carrito esta Vacio";
    }

    totalCarrito();
    
    localStorage.setItem("productosCarrito", JSON.stringify(arrayCarrito));
    
}

const totalCarrito = () => {

    let montoTotal= document.querySelector(".total-carrito")
    let total = 0;

    for (let item of arrayCarrito){ 
        total += item.precio * item.cantidad;
    }

    montoTotal.innerHTML =`TOTAL: $${total}`;
    console.log(total)
}

//****************************************

//VARIABLES DOM.

let divProductos = document.getElementById("div-productos");

let filtro = document.getElementById("input-filtro");

let carrito = document.getElementById('modal-container');

let btnCarrito = document.getElementById('btn-carrito');

let cerrarCarrito = document.getElementById('cerrar-carrito');

let productosCarrito = document.querySelector('.productos-carrito');



//EVENTOS

//APLICACION. 

document.addEventListener( 'DOMContentLoaded', function() {

    //SLIDER
    var splide = new Splide( '.splide', {
        type     : 'loop',
        height   : '40rem',
        focus    : 'center',
        pauseOnHover: false,
        pagination : false,
        cover: true,
        autoplay: true,
        autoWidth: true,
    });
    splide.mount();
    // *** fin config slider.

    // console.log(arrayProductos);

    cargarProductos(arrayProductos);
    carrito.style.visibility = "hidden";

    filtro.addEventListener('keyup', (e) => {

        console.log(e.target.value);
        filtrarProductosXNombre(e.target.value);
        
    });

    btnCarrito.addEventListener('click', () => {

        carrito.style.visibility = "visible";
        cargarItemsCarrito();

    });

    cerrarCarrito.addEventListener('click', () => {

        carrito.style.visibility = "hidden";

    });

    //obtiene datos de localstorage.
    arrayCarrito =JSON.parse(localStorage.getItem("productosCarrito"));
    if(arrayCarrito == null){
        arrayCarrito = [];
    }

} );








