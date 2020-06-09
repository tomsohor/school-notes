const Router = require("express").Router();
const NewUser = require("../model/newUserModle");

Router.get("/addNewUser", (req, res) => {
  NewUser.find()
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json(err));
});

Router.post("/addNewUser", (req, res) => {
  NewUser.create(req.body)
    .then(() => res.json("added..."))
    .catch((err) => res.status(400).json("Err: " + err));
});

module.exports = Router;
