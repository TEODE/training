/**
 * Created by vincent on 9/10/15.
 */

// Connecting to the database
var Sequelize = require('sequelize')
    , sequelize = new Sequelize('sequelize', 'vincent', {}, {
        dialect: "postgres",
        port:    5432
    });

sequelize
    .authenticate()
    .then(function(err) {
        console.log('Connection has been established successfully.');
    }, function (err) {
        console.log('Unable to connect to the database:', err);
    });

// Defining the model
var User = sequelize.define('User', {
    username: Sequelize.STRING,
    password: Sequelize.STRING
});

// Synchronizing the schema (watch out this is asynchronous
// so it may fail if adding a record happens during recreation of the table)
sequelize
    .sync()
    .then(function(err) {
        console.log('Synchronization worked!');

        // Creating and persisting instances
        var username = 'user'+Math.floor(Math.random() * 100);

        var user = User.create({
            username: username,
            password: 'i-am-so-great'
        }).then(function(user) {
            console.log('User "'+ username + '" added!');

            // Reading the data from the database
            User
                .findAll({ where: { username: username }})
                .then(function(user) {
                    if (!user) {
                        console.log("No user '" + username + "' has been found.");
                    } else {
                        console.log("Hello " + user[0].username + "!");
                        console.log("All attributes of user: ", user[0].get());
                    }
                });

        });

    }, function (err) {
        console.log('An error occurred while creating the table:', err);
    });



