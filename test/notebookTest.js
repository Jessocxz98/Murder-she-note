

const notepad = new Notes;

// function displayNotes() {
//   const note = new Notes();
//    if (assert.isTrue(note.display === 0)) {
//       console.log("Display note test has passed!")
//     }
// };

// displayNotes();

function displayAbbreviatedNoteTest() {
  notepad.submitNote("Gin and Daggers","There are three things you can never have enough of in life")
  if (notepad.notebook.displayAbbreviatedNote() === "Gin and Daggers : Th...") {
    console.log("Display Abbreviated Note - Test Passed")
  } else {
    console.log("Display Abbreviated Note - Test Failed")
  }
}

function addNoteTest() {
  notepad.submitNote("Hello", "Notes test")
  let arr = notepad.notebook.display 
  if (arr[arr.length-1].title === "Hello") { 
    console.log("Add note - Test Passed");
  } else {
    console.log("Add note - Test Failed");
    console.log(notepad.notebook.display)
  }
}

function createMultipleNotes() {
  notepad.submitNote("Note 1", "Test");
  notepad.submitNote("Note 2", "Test");
  notepad.submitNote("Note 3", "Test");
  if (notepad.notebook.display.length === 5) {
    console.log("Create Multiple Notes - Test Passed");
  } else {
    console.log("Create Multiple Notes - Test Failed");
    console.log(notepad.notebook.display);
  }
}

/*

function addEmojiTest() {

  notepad.submitNote("H", ":punch:")
  convertToEmoji(arr[arr.length-1].message); 
  if (notepad.notebook.displayAbbreviatedNote() === "H : :punch:...") {
    console.log("Add Emoji - Test Passed")
    console.log(notepad.notebook.display)
  } else {
    console.log("Add Emoji - Test Failed")
  }
}

*/

displayAbbreviatedNoteTest();
addNoteTest();
createMultipleNotes();



/*const newarr = new Notes('Test should fail if characters are more then 20.')
console.log(newarr);

if (newarr.length > 20) {
  throw new Error("Title is less then 20 characters!")

} else
console.log("pass");
*/