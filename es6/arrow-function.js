/**
 * Created by vincent on 16/10/15.
 */
function Car() { // We could use the new Class feature in ES6 instead
    this.speed = 0;

    setInterval(() => {
        this.speed += 5;
        console.log
        console.log('now going: ' + this.speed);
    }, 1000);
}

let auto = new Car();

let x = [0, 1, 2];
x.map( x => console.log(x * x)); // arrow function