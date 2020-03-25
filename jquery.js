
$(document).ready(function() {

    // Check for click events on the navbar burger icon
    $("#burger2").click(function() {
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $("#burger2").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
  
    });

    $('#burger1').click(() => {
        
        $('#menu').toggleClass("is-hidden-mobile");
        $("#burger1").toggleClass("is-active");

    });

    $('.card-header').click(function() {
        var content = $(this).siblings('.card-content');
        var footer = $(this).siblings('.card-footer');
        $("svg", this).toggleClass("fa-angle-up fa-angle-down");
        if (content.hasClass('active') || footer.hasClass('active')) {
            
            content.removeClass('active').slideUp();
            footer.removeClass('active').slideUp();

        } else {

            content.addClass('active').slideDown();
            footer.addClass('active').slideDown();

        }
        
    });


    // modals

    

    $('#login-button').click(() => {
            $('#modal-login').addClass('is-active');
        });
      
    $('#signUp-button').click(() => {
            $('#modal-signUp').addClass('is-active');
        });

    $('.modal-background, .modal-close').click(() => {
            $('#modal-login').removeClass('is-active');
            $('#modal-signUp').removeClass('is-active');
        });

  });   
  $(document).on( 
    'keydown', function(event) { 
      if (event.key == "Escape" && $('.modal').hasClass('is-active')) { 
          $('.modal').removeClass('is-active');
      } 
  }); 