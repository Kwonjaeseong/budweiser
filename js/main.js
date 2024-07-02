$(document).ready(function () {
  let winWidth = jQuery(window).width();

  // Rolling Banner
  let recommendSlider = $("#recommendedPlaylist");
  recommendSlider.marquee({
    speed: 500,
    duplicated: true,
    allowCss3Support: true,
    gap: 0,
    startVisible: true,
    direction: "left",
    pauseOnHover: false,
  });

  let playListDom = $("#recommendedPlaylist");

  if (winWidth > 1023) {
    playListDom.on({
      mouseenter: function () {
        recommendSlider.marquee("pause");
      },
      mouseleave: function () {
        recommendSlider.marquee("resume");
      },
    });
  } else {
    playListDom.off({
      mouseenter: function () {
        recommendSlider.marquee("pause");
      },
      mouseleave: function () {
        recommendSlider.marquee("resume");
      },
    });
  }

  // //

  // let recommendSlider02 = $('#recommendedPlaylist02');
  // recommendSlider02.marquee({
  //     speed: 500,
  //     duplicated: true,
  //     allowCss3Support: true,
  //     gap: 0,
  //     startVisible: true,
  //     direction: 'left',
  //     pauseOnHover: false
  // });

  // let playListDom02 = $('#recommendedPlaylist02');

  // if (winWidth > 1023) {
  //     playListDom02.on({
  //         mouseenter: function () {
  //             recommendSlider02.marquee('pause');
  //         },
  //         mouseleave: function () {
  //             recommendSlider02.marquee('resume');
  //         }
  //     });
  // } else {
  //     playListDom02.off({
  //         mouseenter: function () {
  //             recommendSlider02.marquee('pause');
  //         },
  //         mouseleave: function () {
  //             recommendSlider02.marquee('resume');
  //         }
  //     });
  // }

  //

  // let recommendSlider03 = $('#recommendedPlaylist03');
  // recommendSlider03.marquee({
  //     speed: 500,
  //     duplicated: true,
  //     allowCss3Support: true,
  //     gap: 0,
  //     startVisible: true,
  //     direction: 'left',
  //     pauseOnHover: false
  // });

  // let playListDom03 = $('#recommendedPlaylist03');

  // if (winWidth > 1023) {
  //     playListDom03.on({
  //         mouseenter: function () {
  //             recommendSlider03.marquee('pause');
  //         },
  //         mouseleave: function () {
  //             recommendSlider03.marquee('resume');
  //         }
  //     });
  // } else {
  //     playListDom03.off({
  //         mouseenter: function () {
  //             recommendSlider03.marquee('pause');
  //         },
  //         mouseleave: function () {
  //             recommendSlider03.marquee('resume');
  //         }
  //     });
  // }
});
