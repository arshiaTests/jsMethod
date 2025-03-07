//تمرین 2: فیلتر کردن نمرات زیر 10 با filter
//لیست نمرات را به نحوی فیلتر کن که فقط مقادیری که کمتر از 10 هستند باقی بمانند.

function find (score){
    let filter =[]
    for(let i = 0 ; i<score.length;i++){
        if(score[i]<10){
            filter.push(score[i])
        }
    }
    return filter
}
console.log(find([1,2,3,4,5,567,73,44,23,2,35,]))

const scores = [1, 2, 3, 4, 5, 567, 73, 44, 23, 2, 35];

const findScoresBelow10 = (scores) => {
  return scores.filter((score) => score < 10);
};

console.log("نمرات زیر ۱۰:", findScoresBelow10(scores)); // خروجی: [1, 2, 3, 4, 5, 2]
//. فیلتر کردن اعداد بین دو مقدار
const findBetween = (scores, min, max) => {
    return scores.filter((score) => score >= min && score <= max);
  };
  
  console.log(findBetween([5, 12, 8, 3, 20], 10, 20)); // خروجی: [12, 20]