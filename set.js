class Set {
  constructor(){
    this.setObj = {};
    this.insertionOrder = 0;
  }
  add(value){
    if(this.setObj[value] === undefined) {
      this.setObj[value] = true;
    }
    return this;
  }

  // values(){
  //   var returnArray = [];
  //   for(key in this.setObj) {
  //     returnArray[this.setObj[key]] = key;
  //   }
  // }
}

module.exports = Set;
