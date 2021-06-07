$(function() {
// 런치패드 변수 지정
	box = $('.box');
	rowLength = box.first().children().length;
	labels = $('label');
	beat = 0;
	i = 0;

	function enjoy_beat()
	{
		$('.pause').css({opacity:"0.5", "pointer-events":"none"});
		$('.temp_pause').css({opacity:"0.5", "pointer-events":"none"});
		$('.play').css({opacity:"0.5", "pointer-events":"none"});
		lamp = $(".rythem").children().eq(i);
		lamp.css({color:"yellow"});
		if(i!=4)window.hiHat();
		i++;
		if (i>4) 
		{
			$(".rythem").children().css({color:"white"});
			beat = 1;
			$('.pause').css({opacity:"1", "pointer-events":"all"});
			$('.temp_pause').css({opacity:"1", "pointer-events":"all"});
			$('.play').css({opacity:"0.5", "pointer-events":"all"});
			clearInterval(ej_beat);
		}
	}
	// 런치패드 지정
	function sequencer () {
	if(i==5)
	{
		labels.removeClass('active');
		$(box).each(function() {
		  current = $(this).children().eq(beat);
		  current.addClass('active');
  
		if (current.find('input').is(":checked")) {
		  targetDrum = (current.parent().attr('drum'));
			  fn = window[targetDrum];
				  if (typeof fn === "function") {fn();}
			  }
	  });
  
  
		//마지막 행일 경우 돌아감
		if ( beat < (rowLength - 1) ) {
		  ++beat;
		} else {
		  beat = 1;
		}
	}
	
	}

// 재생 및 중지
	Start = false; //재생 상태
	//재생
	$('.play').click(function () {
		if (!Start)
		{
			if(i != 5)
			{
				ej_beat = window.setInterval(enjoy_beat,interval);
			}
			
			intervalId = window.setInterval(sequencer, interval);
			Start = true;
			$('.play').css({opacity:"0.5",cursor:"unset"});
			$('.temp_pause').css({opacity:"1",cursor:"pointer"});
		}
	});
	//일시정지
	$('.temp_pause').click(function () {
		if (Start)
		{
			window.clearInterval(intervalId);
			Start = false;
			$('.temp_pause').css({opacity:"0.5", cursor:"unset"});
			$('.play').css({opacity:"1", cursor:"pointer"});
		}
	});
	//정지
	$('.pause').click(function () {
			window.clearInterval(intervalId);
			Start = false;
			$('.temp_pause').css({opacity:"0.5", cursor:"pointer"});
			$('.play').css({opacity:"1", cursor:"pointer"});
			beat = 0;
			sequencer();
			i=0;
	});
});