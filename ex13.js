let number = [1,2,3,4,5,6]
let doubled = number.map(num => num * 2);
console.log(doubled)

//تبدیل اعداد به مربع آن‌ها
const numbers = [1, 2, 3, 4, 5, 6];
const squared = numbers.map((num) => num ** 2);
console.log(squared); // خروجی: [1, 4, 9, 16, 25, 36]

// فیلتر کردن و سپس تبدیل

const numberss = [1, 2, 3, 4, 5, 6];
const doubledEvens = numberss.filter((num) => num % 2 === 0).map((num) => num * 2);
console.log(doubledEvens); // خروجی: [4, 8, 12]

//فیلتر کردن اعداد زوج و سپس تبدیل آن‌ها به دو برابر

const num = [1,2,3,4,5,6,7]
const even = num.filter((nums)=> nums % 2 === 0)
console.log(even)

//تمرین ترکیبی: تبدیل و فیلتر کردن داده‌ها

const analyzeNumbers = (arr) => {
    // 1. تبدیل اعداد به مربع آن‌ها
    const squared = arr.map((num) => num ** 2);
  
    // 2. فیلتر کردن اعداد زوج
    const evenNumbers = squared.filter((num) => num % 2 === 0);
  
    // 3. تبدیل اعداد زوج به دو برابر
    const doubledEvens = evenNumbers.map((num) => num * 2);
  
    // 4. برگرداندن نتیجه نهایی
    return `آرایه مربع‌شده: ${squared.join(",")}
  آرایه فیلتر شده (اعداد زوج): ${evenNumbers.join(",")}
  آرایه نهایی (اعداد زوج دو برابر شده): ${doubledEvens.join(",")}`;
  };
  
  // تست تابع
  const numbersss = [1, 2, 3, 4, 5, 6];
  
  console.log(analyzeNumbers(numbersss)); 
  // خروجی: 
  // "آرایه مربع‌شده: 1,4,9,16,25,36
  // آرایه فیلتر شده (اعداد زوج): 4,16,36
  // آرایه نهایی (اعداد زوج دو برابر شده): 8,32,72"