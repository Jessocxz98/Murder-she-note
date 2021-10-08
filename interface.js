document.addEventListener("DOMContentLoaded", () => {
  const notes = new Notes();
  let arr = notes.notebook.display,
    container1 = document.querySelector('.container1'),
    container2 = document.querySelector('.container2');

    container2.style.display = 'none'; // on load the containers/divs are hidden 
  

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
    document.querySelector('#display-abbreviated-notes').innerText = notes.notebook.displayAbbreviatedNote();
  }

  document.querySelector('#test-list').addEventListener('click', () => {
    listMaker();
  })


  function listMaker() {
    let abbrArr = notes.notebook.testDisplayAbbreviatedNote()
    console.log(abbrArr)
    for (let i = 0; i < arr.length; i++)
    {
      let li = document.createElement('li'),
      link = document.createElement('a'),
      description = `${abbrArr[i]}`;

      (link.textContent = description),
      (link.href = '#'),
      (link.id = description);

    link.addEventListener('click', (e) => {
      displayNote(arr[i]);
      e.preventDefault();
    });

    li.appendChild(link);
    document.getElementById('created-notes').appendChild(li);
    }

  }



  function displayNote(obj) {
    container1.style.display = 'none';
    container2.style.display = 'block';
    document.querySelector('#full-note-message').textContent = obj.message
    
    document.querySelector('#back-button').addEventListener('click', (e) => {
    container1.style.display = 'block';
    container2.style.display = 'none';
    });
  }


  });




