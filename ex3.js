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
  