const carrito = document.getElementById('carrito'),
    listaProd = document.getElementById('lista-prod'),
    contCarrito = document.querySelector('.seleccion .listado'),
    iconoCarrito = document.getElementById("iconocarrito"),
    agregarCarrito = document.querySelector('.agregar-carrito'),
    btnvaciarcarrito = document.querySelector('#vaciarcarrito');

    let carritoVacio = true;
    let articulosCarrito = [];
    registrarEventsListeners()
    
    function registrarEventsListeners() {
        //al hacer clic en "comprar ahora"
        listaProd.addEventListener('click', agregarprod);
    
    //eliminar un producto del carrito
    carrito.addEventListener('click', eliminarProducto);

    //vaciar el carrito
    btnvaciarcarrito.addEventListener('click', e => {
        articulosCarrito = [];
        limpiarHTML()
    })
    //al hacer clic en icono carrito, muestra contenido
    iconoCarrito.addEventListener('click',)
}

function agregarprod(e) {
    if (e.target.classList.contains("agregar-carrito")) {
        const prodSeleccionado = e.target.parentElement.parentElement;
        leerInfo(prodSeleccionado)
        
}
}
//elimina un producto del carrito de compras
function eliminarProducto(e) {
    if (e.target.classList.contains("borrar-producto")){
            const productoId = e.target.getAttribute('data-id');
            //eliminar del arreglo del articulosCarrito por el numero de data-id
            articulosCarrito = articulosCarrito.filter(producto => producto.id !== productoId)
            carritoHTML()
    }
}
//lee el contenido de nuestro HTML que dimos click y toma la info del producto
function leerInfo(producto) {
    //crea un objeto con el contenido del curso actual
    const infoProd = {
        imagen: producto.querySelector('img').src,
        detalle: producto.querySelector('h4').textContent,
        precio: producto.querySelector('.costo').textContent,
        id : producto.querySelector('button').getAttribute('data-id'),
        cantidad : 1
    }
    //revisa si un producto ya existe en el carrito
    const existe = articulosCarrito.some(producto => producto.id === infoProd.id)
    if (existe) {
        //sumar 1 más a la cantidad
        const productos = articulosCarrito.map(producto => {
            if (producto.id === infoProd.id) {
                producto.cantidad++;
                return producto
            } else {
                return producto;
            }
        });
        [...articulosCarrito,infoProd]
    } else {
        //Se agregan elementos al carrito
        articulosCarrito = [...articulosCarrito, infoProd]
        console.log(articulosCarrito);
    }
    
    carritoHTML()
    //verificarEstadoCarrito();
    //cambiarColorYEstado();

}
function cambiarColorYEstado() {
    iconoCarrito.classList.add('rojo');
    carritoVacio = false;
  }
  
//se muestra el carrito en el html

function carritoHTML() {
    limpiarHTML()
    //recorre carrito y muestra en la página el contenido del carrito   
    articulosCarrito.forEach(producto => {
        const fila = document.createElement('div');
        fila.innerHTML = `
                <img src="${producto.imagen}"></img>
                <p>${producto.detalle}</p>
                <p>${producto.precio}</p>
                <p>${producto.cantidad}</p>
                <p><span class="borrar-producto" data-id="${producto.id}">X</span></p>
            `;

            contCarrito.appendChild(fila);
        });
    }
    //elimina los productos seleccionados en el carrito
    function limpiarHTML() {
        console.log(contCarrito.firstChild)
            while (contCarrito.firstChild){
            contCarrito.removeChild(contCarrito.firstChild)
        }
        articulosCarrito = [];
    }
    function verificarEstadoCarrito() {
        // Verificar aquí si el carrito está vacío o no
        if (articulosCarrito.length === 0) {
            iconoCarrito.classList.remove('rojo');
        }
    }

  