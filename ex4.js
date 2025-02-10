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