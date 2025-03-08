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