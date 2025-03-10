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