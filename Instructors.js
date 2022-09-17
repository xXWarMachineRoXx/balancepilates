var owl = $('#Instructors');

owl.owlCarousel({
    items:2,
      margin:20,
    navigation:false,
    autoplay:true,
    autoplayTimeout:4000,
    
    responsive:{
        0:{
            items:1,
            nav:true,
            loop:false

        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:2,
            nav:true,
            loop:false
        }
    }
});
