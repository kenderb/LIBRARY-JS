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
Book.prototype.isValid = function () {
  return (this.title && this.author && this.pageNumber)
}
function getBookInfo() {
  const bookTitle = document.querySelector("#Title").value;
  const authorName = document.querySelector("#Author").value;
  const pages = document.querySelector("#numberPage").value;
  const isRead = document.querySelector("#Read").checked;
  let newBook = new Book(bookTitle, authorName, pages, isRead);
  console.log(newBook);
  console.log(newBook.isValid())
  if (newBook.isValid()) {
    console.log("There is something missing");
  }else{
    console.log("this is not ampty");
  }
}

function addBookToLibrary() {

}
const addBtn = document.querySelector("#Add");
addBtn.addEventListener("click", getBookInfo);
