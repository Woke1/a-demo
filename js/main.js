$(function(){	
	mainCloud();
	page1Animate();
	page2Animate();
	page3Animate();	
	page5Animate();
	page6Animate();
	$("#page-1-img").mouseenter(function(){
		if(!$("#page-1-img2").is(":animated")){
			page1Animate();
		}
	});
	$("#page-3 .page-left-img").mouseenter(function(){
		if(!$("#page-3-rocket").is(":animated")){
		page3Animate();
		}
	});
	$("#page-6img").mouseenter(function(){
		if(!$("#page-6-arrow").is(":animated")){
			page6Animate();
		}
	});

});
//page-1的动画
function page1Animate(){
	var img1 = $("#page-1-img2");
	var img2 = $("#page-1-img3");
	img1.css("top",89).animate({
		"top" : 20
	},1000);
	img2.css("left",145).animate({
		"left" : 315
	},1000);
}
//最开始页面云的动画
function mainCloud(){
	var cloud = $("#page-main-cloud img");
	setInterval(function(){
		cloud.each(function(){
			var UpOrDown = Math.floor(Math.random()*2);
			var randNum = Math.floor(Math.random()*30);
			if(UpOrDown == 0){
				$(this).animate({
					"marginTop": "+="+randNum
				},1500);
				$(this).animate({
					"marginTop": "-="+randNum
				},1500);
			}
			if(UpOrDown == 1){
				$(this).animate({
					"marginTop": "-="+randNum
				},1500);
				$(this).animate({
					"marginTop": "+="+randNum
				},1500);
			}
		});
	}, 3000);
}
//page-2的动画
function page2Animate(){
	var page2Small = $("#page-2-small");
	var page2big = $("#page-2-big");
	var deg = 0;
	setInterval(function(){
		deg++;
		page2big.css("transform","rotate("+ deg +"deg)");
		page2Small.css("transform","rotate("+ deg +"deg)");
	}, 30);
}

//page-3火箭动画
function page3Animate(){
	var page3Rocket = $("#page-3-rocket");
	var rocketPositionTop = 20;
	page3Rocket.animate({
		"top" : -100
	},2000);
	page3Rocket.animate({
		"top" : -400
	},500,function(){
		$(this).css("top" , rocketPositionTop);
	});
}

//page5动画
function page5Animate(){
	var deg = 0;
	setInterval(function(){
		if(deg == 60){
			deg = 0;
		}
		$("#page-5left-1").css("transform" , "rotate("+  deg +"deg)");
		$("#page-5left-2").css("transform" , "rotate("+  deg +"deg)");
		$("#page-5right-1").css("transform" , "rotate("+  (deg-30) +"deg)");
		$("#page-5right-2").css("transform" , "rotate("+  (deg-30) +"deg)");
		deg += 30;	
	}, 1000);
}

//page6动画
function page6Animate(){
	var arrowPosition = 231;
	$("#page-6-arrow").css("left",arrowPosition+500)
	.animate({
		"left" : arrowPosition
	},800);
}