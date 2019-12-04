$(window).on('load', function() {
  $(".loading").fadeOut("slow");

  slideshow();
  expand();
  tabs();
  gallery();
});

// slideshow --------------------------------------------------------------

const slideshow = () => {
  $(".slideshow > img:gt(0)").hide();

  setInterval(function() { 
    $('.slideshow > img:first')
      .fadeOut(1500)
      .next()
      .fadeIn(1500)
      .end()
      .appendTo('.slideshow');
  },  4000);
}

// glider.js function --------------------------------------------------------------

// activities glider
new Glider(document.querySelector('.activities .glider'), {
  // slidesToShow: 1,
  // slidesToScroll: 1,
  draggable: true,
  dots: '.activities .glider-dots',
  responsive: [
    {
      // screens greater than >= 1440px
      breakpoint: 1440,
      settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow: 4,
        slidesToScroll: 4,
        // itemWidth: 150,
        duration: 0.25
      }
    },{
      // screens greater than >= 768px
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        // itemWidth: 150,
        duration: 0.25
      }
    },{
      // screens greater than >= 425px
      breakpoint: 425,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        // itemWidth: 150,
        duration: 0.25
      }
    }
  ]
});

// updates glider
new Glider(document.querySelector('.updates .glider'), {
  // slidesToShow: 4,
  // slidesToScroll: 4,
  draggable: true,
  dots: '.updates .glider-dots',
  responsive: [
    {
      // screens greater than >= 1440px
      breakpoint: 1440,
      settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow: 4,
        slidesToScroll: 4,
        // itemWidth: 150,
        duration: 0.25
      }
    },{
      // screens greater than >= 768px
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        // itemWidth: 150,
        duration: 0.25
      }
    },{
      // screens greater than >= 425px
      breakpoint: 425,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        // itemWidth: 150,
        duration: 0.25
      }
    }
  ]
});

// testimonials glider
new Glider(document.querySelector('.testimonials .glider'), {
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: true,
  dots: '.testimonials .glider-dots',
});


// expand function --------------------------------------------------------------------
const expand = () => {
  $('.expand-button').on('click', () => {
    $('.line-wrapper').toggleClass('open');
    $('.vertical').toggleClass('open');
    $('.expand-area').toggleClass('expand');
  });
};


// tabs function ----------------------------------------------------------------------
const showTab = (clickedTab) => {
  document.querySelectorAll('.tabcontent')
  .forEach(tabContent => 
    tabContent.dataset.tabname != clickedTab.dataset.tabname 
    ? tabContent.classList.remove('active') 
    : tabContent.classList.add('active'));   
    document.querySelectorAll('.tabbutton')
    .forEach(tabButton => 
      tabButton != clickedTab 
      ? tabButton.classList.remove('active') 
      : tabButton.classList.add('active')); 
    };
    
    const tabs = () => {
      document.querySelectorAll('.tabbutton')
      .forEach(btn => btn.addEventListener('click', e => showTab(e.target)));
    };

    
// polaroid gallery function ----------------------------------------------------------------------
const gallery = () => {
  new Photostack( document.getElementById( 'photostack-1' ), {
    callback : function( item ) {
      //console.log(item)
    }
  } );
};