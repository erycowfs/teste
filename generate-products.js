const db = require("./db")

for(let i=1;i<=10000;i++){

let price = (Math.random()*500+20).toFixed(2)

db.query(

"INSERT INTO products (name,price,image,category) VALUES (?,?,?,?)",

[
"Produto "+i,
price,
"https://via.placeholder.com/200",
"geral"
]

)

}

console.log("10000 produtos criados")