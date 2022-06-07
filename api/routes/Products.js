const express = require("express");
const {Op} = require("sequelize")
const router = express.Router()
const passport = require("passport")
const {Users, Products, Orders} = require("../models")

/* router.get("/",(req,res)=>{
    Products.findAll()
    .then(products => res.status(200).send(products))
    .catch(error => console.log(error))
}); */

router.get("/",async (req,res)=>{
    try{
        const products = await Products.findAll()
        res.status(200).send(products)
    }catch(error){res.status(400).send(error)}
})

/* router.get("/:id",(req,res)=>{
    const {id} = req.params
    Products.findOne({where:{id}})
    .then(products => res.status(200).send(products))
    .catch(error => console.log(error))
}); */

router.get("/:id",async(req,res)=>{
    try{
        const {id} = req.params
        const products = Products.findOne({where:{id}})
        res.status(200).send(products)
    }catch(error){res.status(400).send(error)}
})


/* router.post("/",(req,res)=>{
    Products.create(req.body)
    .then(product => res.status(201).send(product))
    .catch(error => console.log(error))
}) */

router.post("/",async(req,res)=>{
    try{
        const product = await Products.create(req.body)
        res.status(201).send(product)
    }catch(error){res.status(400).send(error)}
})

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

router.put("/add",async(req,res)=>{
    try{
        const {productId, userId} = req.body
        const product = await Products.findOne({where:{productId}})
        const newProduct = await Products.create(req.body)
        const user = await Users.findByPk(userId)
        newProduct.addUsers(user)
        res.sendStatus(200)

    }catch(error){res.status(400).send(error)} 

});


router.put("/:id", async(req,res)=>{
    try{
        const {id} = req.params
        const product = await Products.findOne({where:{id}})
        const productUpdate = await Products.update(req.body,{where:{id:product.id}})
        res.status(201).send(productUpdate)
    }catch(error){res.status(400).send(error)}
})

/* router.delete("/remove",(req,res)=>{
    const {productId, userId}= req.body
    Products.destroy({where:{productId}})
    .then(()=>res.sendStatus(200))
    .catch(error => console.log(error))
}) */

router.delete("/remove",async(req,res)=>{
    try{
        
        const {barcode}= req.body
        await Products.destroy({where:{barcode}})
        res.sendStatus(200) 
    }catch(error){res.status(400).send(error)}
})

module.exports= router