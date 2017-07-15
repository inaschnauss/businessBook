//script.
  $(document).ready(function(){
    console.log("test");
  });
  function scrollMenu(){
    $.scrollTo($('#menudiv'), 500);
    console.log("scrollMenu");
  }
  function scrollEnd(){
    $.scrollTo(document.body.scrollHeight, 500);
    console.log("scrollEnd");
  }
