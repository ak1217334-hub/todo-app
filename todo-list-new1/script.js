const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
const notes = document.querySelectorAll(".input-box");

const icon = document.getElementById("icon");

window.onload = function() {
    showNotes(); // Aapka purana notes wala function
    
    const savedTheme = localStorage.getItem("theme");
    if(savedTheme === "dark") {
        document.body.classList.add("dark-theme");
        icon.src = "sun-removebg-preview.png";
    }
}



icon.onclick = function() {
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "sun-removebg-preview.png";
        localStorage.setItem("theme", "dark");
    }
    else{  icon.src = "moon-removebg-preview.png";
        localStorage.setItem("theme", "light")

    }
}



function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();


function  Updatestorage(){
    localStorage.setItem("notes", notesContainer.innerHTML)
}



createBtn.addEventListener("click", ()=>{
    let container = document.createElement("div"); // Main box
    let inputBox = document.createElement("P");
    let img = document.createElement("img");
    container.className = "note-container-box"; // Nayi class
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "DELETE.PNG";
    img.className = "delete-btn";
    notesContainer.appendChild(inputBox).appendChild(img);
    Updatestorage();
    
})

notesContainer.addEventListener("click", function(e){
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        Updatestorage();
    }
    else if(e.target.tagName === "P"){
        const notes = document.querySelectorAll(".input-box");
        notes.forEach(nt =>{
            nt.onkeyup = function(){
                Updatestorage();
            }
        })

    }
});


