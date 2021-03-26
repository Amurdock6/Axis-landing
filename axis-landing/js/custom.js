<<<<<<< Updated upstream
// Custom Scripts for Primal Template //

jQuery(function($) {
    "use strict";


/* --------- Wow Init ------ */

  new WOW().init();


  /* ------ Countdown ----- */

  $('#countdown').countdown({
  			date: '11/01/2016 17:00:00',
  			offset: +2,
  			day: 'Day',
  			days: 'Days'
  		}, function () {
  			alert('Done!');
  		});


/*----- Preloader ----- */

    $(window).load(function() {
  		setTimeout(function() {
        $('#loading').fadeOut('slow', function() {
        });
      }, 3000);
    });


/*----- Subscription Form ----- */

$('.subscribe-form').submit(function(e) {
    e.preventDefault();
    var postdata = $('.subscribe-form').serialize();
    $.ajax({
        type: 'POST',
        url: 'assets/php/subscribe.php',
        data: postdata,
        dataType: 'json',
        success: function(json) {
        if(json.valid == 0) {
            $('.success-message').hide();
            $('.error-message').hide();
            $('.error-message').html(json.message);
            $('.error-message').fadeIn('fast', function(){
                $('.subscribe-form').addClass('animated flash').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                    $(this).removeClass('animated flash');
                });
            });
        }
        else {
            $('.error-message').hide();
            $('.success-message').hide();
            $('.subscribe-form').hide();
            $('.success-message').html(json.message);
            $('.success-message').fadeIn('fast', function(){
                $('.top-content').backstretch("resize");
            });
          }
        }
    });
});


});
=======
// Custom Scripts for Primal Template //

jQuery(function($) {
    "use strict";


/* --------- Wow Init ------ */

  new WOW().init();


  /* ------ Countdown ----- */

  $('#countdown').countdown({
  			date: '11/01/2016 17:00:00',
  			offset: +2,
  			day: 'Day',
  			days: 'Days'
  		}, function () {
  			alert('Done!');
  		});


/*----- Preloader ----- */

    $(window).load(function() {
  		setTimeout(function() {
        $('#loading').fadeOut('slow', function() {
        });
      }, 3000);
    });


/*----- Subscription Form ----- */

$('.subscribe-form').submit(function(e) {
    e.preventDefault();
    var postdata = $('.subscribe-form').serialize();
    $.ajax({
        type: 'POST',
        url: 'assets/php/subscribe.php',
        data: postdata,
        dataType: 'json',
        success: function(json) {
        if(json.valid == 0) {
            $('.success-message').hide();
            $('.error-message').hide();
            $('.error-message').html(json.message);
            $('.error-message').fadeIn('fast', function(){
                $('.subscribe-form').addClass('animated flash').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                    $(this).removeClass('animated flash');
                });
            });
        }
        else {
            $('.error-message').hide();
            $('.success-message').hide();
            $('.subscribe-form').hide();
            $('.success-message').html(json.message);
            $('.success-message').fadeIn('fast', function(){
                $('.top-content').backstretch("resize");
            });
          }
        }
    });
});


});
>>>>>>> Stashed changes
