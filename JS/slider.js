
    $(document).ready(function() {
      $(".regular").slick({
          infinite: true,
          slidesToShow: 5,
          slidesToScroll: 1,
          autoplay:true,
          arrows:true,
          prevArrow: $(".testimonial-carousel-controls .prev"),
          nextArrow: $(".testimonial-carousel-controls .next"),
          responsive: [{
              breakpoint: 1200,
              settings: {
                  slidesToShow: 4
              }
          }, {
              breakpoint: 700,
              settings: {
                  slidesToShow: 3
              }
          },{
            breakpoint: 550,
            settings: {
                slidesToShow: 2
            }
        },
          {
              breakpoint: 350,
              settings: {
                  slidesToShow: 1
              }
          }]
      });
  });













  $(document).ready(function() {
    $(".news").slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay:true,
        dots:true,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 700,
            settings: {
                slidesToShow: 3
            }
        },{
          breakpoint: 550,
          settings: {
              slidesToShow: 2
          }
      },
        {
            breakpoint: 350,
            settings: {
                slidesToShow: 1,
                dots:false
            }
        }]
    });
});