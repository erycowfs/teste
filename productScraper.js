const fs = require("fs")

let products=[]

for(let i=1;i<=10000;i++){

products.push({

id:i,

name:"Produto "+i,

price:Math.floor(Math.random()*500),

category:"geral"

})

}

fs.writeFileSync(
"products.json",
JSON.stringify(products,null,2)
)