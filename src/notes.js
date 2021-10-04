class Notes { 

  constructor () {
    this.obj = {}
    this.arr = [] 
  }

  
  createNotes() {
    let obj = {}
    let title = prompt("Please enter the title of your note", "Gin and Daggers");
    obj.title = title
    // this.arr.push(alert(Object.keys(this.obj)));
    let message = prompt("Please enter your message", "There are three things you can never have enough of in life, Lieutenant: chocolate, friends, and the theatre");
    obj.message = message
    this.arr.push(obj)
  }

}