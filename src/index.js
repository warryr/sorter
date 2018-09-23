class Sorter {
  compareNumeric(a,b){
    if (a > b) return 1;
    if (a < b) return -1;
  }

  constructor() {
    this.elements = [];
    this.comparator = this.compareNumeric;
  }

  add(element) {
      this.elements.push(element);
      return;
  }

  at(index) {
    return this.elements[index];
  }

  get length() {
    return this.elements.length;
  }

  toArray() {
    return this.elements;
  }

  sort(indices) {
    var tempArr = [];
    for (var i = 0; i < indices.length; i++){
      tempArr[i] = this.elements[indices[i]];
    }
    tempArr.sort(this.comparator);
    indices.sort(this.compareNumeric);
    for (var i = 0; i < indices.length; i++){
      this.elements[indices[i]] = tempArr[i];
    }
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;