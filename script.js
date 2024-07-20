document.addEventListener("DOMContent", () => {

    const addButton = document.querySelector("#add");
  
    const updateLSData = () => {

      const textAreaData = document.querySelectorAll("textarea");
      const notes = [];
      textAreaData.forEach((note) => notes.push(note.value));
      localStorage.setItem("notes", JSON.stringify(notes));

    };
  
    const addNewNote = (text = "") => {

      const note = document.createElement("div");
      note.classList.add("notes");
  
      const new_notes = `
        <div class="operation">
          <button class="edit">
            <img class="icon-add" width="24" height="24" src="https://img.icons8.com/ios-filled/50/edit-text-file.png" alt="edit-text-file"/> 
          </button>
          <button class="delete">
            <img class="icon-del" width="28" height="28" src="https://img.icons8.com/color/48/delete-property.png" alt="delete-property"/>
          </button>
        </div> 
        <div class="main ${text ? "" : "hidden"}"></div>
        <textarea class="${text ? "hidden" : ""}"></textarea>`;
  
      note.insertAdjacentHTML("afterbegin", new_notes);
  
      document.body.appendChild(note);
  
      const editButton = note.querySelector(".edit");
      const delButton = note.querySelector(".delete");
      const mainDiv = note.querySelector(".main");
      const textArea = note.querySelector("textarea");
  
      textArea.value = text;
      mainDiv.innerHTML = text;
  
      delButton.addEventListener("click", () => {
        note.remove();
        updateLSData();
      });
  
      editButton.addEventListener("click", () => {
        mainDiv.classList.toggle("hidden");
        textArea.classList.toggle("hidden");
      });
  
      textArea.addEventListener("change", (event) => {
        const value = event.target.value;
        mainDiv.innerHTML = value;
        updateLSData();
      });
    };
  
    // Load existing notes from localStorage
    const notes = JSON.parse(localStorage.getItem("notes"));
    
    if (notes) {
      notes.forEach((note) => addNewNote(note));
    }
  
    addButton.addEventListener("click", () => addNewNote());
  });
  