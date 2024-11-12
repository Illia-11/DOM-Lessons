// Синхронний код

console.log('first')

console.log('second')

// for(let i = 0; i < 5_000_000; i++) {}

console.log('third')

// асинхронний код
const btn = document.getElementById('btn')

btn.addEventListener('click', () => {
  // while(true) {}
})

function sum() {
  return 1+1
}

console.log(sum())

// setTimeout - функція встановлення зворотнього відліку
// setTimeout(function callback() {
//   console.log('delayed')
// }, 1000)


console.log(1)

console.log(2)

const id = setTimeout(() => {
  console.log(3)
}, 1000)

console.log(4)
// 1 2 4 3

// відміна та маута по його id
clearTimeout(id)

// setInterval - встановлює інтервал, який буде працювати до зупинки запускаючи коллбек
const intervalId = setInterval(() => {
  console.log('interval')
}, 1500)

// зупинка інтервалу
clearInterval(intervalId)

const userData = {
  email:'test@test.test',
  password: '12345admin',
  id: 5,
  address: {
    city: 'Kyiv',
    country: 'Ukraine'
  },
  friends: [],
  isMale: true,
  someImportantData: null,
  someSymbol: Symbol('test'),
  isAdult: function () {
    return this.age >= 18
  }
}


// Серіалізація - процес перетворення даних у вигляд зручний для передачі
const jsonString = JSON.stringify(userData)
/*
  Відімнності JSON та JS:
    1. рядки в JSON можуть бути тільки подвійними лапками
    2. ключі в обʼєктах мають бути рядками
    3. відсутність висячих ком у кінці обʼєктів та масивів
*/

// Десереалізація - процес відновлення даних аз зручного для передачі формату
const userData2 = JSON.parse(jsonString)

console.log(userData)
console.log(userData2)

console.log(userData === userData2) // false

// Види копій обʼєктів у JS:

const posts = [
  {id: 1, title: 'bla', likes: 50},
  {id: 2, title: 'bla bla', likes: 5},
  {id: 3, title: 'bla bla bla', likes: 150},
]

// поверхнева копія обʼєкта - копія робиться тільки для самої змінної обʼєкта
// властивості переносяться без змін
const postsCopy1 = posts.slice()
const postsCopy2 = [...posts]

posts === postsCopy1 // false
console.log(posts[1] === postsCopy1[1]) // true

// глибока копія - копія робиться для всіх речей в обʼєкті
const temp = JSON.stringify(posts)
const postsCopy3 = JSON.parse(temp)

postsCopy3[2] === posts[2] // false

const postsCopy4 = JSON.parse(JSON.stringify(posts))

const postsCopy5 = structuredClone(posts)
postsCopy5[0] === posts[0] // false


function test() {
  console.log()

  function test2() {}

  test2()

  console.log(3)
}

setTimeout(test, 5000)

// Типовий асинхроний код в JS у 2014 році

function readFile() {}

function writeFile() {}

// error first callback
readFile('../test.json', function callback (err, fileData) {
  if(err) {
    throw err;
  }

  console.log(fileData);

  readFile('../test.json', function callback (err, fileData2) {
    if(err) {
      throw err;
    }

    readFile('../test.json', function callback (err, fileData3) {
      if(err) {
        throw err;
      }
      const newData = fileData + fileData2 + fileData3;

      writeFile('../new-test.json', 'utf-8', newData ,function callback (err) {
        if(err) {
          throw err;
        }
    
        console.log('ми записали файл!');
      });
    });
  });
});


// Promise - обіцянка, сучасний спосіб написання асинхронного коду у JS
// вирішує проблему коллбек хела
/*
  Проміс - спеціальний обʼєкт містить результат роботи асинхронної операції

  У обʼєкта проміса є 3 можливих стани:
    - pending (очікується) - очікуємо виконання асинхроної операції
    - fullfiled (виконаний) - асинхрона операція була успішно завершена
    - rejected (відхилений) - у промісі сталася помилка

  Проміс може знаходитися у 2 з цих трьох станів:
    pending -> fullfiled
    pending -> rejected
*/

// Створення проміса
const promise = new Promise(executor)

function executor(resolve, reject) {
  // console.log(resolve)
  // console.log(reject)
   // функція, яка сигналізує, що дія виконана успішно і аргумент цієї функції буде результуючими даними у промісі
  resolve('test string')

     // функція, яка сигналізує, що дія виконана з помилкою і аргумент цієї функції буде результуючими даними у промісі
  reject('bad stuff')
}