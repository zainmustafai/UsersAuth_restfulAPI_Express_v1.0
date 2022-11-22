// const database = require("../models");
const User = require("../models/user.model");

// Create and Save a new newUser
exports.create = async (req, res) => {
  if (!req.body.firstName) {
    res.status(400).send({
      message: "content canot be empty",
    });
    return;
  } // if statement ends her

  const newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    emailAddress: req.body.emailAddress,
    password: req.body.password,
  });

  const alreadyUser = await User.findOne({
    emailAddress: req.body.emailAddress,
  }); // Check if user already exists or not.

  if (alreadyUser) {
    res.send({
      message: "Email Already Exists!",
    });
    return;
  }
  newUser
    .save(newUser)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    });
};

// Retrieve all Users from the database.
exports.findAll = async (req, res) => {
  const emailAddress = req.body.emailAddress;
  var condition = emailAddress ? { emailAddress: { $regex: new RegExp(emailAddress), $options: "i" } } : {};

  await User.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Users."
      });
    });
};

// Find a single User with an email
exports.findOne = async (req, res) => {
    const id = req.params.id;

    User.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found User with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving User with id=" + id });
      });
};

// Update a User by the id in the request
exports.update = (req, res) => {};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {};

// Delete all Users from the database.
exports.deleteAll = (req, res) => {};
