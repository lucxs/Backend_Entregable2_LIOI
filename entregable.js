const fs = require('fs');


class productManager{
    #id = 0;
    #path = undefined;
          constructor(){                 
                        if (!fs.existsSync('./products.json')) {

                            fs.writeFileSync('./products.json',JSON.stringify([]))
                            
                        }

             this.#path = fs.promises.readFile('./products.json', 'utf-8');   

        }

        #getID() {
            // Incremento en 1 el valor de id
            this.#id++; 
            return this.#id;
        }


       async addProduct(title = undefined, description = undefined, price = undefined, thumbnail = undefined, code = undefined, stock = undefined){

            try {
                const product = await {

                    title: title,
                    description: description,
                    price: price,
                    thumbnail: thumbnail,
                    code: code,
                    stock: stock
            }

                

                product.id = await this.#getID();

                const actualprods = await this.getProducts();
                
                 
                actualprods.push(product)

                await fs.promises.writeFile('./products.json', JSON.stringify(actualprods))

            } catch (error) {
                console.log("no se cargó ningún producto, algo salio mal: ", error);
            }

        

        }



        async getProducts(){

                try {

                    const content = await this.#path;

                    return JSON.parse(content);
                    
                } catch (error) {
                    console.log('hubo un error para obtener los usuarios');
                }

        }

        getProductById(id){
            


        }

        updateProduct(id, campo){

            

        }

        deleteProduct(){


        }

}

let pd = new productManager();

pd.addProduct("Monitor","Monitor led 32 pulgadas 144ghz", 147600, "url", 11324, 10)
