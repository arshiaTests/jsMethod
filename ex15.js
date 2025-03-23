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

//تمرین 4: تبدیل اسامی به حروف بزرگ و معکوس کردن آن‌ها

const namessss = ["ali", "sara", "reza"];
const upperCaseNamesss = namessss.map(name => name.toUpperCase());
const reversedNames = upperCaseNamesss.map(name => name.split('').reverse().join(''));
console.log(reversedNames); // ['ILA', 'ARAS', 'AZER']

//تمرین 5: فیلتر کردن اسامی با طول کمتر از ۴ و اضافه کردن علامت تعجب

const namesssss= ["ali", "sara", "reza", "mahmoud"];
const shortNames = namesssss.filter(name => name.length < 4);
const excitedNames = shortNames.map(name => `${name}!`);
console.log(excitedNames); // ['ali!', 'reza!']


//تمرین ترکیبی: تحلیل و تبدیل اسامی

const analyzeNamesAndNumbers = (names, numbers) => {
    // 1. فیلتر کردن اسامی با طول بیشتر از ۵ کاراکتر
    const longNames = names.filter((name) => name.length > 5);
  
    // 2. تبدیل اسامی فیلتر شده به حروف بزرگ
    const upperCaseNames = longNames.map((name) => name.toUpperCase());
  
    // 3. اضافه کردن شماره (ایندکس) به هر اسم
    const indexedNames = upperCaseNames.map(
      (name, index) => `${index + 1} - ${name}`
    );
  
    // 4. تبدیل اسامی به حروف کوچک و اضافه کردن طول آن‌ها
    const lowerCaseNamesWithLength = names.map(
      (name) => `${name.toLowerCase()} (${name.length})`
    );
  
    // 5. فیلتر کردن اعداد زوج و محاسبه مربع آن‌ها
    const evenNumbers = numbers.filter((num) => num % 2 === 0);
    const squaredNumbers = evenNumbers.map((num) => num * num);
  
    // 6. تبدیل اسامی به حروف بزرگ و معکوس کردن آن‌ها
    const reversedNames = names
      .map((name) => name.toUpperCase())
      .map((name) => name.split("").reverse().join(""));
  
    // 7. فیلتر کردن اسامی با طول کمتر از ۴ و اضافه کردن علامت تعجب
    const shortNames = names.filter((name) => name.length < 4);
    const excitedNames = shortNames.map((name) => `${name}!`);
  
    // 8. برگرداندن نتیجه نهایی
    return `اسامی با طول بیشتر از ۵ کاراکتر و حروف بزرگ: ${upperCaseNames.join(", ")}
  اسامی با شماره: ${indexedNames.join(", ")}
  اسامی به حروف کوچک با طول: ${lowerCaseNamesWithLength.join(", ")}
  مربع اعداد زوج: ${squaredNumbers.join(", ")}
  اسامی معکوس شده به حروف بزرگ: ${reversedNames.join(", ")}
  اسامی با طول کمتر از ۴ و علامت تعجب: ${excitedNames.join(", ")}`;
  };
  
  // تست تابع
  const namessssss = ["ali", "sara", "reza", "mahmoud", "fatemeh", "amir"];
  const numbersssss = [1, 2, 3, 4, 5, 6];
  
  console.log(analyzeNamesAndNumbers(namessssss, numbersssss)); 
  // خروجی: 
  // "اسامی با طول بیشتر از ۵ کاراکتر و حروف بزرگ: MAHMOUD, FATEMEH
  // اسامی با شماره: 1 - MAHMOUD, 2 - FATEMEH
  // اسامی به حروف کوچک با طول: ali (3), sara (4), reza (4), mahmoud (7), fatemeh (7), amir (4)
  // مربع اعداد زوج: 4,16,36
  // اسامی معکوس شده به حروف بزرگ: ILA, ARAS, AZER, DUOMHAM, HEMETAF, RIMA
  // اسامی با طول کمتر از ۴ و علامت تعجب: ali!, reza!"