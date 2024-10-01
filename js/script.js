{/* <button onclick="scrollToTop()">Topo</button> //volta p top da pág */}

$("#button").click(function() {
    $('html, body').animate({
      scrollTop: $("#anchor").offset().top
    }, 2000);
  });