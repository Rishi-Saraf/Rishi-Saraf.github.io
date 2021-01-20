// All the hex values
const HexCodes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

class Data {
  constructor() {
    this.colors = [];
  }
  
  getColors() {
    return this.colors;
  }
}

let Obj = new Data();

let hex = "#000";
let hex2 = hex;
const btn = document.getElementById("shuffle-button");

/* 
The function in the eventListener 
generates 6 random hex values and
concatenates it to the variable 'hex' 
producing a valid hex value 
-------------------------------------
*/
btn.addEventListener("click", () => {
  hex = "#";
  for (var i = 0; i < 6; i++) {
    let RandomNo = Math.floor(Math.random() * 16);
    hex += HexCodes[RandomNo];
  }
  document.body.style.backgroundColor = hex;
  colorText = document.getElementById("color");
  colorText.textContent = hex;
  hex2 = hex;
});


let colors = [];

/*
The following function displays the palate 
in which the colors are added by the users
according to their will
------------------------------------------
*/
function showPalate() {
  const links = document.querySelector(".links");
  const showPlt = document.querySelector("#show-palate");
  showPlt.classList.add("hide");
  const hidePalate = document.createElement("BUTTON");
  const btnText = document.createTextNode("Hide Palate");
  hidePalate.appendChild(btnText);
  hidePalate.classList.add("hide-palate");
  links.appendChild(hidePalate);
  if (colors.length < 1) {
    const hexLi = document.querySelector('.hex')
    hexLi.classList.add('hide') 
    return null;
  } else {
    const palateDiv = document.createElement("DIV");
    colors.forEach((color) => {
      const h2 = document.createElement("H2");
      const h2text = document.createTextNode(`background-color : ${color}`);
      h2.appendChild(h2text);
      const main = document.getElementById("main");
      h2.style.backgroundColor = color;
      const btn = document.createElement("BUTTON");
      const btntext = document.createTextNode("Delete");
      btn.appendChild(btntext);
      btn.id = color;
      btn.classList.add("delete");
      btn.style.backgroundColor = color;
      const div = document.createElement("DIV");
      div.appendChild(h2);
      div.appendChild(btn);
      div.classList.add("color-item");
      const img = document.createElement('IMG')
      img.src="https://img.icons8.com/fluent-systems-filled/24/000000/copy-2.png"
      img.classList.add('copy')
      img.id = color;
      div.appendChild(img)
      palateDiv.appendChild(div);
      palateDiv.classList.add("colorDisplay");
      const hexLi = document.querySelector('.hex')
      hexLi.classList.add('hide') 
    });
    
    return palateDiv;
  }
}

/*
Event listener for the show palate button
which shows the palate of the user
-----------------------------------------
*/
showplt = document.getElementById("show-palate");
showplt.addEventListener("click", () => {
  let Object = Obj
  let colorChooser
  palate = showPalate();
  const main = document.getElementById("main");
  colorChooser = document.querySelector(".container");
  colorChooser.classList.add("hide");
  if (palate === null) {
    main.innerHTML = "<h1 class='colorDisplay'>No Colors added</h1>";
  } else {
    main.innerHTML = palate.outerHTML;
    const copyArray = document.querySelectorAll(".copy");
    copyArray.forEach(copy=>{
      copy.onclick = ()=>{
      let colorHexCode = copy.id
      navigator.clipboard.writeText(colorHexCode)
      alert("copied")
      }
    }
    )
  }
  
/*
Event listener for deleting the colors in the palate
----------------------------------------------------
*/
  deleteBtn = document.querySelectorAll(".delete");
  deleteBtn.forEach((butn) => {
    butn.addEventListener("click", (e) => {
      let colorCode = e.srcElement.id;
      colors = colors.filter((color) => {
        return color !== colorCode;
      });
      Object.colors = colors;
      const srcdiv = e.path[1];
      const colorDisplay = document.querySelector(".colorDisplay");
      colorDisplay.removeChild(srcdiv);
      if (colors.length === 0) {
        main.innerHTML = "<h1 class='colorDisplay'>No Colors added</h1>";
      }
    });
  });
  
/*
Event listener for the button used to hide the palate
-----------------------------------------------------
*/
  hidePlt = document.querySelector(".hide-palate");
  hidePlt.addEventListener("click", () => {
    showPlt = document.querySelector("#show-palate");
    showPlt.classList.remove("hide");
    const links = document.querySelector(".links");
    links.removeChild(hidePlt)
    colorDisplay = document.querySelector(".colorDisplay");
    const main = document.querySelector("main");
    main.removeChild(colorDisplay);
    colorChooser.classList.remove('hide')
    main.appendChild(colorChooser)
    const addBtn = document.getElementById("add-to-palate");
    addBtn.addEventListener("click", addItems);
    const hexLi = document.querySelector('.hex');
    hexLi.classList.remove('hide') 
  });
});


/*
Function for adding colors to the palate
----------------------------------------
*/
function addItems(){
  colorExists = false;
  colors = Obj.getColors();
  colors.forEach((colorCode) => {
    if (colorCode === hex2) {
      colorExists = true;
    }
  });
  if (colorExists) {
    error = document.getElementById("error")
    error.textContent = hex2 + " already exists in your palate";
    error.classList.remove('hide')
    setTimeout(()=>{
      error.classList.add('hide')
    },2000)
  } else {
    if (colors.length < 7) {
      colors.push(hex2);
      const colorSelector = document.querySelector(".container");
    } else {
      error = document.getElementById("error")
      error.textContent = "Not more than 7 colors can be added to the palate";
      error.classList.remove('hide')
      setTimeout(()=>{
        error.classList.add('hide')
      },1000)
    }
  }
}

const addBtn = document.getElementById("add-to-palate");
addBtn.addEventListener("click", addItems);

