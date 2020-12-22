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
  let messages = [];
  if(this.title === "" || this.title == null){
    messages.push('Title is missing.');
  }
  if(this.author === "" || this.author == null){
    messages.push('Author is missing.');
  }
  if (this.pageNumber === "" || this.pageNumber == null || Number(this.pageNumber) < 1 ) {
    messages.push('pages cannot be less than 1.');
  }

  for(let item of myLibrary){
    if(item.title == this.title) messages.push('This book already exist');
  }
  return messages;
};

function getBookInfo() {
  const bookTitle = document.querySelector('#Title').value;
  const authorName = document.querySelector('#Author').value;
  const pages = document.querySelector('#numberPage').value;
  const isRead = document.querySelector('#Read').checked;
  const newBook = new Book(bookTitle, authorName, pages, isRead);
  const error = document.getElementById('error');
  const listOfErrors = newBook.isValid();
  if(listOfErrors.length > 0){
    error.innerHTML = listOfErrors.join("</br>");
    return false;
  }
  myLibrary.push(newBook);
  return myLibrary;
}

function addBookToLibrary() {
  return true;
}
console.log(myLibrary);
const addBtn = document.querySelector('#Add');
addBtn.addEventListener('click', getBookInfo);
addBookToLibrary();
