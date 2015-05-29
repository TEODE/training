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