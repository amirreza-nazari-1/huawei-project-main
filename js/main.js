// -----------------------------------footer

let search_inp = document.querySelector(".footer-seerch-box")

let footer4 = document.querySelector(".footer-item4")
let footer3 = document.querySelector(".footer-item3")
let footer2 = document.querySelector(".footer-item2")
let footer1 = document.querySelector(".footer-item1")


let footer_focus1 = document.querySelector(".item1-focus")
let footer_focus2 = document.querySelector(".item2-focus")
let footer_focus3 = document.querySelector(".item3-focus")
let footer_focus4 = document.querySelector(".item4-focus")

search_inp.addEventListener("click", function () {
    search_inp.classList.add("shadow-focus")
})


footer4.addEventListener("click", function () {

    footer_focus1.classList.add("close")
    footer_focus2.classList.add("close")
    footer_focus3.classList.add("close")

    if (footer_focus4.classList.contains("close")) {
        footer_focus4.classList.remove("close")
        footer_focus4.classList.add("open")
    } else {
        footer_focus4.classList.remove("open")
        footer_focus4.classList.add("hide")
        setTimeout(() => {
            footer_focus4.classList.add("close")
        }, 500)
    }

})

footer3.addEventListener("click", function () {

    footer_focus1.classList.add("close")
    footer_focus2.classList.add("close")
    footer_focus4.classList.add("close")

    if (footer_focus3.classList.contains("close")) {
        footer_focus3.classList.remove("close")
        footer_focus3.classList.add("open")
    } else {
        footer_focus3.classList.remove("open")
        footer_focus3.classList.add("hide")
        setTimeout(() => {
            footer_focus3.classList.add("close")
        }, 500)
    }

})

footer2.addEventListener("click", function () {

    footer_focus1.classList.add("close")
    footer_focus3.classList.add("close")
    footer_focus4.classList.add("close")

    if (footer_focus2.classList.contains("close")) {
        footer_focus2.classList.remove("close")
        footer_focus2.classList.add("open")
    } else {
        footer_focus2.classList.remove("open")
        footer_focus2.classList.add("hide")
        setTimeout(() => {
            footer_focus2.classList.add("close")
        }, 500)
    }

})

footer1.addEventListener("click", function () {

    footer_focus2.classList.add("close")
    footer_focus3.classList.add("close")
    footer_focus4.classList.add("close")

    if (footer_focus1.classList.contains("close")) {
        footer_focus1.classList.remove("close")
        footer_focus1.classList.add("open")
    } else {
        footer_focus1.classList.remove("open")
        footer_focus1.classList.add("hide")
        setTimeout(() => {
            footer_focus1.classList.add("close")
        }, 500)
    }

})
//-----------------------------------------------------slider
var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: false,
});
// -----------------------------------------------nav

let nav_li = document.querySelectorAll("li")
let search_icon = document.querySelector(".search_icon")
let list_icon = document.querySelector(".list_icon")
let product_cross = document.querySelector(".sub-product-cross")
let sub1 = document.querySelectorAll(".submenu")
let cross = document.querySelectorAll(".bi-x-lg")


cross[0].addEventListener("click", function () {
    sub1[0].classList.add("sub-close")
    sub1[0].classList.remove("sub-open")
    cross[0].classList.add("close")
})

cross[1].addEventListener("click", function () {
    sub1[1].classList.add("sub-close")
    sub1[1].classList.remove("sub-open")
    cross[1].classList.add("close")
})

cross[2].addEventListener("click", function () {
    sub1[2].classList.add("sub-close")
    sub1[2].classList.remove("sub-open")
    cross[2].classList.add("close")
})

cross[3].addEventListener("click", function () {
    sub1[3].classList.add("sub-close")
    sub1[3].classList.remove("sub-open")
    cross[3].classList.add("close")
})

cross[4].addEventListener("click", function () {
    sub1[4].classList.add("sub-close")
    sub1[4].classList.remove("sub-open")
    cross[4].classList.add("close")
})
nav_li[0].addEventListener("click", function () {
    sub1[1].classList.add("close")
    sub1[2].classList.add("close")
    sub1[3].classList.add("close")
    sub1[4].classList.add("close")

    if (sub1[0].classList.contains("close")) {
        sub1[0].classList.remove("close")
    }
    if (sub1[0].classList.contains("sub-close")) {
        sub1[0].classList.remove("sub-close")
        sub1[0].classList.add("sub-open")
        cross[0].classList.remove("close")
    } else {
        sub1[0].classList.add("sub-close")
        sub1[0].classList.remove("sub-open")
        cross[0].classList.add("close")

    }
})
nav_li[1].addEventListener("click", function () {
    sub1[0].classList.add("close")
    sub1[2].classList.add("close")
    sub1[3].classList.add("close")
    sub1[4].classList.add("close")

    if (sub1[1].classList.contains("close")) {
        sub1[1].classList.remove("close")
    }
    if (sub1[1].classList.contains("sub-close")) {
        sub1[1].classList.remove("sub-close")
        sub1[1].classList.add("sub-open")
        cross[1].classList.remove("close")
    } else {
        sub1[1].classList.add("sub-close")
        sub1[1].classList.remove("sub-open")
        cross[1].classList.add("close")

    }
})

