function addBookToLibrary(event){
    event.preventDefault();

    const modal = document.getElementById('myModal');
    modal.style.visibility = "hidden";

    var title = document.getElementsByName("title")[0].value;
    var author = document.getElementsByName("author")[0].value;
    var noOfPages = document.getElementsByName("noOfPages")[0].value;
    var status = document.getElementsByName("status")[0].checked ? "Read": "Unread";

    var card = document.createElement("div");
    card.className = "addedBooks";

    card.innerHTML = `
        <p>Title: ${title}</p>
        <p>Author: ${author}</p>
        <p>Pages: ${noOfPages}</p>
   
        <button class="readStatusBtn" onclick="toggleReadStatus(this)">${status}</button>
        <button class="deleteBtn" onclick="deleteBook(this)">Delete</button> `;
    
    document.body.appendChild(card);

    card.style.visibility = "visible";

    document.getElementById("form").reset();
}

function toggleReadStatus(button){
    var statusBtn = button;
    var status = statusBtn.textContent.trim().toLowerCase();

    if(status === "read"){
        statusBtn.textContent = "Unread";
        statusBtn.style.backgroundColor = "#f44336";
    } else {
        statusBtn.textContent = "Read";
        statusBtn.style.backgroundColor = "#4C974C";
    }
    
}

function deleteBook(button){
    var card = button.parentNode;
    card.parentNode.removeChild(card);
}

document.getElementById("addBook").addEventListener("click", function(){
    var modal = document.getElementById("myModal");
    modal.style.transform = "translate(-50%, -50%) scale(1)";
    modal.style.top = "50%";
    modal.style.visibility = "visible"; 
});

window.addEventListener("click", function(event){
    var modal = document.getElementById("myModal");
    if(event.target == modal){
        modal.style.transform = "translate(-50%, -50%) scale(0.1)";
        modal.style.top = "0%";
        modal.style.visibility = "hidden"; 
    }
})