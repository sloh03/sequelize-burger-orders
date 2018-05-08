// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/config.json");


// Creates a "Burger" model that matches up with DB
var Burger = sequelize.define("burger", {
    burger_name: {
      type: Sequelize.STRING
    },
    devoured: false
});
  
// Syncs with DB, make that table in db (only if it doesn't exist)
Burger.sync();

// Makes the Burger Model available for other files (will also create a table)
module.exports = Burger;