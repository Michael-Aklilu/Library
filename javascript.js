class Book {
  static myLibrary = [];
  constructor(title, genre, author, read) {
    this.title = title;
    this.genre = genre;
    this.author = author;
    this.read = read;
  }
  static addBookToLibrary(title, genre, author, read) {
    let book = new Book(title, genre, author, read);
    Book.myLibrary.push(book);
  }
  static displayBook() {
    row.innerHTML = "";
    Book.myLibrary.forEach((book, index) => {
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
        Book.myLibrary.splice(rowIndex, 1);
        Book.displayBook();
      });
    });
    readBtns.forEach((button) => {
      button.addEventListener("click", (event) => {
        let rowIndex = event.target.getAttribute("data-index");
        Book.myLibrary[rowIndex].read =
          Book.myLibrary[rowIndex].read === "Yes" ? "No" : "Yes";
        Book.displayBook();
      });
    });
  }
}

const row = document.querySelector("#addRow");

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
  Book.addBookToLibrary(title, genre, author, read);
  dialog.close();
  form.reset();
  Book.displayBook();
});
