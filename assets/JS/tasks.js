// hometask 01.11.2024
/*
basic level:
  зробити в html файлі кнопку
  при натисканні на кнопку ви маєта алертом виводити кількість кліків на цю кнопку

bonus level:
  приховати від зовншього коду кількість кліків
*/

// basic && bonus level:
// const [clickMeBtn] = document.getElementsByTagName('button')

function createAlertClickCounter() {
  let counter = 0

  function alertClicksCounter() {
    alert(++counter)
  }

  return alertClicksCounter
}

// clickMeBtn.addEventListener('click', createAlertClickCounter())


console.log('===============')


// class task 04.11.2024
/*
HTML structure:

  <h1>H1 1</h1>
  <div>
    <h1>H1 2</h1>
    <section>
// <!-- знайти цей h1 -->
// <h1>Find ME</h1> 
      <img src="" alt="img 1">
      <p>
        par1
        <span>asdsad</span>
      </p>
    </section>
// <!-- знайти цей img -->
// <img src="" alt="Find ME">
  </div>
  <section class="section">
    <h2>asdsad</h2>
// <!-- знайти цей p -->
// <p>Find ME</p>
  </section>
*/

// solution:

const getH1Element = document.querySelector('body>div>section>h1')
console.log(getH1Element)

const getImgElement = document.querySelector('img[alt="Find ME"]')
console.log(getImgElement)

const getPElement = document.querySelector('.section>p')
console.log(getPElement)


console.log('===============')


// class task 05.11.2024
/*
  в HTML зробити кнопку та параграф з текстом

  При натисканні на кнопку промптом спитати у користувача число
  після цього відобразити у параграфі квадрат цього числа
*/

const [justbtn] = document.getElementsByTagName('button')
const par = document.getElementById('param')

function squareNumber() {
  const num = +prompt('Enter number: ')

  if(!isNaN(num)) {
    par.textContent = `Result: ${Math.pow(num, 2)}`
  } else {
    throw new TypeError('Not right type!')
  }
}

justbtn.addEventListener('click', squareNumber)
