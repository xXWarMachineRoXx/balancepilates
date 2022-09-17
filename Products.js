var owl = $('#Products-carousel');

owl.owlCarousel({
    items:4,
    loop:true,
    margin:10,
    navigation:false,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        },
        1500:{
            items:4,
            nav:true,
            loop:false
        }

    }
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})