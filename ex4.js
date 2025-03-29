//تمرین چهارم:
//پیدا کردن اولین عدد بزرگ‌تر از 15 با find
function find (arr){
    for(let i = 0 ; i<arr.length;i++){
        if( arr[i]> 15){
            return arr[i]
        }   
    }
    return "عددی پیدا نشد "

}  
console.log(find([1,2,3,4,5,6,]))

const findFirstNumberGreaterThan15 = (arr) => {
    const result = arr.find((num) => num > 15);
    return result !== undefined ? result : "عددی پیدا نشد";
  };
  
  console.log("اولین عدد بزرگ‌تر از ۱۵:", findFirstNumberGreaterThan15([1, 2, 3, 4, 5, 6])); // خروجی: "عددی پیدا نشد"
  console.log("اولین عدد بزرگ‌تر از ۱۵:", findFirstNumberGreaterThan15([10, 20, 30, 40])); ////// خروجی: 20

  //تمرین ترکیبی: تحلیل و پیدا کردن داده‌ها

  const analyzeStudents = (students) => {
    // 1. پیدا کردن اولین دانش‌آموز با نمره بالای ۱۵
    const firstHighScorer = students.find((student) => student.score > 15);
  
    // 2. افزایش نمرات
    const increasedScores = students.map((student) => ({
      ...student,
      score: student.score + 5,
    }));
  
    // 3. فیلتر کردن دانش‌آموزان بالای ۲۰ سال
    const adults = increasedScores.filter((student) => student.age > 20);
  
    // 4. تبدیل نمرات به حروف
    const letterGrades = adults.map((student) => {
      if (student.score >= 90) return "A";
      if (student.score >= 80) return "B";
      if (student.score >= 70) return "C";
      if (student.score >= 60) return "D";
      return "F";
    });
  
    // 5. محاسبه میانگین نمرات دانش‌آموزان بالای ۲۰ سال
    const total = adults.reduce((acc, student) => acc + student.score, 0);
    const average = total / adults.length;
  
    // 6. برگرداندن نتیجه نهایی
    return `اولین دانش‌آموز با نمره بالای ۱۵: ${
      firstHighScorer ? firstHighScorer.name : "یافت نشد"
    }، میانگین نمرات دانش‌آموزان بالای ۲۰ سال: ${average.toFixed(2)}، تعداد: ${
      adults.length
    }`;
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
  // خروجی: "اولین دانش‌آموز با نمره بالای ۱۵: عرشیا، میانگین نمرات دانش‌آموزان بالای ۲۰ سال: 16.50، تعداد: 2"

  //refacor
/**
 * یافتن اولین عدد بزرگتر از حد آستانه
 * @param {number[]} numbers - آرایه اعداد
 * @param {number} [threshold=15] - حد آستانه
 * @returns {number|string} عدد پیدا شده یا پیام خطا
 */
function findFirstAboveThreshold(numbers, threshold = 15) {
  const result = numbers.find(num => num > threshold);
  return result ?? "عددی یافت نشد";
}

console.log('اولین عدد بزرگتر از ۱۵:', findFirstAboveThreshold([1, 2, 3, 4, 5, 6])); // "عددی یافت نشد"
console.log('اولین عدد بزرگتر از ۱۵:', findFirstAboveThreshold([10, 20, 30, 40])); // 20
console.log('اولین عدد بزرگتر از ۱۰:', findFirstAboveThreshold([5, 8, 12, 7], 10)); // 12

/**
* تحلیل پیشرفته دانشجویان
* @param {object[]} studentList - لیست دانشجویان
* @returns {object} گزارش تحلیلی
*/
function generateStudentPerformanceReport(studentList) {
  // 1. یافتن اولین دانشجوی با عملکرد عالی
  const topPerformer = studentList.find(student => student.score > 15);
  
  // 2. افزایش نمرات
  const updatedStudents = studentList.map(student => ({
      ...student,
      score: student.score + 5,
      grade: calculateGrade(student.score + 5)
  }));
  
  // 3. فیلتر دانشجویان بزرگسال
  const adultStudents = updatedStudents.filter(student => student.age > 20);
  
  // 4. محاسبات آماری
  const stats = {
      totalStudents: studentList.length,
      adultCount: adultStudents.length,
      averageScore: adultStudents.reduce((sum, student) => sum + student.score, 0) / adultStudents.length || 0,
      gradeDistribution: adultStudents.reduce((dist, student) => {
          dist[student.grade] = (dist[student.grade] || 0) + 1;
          return dist;
      }, {})
  };
  
  return {
      topPerformer: topPerformer?.name || "ندارد",
      adultStudents,
      statistics: stats,
      summary: `تعداد دانشجویان بزرگسال: ${stats.adultCount} - میانگین نمرات: ${stats.averageScore.toFixed(1)}`
  };
  
  // تابع کمکی برای محاسبه نمره حروفی
  function calculateGrade(score) {
      if (score >= 90) return 'A';
      if (score >= 80) return 'B';
      if (score >= 70) return 'C';
      if (score >= 60) return 'D';
      return 'F';
  }
}

// داده‌های نمونه
const studentData = [
  { name: "عرشیا", age: 25, score: 18 },
  { name: "علی", age: 17, score: 12 },
  { name: "مریم", age: 20, score: 5 },
  { name: "زهرا", age: 22, score: 15 },
  { name: "محمد", age: 19, score: 9 },
];

console.log('گزارش عملکرد دانشجویان:', generateStudentPerformanceReport(studentData));
/* خروجی:
{
  topPerformer: "عرشیا",
  adultStudents: [
      { name: "عرشیا", age: 25, score: 23, grade: "D" },
      { name: "زهرا", age: 22, score: 20, grade: "D" }
  ],
  statistics: {
      totalStudents: 5,
      adultCount: 2,
      averageScore: 21.5,
      gradeDistribution: { D: 2 }
  },
  summary: "تعداد دانشجویان بزرگسال: 2 - میانگین نمرات: 21.5"
}
*/

/**
* نسخه پیشرفته‌تر با قابلیت تنظیم پارامترها
* @param {object[]} students - لیست دانشجویان
* @param {object} options - تنظیمات
* @param {number} options.scoreThreshold - حداقل نمره برای دانشجویان برتر
* @param {number} options.ageThreshold - حداقل سن برای بزرگسالان
* @param {number} options.scoreBonus - مقدار افزایش نمره
* @returns {object} گزارش پیشرفته
*/
function analyzeStudentData(students, options = {}) {
  const config = {
      scoreThreshold: 15,
      ageThreshold: 20,
      scoreBonus: 5,
      ...options
  };
  
  // یافتن دانشجویان برتر
  const highScorers = students.filter(
      student => student.score > config.scoreThreshold
  );
  
  // افزایش نمرات با مقدار دلخواه
  const processedStudents = students.map(student => ({
      ...student,
      score: student.score + config.scoreBonus,
      grade: calculateGrade(student.score + config.scoreBonus)
  }));
  
  // فیلتر بر اساس سن
  const filteredStudents = processedStudents.filter(
      student => student.age > config.ageThreshold
  );
  
  // محاسبه آمار
  const calculateStats = (data) => ({
      count: data.length,
      average: data.reduce((sum, student) => sum + student.score, 0) / data.length || 0,
      minScore: Math.min(...data.map(s => s.score)),
      maxScore: Math.max(...data.map(s => s.score))
  });
  
  return {
      config,
      highScorers,
      filteredStudents,
      stats: {
          all: calculateStats(processedStudents),
          filtered: calculateStats(filteredStudents)
      },
      reportDate: new Date().toLocaleString()
  };
}

console.log('گزارش پیشرفته:', analyzeStudentData(studentData, { scoreBonus: 3, ageThreshold: 18 }));