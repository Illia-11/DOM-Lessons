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
  // console.log(event)

  // посилання на обʼєкт з яким сталася подія
  // console.log(event.target)

  // посилання на обʼєкт, чий обробник було запущено
  console.log(event.currentTarget)

  // прибираємо слухач після того як він відпрацював
  // передаємо тип події та посилання на ту саму функцію
  // resetBtn.removeEventListener('click', handleResetClick)
}
const container = document.querySelector('.container')

function stopEvent(event) {
  console.log(event)
  // припиняється подальший запуск обробників подій
  event.stopPropagation()
}

// resetBtn.addEventListener('click', handleResetClick)
// container.addEventListener('click', handleResetClick)
// container.addEventListener('click', stopEvent, true)
// document.body.addEventListener('click', handleResetClick)
// document.addEventListener('click', handleResetClick)

/*
  true - запуск на етапі занурення
  false - на етапі всплиття
*/
// resetBtn.addEventListener('click', handleResetClick, false)
// container.addEventListener('click', handleResetClick, true)
// document.body.addEventListener('click', handleResetClick, {capture: true})
// document.addEventListener('click', handleResetClick, false)

/*
  Фази обробки подій:
    1. дивиться з ким сталася наша подія (занурення)
    2. найглибший елемент у дереві з яким подія трапилась (target)
    3. браузер запускає обробники подій починаючи з найглибшого до найпершого (всплиття)
*/

// resetBtn.addEventListener('click', function testFunc() {
//   console.log('testing')
// })

// dispatchEvent - симулює подію на якомусь елементі

// const fakeClick = new MouseEvent('click')
// resetBtn.dispatchEvent(new MouseEvent('click'))

/*
  Node (вузол) - основний будівельний блок ДОМу
  Всі елементи, атрибути та текст у ДОМі робляться через вузли

  Основні властивості вузлів:

  node.baseURI - URL адреса сайту

  node.childNodes - список всіх дитячих вузлів поточного вузла
  node.firstChild - перший дитячий вузол
  node.lastChild - останній дитячий вузол
  node.nextSibling - посилання на настпуний вузол після цього
  node.previousSibling - посилання на попередній вузол

  node.parentNode - повертає батьківський вузол
  node.parentElement - повертає батьківський елемент

  node.textContent - містить текстовий вміст цього вузла. Дозволяє міняти текст вузла / елемента
*/

const btnContainer = document.getElementById('btnContainer')

function logText(e) {
  if(e.target.tagName === 'BUTTON') {
  console.log(e.target.textContent)
  }
}

btnContainer.addEventListener('click', logText)

/*
  Форми
*/

const formatsubmitBtn = document.getElementById('formatsubmitBtn')
const form = document.getElementById('form')

// formatsubmitBtn.addEventListener('click', (e) => {
//   console.log('test')
//   e.preventDefault()
// })

// submit - подія відправки форми
form.addEventListener('submit', (e) => {
  // зупинка станудартної поведінки браузера при виконанні події
  e.preventDefault()
  console.log('form submit event')
  console.log(e)

  const {target: formElement} = e
  
  // всі інтерактивні елементи форми
  console.log(formElement.elements)

  // console.log(formElement.elements.inputName)
  const formInput = formElement.elements.inputName
  console.log(formInput)

  /*
    Отримати значення, яке було введено в інпут
  */
  console.log(formInput.value)

  // очстка даних у формі
  // formInput.value = ''
  formElement.reset()
})

const imgSwitchBtn = document.getElementById('imgSwitchBtn')
const picture = document.getElementById('picture')

