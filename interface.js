document.addEventListener("DOMContentLoaded", () => {
  const notes = new Notes();

  document.querySelector('#create-note').addEventListener('click', () => {
    notes.createNotes();
    //document.querySelector('#display-notes').innerText = notes.notebook.displayFullNotes();
    document.querySelector('#display-abbreviated-notes').innerText = notes.notebook.displayAbbreviatedNote();
  })

  document.querySelector('#display-abbreviated-notes').addEventListener('click', () => {
    //alert(`${notes.notebook.displayFullNotes()}`)
    document.querySelector('#display-notes').innerText = notes.notebook.displayFullNotes();
    //document.querySelector('#display-abbreviated-notes').innerText = notes.notebook.displayAbbreviatedNote();
  })
  
})


