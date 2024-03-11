let $headerButton = $("#header_button");
let $slideBox = $(".slide-box");
let $slideImgs = $(".slide-img");
let $indicator = $(".indicator");

let $input = $("#header-input");
let $searchResults = $("#search-results");

$input.on("focus", function() {
    $searchResults.css("display", "block");
});

$input.on("blur", function() {
    $searchResults.css("display", "none");
});

$headerButton.on("mouseenter", function() {
    $headerButton.css("background-color", "green");
})

$headerButton.on("mouseleave", function() {
    $headerButton.css("background-color", "#00C7AE");
})

let slideInterval;

let slideWidth = 970;

let currentIdx = 0;

let slideCnt = $slideImgs.length;

$indicator.text((currentIdx+1) + "/" + slideCnt);

function startSlide() {
    slideInterval = setInterval(function() {
        moveNext();
    }, 4000);
}

function stopSlide() {
    clearInterval(slideInterval);
}

function moveNext() {
    currentIdx++;
    if (currentIdx === 5) {
        currentIdx = 0;
    }
    $slideBox.css("left", -(currentIdx * slideWidth));
    $slideBox.css("transition", "0.5s ease");
    $indicator.text((currentIdx+1) + "/" + slideCnt);
}

startSlide();

$(".slide-wrap").on("mouseenter", function() {
    $(".prev").css("display", "flex");
    $(".next").css("display", "flex");
    stopSlide();
})

$(".slide-wrap").on("mouseleave", function() {
    $(".prev").css("display", "none");
    $(".next").css("display", "none");
    startSlide();
})

$(".next").on("click", function() {
    console.log("다음클릭");
    currentIdx++;
    if (currentIdx === 5) {
        currentIdx = 0;
    }
    console.log("currentIdx : " + currentIdx);
    $slideBox.css("left", -(currentIdx * slideWidth));
    $slideBox.css("transition", "0.5s ease");
    $indicator.text((currentIdx+1) + "/" + slideCnt);
})

$(".prev").on("click", function() {
    console.log("이전클릭");
    currentIdx--;
    if (currentIdx === -1) {
        currentIdx = 4;
    }
    $slideBox.css("left", -(currentIdx * slideWidth));
    $slideBox.css("transition", "0.5s ease");
    $indicator.text((currentIdx+1) + "/" + slideCnt);
})

$prevbutton = $(".prevbutton");
$nextbutton = $(".nextbutton");

$slide2box = $(".slide2-ul");
$slide2img = $(".slide2-li");

let currentIdx2 = 0;

let slideWidth2 = 246;

if (currentIdx2 === 0) {
    $prevbutton.css("display", "none");
}

if (currentIdx2 === ($slide2img.length-4)) {
    $nextbutton.css("display", "none");
}

$prevbutton.on("click", function() {
    currentIdx2--;
    currentIdx2--;
    if (currentIdx2 === 0) {
        $prevbutton.css("display", "none");
    } else {
        $nextbutton.css("display", "block");
        $prevbutton.css("display", "block");
    }
    $slide2box.css("left", -(currentIdx2 * slideWidth2));
    $slide2box.css("transition", "0.5s ease");
});

$nextbutton.on("click", function() {
    currentIdx2++;
    currentIdx2++;
    if (currentIdx2 === ($slide2img.length-4)) {
        $nextbutton.css("display", "none");
    } else {
        $nextbutton.css("display", "block");
        $prevbutton.css("display", "block");
    }
    $slide2box.css("left", -(currentIdx2 * slideWidth2));
    $slide2box.css("transition", "0.5s ease");
});

$prevbutton2 = $(".prevbutton2");
$nextbutton2 = $(".nextbutton2");

$slide3box = $(".slide3-box");
$slide3img = $(".slide3-img");

let currentIdx3 = 0;

let slideWidth3 = 326;

if (currentIdx3 === 0) {
    $prevbutton2.css("display", "none");
}

if (currentIdx3 === ($slide3img.length-3)) {
    $nextbutton2.css("display", "none");
}

$prevbutton2.on("click", function() {
    currentIdx3--;
    if (currentIdx3 === 0) {
        $prevbutton2.css("display", "none");
    } else {
        $nextbutton2.css("display", "block");
        $prevbutton2.css("display", "block");
    }
    $slide3box.css("left", -(currentIdx3 * slideWidth3));
    $slide3box.css("transition", "0.5s ease");
});

$nextbutton2.on("click", function() {
    currentIdx3++;
    if (currentIdx3 === ($slide3img.length-3)) {
        $nextbutton2.css("display", "none");
    } else {
        $nextbutton2.css("display", "block");
        $prevbutton2.css("display", "block");
    }
    $slide3box.css("left", -(currentIdx3 * slideWidth3));
    $slide3box.css("transition", "0.5s ease");
});



$prevbutton3 = $(".prevbutton3");
$nextbutton3 = $(".nextbutton3");

$slide4box = $(".slider4-box");
$slide4img = $(".slider4-img");

let currentIdx4 = 0;

let slideWidth4 = 304;

if (currentIdx4 === 0) {
    $prevbutton3.css("display", "none");
}

if (currentIdx4 === ($slide4img.length-1)) {
    $nextbutton3.css("display", "none");
}

$prevbutton3.on("click", function() {
    currentIdx4--;
    if (currentIdx4 === 0) {
        $prevbutton3.css("display", "none");
    } else {
        $nextbutton3.css("display", "block");
        $prevbutton3.css("display", "block");
    }
    $slide4box.css("left", -(currentIdx4 * slideWidth4));
    $slide4box.css("transition", "0.5s ease");
});

$nextbutton3.on("click", function() {
    currentIdx4++;
    if (currentIdx4 === ($slide4img.length-1)) {
        $nextbutton3.css("display", "none");
    } else {
        $nextbutton3.css("display", "block");
        $prevbutton3.css("display", "block");
    }
    $slide4box.css("left", -(currentIdx4 * slideWidth4));
    $slide4box.css("transition", "0.5s ease");
});