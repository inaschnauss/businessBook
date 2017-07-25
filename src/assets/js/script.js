//contactUS send button
$( document ).ready(function() {
  console.log( "sendButton-contactUS" );
  $("#sendButton").click(function(){
    $("input", $("#contactus")).each(function(index, element){
      if(!isValid(element, element.value)){
      //if(element.value.length == 0){
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
      if(!isValid(element, element.value)){
      //if(element.value.length == 0){
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

//is Valid registerPage
function isValid(element, value) {
  if(value.length == 0) {
    return false;
  }
  switch(element.id){
    case 'email':
      var regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      if(!regExp.test(value)) {
        return false;
      }
      break;
    case 'email2':
      if(value != $('#email').val()){
        return false;
      }
      break;
  }
  return true;
}

//is Valid contactUSPage
function isValid(element, value) {
  if(value.length == 0) {
    return false;
  }
  switch(element.id){
    case 'footerEmail':
      var regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      if(!regExp.test(value)) {
        return false;
      }
      break;
    case 'footerEmail2':
      if(value != $('#footerEmail').val()){
        return false;
      }
      break;
  }
  return true;
}
