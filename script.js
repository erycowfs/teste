fetch("http://localhost:3000/products")

.then(res => res.json())

.then(data => {

const container = document.getElementById("products")

data.forEach(p => {

container.innerHTML += `

<div class="product">

<img src="${p.image}">

<h3>${p.name}</h3>

<p>R$ ${p.price}</p>

<button>Comprar</button>

</div>

`

})

})