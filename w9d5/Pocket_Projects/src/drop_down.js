
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

const dogLinkCreator = (dogs) => {
  const dogLinksArr = [];

  for (const [name, url] of Object.entries(dogs)) {
    // console.log(`${name}: ${url}`);
    const a = document.createElement("a");
    a.innerHTML = name;
    a.href = url;
    
    const dogLi = document.createElement("li");
    dogLi.className = "dog-link";
    dogLi.append(a);

    dogLinksArr.push(dogLi);
  };

  return dogLinksArr;
}

const dogList = document.querySelector(".drop-down-dog-list");

const attachDogLinks = () => {
  const dogLinks = dogLinkCreator(dogs);
  dogLinks.forEach(dog => dogList.append(dog));
}

attachDogLinks();

const dogNav = document.querySelector(".drop-down-dog-nav")

const handleEnter = (e) => {
  // e.stopPropagation();
  const dogLinks = document.querySelectorAll(".dog-link");
  dogLinks.forEach(link => {
    link.classList.remove("show")
  })
}

const handleLeave = (e) => {
  // e.stopPropagation();
  const dogLinks = document.querySelectorAll(".dog-link");
  dogLinks.forEach(link => {
    link.classList.add("show");
  })
}

dogNav.addEventListener("mouseenter", handleEnter);
dogNav.addEventListener("mouseleave", handleLeave);