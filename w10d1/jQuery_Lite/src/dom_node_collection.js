class domNodeCollection {

  constructor(nodeArray) {
    this.nodeArray = nodeArray;
  }

  html(string) {
    if (typeof(string) === "string") {
      this.nodeArray.forEach(node => {
        node.innerHTML = string;
      });
    } else {
      return this.nodeArray[0].innerHTML;
    };
  }

  empty() {
    return this.html("");
  }
}

module.exports = domNodeCollection;