/**
 * Objects with the same intrinsic data can be replaced with a single shared object.
 * Case we need to create a large number of similar objects.
 */

// flyweight optimized version without extrinsic states
var Book = function ( id, title, author, genre, pageCount, publisherID, ISBN) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.publisherID = publisherID;
    this.ISBN = ISBN;
};
// Basic singleton factory
var BookFactory = (function () {
  var existingBooks = {};
    return {
        createBook: function (title, author, genre, pageCount, publisherID, ISBN) {
            // Find out if a particular book meta-data combination has been created before
            var existingBook = existingBooks[ISBN];
            if (existingBook) {
                return existingBook;
            } else {
                // if not, let's create a new instance of it and store it
                var book = new Book(title, author, genre, pageCount, publisherID, ISBN);
                existingBooks[ISBN] =  book;
                return book;
            }
        }
    }
});
// Managing the extrinsic states
// BookRecordManager singleton
var BookRecordManager = (function () {
   var BookRecordDatabase = {};
    return {
        // add a new book into the library system
        addBookRecord: function (id, title, author, genre, pageCount,
                                 publisherID, ISBN, checkoutMember, newReturnDate) {
            var book = bookFactory.createBook(tilte, author, genre, pageCount,
                publisherID, ISBN);
            bookRecordDatabase[id] = {
                checkoutMember: checkoutMember,
                checkoutDate: checkoutDate,
                dueReturnDate: dueReturnDate,
                availability: availability,
                book: book
            };
        },
        updateCheckoutStatus: function (bookID, newStatus, checkoutDate, checkoutMember, newReturnDate) { var record = bookRecordDatabase[bookID];
            record.availability = newStatus;
            record.checkoutDate = checkoutDate;
            record.checkoutMember = checkoutMember;
            record.dueReturnDate = newReturnDate;
        },
        extendCheckoutPeriod: function (bookID, newReturnDate) { bookRecordDatabase[bookID].dueReturnDate = newReturnDate;
        },
        isPastDue: function (bookID) {
            var currentDate = new Date();
            return currentDate.getTime() > Date.parse(bookRecordDatabase[bookID].dueReturnDate);
        }
    }
});