function loadSVG() {
    /* sidebar */
    const sidebarSVG = {
        "dashboard": `<svg style="fill:currentColor" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M510 486V216h330v270H510ZM120 606V216h330v390H120Zm390 330V546h330v390H510Zm-390 0V666h330v270H120Zm60-390h210V276H180v270Zm390 330h210V606H570v270Zm0-450h210V276H570v150ZM180 876h210V726H180v150Zm210-330Zm180-120Zm0 180ZM390 726Z"/></svg>`,
        "home": `<svg style="fill:currentColor" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M220 876h150V626h220v250h150V486L480 291 220 486v390Zm-60 60V456l320-240 320 240v480H530V686H430v250H160Zm320-353Z"/></svg>`,
        "profile": `<svg style="fill:currentColor" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M480 575q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM160 896v-94q0-38 19-65t49-41q67-30 128.5-45T480 636q62 0 123 15.5t127.921 44.694q31.301 14.126 50.19 40.966Q800 764 800 802v94H160Zm60-60h520v-34q0-16-9.5-30.5T707 750q-64-31-117-42.5T480 696q-57 0-111 11.5T252 750q-14 7-23 21.5t-9 30.5v34Zm260-321q39 0 64.5-25.5T570 425q0-39-25.5-64.5T480 335q-39 0-64.5 25.5T390 425q0 39 25.5 64.5T480 515Zm0-90Zm0 411Z"/></svg>`,
        "messages": `<svg style="fill:currentColor" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M140 896q-24 0-42-18t-18-42V316q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm340-302L140 371v465h680V371L480 594Zm0-60 336-218H145l335 218ZM140 371v-55 520-465Z"/></svg>`,
        "history": `<svg style="fill:currentColor" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M477 936q-149 0-253-105.5T120 575h60q0 125 86 213t211 88q127 0 215-89t88-216q0-124-89-209.5T477 276q-68 0-127.5 31T246 389h105v60H142V241h60v106q52-61 123.5-96T477 216q75 0 141 28t115.5 76.5Q783 369 811.5 434T840 574q0 75-28.5 141t-78 115Q684 879 618 907.5T477 936Zm128-197L451 587V373h60v189l137 134-43 43Z"/></svg>`,
        "tasks": `<svg style="fill:currentColor" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M620 897 460 737l43-43 117 117 239-239 43 43-282 282Zm220-414h-60V276h-60v90H240v-90h-60v600h251v60H180q-26 0-43-17t-17-43V276q0-26 17-43t43-17h202q7-35 34.5-57.5T480 136q36 0 63.5 22.5T578 216h202q26 0 43 17t17 43v207ZM480 276q17 0 28.5-11.5T520 236q0-17-11.5-28.5T480 196q-17 0-28.5 11.5T440 236q0 17 11.5 28.5T480 276Z"/></svg>`,
        "communities": `<svg style="fill:currentColor" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M0 816v-53q0-38.567 41.5-62.784Q83 676 150.376 676q12.165 0 23.395.5Q185 677 196 678.652q-8 17.348-12 35.165T180 751v65H0Zm240 0v-65q0-32 17.5-58.5T307 646q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-19.861-3.5-37.431Q773 696 765 678.727q11-1.727 22.171-2.227 11.172-.5 22.829-.5 67.5 0 108.75 23.768T960 763v53H780Zm-480-60h360v-6q0-37-50.5-60.5T480 666q-79 0-129.5 23.5T300 751v5ZM149.567 646Q121 646 100.5 625.438 80 604.875 80 576q0-29 20.562-49.5Q121.125 506 150 506q29 0 49.5 20.5t20.5 49.933Q220 605 199.5 625.5T149.567 646Zm660 0Q781 646 760.5 625.438 740 604.875 740 576q0-29 20.562-49.5Q781.125 506 810 506q29 0 49.5 20.5t20.5 49.933Q880 605 859.5 625.5T809.567 646ZM480 576q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600 456q0 50-34.5 85T480 576Zm.351-60Q506 516 523 498.649t17-43Q540 430 522.851 413t-42.5-17Q455 396 437.5 413.149t-17.5 42.5Q420 481 437.351 498.5t43 17.5ZM480 756Zm0-300Z"/></svg>`,
        "settings": `<svg style="fill:currentColor" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="m388 976-20-126q-19-7-40-19t-37-25l-118 54-93-164 108-79q-2-9-2.5-20.5T185 576q0-9 .5-20.5T188 535L80 456l93-164 118 54q16-13 37-25t40-18l20-127h184l20 126q19 7 40.5 18.5T669 346l118-54 93 164-108 77q2 10 2.5 21.5t.5 21.5q0 10-.5 21t-2.5 21l108 78-93 164-118-54q-16 13-36.5 25.5T592 850l-20 126H388Zm92-270q54 0 92-38t38-92q0-54-38-92t-92-38q-54 0-92 38t-38 92q0 54 38 92t92 38Zm0-60q-29 0-49.5-20.5T410 576q0-29 20.5-49.5T480 506q29 0 49.5 20.5T550 576q0 29-20.5 49.5T480 646Zm0-70Zm-44 340h88l14-112q33-8 62.5-25t53.5-41l106 46 40-72-94-69q4-17 6.5-33.5T715 576q0-17-2-33.5t-7-33.5l94-69-40-72-106 46q-23-26-52-43.5T538 348l-14-112h-88l-14 112q-34 7-63.5 24T306 414l-106-46-40 72 94 69q-4 17-6.5 33.5T245 576q0 17 2.5 33.5T254 643l-94 69 40 72 106-46q24 24 53.5 41t62.5 25l14 112Z"/></svg>`,
        "support": `<svg style="fill:currentColor" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M477.028 810Q493 810 504 798.972q11-11.028 11-27T503.972 745q-11.028-11-27-11T450 745.028q-11 11.028-11 27T450.028 799q11.028 11 27 11ZM444 662h57q0-31 10-50.5t34.721-44.221Q579 534 592 508.5t13-53.5q0-53-34-84t-91.523-31q-51.866 0-88.171 24.5Q355 389 338 432l53 22q14-28 36.2-42.5Q449.4 397 479 397q32 0 50.5 16t18.5 44.098Q548 477 537 495.5T500 539q-37 35-46.5 60t-9.5 63ZM180 936q-24 0-42-18t-18-42V276q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600V276H180v600Zm0-600v600-600Z"/></svg>`,
        "privacy": `<svg style="fill:currentColor" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="m436 709 228-228-42-41-183 183-101-101-44 44 142 143Zm44 266q-140-35-230-162.5T160 533V295l320-120 320 120v238q0 152-90 279.5T480 975Zm0-62q115-38 187.5-143.5T740 533V337l-260-98-260 98v196q0 131 72.5 236.5T480 913Zm0-337Z"/></svg>`
    }
    const sidebarItems = document.querySelectorAll(".sidebar-item");
    sidebarItems.forEach(function(sidebarItem) {
        sidebarItem.innerHTML = sidebarSVG[sidebarItem.id] + sidebarItem.innerHTML;
    })

    /* project cards */
    const projectCardSVG = {
        "favorite": `<svg style="fill:currentColor" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="m323 851 157-94 157 95-42-178 138-120-182-16-71-168-71 167-182 16 138 120-42 178Zm-90 125 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-355Z"/></svg>`,
        "bookmark": `<svg style="fill:currentColor" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M200 936V271q0-24 18-42t42-18h440q24 0 42 18t18 42v665L480 816 200 936Zm60-91 220-93 220 93V271H260v574Zm0-574h440-440Z"/></svg>`,
        "share": `<svg style="fill:currentColor" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M727 976q-47.5 0-80.75-33.346Q613 909.307 613 861.669q0-6.669 1.5-16.312T619 828L316 652q-15 17-37 27.5T234 690q-47.5 0-80.75-33.25T120 576q0-47.5 33.25-80.75T234 462q23 0 44 9t38 26l303-174q-3-7.071-4.5-15.911Q613 298.25 613 290q0-47.5 33.25-80.75T727 176q47.5 0 80.75 33.25T841 290q0 47.5-33.25 80.75T727 404q-23.354 0-44.677-7.5T646 372L343 540q2 8 3.5 18.5t1.5 17.741q0 7.242-1.5 15Q345 599 343 607l303 172q15-14 35-22.5t46-8.5q47.5 0 80.75 33.25T841 862q0 47.5-33.25 80.75T727 976Zm.035-632Q750 344 765.5 328.465q15.5-15.535 15.5-38.5T765.465 251.5q-15.535-15.5-38.5-15.5T688.5 251.535q-15.5 15.535-15.5 38.5t15.535 38.465q15.535 15.5 38.5 15.5Zm-493 286Q257 630 272.5 614.465q15.5-15.535 15.5-38.5T272.465 537.5q-15.535-15.5-38.5-15.5T195.5 537.535q-15.5 15.535-15.5 38.5t15.535 38.465q15.535 15.5 38.5 15.5Zm493 286Q750 916 765.5 900.465q15.5-15.535 15.5-38.5T765.465 823.5q-15.535-15.5-38.5-15.5T688.5 823.535q-15.5 15.535-15.5 38.5t15.535 38.465q15.535 15.5 38.5 15.5ZM727 290ZM234 576Zm493 286Z"/></svg>`
    }
    const cardInteractions = document.querySelectorAll(".card-interaction");
    cardInteractions.forEach(function(cardInteraction){
        for (let prop in projectCardSVG) {
            cardInteraction.innerHTML += projectCardSVG[prop];
        }
    })

    /* search bar */
    const searchBarSVG = {
        "search": `<svg style="fill:currentColor" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M796 935 533 672q-30 26-69.959 40.5T378 727q-108.162 0-183.081-75Q120 577 120 471t75-181q75-75 181.5-75t181 75Q632 365 632 471.15 632 514 618 554q-14 40-42 75l264 262-44 44ZM377 667q81.25 0 138.125-57.5T572 471q0-81-56.875-138.5T377 275q-82.083 0-139.542 57.5Q180 390 180 471t57.458 138.5Q294.917 667 377 667Z"/></svg>`
    }

    const searchBar = document.querySelector(".search-bar");
    searchBar.innerHTML = searchBarSVG["search"] + searchBar.innerHTML;

    /* notification bell */
    const profileInfoSVG = {
        "notification": `<svg style="fill:currentColor" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M124 489q0-81 34-153.5T255 212l41 45q-53 43-82.5 103.5T184 489h-60Zm653 0q0-68-28-128.5T668 257l41-45q62 52 95 124t33 153h-60ZM160 856v-60h84V490q0-84 49.5-149.5T424 258v-29q0-23 16.5-38t39.5-15q23 0 39.5 15t16.5 38v29q81 17 131 82.5T717 490v306h83v60H160Zm320-295Zm0 415q-32 0-56-23.5T400 896h160q0 33-23.5 56.5T480 976ZM304 796h353V490q0-74-51-126t-125-52q-74 0-125.5 52T304 490v306Z"/></svg>`
    }
    const profileInfo = document.querySelector(".profile-info");
    profileInfo.innerHTML = profileInfoSVG["notification"] + profileInfo.innerHTML
}

loadSVG();