$(document).ready(function() {

  var resume_Page = 1;
  var numOfPages = $(".resume").length;
  var Time = 1000;
  var scrolling = false;
  var Prefix = ".page-";

  function pagination() {
    scrolling = true;

    $(Prefix + resume_Page).removeClass("inactive").addClass("active");
    $(Prefix + (resume_Page - 1)).addClass("inactive");
    $(Prefix + (resume_Page + 1)).removeClass("active");

    setTimeout(function() {
      scrolling = false;
    }, Time);
  };

  function goUp() {
    if (resume_Page === 1) return;
    resume_Page--;
    pagination();
  };

  function goDown() {
    if (resume_Page === numOfPages) return;
    resume_Page++;
    pagination();
  };

  $(document).on("keydown", function(e) {
    if (scrolling) return;
    if (e.which === 38) {
      goUp();
    } else if (e.which === 40) {
      goDown();
    }
  });

    $(document).on("mousewheel DOMMouseScroll", function(e) {
    if (scrolling) return;
    if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
      goUp();
    } else { 
      goDown();
    }
  });

});