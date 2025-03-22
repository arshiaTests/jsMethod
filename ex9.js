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