const express = require("express")
const db = require("../db")

const router = express.Router()

router.post("/product",(req,res)=>{

const {name,price,image,category} = req.body

db.query(
"INSERT INTO products (name,price,image,category) VALUES (?,?,?,?)",
[name,price,image,category]
)

res.send("produto criado")

})

module.exports = router