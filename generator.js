const fs = require("fs")

const categories = {

smartphones: "Smartphone",
notebooks: "Notebook",
fones: "Fone Bluetooth",
smartwatch: "Smartwatch",
tenis: "Tênis Esportivo",
mochilas: "Mochila",
teclados: "Teclado Mecânico",
mouses: "Mouse Gamer",
monitores: "Monitor",
drones: "Drone"

}

let products = []

Object.keys(categories).forEach(cat => {

for(let i = 1; i <= 100; i++){

products.push({

id: products.length + 1,

name: categories[cat] + " Modelo " + i,

price: (Math.random()*2000+50).toFixed(2),

category: cat,

image: "https://via.placeholder.com/200"

})

}

})

fs.writeFileSync(

"products.json",
JSON.stringify(products,null,2)

)

console.log("2000 produtos criados")