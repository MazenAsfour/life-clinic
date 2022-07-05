$(document).ready(function(){   



$('.showsrv2').click(function(){
$('.ser2show').slideDown(700);
$('.ser1show').slideUp();
$('.ser3show').slideUp();
$('.ser4show').slideUp();
});
$('.showsrv1').click(function(){
    $('.ser1show').slideDown(700);
    $('.ser2show').slideUp();
    $('.ser3show').slideUp();
    $('.ser4show').slideUp();
});
$('.showsrv3').click(function(){
$('.ser3show').slideDown(700);
$('.ser2show').slideUp();
$('.ser1show').slideUp();
$('.ser4show').slideUp();
});  
$('.showsrv4').click(function(){
    $('.ser4show').slideDown(700);
    $('.ser2show').slideUp();
    $('.ser3show').slideUp();
    $('.ser1show').slideUp();
    });
    
});

        setTimeout(hidestart,5000);
        function hidestart(){
            const b=document.querySelector('html,body');
            $('.start').fadeOut(1000);
            b.scrollTo({
                top:30,
                behavior:'smooth'
            })
            
        }
 

