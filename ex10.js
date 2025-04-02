function removeDuplicates(arr) {
    let uniqueArray = [];
    for (let num of arr) {
      if (!uniqueArray.includes(num)) {
        uniqueArray.push(num);
      }
    }
    return uniqueArray;
  }
  console.log(removeDuplicates([1,1,1,2,2,,3,4,,54,2,23,3]))

  const removeDuplicatesPreserveOrder = (arr) => {
    const seen = new Set();
    return arr.filter((num) => {
      if (!seen.has(num)) {
        seen.add(num);
        return true;
      }
      return false;
    });
  };
  
  console.log(removeDuplicatesPreserveOrder([1, 2, 2, 3, 4, 4, 5])); // خروجی: [1, 2, 3, 4, 5]

  //حذف تکراری‌ها با حفظ ترتیب
  const removeDuplicatesPreserveOrderr = (arr) => {
    const seen = new Set();
    return arr.filter((num) => {
      if (!seen.has(num)) {
        seen.add(num);
        return true;
      }
      return false;
    });
  };
  
  console.log(removeDuplicatesPreserveOrderr([1, 2, 2, 3, 4, 4, 5])); // خروجی: [1, 2, 3, 4, 5]
  
  //تمرین ترکیبی: حذف تکراری‌ها و تحلیل داده‌ها

  const analyzeArray = (arr) => {
    // 1. حذف مقادیر تکراری با حفظ ترتیب
    const seen = new Set();
    const uniqueArray = arr.filter((num) => {
      if (!seen.has(num)) {
        seen.add(num);
        return true;
      }
      return false;
    });
  
    // 2. مرتب‌سازی آرایه
    const sortedArray = [...uniqueArray].sort((a, b) => a - b);
  
    // 3. محاسبه مجموع اعداد
    const sum = sortedArray.reduce((acc, num) => acc + num, 0);
  
    // 4. تبدیل آرایه به رشته
    const uniqueString = uniqueArray.join(",");
    const sortedString = sortedArray.join(",");
  
    // 5. برگرداندن نتیجه نهایی
    return `آرایه بدون مقادیر تکراری: ${uniqueString}
  آرایه مرتب‌شده: ${sortedString}
  مجموع اعداد آرایه نهایی: ${sum}`;
  };
  
  // تست تابع
  const numbers = [1, 2, 2, 3, 4, 4, 5, 1, 6, 7, 7];
  
  console.log(analyzeArray(numbers)); 
  // خروجی: 
  // "آرایه بدون مقادیر تکراری: 1,2,3,4,5,6,7
  // آرایه مرتب‌شده: 1,2,3,4,5,6,7
  // مجموع اعداد آرایه نهایی: 28"
  ///refactor r
  /**
 * Removes duplicates from an array (basic implementation)
 * @param {Array} arr - Input array with possible duplicates
 * @returns {Array} Array with duplicates removed
 */
function getUniqueValues(arr) {
  return [...new Set(arr)].filter(item => item !== undefined);
}

console.log('Basic duplicate removal:', getUniqueValues([1,1,1,2,2,,3,4,,54,2,23,3]));
// Output: [1, 2, 3, 4, 54, 23]

/**
 * Removes duplicates while preserving original order
 * @param {Array} arr - Input array with possible duplicates
 * @returns {Array} Array with duplicates removed (order preserved)
 */
function getUniqueValuesPreserveOrder(arr) {
  const seen = new Set();
  return arr.filter(item => {
    const isUnique = !seen.has(item) && item !== undefined;
    if (isUnique) seen.add(item);
    return isUnique;
  });
}

console.log('Order-preserving duplicate removal:', 
  getUniqueValuesPreserveOrder([1, 2, 2, 3, 4, 4, 5]));
// Output: [1, 2, 3, 4, 5]

/**
 * //Comprehensive array analysis with duplicate removal
 * @param {Array} arr - Input array to analyze
 * @returns {Object} Analysis report with multiple metrics
 */
function analyzeArrayContents(arr) {
  // Remove duplicates and undefined values while preserving order
  const uniqueValues = getUniqueValuesPreserveOrder(arr);
  
  // Create sorted version
  const sortedValues = [...uniqueValues].sort((a, b) => a - b);
  
  // Calculate statistics
  const stats = {
    originalLength: arr.length,
    uniqueCount: uniqueValues.length,
    duplicatesRemoved: arr.length - uniqueValues.length,
    sum: uniqueValues.reduce((acc, num) => acc + num, 0),
    min: Math.min(...uniqueValues),
    max: Math.max(...uniqueValues),
    average: uniqueValues.reduce((acc, num) => acc + num, 0) / uniqueValues.length
  };
  
  return {
    uniqueArray: uniqueValues,
    sortedArray: sortedValues,
    statistics: stats,
    summary: `Original length: ${stats.originalLength} |
             Unique items: ${stats.uniqueCount} |
             Duplicates removed: ${stats.duplicatesRemoved} |
             Sum: ${stats.sum} |
             Min: ${stats.min} | 
             Max: ${stats.max} |
             Avg: ${stats.average.toFixed(2)}`
  };
}

// Test with sample data
const sampleData = [1, 2, 2, 3, 4, 4, 5, 1, 6, 7, 7, undefined, null];
console.log('Array analysis:', analyzeArrayContents(sampleData));
// finish num 10 refactor 

  
