function findIndex(arr, target) {
    let index = -1;
    arr.some((num, i) => {
        if (num === target) {
            index = i;
            return true; // متوقف کردن عملیات بعد از پیدا شدن مقدار
        }
        return false;
    });
    return index !== -1 ? `ایندکس: ${index}` : "پیدا نشد";
}

console.log(findIndex([10, 20, 34, 2, 233], 20)); // ایندکس: 1
function findIndex(arr, target) {
    let index = arr.findIndex(num => num === target);
    return index !== -1 ? `ایندکس: ${index}` : "پیدا نشد";
}

console.log(findIndex([10, 20, 34, 2, 233], 20)); // ایندکس: 1


//پیدا کردن همه‌ی ایندکس‌های یک عدد در آرایه
const findAllIndices = (arr, target) => {
    const indices = [];
    arr.forEach((num, i) => {
      if (num === target) indices.push(i);
    });
    return indices.length > 0 ? `ایندکس‌ها: ${indices.join(", ")}` : "پیدا نشد";
  };
  
  console.log(findAllIndices([10, 20, 34, 20, 233], 20)); // خروجی: "ایندکس‌ها: 1, 3"