$(".navbar-toggler").click(function () {
  $(".mob-menu-bg").animate({
    top: "0%"
  }, 400);
  $(".sub-header").css('z-index', '50');
});
$(".lb-cross-btn").click(function () {
  $(".mob-menu-bg").animate({
    top: "-100%"
  }, 400);
  $(".sub-header").css('z-index', '110');
});
$(".btn-fd").click(function () {
  $(this).toggleClass("btn-bk");
  $(".sub-header").toggleClass("move-right");
})


var profileName = $(".profile-name-box h2").text();
$(".profile-name-box input").val(profileName);
var newProfileName;
$(".edit-profile-name").click(function () {
  $(".profile-name-box h2").toggleClass("d-none");
  $(".profile-name-box input").toggleClass("d-none");
  if ($(".profile-name-box input").val() != "") {
    newProfileName = $(".profile-name-box input").val();
    $(".profile-name-box h2").text(newProfileName);
  } else {
    $(".profile-name-box h2").text(newProfileName);
    $(".profile-name-box input").val(newProfileName);
  }
});
var months = new Array(12);
months[0] = "January";
months[1] = "February";
months[2] = "March";
months[3] = "April";
months[4] = "May";
months[5] = "June";
months[6] = "July";
months[7] = "August";
months[8] = "September";
months[9] = "October";
months[10] = "November";
months[11] = "December";
$(function () {
  $(".lb-db-custom-date-edit").datepicker({
    onSelect: function () {
      var lbNewDateObj = $(this).datepicker('getDate');
      var selectedDate = lbNewDateObj.getDate();
      var selectedMonth = lbNewDateObj.getMonth();
      var selectedYear = lbNewDateObj.getFullYear();
      $(".profile-date-box h3").text(months[selectedMonth] + " " + selectedDate + "," + " " + selectedYear);
    }
  });
});
$(".edit-profile-date").click(function () {
  $(".profile-date-box h3").toggleClass("d-none");
  $(".profile-date-box input").toggleClass("d-none");
});

$('#signupModal').on('hidden.bs.modal', function () {
  $('.lb-db-add-friend').tooltip('hide');
});


$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
        loop: true,
        mouseDrag: true
      },
      600: {
        items: 2,
        nav: false,
        mouseDrag: true
      },
      768: {
        items: 3,
        nav: false,
        mouseDrag: true
      },
      1000: {
        items: 4,
        nav: false,
        mouseDrag: true
      },
      1200: {
        items: 5,
        nav: false,
        loop: false,
        mouseDrag: false
      }
    }
  });
  $(".lb-db-add-friend").tooltip({
    placement: 'top',
    template: '<div class="tooltip white-tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
  });
  $(function () {
    $('[data-toggle="tooltip"]').tooltip({
      template: '<div class="tooltip white-tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
    });
  })
  if ($(window).width() < 992) {
    mainMenuMobDP();
  }
});

// Bootstrap on page load

$(window).on('load', function () {
  $('#themeModal-small').modal('show');
});

// function for main menu dp on mobile

$(window).on('resize', function () {
  if ($(window).width() < 992) {
    if (fCalled === false) {
      mainMenuMobDP();
    }
  }else{
    $(".lb-mobile-dropdown").remove();
    $(".main-menu > li > ul").removeAttr("style");
    fCalled = false;
  }
});
var fCalled = false;
function mainMenuMobDP() {
  $(".main-menu > li").each(function () {
    if ($(this).has('ul').length) {
      $(this).prepend("<span class='lb-mobile-dropdown lb-arrow-down'></span>");
    }
  });
  fCalled = true;
  $(".lb-mobile-dropdown").click(function(){
    alert("hi");
    $(this).parent().find("ul").slideToggle();
    $(this).toggleClass('lb-arrow-up');
  });
}

$(".lb-favorite a img").click(function(event){
  event.preventDefault();
  var i = $(this).attr('data-index');
    switch (i) {
      case '0':
        i = '1';
        src = '../images/favorite-line.png';
        break;
      case '1':
      default:
        i = '0';
        src = '../images/favorite-fill.png';
        break;
      }

      $(this)
        .attr('src', src)
        .attr('data-index', i);
})