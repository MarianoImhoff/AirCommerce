const express = require('express');
const { Op } = require('sequelize');
const router = express.Router();
const { Users, Products, Orders, Reviews } = require('../models');

// RUTA PARA RECUPERAR EL CARRITO QUE ESTA GUARDADO EN LA DB CUANDO EL USUARIO HACE LOGIN

router.get('/load/:id', (req, res) => {
  const id = req.params.id;
  Orders.findOne({
    where: {
      userNumber: id,
      fullfilled: false,
    },
  })
    .then((order) => {
      res.status(200).send(order);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

// RUTA PARA SALVAR CARRITO EN DB CUANDO EL USUARIO HACE LOGOUT

router.put('/save', (req, res) => {
  console.log(req.body);
  Orders.update(
    {
      products_buy: req.body.products_buy,
      userNumber: req.body.userNumber
    },
    {
      where: {
        userNumber: req.body.userNumber,
        fullfilled: false,
      },
    }
  )
    .then(() => res.sendStatus(200))
    .catch((err) => {
      console.log(err);
    });
});

// RUTA PARA HACER EL CHECKOUT DEL CARRITO

router.put('/checkout', (req, res) => {
  console.log('GUARDANDO CAMBIOS DE CARRITO EN DB...', req.body);
  Orders.update(
    {
      fullfilled: true
    },
    {
      where: {
        userNumber: req.body.userNumber,
        fullfilled: false,
      },
    }
  )
  
  .then(()=> res.sendStatus(200))
  .catch(error => console.log(error))
});

/*  router.put("/add",(req,res)=>{
    const {productId, userId} = req.body
    Products.findOne({where:{productId}})
    .then(products =>{
        Products.create(req.body)
        .then(newProduct=>{
            Users.findByPk(userId)
            .then(user => newProduct.addUser(user))
            .then(()=> res.sendStatus(200))
            .catch(error => console.log(error))
        })
    })
});  */

// RUTA PARA CREAR NUEVA ORDEN VACÍA CUANDO SE REGISTRA NUEVO USUARIO O CUANDO SE HACE CHECKOUT DE CARRITO

router.post('/add', (req, res) => {
  console.log('CREANDO NUEVA ORDEN...', req.body);
  Orders.create({
    userNumber: req.body.userNumber,
  })
    .then((newOrder) => {
      console.log(newOrder);
      res.status(201).send(newOrder);
    })
    .catch((error) => console.log(error));
});

// router.post('/add', async (req, res) => {
//   try {
//     // falta recibir el userId del front, desde el local storage y descomentar todo lo que tenga que ver con userId
//     //decrement actualizar el "1" x el req.params que recibamos del front
//     const productId = req.body.id;
//     /* const userId = req.body.id */
//     const product = await Products.findOne({ where: { id: productId } });
//     const decrement = await product.decrement('stock', { by: 1 });
//     const newOrder = await Orders.create({
//       productNumber: productId /* , userNumber:userId */,
//     });
//     await newOrder.setProduct(productId);

//     /* await newOrder.setUser(userId) */
//     res.sendStatus(200);
//   } catch (error) {
//     console.log(error);
//   }
// });

/* router.delete("/remove",(req,res)=>{
    const {productId, userId}= req.body
    Products.destroy({where:{productId}})
    .then(()=>res.sendStatus(200))
    .catch(error => console.log(error))
}) */

router.delete('/remove', async (req, res) => {
  try {
    // falta recibir el userId del front, desde el local storage
    const productId = req.body.id;
    /* const userId = req.body.id */
    await Orders.destroy({
      where: { productNumber: productId /* , userNumber:userId */ },
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
