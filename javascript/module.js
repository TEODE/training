var Sayings;
(function (Sayings) {
    var greeter = (function () {
        function Greeter(message) {
            this.greeting = message;
        }
        Greeter.prototype.greet = function () {
            return "Hello, " + this.greeting;
        };
        return Greeter;
    })();
    Sayings.greeter = greeter;
}(Sayings || (Sayings = {})));
var greeter = new Sayings.greeter("world");
console.log(greeter.greet());