const names = ["ali", "sara", "reza", "mahmoud", "fatemeh", "amir"];
const filter = names.filter(name =>name.lenght>5);
const up = names.map(name => name.toUpperCase())
const index = up.map((name , index)=> `${index + 1} - ${name}`);
console.log(index)
//فقط اسامی که طول آن‌ها بیشتر از ۵ کاراکتر است را انتخاب کنید.
//این اسامی را به حروف بزرگ تبدیل کنید.
//سپس هر اسم را با یک شماره (ایندکس) همراه کنید و به‌صورت یک رشته نمایش دهید.
