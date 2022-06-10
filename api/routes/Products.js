const express = require('express');
const { Op } = require('sequelize');
const router = express.Router();
const { Users, Products, Orders, Reviews } = require('../models');

/* router.get("/",(req,res)=>{
    Products.findAll()
    .then(products => res.status(200).send(products))
    .catch(error => console.log(error))
}); */

router.get('/', async (req, res) => {
  try {
    const products = await Products.findAll();
    res.status(200).send(products);
  } catch (error) {
    res.status(400).send(error);
  }
});

/* router.get("/:id",(req,res)=>{
    const {id} = req.params
    Products.findOne({where:{id}})
    .then(products => res.status(200).send(products))
    .catch(error => console.log(error))
}); */

router.get('/:search', async (req, res) => {
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

router.get('/:id', async (req, res) => {
  try {
    let id = req.params.id
    const product = await Products.findOne({ where: { id } });
    res.status(200).send(product);
  } catch (error) {
    res.status(400).send(error);
  }
});

/* router.post("/",(req,res)=>{
    Products.create(req.body)
    .then(product => res.status(201).send(product))
    .catch(error => console.log(error))
}) */

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
