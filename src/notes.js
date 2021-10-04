class Notes { 

  constructor () {
    this.obj = {} 


  }

  createNotes() {
    let title = prompt("Please enter the title of your note", "Gin and Daggers");
    this.obj.title = title
    let message = prompt("Please enter your message", "There are three things you can never have enough of in life, Lieutenant: chocolate, friends, and the theatre");
    this.obj.message = message
  }



}