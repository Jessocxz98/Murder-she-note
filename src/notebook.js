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

  displayAbbriviatedNote() {
    let arrayLength = this.display.length;
    let newarr = [];
    for (let i = 0; i < arrayLength; i++) {
      newarr.push(`${this.display[i].title} : ${this.display[i].message}` );
    } 
    
    //return newarr.join.split('\r\n')
    this.display.length = newarr.map(s => s.substring(0,3)); 
    return console.log(newarr);


  }

};

//module.exports = Notebook