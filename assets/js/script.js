$( document ).ready(function() {
  console.log( "ready!" );

  $("#sign-up-button").click(function(){
    $("input").each(function(index, element){
      if(element.value.length == 0){
        $(element).addClass("border-error")
      }else{
        $(element).removeClass("border-error")
        }
      })
  })

  $('select').material_select();


})
