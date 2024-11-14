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

// const [justbtn] = document.getElementsByTagName('button')
// const par = document.getElementById('param')

function squareNumber() {
  const num = +prompt('Enter number: ')

  if(!isNaN(num)) {
    par.textContent = `Result: ${Math.pow(num, 2)}`
  } else {
    throw new TypeError('Not right type!')
  }
}

// justbtn.addEventListener('click', squareNumber)


console.log('===============')


// class task 05.11.2024
/*
  Створити дів, всередині якого будуть знаходитися кнопки
  текстом яких будуть назви тем
  ('світла', 'темна', ...)
  також зробити параграф в якому буде написано назву поточної теми

  написати функцію-слухач яка буде міняти текст параграфа в залежності від
  того, на яку кнопку перемикання теми ви натиснули
  обробник має висіти тільки на одному елементі
*/

// const containerOfTheme = document.getElementById('containerOfTheme')
// const themPar = document.getElementById('themPar')

function logTheme(e) {
  if(e.target.tagName === 'BUTTON') {
    themPar.textContent = e.target.textContent
  }
}

// containerOfTheme.addEventListener('click', logTheme)


console.log('===============')


// class task 07.11.2024
/*
  створити формочку з інпутом та кнопкою відправки
  також поруч із формою має бути параграф з текстом

  користувач буде ввдоити в інпут числа

  при відправці форми у параграфі має відобразитися число у квадраті

  після відправки форми підчистити її

  * якщо користувач вводить некорректне число то у парагрфі написати що він
    має ввести нормане число
*/

//  basic level:
// const form = document.getElementById('form')
// const par = document.getElementById('par')

// form.addEventListener('submit', (e) => {
//   e.preventDefault()
//   const formInput = e.target.elements.input1

//   console.log(typeof formInput.value) // string (завжди)

//   const number = +formInput.value

//   if(isNaN(number)) {
//     par.textContent = `Put right number`
//   } else {
//     par.textContent = `Squared value: ${formInput.value * formInput.value}`
//   }
//   e.target.reset()
// })


console.log('===============')


// class task 07.11.2024
/*
  створити картинку та кнопку
  також зробити масив в якому розмістити 2 посилання на якісь картинки (значення src)

  по натисканню на кнопку ваша картинка має перемикатися між цими двома src

  * переробити структури масиву так, щоб в ньому одночасно можна було зберігати і значення src і значення alt. При натисканні на кнопку треба змінювати не тільки src але і alt
*/

// const picturesArr = [
//   {
//     src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeQ2IQ-ZJAz7JjtE6yAMbzfEkvBgG6ZMR_lA&s',
//     alt: 'cat'},
//   {
//     src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIs55YYqbZw5eV_7sCXa_OCmb-raPssT_olw&s',
//     alt: 'dog'}]

// const btnForSwitchingImg = document.getElementById('btnForSwitchingImg')
// const picture = document.getElementById('picture')

// btnForSwitchingImg.addEventListener('click', (e) => {
//   const pictureValue = picture.getAttribute('src')
//   if(pictureValue === picturesArr[0].src) {
//     picture.setAttribute('src', picturesArr[1].src)
//     picture.setAttribute('alt', picturesArr[1].alt)
//   } else {
//     picture.setAttribute('src', picturesArr[0].src)
//     picture.setAttribute('alt', picturesArr[0].alt)
//   }
// })


console.log('===============')


// class task 08.11.2024
/*
  створити дів всередині якого будуть кнопки
  текст кнопок буде різними кольорами українською мавою

  при натисканні на кнопку колір фону діва має змінитися на колір з кнопки
  для передачі значення кольорів використовувати користувацькі атрибути

  колір фону можна міняти наступним чином:
  element.style = ''
  element.style.backgroundColor = ''
*/

// const changedColorDiv = document.getElementById('changedColorDiv')

// changedColorDiv.addEventListener('click', (e) => {
//   const {target} = e

//   if(target.tagName === 'BUTTON') {
//     const color = target.dataset.bgColor
//     changedColorDiv.style.backgroundColor = color
//   }
// })


console.log('===============')


// class task 08.11.2024
/*
  створити функцію, яка приймає рядок з текстом
  функція має створити параграф, покласти в нього текст з параметра функції
  і прикріпити параграф до кінця елементу body
*/

// const creationParagraph = function (str) {
//   const par = document.createElement('p')
//   par.textContent = str
//   document.body.appendChild(par)
// }

// creationParagraph('text')


console.log('===============')


// hometask 12.11.2024
/*
  Створити функцію, яка буде послідовно відображати числа у консолі від 1 до 10
  Числа мають показуватися з інтервалом 100мс

  1 ...
  2 ...
  3 ...
  4

  можна виршіти двома шляхами:
    setInterval - треба якось вчасно зупинити інтервал по якійсь умові
    setTimeout - рішення буде засновано на рекурсії яка буде запускати таймаути поки певна умова істинна
*/

// function countInterval() {
//   let i = 0

//   const intervalId = setInterval(() => {
//     console.log(++i)
//     if(i >= 10) {
//       // console.timeEnd('Interval')
//       clearInterval(intervalId)
//     }
//   }, 100)
// }

// перевірка швидкості (час)
// console.time('Interval')
// countInterval()

// or

// function countTimeout(i = 0) {

//   if(i < 10) {
//     setTimeout(() => {
//       console.log(++i)
//       countTimeout(i)
//     }, 100)
//   } else {
//     console.timeEnd('Timeout')
//   }
// }

// console.time('Timeout')
// countTimeout()


console.log('===============')


// 
/*
  Створити через конструктор проміс
  Проміс має у 50% випадків виконуватися успішно
  а в інших випадках - провалюватися
  через методи then i catch обробити обидва випадки
*/

const promise = new Promise((resolve, reject) => {
  // if(Math.random() > 0.5) {
  //   resolve('Well!')
  // } else {
  //   reject('Not Well!')
  // }
// or
  Math.random() > 0.5 ? resolve('Well!') : reject('Not Well!')

  promise.then(() => console.log('Success'))
  promise.catch(() => console.log('error'))
})