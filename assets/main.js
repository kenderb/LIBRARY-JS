const myLibrary = [];

function Book(title, author, pageNumber, status) {
  this.title = title;
  this.author = author;
  this.pageNumber = pageNumber;
  this.status = status;
}

Book.prototype.showBook = function showBook() {
  return {
    title: this.title,
    author: this.author,
    pageNumber: this.pageNumber,
    status: this.status,
  };
};

Book.prototype.isValid = function isValid() {
  return (this.title && this.author && this.pageNumber);
};

function getBookInfo() {
  const bookTitle = document.querySelector('#Title').value;
  const authorName = document.querySelector('#Author').value;
  const pages = document.querySelector('#numberPage').value;
  const isRead = document.querySelector('#Read').checked;
  const newBook = new Book(bookTitle, authorName, pages, isRead);
  if (!newBook.isValid()) {
    console.log('no valid');
    return false;
  }
  myLibrary.push(newBook);
  console.log('you pass');
  console.log(myLibrary);
  return myLibrary;
}

function addBookToLibrary() {
  return true;
}

const addBtn = document.querySelector('#Add');
addBtn.addEventListener('click', getBookInfo);
addBookToLibrary();

