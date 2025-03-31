function merge (arr1, arr2){
    return arr1.concat(arr2)
}
console.log(merge([1,2],[45,54]))
//این متد دو آرایه را ادغام کرده و آرایه‌ای جدید می‌سازد بدون تغییر آرایه‌های اصلی.

//flat(Infinity) تمام سطوح تو در تو را باز می‌کند و نتیجه [1, 2, 3, 4] خواهد بود.
function flattenArray(arr) {
    return arr.flat(Infinity);
  }
  
  console.log(flattenArray([1, [2, [3, [4]]]])); 
//ادغام آرایه‌ها و مرتب‌سازی
const mergeAndSort = (arr1, arr2) => {
    return [...arr1, ...arr2].sort((a, b) => a - b);
  };
  
  console.log(mergeAndSort([10, 2], [5, 8])); // خروجی: [2, 5, 8, 10]

  //ادغام آرایه‌ها و محاسبه مجموع

  const mergeAndSum = (arr1, arr2) => {
    const mergedArray = [...arr1, ...arr2];
    return mergedArray.reduce((acc, num) => acc + num, 0);
  };
  
  console.log(mergeAndSum([1, 2], [3, 4])); // خروجی: 10

  //تمرین ترکیبی: ادغام، مرتب‌سازی و تحلیل داده‌ها

  const analyzeArrays = (arr1, arr2) => {
    // 1. ادغام دو آرایه
    const mergedArray = [...arr1, ...arr2];
  
    // 2. مرتب‌سازی آرایه ادغام‌شده
    const sortedArray = mergedArray.sort((a, b) => a - b);
  
    // 3. حذف مقادیر تکراری
    const uniqueArray = [...new Set(sortedArray)];
  
    // 4. تبدیل آرایه به رشته
    const sortedString = sortedArray.join(",");
    const uniqueString = uniqueArray.join(",");
  
    // 5. محاسبه مجموع اعداد
    const sum = uniqueArray.reduce((acc, num) => acc + num, 0);
  
    // 6. برگرداندن نتیجه نهایی
    return `آرایه ادغام‌شده و مرتب‌شده: ${sortedString}
  آرایه بدون مقادیر تکراری: ${uniqueString}
  مجموع اعداد آرایه نهایی: ${sum}`;
  };
  
  // تست تابع
  const arr1 = [10, 2, 5];
  const arr2 = [5, 8, 10, 3];
  
  console.log(analyzeArrays(arr1, arr2)); 
  // خروجی: 
  // "آرایه ادغام‌شده و مرتب‌شده: 2,3,5,5,8,10,10
  // آرایه بدون مقادیر تکراری: 2,3,5,8,10
  // مجموع اعداد آرایه نهایی: 28"
  //refactor
  /**
 * ادغام دو آرایه بدون تغییر آرایه‌های اصلی
 * @param {Array} firstArray - آرایه اول
 * @param {Array} secondArray - آرایه دوم
 * @returns {Array} آرایه جدید حاصل از ادغام
 */
function combineArrays(firstArray, secondArray) {
  return [...firstArray, ...secondArray];
}

console.log('ادغام ساده:', combineArrays([1, 2], [45, 54]));
// خروجی: [1, 2, 45, 54]

/**
 * باز کردن تمام سطوح تودرتو در آرایه
 * @param {Array} nestedArray - آرایه تودرتو
 * @returns {Array} آرایه یک‌سطحی
 */
function flattenNestedArray(nestedArray) {
  return nestedArray.flat(Infinity);
}

console.log('آرایه تخت شده:', flattenNestedArray([1, [2, [3, [4]]]]));
// خروجی: [1, 2, 3, 4]

/**
 * ادغام و مرتب‌سازی آرایه‌ها
 * @param {Array} firstArray - آرایه اول
 * @param {Array} secondArray - آرایه دوم
 * @param {boolean} [ascending=true] - جهت مرتب‌سازی (صعودی/نزولی)
 * @returns {Array} آرایه ادغام و مرتب شده
 */
function mergeAndOrderArrays(firstArray, secondArray, ascending = true) {
  const combined = [...firstArray, ...secondArray];
  return ascending 
    ? combined.sort((a, b) => a - b)
    : combined.sort((a, b) => b - a);
}

console.log('ادغام و مرتب‌سازی صعودی:', mergeAndOrderArrays([10, 2], [5, 8]));
// خروجی: [2, 5, 8, 10]

console.log('ادغام و مرتب‌سازی نزولی:', mergeAndOrderArrays([10, 2], [5, 8], false));
// خروجی: [10, 8, 5, 2]

/**
 * ادغام آرایه‌ها و محاسبه مجموع
 * @param {Array} firstArray - آرایه اول
 * @param {Array} secondArray - آرایه دوم
 * @returns {Object} نتیجه با جزئیات
 */
function combineAndCalculateSum(firstArray, secondArray) {
  const merged = [...firstArray, ...secondArray];
  const sum = merged.reduce((acc, num) => acc + num, 0);
  
  return {
    mergedArray: merged,
    sum: sum,
    average: sum / merged.length,
    message: `مجموع مقادیر: ${sum} | میانگین: ${(sum / merged.length).toFixed(2)}`
  };
}

console.log('ادغام و جمع:', combineAndCalculateSum([1, 2], [3, 4]));
/* خروجی:
{
  mergedArray: [1, 2, 3, 4],
  sum: 10,
  average: 2.5,
  message: "مجموع مقادیر: 10 | میانگین: 2.50"
}
*/

/**
 * تحلیل پیشرفته آرایه‌های ادغام شده
 * @param {Array} firstArray - آرایه اول
 * @param {Array} secondArray - آرایه دوم
 * @returns {Object} گزارش تحلیلی
 */
function analyzeMergedArrays(firstArray, secondArray) {
  // ادغام و مرتب‌سازی
  const mergedSorted = mergeAndOrderArrays(firstArray, secondArray);
  
  // حذف duplicates
  const uniqueValues = [...new Set(mergedSorted)];
  
  // محاسبات آماری
  const stats = {
    totalElements: mergedSorted.length,
    uniqueCount: uniqueValues.length,
    sum: uniqueValues.reduce((acc, num) => acc + num, 0),
    min: Math.min(...uniqueValues),
    max: Math.max(...uniqueValues)
  };
  
  return {
    mergedArray: mergedSorted,
    uniqueArray: uniqueValues,
    statistics: stats,
    summary: `تعداد کل عناصر: ${stats.totalElements} |
             عناصر منحصربفرد: ${stats.uniqueCount} |
             مجموع: ${stats.sum} |
             کوچکترین مقدار: ${stats.min} |
             بزرگترین مقدار: ${stats.max}`
  };
}

const sampleArray1 = [10, 2, 5];
const sampleArray2 = [5, 8, 10, 3];

console.log('گزارش تحلیلی:', analyzeMergedArrays(sampleArray1, sampleArray2));
/* خروجی:
{
  mergedArray: [2, 3, 5, 5, 8, 10, 10],
  uniqueArray: [2, 3, 5, 8, 10],
  statistics: {
    totalElements: 7,
    uniqueCount: 5,
    sum: 28,
    min: 2,
    max: 10
  },
  summary: "تعداد کل عناصر: 7 | عناصر منحصربفرد: 5 | مجموع: 28 | کوچکترین مقدار: 2 | بزرگترین مقدار: 10"
}/
*/