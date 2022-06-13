const express = require('express');
const { Users } = require('../models');
const router = express.Router();
const { Op } = require('sequelize');
const { AuthAdmin } = require('../controllers/middleware/auth'); //MiddleWare para corroborar si el user es un Admin o un simple plebello

// Se la da el rol a un usuario que solo puede ser brindado por un SuperAdmin

router.put('/giveRol/:id', AuthAdmin, async (req, res) => {
  const id = req.params.id
  await Users.update({ isAdmin: true }, { where: { id } });
  res.status(201).send('Roles brindados al usuario');
});

// Se la quita el rol a un usuario que solo puede ser quitado por un SuperAdmin

router.put('/takeRol/:id', AuthAdmin, async (req, res) => {
  await Users.update({ isAdmin: false }, { where: { id: req.body.id } });
  res.status(201).send('Rol eliminado');
});

// Le aparece todos los usuarios al SuperAdmin

router.get('/users/:id', AuthAdmin, async (req, res) => {
  const users = await Users.findAll({
    // OP.NOT FUNCIONA PARA NO MOSTRARSE A UNO MISMO EN LA DB
    where: { id: { [Op.not]: req.params.id } },
  });
  res.send(users);
});

router.get('/:id', AuthAdmin, async (req, res) => {
  console.log(req.params)
  const users = await Users.findAll({
    // OP.NOT FUNCIONA PARA NO MOSTRARSE A UNO MISMO EN LA DB
    where: { id: { [Op.not]: req.params.id } },
  });
  res.send(users);
});

module.exports = router;
