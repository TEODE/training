/**
 * Outward appearance the the world which may conceal a different reality
 * Hide true complexity behind higher-level interface
 */

// Common unoptimized code to check the existence of features
// for cross browser compatibility
var addMyEvent = function( el,ev,fn ){
    if(el.addEventListener){
        el.addEventListener( ev,fn, false );
    }else if(el.attachEvent){
        el.attachEvent( 'on'+ ev, fn ); }
    else{
        el['on' + ev] = fn;
    }
};

// Facade + Module patterns. Facade simplify the access to the methods

var module = (function() {
    var _private = {
        i:5,
        get: function() {
            console.log('current value' + this.i);
        },
        set: function( val ) {
            this.i = val;
        },
        run: function () {
            console.log('running');
        },
        jump: function () {
            console.log('jumping');
        }
    };
    return {
        facade: function( args ) {
            _private.set(args.val);
            _private.get();
            if ( args.run ) {
                _private.run();
            }
        }
    }
}());
module.facade({run: true, val:10}); //outputs current value: 10, running