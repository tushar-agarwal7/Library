const form = document.querySelector(".form");
const libraryArea=document.querySelector(".library-area");
const addbtn = document.querySelector(".addBtn");
const inp=document.querySelectorAll("input");
addbtn.addEventListener("click", () => {
  form.style.display = "flex";
  
});


const myLibrary=[
  {
    title: "Bhagavad Gita",
    author: "Vyasa",
    pages: 700,
    image: "https://servdharm.com/cdn/shop/products/ANA0633_800x.jpg?v=1671424016"
    },
  {
    title: " JavaScript",
    author: "Code Explorer",
    pages: 300,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQojfBNN6BuTyzhRqNd-z-4qX-s89aj8ceC-w&usqp=CAU"
  },
  {
    title: "Coding Chronicles",
    author: "Byte Master",
    pages: 240,
    image: "https://m.media-amazon.com/images/I/61Uwxj8TLqL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    title: "Web Wizardry",
    author: "Script Sorcerer",
    pages: 400,
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1449964174i/28182369.jpg"
  },

];

function Book(title,author,pages,image){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.image=image;
  
}
function addBookToLibrary(){
  let title=document.querySelector("#title").value;
  let author=document.querySelector("#author").value;
  let pages=document.querySelector("#pages").value;
  let image=document.querySelector("#img").value;
  const newBook=new Book(title,author,pages,image);
  myLibrary.push(newBook);

  document.querySelector("#title").value = "";
  document.querySelector("#author").value = "";
  document.querySelector("#pages").value = "";
  document.querySelector("#img").value = "";
  libraryArea.textContent = "";
 
  allbooks();

}


function allbooks(){
    let totalBooks=myLibrary.length;
    for(let i=0;i<totalBooks;i++){
    const book=document.createElement("div");
    book.classList.add("book")
    book.innerHTML=`
    <div class="card">
  <img src=${myLibrary[i].image ? myLibrary[i].image :" https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D" } class="card-img-top card-img" alt="">  
  <div class="card-body">
  <h2>${myLibrary[i].title}</h2>
    <p class="card-text"> <b>Author:-</b> ${myLibrary[i].author}</p>
    <p class="card-text"><b>Pages:-</b> ${myLibrary[i].pages}</p>
    <button class="remove" id=${i}>Remove</button>
  </div>
  
</div>`;
   libraryArea.appendChild(book);
   
}
}


allbooks();

const submitBtn=document.querySelector("#submit-btn");
submitBtn.addEventListener("click",()=>addBookToLibrary());

libraryArea.addEventListener("click", (event) => {
  if (event.target.classList.contains("remove")) {
    const indexToRemove = event.target.id;
    myLibrary.splice(indexToRemove, 1);
    libraryArea.textContent = ""; // Clear the existing content
    allbooks(); // Re-render the books after removal
  }
});
