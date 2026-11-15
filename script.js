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
        price: 410000,
        image: "32.jpg",
        category: "فرایز"
    },

    {
        name: "سیب زمینی با پنیر",
        price: 550000,
        image: "33.jpg",
        category: "فرایز"
    },

    {
        name: "سیب زمینی ویژه",
        price: 610000,
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
   CAFE MASIH
   ORIGINAL RENDER ENGINE
   + TWO MENU SELECTION
========================================= */

"use strict";

/* =========================
   MENU CATEGORIES
========================= */

const categoryOrder = [
    "همه",
    "اسپرسو بار",
    "اسپرسو بار سرد",
    "شیک",
    "اسموتی",
    "فرایز",
    "بار گرم",
    "پنینی"
];

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

/* =========================
   HTML ELEMENTS
========================= */

const cats = document.getElementById("cats");
const box = document.getElementById("products");
const emptyState = document.getElementById("empty-state");
const menuSection = document.getElementById("menu");

const menuHeading =
    menuSection.querySelector(".section-title h2");

const menuSubtitle =
    menuSection.querySelector(".section-title p");

/* =========================
   MENU CHOICE SCREEN
========================= */

let menuChoiceScreen =
    document.getElementById("menu-choice-screen");

if (!menuChoiceScreen) {

    menuChoiceScreen = document.createElement("div");

    menuChoiceScreen.id = "menu-choice-screen";
    menuChoiceScreen.className = "menu-choice-screen";

    menuChoiceScreen.innerHTML = `
        <div class="menu-choice-content">

            <div class="menu-choice-heading">
                <span>WELCOME TO</span>
                <h1>CAFÉ MASIH</h1>
                <p>منوی مورد علاقه‌ات رو انتخاب کن</p>
            </div>

            <div class="menu-choice-options">

                <button
                    type="button"
                    class="menu-choice-card cafe"
                    data-menu="cafe"
                >
                    <span>01</span>
                    <h2>منوی کافه</h2>
                    <p>قهوه، نوشیدنی و دسر</p>
                </button>

                <button
                    type="button"
                    class="menu-choice-card food"
                    data-menu="food"
                >
                    <span>02</span>
                    <h2>منوی غذا</h2>
                    <p>فرایز و پنینی</p>
                </button>

            </div>
        </div>
    `;

    const header = document.querySelector(".site-header");

    if (header) {
        document.body.insertBefore(menuChoiceScreen, header);
    } else {
        document.body.prepend(menuChoiceScreen);
    }
}

/* =========================
   BACK BUTTON
========================= */

let backButton =
    document.getElementById("back-to-menu");

if (!backButton) {

    backButton = document.createElement("button");

    backButton.type = "button";
    backButton.id = "back-to-menu";
    backButton.className = "back-to-menu";

    backButton.textContent = "← بازگشت به انتخاب منو";

    const sectionInner =
        menuSection.querySelector(".section-inner");

    sectionInner.insertBefore(
        backButton,
        sectionInner.firstChild
    );
}

/* =========================
   STATE
========================= */

let selected = "همه";
let activeMenu = null;

/* =========================
   PRICE FORMAT
========================= */

function formatPrice(price) {

    if (price === null || price === undefined) {
        return "";
    }

    return (
        new Intl.NumberFormat("fa-IR").format(price)
        + " تومان"
    );
}

/* =========================
   GET ACTIVE CATEGORIES
========================= */

function getActiveCategories() {

    if (activeMenu === "cafe") {
        return cafeCategories;
    }

    if (activeMenu === "food") {
        return foodCategories;
    }

    return categoryOrder.slice(1);
}

/* =========================
   RENDER CATEGORIES
========================= */

function renderCategories() {

    const activeCategories = getActiveCategories();

    const availableCategories = categoryOrder.filter(category => {

        return (
            category === "همه" ||
            activeCategories.includes(category)
        );

    });

    cats.innerHTML = availableCategories.map(category => {

        const active =
            category === selected ? "active" : "";

        return `
            <button
                type="button"
                class="category-button ${active}"
                data-category="${category}"
            >
                ${category}
            </button>
        `;

    }).join("");
}

/* =========================
   RENDER ALL PRODUCTS
   ONLY ONCE
========================= */

function renderProducts() {

    box.innerHTML = products.map(product => {

        const price = formatPrice(product.price);

        return `
            <article
                class="product-card"
                data-category="${product.category}"
            >

                <div class="product-image">

                    <img
                        src="images/${product.image}"
                        alt="${product.name}"
                        loading="lazy"
                        onerror="this.onerror=null;this.src='images/placeholder.svg'"
                    >

                </div>

                <div class="product-info">

                    <h3 class="product-name">
                        ${product.name}
                    </h3>

                    ${product.description ? `
                        <p class="product-description">
                            ${product.description}
                        </p>
                    ` : ""}

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

/* =========================
   SHOW / HIDE PRODUCTS
   WITHOUT REBUILDING DOM
========================= */

function updateVisibleProducts() {

    const activeCategories = getActiveCategories();

    const cards = box.querySelectorAll(".product-card");

    let visibleCount = 0;

    cards.forEach(card => {

        const category = card.dataset.category;

        const belongsToMenu =
            activeCategories.includes(category);

        const belongsToCategory =
            selected === "همه" ||
            category === selected;

        const shouldShow =
            belongsToMenu && belongsToCategory;

        card.style.display = shouldShow ? "" : "none";

        if (shouldShow) {
            visibleCount++;
        }

    });

    emptyState.style.display =
        visibleCount === 0 ? "block" : "none";
}

/* =========================
   SELECT CATEGORY
========================= */

function selectCategory(category) {

    selected = category;

    renderCategories();

    updateVisibleProducts();
}

/* =========================
   CHOOSE CAFE OR FOOD
========================= */

function chooseMenu(menu) {

    if (menu !== "cafe" && menu !== "food") {
        return;
    }

    activeMenu = menu;
    selected = "همه";

    if (menuHeading) {
        menuHeading.textContent =
            menu === "cafe" ? "منوی کافه" : "منوی غذا";
    }

    if (menuSubtitle) {
        menuSubtitle.textContent =
            menu === "cafe"
                ? "دسته‌بندی مورد علاقه‌ات رو انتخاب کن."
                : "غذای مورد علاقه‌ات رو انتخاب کن.";
    }

    renderCategories();

    updateVisibleProducts();

    menuChoiceScreen.classList.add("hidden");

    document.body.style.overflow = "";

    backButton.style.display = "block";

    const firstCategory =
        menu === "cafe" ? "اسپرسو بار" : "فرایز";

    const firstCard = box.querySelector(
        `.product-card[data-category="${firstCategory}"]`
    );

    if (firstCard) {

        const top =
            firstCard.getBoundingClientRect().top +
            window.scrollY - 100;

        window.scrollTo({
            top: top,
            behavior: "auto"
        });

    }
}

/* =========================
   BACK TO MENU CHOICE
========================= */

function backToMenuChoice() {

    activeMenu = null;
    selected = "همه";

    menuChoiceScreen.classList.remove("hidden");

    document.body.style.overflow = "hidden";

    backButton.style.display = "none";

    window.scrollTo({
        top: 0,
        behavior: "auto"
    });
}

/* =========================
   CATEGORY CLICK
========================= */

cats.addEventListener("click", function (event) {

    const button = event.target.closest(".category-button");

    if (!button) return;

    selectCategory(button.dataset.category);
});

/* =========================
   MENU CHOICE CLICK
========================= */

menuChoiceScreen.addEventListener("click", function (event) {

    const button = event.target.closest(".menu-choice-card");

    if (!button) return;

    chooseMenu(button.dataset.menu);
});

/* =========================
   BACK BUTTON CLICK
========================= */

backButton.addEventListener(
    "click",
    backToMenuChoice
);

/* =========================
   LOADER
========================= */

window.addEventListener("load", function () {

    setTimeout(function () {

        const loader = document.getElementById("loader");

        if (loader) {
            loader.classList.add("hidden");
        }

    }, 600);

});

/* =========================
   INITIALIZATION
========================= */

// تمام محصولات فقط یک بار ساخته می‌شوند
renderProducts();

// دسته‌بندی‌ها در پشت صفحه انتخاب آماده‌اند
renderCategories();

// همه محصولات زیر صفحه انتخاب باقی می‌مانند
updateVisibleProducts();

// نمایش صفحه انتخاب
menuChoiceScreen.classList.remove("hidden");

document.body.style.overflow = "hidden";

backButton.style.display = "none";

