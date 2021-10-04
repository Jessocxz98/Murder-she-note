function displayNotes() {
  const note = new Note();
    if(note.display());
     return displayNotes();
};
displayNotes();
