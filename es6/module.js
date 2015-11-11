/**
 * Created by vincent on 16/10/15.
 */
import $ from './lib/jquery';
var x = 123;

// The current scope is not global
console.log('$' in window); // false
console.log('x' in window); // false

// `this` still refers to the global scope
console.log(this === window); //true