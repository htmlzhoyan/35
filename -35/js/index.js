
$(function(){
/**********************header划过效果展示***********************************/
	$('#header a').hover(function(){
		$('#header a').removeClass('remenuactive')
		$(this).addClass('remenuactive')
	},function(){
		$('#header a').removeClass('remenuactive')
	})
/**********************header下拉菜单效果展示***********************************/
	$('.rmenu-2').hover(function(){
		$('.remnu-2ul').css('display','block')
		$(this).css('backgroundColor','#fff')
	},function(){
		$('.remnu-2ul').css('display','none')
		$(this).css('backgroundColor','#f2f2f2')

	})
	$('.rmenu-3').hover(function(){
		$('.remnu-3ul').css('display','block')
		$(this).css('backgroundColor','#fff')
	},function(){
		$('.remnu-3ul').css('display','none')
		$(this).css('backgroundColor','#f2f2f2')

	})	

	$('.rmenu-5').hover(function(){
		$('.rmenu-5pic').css('display','block')
	},function(){
		$('.rmenu-5pic').css('display','none')

	})	
/**********************top导航划过效果展示***********************************/
	$('.top-bottom a').hover(function(){
		$('.top-bottom a').css('color','#999')
		$(this).css('color','#fe6809')
	})

/**********************top左侧导航划过效果展示***********************************/	
	$('.nav-left li').hover(function(){
		$('.nav-left li').css('border','0')
		var navindex=$(this).index();
		$('.nav-left>div').css('display','none');
		$('.nav-left>div').eq(navindex).css('display','block');
		$(this).css('border','1px solid #90c31f')
		$(this).css('borderRight','0')
		$(this).siblings().css('borderRight','1px solid #90c31f')
	},function(){
		$('.nav-left').hover(function(){
			$('.nav-left>div').css('display','none');	
		})
		
	})

	$('.navfirst3 a').hover(function(){
		$(this).addClass('remenuactive')
	},function(){
		$('.navfirst1 a').removeClass('remenuactive')
	})

/**********************nav导航划过效果展示*************************************/
	$('.nav-right .item').hover(function(){				
		$(this).css('background','#77b001');
	},function(){
		$(this).css('background','#90c31f');
	})

/***************************banner中间轮播图********************************************/	
	var client=0;		
	var $banner=$('.bannerbox li');
	var $odot=$('.dot b');
	if(client==0){
		$('#bannerwrap').css('background','rgb(255, 241, 17)');
	};
	function obanner(){									
		timer=setInterval(function(){
			client++;
			if(client>$banner.size()-1){
				client=0;			
			}
			$banner.fadeOut(500);						//透明度逐渐消失
			$banner.eq(client).fadeIn(500);				//透明度逐渐显示
			$odot.removeClass('active')
			$odot.eq(client).addClass('active')
			if(client==0){	
				$('#bannerwrap').css('background','rgb(255, 241, 17)').fadeIn(1000);	//背景图变化
			}
			if(client==1){
				$('#bannerwrap').css('background','rgb(203, 231, 235)').fadeIn(1000);
			}
			if(client==2){
				$('#bannerwrap').css('background','rgb(90, 70, 51)').fadeIn(1000);
			}
			if(client==3){
				$('#bannerwrap').css('background','rgb(111, 186, 241)').fadeIn(1000);
			}
		},4000)		
	}
	obanner()

	$banner.on('mouseover',function(){
		clearInterval(timer);
		$('.bannerbtn-left').css('display','block')
		$('.bannerbtn-right').css('display','block')
	})

	$('.bannerbtn-left').on('mouseenter',function(){
		clearInterval(timer);
		$('.bannerbtn-left').css('display','block')
		$('.bannerbtn-right').css('display','block')			
		$('.bannerbtn-left').css({'opacity':1})
	})
	$('.bannerbtn-left').on('mouseout',function(){
		$('.bannerbtn-left').css({'opacity':0.7})
		obanner()
	})		
	
	$('.bannerbtn-right').on('mouseover',function(){
		clearInterval(timer);
		$('.bannerbtn-left').css('display','block')
		$('.bannerbtn-right').css('display','block')			
		$('.bannerbtn-right').css({'opacity':1})
	})
	$('.bannerbtn-right').on('mouseout',function(){
		$('.bannerbtn-right').css({'opacity':0.7})
		obanner()

	})	

	$('.bannerbtn-right').stop(true,false).on('click',function(){
		clearInterval(timer);
		client++;
		if(client>$banner.size()-1){
			client=0;			
		}
		$banner.fadeOut(500);						//透明度逐渐消失
		$banner.eq(client).fadeIn(500);				//透明度逐渐显示
		$odot.removeClass('active')
		$odot.eq(client).addClass('active')
		if(client==0){	
			$('#bannerwrap').css('background','rgb(255, 241, 17)').fadeIn(1000);	//背景图变化
		}
		if(client==1){
			$('#bannerwrap').css('background','rgb(203, 231, 235)').fadeIn(1000);
		}
		if(client==2){
			$('#bannerwrap').css('background','rgb(90, 70, 51)').fadeIn(1000);
		}
		if(client==3){
			$('#bannerwrap').css('background','rgb(111, 186, 241)').fadeIn(1000);
		}				

	})		

	$('.bannerbtn-left').stop(true,false).on('click',function(){
		clearInterval(timer);
		client--;
		if(client<0){
			client=$banner.size()-1;			
		}
		$banner.fadeOut(500);						//透明度逐渐消失
		$banner.eq(client).fadeIn(500);				//透明度逐渐显示
		$odot.removeClass('active')
		$odot.eq(client).addClass('active')
		if(client==0){	
			$('#bannerwrap').css('background','rgb(255, 241, 17)').fadeIn(1000);	//背景图变化
		}
		if(client==1){
			$('#bannerwrap').css('background','rgb(203, 231, 235)').fadeIn(1000);
		}
		if(client==2){
			$('#bannerwrap').css('background','rgb(90, 70, 51)').fadeIn(1000);
		}
		if(client==3){
			$('#bannerwrap').css('background','rgb(111, 186, 241)').fadeIn(1000);
		}				
	
	})

	$banner.on('mouseleave',function(){
		obanner()
		$('.bannerbtn-left').css('display','none')
		$('.bannerbtn-right').css('display','none')

	})	
	$odot.on('mouseenter',function(){							//按钮控制
		clearInterval(timer);
		$odot.removeClass('active')
		$(this).addClass('active')
		client=$(this).index();
		$banner.stop(true,true).fadeOut(500)
		$banner.eq(client).stop(true,true).fadeIn(500)
		if(client==0){
			$('#bannerwrap').css('background','rgb(255, 241, 17)').fadeIn(1000);
		}
		if(client==1){
			$('#bannerwrap').css('background','rgb(203, 231, 235)').fadeIn(1000);
		}
		if(client==2){
			$('#bannerwrap').css('background','rgb(90, 70, 51)').fadeIn(1000);
		}
		if(client==3){
			$('#bannerwrap').css('background','rgb(111, 186, 241)').fadeIn(1000);
		}		

	})
	$odot.on('mouseleave',function(){
		obanner()
	})
/***************************banner右边轮播图********************************************/
	var clearTime = null; 
	var $index = 0;
	var $qiandex = 0; 

	function scrollPlay() {
		$(".bannerright>.baniubottom>li").eq($index).addClass("changebg").siblings().removeClass("changebg");
		// if ($index == 0 && $qiandex == 1) {/** 第一张图片左移 **/
		// 	$(".bannerright .baniutop>li").eq($qiandex).stop(true, true).animate({
		// 		"left": "218px"
		// 	});
		// 	$(".bannerright .baniutop>li").eq($index).css("left", "218px").stop(true, true).animate({
		// 		"left": "0"
		// 	});			
		// }else if($index == 1 && $qiandex == 0) {/** 最后一张图片右移动 **/
		// 	$(".bannerright .baniutop>li").eq($qiandex).stop(true, true).animate({
		// 		"left": "218px"
		// 	});
		// 	$(".bannerright .baniutop>li").eq($index).css("left", "-218px").stop(true, true).animate({
		// 		"left": "0"
		// 	});}else 
		if($index > $qiandex) {				//左移
			$(".bannerright .baniutop>li").eq($qiandex).stop(true, true).animate({
				"left": "-218px"
			});
			$(".bannerright .baniutop>li").eq($index).css("left", "218px").stop(true, true).animate({
				"left": "0"
			});

		}else if($index < $qiandex){
			$(".bannerright .baniutop>li").eq($qiandex).stop(true, true).animate({
				"left": "218px"
			});
			$(".bannerright .baniutop>li").eq($index).css("left", "-218px").stop(true, true).animate({
				"left": "0"		
			})	
		}
	}

	function autoPlay() {
	
		
		bannerTime = setInterval(function() {
			$index++;					// 默认当前索引自增1，播放下一张图片
			if ($index > 1) {				// 如果已经是最后一张图片
				$index = 0;					// 重新设置要播放的图片索引为第一张图片$index=0
				$qiandex = 1;				// 重新设置上一张图片索引为最后一张图片$qiandex=0
			}
			// 调用函数执行图片滚动动画
			scrollPlay();
			// 更新索引，将当前图片索引值，赋值给上一张图片索引值
			$qiandex = $index;
		
		}, 3000);	
	
	
		
	}
	// 开始自动播放
	autoPlay();
	//
	$(".bannerright .baniubottom li").mouseenter(function() {
		clearInterval(bannerTime);// 
		$index = $(this).index(); //获取当前【小圆点】序列号
		scrollPlay();
		$qiandex = $index; //把当前的值赋给下一次的前一个序列号
	})

	$('.bannerright').mouseenter(function(){
		clearInterval(bannerTime);		
	})
	$('.bannerright').mouseleave(function(){
		autoPlay()		
	})
	/******************可得秒杀选项卡*******************************************/
 	$('.contentbottom1 .jz').hover(function(){
 		$('.contentbottom1 .jz').css('background-position',"0px 0px")
 		$('.contentbottom1 .zd').css('background-position',"0px -91px")
 	},function(){
 	})
 	$('.contentbottom1 .zd').hover(function(){
 		$('.contentbottom1 .zd').css('background-position',"0px -273px")
 		 $('.contentbottom1 .jz').css('background-position',"0px -182px")
 	},function(){
 	})

 	/******************楼层精选和热门分类*******************************************/	
 	$('.f1menulist a').hover(function(){
 		$(this).css('color','#ff6600')
 	},function(){
 		$(this).css('color','#666') 		
 	})


/***************************f4banner左边轮播图********************************************/
	// var f4clearTime = null; 
	// var $f4index = 0;
	// var $f4qiandex = 0; 
	// function f4scrollPlay() {
	// 	$(".f4bannerright .f4baniubottom li").eq($f4index).addClass("changebg").siblings().removeClass("changebg");
	// 	if ($f4index == 0 && $f4qiandex == 1) {/** 第一张图片左移 **/
	// 		$(".f4bannerright .f4baniutop li").eq($f4qiandex).stop(true, true).animate({
	// 			"left": "710px"
	// 		});
	// 		$(".f4bannerright .f4baniutop li").eq($f4index).css("left", "-710px").stop(true, true).animate({
	// 			"left": "0"
	// 		});			
	// 	}else if($f4index == 1 && $f4qiandex == 0) {/** 最后一张图片右移动 **/
	// 		$(".f4bannerright .f4baniutop li").eq($f4qiandex).stop(true, true).animate({
	// 			"left": "-710px"
	// 		});
	// 		$(".f4bannerright .f4baniutop li").eq($f4index).css("left", "710px").stop(true, true).animate({
	// 			"left": "0"
	// 		});
	// 	} 
	// }

	// function f4autoPlay() {
	// 	f4bannerTime = setInterval(function() {
	// 		$f4index++;					// 默认当前索引自增1，播放下一张图片
	// 		if ($f4index > 1) {				// 如果已经是最后一张图片
	// 			$f4index = 0;					// 重新设置要播放的图片索引为第一张图片$index=0
	// 			$f4qiandex = 1;				// 重新设置上一张图片索引为最后一张图片$qiandex=1
	// 		}
	// 		// 调用函数执行图片滚动动画
	// 		f4scrollPlay();
	// 		// 更新索引，将当前图片索引值，赋值给上一张图片索引值
	// 		$f4qiandex = $f4index;
	// 	}, 3000);
		
	// }
	// // 开始自动播放
	// f4autoPlay();
	
	// $(".f4bannerright .f4baniubottom li").mouseover(function() {
	// 	clearInterval(f4bannerTime); 
	// 	$f4index = $(this).index(); //获取当前【小圆点】序列号
	// 	f4scrollPlay();
	// 	$f4qiandex = $f4index; //把当前的值赋给下一次的前一个序列号
	// }).mouseout(function(){
	// 	f4autoPlay();// 鼠标移出时自动播放
	// });

	// $('.f4bannerright').mouseenter(function(){
	// 	clearInterval(f4bannerTime);		
	// })
	// $('.f4bannerright').mouseleave(function(){
	// 	f4autoPlay()		
	// })



	// /******************可得秒杀选项卡*******************************************/
 // 	$('.f4contentbottom1 .jz').hover(function(){
 // 		$('.f4contentbottom1 .jz').css('background-position',"0px 0px")
 // 		$('.f4contentbottom1 .zd').css('background-position',"0px -91px")
 // 	},function(){
 // 	})
 // 	$('.f4contentbottom1 .zd').hover(function(){
 // 		$('.f4contentbottom1 .zd').css('background-position',"0px -273px")
 // 		 $('.f4contentbottom1 .jz').css('background-position',"0px -182px")
 // 	},function(){
 // 	})

 /******************inex选项卡shop*******************************************/
	$('.shoptab li').hover(function(){
		$('.shoptab li').removeClass('on')		
		$(this).addClass('on')
	},function(){

	})

 /******************主页文章选项卡*******************************************/	
 	$('.articleft ul li').hover(function(){
 		var currentindex=$(this).index();
 		$('.articleft ul li').removeClass('first')
 		$('.articleft>div').css('display','none')
 		$(this).addClass('first')
 		$('.articleft>div').eq(currentindex).css('display','block')	
 	})
 	$('.articleft>div>a').hover(function(){
 		$('.articleft>div>a').css('color','#666')
 		$(this).css('color','#ff6600')
 	})








})
