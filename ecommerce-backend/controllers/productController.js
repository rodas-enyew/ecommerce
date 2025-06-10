const Product = require("../models/productModel"); //importing the p

//this function handles get /api/products
const getAllProducts = (req, res)=> {
    const products = [
        {id:1, name: "laptop", price: 1000 },
        {id:2, name: "Phone", price: 888 },
        {id:3, name: "Tablet", price: 666 }
        ];

        res.json(products); //sends JSON resp to frontend
}

//POST create new p in the DB 
const createProduct = async (req, res)=> { 
  try{
    const { title, price, category, image, description } = req.body;

    //checks if the req fiels are provided 
    if (!title || !price || !category) {
      return res.status(400).json({ message: "Title, price and category are required."});
    }

    //create and save the p to the DB 
  const product = await Product.create({
    title,
    price,
    category,
    image,
    description,
  });

  res.status(201).json(Product); //send newp with 201 status code

} catch (error) {
  //error handling 
  res.status(500).json({ message: "sth went wrong", error: error.message});
}
};

module.exports ={
  getAllProducts,
  createProduct
}