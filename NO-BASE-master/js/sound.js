$(function() {

//심벌
	crash = $('crash');
	crashAudio = $('#Drum-crash');

//스네어
	snare = $('snare');
	snareAudio = $('#Drum-snare');

//킥
	kick = $('kick');
	kickAudio = $('#Drum-kick');

//햇
	hihat = $('hihat');
	hiHatClosedAudio = $('#Drum-hihat');


	// 변수 지정 (심벌)
	var crashtl = new TimelineMax({paused: true});
	crashtl.to(crash, 0.1, {rotation: 8, transformOrigin: "50% 50%"})
	       .to(crash,1.5, {rotation: 0, transformOrigin: "50% 50%", ease: Elastic.easeOut.config(2.5, 0.3)});

	// 변수 지정 (스네어)
	var snaretl = new TimelineMax({paused: true});
	snaretl.to(snare, 0.1, {scaleX: 1.04, transformOrigin: "50% 50%", ease: Expo.easeOut})
	       .to(snare, 0.1, {scaleY: 0.9, transformOrigin: "50% 100%", ease: Expo.easeOut}, '0')
	       .to(snare, 0.4, {scale: 1, transformOrigin: "50% 100%", ease: Elastic.easeOut});

	// 변수 지정 (킥)
	var kicktl = new TimelineMax({paused: true});
	kicktl.to(kick, 0.1, {scale: 1.02, transformOrigin: "50% 100%", ease: Expo.easeOut})
	      .to(kick, 0.4, {scale: 1, transformOrigin: "50% 100%", ease: Elastic.easeOut});

	//변수 지정 (햇)
	var hiHattl = new TimelineMax({paused: true});
	hiHattl.to(hihat, 0.1, {rotation: -4, transformOrigin: "50% 50%"})
	       .to(hihat, 0.6, {rotation: 0, transformOrigin: "50% 50%", ease: Elastic.easeOut.config(1.5, 0.2)});




// 심벌 재생
	window.crash = function() {
		crashtl.restart();
		crashtl.play();
		var crashAudioEl = crashAudio.get(0);
		crashAudioEl.currentTime = 0;
		crashAudioEl.play();
	};

// 스네어 재생
	window.snare = function(){
		snaretl.restart();
		snaretl.play();
		var snareAudioEl = snareAudio.get(0);
		snareAudioEl.currentTime = 0;
		snareAudioEl.play();
	};

// 킥 재생
	window.kick = function(){
		kicktl.restart();
		kicktl.play();
		var kickAudioEl = kickAudio.get(0);
		kickAudioEl.currentTime = 0;
		kickAudioEl.play();
	};

// 햇 재생
	window.hiHat = function() {
		hiHattl.restart();
		hiHattl.play();
		var hiHatClosedAudioEl = hiHatClosedAudio.get(0);
		hiHatClosedAudioEl.currentTime = 0;
		hiHatClosedAudioEl.play();
	};

// 여기서부터 Guitar (Palm-mute / Drive 구성해야 함)

});
