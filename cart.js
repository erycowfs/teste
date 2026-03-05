function addCart(id){

let cart = JSON.parse(localStorage.getItem("cart")) || []

cart.push(id)

localStorage.setItem("cart",JSON.stringify(cart))

alert("Produto adicionado")

}

function loadCart(){

const cart = JSON.parse(localStorage.getItem("cart")) || []

const div = document.getElementById("cart")

if(!div) return

div.innerHTML = cart.map(i=>`Produto ${i}`).join("<br>")

}

loadCart()