import express from "express"

const routerProducts =express.Router();

//---------------Rutas del producto-----//
routerProducts.get('/', (req, res) => {
    
    console.log("entro a la ruta home actualizada")
    
    res.status(400);
    throw new Error("Error simulado");
    
    res.send('Hello World!')
})

routerProducts.post('/', (req, res) => {
    onsole.log("entro a la ruta home del post")
    const products = [
        { name: "camara prof", id: "1" },
        { name: "camara prof", id: "2" }
    ]
    res.json({
        "Productos":products})
    
})
export default routerProducts;