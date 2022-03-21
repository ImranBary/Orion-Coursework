window.addEventListener("scroll", function (e) {
    const target = document.querySelectorAll(".scroll");
    let index = 0,
        length = target.length;
    for (index; index < length; index++) {
        let pos = window.pageYOffset * target[index].dataset.rate;

        if (target[index].dataset.direction === "vertical") {
            target[index].style.transform = "translate3d(0px," + pos + "px, 0px)";
        } else {
            let posX = window.pageYOffset * target[index].dataset.ratex;
            let posY = window.pageYOffset * target[index].dataset.ratey;

            target[index].style.transform =
                "translate3d(" + posX + "px, " + posY + "px, 0px)";
        }
    }
});


function splitScroll() {
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        duration: '200%',
        triggerElement: '.content1-title',
        triggerHook: 0
    })
        .setPin('.content1-title')

        .addTo(controller);
}
splitScroll();



let controller = new ScrollMagic.Controller();
$(".wrapper").each(function () {
    let tl = new TimelineMax();
    let child = $(this).find(".child");
    tl.to(child, 1, { y: -180, ease: Linear.easeNone });

    let scene = new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: 0.4,
        duration: "100%"
    })
        .setTween(tl)

        .addTo(controller);
});


/*    https://www.youtube.com/watch?v=bfdEB5OiUwY&list=WL&index=49&ab_channel=litecode */
let something = document.querySelector('.last-page');
let somethingElse = document.querySelector('.starman');

something.onmousemove = function (e) {
    let X = e.pageX;
    let Y = e.pageY;
    somethingElse.style.transform = 'translate(' + X / 100 * -0.5 + 'px, ' + Y / 100 * -0.5 + 'px)';
}