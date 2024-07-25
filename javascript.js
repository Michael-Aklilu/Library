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
const row = document.querySelector("#addRow");
function displayBook() {
  row.innerHTML = "";
  myLibrary.forEach((book, index) => {
    row.innerHTML += `<tr>
        <td>${book.title}</td> 
        <td>${book.genre}</td>
        <td>${book.author}</td>
        <td>${book.read}</td>
        <td><button class="removeBtn" data-index = "${index}">Remove</button></td> 
        <td><button class = "readBtn" data-index = "${index}">Read</button></td>    
    </tr>
    `;
  });
  const removeBtns = row.querySelectorAll(".removeBtn");
  const readBtns = row.querySelectorAll(".readBtn");
  removeBtns.forEach((button) => {
    button.addEventListener("click", function (event) {
      let rowIndex = event.target.getAttribute("data-index");
      myLibrary.splice(rowIndex, 1);
      displayBook();
    });
  });
  readBtns.forEach((button) => {
    button.addEventListener("click", (event) => {
      let rowIndex = event.target.getAttribute("data-index");
      myLibrary[rowIndex].read =
        myLibrary[rowIndex].read === "Yes" || "yes" ? "No" : "Yes";
      displayBook();
    });
  });
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
