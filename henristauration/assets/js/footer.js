$(document).ready(function () {
  (function selectHeader() {
    fileName = window.location.href.split('/').slice(-1).pop().split('.')[0];
    if (fileName === '') {
      $('li#index').addClass('current');
    }
    else {
      $('li').each(function () {
        if (this.id === fileName) {
          $(this).addClass('current');
        }
        else {
          $(this).removeClass('current');
        }
      })
    }
  }());
  (function () {
    $('.bt-menu').addClass('bt-menu-open');
  }());
}); 