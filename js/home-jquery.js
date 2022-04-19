$(document).ready(function()
{
    $(".pic2").hide();
    $(".alb2").hide();

    $(".best2").click(function()
    {
        $(".pic1").toggle();
        $(".alb1").toggle();

        $(".pic2").toggle();
        $(".alb2").toggle();
    })

    $(".best1").click(function()
    {
        $(".pic2").toggle();
        $(".alb2").toggle();

        $(".pic1").toggle();
        $(".alb1").toggle();
    })
})