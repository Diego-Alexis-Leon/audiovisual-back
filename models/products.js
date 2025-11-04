import {Schema, model} from 'mongoose'

const productsSchema = Schema({
    name:{
        type: String,
        trim: true
    },
    descripcion:{
        type: String,
        trim: true
    },
    price:{
      type: Number  
    }
})

const Product = model("Product",productsSchema)

export default Product;