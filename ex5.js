function neg (arr){
    for(let i = 0 ;i<arr.length;i++){
        if (arr[i]< 0){
            return true;
        }
    }
    return false
}
console.log(neg([1,2,3,45,32,-3,5,3,32,4,23,3]))
//تمرین پنجم: بررسی وجود حداقل یک عدد منفی