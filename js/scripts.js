/*

	01. Document Ready
	02. Standalone Functions
  03. Window Scroll
	04. Window Load

*/

/* -- 01. Document Ready -- */
$(document).ready(function() {
		
	new $.Zebra_Accordion('#Zebra_Accordion1');

  $('blockquote').quovolver();

  $('#onepagenav').onePageNav({
    changeHash: false,
    filter: ':not(.external)',
    scrollOffset: 0,
  });
  // $('img').retinafy();

  $('#countdown_dashboard').countDown({
      targetDate: {
        'day':    14,
        'month':  11,
        'year':   2013,
        'hour':   10,
        'min':    0,
        'sec':    0
      }
  });

  // $("#reveal_pkgs").click( function () {
  //   if ($("#pkgs").is(":hidden")) {
  //       $("#pkgs").slideDown( "slow");
  //       $("#reveal_pkgs").html("Hide Sponsorship Packages");
  //   } 
  //   else {
  //       $("#pkgs").slideUp();
  //       $("#reveal_pkgs").html("See Sponsorship Packages");
  //   }
  // });

  // $("#reveal_pkgs").click( function () {
  //   $('#my_modal').popup();
  //     // 'autoopen': true
  //   // });
  // });


  jQuery("#lasttweet").tweet({
    join_text: "auto",
    // username: "envato", // Change username here
    query: "#FSUCSExpo",
    modpath: './js/twitter/',
    avatar_size: false,
    count: 1,
    loading_text: "loading tweets...",
    seconds_ago_text: "about %d seconds ago",
    a_minutes_ago_text: "about a minute ago",
    minutes_ago_text: "about %d minutes ago",
    a_hours_ago_text: "about an hour ago",
    hours_ago_text: "about %d hours ago",
    a_day_ago_text: "about a day ago",
    days_ago_text: "about %d days ago",
    view_text: "view tweet on twitter"
  });

    //Full Caption Sliding (Hidden to Visible)
    $('.boxgrid.captionfull.cover').css({top:'260px'});
    $('.boxgrid.captionfull').hover(function(){
        $(".cover", this).stop().animate({top:'160px'},{queue:false,duration:160});
    }, function() {
        $(".cover", this).stop().animate({top:'260px'},{queue:false,duration:160});
    });

    $('#bestandard').click(function() {
      $('#subject-field').val("I would like more information on the Standard Sponsorship Package.").prop(
        'disabled', true).css(
        'background', '#eee');
      $('#contact_link').trigger('click');
      });

    $('#begarnet').click(function() {
      $('#subject-field').val("I would like more information on the Garnet Sponsorship Package.").prop(
        'disabled', true).css(
        'background', '#eee');
      $('#contact_link').trigger('click');
      });

    $('#begold').click(function() {
      $('#subject-field').val("I would like more information on the Gold Sponsorship Package.").prop(
        'disabled', true).css(
        'background', '#eee');
      $('#contact_link').trigger('click');
      });

}); //end Document.Ready


/* -- 02. Standalone Functions -- */
$(function() {
 
  // Create the dropdown base
  $("<select />").appendTo("nav .container .sixteen");
  
  // Create default option "Go to..."
  $("<option />", {
     "selected": "selected",
     "value"   : "",
     "text"    : "Menu"
  }).appendTo("nav select");
  
  // Populate dropdown with menu items
  $("nav #onepagenav a").each(function() {
   var el = $(this);
   $("<option />", {
       "value"   : el.attr("href"),
       "text"    : el.text()
   }).appendTo("nav select");
  });
  
 // To make dropdown actually work
  $("nav select").change(function() {
    window.location = $(this).find("option:selected").val();
  });

});
	 
/* -- 03. Window Scroll -- */
 $(window).scroll(function(){
    if ($(this).scrollTop() > 650) {
        $('nav').slideDown();
  
    } else {
        $('nav').slideUp();
  
    }
  });


/* -- 03. Window Load -- */
var map;
$(window).load(function() {
    // $("#sponsor-flexisel").flexisel(
    // {visibleItems: 4,
    //   animationSpeed: 500,
    //   autoPlay: true,
    //   autoPlaySpeed: 2000,            
    //   pauseOnHover: true,}
    // );

    $('body').css('overflow', 'auto');
    // $('.preloader').delay(3000).fadeOut('slow');

    map = new GMaps({
      div: '#map',
      lat: 30.4475,
      lng: -84.29987,
      scrollwheel: false,
      zoomControl: false,
      scaleControl: false,
      scrollwheel: false,
      disableDefaultUI: true,
      draggable: false,
      disableDoubleClickZoom: true
    });

    map.drawOverlay({
      lat: map.getCenter().lat(),
      lng: map.getCenter().lng(),
      content: '<div class="overlay-map"><div class="overlay-map-header">\
                Where is it?</div> <p>499 Dirac Science Library, 4th Floor\
                <br />Florida State University<br /> Tallahassee, FL 32306.\
                </p><div class="overlay-map-arrow above"></div></div>',
      verticalAlign: 'center',
      horizontalAlign: 'center'
    });

    $("#sponsor-flexisel").flexisel({
        visibleItems: 4,
        animationSpeed: 500,
        autoPlay: true,
        autoPlaySpeed: 2000,            
        pauseOnHover: true,
    });

  });  