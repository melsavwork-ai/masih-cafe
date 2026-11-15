/*
CAFÉ MASIH مدیریت کامل محصولات منوی کافه
عکس محصولات:
1.jpg 2.jpg 3.jpg ... 50.jpg
همه عکس‌ها باید داخل پوشه images باشند.
قیمت‌هایی که null هستند بدون قیمت نمایش داده می‌شوند.
*/
const products = [
    /* =========================
       اسپرسو بار
    ========================== */

    {
        name: "دبل ۱۰۰٪ روبوستا",
        price: 135000,
        image: "1.jpg",
        category: "اسپرسو بار"
    },

    {
        name: "دبل ۷۰/۳۰",
        price: 145000,
        image: "2.jpg",
        category: "اسپرسو بار"
    },

    {
        name: "سینگل",
        price: 115000,
        image: "3.jpg",
        category: "اسپرسو بار"
    },

    {
        name: "اسپرسو 70/30 عربیکا",
        price: 195000,
        image: "62.jpg",
        category: "اسپرسو بار"
    },

    {
        name: "لته ۱۰۰٪ روبوستا",
        price: 200000,
        image: "4.jpg",
        category: "اسپرسو بار"
    },

    {
        name: "لته ۷۰/۳۰",
        price: 220000,
        image: "5.jpg",
        category: "اسپرسو بار"
    },

    {
        name: "امریکانو ۱۰۰٪ روبوستا",
        price: 160000,
        image: "6.jpg",
        category: "اسپرسو بار"
    },

    {
        name: "امریکانو ۷۰/۳۰",
        price: 170000,
        image: "7.jpg",
        category: "اسپرسو بار"
    },

    {
        name: "کورتادو ۱۰۰٪ روبوستا",
        price: 190000,
        image: "8.jpg",
        category: "اسپرسو بار"
    },

    {
        name: "کورتادو ۷۰/۳۰",
        price: 210000,
        image: "9.jpg",
        category: "اسپرسو بار"
    },

    {
        name: "کاپوچینو",
        price: 260000,
        image: "10.jpg",
        category: "اسپرسو بار"
    },

    {
        name: "موکا ۱۰۰٪ روبوستا",
        price: 290000,
        image: "11.jpg",
        category: "اسپرسو بار"
    },

    {
        name: "موکا ۷۰/۳۰",
        price: 310000,
        image: "12.jpg",
        category: "اسپرسو بار"
    },

    {
        name: "کارامل ماکیاتو ۱۰۰٪ روبوستا",
        price: 290000,
        image: "13.jpg",
        category: "اسپرسو بار"
    },

    {
        name: "کارامل ماکیاتو ۷۰/۳۰",
        price: 310000,
        image: "14.jpg",
        category: "اسپرسو بار"
    },

    /* =========================
       اسپرسو بار سرد
    ========================== */

    {
        name: "آیس لمون اسپرسو",
        price: 315000,
        image: "49.jpg",
        category: "اسپرسو بار سرد"
    },

    {
        name: "آفوگاتو",
        price: 330000,
        image: "50.jpg",
        category: "اسپرسو بار سرد"
    },

    {
        name: "ایس لته 70/30",
        price: 250000,
        image: "51.jpg",
        category: "اسپرسو بار سرد"
    },

    {
        name: "ایس لته 100 روبوستا",
        price: 230000,
        image: "52.jpg",
        category: "اسپرسو بار سرد"
    },

    {
        name: "ایس موکا 100 روبوستا",
        price: 320000,
        image: "53.jpg",
        category: "اسپرسو بار سرد"
    },

    {
        name: "ایس موکا 70/30",
        price: 340000,
        image: "54.jpg",
        category: "اسپرسو بار سرد"
    },

    {
        name: "ایس امریکانو 100 روبوستا",
        price: 190000,
        image: "55.jpg",
        category: "اسپرسو بار سرد"
    },

    {
        name: "ایس امریکانو 70/30",
        price: 210000,
        image: "56.jpg",
        category: "اسپرسو بار سرد"
    },

    {
        name: "ایس کورتادو 100 روبوستا",
        price: 230000,
        image: "57.jpg",
        category: "اسپرسو بار سرد"
    },

    {
        name: "ایس کورتادو 70/30",
        price: 250000,
        image: "58.jpg",
        category: "اسپرسو بار سرد"
    },

    {
        name: "ایس کارامل ماکیاتو 100 روبوستا",
        price: 320000,
        image: "59.jpg",
        category: "اسپرسو بار سرد"
    },

    {
        name: "ایس کارامل ماکیاتو70/30",
        price: 340000,
        image: "60.jpg",
        category: "اسپرسو بار سرد"
    },

    /* =========================
       شیک
    ========================== */

    {
        name: "شیک شکلات",
        price: 360000,
        image: "15.jpg",
        category: "شیک"
    },

    {
        name: "شیک بادام زمینی",
        price: 370000,
        image: "16.jpg",
        category: "شیک"
    },

    {
        name: "شیک موز شکلات",
        price: 380000,
        image: "17.jpg",
        category: "شیک"
    },

    {
        name: "شیک توت فرنگی وانیل",
        price: 360000,
        image: "18.jpg",
        category: "شیک"
    },

    {
        name: "شیک لوتوس",
        price: 380000,
        image: "19.jpg",
        category: "شیک"
    },

    {
        name: "شیک تیرامیسو",
        price: 430000,
        image: "63.jpg",
        category: "شیک"
    },

    /* =========================
       اسموتی
    ========================== */

    {
        name: "شیر موز",
        price: 350000,
        image: "20.jpg",
        category: "اسموتی"
    },

    {
        name: "کوک لیمون",
        price: 270000,
        image: "21.jpg",
        category: "اسموتی"
    },

    {
        name: "انبه توت فرنگی بستنی",
        price: 390000,
        image: "22.jpg",
        category: "اسموتی"
    },

    {
        name: "معجون ترش",
        price: 380000,
        image: "23.jpg",
        category: "اسموتی"
    },

    {
        name: "بلو بنانا",
        price: 410000,
        image: "24.jpg",
        category: "اسموتی"
    },

    {
        name: "موهیتو",
        price: 310000,
        image: "25.jpg",
        category: "اسموتی"
    },

    {
        name: "رد موهیتو",
        price: 320000,
        image: "26.jpg",
        category: "اسموتی"
    },

    {
        name: "خیار سکنجبین",
        price: 310000,
        image: "27.jpg",
        category: "اسموتی"
    },

    {
        name: "سانرایز",
        price: 390000,
        image: "28.jpg",
        category: "اسموتی"
    },

    {
        name: "ژوال",
        price: 310000,
        image: "29.jpg",
        category: "اسموتی"
    },

    {
        name: "توایلایت",
        price: 315000,
        image: "30.jpg",
        category: "اسموتی"
    },

    {
        name: "وایولت",
        price: 315000,
        image: "31.jpg",
        category: "اسموتی"
    },


    /* =========================
       فرایز
    ========================== */

    {
        name: "سیب زمینی",
        price: 450000,
        image: "32.jpg",
        category: "فرایز"
    },

    {
        name: "سیب زمینی با پنیر",
        price: 595000,
        image: "33.jpg",
        category: "فرایز"
    },

    {
        name: "سیب زمینی ویژه",
        price: 650000,
        image: "34.jpg",
        category: "فرایز"
    },


    /* =========================
       بار گرم
    ========================== */

    {
        name: "هات چاکلت",
        price: 290000,
        image: "35.jpg", category: "بار گرم"
    },

    {
        name: "وایت چاکلت",
        price: 310000,
        image: "36.jpg",
        category: "بار گرم"
    },

    {
        name: "نسکافه",
        price: 280000,
        image: "64.jpg",
        category: "بار گرم"
    },

    {
        name: "شیر کاکائو",
        price: 260000,
        image: "37.jpg",
        category: "بار گرم"
    },

    {
        name: "هات بنانا",
        price: 340000,
        image: "38.jpg",
        category: "بار گرم"
    },

    {
        name: "شیر بیسکوئیت",
        price: 320000,
        image: "39.jpg",
        category: "بار گرم"
    },

    {
        name: "ماسالا",
        price: 240000,
        image: "40.jpg",
        category: "بار گرم"
    },

    {
        name: "چای کرک",
        price: 270000,
        image: "41.jpg",
        category: "بار گرم"
    },

    {
        name: "چای انگلیسی",
        price: 200000,
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
        price: 260000,
        image: "45.jpg",
        category: "بار گرم"
    },

    {
        name: "دمنوش آرامش",
        price: 250000,
        image: "61.jpg",
        category: "بار گرم"
    },

    /* =========================
       پنینی
    ========================== */

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

/* =========================================
   CAFE MASIH - MENU ENGINE
========================================= */

"use strict";

/* ---------- MENU CATEGORIES ---------- */

const cafeCategories = [
    "اسپرسو بار",
    "اسپرسو بار سرد",
    "شیک",
    "اسموتی",
    "بار گرم"
];

const foodCategories = [
    "فرایز",
    "پنینی"
];

/* ---------- STATE ---------- */

let activeMenu = "cafe";
let selected = "همه";

/* ---------- DOM ELEMENTS ---------- */

const $ = selector => document.querySelector(selector);

const cats = $("#cats");
const box = $("#products");
const emptyState = $("#empty-state");

const menuChoiceScreen = $("#menu-choice-screen");
const menuTitle = $("#menu-title");
const menuDescription = $("#menu-description");

const backButton = $("#back-to-menu");
const menuSection = $("#menu");

/* ---------- PRICE FORMATTER ---------- */

const priceFormatter = new Intl.NumberFormat("fa-IR");

function formatPrice(price) {
    if (price === null || price === undefined || price === "") {
        return "";
    }

    return priceFormatter.format(price) + " تومان";
}

/* ---------- MENU HELPERS ---------- */

function getCategories() {
    return activeMenu === "cafe"
        ? cafeCategories
        : foodCategories;
}

function getProductImage(image) {
    if (!image) return "images/placeholder.svg";

    return image.startsWith("images/")
        ? image
        : `images/${image}`;
}

/* ---------- CHOOSE MENU ---------- */

function chooseMenu(menu) {
    if (menu !== "cafe" && menu !== "food") return;

    const menuChanged = activeMenu !== menu;

    activeMenu = menu;
    selected = "همه";

    if (menuTitle) {
        menuTitle.textContent =
            menu === "cafe" ? "منوی کافه" : "منوی غذا";
    }

    if (menuDescription) {
        menuDescription.textContent =
            menu === "cafe"
                ? "نوشیدنی مورد علاقه‌ات رو انتخاب کن."
                : "غذای مورد علاقه‌ات رو انتخاب کن.";
    }

    menuChoiceScreen?.classList.add("hidden");
    document.body.style.overflow = "";

    if (backButton) {
        backButton.style.display = "block";
    }

    if (menuChanged) {
        render();
    }

    if (menuSection) {
        menuSection.scrollIntoView({
            behavior: "auto",
            block: "start"
        });
    }
}

/* ---------- BACK TO MENU CHOICE ---------- */

function backToMenuChoice() {
    selected = "همه";

    menuChoiceScreen?.classList.remove("hidden");
    document.body.style.overflow = "hidden";

    if (backButton) {
        backButton.style.display = "none";
    }

    render();

    window.scrollTo({
        top: 0,
        behavior: "auto"
    });
}

/* ---------- RENDER CATEGORIES ---------- */

function renderCategories() {
    if (!cats) return;

    const categories = ["همه", ...getCategories()];

    cats.innerHTML = categories.map(category => `
        <button
            type="button"
            class="category-button ${category === selected ? "active" : ""}"
            data-category="${category}"
        >
            ${category}
        </button>
    `).join("");
}

/* ---------- RENDER PRODUCTS ---------- */

function renderProducts() {
    if (!box) return;

    const categories = getCategories();

    const list = products.filter(product =>
        categories.includes(product.category) &&
        (selected === "همه" || product.category === selected)
    );

    if (!list.length) {
        box.innerHTML = "";

        if (emptyState) {
            emptyState.style.display = "block";
        }

        return;
    }

    if (emptyState) {
        emptyState.style.display = "none";
    }

    box.innerHTML = list.map((product, index) => {
        const price = formatPrice(product.price);
        const imagePath = getProductImage(product.image);

        return `
            <article class="product-card">

                <div class="product-image">
                    <img
                        src="${imagePath}"
                        alt="${product.name}"
                        loading="${index < 6 ? "eager" : "lazy"}"
                        decoding="async"
                        onerror="this.onerror=null;this.src='images/placeholder.svg';"
                    >
                </div>

                <div class="product-info">

                    <h3 class="product-name">
                        ${product.name}
                    </h3>

                    ${price ? `
                        <div class="product-price">
                            ${price}
                        </div>
                    ` : ""}

                </div>

            </article>
        `;
    }).join("");
}

/* ---------- MAIN RENDER ---------- */

function render() {
    renderCategories();
    renderProducts();
}

/* ---------- CATEGORY CLICK ---------- */

cats?.addEventListener("click", function (event) {
    const button = event.target.closest(".category-button");

    if (!button) return;

    selected = button.dataset.category;
    render();
});

/* ---------- MENU CHOICE CLICK ---------- */

document.querySelectorAll(".menu-choice-card").forEach(button => {
    button.addEventListener("click", function () {
        chooseMenu(button.dataset.menu);
    });
});

/* ---------- BACK BUTTON ---------- */

backButton?.addEventListener("click", backToMenuChoice);

/* ---------- LOADER ---------- */

function hideLoader() {
    const loader = $("#loader");

    if (loader) {
        loader.classList.add("hidden");
    }
}

/* ---------- INITIALIZATION ---------- */

function initializeMenu() {
    activeMenu = "cafe";
    selected = "همه";

    document.body.style.overflow = "hidden";

    menuChoiceScreen?.classList.remove("hidden");

    if (backButton) {
        backButton.style.display = "none";
    }

    render();

    hideLoader();
}

if (document.readyState === "loading") {
    document.addEventListener(
        "DOMContentLoaded",
        initializeMenu,
        { once: true }
    );
} else {
    initializeMenu();
}
