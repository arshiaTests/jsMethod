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
