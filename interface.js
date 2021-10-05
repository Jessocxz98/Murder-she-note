document.addEventListener("DOMContentLoaded", () => {
  const notepad = new Notes();

  document.querySelector('#create-note').addEventListener('click', () => {
    notepad.createNotes();
  })
})