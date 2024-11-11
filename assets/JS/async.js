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
