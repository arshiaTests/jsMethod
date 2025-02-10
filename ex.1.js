//تمرین 1: پیدا کردن میانگین نمرات با reduce
//لیستی از نمرات داریم:

//const scores = [15, 18, 12, 20, 10, 14, 16];

//با استفاده از reduce، میانگین این نمرات را محاسبه کن.
function average(num){
    let sum = num.reduce((a,b)=>a+b,0);
    return sum / num.length;
}
console.log(average([1,2,3,4]))