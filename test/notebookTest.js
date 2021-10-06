function displayNotes() {
  const note = new Note();
    assert.isTrue(note.display === 0)
};
displayNotes;

function displayAbbreviatedNote() {
  const newarr = new Note('Test should fail if characters are more then 20.')
  console.log(newarr);
  let noteTile = newarr.title;

  if (newarr.length < 20) {
    throw new Error("Title is less then 20 characters!")

  } else
  console.log("pass");
}