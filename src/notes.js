

 class Notes { 
  
  constructor () {
    this.arr = []
    this.arrTitles = [] 
    this.notebook = new Notebook;

  }

  createNotes() {
    let title = prompt("Please enter the title of your note", "Gin and Daggers");
    if (this.arrTitles.includes(title)){
      alert("Ok, you've already used that name. Let's try this process again!");
    } else if (title === null) {
      return;
    } else {
      this.arrTitles.push(title);
      let message = prompt("Please enter your message", "There are three things you can never have enough of in life, Lieutenant: chocolate, friends, and the theatre");
      this.submitNote(title,message)
    };
      
  }

  submitNote(title,message) {
    let obj = {}
    obj.title = title;
    obj.message = message;
    this.notebook.display.push(obj);
  }
}