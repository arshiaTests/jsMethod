چرا باید از متدها جاوا اسکریپت استفاده کنیم؟
وقتی با متد‌ها و مزایایی که یک متد ساده می‌تواند برای ما به ارمغان بیاورند آشنا شوید تازه به ضرورت استفاده از آن‌ها پی خواهید برد.  موارد زیر کم‌ترین قابلیت‌هایی هستند که متد‌ها در جاوا اسکریپت در اختیار برنامه‌نویس قرار می‌دهد.
زمان توسعه سریع‌تر به دلیل قابلیت استفاده مجدد کدها با رویکرد متد
خطایابی و نگهداری راحت‌تر کدها در زمان توسعه و بهره‌برداری
امکان تولید کدهای کارآمدتر به دلیل سازماندهی بهتر کدها با متد
متد‌ها معمولاً برای دسترسی داده‌های ذخیره شده در یک شی و ویرایش یا انجام عملیاتی خاص روی آن استفاده می شوند. به‌عنوان مثال می توانید از روش length برای یافتن طول یک رشته استفاده کنید.Push در جاوا اسکریپت متد دیگری است که برای افزودن یک عنصر جدید به آرایه استفاده می‌شود.
متدهای رشته «String» در جاوا اسکریپت
رشته‌ها از انواع  داده‌هایی  هستند که  بیشترین کاربرد را در برنامه‌نویسی دارند.مخصوصاً برنامه‌نویسی تحت وب که معمولاً

تابع length()‎: طول یک رشته‌ای که به آن پاس می‌دهیم را برمی‌گرداند.
تابع indexOf()‎: اندیس قرارگیری یک کاراکتر مشخص را در یک رشته را برمی‌گرداند.
تابع charAt()‎: کاراکتر اندیس مشخص شده را در یک رشته برمی‌گرداند.
تابع substring(‎): یک زیر رشته از یک رشته را برمی گرداند.
تابع toUpperCase()‎: تمام حروف یک رشته را به حروف بزرگ تبدیل می‌کند.
تابع toLowerCase()‎: تمام حروف یک رشته را به حروف کوچک تبدیل می‌کند.
تابع trim()‎: فضای خالی بین کاراکترها را حذف می‌کند.

متد‌های آرایه در جاوا اسکریپت
آرایه‌ها مانند جدولی هستند که خانه دارای یک مقدار مجزا است.در واقع به جای تعریف چند متغیر نام‌های مختلف یک متغیر با نام ثابت تعریف می‌کنیم که نام محل قرار گیری هر عضو آن را یک عدد مشخص می‌کند.
تابع push()‎: یک عنصر جدید به انتهای آرایه اضافه می‌کند.
تابع pop()‎: آخرین عنصر آرایه را حذف می‌کند.
تابع shift()‎: اولین عنصر آرایه را حذف می‌کند.
تابع unshift()‎: یک عنصر به ابتدای آرایه اضافه می‌کند.
تابع sort()‎: عناصر آرایه را به ترتیب صعودی مرتب می‌کند.
تابع reverse()‎: ترتیب عناصر یک آرایه را معکوس می‌کند.

متد‌های آبجکت یا شی در جاوا اسکریپت
آبجکت‌های در جاوا اسکریپت نوعی داده  کلید/مقداری هستند. چیزی شبیه به آرایه. با این
تابع hasOwnProperty()‎: یک مقدار بولی را برمی‌گرداند که نشان می‌دهد آیا Object مورد نظر دارای ویژگی مشخص شده است یا خیر.
تابع keys()‎: آرایه‌ای از کلیدهای Object را برمی‌گرداند.
تابع values()‎: آرایه‌ای از مقادیر Object را برمی‌گرداند.
تابع entries()‎: آرایه‌ای از کلیدها و مقدارهای Object برمی‌گرداند.

متد‌ some در جاوا اسکریپت

متد find در جاوا اسکریپت
این متد مانند متد Some برای جستجو در آرایه استفاده می‌شود.

متد map در جاوا اسکریپت
متد map در جاوا اسکریپت برای اعمال یک عملیات خاص روی تمام عناصر یک آرایه استفاده می‌شود.

متد Reduce در جاوا اسکریپت
متد Reduce در جاوا اسکریپت برای جمع کردن یا به عبارتی تبدیل عناصر یک آرایه به یک عنصر واحد استفاده می‌شود. مهم نیست مقدار عناصر و نوع داده‌ای آن‌ها چه باشد. طبق خواص ذاتی مقادیر با آن‌ها برخورد می‌کند.

دام در جاوا اسکریپت
جاوا اسکریپت برای این که پویایی را در فایل HTML برقرار کند باید به محتوای این سند دسترسی داشته باشد. DOM مخفف کلمات  Document Object Model و به معنای مدل شیءگرایی سند است. در واقع تمام متد‌ها برای این بتوانند درست عمل کنند با این مدل در ارتباط هستند.


