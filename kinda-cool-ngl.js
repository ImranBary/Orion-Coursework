let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
.to('.mars-2',750,{y:-300})
.to('.starman',750,{y:-200},'-=750')
.fromTo('.mars-1',750,{y:-50},{y:0,duration:750 },'-=750')
.to('.content',740,{top:'0%'},'-=740')
.fromTo('.text',{opacity:0},{opacity:1,duration:750});


let scene = new ScrollMagic.Scene({
    triggerElement:"section",
    duration:"80%",
    triggerHook:0,
})

.setTween(timeline)
.setPin("section")
.addTo(controller);