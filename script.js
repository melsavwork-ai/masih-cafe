/*
مدیریت محصولات کافه مسیح
تمام محصولات در بخش products قرار دارند. عکس‌ها باید داخل پوشه images باشند.
نام عکس‌ها: 1.jpg 2.jpg 3.jpg ... 50.jpg
برای اضافه یا تغییر محصول، در آینده فقط اطلاعات محصول را به من بده تا نسخه جدید script.js را آماده کنم.
*/
const products = [ // ========================= // اسپرسو بار // =========================
    {
        name: "دبل ۱۰۰٪ روبوستا",
        price: 120000,
        image: "1.jpg",
        category: "اسپرسو بار"
    },
    {
        name: "دبل ۷۰/۳۰",
        price: 130000,
        image: "2.jpg",
        category: "اسپرسو بار"
    },
    {
        name: "سینگل",
        price: 100000,
        image: "3.jpg",
        category: "اسپرسو بار"
    },
    {
        name: "لته ۱۰۰٪ روبوستا",
        price: 170000,
        image: "4.jpg",
        category: "اسپرسو بار"
    },
    {
        name: "لته ۷۰/۳۰",
        price: 180000,
        image: "5.jpg",
        category: "اسپرسو بار"
    },
    {
        name: "امریکانو ۱۰۰٪ روبوستا",
        price: 140000,
        image: "6.jpg",
        category: "اسپرسو بار"
    },
    {
        name: "امریکانو ۷۰/۳۰",
        price: 150000,
        image: "7.jpg",
        category: "اسپرسو بار"
    },
    {
        name: "کورتادو ۱۰۰٪ روبوستا",
        price: 170000,
        image: "8.jpg",
        category: "اسپرسو بار"
    },
    {
        name: "کورتادو ۷۰/۳۰",
        price: 180000,
        image: "9.jpg",
        category: "اسپرسو بار"
    },
    {
        name: "کاپوچینو",
        price: 200000,
        image: "10.jpg",
        category: "اسپرسو بار"
    },
    {
        name: "موکا ۱۰۰٪ روبوستا",
        price: 230000,
        image: "11.jpg",
        category: "اسپرسو بار"
    },
    {
        name: "موکا ۷۰/۳۰",
        price: 240000,
        image: "12.jpg",
        category: "اسپرسو بار"
    },
    {
        name: "کارامل ماکیاتو ۱۰۰٪ روبوستا",
        price: 280000,
        image: "13.jpg",
        category: "اسپرسو بار"
    },
    {
        name: "کارامل ماکیاتو ۷۰/۳۰",
        price: 290000,
        image: "14.jpg",
        category: "اسپرسو بار"
    },
    {
        name: "آیس لمون اسپرسو",
        price: null,
        image: "49.jpg",
        category: "اسپرسو بار"
    },
    {
        name: "آفوگاتو",
        price: null,
        image: "50.jpg",
        category: "اسپرسو بار"
    },

    // =========================
    // شیک
    // =========================

    {
        name: "شیک شکلات",
        price: 340000,
        image: "15.jpg",
        category: "شیک"
    },
    {
        name: "شیک بادام زمینی",
        price: 350000,
        image: "16.jpg",
        category: "شیک"
    },
    {
        name: "شیک موز شکلات",
        price: 360000,
        image: "17.jpg",
        category: "شیک"
    },
    {
        name: "شیک توت فرنگی وانیل",
        price: 340000,
        image: "18.jpg",
        category: "شیک"
    },
    {
        name: "شیک لوتوس",
        price: 360000,
        image: "19.jpg",
        category: "شیک"
    },

    // =========================
    // اسموتی
    // =========================

    {
        name: "شیر موز",
        price: 320000,
        image: "20.jpg",
        category: "اسموتی"
    },
    {
        name: "کوک لیون",
        price: 250000,
        image: "21.jpg",
        category: "اسموتی"
    },
    {
        name: "انبه توت فرنگی بستنی",
        price: 370000,
        image: "22.jpg",
        category: "اسموتی"
    },
    {
        name: "معجون ترش",
        price: 360000,
        image: "23.jpg",
        category: "اسموتی"
    },
    {
        name: "بلو بنانا",
        price: 380000,
        image: "24.jpg",
        category: "اسموتی"
    },
    {
        name: "موهیتو",
        price: 280000,
        image: "25.jpg",
        category: "اسموتی"
    },
    {
        name: "رد موهیتو",
        price: 290000,
        image: "26.jpg",
        category: "اسموتی"
    },
    {
        name: "خیار سکنجبین",
        price: null,
        image: "27.jpg",
        category: "اسموتی"
    },
    {
        name: "سانرایز",
        price: 370000,
        image: "28.jpg",
        category: "اسموتی"
    },
    {
        name: "ژوال",
        price: 290000,
        image: "29.jpg",
        category: "اسموتی"
    },
    {
        name: "توایلایت",
        price: null,
        image: "30.jpg",
        category: "اسموتی"
    },
    {
        name: "وایولت",
        price: null,
        image: "31.jpg",
        category: "اسموتی"
    },

    // =========================
    // فرایز
    // =========================

    {
        name: "سیب زمینی",
        price: 380000,
        image: "32.jpg",
        category: "فرایز"
    },
    {
        name: "سیب زمینی با پنیر",
        price: 520000,
        image: "33.jpg",
        category: "فرایز"
    },
    {
        name: "سیب زمینی ویژه",
        price: 580000,
        image: "34.jpg",
        category: "فرایز"
    },

    // =========================
    // بار گرم
    // =========================

    {
        name: "هات چاکلت",
        price: 270000,
        image: "35.jpg",
        category: "بار گرم"
    },
    {
        name: "وایت چاکلت",
        price: 280000,
        image: "36.jpg",
        category: "بار گرم"
    },
    {
        name: "شیر کاکائو",
        price: 240000,
        image: "37.jpg",
        category: "بار گرم"
    },
    {
        name: "هات بنانا",
        price: 320000,
        image: "38.jpg",
        category: "بار گرم"
    },
    {
        name: "شیر بیسکوئیت",
        price: 300000,
        image: "39.jpg",
        category: "بار گرم"
    },
    {
        name: "ماسالا",
        price: 220000,
        image: "40.jpg",
        category: "بار گرم"
    },
    {
        name: "چای کرک",
        price: 250000,
        image: "41.jpg",
        category: "بار گرم"
    },
    {
        name: "چای انگلیسی",
        price: 180000,
        image: "42.jpg",
        category: "بار گرم"
    },
    {
        name: "چای ساده",
        price: 130000,
        image: "43.jpg",
        category: "بار گرم"
    },
    {
        name: "چای زعفرون",
        price: 160000,
        image: "44.jpg",
        category: "بار گرم"
    },
    {
        name: "شیر عسل",
        price: 200000,
        image: "45.jpg",
        category: "بار گرم"
    },

    // =========================
    // پنینی
    // =========================

    {
        name: "پنینی مرغ",
        price: null,
        image: "46.jpg",
        category: "پنینی"
    },
    {
        name: "پنینی ژامبون",
        price: null,
        image: "47.jpg",
        category: "پنینی"
    },
    {
        name: "پنینی گوشت",
        price: null,
        image: "48.jpg",
        category: "پنینی"
    }
];
/* ========================================= ترتیب دسته‌بندی‌ها ========================================= */
const categoryOrder = ["همه", "اسپرسو بار", "شیک", "اسموتی", "فرایز", "بار گرم", "پنینی"];
/* ========================================= تنظیمات اولیه ========================================= */
let selected = "همه";
const cats = document.getElementById("cats"); const box = document.getElementById("products");
/* ========================================= نمایش قیمت ========================================= */
function formatPrice(price) {
    if (price === null || price === undefined) { return ""; }
    return new Intl.NumberFormat("fa-IR").format(price) + " تومان";
}
/* ========================================= ساخت دکمه‌های دسته‌بندی ========================================= */
function renderCategories() {
    const usedCategories = [...new Set(products.map(product => product.category))];
    cats.innerHTML = categoryOrder
        .filter(category => {
            return category === "همه" || usedCategories.includes(category);
        })
        .map(category => {
            return `
            <button
                class="category-button ${category === selected ? "active" : ""}"
                onclick="selectCategory('${category}')"
            >
                ${category}
            </button>
        `;
        })
        .join("");
}
/* ========================================= نمایش محصولات ========================================= */
function renderProducts() {
    const list =
        selected === "همه"
            ? products
            : products.filter(product => product.category === selected);

    box.innerHTML = list
        .map(product => {

            const price = formatPrice(product.price);

            return `
            <article class="product-card">

                <div class="product-image">
                    <img
                        src="images/${product.image}"
                        alt="${product.name}"
                        loading="lazy"
                        onerror="this.src='images/placeholder.svg'"
                    >
                </div>

                <div class="product-info">

                    <h3 class="product-name">
                        ${product.name}
                    </h3>

                    ${product.description
                    ? `<p class="product-description">${product.description}</p>`
                    : ""
                }

                    ${price
                    ? <div class="product-price">${price}</div>
                    : ""
                }

                </div>

            </article>
        `;
        })
        .join("");
}
/* ========================================= رندر اصلی ========================================= */function render() { renderCategories(); renderProducts(); }
/* ========================================= انتخاب دسته‌بندی ========================================= */
function selectCategory(category) {
    selected = category; render();
    const menuSection = document.getElementById("menu");

    if (menuSection) {
        menuSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}
/* ========================================= شروع سایت ========================================= */
render();