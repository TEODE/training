/**
 * Created by vincent on 11/11/15.
 */
var $ = require('jquery');

function parseUserJson(userJson) {
    return {
        loggedIn: true,
        fullName: userJson.firstName + ' ' + userJson.lastName
    };
}

function fetchCurrentUser(callback) {
    return $.ajax({
        type: 'GET',
        url: 'http://localhost:8000',
        success: function(userJson) {
            callback(parseUserJson(userJson));
        }
    });
}

module.exports = fetchCurrentUser;