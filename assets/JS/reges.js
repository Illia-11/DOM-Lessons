// Regular Expression (RegEx) - регулярки
/*
  Мова пошуку тексту по шаблонам

  Засновані на використанні метасимволів

  Регулярка кладається з 2 частин:
    - шаблон пошуку - описує що шукаємо
    - пропорції - налаштування / параметри регулярки

    /шаблон/пропорції
*/

/*
  Шаблони:
    /text/ - шукає слово

  Метасимволи шаблонів:
    . - будь-який один символ
    \ - екранування спеціального символа (наприклад: \.)
    \b - шукає "межу" слова
    \B - шукає місце між 2 сусідніми символами в слові (окрім зовнішніх меж)
    \n - перехід на новий рядок
    \t - табуляція
    ^ - початок тексту або рядка
    $ - кінець тексту або рядка
*/

/*
  [ab1v9] - пошук одного символа з перелічених у середині дужок (крапка всередині вважається звичайним символом)

  [a-z] - вказання одного символа з діапазону (Юнікод)

  [A-Za-z] - вказання декількох діапазонів одночасно

  [^a-z] - пошук усіх символів окрім тих, що в дужках


  Пошук цифри:
    [0-9]
      \d
  Пошук НЕ цифри:
    [^0-9]
      \D
  Пошук "словесних" символів:
    [a-zA-Z0-9_]
      \w
  Пошук НЕ "словесних" символів:
    [^a-zA-Z0-9_]
      \W
  Пошук недрукованих (whitespace) символів:
    [ ]
      \s
  Пошук НЕ недрукованих (whitespace) символів:
    [^ ]
      \S
*/

/*
  Квантифікатори = частинка регулярки, яка довзволяє сказати скільки разів треба повторити частину шаблона, яка іде прямо перед квантифікатором

  [0-9]{3} - пошук трьох цифр

  [0-9]{2,5} - пошук від 2 до 5 цифр

  [0-9]{2,} - пошук від 2 до бескінечності цифр

  [0-9]{0,7} - пошук від 0 до 7 цифр


  або є, або немає:
    X{0,1}
    X?
  від нуля до нескінченності:
    X{0,}
    X*
    .* - будь-яка кількітсть будь-яких символів
  від 1 до нескінченності:
    X{1,}
    X+
*/

/*
  Прапорці:

  /gmiu

  /g - шукає не тільки перше входження шаблону
  /i - нечутливість до регістру
  /m - переводить ^ і $ в режим рядка (зазвичай сидить в парі з g)
*/

/*
  Групування:
    дозволяє виділити певну частину шаблону як один елемент (зручно для вкантифікатора)
    (lorem) - група з захопленням
    (?:lorem) - група без захоплення

    ^yes(?:-yes){0,3}$
*/

/*
  Логічне АБО

  x|y - підставляє рішення або з х або з у
*/

/*
  RegExp у JS
*/

// Створення

// 1. Літерал
const regex1 = /^[0-9]/gm

// 2. Конструктор
const regex2 = new RegExp('^[0-9]', 'gm')

const result1 = regex1.exec(`5\n1av`)

const res2 = regex1.test('5 ')

const strToTest = `5\n1av`


const startIndex = strToTest.search(regex1)
console.log(startIndex)

const res = strToTest.match(regex1)