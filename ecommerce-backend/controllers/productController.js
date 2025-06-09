//this function handles get /api/products
const getAllProducts = (req, res)=> {
    const products = [
        {id:1, name: "laptop", price: 1000 },
        {id:2, name: "Phone", price: 888 },
        {id:3, name: "Tablet", price: 666 }
        ];

        res.json(products); //sends JSON resp to frontend
}

const createProduct = (req, res)=> {
  const {name, price}= req.body;

  if(!name || !price){
    return res.status(400).json({ message: "Name amd price are required."});
  }

  const newProduct = {
    id: Date.now(), //usong current timestamps as unique id
    name,
    price,
  };

  res.status(201).json(newProduct); //send newp with 201 status code
}

module.exports = {
  getAllProducts,
  createProduct,
};