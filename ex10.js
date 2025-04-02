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
  
