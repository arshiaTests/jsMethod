function secondLargest(arr) {
    if (arr.length < 2) return "عدد دوم بزرگ‌تر وجود ندارد";

    let max = Math.max(...arr); // پیدا کردن بزرگ‌ترین عدد
    let filteredArr = arr.filter(num => num !== max); // حذف بزرگ‌ترین عدد

    if (filteredArr.length === 0) return "عدد دوم بزرگ‌تر وجود ندارد";

    let secondMax = Math.max(...filteredArr); // پیدا کردن دومین بزرگ‌ترین عدد
    return secondMax;
}

console.log(secondLargest([10, 20, 5, 8, 30])); // 20
console.log(secondLargest([3, 7, 3, 7, 9])); // 7
console.log(secondLargest([5, 5, 5])); // "عدد دوم بزرگ‌تر وجود ندارد"
console.log(secondLargest([100])); // "عدد دوم بزرگ‌تر وجود ندارد"

//پیدا کردن دومین عدد کوچک‌تر
const secondSmallest = (arr) => {
    if (arr.length < 2) return "عدد دوم کوچک‌تر وجود ندارد";
  
    let min = Infinity;
    let secondMin = Infinity;
  
    for (let num of arr) {
      if (num < min) {
        secondMin = min;
        min = num;
      } else if (num < secondMin && num !== min) {
        secondMin = num;
      }
    }
  
    return secondMin !== Infinity ? secondMin : "عدد دوم کوچک‌تر وجود ندارد";
  };
  
  console.log(secondSmallest([10, 20, 5, 8, 30])); // 8
  console.log(secondSmallest([3, 7, 3, 7, 9])); // 7
  console.log(secondSmallest([5, 5, 5])); // "عدد دوم کوچک‌تر وجود ندارد"

// پیدا کردن سومین عدد بزرگ‌تر:
const thirdLargest = (arr) => {
  if (arr.length < 3) return "عدد سوم بزرگ‌تر وجود ندارد";

  let max1 = Math.max(...arr);
  let filteredArr1 = arr.filter((num) => num !== max1);

  if (filteredArr1.length === 0) return "عدد سوم بزرگ‌تر وجود ندارد";

  let max2 = Math.max(...filteredArr1);
  let filteredArr2 = filteredArr1.filter((num) => num !== max2);

  if (filteredArr2.length === 0) return "عدد سوم بزرگ‌تر وجود ندارد";

  let max3 = Math.max(...filteredArr2);
  return max3;
};

console.log(thirdLargest([10, 20, 5, 8, 30])); // خروجی: 10
console.log(thirdLargest([3, 7, 3, 7, 9])); // خروجی: 3

// پیدا کردن کوچک‌ترین عدد:
const findSmallest = (arr) => {
  if (arr.length === 0) return "آرایه خالی است";
  return Math.min(...arr);
};

console.log(findSmallest([10, 20, 5, 8, 30])); // خروجی: 5
console.log(findSmallest([3, 7, 3, 7, 9])); // خروجی: 3