const myLibrary = [];

function Book(name,author,genre){
    this.name = name;
    this.author = author;
    this.genre = genre;
}

const book1 = new Book('Harry Potter', 'JK Rowling', 'Fantasy');
const book2 = new Book('Percy Jackson', 'Rick Riordan','Fantasy');

myLibrary.push(book1);
myLibrary.push(book2);

document.addEventListener('DOMContentLoaded', ()=>{
    
    function display(){
        const container =  document.querySelector('#container');
    
        for(let book of myLibrary){
            let card = document.createElement('div');
            card.innerHTML = `Book: ${book.name}<br> Author: ${book.author}<br> Genre: ${book.genre} <br>`
            let addBtn = document.createElement('button');
            addBtn.textContent = 'Remove';   
            container.appendChild(card);
            card.appendChild(addBtn);
          }
    } 
    display();
})
