//export default

class Notebook {
  constructor() {
    this.display = [];
  }

  displayNotes(){
  let arrayLength = this.display.length;
  let newarr = [];
  for (let i = 0; i < arrayLength; i++) {
    newarr.push(`${this.display[i].title} : ${this.display[i].message}` );
  } 
  return newarr.join('\r\n')
  }

};




//module.exports = Notebook