var colorList = ['blue','green','red','yellow','antiquewhite','aqua','cyan','aquamarine','blueviolet','brown','crimson','darkcyan','magenta','darkmagenta','turquoise','tomato','thistle','teal','chocolate','gold','lavender','darkslategray','deepskyblue'];

const btn = document.getElementById("shuffle-button")
btn.addEventListener('click',()=>{ 
    let RandomNo = Math.floor(Math.random() * colorList.length)
    color = colorList[RandomNo]
    document.body.style.backgroundColor = color;
    colorText = document.getElementById('color')
    colorText.textContent = '"'+color+'"'
})