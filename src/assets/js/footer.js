  $(document).ready(function(){
    console.log("test");
  });
  function scrollEnd(){
    $('#idfooter').attr('style','height:100%');
    $(document.body).scrollTop()
    $.scrollTo('max', 500);
  }

   function scrollMenu(){
    $.scrollTo($('#menudiv'), 500);
    $('#idfooter').attr('style','height:9%');
    console.log("scrollMenu");
  }
