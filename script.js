/*
=============================================
مدیریت محصولات کافه مسیح
فقط این بخش را برای محصول/قیمت/عکس ویرایش کن.
مثال محصول جدید:
{
  name: "کاپوچینو",
  price: 200000,
  image: "10.jpg",
  category: "اسپرسو بار",
  description: "توضیح کوتاه"
}
عکس را داخل پوشه images بگذار.
=============================================
*/
const products = [
  { name: "دبل ۱۰۰٪ روبوستا", price: 120000, image: "1.jpg", category: "اسپرسو بار" },
  { name: "دبل ۷۰/۳۰", price: 130000, image: "2.jpg", category: "اسپرسو بار" },
  { name: "سینگل", price: 100000, image: "3.jpg", category: "اسپرسو بار" },
  { name: "لته ۱۰۰٪ روبوستا", price: 170000, image: "4.jpg", category: "اسپرسو بار" },
  { name: "لته ۷۰/۳۰", price: 180000, image: "5.jpg", category: "اسپرسو بار" },
  { name: "امریکانو ۱۰۰٪ روبوستا", price: 140000, image: "6.jpg", category: "اسپرسو بار" },
  { name: "امریکانو ۷۰/۳۰", price: 150000, image: "7.jpg", category: "اسپرسو بار" },
  { name: "کورتادو ۱۰۰٪ روبوستا", price: 170000, image: "8.jpg", category: "اسپرسو بار" },
  { name: "کورتادو ۷۰/۳۰", price: 180000, image: "9.jpg", category: "اسپرسو بار" },
  { name: "کاپوچینو", price: 200000, image: "10.jpg", category: "اسپرسو بار" },
  { name: "موکا ۱۰۰٪ روبوستا", price: 230000, image: "11.jpg", category: "اسپرسو بار" },
  { name: "موکا ۷۰/۳۰", price: 240000, image: "12.jpg", category: "اسپرسو بار" },
  { name: "کارامل ماکیاتو ۱۰۰٪ روبوستا", price: 280000, image: "13.jpg", category: "اسپرسو بار" },
  { name: "کارامل ماکیاتو ۷۰/۳۰", price: 290000, image: "14.jpg", category: "اسپرسو بار" }
  { name: "شیک شکلات", price: 340000, image: "15.jpg", category: "شیک" }
  { name: "شیک بادام زمینی", price: 350000, image: "16.jpg", category: "شیک" }
  { name: "شیک موز شکلات", price: 360000, image: "17.jpg", category: "شیک" }
  { name: "شیک توت فرنگی وانیل", price: 340000, image: "18.jpg", category: "شیک" }
  { name: "شیک لوتوس", price: 360000, image: "19.jpg", category: "شیک" }
  { name: "شیر موز", price: 320000, image: "20.jpg", category: "اسموتی" }
  { name: "کوک لیون", price: 250000, image: "21.jpg", category: "اسموتی" }
  { name: "انبه توت فرنگی بستنی", price: 370000, image: "22.jpg", category: "اسموتی" }
  { name: "معجون ترش", price: 360000, image: "23.jpg", category: "اسموتی" }
  { name: "بلو بنانا", price: 380000, image: "24.jpg", category: "اسموتی" }
  { name: "موهیتو", price: 280000, image: "25.jpg", category: "اسموتی" }
  { name: "رد موهیتو", price: 290000, image: "26.jpg", category: "اسموتی" }
  { name: "خیار سکنجبین", price: null, image: "27.jpg", category: "اسموتی" }
  { name: "سانرایز", price: 370000, image: "28.jpg", category: "اسموتی" }
  { name: "ژوال", price: 290000, image: "29.jpg", category: "اسموتی" }
  { name: "توایلایت", price: null, image: "30.jpg", category: "اسموتی" }
  { name: "وایولت", price: null, image: "31.jpg", category: "اسموتی" }
  { name: "سیب زمینی", price: 380000, image: "32.jpg", category: "فرایز" }
  { name: "سیب زمینی با پنیر", price: 520000, image: "33.jpg", category: "فرایز" }
  { name: "سیب زمینی ویژه", price: 580000, image: "34.jpg", category: "فرایز" }
  { name: "هات چاکلت", price: 270000, image: "35.jpg", category: "بار گرم" }
  { name: "وایت چاکلت", price: 280000, image: "36.jpg", category: "بار گرم" }
  { name: "شیر کاکائو", price: 240000, image: "37.jpg", category: "بار گرم" }
  { name: "هات بنانا", price: 320000, image: "38.jpg", category: "بار گرم" }
  { name: "شیر بیسکوئیت", price: 300000, image: "39.jpg", category: "بار گرم" }
  { name: "ماسالا", price: 220000, image: "40.jpg", category: "بار گرم" }
  { name: "چای کرک", price: 250000, image: "41.jpg", category: "بار گرم" }
  { name: "چای انگلیسی", price: 180000, image: "42.jpg", category: "بار گرم" }
  { name: "چای ساده", price: 130000, image: "43.jpg", category: "بار گرم" }
  { name: "چای زعفرون", price: 160000, image: "44.jpg", category: "بار گرم" }
  { name: "شیر عسل", price: 200000, image: "45.jpg", category: "بار گرم" }
  { name: "پنینی مرغ", price: null, image: "46.jpg", category: "پنینی" }
  { name: "پنینی ژامبون", price: null, image: "47.jpg", category: "پنینی" }
  { name: "پنینی گوشت", price: null, image: "48.jpg", category: "پنینی" }
  { name: "آیس لمون اسپرسو", price: null, image: "49.jpg", category: "اسپرسو بار" }
  { name: "آفوگاتو", price: null, image: "50.jpg", category: "اسپرسو بار" }
  // محصولات بعدی را اینجا اضافه کن:
  // {name:"...",price:null,image:"15.jpg",category:"شیک"}
];
const categoryOrder = ["همه", "اسپرسو بار", "شیک", "اسموتی", "فرایز", "بار گرم", "پنینی"]; let selected = "همه";
const cats = document.getElementById('cats'), box = document.getElementById('products');
const toman = n => n == null ? 'قیمت متعاقباً اعلام می‌شود' : new Intl.NumberFormat('fa-IR').format(n) + ' تومان';
function render() { const used = [...new Set(products.map(x => x.category))]; cats.innerHTML = categoryOrder.filter(x => x === 'همه' || used.includes(x)).map(x => `<button class="${x === selected ? 'active' : ''}" onclick="selectCat('${x}')">${x}</button>`).join(''); const list = selected === 'همه' ? products : products.filter(x => x.category === selected); box.innerHTML = list.map(x => `<article class="product"><img src="images/${x.image}" alt="${x.name}" onerror="this.src='images/placeholder.svg'"><div class="body"><h3>${x.name}</h3><div class="desc">${x.description || ''}</div><div class="price">${toman(x.price)}</div></div></article>`).join('') }
function selectCat(x) { selected = x; render() } render();
