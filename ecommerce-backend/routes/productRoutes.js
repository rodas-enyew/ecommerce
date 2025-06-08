const express = require ('express');
const router = express.Router();
const Product = require('../modules/Product');

router.get('/', async(req, res) => {
    try{
        const product = await Product.fing();
        res.json(product);
    } catch (err) {
        res.status(500).json({messaage: err.messaage });
    }    
});
//const products =[
   // {id: 1, title:"Sample product", price: 10.99},
    //{id: 2, title:"Another product", price: 20.99},
//];

//GET all products
//router.get('/', (req, res)=> {
    //res.json(products);
//});

module.exports = router;