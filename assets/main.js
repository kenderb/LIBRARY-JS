const myLibrary = [{
  title: 'The book',
  author: 'The author',
  pageNumber: '900',
  status: false,
}];

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

function displayBooks() {
  const booksContainer = document.querySelector('.books-container');
  booksContainer.innerHTML = '';
  myLibrary.forEach((element, index) => {
    const cardContainer = document.createElement('div');
    cardContainer.className = 'card col-4 p-2';
    cardContainer.setAttribute('data-typeId', `${index}`)
    cardContainer.innerHTML = `<div class="card-body">
                              <h5 class="card-title">${element.title}</h5>
                              <p class="card-text">${element.author}</p>
                              <p class="card-text">${element.pageNumber}</p>
                              <input type="button"  value = "delete" onclick="deleteBook(${index})" class="btn btn-danger">
                              </div>`;
    booksContainer.appendChild(cardContainer);
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

function deleteBook(index){
    myLibrary.splice(index,1);
    document.querySelector(`[data-typeId= '${index}']`).remove();
}

const formContainer = document.querySelector('.form-container');
const addBtn = document.querySelector('#Add');
const addBook = document.querySelector('#new-book');
addBtn.addEventListener('click', getBookInfo);
addBook.addEventListener('click', displayForm);
displayBooks();
