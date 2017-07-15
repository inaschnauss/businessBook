  $(document).ready(function(){
    console.log("test");
  });
  function scrollEnd(){
    $.scrollTo(document.body.scrollHeight, 500);
    $('#idfooter').attr('style','height:100%');
  }
   function scrollMenu(){
    $.scrollTo($('#menudiv'), 500);
    $('#idfooter').attr('style','height:9%');
    console.log("scrollMenu");
  }
