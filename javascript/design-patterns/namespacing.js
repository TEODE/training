// top-level namespace being assigned an object literal
var myApp = myApp || {};

// a convenience function for parsing string namespaces and
// automatically generating nested namespaces
function extend( ns, ns_string ) {
    var part = ns_string.split('.'),
        parent = ns,
        pl, i;

    pl = parts.length;
    for (i=0; i<pl; i++) {
        // create a property if it doesn't exist
        if (typeof parent[parts[i] == 'undefined']) {
            parent[parts[i]] = [];
        }

        parent = parent[parts[i]];
    }

    return parent;
}