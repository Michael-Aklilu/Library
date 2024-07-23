const myLibrary = [];
const firstBook = new Book("Harry Potter", "Fantasy", "J.K Rowling", "Yes");
myLibrary.push(firstBook);

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
  for (let book of myLibrary) {
    table.innerHTML += `<tr>
        <td>${book.title}</td> 
        <td>${book.genre}</td>
        <td>${book.author}</td>
        <td>${book.read}</td>
    </tr>`;
  }
}
