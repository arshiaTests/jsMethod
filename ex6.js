const allPositiveNumbers = (arr) => {
    return arr.every((num) => num > 0);
  };
  
  console.log("آیا همه اعداد مثبت هستند؟", allPositiveNumbers([1, 2, 3, 4, 12, 3, 32, -4, 3])); // خروجی: false
  console.log("آیا همه اعداد مثبت هستند؟", allPositiveNumbers([1, 2, 3, 4, 12, 3, 32, 3])); // خروجی: true
  //بررسی اینکه همه‌ی اعداد زوج هستند
  const allEvenNumbers = (arr) => {
    return arr.every((num) => num % 2 === 0);
  };
  
  console.log("آیا همه اعداد زوج هستند؟", allEvenNumbers([2, 4, 6, 8])); // خروجی: true
  console.log("آیا همه اعداد زوج هستند؟", allEvenNumbers([2, 4, 6, 7])); // خروجی: false

  // بررسی اینکه همه‌ی کاربران بالای ۱۸ سال هستند
  const users = [
    { name: "عرشیا", age: 25 },
    { name: "علی", age: 17 },
    { name: "مریم", age: 20 },
  ];
  
  const allAdults = (arr) => {
    return arr.every((user) => user.age > 18);
  };
  
  console.log("آیا همه کاربران بالای ۱۸ سال هستند؟", allAdults(users)); // خروجی: false

  //بررسی اینکه آیا همه‌ی رشته‌ها با حرف بزرگ شروع می‌شوند

  const allStartWithUppercase = (arr) => {
    return arr.every((str) => str[0] === str[0].toUpperCase());
  };
  
  console.log(allStartWithUppercase(["Hello", "World", "JavaScript"])); // خروجی: true
  console.log(allStartWithUppercase(["Hello", "world", "JavaScript"])); // خروجی: false

  //تمرین ترکیبی: تحلیل و بررسی داده‌ها

  const analyzeStudents = (students) => {
    // 1. بررسی اینکه آیا همه دانش‌آموزان بالای ۱۸ سال هستند
    const allAdults = students.every((student) => student.age > 18);
  
    // 2. بررسی اینکه آیا حداقل یک دانش‌آموز نمره بالای ۲۰ دارد
    const hasHighScorer = students.some((student) => student.score > 20);
  
    // 3. فیلتر کردن دانش‌آموزانی که نمره‌شان کمتر از ۱۰ است
    const lowScorers = students.filter((student) => student.score < 10);
  
    // 4. تبدیل نام دانش‌آموزان به حروف بزرگ
    const uppercaseNames = students.map((student) => student.name.toUpperCase());
  
    // 5. برگرداندن نتیجه نهایی
    return `آیا همه دانش‌آموزان بالای ۱۸ سال هستند؟ ${allAdults ? "بله" : "خیر"}
  آیا حداقل یک دانش‌آموز نمره بالای ۲۰ دارد؟ ${hasHighScorer ? "بله" : "خیر"}
  تعداد دانش‌آموزانی که نمره‌شان کمتر از ۱۰ است: ${lowScorers.length}
  نام دانش‌آموزان به حروف بزرگ: ${JSON.stringify(uppercaseNames)}`;
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
  // "آیا همه دانش‌آموزان بالای ۱۸ سال هستند؟ خیر
  // آیا حداقل یک دانش‌آموز نمره بالای ۲۰ دارد؟ خیر
  // تعداد دانش‌آموزانی که نمره‌شان کمتر از ۱۰ است: 2
  /// نام دانش‌آموزان به حروف بزرگ: ["عرشیا", "علی", "مریم", "زهرا", "محمد"]"

  //refactor

  /**
 * بررسی مثبت بودن تمام اعداد آرایه
 * @param {number[]} numbers - آرایه اعداد
 * @returns {object} نتیجه بررسی با جزئیات
 */
function checkAllPositiveNumbers(numbers) {
  const isAllPositive = numbers.every(num => num > 0);
  const negativeNumbers = numbers.filter(num => num <= 0);
  
  return {
    status: isAllPositive,
    message: isAllPositive 
      ? "تمام اعداد مثبت هستند" 
      : `اعداد منفی/صفر یافت شد: ${negativeNumbers.join(', ')}`,
    negativeCount: negativeNumbers.length
  };
}

console.log('بررسی اعداد مثبت:', checkAllPositiveNumbers([1, 2, 3, -4, 5]));
// خروجی: {status: false, message: "اعداد منفی/صفر یافت شد: -4", negativeCount: 1}

/**
 * بررسی زوج بودن تمام اعداد
 * @param {number[]} numbers - آرایه اعداد
 * @returns {object} نتیجه بررسی با جزئیات
 */
function verifyAllEvenNumbers(numbers) {
  const allEven = numbers.every(num => num % 2 === 0);
  const oddNumbers = numbers.filter(num => num % 2 !== 0);
  
  return {
    allEven,
    oddNumbers,
    summary: allEven
      ? "تمام اعداد زوج هستند"
      : `اعداد فرد یافت شد: ${oddNumbers.join(', ')}`
  };
}

console.log('بررسی اعداد زوج:', verifyAllEvenNumbers([2, 4, 6, 7]));
// خروجی: {allEven: false, oddNumbers: [7], summary: "اعداد فرد یافت شد: 7"}

/**
 * بررسی سن کاربران
 * @param {object[]} users - آرایه کاربران
 * @param {number} minAge - حداقل سن مورد نظر
 * @returns {object} نتیجه بررسی
 */
function validateUsersAge(users, minAge = 18) {
  const allAboveMinAge = users.every(user => user.age >= minAge);
  const underageUsers = users.filter(user => user.age < minAge);
  
  return {
    allAdult: allAboveMinAge,
    underageCount: underageUsers.length,
    underageNames: underageUsers.map(user => user.name),
    message: allAboveMinAge
      ? `تمام کاربران بالای ${minAge} سال هستند`
      : `${underageUsers.length} کاربر زیر ${minAge} سال وجود دارد`
  };
}

const userList = [
  { name: "عرشیا", age: 25 },
  { name: "علی", age: 17 },
  { name: "مریم", age: 20 },
];

console.log('بررسی سن کاربران:', validateUsersAge(userList));
// خروجی: {allAdult: false, underageCount: 1, underageNames: ["علی"], message: "1 کاربر زیر 18 سال وجود دارد"}

/**
 * بررسی حروف اول رشته‌ها
 * @param {string[]} strings - آرایه رشته‌ها
 * @returns {object} نتیجه بررسی
 */
function checkUppercaseStart(strings) {
  const allUppercase = strings.every(str => str[0] === str[0].toUpperCase());
  const invalidStrings = strings.filter(str => str[0] !== str[0].toUpperCase());
  
  return {
    allValid: allUppercase,
    invalidCount: invalidStrings.length,
    invalidExamples: invalidStrings.slice(0, 3), // نمایش حداکثر 3 مورد
    warning: allUppercase 
      ? null 
      : "بعضی رشته‌ها با حرف کوچک شروع شده‌اند"
  };
}

console.log('بررسی حروف اول:', checkUppercaseStart(["Hello", "world", "JavaScript"]));
// خروجی: {allValid: false, invalidCount: 1, invalidExamples: ["world"], warning: "بعضی رشته‌ها با حرف کوچک شروع شده‌اند"}

/**
 * تحلیل جامع دانشجویان
 * @param {object[]} studentList - لیست دانشجویان
 * @returns {object} گزارش تحلیلی
 */
function generateStudentAnalysisReport(studentList) {
  // بررسی سن
  const ageValidation = validateUsersAge(studentList, 18);
  
  // بررسی نمرات
  const highScorers = studentList.filter(student => student.score > 20);
  const lowScorers = studentList.filter(student => student.score < 10);
  
  // تبدیل نام‌ها
  const formattedNames = studentList.map(student => ({
    original: student.name,
    uppercase: student.name.toUpperCase(),
    firstLetter: student.name[0].toUpperCase()
  }));
  
  // آمار
  const stats = {
    total: studentList.length,
    averageScore: studentList.reduce((sum, student) => sum + student.score, 0) / studentList.length,
    highScoreCount: highScorers.length,
    lowScoreCount: lowScorers.length
  };
  
  return {
    ageValidation,
    scoreAnalysis: {
      hasHighScorer: highScorers.length > 0,
      highScorers,
      lowScorers
    },
    names: formattedNames,
    statistics: stats,
    summary: `تعداد دانشجویان: ${stats.total} | 
             میانگین نمرات: ${stats.averageScore.toFixed(1)} | 
             دانشجویان با نمره عالی: ${stats.highScoreCount}`
  };
}

const studentData = [
  { name: "عرشیا", age: 25, score: 18 },
  { name: "علی", age: 17, score: 12 },
  { name: "مریم", age: 20, score: 5 },
  { name: "زهرا", age: 22, score: 15 },
  { name: "محمد", age: 19, score: 9 },
];

console.log('گزارش تحلیلی دانشجویان:', generateStudentAnalysisReport(studentData));