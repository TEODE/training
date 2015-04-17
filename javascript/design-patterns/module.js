// Help in keeping the code for a project organized, base on object literal notation

/*
Object literals
 */
var myObjectLiteral = {
    variableKey: 'variableValue',
    functionKey: function(){
        //...
    }
};

var myModule = {
    myProperty: 'someValue',
    // object literals can contain properties and methods.
    // here, another object is defined for configuration purposes
    myConfig: {
        useCaching: true,
        language: 'en'
    },
    // a very basic method
    myMethod: function () {
        console.log('I can haz functionality?')
    },
    // output a value based on current configuration
    myMethod2: function () {
        console.log('Caching is:' + (this.myConfig.useCaching) ? 'enabled' : 'disabled');
    },
    // override the current configuration
    myMethod3: function (newConfig) {
        if (typeof newConfig == 'object') {
            this.myConfig = newConfig;
            console.log(this.myConfig.language);
        }
    }
};

myModule.myMethod(); // I can haz functionality
myModule.myMethod2(); // outputs enabled
myModule.myMethod3({
    language: 'fr',
    useCaching: false
}); // fr

/*
Module pattern
originally designed to provide both private/public encapsulation for classes
 */
var testModule  = (function () {
    var counter = 0;
    return {
        incrementCounter: function () {
            return counter++;
        },
        resetCounter: function () {
            console.log('counter value prior to reset:' + counter);
            counter = 0;
        }
    }
})();

// test
testModule.incrementCounter();
testModule.resetCounter();

var myNamespace = (function () {

    var myPrivateVar = 0;
    var myPrivateMethod = function (someText) {
        console.log(sometText);
    };
    return {

        myPublicVar: 'foo',

        myPublicFunction: function (bar) {
            myPrivateVar++;
            myPrivateMethod(bar);
        }
    };
})();

var basketModule = (function () {
    var basket = [] // private
    function doSomethingPrivate() {
        //...
    }

    function doSomethingElsePrivate() {
        //...
    }

    return { //exposed to public
        addItem: function (values) {
            basket.push(values);
        },
        getItemCount: function () {
            return basket.length;
        },
        doSomething: doSomethingPrivate(),
        getTotal: function () {
            var q = this.getItemCount(),
            p = 0;
            while (q--) {
                p += basket[q].price;
            }
            return p;
        }
    }
})();

// basketModule is an object with properties which can also be methods
basketModule.addItem({
    item: 'bread',
    price: 0.5
});
basketModule.addItem({
    item: 'butter',
    price: 0.3

});

console.log(basketModule.getItemCount());
console.log(basketModule.getTotal());

// however the following will not work
console.log(basketModule.basket); //(undefined as not inside the returned object)
try {
    console.log(basket); //(only exists within the scope of the closure
} catch (e) {
    console.log(e);
}

// reusable template for this pattern
var someModule = (function () {

    //private attributes
    var privateVar = 5;

    //private method
    var privateMethod = function () {
        return 'Private Test';
    };

    return {
        //public attributes
        publicVar: 10,

        //public methods
        publicMethod: function () {
            return ' Followed By Public Test ';
        },

        //let's access the private members
        getData: function () {
            return privateMethod() + this.publicMethod() + privateVar;
        }
    }

})(); //the parenthesis here cause the anonymous function te execute and return

someModule.getData();