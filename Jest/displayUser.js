/**
 * Created by vincent on 13/11/15.
 */
var $ = require('jquery');
var fetchCurrentUser = require('./fetchCurrentUser');

$('#button').click(function() {
    fetchCurrentUser(function(user) {
        var loggedText = 'Logged ' + (user.loggedIn ? 'In' : 'Out');
        $('#username').text(user.fullName +  ' - ' + loggedText);
    });
});
