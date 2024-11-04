// hometask 01.11.2024
/*
basic level:
  зробити в html файлі кнопку
  при натисканні на кнопку ви маєта алертом виводити кількість кліків на цю кнопку

bonus level:
  приховати від зовншього коду кількість кліків
*/

// basic && bonus level:
const [clickMeBtn] = document.getElementsByTagName('button')

function createAlertClickCounter() {
  let counter = 0

  function alertClicksCounter() {
    alert(++counter)
  }

  return alertClicksCounter
}

clickMeBtn.addEventListener('click', createAlertClickCounter())

console.log('===============')