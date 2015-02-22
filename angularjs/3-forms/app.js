(function(){
    var app = angular.module('store', [ ]);

    app.controller('StoreController', function(){
        this.products = gems;
    });

    app.controller('ReviewController', function(){
        this.review = {};

        this.addReview = function(product){
            this.review.createdOn = Date.now();
            product.reviews.push(this.review);
            this.review = {};
        }
    });

    var gems = [
        {
            name: 'Dodecahedron',
            price: '2.95',
            description: '. . . ',
            canPurchase: true,
            soldOut: false,
            images: [
                {
                    full: "dodecahedron-01-full.jpg",
                    thumb: "dodecahedron-01-thumb.jpg"
                },
                {
                    full: "dodecahedron-02-full.jpg",
                    thumb: "dodecahedron-02-thumb.jpg"
                }
            ],
            reviews: [
                {
                    stars: 5,
                    body: "I love this product",
                    author: "joe@thomas.com",
                    createdOn: Date.now()
                },
                {
                    stars: 1,
                    body: "This product sucks",
                    author: "tim@hater.com",
                    createdOn: Date.now()
                }
            ]
        },
        {
            name: 'Pentagonal Gem',
            price: '5.95',
            description: 'description of pentagonal gem',
            canPurchase: true,
            soldOut: false,
            images: [
                {
                    full: "pentagonal-gem-01-full.jpg",
                    thumb: "pentagonal-gem-01-thumb.jpg"
                },
                {
                    full: "pentagonal-gem-02-full.jpg",
                    thumb: "pentagonal-gem-02-thumb.jpg"
                }
            ],
            reviews: [
                {
                    stars: 3,
                    body: "So so",
                    author: "bill@mcdonalds.com",
                    createdOn: Date.now()
                },
                {
                    stars: 1,
                    body: "awful",
                    author: "yo@doco.com",
                    createdOn: Date.now()
                }
            ]
        }
    ]

    app.controller('PanelController', function(){
       this.tab = 1;
       this.selectTab = function(setTab){
            this.tab = setTab;
       };
       this.isSelected = function(checkTab){
            return this.tab === checkTab;
       };
    });

})();
