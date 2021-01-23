
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
  
  if (htmlElement.children.length !== 0) {
      let children = Array.from(htmlElement.children);
      
      children.forEach((child) => {
        htmlElement.removeChild(child);
        const p = document.createElement("p");
        p.innerText = string;
        htmlElement.appendChild(p);
        })
    } else {
      const p = document.createElement("p");
      p.innerText = string
      htmlElement.append(p);
    };
};

htmlGenerator('Party Time.', partyHeader);