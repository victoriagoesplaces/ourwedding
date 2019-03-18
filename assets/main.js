//NAV BAR : _________________
$(function () {
    $(document).scroll(function () {
      var $nav = $(".fixed-nav-bar");
      $nav.toggleClass('scroller', $(this).scrollTop() > $nav.height());
    });
  });
  //END NAV BAR &%%%%%%%%%%%%%%%%%