const myLibrary = [{
  title: 'The book',
  author: 'The author',
  pageNumber: '900',
  status: false,
}];

const formContainer = document.querySelector('.form-container');
const addBtn = document.querySelector('#Add');
const addBook = document.querySelector('#new-book');


function Book(title, author, pageNumber, status) {
  this.title = title;
  this.author = author;
  this.pageNumber = pageNumber;
  this.status = status;
}

Book.prototype.showBook = function showBook() {
  return {
    title: this.title,
    author: this.title,
    pageNumber: this.pageNumber,
    status: this.status,
  };
};

Book.prototype.isValid = function isValid() {
  const messages = [];
  if (this.title === '' || this.title == null) {
    messages.push('Title is missing.');
  }
  if (this.author === '' || this.author == null) {
    messages.push('Author is missing.');
  }
  if (this.pageNumber === '' || this.pageNumber == null || Number(this.pageNumber) < 1) {
    messages.push('pages cannot be less than 1.');
  }

  myLibrary.forEach(element => {
    if (element.title === this.title) {
      messages.push('This book already exist');
    }
  });

  return messages;
};

function deleteBook(indexNum) {
  myLibrary.splice(indexNum, 1);
  document.querySelector(`[data-typeId= '${indexNum}']`).remove();
}
function displaystatus(status, index) {
  if (status) {
    return `<input type="button" value = "read" class="btn btn-success" data-readId=${index} id="read-book">`;
  }
  return `<input type="button" value = "no read" class="btn btn-warning" data-readId=${index} id="read-book">`;
}
function toggleRead(status) {
}

function displayBooks() {
  const booksContainer = document.querySelector('.books-container');
  booksContainer.innerHTML = '';
  myLibrary.forEach((element, index) => {
    const cardContainer = document.createElement('div');
    cardContainer.className = 'card col-4 p-2';
    cardContainer.setAttribute('data-typeId', `${index}`);
    cardContainer.innerHTML = `<div class="card-body">
                              <h5 class="card-title">${element.title}</h5>
                              <p class="card-text">${element.author}</p>
                              <p class="card-text">${element.pageNumber}</p>
                              ${displaystatus(element.status, index)} <br>
                              <input type="button"  value = "delete"  class="btn btn-danger" id="delete-book">
                              </div>`;
    booksContainer.appendChild(cardContainer);
    const deleteBookBtn = document.querySelector('#delete-book');
    deleteBookBtn.onclick = () => {
      deleteBook(index);
    };
  });
  return true;
}

function addBookToLibrary(newBook) {
  myLibrary.push(newBook);
  if (myLibrary.length > 0) {
    displayBooks();
  }
  return myLibrary;
}

function getBookInfo() {
  const bookTitle = document.querySelector('#Title').value;
  const authorName = document.querySelector('#Author').value;
  const pages = document.querySelector('#numberPage').value;
  const isRead = document.querySelector('#Read').checked;
  const newBook = new Book(bookTitle, authorName, pages, isRead);
  const error = document.getElementById('error');
  const listOfErrors = newBook.isValid();
  if (listOfErrors.length > 0) {
    error.innerHTML = listOfErrors.join('</br>');
    return false;
  }
  addBookToLibrary(newBook);
  document.querySelector('#book-form').reset();
  addBook.className = 'd-block';
  formContainer.className = 'd-none';
  return true;
}

function displayForm() {
  formContainer.className = 'd-block';
  addBook.className = 'd-none';
}


addBtn.addEventListener('click', getBookInfo);
addBook.addEventListener('click', displayForm);
displayBooks();
