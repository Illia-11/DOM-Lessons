// hometask 01.11.2024

const buttons = document.getElementsByTagName('button')
const [clickMeBtn] = buttons

console.log(buttons)

let counter = 0

function alertClicksCounter() {
  counter++
  alert(counter)
}

clickMeBtn.addEventListener('click', alertClicksCounter)
