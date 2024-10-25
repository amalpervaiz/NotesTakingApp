

const addbtn= document.querySelector("#addbtn");
const main= document.querySelector("#main");
const saveNote = () => {
    const notes= document.querySelectorAll(".note textarea");
    console.log(notes);
    const data = [];
    notes.forEach(
        (note) => {
            data.push(note.value)
        }
    )
    if(data.length===0){
        localStorage.removeItem("notes")
    }else{
        localStorage.setItem("notes", JSON.stringify(data))
    }
}
addbtn.addEventListener(
    "click",
    function(){
        addNote()
    }
)
//  <div class="note">
// <div class="tool">
//     <div class="icons">
//         <i class="fa-solid fa-floppy-disk"></i>
//         <i class="fa-solid fa-trash"></i>
//     </div>
// </div>
// <textarea></textarea> 

const addNote=(text="")=>{
    const note= document.createElement("div");
    note.classList.add("note");
    note.innerHTML=`
    <div class="tool">
    <div class="icons">
        <i class="save fa-solid fa-floppy-disk"></i>
        <i class="trash fa-solid fa-trash"></i>
    </div>
</div>
<textarea>${text}</textarea> 
    `;
    note.querySelector(".trash").addEventListener(
        "click",
        function(){
            note.remove()
            saveNote();
        }
    )
    note.querySelector(".save").addEventListener(
        "click",
        function(){
            saveNote();
        }
    )
    note.querySelector("textarea").addEventListener(
        "focusout",
        function(){
            saveNote()
        }
    )
     main.appendChild(note);
     saveNote();
}
(
    function(){
        const lonotes = JSON.parse(localStorage.getItem("notes"));
        if(lonotes===null){
            addNote()
        }else{
            lonotes.forEach(
                (lonotes)=>{
                    addNote(lonotes)
                }
            )
        }
    }
)()