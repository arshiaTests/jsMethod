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