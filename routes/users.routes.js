const router = require('express').Router();
const controllers = require('../controllers/users.controllers');
const cors = require('cors');
 module.exports = server=>{

    

    // Create a new Tutorial
  router.post("/", cors(),controllers.create);

  // Retrieve all controllers
  router.get("/", controllers.findAll);

  // Retrieve a single Tutorial with id
  router.get("/:id", controllers.findOne);

  // Update a Tutorial with id
  router.put("/:id", controllers.update);

  // Delete a Tutorial with id
  router.delete("/:id", controllers.delete);

  // Create a new Tutorial
  router.delete("/", controllers.deleteAll);

    server.use('/api/users',router);
};

