//تمرین مرتب‌سازی با sort:
// مرتب‌سازی صعودی اعداد:
function big (arr){
    return arr.sort((a,b)=>a-b)
}
console.log(big([10,3,2,1,4,32,32,2,3]))

// مرتب‌سازی نزولی اعداد:
function less (arr){
    return arr.sort((a,b)=>b-a)
}
console.log(less([10,3,2,1,4,32,32,2,3]))
// مرتب‌سازی رشته‌ها (حروف الفبا):
function sort (arr){
    return arr.sort();
}
console.log(sort(["banana","apple","cherry"]))

// مرتب‌سازی اشیاء بر اساس خاصیت
const sortByAge = (arr) => {
    return arr.slice().sort((a, b) => a.age - b.age);
  };
  
  const users = [
    { name: "عرشیا", age: 25 },
    { name: "علی", age: 17 },
    { name: "مریم", age: 20 },
  ];
  
  console.log(sortByAge(users));
  // خروجی:
  // [
  //   { name: "علی", age: 17 },
  //   { name: "مریم", age: 20 },
  //   { name: "عرشیا", age: 25 }
  // ]

//تمرین ترکیبی: مرتب‌سازی و تحلیل داده‌ها

const analyzeStudents = (students) => {
    // 1. مرتب‌سازی دانش‌آموزان بر اساس سن (صعودی)
    const sortedByAge = students.slice().sort((a, b) => a.age - b.age);
  
    // 2. مرتب‌سازی دانش‌آموزان بر اساس نمره (نزولی)
    const sortedByScore = students.slice().sort((a, b) => b.score - a.score);
  
    // 3. فیلتر کردن دانش‌آموزانی که نمره‌شان بالای ۱۵ است
    const highScorers = students.filter((student) => student.score > 15);
  
    // 4. تبدیل نام دانش‌آموزان به حروف بزرگ
    const uppercaseNames = highScorers.map((student) => student.name.toUpperCase());
  
    // 5. برگرداندن نتیجه نهایی
    return `دانش‌آموزان مرتب‌شده بر اساس سن: ${JSON.stringify(sortedByAge, null, 2)}
  دانش‌آموزان مرتب‌شده بر اساس نمره: ${JSON.stringify(sortedByScore, null, 2)}
  تعداد دانش‌آموزانی که نمره‌شان بالای ۱۵ است: ${highScorers.length}
  نام دانش‌آموزان فیلتر شده به حروف بزرگ: ${JSON.stringify(uppercaseNames)}`;
  };
  
  // تست تابع
  const students = [
    { name: "عرشیا", age: 25, score: 18 },
    { name: "علی", age: 17, score: 12 },
    { name: "مریم", age: 20, score: 5 },
    { name: "زهرا", age: 22, score: 15 },
    { name: "محمد", age: 19, score: 9 },
  ];
  
  console.log(analyzeStudents(students)); 
  // خروجی: 
  // "دانش‌آموزان مرتب‌شده بر اساس سن: [
  //   { name: "علی", age: 17, score: 12 },
  //   { name: "محمد", age: 19, score: 9 },
  //   { name: "مریم", age: 20, score: 5 },
  //   { name: "زهرا", age: 22, score: 15 },
  //   { name: "عرشیا", age: 25, score: 18 }
  // ]
  // دانش‌آموزان مرتب‌شده بر اساس نمره: [
  //   { name: "عرشیا", age: 25, score: 18 },
  //   { name: "علی", age: 17, score: 12 },
  //   { name: "زهرا", age: 22, score: 15 },
  //   { name: "محمد", age: 19, score: 9 },
  //   { name: "مریم", age: 20, score: 5 }
  // ]
  // تعداد دانش‌آموزانی که نمره‌شان بالای ۱۵ است: 1
  // نام دانش‌آموزان فیلتر شده به حروف بزرگ: ["عرشیا"]"
  //refactor 
  /**
 * مرتب‌سازی صعودی اعداد
 * @param {number[]} numbers - آرایه اعداد
 * @returns {number[]} آرایه مرتب شده صعودی
 */
function sortNumbersAscending(numbers) {
  return [...numbers].sort((a, b) => a - b);
}

console.log('مرتب‌سازی صعودی:', sortNumbersAscending([10, 3, 2, 1, 4, 32, 32, 2, 3]));
// خروجی: [1, 2, 2, 3, 3, 4, 10, 32, 32]

