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