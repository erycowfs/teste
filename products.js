const express = require("express")
const db = require("../db")

const router = express.Router()

router.get("/",(req,res)=>{

db.query(
"SELECT * FROM products LIMIT 100",
(err,result)=>{

res.json(result)

})

})

module.exports = router