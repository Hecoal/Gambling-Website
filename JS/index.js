// Description: This is the main entry point for the application
// Author: Hecoal
// Date: 17-03-2023

// Parallax effect
const imagenes=document.getElementsByClassName('card-img-top');
new simpleParallax(imagenes,{orientation: 'right'});

//Toast
var toastTrigger = document.getElementById('liveToastBtn')
var toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}

//Scroll	
$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 40){
        $('#topBtn').fadeIn();
        }else{
        $('#topBtn').fadeOut();
        }
    });
    $("#topBtn").click(function(){
        $('html, body').animate({scrollTop : 0},800);
    });
    });
