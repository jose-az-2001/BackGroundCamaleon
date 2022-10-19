var Red = 255
var Green = 0
var Blue = 0
var cadena
var BodColor = document.getElementById("bod")
var divColor = document.getElementById("color")

function Change(){
    Red = Math.floor(Math.random()*256)
    Green = Math.floor(Math.random()*256)
    Blue = Math.floor(Math.random()*256)
    document.body.style.background='rgb('+Red+','+Green+','+Blue+')'
    divColor.innerText = 'rgb('+Red+','+Green+','+Blue+')'
}
