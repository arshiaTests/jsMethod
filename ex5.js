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
/**
 * بررسی وجود اعداد منفی در آرایه
 * @param {number[]} numbers - آرایه اعداد
 * @returns {boolean} آیا عدد منفی وجود دارد؟
 */
function containsNegativeNumbers(numbers) {
  return numbers.some(num => num < 0);
}

console.log('آیا آرایه شامل عدد منفی است؟', containsNegativeNumbers([1, 2, -3, 4, 5])); // true
console.log('آیا آرایه شامل عدد منفی است؟', containsNegativeNumbers([1, 2, 3, 4, 5])); // false

/**
 * تبدیل اعداد به رشته‌های توصیفی
 * @param {number[]} numbers - آرایه اعداد
 * @returns {string[]} آرایه رشته‌های فرمت شده
 */
function formatNumbersAsStrings(numbers) {
  return numbers.map(num => `عدد: ${num}`);
}

console.log('اعداد فرمت شده:', formatNumbersAsStrings([1, 2, 3])); 
// ["عدد: 1", "عدد: 2", "عدد: 3"]

/**
 * فیلتر و تبدیل اعداد زوج
 * @param {number[]} numbers - آرایه اعداد
 * @returns {number[]} آرایه اعداد زوج دوبرابر شده
 */
function getDoubledEvenNumbers(numbers) {
  return numbers
    .filter(num => num % 2 === 0)
    .map(num => num * 2);
}

console.log('اعداد زوج دوبرابر شده:', getDoubledEvenNumbers([1, 2, 3, 4, 5])); // [4, 8]

/**
 * تبدیل اعداد به اشیاء با مشخصات
 * @param {number[]} numbers - آرایه اعداد
 * @returns {object[]} آرایه اشیاء عددی
 */
function convertToNumberObjects(numbers) {
  return numbers.map(num => ({
    value: num,
    isEven: num % 2 === 0,
    isPositive: num > 0
  }));
}

console.log('اشیا عددی:', convertToNumberObjects([1, 2, 3, 4, -5]));
/* خروجی:
[
  {value: 1, isEven: false, isPositive: true},
  {value: 2, isEven: true, isPositive: true},
  {value: 3, isEven: false, isPositive: true},
  {value: 4, isEven: true, isPositive: true},
  {value: -5, isEven: false, isPositive: false}
]
*/

/**
 * تحلیل جامع اعداد
 * @param {number[]} numbers - آرایه اعداد
 * @returns {object} گزارش تحلیلی
 */
function analyzeNumberArray(numbers) {
  const negatives = numbers.filter(num => num < 0);
  const evens = numbers.filter(num => num % 2 === 0);
  const odds = numbers.filter(num => num % 2 !== 0);
  
  return {
    count: numbers.length,
    hasNegatives: negatives.length > 0,
    negativeCount: negatives.length,
    evenCount: evens.length,
    oddCount: odds.length,
    sumOfEvens: evens.reduce((sum, num) => sum + num, 0),
    sumOfOdds: odds.reduce((sum, num) => sum + num, 0),
    numberObjects: convertToNumberObjects(numbers),
    summary: `تعداد اعداد: ${numbers.length} | 
             اعداد منفی: ${negatives.length} | 
             اعداد زوج: ${evens.length} | 
             مجموع اعداد زوج: ${evens.reduce((sum, num) => sum + num, 0)}`
  };
}

const sampleNumbers = [1, 2, 3, 4, 5, -6, 7, 8, -9, 10];
console.log('گزارش تحلیل اعداد:', analyzeNumberArray(sampleNumbers));
/* خروجی:
{
  count: 10,
  hasNegatives: true,
  negativeCount: 2,
  evenCount: 4,
  oddCount: 6,
  sumOfEvens: 14,
  sumOfOdds: 7,
  numberObjects: [...],
  summary: "تعداد اعداد: 10 | اعداد منفی: 2 | اعداد زوج: 4 | مجموع اعداد زوج: 14"
}
*/