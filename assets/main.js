const myLibrary = [];

function Book(title, author, pageNumber, status) {
  this.title = title;
  this.author = author;
  this.pageNumber = pageNumber;
  this.status = status;
}

Book.prototype.showBook = function () {
  return {
    title: this.title,
    author: this.author,
    pageNumber: this.pageNumber,
    status: this.status,
  };
};
Book.prototype.isValid = function () {
  if (this.title && this.author && this.pageNumber) return true;
  return false;
};
function getBookInfo() {
  const bookTitle = document.querySelector('#Title').value;
  const authorName = document.querySelector('#Author').value;
  const pages = document.querySelector('#numberPage').value;
  const isRead = document.querySelector('#Read').checked;
  const newBook = new Book(bookTitle, authorName, pages, isRead);
  console.log(newBook);
  if (!newBook.isValid()) {
    console.log('All field required');
    return false;
  }
  console.log('All good');
}

function addBookToLibrary() {

}
const addBtn = document.querySelector('#Add');
addBtn.addEventListener('click', getBookInfo);
