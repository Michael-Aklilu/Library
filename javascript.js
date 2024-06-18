const myLibrary = [];

function Book(name,author,genre, read){
    this.name = name;
    this.author = author;
    this.genre = genre;
    this.read = read;
}

const book1 = new Book('Harry Potter', 'JK Rowling', 'Fantasy', 'Yes');
const book2 = new Book('Percy Jackson', 'Rick Riordan','Fantasy','Yes');

myLibrary.push(book1);
myLibrary.push(book2);

Book.prototype.toggleRead = function(){
   if(this.read === 'Yes')
      this.read = 'No';
   else
      this.read = 'Yes';
}




document.addEventListener('DOMContentLoaded', ()=>{
    
    let bName = document.querySelector('#Name');
    let author = document.querySelector('#Author');
    let genre = document.querySelector('#Genre');
    let read = document.querySelector('#Read');
    const addBtn = document.querySelector('#Add');
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
      let book = new Book(`${bName.value}`, `${author.value}`, `${genre.value}`, `${read.value}`);
      myLibrary.push(book);
      bName.value = "";
      author.value = "";
      genre.value = "";
      read.value = "";
    }  
   
    function display(){
        const container =  document.querySelector('#container');
        container.innerHTML = ''; 
        
        myLibrary.forEach((book,index) =>{
            let card = document.createElement('div');
            card.innerHTML = `Book: ${book.name}<br> Author: ${book.author}<br> Genre: ${book.genre} <br> Read: ${book.read} <br>`;
            let readBtn = document.createElement('button');
            readBtn.textContent = 'Read';
            
            readBtn.addEventListener('click', ()=>{
                  book.toggleRead();
                  display();
            })

            let removeBtn = document.createElement('button');
            removeBtn.addEventListener('click',()=>{
            removeBook(index);
            });
            removeBtn.textContent = 'Remove';   
            container.appendChild(card);
            card.appendChild(readBtn);
            card.appendChild(removeBtn);
          })
    } 
    function removeBook(index){
        myLibrary.splice(index, 1);
        display();
     }


    display();
})
