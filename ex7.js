//تمرین مرتب‌سازی با sort:
// مرتب‌سازی صعودی اعداد:
function big (arr){
    return arr.sort((a,b)=>a-b)
}
console.log(big([10,3,2,1,4,32,32,2,3]))

// مرتب‌سازی نزولی اعداد:
function less (arr){
    return arr.sort((a,b)=>b-a)
}
console.log(less([10,3,2,1,4,32,32,2,3]))
// مرتب‌سازی رشته‌ها (حروف الفبا):
function sort (arr){
    return arr.sort();
}
console.log(sort(["banana","apple","cherry"]))
