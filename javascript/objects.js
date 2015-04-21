var obj_empty = {};


var stooge = {
    "first-name": "Jerome",
    "last-name": "Howard"
};


var flight = {
    airline: "Oceanic",
    number: 815,
    departure: {
        IATA: "SYD",
        time: "2004-09-22 14:55",
        city: "Sydney"
    },
    arrival: {
        IATA: "LAX",
        time: "2004-09-23 10:42",
        city: "Los Angeles"
    }
};

console.info(stooge["first-name"]);
console.info(flight.departure.IATA);

console.info(stooge["middle-name"] || "none");
console.info(flight.status || "unknown");

try {
    console.info(flight.equipment.model); // throw "TypeError"s
} catch (exception){
    console.info(exception);
}

var x = stooge;
x.nickname = 'Curly';
var nick = stooge.nickname;
    // nick is 'Curly' because x and stooge
    // are references to the same object

if (typeof Object.beget !== "function") {
    Object.beget = function (o) {
        var F = function () {};
        F.prototype = o;
        return new F();
    }
}

var  another_stooge = Object.beget(stooge);
another_stooge["first-name"]= "Harry";
another_stooge["last-name"] = "Moses";
another_stooge.nickname = "Moe";

delete another_stooge.nickname; //remove a property from object

console.log(another_stooge);

function createName(name) {
    if (typeof name === "string") {
        return name;
    }
    else {
        return name.join(" ");
    }
}
var greetingMessage = 'Greetings, ' + createName(["Sam", "Smith"]);
console.log(greetingMessage);
