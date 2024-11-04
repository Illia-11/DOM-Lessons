/*
  DOM:
    Document
    Object
    Model
  об'єктна модель документа.

  Отримання досутпу до DOM:
    window - об'єктне уявлення браузера

    window.document - вхідна точка в API DOM
    document
*/
console.log(document);

/*
  концепції взаємодії з DOM:
    1. Все у DOM зроблено у вигляді об'єктів
    2. Маємо можливість казати ДОМу, що ми хочемо зробити за допомогою подій
*/

/*
  При натисканні на кнопку вивести алертом повідомлення

  1. нам треба знайти нашу кнопку
  2. ми маєно написати що саме ми хочемо щоб сталося при натисканні на кнопу
  3. ми маємо кнопці з пункту 1 сказати що коли на наї клікають вона має запустити код з пунту 2
*/

// 1. знайти кнопку
const buttons = document.getElementsByTagName('button');
const [clickMeBtn] = buttons;

// 2. сказати що робити 
function showMessage () {
  alert('You clicked on button');
}

// 3. при кліку на 1 заупустити 2
/*
  target.addEventListener(type, listener);

  target - той, з ким відбудеться подія
  type - рядок, який каже яка саме подія має трапитися
  listener - функція, яка запуститься браузером коли подія відбудеться з target
*/
clickMeBtn.addEventListener('click', showMessage);

/*
  методи пошуку елементів у ДОМ-дереві:

  document.getElemntsByTagName('button')
    повертає масивоподібну колекцію всіх елементів на сторінці з вказаним тегом
  
  document.getElemntsByClassName('class)
    повертає масивоподібну колекцію всіх елементів на сторінці з вказаним класом
  
  document.getElemntsByName('someName)
    повертає масивоподібну колекцію всіх елементів на сторінці з вказаним
  
  * document.getElemntById('someId')
    повертає перший елемент на сторінці з вказаним айдішніком


  * document.querySelector()
    повертає перший елемент на сторінці з вказаним css селектором
  
  * document.querySelectorAll()
    повертає масив елементів на сторінці з вказаним css селектором
*/

// овертає масивоподібну колекцію всіх елементів на сторінці з вказаним класом
const [firstErrorBtn] = document.getElementsByClassName('error')

// повертає масивоподібну колекцію всіх елементів на сторінці з вказаним
const inputs = document.getElementsByName('someInputName')

// повертає перший елемент на сторінці з вказаним айдішніком
const select1 = document.getElementById('select-1')

// повертає перший елемент на сторінці з вказаним css селектором
const input = document.querySelector('body>input')

// повертає масив елементів на сторінці з вказаним css селектором
const btns = document.querySelectorAll('button')

/*
  на кнопку ресет повісити функцію-слухач, яка має виводити повідомлення
    повідомлення має показатися тільки при першому натисканні
*/

const resetBtn = document.getElementById('reset-btn')

// рішення 1 - через зовнішню змінну
// let isMessageShown = false

// function handleResetClick() {
//   // console.log('click')
//   if(!isMessageShown) {
//     alert('You clicked on button "reset"')
//     isMessageShown = true
//   }
// }

// resetBtn.addEventListener('click', handleResetClick)

// рішення 2 - зробити одноразовим через обʼєкт налаштувань addEventListener
// function handleResetClick() {
//   console.log('click')
//   alert('You clicked on button "reset"')
// }

// resetBtn.addEventListener('click', handleResetClick, {once: true})

// рішення 3 - removeEventListener
function handleResetClick(event) {
  // обʼєкт події, що трапилася
  console.log(event)

  // посилання на обʼєкт з яким сталася подія
  console.log(event.target)

  // посилання на обʼєкт, чий обробник було запущено
  console.log(event.currentTarget)

  // прибираємо слухач після того як він відпрацював
  // передаємо тип події та посилання на ту саму функцію
  // resetBtn.removeEventListener('click', handleResetClick)
}
const container = document.querySelector('.container')

resetBtn.addEventListener('click', handleResetClick)
container.addEventListener('click', handleResetClick)
document.body.addEventListener('click', handleResetClick)
document.addEventListener('click', handleResetClick)

// resetBtn.addEventListener('click', function testFunc() {
//   console.log('testing')
// })

// dispatchEvent - симулює подію на якомусь елементі

// const fakeClick = new MouseEvent('click')
// resetBtn.dispatchEvent(new MouseEvent('click'))
