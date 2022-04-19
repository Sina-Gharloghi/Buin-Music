$(document).ready(function()
{
    $(".picture2").hide();
    $(".name2").hide();

    $(".picture1").mouseenter(function()
    {
        $(this).css("height",'105%',),
        $(this).css("width",'70%',);
    });

    $(".picture1").mouseleave(function()
    {
        $(this).css("height",'100%',),
        $(this).css("width",'65%',);
    })

    $(".picture2").mouseenter(function()
    {
        $(this).css("height",'105%',),
        $(this).css("width",'70%',);
    });

    $(".picture2").mouseleave(function()
    {
        $(this).css("height",'100%',),
        $(this).css("width",'65%',);
    })


    $(".page2").click(function()
    {
        $(".picture1").hide();
        $(".name1").hide();

        $(".picture2").show();
        $(".name2").show();
    })

    $(".page1").click(function()
    {
        $(".picture2").hide();
        $(".name2").hide();

        $(".picture1").show();
        $(".name1").show();
    })
})