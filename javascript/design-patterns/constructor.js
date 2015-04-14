/* Basic constructor
  Instanciate a new object with the members defined
  'this' is the reference to the new object created
  caveat: difficult inheritance, requires to overwrite
  toString() for instance
 */
function Car (model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;

    this.toString = function () {
        return this.model + " has done " + this.miles + " miles";
    };
}

var civic = new Car("Honda", "2009", "1000");
var mondeo = new Car("Ford Mondeo", "2010", "5000");

console.log(civic.toString());
console.log(mondeo.toString());

/* Constructor with prototypes
   Note here that we are using Object.prototype.newMethod rather than
   Object.prototype so as to avoid redefining the prototype object
   toString2 will be shared by all the Car objects
 */
Car.prototype.toString2 = function () {
    return this.model + " has done " + this.miles + " miles";
};

var fiat = new Car("Uno", "2005", "4000");
console.log(fiat.toString2());