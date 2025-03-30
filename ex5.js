function neg (arr){
    for(let i = 0 ;i<arr.length;i++){
        if (arr[i]< 0){
            return true;
        }
    }
    return false
}
console.log(neg([1,2,3,45,32,-3,5,3,32,4,23,3]))
//تمرین پنجم: بررسی وجود حداقل یک عدد منفی

const hasNegativeNumber = (arr) => {
    return arr.some((num) => num < 0);
  };
  
  console.log("آیا عدد منفی وجود دارد؟", hasNegativeNumber([1, 2, 3, 45, 32, -3, 5, 3, 32, 4, 23, 3])); // خروجی: true
  console.log("آیا عدد منفی وجود دارد؟", hasNegativeNumber([1, 2, 3, 4, 5])); // خروجی: false

//بدیل اعداد به رشته
  const numbers = [1, 2, 3, 4, 5, 6];
  const stringNumbers = numbers.map((num) => `عدد: ${num}`);
  console.log(stringNumbers); // خروجی: ["عدد: 1", "عدد: 2", "عدد: 3", "عدد: 4", "عدد: 5", "عدد: 6"]

// فیلتر کردن و سپس تبدیل

const numberss = [1,2,3,4,5];
const doubled = numberss.filter((num)=>num%2 ===0).map((num)=>num*2);
console.log(doubled)
// تبدیل اعداد به شیء
const numbersss = [1, 2, 3, 4, 5, 6];
const numberObjects = numbersss.map((num) => ({
  value: num,
  isEven: num % 2 === 0,
}));
console.log(numberObjects);
// خروجی:
// [
//   { value: 1, isEven: false },
//   { value: 2, isEven: true },
//   { value: 3, isEven: false },
//   { value: 4, isEven: true },
//   { value: 5, isEven: false },
//   { value: 6, isEven: true }
// ]

//تمرین ترکیبی: تحلیل و تبدیل داده‌ها

const analyzeNumbers = (numbers) => {
  // 1. بررسی وجود اعداد منفی
  const hasNegative = numbers.some((num) => num < 0);

  // 2. فیلتر کردن اعداد زوج
  const evenNumbers = numbers.filter((num) => num % 2 === 0);

  // 3. تبدیل اعداد زوج به شیء
  const evenNumberObjects = evenNumbers.map((num) => ({
    value: num,
    isEven: true,
  }));

  // 4. محاسبه مجموع اعداد زوج
  const sumOfEvens = evenNumbers.reduce((acc, num) => acc + num, 0);

  // 5. برگرداندن نتیجه نهایی
  return `آیا عدد منفی وجود دارد؟ ${hasNegative ? "بله" : "خیر"}
تعداد اعداد زوج: ${evenNumbers.length}
مجموع اعداد زوج: ${sumOfEvens}
اعداد زوج به صورت شیء: ${JSON.stringify(evenNumberObjects, null, 2)}`;
};

// تست تابع
const numberssss = [1, 2, 3, 4, 5, 6, -7, 8, 9, 10];
console.log(analyzeNumbers(numberssss)); 
// خروجی: 
// "آیا عدد منفی وجود دارد؟ بله
// تعداد اعداد زوج: 5
// مجموع اعداد زوج: 30
// اعداد زوج به صورت شیء: [
//   { value: 2, isEven: true },
//   { value: 4, isEven: true },
//   { value: 6, isEven: true },
//   { value: 8, isEven: true },
//   { value: 10, isEven: true},
// refactor 