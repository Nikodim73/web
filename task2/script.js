let button = document.getElementById("plus-button") 
let number = document.getElementById("number")


button.onclick = () => {
    number.textContent = parseInt(number.textContent) +1
}