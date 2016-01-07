/**
 * Created by Vincent Giraud on 22/12/15.
 */

import express from 'express';
import http from 'http';
import massive from 'massive';

var app = express();
var connectionString = "postgres://vincent@localhost/massive";

// connect to Massive and get the db instance. You can safely use the
// convenience sync method here because its on app load
// you can also use loadSync - it's an alias
var massiveInstance = massive.connectSync({connectionString : connectionString});

// Set a reference to the massive instance on Express' app:
app.set('db', massiveInstance);
http.createServer(app).listen(8080);

var db = app.get('db');

// SQL Files as Functions
db.inStockProducts(function(err,products){
    //products is a results array
    //console.log(products);
});

// Attached Tables
db.productByName(['Product 1', 'Product 2'], function(err,products){
    //products is a results array
    //console.log(products);
});

db.Users.find(1, function(err,res){
    //user with ID 1
    //console.log(res);
});

// Full Text Search Built In
db.Users.search({columns: ["Email"], term: "test@test.com"}, function(err, users) {
    // all users with the word 'test' in their email
    //console.log(users);
});