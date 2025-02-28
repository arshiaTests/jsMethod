//تمرین 1: پیدا کردن میانگین نمرات با reduce
//لیستی از نمرات داریم:

//const scores = [15, 18, 12, 20, 10, 14, 16];

//با استفاده از reduce، میانگین این نمرات را محاسبه کن.
function average (num){
    let sum = 0;
    for (let i = 0 ;i<num.length ; i++){
        sum+= num[i]
    }
    return sum / num.length
}
console.log(average([1,2,3,4,5.1]))



const calculateAdjustedAverage = (scores) => {
    // 1. حذف نمرات صفر
    const filteredScores = scores.filter((score) => score !== 0);
  
    // 2. افزودن نمره اضافی اگر تعداد نمرات کمتر از ۵ باشد
    if (filteredScores.length < 5) {
      filteredScores.push(10); // اضافه کردن نمره ۱۰
    }
  
    // 3. محاسبه میانگین با استفاده از reduce
    const sum = filteredScores.reduce((acc, curr) => acc + curr, 0);
    const average = sum / filteredScores.length;
  
    return average;
  };
  
  // تست تابع
  const scores1 = [15, 18, 0, 20, 10, 14, 16]; // نمرات با صفر
  const scores2 = [12, 15, 18]; // تعداد نمرات کمتر از ۵
  const scores3 = [20, 20, 20, 20, 20]; // نمرات کامل
  
  console.log("میانگین نمرات ۱:", calculateAdjustedAverage(scores1)); // خروجی: 15.5
  console.log("میانگین نمرات ۲:", calculateAdjustedAverage(scores2)); // خروجی: 13.75
  console.log("میانگین نمرات ۳:", calculateAdjustedAverage(scores3)); // خروجی: 20