function img(anything) {
    document.querySelector('.slide').src = anything;
}

function change(change) {
    const line = document.querySelector('.home');
    line.style.background = change;
}

let product = document.getElementById("product");

let productItemsData = [{
    id: "1",
    name: "CREAM CHOCOLATE CHRISTMAS CALENDAR WITH 30 DOORS",
    price: 359,
    img: "img/cc1.jpeg",
    dpi: "cc1"
}, {
    id: "2",
    name: "LIGHT BLUE CHOCOLATE CHRISTMAS CALENDAR WITH 30 DOORS",
    price: 359,
    img: "img/cc2.jpeg",
    dpi: "cc2"
}, {
    id: "3",
    name: "MEGA SIZE CHOCOLATE CALENDAR WITH 30 DOORS",
    price: 999,
    img: "img/cc3.jpeg",
    dpi: "cc3"
}, {
    id: "4",
    name: "SHARING CHOCOLATE CHRISTMAS CALENDER WITH 60 PSC. OF CHOCOLATE",
    price: 649,
    img: "img/cc4.jpeg",
    dpi: "cc4"
}];

let generateProduct = () => {
    return (product.innerHTML = productItemsData.map((x) => {
        let { id, name, price, img, dpi } = x;
        return `
        <div id="product-id-${id}" class="rounded-md shadow-lg overflow-hidden mb-10 sm:mb-0 sm:w-64 md:w-80 lg:w-72 item">
        <a href="view.html?id=${dpi}">
            <img src=${img} alt="ImageCaption" class="w-full data-product-id=${dpi}" /></a>
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-slate-700 text-center">${name}</div>
            <p class="text-sm text-slate-600 text-center">${price} KR</p>
        </div>
    </div>
        `;
    }).join(""));
};

generateProduct();


let detailImages = document.querySelectorAll('.detail img');

detailImages.forEach((img) => {
    img.addEventListener('click', showDetail);
});

function showDetail(event) {
    let detailId = event.target.getAttribute('data-product-id');

    window.location.href = "view.html?id=${detailId}";
}

let urlParams = new URLSearchParams(window.location.search);
let detailId = urlParams.get("id");

let detailItemsData = {
    cc1: {
        img: "img/cc1.jpeg",
        img1: "img/cc1-1.jpeg",
        img2: "img/cc1-2.jpeg",
        title: "CREAM CHOCOLATE CHRISTMAS CALENDAR WITH 30 DOORS",
        desc: "CHRISTMAS CALENDAR WITH FINE SNOWFLAKES THAT BRINGS OUT THE CHRISTMAS MAGIC IN ALL OF US",
        priceBefore: 700,
        priceAfter: 500,
        stars: "⭐⭐⭐⭐⭐",
        review: "223",

    }, cc2: {
        img: "img/cc2.jpeg",
        img1: "img/cc2-1.jpeg",
        img2: "img/cc2-2.jpeg",
        title: "LIGHT BLUE CHOCOLATE CHRISTMAS CALENDAR WITH 30 DOORS",
        desc: "THE CHRISTMAS CALENDAR, WHICH FILLS YOU WITH TASTY CHOCOLATE DELIGHTS",
        priceBefore: 999,
        priceAfter: 800,
        stars: "⭐⭐⭐⭐⭐",
        review: "548",

    }, cc3: {
        img: "img/cc3.jpeg",
        img1: "img/cc3-1.jpeg",
        img2: "img/cc3-2.jpeg",
        title: "MEGA SIZE CHOCOLATE CALENDAR WITH 30 DOORS",
        desc: "HUGE CHRISTMAS CALENDAR WITH BARELY ONE AND A HALF KILOS OF CHOCOLATE",
        priceBefore: 450,
        priceAfter: 300,
        stars: "⭐⭐⭐",
        review: "182",

    }, cc4: {
        img: "img/cc4.jpeg",
        img1: "img/cc4-1.jpeg",
        img2: "img/cc4-2.jpeg",
        title: "SHARING CHOCOLATE CHRISTMAS CALENDER WITH 60 PSC. OF CHOCOLATE",
        desc: "PRE-ORDER THE CHRISTMAS CALENDAR FOR SHARING OR FOR A REAL CHOCOLATE LOVER",
        priceBefore: 900,
        priceAfter: 750,
        stars: "⭐⭐⭐⭐",
        review: "168",
    }
};



