/**
 * Method invocation pattern
 */
var myObject = {
    value: 0,
    increment: function (inc) {
        this.value += typeof inc === "number" ? inc : 1;
    }
}

myObject.increment();
console.log(myObject.value);

myObject.increment(3);
console.log(myObject.value);

var add = function (x, y) {
    return x+y;
}

/**
 * Function invocation pattern + arguments
 */
var sum = function () {
    var i, sum = 0;
    for (i = 0; i < arguments.length; i += 1) {
        sum += arguments[i];
    }
    return sum;
}
console.log(sum(2,3,5,101));

// augment myObject with a double method
myObject.double = function() {
    var that = this; // use an alias for this inside the method

    var helper = function() {
        that.value = add(that.value, that.value);


    };
    helper();

};
// Invoke double as a method
myObject.double();
console.log(myObject.value)

/**
 * Contructor invokation pattern
 */
// Create a constructor function called Quo
// It makes an object with a property status
var Quo = function (string){
    this.status = string;
};
// Give all instances of Quo a public method called get_status
Quo.prototype.get_status = function () {
    return this.status;
};
// Make an instance of Quo
var myQuo = new Quo("confused");
console.log(myQuo.get_status());

/**
 * Apply invocation pattern
 */
var array = [2,3];
var sum = add.apply(null, array);
console.log(sum);

var statusObject = {
  status: 'A-OK'
};
// statusObject does not inherit from Quo.prototype but we can invoke get_status method on statusObject even it
// does have such method
var status = Quo.prototype.get_status.apply(statusObject);
console.log(status); // status is 'A-OK'

/**
 * Exceptions
 */
var add = function(a, b) {
     if (typeof a !== "number" || typeof b !== "number") {
            throw {
                name: 'TypeError',
                message: 'add needs numbers'
            }
     }
    return a + b;
}

var try_it = function() {

    try {
        add("seven");
    } catch(e) {
        console.log(e.name + ": "+ e.message);
    }
}
try_it();

/**
 * Augmenting types
 */
// By augmenting 'Function.prototype' with a 'method' method we no longer need to type the name of the prototype
// property
Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this;
};
// create an integer method
Number.method('integer', function(){
   return Math[this < 0 ? 'ceil' : 'floor'](this);
});
console.log((-10/3).integer());
// create a trim method
String.method('trim', function(){
   return this.replace(/^\s+|\s+$/g,'');
});
console.log("-"+"    I'm spaceless   ".trim()+"-");
// Add a method conditionally
Function.prototype.method = function (name, func) {
    if (!this.prototype[name]) {
        this.prototype[name] = func;
    }
};

/**
 * Recursion
 */
// The setup stacks all of the discs on the source post with smaller discs on top of larger discs.
// The goal is to move the stack to the destination post by moving one disc at a time to another post,
// never placing a larger disc on a smaller disc
var hanoi = {
    counter: 0,
    run: function (disc, src, aux, dst) {
        if (disc > 0) {
            this.counter++;
            this.run(disc - 1, src, dst, aux);
            console.log('Move disc ' + disc + ' from ' + src + ' to ' + dst);
            this.run(disc - 1, aux, src, dst);
        }
    }
};
hanoi.run(3, "Src", "Aux", "Dst");
//console.log(hanoi.counter);

// Define a walk_the_DOM function that visits every
// node of the tree in HTML source order, starting
// from some given node. It invokes a function,
// passing it each node in turn. walk_the_DOM calls
// itself to process each of the child nodes.
var walk_the_DOM = function walk(node, func) {
    func(node);
    node = node.firstChild;
    while (node) {
        walk(node,func);
        node = node.nextSibling;
    }
};

// Define a getElementsByAttribute function. It
// takes an attribute name string and an optional
// matching value. It calls walk_the_DOM, passing it a
// function that looks for an attribute name in the
// node. The matching nodes are accumulated in a
// results array.
var getElementByAttribute = function (att, value) {
    var results = [];

    walk_the_DOM(document.body, function (node) {
        var actual = node.nodeType === 1 && node.getAttribute(att);
        if (typeof actual === 'string' &&
                (actual === value || typeof value != 'string')) {
           results.push(node);
        }
    });
    return results;
};

// Make a factorial function with tail
// recursion. It is tail recursive because
// it returns the result of calling itself.
// JavaScript does not currently optimize this form.
var factorial = function (i, a) {
    a = a || 1;
    if (i < 1) {
        return a;
    }
    return factorial(i - 1, a * i);
};
console.log(factorial(4));

/**
 * Scope
 */
var foo = function ( ) {
    var a = 3, b = 5;

    var bar = function ( ) {
        var b = 7, c = 11;

        console.log("a before:"+a);
        console.log("b in bar:"+b);

        a += b + c;
        console.log("a after:"+a);

    };

    bar( );
    console.log("b in foo:"+b);
};
foo( );

/**
 * Closure
 */
// We are not assigning a function to myObject. We are assigning the result of invoking that function.
var myObject = function ( ) {
    var value = 0;

    return {
        increment: function (inc) {
            value += typeof inc === "number" ? inc : 1;
        },
        getValue: function ( ) {
            return value;
        }
    }
}( )
console.log(myObject.increment(3));
console.log(myObject.getValue());

// Create a maker function called quo. It makes an
// object with a get_status method and a private
// status property.

var quo = function (status) {
    return {
        get_status: function ( ) {
            return status;
        }
    };
};

// Make an instance of Quo
var myQuo = quo("amazed");
console.log(myQuo.get_status());

/**
 * Callbacks
 */
// Asynchronous request provides a callback function that will be invoked when the server's response is received
var prepare_the_request = function ( ) {};
var send_request_asynchronously = function ( ) {}; //fictitious functions for example sake

request = prepare_the_request( );
send_request_asynchronously(request, function (response) {
        display(response);
    });

/**
 * Modules
 */
String.method('deentityify', function ( ){

    // The entity table. It maps entity names to characters
    var entity = {
        quot:   '"',
        lt:     '<',
        gt:     '>'
    };

    // Retruen the deentityify method
    return function ( ) {
        // This is the deentityify method. It calls the String replace method, looking for substrings that start
        // with '&' and end with ';'. If the characters in between are in the entity table, then replace the
        // entity with the character from the table.

        return this.replace(/&([^&;]+);/g,
            function (a,b) {
                var r = entity[b];;
                return typeof r === 'string' ? r : a;
            }
        );

    };
}());
console.log('&lt;&quot;&gt;'.deentityify(  ));

var serial_maker = function (  ) {
// Produce an object that produces unique strings. A
// unique string is made up of two parts: a prefix
// and a sequence number. The object comes with
// methods for setting the prefix and sequence
// number, and a gensym method that produces unique
// strings.
    var prefix = '';
    var seq = 0;
    return {
        set_prefix: function (p) {
            prefix = String(p);
        },
        set_seq: function (s) {
            seq = s; },
        gensym: function (  ) {
            var result = prefix + seq;
            seq += 1;
            return result;
        } };
}();
var seqer = serial_maker;
seqer.set_prefix('Q');
seqer.set_seq(1000);
console.log("seqer: "+seqer.gensym(  ));

