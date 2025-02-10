//تمرین چهارم:
//پیدا کردن اولین عدد بزرگ‌تر از 15 با find
function find (arr){
  return arr.find(arr => arr > 15)
}  
console.log(find([1,2,3,4,5,6,18]))