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
