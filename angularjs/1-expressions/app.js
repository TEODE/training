(function(){
    var app = angular.module('store', [ ]);

    app.controller('StoreController', function(){
        this.products = gems;
    });

    var gems = [
        {
            name: 'Dodecahedron',
            price: '2.95',
            description: '. . . ',
            canPurchase: true,
            soldOut: false
        },
        {
            name: 'Another',
            price: '1.9',
            description: 'descrip',
            canPurchase: true,
            soldOut: false
        }
    ]

})();
