function displayNotes() {
  const note = new Notes();
    assert.isTrue(note.display === 0)
};
displayNotes;

function displayAbbreviatedNote() {
  notepad = new Notes
  notepad.title = "Gin and Daggers"
  notepad.message = "There are three things you can never have enough of in life"
  if (notepad.displayAbbreviatedNote() === "Gin and Daggers: Ther...") {
    console.log("Test Passed")
  } else {
    console.log("Test Failed")
  }
}
displayAbbreviatedNote;


/*const newarr = new Notes('Test should fail if characters are more then 20.')
console.log(newarr);

if (newarr.length > 20) {
  throw new Error("Title is less then 20 characters!")

} else
console.log("pass");
*/