imgSwitchBtn.addEventListener('click', (e) => {

  // зміна атрибутів

  // 1. сеттери для унікальних атрибутів елемента / деяких глобальних атрибутів
  // picture.src = 'https://gardenclub.ua/wp-content/uploads/2023/01/2b852b1737725d4e8b4b80910839e781a74dba97-1.jpeg'
  // picture.alt = 'british shynshyla'

  // picture.id = 'newId'

  // picture.className = 'newClass1 newClass2'

  // picture.style = 'border: 5px solid black; width: 300px; height: 300px'

  // 2. через setAttribute
  // picture.setAttribute('src', 'https://gardenclub.ua/wp-content/uploads/2023/01/2b852b1737725d4e8b4b80910839e781a74dba97-1.jpeg')

  picture.setAttribute('alt', 'flower')

  picture.setAttribute('id', 'flw')

  picture.setAttribute('style', 'border: 5px solid black; width: 300px; height: 300px')

  picture.setAttribute('my-attribute', 'test')

  // 3. через вузол-аттрибут
  const srcNode = document.createAttribute('src')
  console.dir(srcNode)

  srcNode.value = 'https://gardenclub.ua/wp-content/uploads/2023/01/2b852b1737725d4e8b4b80910839e781a74dba97-1.jpeg'

  picture.setAttributeNode(srcNode)
})

/*
  ще деякі цікаві методи роботи з атрибутами:

    picture.hasAttribute('src') - перевірка наявності атрибута
    picture.getAttribute('src') - отримання значення атрибута
    picture.hasAttributeNode('src') - отримати обʼєкт вузла атрибута
    
    picture.removeAttribute('src') - видалення атрибута з елемента
*/


/*
  Користувацькі атрибути (data-*)
  атрибути, які розпочинаються з data-
*/

const div = document.getElementById('div')

// отримання значення користуваського атрибуту
const currentTheme = div.getAttribute('data-theme')

// dataset - властивість куди скидають значення всіх користуваських атрибутів
console.log(div.dataset)

console.log(div.dataset.theme)
// кебаб кейс в html автоматично перетворюється в кемел кейс у JS
console.log(div.dataset.longAttributeName)

div.setAttribute('data-theme', 'dark')


// створення елементів
const elem = document.createElement('h1')

elem.textContent = 'Hello from DOM'

elem.id = 'dom-h1'

const rootDiv = document.getElementById('root')

// вставка elem останньою дитиною rootDiv
rootDiv.appendChild(elem)

const p1 = document.createElement('p')

p1.textContent = 'test'

rootDiv.append(p1, 'some Text')

// видалення елементів

// 1. removeChild - видаляє у елемента дитину
rootDiv.removeChild(elem)

// 2. remove - видаляє сам елемент
p1.remove()


/*
  Element - клас для елементів у ДОМ

  elem.children - список дітей-елементів певного елемента

  elem.className - рядок з класом елемента
  elem.className = 'class-1 class-2' - заміна класів

  elem.classList - обʼєкт атрибуту класу
  elem.classList.add('className', 'className2') - додає до існуючих класів новий клас/и
  elem.classList.remove('className', 'className2') - прибирає вказаний клас/и зі списку існуючих класів
  elem.classList.toggle('className') - додає або видаляє вказаний клас зі списку класів

  elem.innerHTML - дає доступ до повної внутрішньої HTML розмітки елемента
*/

const post = {
  user: 'Leanne Graham',
  id: 1,
  title:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, ad aut. Iste?',
  body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse minus atque iste exercitationem ex quae enim unde accusamus laudantium nisi.'
}

const renderRoot = document.getElementById('render-root')

function createPost(postObject) {
  const postArticle = document.createElement('article')
  postArticle.classList.add('post')

  const postTitle = document.createElement('h2')
  postTitle.classList.add('post-title')
  postTitle.textContent = postObject.title

  const postSubTitle = document.createElement('h3')
  postSubTitle.classList.add('post-subtitle')
  postSubTitle.textContent = `by ${postObject.user}`

  const postText = document.createElement('p')
  postText.classList.add('post-text')
  postText.textContent = postObject.body

  postArticle.append(postTitle, postSubTitle, postText)

  return postArticle
}

const post1Elem = createPost(post)

renderRoot.append(post1Elem)
