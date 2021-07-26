$(document).ready(function()
{
    $("#image2").hide();

    $("#img1").click(function()
    {
        $("#image2").hide();
        $("#image1").show();
    })

    $("#img2").click(function()
    {
        $("#image1").hide();
        $("#image2").show();
    })

    $("#adc").hover(
        function(){
            $(this).css("width",'45%');
        }
        ,
        function(){
            $(this).css("width",'40%');
        });

})