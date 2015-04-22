/*
Observer (publish/subscribe)
 */
var pubsub = {};

(function(q) {
   var topics = {},
       subUid = -1;

    // Publish or broadcast events of interest
    // with a specific topic name and arguments
    // such as the data to pass along
    q.publish = function ( topic, args) {

        if ( !topics[topic]) {
            return false;
        }

        var subscribers = topics[topic],
            len = subscribers ? subscribers.length : 0;

        while (len--) {
            subscribers[len].func(topic, args);
        }

        return this;
    };
});