module.exports = function(sequelize, Sequelize) {
    // Creates a "Burger" model that matches up with DB
    var Burger = sequelize.define("burger", {
        burger_name: {
            type: Sequelize.STRING
        },
        devoured: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        }
    });
    return Burger;
}
