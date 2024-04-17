// Bootstrap popover initialization
var popoverList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
var popoverInstances = popoverList.map(function(element) {
    return new bootstrap.Popover(element, {
        container: 'body',
        html: true
    });
});

// Carousel controls
var carouselInner = $(".carousel-inner");
var carouselWidth = carouselInner[0].scrollWidth;
var cardWidth = $(".carousel-item").width();
var scrollPosition = 0;

$(".carousel-control-next").on("click", function() {
    if (scrollPosition < (carouselWidth - cardWidth * 4)) {
        scrollPosition += cardWidth;
        carouselInner.animate({ scrollLeft: scrollPosition }, 600);
    }
});

$(".carousel-control-prev").on("click", function() {
    if (scrollPosition > 0) {
        scrollPosition -= cardWidth;
        carouselInner.animate({ scrollLeft: scrollPosition }, 600);
    }
});

// Responsive carousel initialization
var multipleCardCarousel = document.querySelector("#carouselExampleControls");
if (window.matchMedia("(min-width: 798px)").matches) {
    var carousel = new bootstrap.Carousel(multipleCardCarousel, {
        interval: false,
        wrap: false
    });
} else {
    $(multipleCardCarousel).addClass("slide");
}

// Initialize popovers
$(document).ready(function() {
    $('[data-toggle="popover"]').popover();
});
$(function() {
    $('.example-popover').popover({
        container: 'body'
    });
});
