// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Burger model
var db = require("../models");


// Routes
// =============================================================
module.exports = function(app) {

    // GET route for getting all of the burgers
    app.get("/", function(req, res) {
      // findAll returns all entries for a table when used with no options
      db.Burger.findAll({}).then(function(dbBurger) {
        // We have access to the burgers as an argument inside of the callback function
        res.json(dbBurger);
      });
    });
  
    // POST route for saving a new burger
    app.post("/api/burgers", function(req, res) {
      console.log(req.body);
      // create takes an argument of an object describing the item we want to
      // insert into our table. In this case we just we pass in an object with a text
      // and complete property (req.body)
      db.Burger.create({
        burger_name: req.body.burger_name,
        devoured: req.body.devoured
      }).then(function(dbBurger) {
        // We have access to the new burger as an argument inside of the callback function
        res.json(dbBurger);
      });
    });
  
    // PUT route for updating burgers. We can get the updated burger data from req.body
    app.put("/api/burgers/:id", function(req, res) {
        // Update takes in an object describing the properties we want to update, and
        // we use where to describe which objects we want to update
        db.Burger.update({
            devoured: req.body.devoured
        }, {
            where: {
                id: req.params.id
            }
        }).then(function(dbBurger) {
            if (dbBurger.changedRows === 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            } else {
                res.json(dbBurger);
                res.status(200).end();
            }
        });
    });
  };