/**
 * Created by vincent on 16/10/15.
 */
'use strict';

function Car() {
    var _this = this;

    // We could use the new Class feature in ES6 instead
    this.speed = 0;

    setInterval(function () {
        _this.speed += 5;
        console.log;
        console.log('now going: ' + _this.speed);
    }, 1000);
}

var auto = new Car();

var x = [0, 1, 2];
x.map(function (x) {
    return console.log(x * x);
}); // arrow function
/**
 * Created by vincent on 15/10/15.
 */
'use strict';

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Car = (function () {
    function Car(make) {
        _classCallCheck(this, Car);

        // constructors!
        this.make = make;
        this.currentSpeed = 25;
    }

    _createClass(Car, [{
        key: 'printCurrentSpeed',
        value: function printCurrentSpeed() {
            console.log(this.make + ' is going ' + this.currentSpeed + ' mph');
        }
    }]);

    return Car;
})();

var RaceCar = (function (_Car) {
    _inherits(RaceCar, _Car);

    // inheritance

    function RaceCar(make, topSpeed) {
        _classCallCheck(this, RaceCar);

        _get(Object.getPrototypeOf(RaceCar.prototype), 'constructor', this).call(this, make); // call the parent constructor with super
        this.topSpeed = topSpeed;
    }

    _createClass(RaceCar, [{
        key: 'goFast',
        value: function goFast() {
            this.currentSpeed = this.topSpeed;
        }
    }]);

    return RaceCar;
})(Car);

var stang = new RaceCar("Mustang", 150);

stang.printCurrentSpeed();
stang.goFast();
stang.printCurrentSpeed();
/**
 * Created by vincent on 16/10/15.
 */
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _libJquery = require('./lib/jquery');

var _libJquery2 = _interopRequireDefault(_libJquery);

var x = 123;

// The current scope is not global
console.log('$' in window); // false
console.log('x' in window); // false

// `this` still refers to the global scope
console.log(undefined === window); //true
