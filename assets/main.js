let myLibrary = [];

function Book(title, author, pageNumber, status) {
  this.title = title;
  this.author = author;
  this.pageNumber = pageNumber;
  this.status = status;
}

Book.prototype.showBook = function () {
  return {title: this.title,
          author: this.author,
          pageNumber: this.pageNumber,
          status: this.status
  }
}

function addBookToLibrary() {
  
}

var newBook = new Book("Ender's game", "C", 123, true );
console.log(newBook.showBook());
