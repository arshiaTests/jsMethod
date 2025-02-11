//تمرین: یک عدد را در آرایه پیدا کن و موقعیت (ایندکس) اولین حضور آن را برگردان.
function include (arr,target){
    return arr.includes(target) ? `${target} در آرایه وجود دارد.` :"پیدا نشد "
    

}
console.log(include([10,20,34,2,233],20))

