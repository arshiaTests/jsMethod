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
  // نام دانش‌آموزان به حروف بزرگ: ["عرشیا", "علی", "مریم", "زهرا", "محمد"]"