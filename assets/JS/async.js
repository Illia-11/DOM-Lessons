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
