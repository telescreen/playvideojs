(function() {
    let video1 = videojs("video1");
    let video2 = videojs("video2");

    $("#play").click(function() {
        video1.play();
        video2.play();
    });

    $("#stop").click(function() {
        video1.pause();
        video2.pause();
    });
})();