nav_li[2].addEventListener("click", function () {
    sub1[1].classList.add("close")
    sub1[0].classList.add("close")
    sub1[3].classList.add("close")
    sub1[4].classList.add("close")

    if (sub1[2].classList.contains("close")) {
        sub1[2].classList.remove("close")
    }
    if (sub1[2].classList.contains("sub-close")) {
        sub1[2].classList.remove("sub-close")
        sub1[2].classList.add("sub-open")
        cross[2].classList.remove("close")
    } else {
        sub1[2].classList.add("sub-close")
        sub1[2].classList.remove("sub-open")
        cross[2].classList.add("close")

    }
})

nav_li[3].addEventListener("click", function () {
    sub1[1].classList.add("close")
    sub1[2].classList.add("close")
    sub1[0].classList.add("close")
    sub1[4].classList.add("close")

    if (sub1[3].classList.contains("close")) {
        sub1[3].classList.remove("close")
    }
    if (sub1[3].classList.contains("sub-close")) {
        sub1[3].classList.remove("sub-close")
        sub1[3].classList.add("sub-open")
        cross[3].classList.remove("close")
    } else {
        sub1[3].classList.add("sub-close")
        sub1[3].classList.remove("sub-open")
        cross[3].classList.add("close")

    }
})


nav_li[4].addEventListener("click", function () {
    sub1[1].classList.add("close")
    sub1[2].classList.add("close")
    sub1[3].classList.add("close")
    sub1[0].classList.add("close")

    if (sub1[4].classList.contains("close")) {
        sub1[4].classList.remove("close")
    }
    if (sub1[4].classList.contains("sub-close")) {
        sub1[4].classList.remove("sub-close")
        sub1[4].classList.add("sub-open")
        cross[4].classList.remove("close")
    } else {
        sub1[4].classList.add("sub-close")
        sub1[4].classList.remove("sub-open")
        cross[4].classList.add("close")

    }
})

// -------------------------------search

let search = document.querySelector(".nav-search")
let nav = document.querySelector(".nav")
let search_div = document.querySelector(".search-div")
let cross_search = document.querySelector(".search-cross")



search.addEventListener("click", function () {
    if (search_div.classList.contains("trans-x")) {

        nav.classList.add("close")
        search_div.classList.add("trans-x-open")
    }

})
cross_search.addEventListener("click", function () {
    if (nav.classList.contains("close")) {
        nav.classList.remove("close")
    } else {
        nav.classList.remove("close")
    }
    search_div.classList.remove("trans-x-open")
    search_div.classList.add("trans-x")
})


// ------------------------hamburger
let ham = document.querySelector(".hamburger")
let ham_icon = document.querySelector(".list-icon")
let ham_value = document.querySelectorAll(".ham-value")
let ham_item = document.querySelectorAll(".ham-item")
let back = document.querySelectorAll(".back")


ham_icon.addEventListener("click", function () {
    if (ham.classList.contains("trans-x")) {
        ham.classList.add("trans-x-open")
        ham.classList.remove("trans-x")
    } else {
        ham.classList.remove("trans-x-open")
        ham.classList.add("trans-x")
    }
})
// ham-value1

ham_item[0].addEventListener("click", function () {
    ham_item[0].classList.add("close")
    ham_item[1].classList.add("close")
    ham_item[2].classList.add("close")
    ham_item[3].classList.add("close")
    ham_item[4].classList.add("close")
    if (ham_value[0].classList.contains("trans-x-ham")) {
        ham_value[0].classList.add("trans-x-open-ham")
    }
})
back[0].addEventListener("click", function () {
    ham_item[0].classList.remove("close")
    ham_value[0].classList.remove("trans-x-open-ham")
    ham_value[0].classList.add("trans-x-ham")
    ham_item[0].classList.remove("close")
    ham_item[1].classList.remove("close")
    ham_item[2].classList.remove("close")
    ham_item[3].classList.remove("close")
    ham_item[4].classList.remove("close")

})

