const path = require("path");
const express = require("express");
const app = express();


let listaDeAliens = ["👽", "🤖", "👾", "👻"]; 


app.get("/", (req, res)=>{
   res.send("👽 start server 👽");
});


app.get("/lista/de/aliens", (req, res)=>{
   if(listaDeAliens.length == 0){
       res.send("🎆🤹‍♀️🎆 los aliens fueron eliminados 🎆🤹‍♀️🎆");
   }else{
       res.send(listaDeAliens);
   }
});  


app.get("/destruir/alien", (req, res)=>{
  listaDeAliens.pop();

  res.send("atacar 1 alien y destruir 💥");
});


app.get("/comida/de/aliens", (req, res)=>{
   const comidaDeAliens = ["🧔🏼", "👱🏼‍♀️", "👶🏼", "🐼", "🦑"];

   let datos = `# los aliens comen estas cosas: (  
                ${comidaDeAliens[0]} | ${comidaDeAliens[1]} | 
                ${comidaDeAliens[2]} | ${comidaDeAliens[3]} |
                ${comidaDeAliens[4]} )
                `.toUpperCase();

   res.send(datos);
});


app.get("/historia", (req, res)=>{
   res.sendFile(path.join(__dirname, "./views/home.html"));
});


app.listen(3000, ()=>{
   console.log("🚀 start server 🚀".toUpperCase());
});