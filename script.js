const productos = [
    {
        id: 1,
        nombre: "Auricular",
        img: "https://m.media-amazon.com/images/I/41m8hUyCaML._SL500_.jpg",
        precio: "50.000",
        año: "2024",
        marca: "wilson",

    },
    {
        id: 2,
        nombre: "Mouse",
        precio: "20.000",
        img: "https://spacegamer.com.ar/img/Public/1058-producto-impact-8051.jpg",
        año: "2023",
        marca: "fire",
    },
    {
        id: 3,
        nombre: "Joystick PS5",
        precio: "80.000",
        img: "https://arsonyb2c.vtexassets.com/arquivos/ids/348023-800-800?v=637363644415730000&width=800&height=800&aspect=true",
        año: "2024",
        marca: "Sony"
    }
]
const container = document.getElementById("container")



container.innerHTML = ""
productos.map((x) => {
    container.innerHTML +=
        `
    <div class="card" style="width: 18rem;" key= ${x.id}>
    <img src="${x.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${x.nombre}</h5>
      <p class="card-text">Precio : 
      ${x.precio}</p>
      <button  class="btn btn-primary" id=${x.id} >Agregar </button>
      <button  class="btn btn-warning info" id=${x.id} >+Info </button>
    
    </div>
     <div class= "no-active active" id=${x.id}>
     <h5 class="card-title">Año: ${x.año}</h5>
     <h5 class="card-title">Marca : ${x.marca}</h5>
     
      </div>
  </div>
  
  
      `
})
const button = document.querySelectorAll(".info")
const div =
    document.querySelectorAll(".no-active")


button.forEach(element => {
    element.addEventListener("click", (e) => {
        e.preventDefault()
        const productoId = parseInt(element.id);
        const producto = productos.find(x => x.id === productoId);

        div[producto.id - 1].classList.remove("no-active")
    })
});

const carrito = [
    {
        id: 1,
        nombre: "Auricular",
        cantidad: 0,
        precio: 50000,
        total: 0,
        actualizartotal() {
            this.total = this.cantidad * this.precio
        },

    },
    {
        id: 2,
        nombre: "Mouse",
        cantidad: 0,
        precio: 20000,
        total: 0,
        actualizartotal() {
            this.total = this.cantidad * this.precio
        },
    },
    {
        id: 3,
        nombre: "Joystick",
        cantidad: 0,
        precio: 80000,
        total: 0,
        actualizartotal() {
            this.total = this.cantidad * this.precio
        },

    }
]

const botones = document.querySelectorAll(".btn-primary")

botones.forEach(element => {
    element.addEventListener("click", e => {
        e.preventDefault();
        const id = parseInt(element.id)

        const producto = carrito.find(x => x.id === id)

        producto["cantidad"] += 1;
        producto.actualizartotal()
        actualizarCarrito()


    })

}

)
function actualizarCarrito() {
    const bodyTable = document.getElementById("body-table")

    bodyTable.innerHTML = ""

    carrito.map((x) => {
        if (x.cantidad !== 0) {

            bodyTable.innerHTML +=

                `
    <tr>
        <th scope="row">${x.id}</th>
        <td>${x.nombre}</td>
        <td>${x.precio}</td>
        <td>${x.cantidad}</td>
        <td>${x.total}</td>
       <td> <button  class="btn btn-danger delete" id=${x.id}>X</button></td>
      </tr>
    
    `

        }
    }

    )



    const botonesEliminar = document.querySelectorAll(".delete");
    botonesEliminar.forEach(element => {
        element.addEventListener("click", e => {
            e.preventDefault();
            const id = parseInt(element.id);
            const producto = carrito.find(x => x.id === id);
            producto.cantidad -= 1;
            producto.actualizartotal();
            actualizarCarrito();
        });
    });

}

const cerrar = document.getElementById("close")
const table = document.getElementById("table")
const modal = document.getElementById("modal-per")
cerrar.addEventListener("click", (e) => {
    e.preventDefault()
    modal.style.display = "none"


})


const botonCarrito = document.getElementById("carrito-btn")
botonCarrito.addEventListener("click", (e) => {
    e.preventDefault()
    modal.style.display = "block"


})


const botonesEliminar = document.querySelectorAll(".delete");

botonesEliminar.forEach(element => {
    element.addEventListener("click", e => {
        e.preventDefault();
        const id = parseInt(element.id);

        const producto = carrito.find(x => x.id === id);


        producto.cantidad = -1;
        producto.actualizartotal();


        actualizarCarrito();
    });
});