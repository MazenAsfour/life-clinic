
$(document).ready(function(){
    $(".bars").click(function(){
      $(".second ul").slideToggle(500);
      $('.move i').fadeToggle();
      $('.leftcontact form').fadeToggle();
    });
    $('html').niceScroll();
    $('.showsign').click(function(){
        $('.signup').slideToggle(1000);
        $('.headerstags').fadeToggle(1000);
    });
    $('.close').click(function(){
        $('.headerstags').fadeToggle(1000);
        $('.signup').slideToggle(1000);
    });
    $('.showlog').click(function(){
        $('.headerstags').fadeToggle(1000);
        $('.login').slideToggle(1000);
    });
    $('.closelog').click(function(){
        $('.login').slideToggle(1000);
        $('.headerstags').fadeToggle(1000);
    });

  });
 
  
const b=document.querySelector('html,body');
//console.log(b);
$(window).scroll(function(){
    //console.log($(this).scrollTop());
    if($(this).scrollTop() >= 400 ){
        $(".scroll").fadeIn();
    }
    else {
        $(".scroll").fadeOut();
    };
    $('.scroll').click(function(){
        b.scrollTo({
            top:30,
            behavior:'smooth'
        })
    });

    $('.click1').click(function(){
        $('.f2').slideUp();
        $('.f3').slideUp();
        $('.f4').slideUp();
        $('.f5').slideUp();
        $('.f1').slideDown(1000);
    });
    $('.click2').click(function(){
        $('.f1').slideUp();
        $('.f3').slideUp();
        $('.f4').slideUp();
        $('.f5').slideUp();
        $('.f2').slideDown(1000);
    });
    $('.click3').click(function(){
        $('.f2').slideUp();
        $('.f1').slideUp();
        $('.f4').slideUp();
        $('.f5').slideUp();
        $('.f3').slideDown(1000);
    });
    $('.click4').click(function(){
        $('.f4').slideDown(1000);
        $('.f3').slideUp();
        $('.f2').slideUp();
        $('.f5').slideUp();
        $('.f1').slideUp();
    });
    $('.click5').click(function(){
        $('.f5').slideDown(1000);
        $('.f3').slideUp();
        $('.f4').slideUp();
        $('.f2').slideUp();
        $('.f1').slideUp();
    });

    
});


function show1(){
    b.scrollTo({
        top:0,
        behavior:"smooth"
    })
     
}
  
