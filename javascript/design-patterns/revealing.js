/* Revealing pattern
define of all functions and variables in the private scope
 and return an anonymous object along with pointers to var/functions to be revealed as public
 */
var myRevealingModule = (function(){

    var name = 'John Smith';
    var age = 40;

    function updatePerson(){
        name = 'John Smith Updated';
    }
    function setPerson(){
        name = 'John Smith Set';
    }
    function getPerson(){
        return name;
    }
    return {
        set: setPerson,
        get: getPerson
    }
}());
//example
myRevealingModule.set();
console.log(myRevealingModule.get());
//caveat: a private function refers to a public function that cannot be overridden