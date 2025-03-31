//تمرین: یک عدد را در آرایه پیدا کن و موقعیت (ایندکس) اولین حضور آن را برگردان.
function include (arr,target){
    return arr.includes(target) ? `${target} در آرایه وجود دارد.` :"پیدا نشد "
    
}
console.log(include([10,20,34,2,233],20))

const findLastNumberIndex = (arr, target) => {
    const index = arr.lastIndexOf(target);
    return index !== -1 ? `${target} در آرایه وجود دارد و آخرین موقعیت آن ${index} است.` : `${target} پیدا نشد.`;
  };
  
  console.log(findLastNumberIndex([10, 20, 34, 20, 233], 20)); // خروجی: "20 در آرایه وجود دارد و آخرین موقعیت آن 3 است."

  // پیدا کردن همه‌ی موقعیت‌های یک عدد در آرایه
  const findAllNumberIndices = (arr, target) => {
    const indices = [];
    arr.forEach((num, index) => {
      if (num === target) indices.push(index);
    });
    return indices.length > 0
      ? `${target} در آرایه وجود دارد و موقعیت‌های آن ${indices.join(", ")} هستند.`
      : `${target} پیدا نشد.`;
  };
  
  console.log(findAllNumberIndices([10, 20, 34, 20, 233], 20)); // خروجی: "20 در آرایه وجود دارد و موقعیت‌های آن 1, 3 هستند."

  //بررسی وجود یک رشته در آرایه
  const includeString = (arr, target) => {
    return arr.includes(target) ? `${target} در آرایه وجود دارد.` : "پیدا نشد";
  };
  
  console.log(includeString(["apple", "banana", "orange"], "banana")); // خروجی: "banana در آرایه وجود دارد."
  console.log(includeString(["apple", "banana", "orange"], "grape")); // خروجی: "پیدا نشد"
  
  //تمرین ترکیبی: جستجو و تحلیل داده‌ها

  const analyzeData = (numbers, strings, targetNumber, targetString) => {
    // 1. پیدا کردن اولین و آخرین موقعیت عدد در آرایه
    const firstIndex = numbers.indexOf(targetNumber);
    const lastIndex = numbers.lastIndexOf(targetNumber);
  
    // 2. پیدا کردن همه موقعیت‌های عدد در آرایه
    const allIndices = [];
    numbers.forEach((num, index) => {
      if (num === targetNumber) allIndices.push(index);
    });
  
    // 3. بررسی وجود رشته در آرایه
    const isStringIncluded = strings.includes(targetString);
  
    // 4. برگرداندن نتیجه نهایی
    return `اولین موقعیت عدد ${targetNumber}: ${firstIndex !== -1 ? firstIndex : "پیدا نشد"}
  آخرین موقعیت عدد ${targetNumber}: ${lastIndex !== -1 ? lastIndex : "پیدا نشد"}
  همه موقعیت‌های عدد ${targetNumber}: ${allIndices.length > 0 ? allIndices.join(", ") : "پیدا نشد"}
  رشته '${targetString}' ${isStringIncluded ? "در آرایه وجود دارد." : "در آرایه وجود ندارد."}`;
  };
  
  // تست تابع
  const numbers = [10, 20, 34, 20, 233];
  const strings = ["apple", "banana", "orange"];
  
  console.log(analyzeData(numbers, strings, 20, "banana")); 
  // خروجی: 
  // "اولین موقعیت عدد 20: 1
  // آخرین موقعیت عدد 20: 3
  // همه موقعیت‌های عدد 20: 1, 3
  // رشته 'banana' در آرایه وجود دارد."

  //refactor
  /**
 * بررسی وجود مقدار در آرایه و موقعیت اولین وقوع
 * @param {Array} array - آرایه مورد جستجو
 * @param {*} target - مقدار مورد نظر
 * @returns {string} نتیجه جستجو
 */
function findFirstOccurrence(array, target) {
  const index = array.indexOf(target);
  return index !== -1 
    ? `'${target}' در موقعیت ${index} یافت شد` 
    : `'${target}' یافت نشد`;
}

console.log('جستجوی اولیه:', findFirstOccurrence([10, 20, 34, 2, 233], 20));
// خروجی: "'20' در موقعیت 1 یافت شد"

/**
 * یافتن آخرین موقعیت مقدار در آرایه
 * @param {Array} array - آرایه مورد جستجو
 * @param {*} target - مقدار مورد نظر
 * @returns {Object} نتیجه با جزئیات
 */
function findLastOccurrence(array, target) {
  const index = array.lastIndexOf(target);
  return {
    exists: index !== -1,
    position: index,
    message: index !== -1
      ? `آخرین موقعیت '${target}': ${index}`
      : `'${target}' یافت نشد`
  };
}

