//تمرین 1: پیدا کردن میانگین نمرات با reduce
//لیستی از نمرات داریم:

//const scores = [15, 18, 12, 20, 10, 14, 16];

//با استفاده از reduce، میانگین این نمرات را محاسبه کن.

function x (num){
  let sum = 0;
  for( let i = 0 ; i<num.length; i++){
    sum += num[i]
  }
  return `میانگین: ${sum/num.length}`
}
console.log(x([1,2,3,45,5]))
// TO FIX نشان میدهد تا چند رقم اعشار را بتواند برگرداند 
function easyWay(num){
  const sum = num.reduce((acc,num) => acc + num, 0);
  const average = sum/num.length;
  return `میانگین : ${average.toFixed(2)}`
}
console.log(easyWay([1,2,3,4,5,6,6]))

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

  // محاسبه میانگین اعداد بزرگ‌تر از یک حد مشخص
  const averageAboveThreshold = (nums, threshold) => {
    const filteredNums = nums.filter((num) => num > threshold);
    const sum = filteredNums.reduce((acc, num) => acc + num, 0);
    return sum / filteredNums.length;
  };
  
  console.log(averageAboveThreshold([1, 2, 3, 4, 5.1], 2)); // خروجی: 4.033...


  ////محاسبه میانگین وزنی
  const weightedAverage = (nums, weights) => {
    const totalWeight = weights.reduce((acc, weight) => acc + weight, 0);
    const weightedSum = nums.reduce((acc, num, index) => acc + num * weights[index], 0);
    return weightedSum / totalWeight;
  };
  
  console.log(weightedAverage([1, 2, 3, 4], [1, 2, 3, 4])); // خروجی: 3


  //تمرین ترکیبی: محاسبه میانگین نمرات با شرایط خاص


  const calculateWeightedAverage = (scores) => {
    // 1. حذف نمرات صفر
    const filteredScores = scores.filter((score) => score !== 0);
  
    // 2. افزودن نمره اضافی اگر تعداد نمرات کمتر از ۵ باشد
    if (filteredScores.length < 5) {
      filteredScores.push(10);
    }
  
    // 3. محاسبه میانگین وزنی
    const totalWeight = filteredScores.reduce((acc, _, index) => acc + (index + 1), 0);
    const weightedSum = filteredScores.reduce((acc, score, index) => acc + score * (index + 1), 0);
  
    // 4. برگرداندن نتیجه با دو رقم اعشار
    return (weightedSum / totalWeight).toFixed(2);
  };
  
  // تست تابع
  const scores = [15, 18, 0, 20, 10, 14, 16];
  console.log(calculateWeightedAverage(scores)); // خروجی: 15.67

  //ریفکتور

// 1. محاسبه معدل ساده
function computeSimpleGrade(scores, decimalPlaces = 2) {
  if (!scores.length) return "عدم وجود نمرات برای محاسبه";
  
  const total = scores.reduce((sum, score) => sum + score, 0);
  const average = total / scores.length;
  return `معدل ساده: ${average.toFixed(decimalPlaces)}`;
}

console.log(computeSimpleGrade([15, 18, 12, 20, 10, 14, 16])); // "معدل ساده: 15.00"
console.log(computeSimpleGrade([], 3)); // "عدم وجود نمرات برای محاسبه"

// 2. محاسبه معدل با اصلاحات
function computeModifiedGrade(marks) {
  const validMarks = marks.filter(mark => mark !== 0);
  
  if (validMarks.length < 5) {
    validMarks.push(10); // اضافه کردن نمره جبرانی
  }
  
  const sum = validMarks.reduce((total, mark) => total + mark, 0);
  return Number((sum / validMarks.length).toFixed(2));
}

console.log(computeModifiedGrade([15, 18, 0, 20, 10, 14, 16])); // 15.5
console.log(computeModifiedGrade([12, 15, 18])); // 13.75

// 3. محاسبه معدل شرطی
function calculateConditionalAverage(values, minThreshold, decimals = 2) {
  const filteredValues = values.filter(value => value > minThreshold);
  
  if (!filteredValues.length) {
    return `هیچ مقداری بالاتر از ${minThreshold} نیست`;
  }
  
  const average = filteredValues.reduce((sum, val) => sum + val, 0) / filteredValues.length;
  return parseFloat(average.toFixed(decimals));
}

console.log(calculateConditionalAverage([1, 2, 3, 4, 5.1], 2)); // 4.03
console.log(calculateConditionalAverage([10, 20, 30], 50)); // "هیچ مقداری بالاتر از 50 نیست"

// 4. محاسبه معدل وزنی
function determineWeightedMean(dataPoints, weights, precision = 3) {
  if (dataPoints.length !== weights.length) {
    throw new Error("تعداد داده‌ها و وزن‌ها باید برابر باشد");
  }
  
  const weightSum = weights.reduce((sum, w) => sum + w, 0);
  const weightedSum = dataPoints.reduce((sum, point, i) => sum + point * weights[i], 0);
  
  return Number((weightedSum / weightSum).toFixed(precision));
}

console.log(determineWeightedMean([1, 2, 3, 4], [1, 2, 3, 4])); // 3.000
console.log(determineWeightedMean([10, 20], [3, 7])); // 17.000

// 5. محاسبه معدل وزنی پیشرفته
function computeEnhancedWeightedAverage(grades, decimalPoints = 2) {
  const nonZeroGrades = grades.filter(grade => grade > 0);
  
  if (nonZeroGrades.length < 5) {
    nonZeroGrades.push(10); // نمره تکمیلی
  }
  
  const weightTotal = nonZeroGrades.reduce((total, _, index) => total + (index + 1), 0);
  const weightedTotal = nonZeroGrades.reduce((sum, grade, idx) => sum + grade * (idx + 1), 0);
  
  return `معدل وزنی پیشرفته: ${(weightedTotal / weightTotal).toFixed(decimalPoints)}`;
}

console.log(computeEnhancedWeightedAverage([15, 18, 0, 20, 10, 14, 16])); // "معدل وزنی پیشرفته: 15.67"
console.log(computeEnhancedWeightedAverage([12, 15, 18])); // "معدل وزنی پیشرفته: 13.17"

/**
 * محاسبه میانگین انرژی مصرفی
 * @param {number[]} readings - مقادیر خوانده شده از سنسور
 * @param {number} [factor=1.5] - ضریب تبدیل انرژی
 * @returns {string} نتیجه فرمت شده با واحد کیلووات
 */
function analyzeEnergyConsumption(readings, factor = 1.5) {
  if (readings.some(r => r < 0)) {
    return "خطا: مقادیر منفی در داده‌ها وجود دارد";
  }

  const total = readings.reduce((sum, val) => sum + val * factor, 0);
  const average = total / readings.length || 0;
  
  return `میانگین مصرف: ${average.toFixed(2)} کیلووات`;
}

console.log(analyzeEnergyConsumption([120, 150, 90])); // "میانگین مصرف: 180.00 کیلووات"
console.log(analyzeEnergyConsumption([-5, 20, 30])); // "خطا: مقادیر منفی در داده‌ها وجود دارد"