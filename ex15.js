const names = ["ali", "sara", "reza", "mahmoud", "fatemeh", "amir"];
const filter = names.filter(name =>name.lenght>5);
const up = names.map(name => name.toUpperCase())
const index = up.map((name , index)=> `${index + 1} - ${name}`);
console.log(index)
//فقط اسامی که طول آن‌ها بیشتر از ۵ کاراکتر است را انتخاب کنید.
//این اسامی را به حروف بزرگ تبدیل کنید.
//سپس هر اسم را با یک شماره (ایندکس) همراه کنید و به‌صورت یک رشته نمایش دهید.

//کد اصلاح‌شده:
const namess = ["ali", "sara", "reza", "mahmoud", "fatemeh", "amir"];

// 1. فیلتر کردن اسامی با طول بیشتر از ۵ کاراکتر
const filteredNames = namess.filter(name => name.length > 5);

// 2. تبدیل اسامی فیلتر شده به حروف بزرگ
const upperCaseNames = filteredNames.map(name => name.toUpperCase());

// 3. اضافه کردن شماره (ایندکس) به هر اسم و نمایش آن به‌صورت یک رشته
const indexedNames = upperCaseNames.map((name, index) => `${index + 1} - ${name}`);

console.log(indexedNames);

//تمرین 2: تبدیل اسامی به حروف کوچک و اضافه کردن طول آن‌ها

const namesss = ["ALI", "SARA", "REZA"];
const lowerCaseNames = namesss.map(name => name.toLowerCase());
const namesWithLength = lowerCaseNames.map(name => `${name} (${name.length})`);
console.log(namesWithLength); // ['ali (3)', 'sara (4)', 'reza (4)']

//تمرین 3: فیلتر کردن اعداد زوج و محاسبه مربع آن‌ها

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);
const squaredNumbers = evenNumbers.map(num => num * num);
console.log(squaredNumbers); // [4, 16, 36]

