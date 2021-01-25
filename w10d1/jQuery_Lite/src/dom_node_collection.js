class DomNodeCollection {

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

  append(args){
    for (let i = 0; i < args.length; i++) {
      this.html(args);
    }
  }

}

module.exports = DomNodeCollection;