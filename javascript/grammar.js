var obj = {
    one: 1,
    two: 2
};

for (x in obj) {
    if (obj.hasOwnProperty(x)){
        console.log(x);
    }
}