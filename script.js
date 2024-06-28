const addButton = document.querySelector("#add");

const addNewNote = (text = "") => {
    const note = document.createElement("div");
    note.classList.add("notes");
  
    const new_notes = `

         <div class="operation">

            <button class="edit">
                <img class="icon-add" width="24" height="24" src="https://img.icons8.com/ios-filled/50/edit-text-file.png" alt="edit-text-file"/> 
            </button>

            <button class="delete">
                 <!-- <i class="fas fa-trash-alt"></i>  -->
                <img class="icon-del" width="28" height="28" src="https://img.icons8.com/color/48/delete-property.png" alt="delete-property"/>
            </button>

        </div> 

        <div class= "main" > </div>
        <textarea class= ""> </textarea> `;
  
    note.insertAdjacentHTML("afterbegin", new_notes);

    document.body.appendChild(note)

}

addButton.addEventListener('click', () => addNewNote());



