const express= require("express");
const router= express.Router();


// POST /api/orders
router.post('/', (req, res) => {
  const order = req.body;
  console.log('Received Order:', order);

  //add DB save logic here later

  res.status(201).json({ message: 'Order received!', order });
});

module.exports = router;
