$(document).ready(function(){


  var url = window.location.href;

  if( url.indexOf("?utm-") > -1 ){
    var result = url.substring(url.indexOf("utm-"), 300);
    document.getElementById('js-utm-data').value = result;

  }

  document.getElementById('js-utm-data').value = window.location.href.substring(window.location.href.indexOf("?"),300);



  if ($(window).width() < 430){
    // $('.noui-labels-container').css('margin-right','.5rem');
  }

  $(".forms__field__input").on("input", function() {
    if (this.value != '') {
      $(this).siblings('label').addClass('forms__field__input__label--full')
    } else {
      $(this).siblings('label').removeClass('forms__field__input__label--full')
    }
  })

  $(".forms__field__input__box").on("input", function() {
    if (this.value != '') {
      $(this).siblings('label').addClass('forms__textarea__input__label--full')
    } else {
      $(this).siblings('label').removeClass('forms__textarea__input__label--full')
    }
  })

  $(".js-owner-name").on("input", function() {
    if (this.value != '') {
      var nominee = this.value;
      var firstName = nominee;
      if (nominee.includes(' ')){
        firstName = nominee.substr(0,nominee.indexOf(' '));
      }
      if (firstName != ' '){
        updatePlaceholders(firstName);
      } else if (firstName == ' ') {
        updatePlaceholders();
      }
    }
  })

  function updatePlaceholders(name){
    if (name){
      var placeholderBusinessName = name + "'s business name *";
      var placeholderNomineeName = "How do you know "+ name + "? *";
      var placeholderEmail = "What is " + name + "'s email address? *";
      var placeHolderPhone = "What is "+ name + "'s phone number?";
      var placeholderExplain = "Why is "+name+" the most overworked business owner in NZ? *";
      applyAttributes(placeholderBusinessName,placeholderNomineeName,placeholderEmail,placeHolderPhone,placeholderExplain);
    } else {
      var placeholderBusinessName = "The nominee's business name *";
      var placeholderNomineeName = "How do you know the nominee? *";
      var placeholderEmail = "What is the nominee's email address? *";
      var placeHolderPhone = "What is the nominee's phone number?";
      var placeholderExplain = "Why is the nominee the most overworked business owner in NZ? *";
      applyAttributes(placeholderBusinessName,placeholderNomineeName,placeholderEmail,placeHolderPhone,placeholderExplain);
    }
  }

  function applyAttributes(a,b,c,d,e){
    $('.js-holder-bn').attr('placeholder',a);
    $('.js-holder-bn-label').html(a);
    $('.js-holder-nn').attr('placeholder',b);
    $('.js-holder-nn-label').html(b);
    $('.js-holder-em').attr('placeholder',c);
    $('.js-holder-em-label').html(c);
    $('.js-holder-ph').attr('placeholder',d);
    $('.js-holder-ph-label').html(d);
    $('.js-holder-ex').attr('placeholder',e);
    $('.js-holder-ex-label').html(e);
  }

  $(".js-holder-ex").on("input", function() {
    if(($('.js-holder-ex').val() != '')&&(screen.width < 440)){
      $('.js-holder-ex').css('margin-top','1rem');
    }
    else{
      $('.js-holder-ex').css('margin-top','0rem');
    }
  });



});
