/*global $:true Popcorn:true*/


//target the entire page, and listen for touch events
$('html, body').on('touchmove', function(e){ 
     //prevent native touch activity like scrolling
     e.preventDefault(); 
});


var currentCue = 0;

function zfill(num, len) {
    return (Array(len).join("0") + num).slice(-len);
}

$(function() {
    $.popcorn = Popcorn('#audioElt');

    $.popcorn.on("timeupdate", function() {
        var tc = Math.floor($.popcorn.currentTime());
        $("#currentCue").text(Math.floor(tc / 60) + ":" + zfill(tc % 60, 2));
    });

    function goer(idx, obj) {
        var chapter = obj;
        chapter["idx"] = idx;
        chapter["elt"] = $("#chapter" + idx);
        return {
            to: function() {
                console.log(chapter.elt);
                currentCue = chapter.pos;
                $('html,body').animate({
                    scrollTop: chapter.elt.offset().top -300
                }, 2000, 'swing',
                function(){
                  $('.chapterTitle').removeClass('playing');
                  chapter.elt.addClass('playing');
                });
            }
        };
    }

    for (var i = 0; i < pathData.cues.length; i++) {
        var go = new goer(i, pathData.cues[i]);
        $.popcorn.cue(pathData.cues[i].pos, go.to);
    }

});

// UI CONTROLS

$('.play').on('click', function (e) {
  $.popcorn.play();
  $('.play').toggleClass('hide');
  $('.pause').toggleClass('hide');
})

$('.pause').on('click', function (e) {
  $.popcorn.pause();
  $('.play').toggleClass('hide');
  $('.pause').toggleClass('hide');
})

$('.rewind').on('click', function (e) {
  $.popcorn.currentTime(currentCue)
})
