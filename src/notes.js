class Notes { 

  constructor () {
    this.arr = []
    this.arrTitles = [] 
  }

  createNotes() {
    let obj = {}
    let title = prompt("Please enter the title of your note", "Gin and Daggers");
    if (this.arrTitles.includes(title)){
      alert("Ok, you've already used that name. Let's try this process again!");
    } else {
    this.arrTitles.push(title)
    obj.title = title
    let message = prompt("Please enter your message", "There are three things you can never have enough of in life, Lieutenant: chocolate, friends, and the theatre");
    obj.message = message
    this.arr.push(obj)
  }
  }

}