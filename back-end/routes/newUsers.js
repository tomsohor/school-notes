const Router = require('express').Router();
const NewUser = require('../model/newUserModle');

Router.route('/addNewUser').post((req,res) => {
    NewUser.create(req.body).then(()=> res.json('New user was added...'))
    .catch(err => res.status(400).json("Err: "+ err));
})

module.exports = Router;