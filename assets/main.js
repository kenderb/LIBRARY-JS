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

function createDeleteBtn(index, reset) {
  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('btn', 'btn-danger');
  deleteBtn.innerHTML = 'Delete';
  deleteBtn.addEventListener('click', () => {
    myLibrary.splice(index, 1);
    document.querySelector(`[data-typeId= '${index}']`).remove();
    reset();
  });
  return deleteBtn;
}

function createReadBtn(index, reset) {
  const readBtn = document.createElement('button');
  if (myLibrary[index].status) {
    readBtn.classList.add('btn', 'btn-success');
    readBtn.innerHTML = 'read';
  } else {
    readBtn.classList.add('btn', 'btn-warning');
    readBtn.innerHTML = 'Not read';
  }
  readBtn.addEventListener('click', () => {
    myLibrary[index].status = !myLibrary[index].status;
    reset();
  });

  return readBtn;
}
function createCard(element, index, reset) {
  const cardContainer = document.createElement('div');
  const newDelteBtn = createDeleteBtn(index, reset);
  const newReadOrNotBtn = createReadBtn(index, reset);
  const cardBody = document.createElement('div');
  const h5Tag = document.createElement('h5');
  const p1 = document.createElement('p');
  p1.className = 'card-title';
  p1.innerHTML = element.author;
  const p2 = document.createElement('p');
  p2.className = 'card-title';
  p2.innerHTML = element.pageNumber;
  h5Tag.className = 'card-title';
  h5Tag.innerHTML = element.title;
  cardBody.className = 'card-body';
  cardContainer.className = 'card col-4 p-2';
  cardContainer.setAttribute('data-typeId', `${index}`);
  cardBody.appendChild(h5Tag);
  cardBody.appendChild(p1);
  cardBody.appendChild(p2);
  cardContainer.appendChild(cardBody);
  cardContainer.appendChild(newReadOrNotBtn);
  cardContainer.appendChild(newDelteBtn);
  return cardContainer;
}

function displayBooks() {
  const booksContainer = document.querySelector('.books-container');
  booksContainer.innerHTML = '';
  myLibrary.forEach((element, index) => {
    const card = createCard(element, index, displayBooks);
    booksContainer.appendChild(card);
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