let generateDetail = document.getElementById('detail');
if (detailItemsData[detailId]) {
    let detail = detailItemsData[detailId];
    let detailHTML = `
    <div class="container grid grid-cols-2 gap-6 mx-auto" >
            <div class="">
                    <img src="img/${detailId}.jpeg" alt="gambar" class="w-[435px] h-[513px] items-center slide">
                    <div class="columns-3 mt-4 flex flex-wrap">
                        <img src="img/${detailId}.jpeg" alt="gambar" class="w-20 cursor-pointer mb-4" onclick="img("img/${detailId}.jpeg")">
                        <img src=${detail.img1} alt="gambar" class="w-20 cursor-pointer mb-4"
                            onclick="img(${detail.img1})">
                        <img src=${detail.img2} alt="gambar" class="w-20 cursor-pointer mb-4"
                            onclick="img(${detail.img2})">
                    </div>
                </div>
    
                 <div class="pt-16 text-white">
                    <h2 class="text-2xl font-sosial uppercase mb-2 font-bold">
                        ${detail.title}
                    </h2>
                    <h2 class="text-3xl font-sosial uppercase mb-2 font-bold leading-none">
                        ${detail.desc}
                    </h2>
                    <div class="flex items-baseline mb-1 space-x-2 mt-4">
                        <p class="text-[#ECCBB2] mt-7 font-bold mb-3 line-through">Rp. ${detail.priceBefore}jt</p>
                        <p class="text-[#ECCBB2] mt-7 font-bold mb-3 text-2xl">Rp. ${detail.priceAfter}jt</p>
                    </div>
                    <div class="flex itmes-center mb-4">
                        <div class="flex gap-1 text-sm text-yellow-400">
                            <span>${detail.stars}</span>
                        </div>
                        <div class="text-xs text-[#ECCBB2] ml-3">(${detail.review} reviews)</div>
                    </div>
                    <div class="space-y-2">
                        <p class="text-white font-sosial space-x-2">
                            <span class="italic">Energy: </span>
                            <span class="text-slate-800">2160 KJ</span>
                        </p>
                        <p class="space-x-2">
                            <span class="text-white font-sosial space-x-2 italic">Energy: </span>
                            <span class="text-slate-800">516 kcal</span>
                        </p>
                        <p class="space-x-2">
                            <span class="text-white font-sosial space-x-2 italic">Fat: </span>
                            <span class="text-slate-800">32 g</span>
                        </p>
                        <p class="">
                            <span class="text-white font-sosial space-x-2 italic">- Of which saturated fat</span>
                            <span class="text-slate-800">18 g</span>
                        </p>
                        <p class="space-x-2">
                            <span class="text-white font-sosial space-x-2 italic">Carbohydrate: </span>
                            <span class="text-slate-800">48 g</span>
                        </p>
                        <p class="space-x-2">
                            <span class="text-white font-sosial space-x-2 italic">- Of which sugar </span>
                            <span class="text-slate-800">40 g</span>
                        </p>
                        <p class="space-x-2">
                            <span class="text-white font-sosial space-x-2 italic">Protein: </span>
                            <span class="text-slate-800">7,9 g</span>
                        </p>
                        <p class="space-x-2">
                            <span class="text-white font-sosial space-x-2 italic">Salt: </span>
                            <span class="text-slate-800">0,16 g</span>
                        </p>
                    </div>
                    <div class="pt-4 font-sosial mt-4">
                    <h3 class="text-xl text-white mb-3 uppercase font-sosial">Size</h3>
                    <div class="flex items-center gap-2">
    
                        <div class="size-selector">
                            <input type="radio" name="size" class="hidden" id="size-xs">
                            <label for="size-xs"
                                class="mb-5 text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-white">
                                XS
                            </label>
                        </div>
    
                        <div class="size-selector">
                            <input type="radio" name="size" class="hidden" id="size-s">
                            <label for="size-s"
                                class="mb-5 text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-white">
                                S
                            </label>
                        </div>
    
                        <div class="size-selector">
                            <input type="radio" name="size" class="hidden" id="size-l">
                            <label for="size-l"
                                class="mb-5 text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-white">
                                L
                            </label>
                        </div>
    
                        <div class="size-selector">
                            <input type="radio" name="size" class="hidden" id="size-m">
                            <label for="size-m"
                                class="mb-5 text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-white">
                                M
                            </label>
                        </div>
    
                        <div class="size-selector">
                            <input type="radio" name="size" class="hidden" id="size-xl">
                            <label for="size-xl"
                                class="mb-5 text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-white">
                                XL
                            </label>
                        </div>
    
                    </div>
                </div>
                <div class="mt-4 mb-4">
                    <h3 class="text-sm text-white uppercase mb-1">Quantity</h3>
                    <div class="flex border border-gray-300 text-white divide-x divide-gray-300 w-max">
                        <div class="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">-</div>
                        <div class="h-8 w-8 text-xl flex items-center justify-center">2</div>
                        <div class="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">+</div>
                    </div>
                </div>
                <div class="flex gap-3 border-b border-slate-50 pb-5 mt-6">
                    <a href="#"
                        class="bg-slate-600 border border-slate-600 text-white px-8 py-2 font-sosial rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-slate-800 transition ">
                        <span>🛒</span> Add to cart
                    </a>
                    <a href="#"
                        class="border border-slate-300 text-white px-8 py-2 font-sosial rounded uppercase flex items-center gap-2 hover:text-slate-800 transition ">
                        <span>♥</span> Wishlist
                    </a>
    
                </div>
            </div>
        </div>
    `;
    generateDetail.innerHTML = detailHTML;
} else {
    generateDetail.innerHTML = "<p>produk tidak ada</p>";
}