console.log('جستجوی آخرین موقعیت:', findLastOccurrence([10, 20, 34, 20, 233], 20));
/* خروجی:
{
  exists: true,
  position: 3,
  message: "آخرین موقعیت '20': 3"
}
*/

/**
 * یافتن تمام موقعیت‌های مقدار در آرایه
 * @param {Array} array - آرایه مورد جستجو
 * @param {*} target - مقدار مورد نظر
 * @returns {Object} نتیجه با جزئیات
 */
function findAllOccurrences(array, target) {
  const indices = array.reduce((acc, item, index) => {
    if (item === target) acc.push(index);
    return acc;
  }, []);
  
  return {
    target,
    count: indices.length,
    positions: indices,
    summary: indices.length > 0
      ? `تعداد '${target}': ${indices.length} | موقعیت‌ها: ${indices.join(', ')}`
      : `'${target}' یافت نشد`
  };
}

console.log('جستجوی تمام موقعیت‌ها:', findAllOccurrences([10, 20, 34, 20, 233], 20));
/* خروجی:
{
  target: 20,
  count: 2,
  positions: [1, 3],
  summary: "تعداد '20': 2 | موقعیت‌ها: 1, 3"
}
*/

/**
 * جستجوی پیشرفته در آرایه رشته‌ها
 * @param {Array<string>} stringArray - آرایه رشته‌ها
 * @param {string} target - رشته مورد جستجو
 * @param {boolean} [caseSensitive=false] - حساسیت به حروف بزرگ/کوچک
 * @returns {Object} نتیجه جستجو
 */
function searchInStrings(stringArray, target, caseSensitive = false) {
  const searchValue = caseSensitive ? target : target.toLowerCase();
  const results = stringArray.reduce((acc, str, index) => {
    const compareStr = caseSensitive ? str : str.toLowerCase();
    if (compareStr.includes(searchValue)) {
      acc.matches.push(str);
      acc.positions.push(index);
    }
    return acc;
  }, { matches: [], positions: [] });
  
  return {
    query: target,
    found: results.matches.length > 0,
    matches: results.matches,
    positions: results.positions,
    message: results.matches.length > 0
      ? `'${target}' در ${results.positions.length} موقعیت یافت شد`
      : `'${target}' یافت نشد`
  };
}

console.log('جستجوی رشته:', searchInStrings(["apple", "Banana", "orange"], "ban"));
/* خروجی:
{
  query: "ban",
  found: true,
  matches: ["Banana"],
  positions: [1],
  message: "'ban' در 1 موقعیت یافت شد"
}
*/

/**
 * تحلیل جامع داده‌ها
 * @param {Array<number>} numbers - آرایه اعداد
 * @param {Array<string>} strings - آرایه رشته‌ها
 * @param {number} numberTarget - عدد مورد جستجو
 * @param {string} stringTarget - رشته مورد جستجو
 * @returns {Object} گزارش تحلیلی
 */
function analyzeDataComprehensively(numbers, strings, numberTarget, stringTarget) {
  const numberAnalysis = {
    firstOccurrence: findFirstOccurrence(numbers, numberTarget),
    lastOccurrence: findLastOccurrence(numbers, numberTarget),
    allOccurrences: findAllOccurrences(numbers, numberTarget)
  };
  
  const stringAnalysis = searchInStrings(strings, stringTarget);
  
  return {
    numberAnalysis,
    stringAnalysis,
    summary: `تحلیل عدد '${numberTarget}':
      - ${numberAnalysis.firstOccurrence}
      - ${numberAnalysis.lastOccurrence.message}
      - ${numberAnalysis.allOccurrences.summary}
      
    تحلیل رشته '${stringTarget}':
      - ${stringAnalysis.message}`
  };
}

const sampleNumbers = [10, 20, 34, 20, 233];
const sampleStrings = ["apple", "Banana", "orange"];

console.log('گزارش تحلیلی:', analyzeDataComprehensively(sampleNumbers, sampleStrings, 20, "ban"));
/* خروجی:
{
  numberAnalysis: {
    firstOccurrence: "'20' در موقعیت 1 یافت شد",
    lastOccurrence: { ... },
    allOccurrences: { ... }
  },
  stringAnalysis: { ... },
  summary: "تحلیل عدد '20':
    - '20' در موقعیت 1 یافت شد
    - آخرین موقعیت '20': 3
    - تعداد '20': 2 | موقعیت‌ها: 1, 3
    
  تحلیل رشته 'ban':
    - 'ban' در 1 موقعیت یافت شد"
}
*/