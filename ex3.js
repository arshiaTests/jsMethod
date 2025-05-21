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
  
  console.log("نمرات افزایش یافته:", lvlUpp([1, 2, 3, 4, 5, 11, 10, 9])); // خروجی: [6, 7, 8, 9, 10, 11, 12, 13]

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
 * افزایش نمرات به میزان ۵ واحد
 * @param {number[]} grades - آرایه نمرات اولیه
 * @returns {number[]} نمرات افزایش یافته
 */
function boostGrades(grades) {
  return grades.map(grade => grade + 5);
}

console.log('نمرات افزایش یافته:', boostGrades([1, 2, 3, 4, 5, 6, 7, 8]));
// خروجی: [6, 7, 8, 9, 10, 11, 12, 13]

/**
 * افزایش انتخابی نمرات (فقط نمرات زیر ۱۰)
 * @param {number[]} marks - آرایه نمرات
 * @param {number} [bonus=10] - مقدار افزایش
 * @returns {object} نتیجه با جزئیات
 */
function selectivelyBoostGrades(marks, bonus = 10) {
  const boosted = marks.map(mark => mark < 10 ? mark + bonus : mark);
  
  return {
    original: marks,
    boosted: boosted,
    message: `تعداد نمرات افزایش یافته: ${marks.filter(m => m < 10).length}`
  };
}

console.log(selectivelyBoostGrades([5, 10, 15, 8]));
/* خروجی:
{
  original: [5, 10, 15, 8],
  boosted: [15, 10, 15, 18],
  message: "تعداد نمرات افزایش یافته: 2"
}
*/

/**
 * تبدیل نمرات عددی به حروف
 * @param {number[]} scores - آرایه نمرات
 * @returns {string[]} نمرات حروفی
 */
function convertToLetterGrades(scores) {
  return scores.map(score => {
    if (score >= 90) return 'A+';
    if (score >= 85) return 'A';
    if (score >= 80) return 'B+';
    if (score >= 75) return 'B';
    if (score >= 70) return 'C+';
    if (score >= 65) return 'C';
    if (score >= 60) return 'D';
    return 'F';
  });
}

console.log('نمرات حروفی:', convertToLetterGrades([95, 85, 75, 65, 55]));
// خروجی: ["A+", "A", "B", "C", "F"]

/**
 * افزایش نمرات با استفاده از reduce
 * @param {number[]} numbers - آرایه اعداد
 * @param {number} [increment=5] - مقدار افزایش
 * @returns {string} نتیجه فرمت شده
 */
function incrementWithReduce(numbers, increment = 5) {
  const result = numbers.reduce((acc, num) => {
    acc.push(num + increment);
    return acc;
  }, []);
  
  return `اعداد افزایش یافته: ${result.join(' | ')}`;
}

console.log(incrementWithReduce([1, 2, 3, 4, 5]));
// خروجی: "اعداد افزایش یافته: 6 | 7 | 8 | 9 | 10"

/**
 * تحلیل جامع نمرات
 * @param {number[]} testScores - آرایه نمرات
 * @returns {object} گزارش تحلیلی
 */
function generateGradeAnalysisReport(testScores) {
  // افزایش نمرات
  const adjustedScores = testScores.map(score => score + 5);
  
  // تبدیل به حروف
  const letterGrades = adjustedScores.map(score => {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
  });
  
  // فیلتر نمرات عالی
  const excellentScores = adjustedScores.filter(
    (score, index) => ['A', 'B'].includes(letterGrades[index])
  );
  
  // محاسبات آماری
  const stats = {
    totalStudents: testScores.length,
    excellentCount: excellentScores.length,
    averageScore: excellentScores.reduce((sum, score) => sum + score, 0) / excellentScores.length || 0,
    gradeDistribution: letterGrades.reduce((acc, grade) => {
      acc[grade] = (acc[grade] || 0) + 1;
      return acc;
    }, {})
  };
  
  return {
    adjustedScores,
    letterGrades,
    excellentScores,
    statistics: stats,
    summary: `تعداد نمرات عالی: ${stats.excellentCount} - میانگین: ${stats.averageScore.toFixed(2)}`
  };
}

const sampleScores = [85, 92, 78, 88, 95, 65, 70];
console.log('گزارش تحلیل نمرات:', generateGradeAnalysisReport(sampleScores));
/* خروجی:
{
  adjustedScores: [90, 97, 83, 93, 100, 70, 75],
  letterGrades: ["A", "A", "B", "A", "A", "C", "C"],
  excellentScores: [90, 97, 83, 93, 100],
  statistics: {
    totalStudents: 7,
    excellentCount: 5,
    averageScore: 92.6,
    gradeDistribution: {A: 4, B: 1, C: 2}
  },
  summary: "تعداد نمرات عالی: 5 - میانگین: 92.60"
}
*/
  