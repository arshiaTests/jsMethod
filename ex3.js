//تمرین سوم: افزایش هر نمره به میزان 5 واحد با map
function lvlUp (array){
    let updateArray = [];
    for(let i =0; i<array.length;i++){
        updateArray.push(array[i]+5);
    }
    return updateArray
}
console.log(lvlUp([1,2,3,4,5,6,7,8]))

const lvlUpp = (array) => {
    return array.map((score) => score + 5);
  };
  
  console.log("نمرات افزایش یافته:", lvlUpp([1, 2, 3, 4, 5, 6, 7, 8])); // خروجی: [6, 7, 8, 9, 10, 11, 12, 13]

//تابعی بنویسید که فقط اعداد کوچک‌تر از ۱۰ را ۵ واحد افزایش دهد.
const conditionalIncrease=(array)=>{
    return array.map((num) => (num <10 ? num +10 : num));
}
console.log(conditionalIncrease([5, 10, 15, 8])); // خروجی: [10, 10, 15, 13]
//تابعی بنویسید که اعداد را به حروف تبدیل کند (مثلاً A, B, C).

let convertToGrades = (array)=> {
    return array.map((num)=>{
        if (num >= 90) return "A";
    if (num >= 80) return "B";
    if (num >= 70) return "C";
    if (num >= 60) return "D";
    return "F";  
    });
};
console.log(convertToGrades([95, 85, 75, 65, 55])); // خروجی: ["A", "B", "C", "D", "F"]

//افزایش اعداد با استفاده از reduce
const lvlUpWithReduce = (array) => {
    return array.reduce((acc, num) => {
      acc.push(num + 5);
      return acc;
    }, []);
  };
  
  console.log(lvlUpWithReduce([1, 2, 3, 4, 5])); // خروجی: [6, 7, 8, 9, 10]

  //تمرین ترکیبی: تحلیل و تبدیل نمرات

  const analyzeScores = (scores) => {
    // 1. افزایش نمرات
    const increasedScores = scores.map((score) => score + 5);
  
    // 2. تبدیل نمرات به حروف
    const letterGrades = increasedScores.map((score) => {
      if (score >= 90) return "A";
      if (score >= 80) return "B";
      if (score >= 70) return "C";
      if (score >= 60) return "D";
      return "F";
    });
  
    // 3. فیلتر کردن نمرات A و B
    const highGrades = increasedScores.filter(
      (score, index) => letterGrades[index] === "A" || letterGrades[index] === "B"
    );
  
    // 4. محاسبه میانگین نمرات فیلتر شده
    const total = highGrades.reduce((acc, score) => acc + score, 0);
    const average = total / highGrades.length;
  
    // 5. برگرداندن نتیجه نهایی
    return `میانگین نمرات A و B: ${average.toFixed(2)}، تعداد: ${highGrades.length}`;
  };
  
  // تست تابع
  const scores = [85, 92, 78, 88, 95, 65, 70];
  console.log(analyzeScores(scores)); 
  // خروجی: "میانگین نمرات A و B: 90.00، تعداد: 5"

  //refactor
  /**
 * یافتن نمرات نامطلوب (زیر ۱۰)
 * @param {number[]} gradeList - لیست نمرات
 * @returns {number[]} آرایه نمرات نامطلوب
 */
function getUnsatisfactoryGrades(gradeList) {
  return gradeList.filter(grade => grade < 10);
}

console.log('نمرات نامطلوب:', getUnsatisfactoryGrades([1, 2, 3, 4, 5, 567, 73, 44, 23, 2, 35])); 
// خروجی: [1, 2, 3, 4, 5, 2]

/**
 * یافتن مقادیر در محدوده مشخص
 * @param {number[]} values - آرایه مقادیر
 * @param {number} lowerBound - حد پایین
 * @param {number} upperBound - حد بالا
 * @returns {string} نتیجه فرمت شده
 */
function findValuesInRange(values, lowerBound, upperBound) {
  const filtered = values.filter(val => val >= lowerBound && val <= upperBound);
  return `مقادیر بین ${lowerBound} و ${upperBound}: [${filtered.join(', ')}]`;
}

console.log(findValuesInRange([5, 12, 8, 3, 20], 10, 20)); 
// خروجی: "مقادیر بین 10 و 20: [12, 20]"

/**
 * یافتن رشته‌های بلند
 * @param {string[]} stringArray - آرایه رشته‌ها
 * @param {number} [minLength=5] - حداقل طول
 * @returns {object} نتیجه با جزئیات
 */
function identifyLongStrings(stringArray, minLength = 5) {
  const result = stringArray.filter(str => str.length > minLength);
  return {
    count: result.length,
    items: result,
    message: `تعداد رشته‌های با طول بیشتر از ${minLength}: ${result.length}`
  };
}

console.log(identifyLongStrings(["hello", "world", "javascript", "code"]));
// خروجی: {count: 1, items: ["javascript"], message: "تعداد رشته‌های با طول بیشتر از 5: 1"}

/**
 * یافتن کاربران بالغ
 * @param {object[]} userList - لیست کاربران
 * @param {number} [legalAge=18] - سن قانونی
 * @returns {object[]} کاربران واجد شرایط
 */
function filterAdultUsers(userList, legalAge = 18) {
  return userList.filter(user => user.age > legalAge);
}

const userData = [
  { name: "عرشیا", age: 25 },
  { name: "علی", age: 17 },
  { name: "مریم", age: 20 },
];

console.log('کاربران بالغ:', filterAdultUsers(userData));
// خروجی: [{ name: "عرشیا", age: 25 }, { name: "مریم", age: 20 }]

/**
 * تحلیل پیشرفته دانش‌آموزان
 * @param {object[]} studentData - اطلاعات دانش‌آموزان
 * @returns {object} گزارش تحلیلی
 */
function analyzeStudentPerformance(studentData) {
  const adultStudents = studentData.filter(student => student.age > 18);
  const weakStudents = adultStudents.filter(student => student.score < 10);
  
  const performanceReport = {
    totalStudents: studentData.length,
    adultCount: adultStudents.length,
    weakStudentCount: weakStudents.length,
    averageAge: weakStudents.reduce((sum, student) => sum + student.age, 0) / weakStudents.length || 0,
    warning: weakStudents.length === 0 ? 'هیچ دانش‌آموز ضعیفی یافت نشد' : null
  };
  
  return performanceReport;
}

const studentRecords = [
  { name: "عرشیا", age: 25, score: 8 },
  { name: "علی", age: 17, score: 12 },
  { name: "مریم", age: 20, score: 5 },
  { name: "زهرا", age: 22, score: 15 },
  { name: "محمد", age: 19, score: 9 },
];

console.log('گزارش تحلیلی:', analyzeStudentPerformance(studentRecords));
/* خروجی:
{
  totalStudents: 5,
  adultCount: 4,
  weakStudentCount: 3,
  averageAge: 21.333333333333332,
  warning: null
}
*/