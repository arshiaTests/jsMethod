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