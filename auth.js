const express = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const db = require("../db")

const router = express.Router()

router.post("/login",(req,res)=>{

const {email,password} = req.body

db.query(
"SELECT * FROM users WHERE email=?",
[email],
async (err,result)=>{

if(result.length==0)
return res.status(401).send()

const user = result[0]

const valid = await bcrypt.compare(
password,
user.password
)

if(!valid)
return res.status(401).send()

const token = jwt.sign(
{id:user.id},
"secret"
)

res.json({token})

})

})

module.exports = router