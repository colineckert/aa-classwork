class Node {
  constructor() {
    this.children = {};
    this.isTerminal = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node()
  }

  insert(word, root=this.root) {
    let letter = word[0];

    if (!(letter in root.children)) {
      root.children[letter] = new Node();
    }
    
    if (word.length === 1) {
      root.children[letter].isTerminal = true;
    } else {
      return this.insert(word.slice(1), root.children[letter]);
    }
  }

  search(word, root=this.root) {
    if (word.length === 0) {
      return root.isTerminal ? true : false;
    }

    let letter = word[0];
    if (letter in root.children) {
      return this.search(word.slice(1), root.children[letter]);
    } else {
      return false;
    }
  }

  startsWith(prefix, root=this.root) {
    if (prefix.length === 0) return true;

    let letter = prefix[0];
    if (letter in root.children) {
      return this.startsWith(prefix.slice(1), root.children[letter]);
    } else {
      return false;
    }
  }
}