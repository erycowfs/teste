async function recomendar(produto){

const res = await fetch(

"https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent",

{

method:"POST",

headers:{

"Content-Type":"application/json",

"X-goog-api-key":"SUA_KEY"

},

body:JSON.stringify({

contents:[{

parts:[{

text:"recomende produtos similares a "+produto

}]

}]

})

})

const data=await res.json()

console.log(data)

}