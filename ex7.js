// تابع کلی برای مرتب‌سازی اعداد (صعودی یا نزولی)
function sortNumbers(arr, order = 'asc') {
    if (order === 'asc') {
        return arr.sort((a, b) => a - b); // صعودی
    } else if (order === 'desc') {
        return arr.sort((a, b) => b - a); // نزولی
    } else {
        throw new Error('Invalid order. Use "asc" or "desc".');
    }
}

// تابع برای مرتب‌سازی رشته‌ها (الفبایی)
function sortStrings(arr, caseSensitive = false) {
    if (caseSensitive) {
        return arr.sort(); // حساس به حروف بزرگ و کوچک
    } else {
        return arr.sort((a, b) => a.localeCompare(b)); // بدون حساسیت به حروف بزرگ و کوچک
    }
}

// تست توابع
const numbers = [10, 3, 2, 1, 4, 32, 32, 2, 3];
const fruits = ["banana", "Apple", "cherry"];

console.log(sortNumbers(numbers, 'asc'));  // [1, 2, 2, 3, 3, 4, 10, 32, 32]
console.log(sortNumbers(numbers, 'desc')); // [32, 32, 10, 4, 3, 3, 2, 2, 1]

console.log(sortStrings(fruits)); // ["Apple", "banana", "cherry"] (بدون حساسیت به حروف بزرگ و کوچک)
console.log(sortStrings(fruits, true)); // ["Apple", "banana", "cherry"] (حساس به حروف بزرگ و کوچک)