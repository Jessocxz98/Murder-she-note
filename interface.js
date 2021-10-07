document.addEventListener("DOMContentLoaded", () => {
  const notes = new Notes();
  let arr = notes.notebook.display;

  document.querySelector('#create-note').addEventListener('click', () => {
    notes.createNotes();
    convertToEmoji(arr[arr.length-1].message); 
  })

  function convertToEmoji(text) {
    fetch('https://makers-emojify.herokuapp.com/', {
      method: 'POST', 
      headers: {'Content-Type': 'application/json',
      },
      //body: '{"text": "Hello, :earth_africa:"}',
      body: `{"text": "${text}"}`,
    }).then((response) => {
      return response.json()
      }).then((data) => {
        data.emojified_text
        console.log(data.emojified_text);
        submitNote(data.emojified_text);
      });  
  }

  function submitNote(text) {
    arr[arr.length-1].message = text;
    document.querySelector('#display-notes').innerText = notes.notebook.displayNotes();
  }

  });




