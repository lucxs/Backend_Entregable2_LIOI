
import express from 'express';

import productManager from "./ProductManager.js";

 const app = express();

 app.use(express.urlencoded({ extended: true }));

 const prodManager = new productManager();


 app.get("/products", async (req, res)=>{

    try {

         let allProds = await prodManager.getProducts();

        let LimitProducts = parseInt(req.query.limit);

            if (LimitProducts > 0 ) {

                    ProdsFiltered = await allProds.slice(0, LimitProducts)
                    await res.send(ProdsFiltered)
            }else{

                    await res.send(allProds)
            }

        
         
        
    } catch (error) {

        res.send("El error es: ",error);
        
    }
 


 })

 app.listen(8080, ()=>{

    console.log("escuchando en 8080");


 })


