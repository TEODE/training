/**
 * Created by Vincent Giraud on 22/12/15.
 */

import massive from 'massive';

//you can use db for 'database name' running on localhost
//or send in everything using 'connectionString'
massive.connect({db : "massive"}, function(err,db){
    db.orders.find();
});