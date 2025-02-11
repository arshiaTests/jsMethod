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
  