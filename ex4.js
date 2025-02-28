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
  console.log("اولین عدد بزرگ‌تر از ۱۵:", findFirstNumberGreaterThan15([10, 20, 30, 40])); // خروجی: 20