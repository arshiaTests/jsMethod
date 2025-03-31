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