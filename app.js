const path = require("path");
const express = require("express");
const app = express();


let listaDeAliens = ["π½", "π€", "πΎ", "π»"]; 


app.get("/", (req, res)=>{
   res.send("π½ start server π½");
});


app.get("/lista/de/aliens", (req, res)=>{
   if(listaDeAliens.length == 0){
       res.send("ππ€ΉββοΈπ los aliens fueron eliminados ππ€ΉββοΈπ");
   }else{
       res.send(listaDeAliens);
   }
});  


app.get("/destruir/alien", (req, res)=>{
  listaDeAliens.pop();

  res.send("atacar 1 alien y destruir π₯");
});


app.get("/comida/de/aliens", (req, res)=>{
   const comidaDeAliens = ["π§πΌ", "π±πΌββοΈ", "πΆπΌ", "πΌ", "π¦"];

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
   console.log("π start server π".toUpperCase());
});