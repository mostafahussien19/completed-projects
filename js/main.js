$(function ()
{

	// slider
	var wh=$(window).height(),
	    uh=$(".upper-bar").innerHeight(),
	    nh=$(".navbar").innerHeight();
	$('.slider,.carousel-item').height(wh - (uh+nh));
	$(".carousel-indicators li").click(function()
	{
		$(this).addClass("active").siblings().removeClass("active")
	})
	// shuffle
	$(".work ul li").on("click",function()
	{
		$(this).addClass('actived').siblings().removeClass("actived")
		if($(this).data("class") === 'all')
		{
            $(".shuffle-imgs .col-md").css("opacity",1)
		}else
		{
			$(".shuffle-imgs .col-md").css("opacity",".1");
			$($(this).data("class")).parent().css("opacity",1)
		}
})
})