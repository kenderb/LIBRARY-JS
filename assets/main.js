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
function getBookInfo() {
  const bookTitle = document.querySelector("#Title").value;
  const authorName = document.querySelector("#Author").value;
  const pages = document.querySelector("#numberPage").value;
  const isRead = document.querySelector("#Read").value;
  console.log(bookTitle, authorName, pages, isRead);
}

function addBookToLibrary() {
  
}
const addBtn = document.querySelector("#Add");
addBtn.addEventListener("click", getBookInfo);