// ham-value2

let ham_value2 = document.querySelector(".ham-value2")

ham_item[1].addEventListener("click", function () {
    ham_item[0].classList.add("close")
    ham_item[1].classList.add("close")
    ham_item[2].classList.add("close")
    ham_item[3].classList.add("close")
    ham_item[4].classList.add("close")
    if (ham_value2.classList.contains("trans-x-ham")) {
        ham_value2.classList.add("trans-x-open-ham")
    }
})
back[1].addEventListener("click", function () {
    ham_value2.classList.remove("trans-x-open-ham")
    ham_value2.classList.add("trans-x-ham")
    ham_item[0].classList.remove("close")
    ham_item[1].classList.remove("close")
    ham_item[2].classList.remove("close")
    ham_item[3].classList.remove("close")
    ham_item[4].classList.remove("close")


})


let bus_item = document.querySelector(".bus-item")
let pro_item = document.querySelector(".pro-item")
let sol_item = document.querySelector(".sol-item")

let bus_vlaue = document.querySelector(".bus-value")
let pro_vlaue = document.querySelector(".pro-value")
let sol_vlaue = document.querySelector(".sol-value")
// console.log(bus_item);

bus_item.addEventListener("click", function () {

    // bus_vlaue.classList.add("close")
    pro_vlaue.classList.add("close")
    sol_vlaue.classList.add("close")

    if (bus_vlaue.classList.contains("close")) {
        bus_vlaue.classList.remove("close")
        bus_vlaue.classList.add("open")
    } else {
        bus_vlaue.classList.remove("open")
        bus_vlaue.classList.add("hide")
        setTimeout(() => {
            bus_vlaue.classList.add("close")
        }, 500)
    }

})

pro_item.addEventListener("click", function () {

    // pro_vlaue.classList.add("close")
    bus_vlaue.classList.add("close")
    sol_vlaue.classList.add("close")

    if (pro_vlaue.classList.contains("close")) {
        pro_vlaue.classList.remove("close")
        pro_vlaue.classList.add("open")
    } else {
        pro_vlaue.classList.remove("open")
        pro_vlaue.classList.add("hide")
        setTimeout(() => {
            pro_vlaue.classList.add("close")
        }, 500)
    }

})

sol_item.addEventListener("click", function () {

    // sol_vlaue.classList.add("close")
    bus_vlaue.classList.add("close")
    pro_vlaue.classList.add("close")

    if (sol_vlaue.classList.contains("close")) {
        sol_vlaue.classList.remove("close")
        sol_vlaue.classList.add("open")
    } else {
        sol_vlaue.classList.remove("open")
        sol_vlaue.classList.add("hide")
        setTimeout(() => {
            sol_vlaue.classList.add("close")
        }, 500)
    }

})
// ham-value3

ham_item[2].addEventListener("click", function () {
    ham_item[0].classList.add("close")
    ham_item[1].classList.add("close")
    ham_item[2].classList.add("close")
    ham_item[3].classList.add("close")
    ham_item[4].classList.add("close")
    if (ham_value[1].classList.contains("trans-x-ham")) {
        ham_value[1].classList.add("trans-x-open-ham")
    }
})
back[2].addEventListener("click", function () {
    ham_value[1].classList.remove("trans-x-open-ham")
    ham_value[1].classList.add("trans-x-ham")
    ham_item[0].classList.remove("close")
    ham_item[1].classList.remove("close")
    ham_item[2].classList.remove("close")
    ham_item[3].classList.remove("close")
    ham_item[4].classList.remove("close")

})


let cons_item = document.querySelector(".cons-item")
let cloud_item = document.querySelector(".cloud-item")
let enter_item = document.querySelector(".enter-item")
let carr_item = document.querySelector(".carr-item")

let cons_vlaue = document.querySelector(".cons-value")
let cloud_vlaue = document.querySelector(".cloud-value")
let enter_vlaue = document.querySelector(".enter-value")
let carr_vlaue = document.querySelector(".carr-value")
// console.log(bus_item);

cons_item.addEventListener("click", function () {

    // bus_vlaue.classList.add("close")
    pro_vlaue.classList.add("close")
    sol_vlaue.classList.add("close")

    if (cons_vlaue.classList.contains("close")) {
        cons_vlaue.classList.remove("close")
        cons_vlaue.classList.add("open")
    } else {
        cons_vlaue.classList.remove("open")
        cons_vlaue.classList.add("hide")
        setTimeout(() => {
            cons_vlaue.classList.add("close")
        }, 500)
    }

})

