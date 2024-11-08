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

const picturesArr = [
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeQ2IQ-ZJAz7JjtE6yAMbzfEkvBgG6ZMR_lA&s',
    alt: 'cat'},
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIs55YYqbZw5eV_7sCXa_OCmb-raPssT_olw&s',
    alt: 'dog'}]

const btnForSwitchingImg = document.getElementById('btnForSwitchingImg')
const picture = document.getElementById('picture')

btnForSwitchingImg.addEventListener('click', (e) => {
  const pictureValue = picture.getAttribute('src')
  if(pictureValue === picturesArr[0].src) {
    picture.setAttribute('src', picturesArr[1].src)
    picture.setAttribute('alt', picturesArr[1].alt)
  } else {
    picture.setAttribute('src', picturesArr[0].src)
    picture.setAttribute('alt', picturesArr[0].alt)
  }
})