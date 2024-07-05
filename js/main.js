$(document).ready(function () {
  // Rolling Banner

  let recommendSlider = $("#recommendedPlaylist");
  recommendSlider.marquee({
    speed: 1000,
    duplicated: true,
    allowCss3Support: true,
    gap: 0,
    startVisible: true,
    direction: "left",
    pauseOnHover: true,
  });
});

// $('.marquee').marquee({
// 	//marquee 지속시간
// 	duration: 15000,
// 	//복제된 요소와의 간격
// 	gap: 50,
// 	//시작 delay시간
// 	delayBeforeStart: 0,
// 	//marquee방향
// 	direction: 'left',
// 	//요소 복제 여부
// 	duplicated: true
// });