let slideIndex = 1;

// Fungsi untuk menampilkan slide
function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
}

// // Fungsi untuk mengganti slide saat mengklik thumbnail
// function currentSlide(n) {
//     showSlide(slideIndex = n);
// }

// // Tampilkan slide pertama saat halaman dimuat
// showSlide(slideIndex);

























// let detail = document.getElementById("detail");

// let detailItemsData = [{
//     id: "1",
//     img: "img/cc1.jpeg",
//     img1: "img/cc1-1.jpeg",
//     img2: "img/cc1-2.jpeg",
//     title: "CREAM CHOCOLATE CHRISTMAS CALENDAR WITH 30 DOORS",
//     desc: "CHRISTMAS CALENDAR WITH FINE SNOWFLAKES THAT BRINGS OUT THE CHRISTMAS MAGIC IN ALL OF US",
//     priceBefore: 700,
//     priceAfter: 500,
//     stars: "⭐⭐⭐⭐⭐",
//     review: "223",
// }, {
//     id: "2",
//     img: "img/cc2.jpeg",
//     img1: "img/cc2-1.jpeg",
//     img2: "img/cc2-2.jpeg",
//     title: "LIGHT BLUE CHOCOLATE CHRISTMAS CALENDAR WITH 30 DOORS",
//     desc: "THE CHRISTMAS CALENDAR, WHICH FILLS YOU WITH TASTY CHOCOLATE DELIGHTS",
//     priceBefore: 999,
//     priceAfter: 800,
//     stars: "⭐⭐⭐⭐⭐",
//     review: "548",
// }, {
//     id: "3",
//     img: "img/cc3.jpeg",
//     img1: "img/cc3-1.jpeg",
//     img2: "img/cc3-2.jpeg",
//     title: "MEGA SIZE CHOCOLATE CALENDAR WITH 30 DOORS",
//     desc: "HUGE CHRISTMAS CALENDAR WITH BARELY ONE AND A HALF KILOS OF CHOCOLATE",
//     priceBefore: 450,
//     priceAfter: 300,
//     stars: "⭐⭐⭐",
//     review: "182",
// }, {
//     id: "4",
//     img: "img/cc4.jpeg",
//     img1: "img/cc4-1.jpeg",
//     img2: "img/cc4-2.jpeg",
//     title: "SHARING CHOCOLATE CHRISTMAS CALENDER WITH 60 PSC. OF CHOCOLATE",
//     desc: "PRE-ORDER THE CHRISTMAS CALENDAR FOR SHARING OR FOR A REAL CHOCOLATE LOVER",
//     priceBefore: 900,
//     priceAfter: 750,
//     stars: "⭐⭐⭐⭐",
//     review: "168",
// }];

// let generateDetail = () => {
//     return (detail.innerHTML = detailItemsData.map((y) => {
//         let { id, img, img1, img2, title, desc, priceBefore, priceAfter, stars, review } = y;
//         return `
//     <div id="detail-id-${id}" class="container grid grid-cols-2 gap-6 mx-auto" >
//         <div class="">
//                 <img src=${img} alt="gambar" class="w-[435px] h-[513px] items-center slide">
//                 <div class="columns-3 mt-4 flex flex-wrap">
//                     <img src=${img} alt="gambar" class="w-20 cursor-pointer mb-4" onclick="img(${img})">
//                     <img src=${img1} alt="gambar" class="w-20 cursor-pointer mb-4"
//                         onclick="img(${img1})">
//                     <img src=${img2} alt="gambar" class="w-20 cursor-pointer mb-4"
//                         onclick="img(${img2})">
//                 </div>
//             </div>

