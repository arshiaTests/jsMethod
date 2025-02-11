//بررسی اینکه همه عناصر بزرگ‌تر از صفر هستند یا نه با every
function all (arr){
    for (let i = 0 ; i<arr.length;i++){
        if(arr[i]<=0){
            return arr[i]
        }
    }
    return true
}
console.log(all([1,2,3,4,12,3,32,-4,3]))