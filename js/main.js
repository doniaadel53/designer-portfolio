
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar-example');
    const heroSection = document.getElementById('head');
    const heroHeight = heroSection.offsetHeight;

    if (window.scrollY >= heroHeight) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
$('.counter').counterUp({
    delay: 10,
    time: 2000
  });
  $('.counter').addClass('animated fadeInDownBig');
  $('h3').addClass('animated fadeIn');