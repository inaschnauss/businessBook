//contactUS send button
$( document ).ready(function() {
  console.log( "sendButton-contactUS" );
  $("#sendButton").click(function(){
    $("input", $("#contactus")).each(function(index, element){
      if(element.value.length == 0){
        $(element).addClass("border-error")
      }else{
        $(element).removeClass("border-error")
        }
      })
  })
  $('select').material_select();
})

//register sign-up-button
$( document ).ready(function() {
  console.log( "sign-up-button-register" );
  $("#sign-up-button").click(function(){
    $("input", $("#registerPage")).each(function(index, element){
      if(element.value.length == 0){
        $(element).addClass("border-error")
      }else{
        $(element).removeClass("border-error")
        }
      })
  })
  $('select').material_select();
})

//smooth scroll
function smoothScroll(){
  console.log("hello");
  $.scrollTo($('#menudiv'), 500);
}
