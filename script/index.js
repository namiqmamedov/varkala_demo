function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
  
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }


  $(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
  });

  var accordion = (function(){
  
    var $accordion = $('.js-accordion');
    var $accordion_header = $accordion.find('.js-accordion-header');
    var $accordion_item = $('.js-accordion-item');
   
    var settings = {
      speed: 400,
      
      oneOpen: false
    };
      
    return {
      init: function($settings) {
        $accordion_header.on('click', function() {
          accordion.toggle($(this));
        });
        
        $.extend(settings, $settings); 
        
        if(settings.oneOpen && $('.js-accordion-item.active').length > 1) {
          $('.js-accordion-item.active:not(:first)').removeClass('active');
        }
        
        $('.js-accordion-item.active').find('> .js-accordion-body').show();
      },
      toggle: function($this) {
              
        if(settings.oneOpen && $this[0] != $this.closest('.js-accordion').find('> .js-accordion-item.active > .js-accordion-header')[0]) {
          $this.closest('.js-accordion')
                 .find('> .js-accordion-item') 
                 .removeClass('active')
                 .find('.js-accordion-body')
                 .slideUp()
        }
        
        $this.closest('.js-accordion-item').toggleClass('active');
        $this.next().stop().slideToggle(settings.speed);
      }
    }
  })();
  
  $(document).ready(function(){
    accordion.init({ speed: 300, oneOpen: true });
  });


  const accordionHeaders = document.querySelectorAll('.js-accordion-header');

  accordionHeaders.forEach(header => {
      header.addEventListener('click', () => {
          const icon = header.querySelector('.fa-solid');
  
          if (icon.classList.contains('fa-plus')) {
              icon.classList.remove('fa-plus');
              icon.classList.add('fa-minus');
          } else {
              icon.classList.remove('fa-minus');
              icon.classList.add('fa-plus');
          }
      });
  });

  const menuIcon = document.querySelector('.menu-icon');
  const menuBtn = document.getElementById('menu-btn');
  
  menuIcon.addEventListener('click', () => {
      const menu = document.querySelector('.menu');
      const contentToSlide = document.querySelectorAll(
          'body > :not(.header-top):not(.header-index)'
      );
  
      menu.classList.toggle('active');
  
      if (menu.classList.contains('active')) {
          contentToSlide.forEach(div => {
              div.style.transition = 'transform 0.3s ease';
              div.style.transform = 'translateY(200px)';
          });
      } else {
          contentToSlide.forEach(div => {
              div.style.transition = 'transform 0.3s ease'; 
              div.style.transform = ''; 
          });
      }
  });


   $(document).ready(function(){
    
     $('.sub-btn').click(function(){
       $(this).next('.sub-menu').slideToggle();
       $(this).find('.fa-solid').toggleClass('fa-chevron-down fa-chevron-up');
      });

     $('.menu-btn').click(function(){
       $('.side-bar').addClass('active');
       $('.menu-btn').css("visibility", "hidden");
     });

     $('.close-btn').click(function(){
       $('.side-bar').removeClass('active');
       $('.menu-btn').css("visibility", "visible");
     });
   });

   $('.hero-image').parallax({imageSrc: '/assets/blog/hero__base.jpg'});
   
   $('#contact-parallax').parallax({imageSrc: '/assets/blog/maarten-deckers.jpg'});

   