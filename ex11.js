function findIndex(arr, target) {
    let index = -1;
    arr.some((num, i) => {
        if (num === target) {
            index = i;
            return true; // متوقف کردن عملیات بعد از پیدا شدن مقدار
        }
        return false;
    });
    return index !== -1 ? `ایندکس: ${index}` : "پیدا نشد";
}

console.log(findIndex([10, 20, 34, 2, 233], 20)); // ایندکس: 1
function findIndexx(arr, target) {
    let index = arr.findIndex(num => num === target);
    return index !== -1 ? `ایندکس: ${index}` : "پیدا نشد";
}

console.log(findIndexx([10, 20, 34, 2, 233], 20)); // ایندکس: 1


//پیدا کردن همه‌ی ایندکس‌های یک عدد در آرایه
const findAllIndices = (arr, target) => {
    const indices = [];
    arr.forEach((num, i) => {
      if (num === target) indices.push(i);
    });
    return indices.length > 0 ? `ایندکس‌ها: ${indices.join(", ")}` : "پیدا نشد";
  };
  
  console.log(findAllIndices([10, 20, 34, 20, 233], 20)); // خروجی: "ایندکس‌ها: 1, 3"

//پیدا کردن آخرین ایندکس یک عدد در آرایه
  const findLastIndex = (arr, target) => {
    const index = arr.lastIndexOf(target);
    return index !== -1 ? `آخرین ایندکس: ${index}` : "پیدا نشد";
  };
  
  console.log(findLastIndex([10, 20, 34, 20, 233], 20)); // خروجی: "آخرین ایندکس: 3"
  // پیدا کردن همه‌ی ایندکس‌های یک عدد در آرایه
  const findAllIndicess = (arr, target) => {
    const indices = [];
    arr.forEach((num, i) => {
      if (num === target) indices.push(i);
    });
    return indices.length > 0 ? `ایندکس‌ها: ${indices.join(", ")}` : "پیدا نشد";
  };
  
  console.log(findAllIndicess([10, 20, 34, 20, 233], 20)); // خروجی: "ایندکس‌ها: 1, 3"

  //تمرین ترکیبی: جستجو و تحلیل ایندکس‌ها

  const analyzeIndices = (arr, target) => {
    // 1. پیدا کردن اولین ایندکس عدد
    const firstIndex = arr.findIndex((num) => num === target);
  
    // 2. پیدا کردن آخرین ایندکس عدد
    const lastIndex = arr.lastIndexOf(target);
  
    // 3. پیدا کردن همه ایندکس‌های عدد
    const allIndices = [];
    arr.forEach((num, i) => {
      if (num === target) allIndices.push(i);
    });
  
    // 4. برگرداندن نتیجه نهایی
    return `اولین ایندکس عدد ${target}: ${firstIndex !== -1 ? firstIndex : "پیدا نشد"}
  آخرین ایندکس عدد ${target}: ${lastIndex !== -1 ? lastIndex : "پیدا نشد"}
  همه ایندکس‌های عدد ${target}: ${allIndices.length > 0 ? allIndices.join(", ") : "پیدا نشد"}`;
  };
  
  // تست تابع
  const numbers = [10, 20, 34, 20, 233, 20];
  
  console.log(analyzeIndices(numbers, 20)); 
  //// خروجی: 
  /// "اولین ایندکس عدد 20: 1
  // آخرین ایندکس عدد 20: 5
  // همه ایندکس‌های عدد 20: 1, 3, 5"
  ////refactor
  /**
 * یافتن نخستین موقعیت مقدار در آرایه
 * @param {Array} لیست - آرایه مورد بررسی
 * @param {*} مقدار - مقداری که باید یافت شود
 * @returns {Object} نتیجه جستجو
 */
function پیداکن_نخستین_موقعیت(لیست, مقدار) {
  const موقعیت = لیست.findIndex(عنصر => عنصر === مقدار);
  return {
      یافت_شد: موقعیت !== -1,
      موقعیت,
      پیام: موقعیت !== -1 
          ? `نخستین رخداد در موقعیت ${موقعیت} یافت شد` 
          : 'مقدار مورد نظر وجود ندارد'
  };
}

console.log(پیداکن_نخستین_موقعیت([10, 20, 34, 2, 233], 20));

/**
* یافتن تمام موقعیت‌های مقدار در آرایه
* @param {Array} لیست - آرایه مورد بررسی
* @param {*} مقدار - مقداری که باید یافت شود
* @returns {Object} نتیجه جستجو
*/
function پیداکن_تمام_موقعیت‌ها(لیست, مقدار) {
  const موقعیت‌ها = لیست.reduce((نتیجه, عنصر, اندیس) => {
      if (عنصر === مقدار) نتیجه.push(اندیس);
      return نتیجه;
  }, []);
  
  return {
      تعداد: موقعیت‌ها.length,
      موقعیت‌ها,
      پیام: موقعیت‌ها.length > 0
          ? `${موقعیت‌ها.length} رخداد در موقعیت‌های ${موقعیت‌ها.join('، ')} یافت شد`
          : 'مقدار مورد نظر وجود ندارد'
  };
}

console.log(پیداکن_تمام_موقعیت‌ها([10, 20, 34, 20, 233], 20));

/**
* یافتن آخرین موقعیت مقدار در آرایه
* @param {Array} لیست - آرایه مورد بررسی
* @param {*} مقدار - مقداری که باید یافت شود
* @returns {Object} نتیجه جستجو
*/
function پیداکن_آخرین_موقعیت(لیست, مقدار) {
  const موقعیت = لیست.lastIndexOf(مقدار);
  return {
      یافت_شد: موقعیت !== -1,
      موقعیت,
      پیام: موقعیت !== -1
          ? `آخرین رخداد در موقعیت ${موقعیت} یافت شد`
          : 'مقدار مورد نظر وجود ندارد'
  };
}

console.log(پیداکن_آخرین_موقعیت([10, 20, 34, 20, 233], 20));

/**
* تحلیل جامع موقعیت‌های مقدار در آرایه
* @param {Array} لیست - آرایه مورد بررسی
* @param {*} مقدار - مقداری که باید یافت شود
* @returns {Object} گزارش تحلیلی
*/
function تحلیل_موقعیت‌ها(لیست, مقدار) {
  const نخستین = پیداکن_نخستین_موقعیت(لیست, مقدار);
  const آخرین = پیداکن_آخرین_موقعیت(لیست, مقدار);
  const تمامی = پیداکن_تمام_موقعیت‌ها(لیست, مقدار);
  
  return {
      مقدار,
      لیست,
      نخستین_موقعیت: نخستین.موقعیت,
      آخرین_موقعیت: آخرین.موقعیت,
      تمامی_موقعیت‌ها: تمامی.موقعیت‌ها,
      تعداد_رخدادها: تمامی.تعداد,
      وجود_دارد: نخستین.یافت_شد,
      خلاصه: `تحلیل موقعیت‌های ${مقدار}:
          - نخستین موقعیت: ${نخستین.موقعیت !== -1 ? نخستین.موقعیت : 'یافت نشد'}
          - آخرین موقعیت: ${آخرین.موقعیت !== -1 ? آخرین.موقعیت : 'یافت نشد'}
          - تعداد رخدادها: ${تمامی.تعداد}
          - تمامی موقعیت‌ها: ${تمامی.موقعیت‌ها.length > 0 ? تمامی.موقعیت‌ها.join('، ') : 'هیچ'}`
  };
}

const آرایه_نمونه = [10, 20, 34, 20, 233, 20];
console.log(تحلیل_موقعیت‌ها(آرایه_نمونه, 20));