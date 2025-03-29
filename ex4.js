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
  