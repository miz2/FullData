$(document).ready(function(){
    $('#btn1').click(function(){
        $("#img1").hide(2000);
    });
    $('#btn2').click(function(){
        $("#img1").show(2000);
    });
    $('#btn3').click(function(){
        $("#img1").toggle(3000);
    });
    $('#btn4').click(function(){
        $("#img1").fadeIn(3000);
    });
    $('#btn5').click(function(){
        $("#img1").fadeOut(3000);
    });
    $('#btn6').click(function(){
        $("#img1").fadeToggle(3000);
    });
    $('#btn7').click(function(){
        $("#img1").slideUp(3000);
    });
    $('#btn8').click(function(){
        $("#img1").slideDowne(3000);
    });
    $('#btn9').click(function(){
        $("#img1").slideToggle(3000);
    });
    $('#btn10').click(function(){
        $("#img1").stop();
    });
    $('#btn').click(function(){
        $("#img2").animate({
            left:'150px',
            opacity:'1',
            height:'400px',
            width:'400px'
        },2000);
    });
});