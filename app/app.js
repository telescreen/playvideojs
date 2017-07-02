(function() {
    let videos = [videojs("pnet_video"), videojs("exc_video")];
    // Controls
    var handle = $('#custom-handle');
    $('#playback_rate').slider({
        orientation: "horizontal",
        range: "min",
        step: 0.25,
        max: 3,
        value: 1,
        create: function() {
            handle.text( $( this ).slider( "value" ) );
        },
        slide: function( event, ui ) {
            handle.text( ui.value );
            videos.forEach(function(video) {
                video.playbackRate(ui.value);
            });
        }
    });

    videos.forEach(function(video) {
        video.on('waiting', function(event) {
            $('#' + this.id() + '_status').text('waiting');
        });
        video.on('playing', function(event) {
            $('#' + this.id() + '_status').text('playing');
        });
        video.on('pause', function(event) {
            $('#' + this.id() + '_status').text('pause');
        });
        video.on('canplay', function(event) {
            $('#' + this.id() + '_status').text('ready');
        });
    })

    $("#play").click(function() {
        videos.forEach(function(video) {
            video.play();
        });
    });

    $("#pause").click(function() {
        videos.forEach(function(video) {
            video.pause();
        });
    });
})();