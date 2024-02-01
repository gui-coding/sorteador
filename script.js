function buttonDraw(){
    const min = Math.ceil(document.querySelector(".number1").value)
    const max = Math.floor(document.querySelector(".number2").value)
    const resultParagraph = document.querySelector(".result")

    const result = Math.floor(Math.random() * (max - min + 1) + min)

    resultParagraph.innerHTML = result
    
}

function buttonClean(){
    window.location.reload(true);
}
