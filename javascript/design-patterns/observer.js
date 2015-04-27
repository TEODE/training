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

    // Subscribe to events of interest
    // with a specific topic name and a
    // callback function, to be executed
    // when the topic/event is observed
    q.subscribe = function ( topic, func ) {

        if (!topics[topic]) {
            topics[topic] = [];
        }

        var token = (++subUid).toString();
        topics[topic].push({
            token: token,
            func: func
        });
        return token;

    };

    // Unsubscribe from a specific
    // topic, based on a tokenized reference
    // to the subscription
    q.unsubscribe = function( token ) {
        for ( var m in topics ) {
            if ( topics[m] ) {
                for (var i = 0, j = topics[m].length; i < j; i++) {
                    if (topics[m][i].token === token) {
                        topics[m].splice(i, 1);
                        return token;
                    }
                }
            }
        }
    };
})( pubsub );

/*]
Example 1: basic use of publishers and subscribers
 */

var testHandler = function (topics, data) {
    console.log(topics + ": " + data);
};

// Subscribers basically "subscribe" (or listen)
// And once they've been "notified" their callback functions are invoked
var testSubscription = pubsub.subscribe('example1', testHandler);

// Publishers are in charge of "publishing" notifications about events
pubsub.publish('example1', 'hello world!');
pubsub.publish('example1', ['test', 'a', 'b', 'c']);
pubsub.publish('example1', [{
    'color': 'blue'
}, {
    'test': 'hello'
}]);

// Unsubscribe if you no longer wish to be notified
pubsub.unsubscribe(testSubscription);
// This will fail
pubsub.publish('example1', 'hello again! (this will fail)')


/*
Example 2: UI notifications using pub/sub
 */
var grid = {

    refreshData: function(){
        console.log('retrieved latest data from data cache');
        console.log('updated grid component');
    },

    updateCounter: function(){
        console.log('data last updated at: ' + getCurrentTime())
    }
};

// a very basic mediator

var gridUpdate = function( topics, data ) {
    grid.refreshData();
    grid.updateCounter();
}

var dataSubscription = pubsub.subscribe( 'dataUpdated', gridUpdate );
pubsub.publish( 'dataUpdated', 'new stock data available!' );
pubsub.publish( 'dataUpdated', 'new stock data available!' );

function getCurrentTime() {
    var date = new Date(),
        m = date.getMonth() + 1,
        d = date.getDate(),
        y = date.getFullYear(),
        t = date.toLocaleTimeString().toLowerCase();
        return (m + '/' + d + '/' + y + ' ' + t);
}

