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
    
    let bName = document.querySelector('#Name');
    let author = document.querySelector('#Author');
    let genre = document.querySelector('#Genre');
    const addBtn = document.querySelector('#Add');
    const form = document.querySelector('form');
    const closeBtn = document.querySelector('#closeBtn');
    const submitBtn = document.querySelector('#submitBtn');
    const dialog = document.querySelector('dialog');
    
   
   
    addBtn.addEventListener('click', ()=>{ 
        dialog.showModal();
    })
    closeBtn.addEventListener('click', (event)=>{
    event.preventDefault();
    dialog.close(); 
    })   

    submitBtn.addEventListener('click', (event)=>{
        event.preventDefault();
        addBook();
        dialog.close();
        display();
    })
   
    function addBook(){
      let book = new Book(`${bName.value}`, `${author.value}`, `${genre.value}`);
      myLibrary.push(book);
      bName.value = "";
      author.value = "";
      genre.value = "";
    }  
   
    function display(){
        const container =  document.querySelector('#container');
        container.innerHTML = ''; 
        
        for(let book of myLibrary){
            let card = document.createElement('div');
            card.innerHTML = `Book: ${book.name}<br> Author: ${book.author}<br> Genre: ${book.genre} <br>`
            let removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';   
            container.appendChild(card);
            card.appendChild(removeBtn);
          }
    } 
    display();
})
