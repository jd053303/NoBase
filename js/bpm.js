$(function() {
// BPM 변수 설정
	bpm = 150;
	interval = 60000 / bpm;

// BPM 지정
	function setTempo(){
		window.clearInterval(intervalId);
		// intervalId = window.setInterval(playarea, interval);
	}

// BPM 증가
	$('.bpm_up').click(function() {
		if ( bpm < 400 ) {
			bpm = parseInt($('#bpm').val());
			bpm += 10;
			interval = 60000 / bpm;
			$('#bpm').val(bpm);
			if(Start === true) {
				setTempo();
			}
		}
		$('.play').css({opacity:"1", cursor:"pointer"});       //추가
		$('.temp_pause').css({opacity:"0.5", cursor:"unset"}); //추가
		Start = false; 										   //추가
	});

//BPM 감소
	$('.bpm_down').click(function() {
		if ( bpm > 100 ) {
			bpm = parseInt($('#bpm').val());
			bpm -= 10;
			interval = 60000 / bpm;
			$('#bpm').val(bpm);
			if(Start === true) {
				setTempo();
			}
		}
		$('.play').css({opacity:"1", cursor:"pointer"});       //추가
		$('.temp_pause').css({opacity:"0.5", cursor:"unset"}); //추가
		Start = false; 	
	});
});