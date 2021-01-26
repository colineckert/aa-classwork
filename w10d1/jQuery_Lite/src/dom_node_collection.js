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
    // this.html(args);
    // debugger
    for (let i = 0; i < this.nodeArray.length; i++) {
      if (args instanceof DomNodeCollection || args instanceof HTMLElement){
        this.nodeArray[i].innerHTML += args.outerHTML;
        
      } else if (typeof (args) === "string") {
        this.nodeArray[i].innerHTML += args;
      }
    }
  }

  attr(attribute, value){ //getter if value is omitted, otherwise it's a setter
    if (!value){
      return this.nodeArray[0].getAttribute(attribute)
    }else{
      this.nodeArray[0].setAttribute(attribute, value);
    }
  }

  addClass(name){
    this.nodeArray[0].className += ` ${name}`;
  }

  removeClass(name){
    let classes = this.nodeArray[0].className.split(" ");

    let classToRemove = classes.indexOf(name);

    classes.splice(classToRemove, 1);

    this.attr("class", classes.join(" "));
  }

  children() {
    let childNodes = [];
    for (let i = 0; i < this.nodeArray.length; i++){
      let childrenArr = Array.from(this.nodeArray[i].children);
      childNodes = childNodes.concat(childrenArr);
    }
    return new DomNodeCollection(childNodes);
  }

  parent(){
    let parentNodes = [];
    for (let i = 0; i < this.nodeArray.length; i++) {
      let parent = this.nodeArray[i].parentNode;
      if (!parentNodes.includes(parent)){
        parentNodes.push(parent);
      }
    }
    return new DomNodeCollection(parentNodes);
  }

  find(selector) { //This might come in handy
    //elementList = parentNode.querySelectorAll(selectors);
    return this.nodeArray[0].querySelectorAll(selector);
  }

  remove(){
    // debugger
    this.empty();
  }
}

module.exports = DomNodeCollection;