/**
 * مرتب‌سازی نزولی اعداد
 * @param {number[]} numbers - آرایه اعداد
 * @returns {number[]} آرایه مرتب شده نزولی
 */
function sortNumbersDescending(numbers) {
  return [...numbers].sort((a, b) => b - a);
}

console.log('مرتب‌سازی نزولی:', sortNumbersDescending([10, 3, 2, 1, 4, 32, 32, 2, 3]));
// خروجی: [32, 32, 10, 4, 3, 3, 2, 2, 1]

/**
 * مرتب‌سازی الفبایی رشته‌ها
 * @param {string[]} strings - آرایه رشته‌ها
 * @returns {string[]} آرایه مرتب شده الفبایی
 */
function sortAlphabetically(strings) {
  return [...strings].sort();
}

console.log('مرتب‌سازی الفبایی:', sortAlphabetically(["banana", "apple", "cherry"]));
// خروجی: ["apple", "banana", "cherry"]

/**
 * مرتب‌سازی اشیاء بر اساس خاصیت عددی
 * @param {object[]} objects - آرایه اشیاء
 * @param {string} property - خاصیت عددی برای مرتب‌سازی
 * @param {boolean} [ascending=true] - جهت مرتب‌سازی (صعودی/نزولی)
 * @returns {object[]} آرایه مرتب شده
 */
function sortObjectsByProperty(objects, property, ascending = true) {
  return [...objects].sort((a, b) => 
    ascending ? a[property] - b[property] : b[property] - a[property]
  );
}

const userList = [
  { name: "عرشیا", age: 25 },
  { name: "علی", age: 17 },
  { name: "مریم", age: 20 },
];

console.log('مرتب‌سازی کاربران بر اساس سن (صعودی):', 
  sortObjectsByProperty(userList, 'age'));
/* خروجی:
/[
  { name: "علی", age: 17 },
  { name: "مریم", age: 20 },
  { name: "عرشیا", age: 25 }
]
*/

console.log('مرتب‌سازی کاربران بر اساس سن (نزولی):', 
  sortObjectsByProperty(userList, 'age', false));
/* خروجی:
[
  { name: "عرشیا", age: 25 },
  { name: "مریم", age: 20 },
  { name: "علی", age: 17 }
]
*/

/**
 * تحلیل و گزارش دانشجویان
 * @param {object[]} students - آرایه دانشجویان
 * @returns {object} گزارش تحلیلی
 */
function generateStudentPerformanceReport(students) {
  // کپی از داده‌های اصلی برای جلوگیری از تغییر ناخواسته
  const studentsCopy = [...students];
  
  // مرتب‌سازی‌های مختلف
  const byAgeAsc = sortObjectsByProperty(studentsCopy, 'age');
  const byScoreDesc = sortObjectsByProperty(studentsCopy, 'score', false);
  
  // فیلتر دانشجویان برتر
  const highAchievers = studentsCopy.filter(student => student.score > 15);
  const lowAchievers = studentsCopy.filter(student => student.score < 10);
  
  // آمار
  const stats = {
    total: studentsCopy.length,
    highAchieverCount: highAchievers.length,
    lowAchieverCount: lowAchievers.length,
    averageScore: studentsCopy.reduce((sum, s) => sum + s.score, 0) / studentsCopy.length,
    ageRange: {
      min: byAgeAsc[0].age,
      max: byAgeAsc[byAgeAsc.length - 1].age
    }
  };
  
  return {
    sortedByAge: byAgeAsc,
    sortedByScore: byScoreDesc,
    highAchievers,
    lowAchievers,
    statistics: stats,
    summary: `تعداد دانشجویان: ${stats.total} |
             دانشجویان با نمره عالی: ${stats.highAchieverCount} |
             دانشجویان نیازمند بهبود: ${stats.lowAchieverCount} |
             میانگین نمرات: ${stats.averageScore.toFixed(1)} |
             محدوده سنی: ${stats.ageRange.min}-${stats.ageRange.max} سال`
  };
}

const studentData = [
  { name: "عرشیا", age: 25, score: 18 },
  { name: "علی", age: 17, score: 12 },
  { name: "مریم", age: 20, score: 5 },
  { name: "زهرا", age: 22, score: 15 },
  { name: "محمد", age: 19, score: 9 },
];

console.log('گزارش عملکرد دانشجویان:', generateStudentPerformanceReport(studentData));