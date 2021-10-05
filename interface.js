document.addEventListener("DOMContentLoaded", () => {
  const notes = new Notes();

  document.querySelector('#create-note').addEventListener('click', () => {
    notes.createNotes();
    document.querySelector('#display-notes').innerText = notes.notebook.displayNotes();
    document.querySelector('#display-notes').innerText = notes.notebook.displayAbbriviatedNote();
  })

  
})


