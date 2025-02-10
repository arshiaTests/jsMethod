//تمرین 2: فیلتر کردن نمرات زیر 10 با filter
//لیست نمرات را به نحوی فیلتر کن که فقط مقادیری که کمتر از 10 هستند باقی بمانند.

function find (score){
 let filter = score.filter(score => score <10)
 return filter
}
console.log(find([1,2,3,4,5,567,73,44,23,2,35,]))