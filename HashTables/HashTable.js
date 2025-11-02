class HashTable {
  constructor(size=53){ // size - How much characters
    this.keyMap = new Array(size);
  }

  _hash(key) { // Function takes key 
    let total = 0;
    let WEIRD_PRIME = 31;
  
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  /* GET & SET */
  set(key,value){ 
    let index = this._hash(key); // Hash the Key 
    if(!this.keyMap[index]){
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]); 
  }
  get(key){
    let index = this._hash(key); // Hash the Key
    if(this.keyMap[index]){
      for(let i = 0; i < this.keyMap[index].length; i++){
        if(this.keyMap[index][i][0] === key) { // Check every single item and find the key that you're looking for
          return this.keyMap[index][i][1]
        }
      }
    }
    return undefined; // If the key isn’t found, returns undefined
  }

  keys(){
    let keysArr = [];
    for(let i = 0; i < this.keyMap.length; i++){ // Loop over the entire keyMap
      if(this.keyMap[i]){ // Check if there is anything there
        for(let j = 0; j < this.keyMap[i].length; j++){
          if(!keysArr.includes(this.keyMap[i][j][0])){
            keysArr.push(this.keyMap[i][j][0])
          }
        }
      }
    }
    return keysArr;
  }
  values(){
    let valuesArr = [];
    for(let i = 0; i < this.keyMap.length; i++){
      if(this.keyMap[i]){
        for(let j = 0; j < this.keyMap[i].length; j++){
          if(!valuesArr.includes(this.keyMap[i][j][1])){
            valuesArr.push(this.keyMap[i][j][1])
          }
        }
      }
    }
    return valuesArr;
  }
}

let ht = new HashTable(17);
ht.set("white","#fffffcff")
ht.set("beige","#c5bf9eff")
ht.set("darkBeige","#9e987dff")

ht.keys().forEach(function(key){
  console.log(ht.get(key));
})