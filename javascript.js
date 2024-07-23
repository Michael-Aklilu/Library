const myLibrary = [];

function Book(title, genre, author, read) {
  this.title = title;
  this.genre = genre;
  this.author = author;
  this.read = read;
}
function addBookToLibrary(title, genre, author, read) {
  let book = new Book(title, genre, author, read);
  myLibrary.push(book);
}
function displayBook() {
  const table = document.querySelector("#table");
  table.innerHTML = "";
  for (let book of myLibrary) {
    table.innerHTML += `<tr>
        <td>${book.title}</td> 
        <td>${book.genre}</td>
        <td>${book.author}</td>
        <td>${book.read}</td>
    </tr>`;
  }
}
const newBook = document.querySelector(".newButton");
const dialog = document.querySelector("dialog");
const form = document.querySelector("form");
const closeForm = document.querySelector("#close");
newBook.addEventListener("click", () => {
  dialog.showModal();
});
closeForm.addEventListener("click", () => {
  event.preventDefault();
  let title = document.querySelector("#title").value;
  let genre = document.querySelector("#genre").value;
  let author = document.querySelector("#author").value;
  let read = document.querySelector("#read").value;
  addBookToLibrary(title, genre, author, read);
  dialog.close();
  form.reset();
  displayBook();
});
