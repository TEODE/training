/*
Encapsulate method invocation, requests or operations into a single object
and gives the ability to both parameterize and pass method calls around.
 */

(function(){
    var CarManager = {

        // request information
        requestInfo: function ( model, id ) {
            return "The information for " + model +
                    " with ID " + id + " is foobar";
        },

        // purchase the car
        buyVehicle: function ( model, id ){
            return " You have successfully purchased Itme "
            + id + ", a " + model;
        },

        // arrange a viewing
        arrangeViewing: function ( model, id ){
            return "You have successfully booked a viewing of "
            + model + " ( " + id + " ) ";
        }
    };
})();