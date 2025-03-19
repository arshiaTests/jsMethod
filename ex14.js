const text = "Hello World";
const upperText = text.toUpperCase();
console.log(upperText);
//تمرین 1: تبدیل رشته به حروف کوچک

const textt = "HELLO"
const lower = textt.toLocaleLowerCase();
console.log(lower)

//تمرین 2: بررسی اینکه آیا یک رشته با حروف بزرگ شروع می‌شود

const capitalizeFirstLetter = str => str[0].toUpperCase() + str.slice(1);
console.log(capitalizeFirstLetter("hello")); // Hello