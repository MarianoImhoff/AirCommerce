const express = require('express');
const { Op } = require('sequelize');
const router = express.Router();
const { Users, Products, Orders, Reviews } = require('../models');

<<<<<<< HEAD
=======
/* router.get("/",(req,res)=>{
    Products.findAll()
    .then(products => res.status(200).send(products))
    .catch(error => console.log(error))
}); */

>>>>>>> cdf4317d6c0db2bba0bc3b6a559baf6d58b1c075
router.get('/', async (req, res) => {
  try {
    const products = await Products.findAll();
    res.status(200).send(products);
  } catch (error) {
    res.status(400).send(error);
  }
});

<<<<<<< HEAD
router.get('/:search', async (req, res) => {
=======
/* router.get("/:id",(req,res)=>{
    const {id} = req.params
    Products.findOne({where:{id}})
    .then(products => res.status(200).send(products))
    .catch(error => console.log(error))
}); */

router.get('/:search', async (req, res) => {
  console.log("Estoy sercheando", req.params)
>>>>>>> cdf4317d6c0db2bba0bc3b6a559baf6d58b1c075
  try {
    let search = req.params.search;
    search = search.toLowerCase();
    const product = await Products.findAll({
      where: {
        [Op.or]: [{ brand: search }, { model: search }, { color: search }],
      },
    });
    res.status(200).send(product);
  } catch (error) {
    console.log(error);
  }
});

<<<<<<< HEAD
router.get('/sortBy/:type/:search', async (req, res) => {
  try {
    let sort = req.params.type;
    let search = req.params.search;
    search = search.toLowerCase();
    const sortProduct = await Products.findAll({
      where: {
        [Op.or]: [{ brand: search }, { model: search }, { color: search }],
      },
      order: [sort],
    });
    res.status(200).send(sortProduct);
  } catch (error) {
    console.log(error);
  }
});

router.get('/sortBy/:type', async (req, res) => {
  try {
    let sort = req.params.type;
    const sortProduct = await Products.findAll({
      order: [sort],
    });
    res.status(200).send(sortProduct);
  } catch (error) {
    console.log(error);
  }
});

router.get('/single/:id', async (req, res) => {
  try {
    let id = req.params.id;
=======
router.get('/single/:id', async (req, res) => {
  try {
    let id = req.params.id
    console.log(id)
>>>>>>> cdf4317d6c0db2bba0bc3b6a559baf6d58b1c075
    const product = await Products.findOne({ where: { id } });
    res.status(200).send(product);
  } catch (error) {
    res.status(400).send(error);
  }
});

<<<<<<< HEAD
=======
/* router.post("/",(req,res)=>{
    Products.create(req.body)
    .then(product => res.status(201).send(product))
    .catch(error => console.log(error))
}) */

>>>>>>> cdf4317d6c0db2bba0bc3b6a559baf6d58b1c075
router.post('/', async (req, res) => {
  try {
    const product = await Products.create(req.body);
    res.status(201).send(product);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Products.findOne({ where: { id } });
    const productUpdate = await Products.update(req.body, {
      where: { id: product.id },
    });
    res.status(201).send(productUpdate);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
<<<<<<< HEAD
=======

>>>>>>> cdf4317d6c0db2bba0bc3b6a559baf6d58b1c075
