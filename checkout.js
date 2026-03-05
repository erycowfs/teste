async function pagar(){

const res = await fetch(
"http://localhost:3000/payment/checkout",
{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

total: 199

})

})

const data = await res.json()

window.location = data.url

}