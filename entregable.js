class productManager {

    #id = 0;

    constructor(){

            this.products = [];

    }

    getProductos(){

        return this.products
                
    }

   addProduct(title = undefined, description = undefined, price = undefined, thumbnail = undefined, code = undefined, stock = undefined){
                let filtro = this.products.filter((element)=>element.code === code )
            if (filtro.length > 0) {
                
                 console.log("YA EXISTE UN PRODUCTO CON EL CODE QUE INTENTA INGRESAR");
                 return
            }

        const product = {

                title,
                description,
                price,
                thumbnail,
                code,
                stock
        }

        // le agrego el ID al producto
		product.id = this.#getID();


        //Verificacion que no haya campos UNDEFINED

        let newProducts = []

            let values = Object.values(product)
            newProducts.push(values)
        
                //Junto todos los valores en el array
            let allValues = newProducts.flat()
                    //Verifico si hay algún valor que haya quedado UNDEFINED
             if (allValues.includes(undefined) || allValues.includes('')) {
                
                return this.#verificar()
             }else{

                this.products.push(product)
                
             }
             
            
    }
    #getID() {
		// Incremento en 1 el valor de id
		this.#id++; 
		return this.#id;
	}

    #verificar() {

         console.log("HAY VALORES SIN DEFINIR, DEBE COMPLETAR TODAS LAS VARIABLES PARA INSTANCIAR LOS OBJETOS");

    }

    getProductById(id){
            let array = this.products.filter((product)=> {
                return product.id === id
            })
             if (array.length == 0) {
                
                console.log("ERROR: Not Found");
                return
             }else{
                 
                return array
             }
            
            
    }



}

let pd = new productManager()

 pd.addProduct( "Monitor","Monitor led 32 pulgadas 144ghz", 147600, "url", 11324, 10);
 pd.addProduct( "Kit teclado y mouse","paquete con teclado y mouse gamer", 22345, "url", 1132445, 10);
 pd.addProduct( "Fuente","Fuente certifica 80 Plus 750W", 87345, "url",12455658, 10);
console.log(pd.getProductos());
 console.log("Tomo por ID: ",pd.getProductById(2));