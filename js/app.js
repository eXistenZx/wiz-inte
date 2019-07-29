$(document).ready(function($) {

  function incrementVal(selector) {
    var $item = selector;
    var $curVal = $item.attr('value');
    $item.attr('value', parseInt($curVal) + 1 );
    }
  function decrementVal(selector) {
    var $item = selector;
    var $curVal = $item.attr('value');
    $item.attr('value', parseInt($curVal) - 1 );
    }

  $('.btn-qty-selected-less').on('click',function() {
    $('.qty-selected-choice').val()<2 ? $('.qty-selected-choice').val() = 1 : decrementVal($('.qty-selected-choice'));
  });
  $('.btn-qty-selected-more').on('click',function() {
    incrementVal($('.qty-selected-choice'));
  });

  $('.slide-show').slick({
    slidesToShow:       1,
    slidesToScroll:     1,
    arrows:             false,
    dots:               false,
    fade:               true,
    infinite:           true,
    swipe:              true,
    swipeToSlide:       true,
    responsive: [{
            breakpoint: 769,
            settings: {
              dots: true
            }
    }]
  });

  $('.slide-choice-thumb').slick({
    slidesToShow:       1,
    slidesToScroll:     1,
    arrows:             false,
    dots:               false,
    fade:               true,
    infinite:           true,
    swipe:              true,
    swipeToSlide:       true
  });

  $('.slides').slick({
/*        vertical: true,*/
    vertical: true,
    verticalHeight: 500,
    vThumbWidth: 60,

    thumbItem: 10,
    pager: true,
    gallery: true,
    galleryMargin: 5,
    thumbMargin: 5,
    currentPagerPosition: 'right',

    asNavFor:           $('.slide-show'),
    slidesToShow:       5,
    slidesToScroll:     1,
    variableWidth:      true,
    adaptiveHeight:     true,
/*        mobileFirst:        true,*/
    arrows:             true,
    prevArrow:          $('.top-arrow'),
    nextArrow:          $('.down-arrow'),
    focusOnSelect:      true,
    focusOnChange:      true,
    infinite:           true,
    swipe:              true,
    swipeToSlide:       true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: "unslick"
      }
    ]
  });

});