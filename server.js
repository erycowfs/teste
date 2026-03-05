const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

const products = require("./products.json")

app.get("/products",(req,res)=>{
res.json(products)
})

app.post("/shipping/calculate",(req,res)=>{

const {cep,weight} = req.body

const price = 15 + weight * 2

res.json({
price,
days:5
})

})

app.post("/login",(req,res)=>{

const jwt = require("jsonwebtoken")

const token = jwt.sign(
{user:req.body.email},
"secret",
{expiresIn:"24h"}
)

res.json({token})

})

app.listen(3000,()=>{
console.log("Servidor rodando")
})