const text = "Hello World";
const upperText = text.toUpperCase();
console.log(upperText);
//تمرین 1: تبدیل رشته به حروف کوچک

const textt = "HELLO"
const lower = textt.toLocaleLowerCase();
console.log(lower)

//تمرین 2: بررسی اینکه آیا یک رشته با حروف بزرگ شروع می‌شود

const capitalizeFirstLetter = str => str[0].toUpperCase() + str.slice(1);
console.log(capitalizeFirstLetter("hello")); // Hello

//تمرین 3: تبدیل اولین حرف یک رشته به حروف بزرگ

const capitalizeFirstLetterr = str => str[0].toUpperCase() + str.slice(1);
console.log(capitalizeFirstLetterr("hello")); // Hello

//تمرین 4: تبدیل هر کلمه در یک رشته به حروف بزرگ

const texttt = "hello world";
const capitalizedText = texttt.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
console.log(capitalizedText); // Hello World

//تمرین 5: بررسی اینکه آیا یک رشته تماماً از حروف بزرگ تشکیل شده است
const isAllUpperCase = str => str === str.toUpperCase();
console.log(isAllUpperCase("HELLO")); // true
console.log(isAllUpperCase("Hello")); // false

//تمرین 6: جایگزینی حروف بزرگ با حروف کوچک و برعکس

const swapCase = str => 
    str.split('')
       .map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase())
       .join('');

console.log(swapCase("Hello World")); // hELLO wORLD

//تمرین 7: تبدیل حروف بزرگ به کوچک و کوچک به بزرگ در یک رشته

const textttt = "Hello World";
const swappedText = textttt.split('').map(char => {
    return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
}).join('');
console.log(swappedText); // hELLO wORLD