cloud_item.addEventListener("click", function () {

    // cloud_vlaue.classList.add("close")
    bus_vlaue.classList.add("close")
    sol_vlaue.classList.add("close")

    if (cloud_vlaue.classList.contains("close")) {
        cloud_vlaue.classList.remove("close")
        cloud_vlaue.classList.add("open")
    } else {
        cloud_vlaue.classList.remove("open")
        cloud_vlaue.classList.add("hide")
        setTimeout(() => {
            cloud_vlaue.classList.add("close")
        }, 500)
    }

})

enter_item.addEventListener("click", function () {

    // enter_vlaue.classList.add("close")
    bus_vlaue.classList.add("close")
    pro_vlaue.classList.add("close")

    if (enter_vlaue.classList.contains("close")) {
        enter_vlaue.classList.remove("close")
        enter_vlaue.classList.add("open")
    } else {
        enter_vlaue.classList.remove("open")
        enter_vlaue.classList.add("hide")
        setTimeout(() => {
            enter_vlaue.classList.add("close")
        }, 500)
    }

})

carr_item.addEventListener("click", function () {

    // carr_vlaue.classList.add("close")
    bus_vlaue.classList.add("close")
    pro_vlaue.classList.add("close")

    if (carr_vlaue.classList.contains("close")) {
        carr_vlaue.classList.remove("close")
        carr_vlaue.classList.add("open")
    } else {
        carr_vlaue.classList.remove("open")
        carr_vlaue.classList.add("hide")
        setTimeout(() => {
            carr_vlaue.classList.add("close")
        }, 500)
    }

})



// ham-value4

ham_item[3].addEventListener("click", function () {
    ham_item[0].classList.add("close")
    ham_item[1].classList.add("close")
    ham_item[2].classList.add("close")
    ham_item[3].classList.add("close")
    ham_item[4].classList.add("close")
    if (ham_value[2].classList.contains("trans-x-ham")) {
        ham_value[2].classList.add("trans-x-open-ham")
    }
})
back[3].addEventListener("click", function () {
    ham_value[2].classList.remove("trans-x-open-ham")
    ham_value[2].classList.add("trans-x-ham")
    ham_item[0].classList.remove("close")
    ham_item[1].classList.remove("close")
    ham_item[2].classList.remove("close")
    ham_item[3].classList.remove("close")
    ham_item[4].classList.remove("close")

})


let par_item = document.querySelector(".par-item")
let dev_item = document.querySelector(".dev-item")
let train_item = document.querySelector(".train-item")

let par_vlaue = document.querySelector(".par-value")
let dev_vlaue = document.querySelector(".dev-value")
let train_vlaue = document.querySelector(".train-value")
// console.log(bus_item);

par_item.addEventListener("click", function () {

    // bus_vlaue.classList.add("close")
    // pro_vlaue.classList.add("close")
    // sol_vlaue.classList.add("close")

    if (par_vlaue.classList.contains("close")) {
        par_vlaue.classList.remove("close")
        par_vlaue.classList.add("open")
    } else {
        par_vlaue.classList.remove("open")
        par_vlaue.classList.add("hide")
        setTimeout(() => {
            par_vlaue.classList.add("close")
        }, 500)
    }

})

dev_item.addEventListener("click", function () {

    // dev_vlaue.classList.add("close")
    // bus_vlaue.classList.add("close")
    // sol_vlaue.classList.add("close")

    if (dev_vlaue.classList.contains("close")) {
        dev_vlaue.classList.remove("close")
        dev_vlaue.classList.add("open")
    } else {
        dev_vlaue.classList.remove("open")
        dev_vlaue.classList.add("hide")
        setTimeout(() => {
            dev_vlaue.classList.add("close")
        }, 500)
    }

})

train_item.addEventListener("click", function () {

    // train_vlaue.classList.add("close")
    // bus_vlaue.classList.add("close")
    // pro_vlaue.classList.add("close")

    if (train_vlaue.classList.contains("close")) {
        train_vlaue.classList.remove("close")
        train_vlaue.classList.add("open")
    } else {
        train_vlaue.classList.remove("open")
        train_vlaue.classList.add("hide")
        setTimeout(() => {
            train_vlaue.classList.add("close")
        }, 500)
    }

})



// ham-value5

