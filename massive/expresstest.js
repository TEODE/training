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

// Full JSONB Document Support
var newDoc = {
    title: "Chicken Ate Nine",
    description: "A book about chickens of Kauai",
    price: 99.00,
    tags: [
        {name: "Simplicity", slug: "simple"},
        {name: "Fun for all", slug: "fun-for-all"}
    ]
};

db.saveDoc("my_documents", newDoc, function(err, res) {
    //the table my_documents was created on the fly
    //res is the new document with an ID created for you
    //console.log(res);
});

//full text search...
db.my_documents.searchDoc({
    keys : ["title", "description"],
    term : "Kauai"
}, function(err,docs){
    //docs returned with an on-the-fly Full Text Search for 'Kauai'
    //console.log(docs);

    //comparative queries - these don't use indexing
    db.my_documents.findDoc({"price >": 50.00}, function(err,docs){
        //1 or more documents returned with a price > 50
        //console.log(docs);
    });

//run a deep match passing an array of objects
//again flexing the index we created for you
    db.my_documents.findDoc({tags: [{slug : "simple"}]}, function(err,docs){
        //1 or more documents returned
        //console.log(docs);
    });

//NOT IN
    db.my_documents.findDoc({"id <>": [3,5]}, function(err,docs){
        //documents without ID 3 and 5
        //console.log(docs);
    });

//delete all records!
    db.my_documents.destroy({'body->>description' : "A book about chickens of Kauai"}, function(err, res) {
        //deletes records where description is "A book about chickens of Kauai"
    });


});
