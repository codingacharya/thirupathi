// jQuery + vanilla JS for interactions

$(function () {
  // set current year
  $('#year').text(new Date().getFullYear());

  // Smooth scroll for nav links
  $('a.nav-link, .navbar-brand, .btn[href^="#"]').on('click', function (e) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
      e.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top - 70
      }, 600);
    }
  });

  // Contact form: open mail client with prefilled values
  $('#contactForm').on('submit', function (e) {
    e.preventDefault();
    var name = $('#nameInput').val().trim();
    var email = $('#emailInput').val().trim();
    var message = $('#messageInput').val().trim();

    var subject = encodeURIComponent('Portfolio Contact from ' + name);
    var body = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\nMessage:\n' + message);

    // fallback: open mailto
    window.location.href = 'mailto:kandadithirupathi@chaitanya.edu.in?subject=' + subject + '&body=' + body;
  });

  // Show all publications in new tabs (a quick helper)
  $('#openAllPubs').on('click', function () {
    // List of sample links taken from resume — update as needed
    var urls = [
      'https://indjst.org/articles/predicting-a-small-cap-company-stock-price-using-python-with-best-accuracy-rate-how-the-data-science-working-for-predictions-and-accuracy-rate',
      'https://ssrn.com/abstract=5000105'
    ];
    urls.forEach(function (u) { window.open(u, '_blank'); });
  });

  // Show more projects
  $('#showMoreProjects').on('click', function () {
    alert('More projects are available — you can add them under /projects section in the HTML.');
  });

  // Resume download buttons: point to uploaded resume file if hosted.
  // NOTE: Replace the path below with a hosted URL where your resume docx resides.
  var hostedResume = 'resume_thirupathi_reddy.docx'; // <--- update to actual hosted path
  $('#downloadResumeBtn, #downloadResumeModalBtn').attr('href', hostedResume);

  // small animation on scroll: add class when section in view
  var $window = $(window);
  function checkInView() {
    $('.card').each(function () {
      var top = $(this).offset().top;
      var bottom = top + $(this).outerHeight();
      var viewTop = $window.scrollTop();
      var viewBottom = viewTop + $window.height();
      if (bottom > viewTop + 100 && top < viewBottom - 100) {
        $(this).addClass('inview');
      }
    });
  }
  $window.on('scroll resize load', checkInView);
});