//              <div class="pt-16 text-white">
//                 <h2 class="text-2xl font-sosial uppercase mb-2 font-bold">
//                     ${title}
//                 </h2>
//                 <h2 class="text-3xl font-sosial uppercase mb-2 font-bold leading-none">
//                     ${desc}
//                 </h2>
//                 <div class="flex items-baseline mb-1 space-x-2 mt-4">
//                     <p class="text-[#ECCBB2] mt-7 font-bold mb-3 line-through">Rp. ${priceBefore}jt</p>
//                     <p class="text-[#ECCBB2] mt-7 font-bold mb-3 text-2xl">Rp. ${priceAfter}jt</p>
//                 </div>
//                 <div class="flex itmes-center mb-4">
//                     <div class="flex gap-1 text-sm text-yellow-400">
//                         <span>${stars}</span>
//                     </div>
//                     <div class="text-xs text-[#ECCBB2] ml-3">(${review} reviews)</div>
//                 </div>
//                 <div class="space-y-2">
//                     <p class="text-white font-sosial space-x-2">
//                         <span class="italic">Energy: </span>
//                         <span class="text-slate-800">2160 KJ</span>
//                     </p>
//                     <p class="space-x-2">
//                         <span class="text-white font-sosial space-x-2 italic">Energy: </span>
//                         <span class="text-slate-800">516 kcal</span>
//                     </p>
//                     <p class="space-x-2">
//                         <span class="text-white font-sosial space-x-2 italic">Fat: </span>
//                         <span class="text-slate-800">32 g</span>
//                     </p>
//                     <p class="">
//                         <span class="text-white font-sosial space-x-2 italic">- Of which saturated fat</span>
//                         <span class="text-slate-800">18 g</span>
//                     </p>
//                     <p class="space-x-2">
//                         <span class="text-white font-sosial space-x-2 italic">Carbohydrate: </span>
//                         <span class="text-slate-800">48 g</span>
//                     </p>
//                     <p class="space-x-2">
//                         <span class="text-white font-sosial space-x-2 italic">- Of which sugar </span>
//                         <span class="text-slate-800">40 g</span>
//                     </p>
//                     <p class="space-x-2">
//                         <span class="text-white font-sosial space-x-2 italic">Protein: </span>
//                         <span class="text-slate-800">7,9 g</span>
//                     </p>
//                     <p class="space-x-2">
//                         <span class="text-white font-sosial space-x-2 italic">Salt: </span>
//                         <span class="text-slate-800">0,16 g</span>
//                     </p>
//                 </div>
//                 <div class="pt-4 font-sosial mt-4">
//                 <h3 class="text-xl text-white mb-3 uppercase font-sosial">Size</h3>
//                 <div class="flex items-center gap-2">

//                     <div class="size-selector">
//                         <input type="radio" name="size" class="hidden" id="size-xs">
//                         <label for="size-xs"
//                             class="mb-5 text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-white">
//                             XS
//                         </label>
//                     </div>

//                     <div class="size-selector">
//                         <input type="radio" name="size" class="hidden" id="size-s">
//                         <label for="size-s"
//                             class="mb-5 text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-white">
//                             S
//                         </label>
//                     </div>

//                     <div class="size-selector">
//                         <input type="radio" name="size" class="hidden" id="size-l">
//                         <label for="size-l"
//                             class="mb-5 text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-white">
//                             L
//                         </label>
//                     </div>

//                     <div class="size-selector">
//                         <input type="radio" name="size" class="hidden" id="size-m">
//                         <label for="size-m"
//                             class="mb-5 text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-white">
//                             M
//                         </label>
//                     </div>

//                     <div class="size-selector">
//                         <input type="radio" name="size" class="hidden" id="size-xl">
//                         <label for="size-xl"
//                             class="mb-5 text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-white">
//                             XL
//                         </label>
//                     </div>

//                 </div>
//             </div>
//             <div class="mt-4 mb-4">
//                 <h3 class="text-sm text-white uppercase mb-1">Quantity</h3>
//                 <div class="flex border border-gray-300 text-white divide-x divide-gray-300 w-max">
//                     <div class="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">-</div>
//                     <div class="h-8 w-8 text-xl flex items-center justify-center">2</div>
//                     <div class="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">+</div>
//                 </div>
//             </div>
//             <div class="flex gap-3 border-b border-slate-50 pb-5 mt-6">
//                 <a href="#"
//                     class="bg-slate-600 border border-slate-600 text-white px-8 py-2 font-sosial rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-slate-800 transition ">
//                     <span>🛒</span> Add to cart
//                 </a>
//                 <a href="#"
//                     class="border border-slate-300 text-white px-8 py-2 font-sosial rounded uppercase flex items-center gap-2 hover:text-slate-800 transition ">
//                     <span>♥</span> Wishlist
//                 </a>

//             </div>
//         </div>
//     </div>
//         `;
//     }).join(""));
// };

// generateDetail();


