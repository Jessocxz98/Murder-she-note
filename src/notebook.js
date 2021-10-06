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

  displayAbbreviatedNote() {
    let arrayLength = this.display.length;
    let newarr = [];
      for (let i = 0; i < arrayLength; i++) {
      newarr.push(`${this.display[i].title} : ${this.display[i].message}` );
    } 
    return newarr.map(s => s.substring(0,20) + '...').join("\r\n");
    }
  

};

