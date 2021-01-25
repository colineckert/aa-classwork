const DomNodeCollection = require("./dom_node_collection.js");

$(() => {
  window.$l = $l;
})

function $l(selector) {
  if (selector instanceof HTMLElement) {
    return new DomNodeCollection(selector);
  } else {
    let nodeArray = Array.from(document.querySelectorAll(selector));
    return new DomNodeCollection(nodeArray);
  };
}