ham_item[4].addEventListener("click", function () {
    ham_item[0].classList.add("close")
    ham_item[1].classList.add("close")
    ham_item[2].classList.add("close")
    ham_item[3].classList.add("close")
    ham_item[4].classList.add("close")
    if (ham_value[3].classList.contains("trans-x-ham")) {
        ham_value[3].classList.add("trans-x-open-ham")
    }
})
back[4].addEventListener("click", function () {
    ham_value[3].classList.remove("trans-x-open-ham")
    ham_value[3].classList.add("trans-x-ham")
    ham_item[0].classList.remove("close")
    ham_item[1].classList.remove("close")
    ham_item[2].classList.remove("close")
    ham_item[3].classList.remove("close")
    ham_item[4].classList.remove("close")

})


let about_item = document.querySelector(".about-item")
let new_item = document.querySelector(".new-item")
let ex_item = document.querySelector(".ex-item")

let about_vlaue = document.querySelector(".about-value")
let new_vlaue = document.querySelector(".new-value")
let ex_vlaue = document.querySelector(".ex-value")
// console.log(bus_item);

about_item.addEventListener("click", function () {

    // bus_vlaue.classList.add("close")
    pro_vlaue.classList.add("close")
    sol_vlaue.classList.add("close")

    if (about_vlaue.classList.contains("close")) {
        about_vlaue.classList.remove("close")
        about_vlaue.classList.add("open")
    } else {
        about_vlaue.classList.remove("open")
        about_vlaue.classList.add("hide")
        setTimeout(() => {
            about_vlaue.classList.add("close")
        }, 500)
    }

})

new_item.addEventListener("click", function () {

    // new_vlaue.classList.add("close")
    bus_vlaue.classList.add("close")
    sol_vlaue.classList.add("close")

    if (new_vlaue.classList.contains("close")) {
        new_vlaue.classList.remove("close")
        new_vlaue.classList.add("open")
    } else {
        new_vlaue.classList.remove("open")
        new_vlaue.classList.add("hide")
        setTimeout(() => {
            new_vlaue.classList.add("close")
        }, 500)
    }

})

ex_item.addEventListener("click", function () {

    // ex_vlaue.classList.add("close")
    bus_vlaue.classList.add("close")
    pro_vlaue.classList.add("close")

    if (ex_vlaue.classList.contains("close")) {
        ex_vlaue.classList.remove("close")
        ex_vlaue.classList.add("open")
    } else {
        ex_vlaue.classList.remove("open")
        ex_vlaue.classList.add("hide")
        setTimeout(() => {
            ex_vlaue.classList.add("close")
        }, 500)
    }

})


// ---------------------------------lg search box

let search2 = document.querySelector(".search-icon2")
let search_lg = document.querySelector(".search-lg")
let search_lg_box = document.querySelector(".search-lg-box")
let search_direct_box = document.querySelector(".search-direct-box")
let nav_content = document.querySelector(".nav-content")
let img_logo = document.querySelector(".logo")
let search_lg_inp = document.querySelector(".search-lg-inp")
let close_search = document.querySelector(".close-search")

search2.addEventListener("click", function () {
    // if (search_lg.classList.contains("width-closing-search")) {
    search_lg.classList.remove("close")
    nav_content.classList.add("width-closing-search")
    img_logo.classList.add("width-closing-search")
    nav_content.classList.remove("width-opening-search")
    img_logo.classList.remove("width-opening-search")
    search2.classList.add("close")
    close_search.classList.remove("close")

    setTimeout(() => {
        search_lg.classList.remove("width-closing-search")
        search_lg.classList.add("width-opening-search")
    }, 100);

    // }
})
search_lg_inp.addEventListener("click", function () {
    search_direct_box.classList.remove("close")
})
close_search.addEventListener("click", function () {
    // search_lg.classList.add("close")
    search_lg.classList.add("width-closing-search", "close")
    search_lg.classList.remove("width-opening-search")
    close_search.classList.add("close")
    nav_content.classList.add("width-opening-search")
    img_logo.classList.add("width-opening-search")
    nav_content.classList.remove("width-closing-search")
    img_logo.classList.remove("width-closing-search")
    search2.classList.remove("close")
})

// ------------------------------------footer search

let footer_search_inp = document.querySelector(".footer-search-inp")
let footer_search_direct_box = document.querySelector(".footer-search-direct-box")
console.log(footer_search_direct_box);

footer_search_inp.addEventListener("click", function () {
    footer_search_direct_box.classList.toggle("close")
})
// ------------------------scrol top
let scrol_top = document.querySelector(".scroll")
scrol_top.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})

// ---------------------------------support

let sup_back = document.querySelector(".support-back")
let sup = document.querySelector(".support")
let sup_val = document.querySelector(".support-value")

sup.addEventListener("click", function(){
    sup_back.classList.toggle("close")
    sup_val.classList.toggle("close")
})