/*global $:true Popcorn:true*/

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
                }, 2000, 'swing');
                //TODO : Implement scrolling to chapter
            }
        };
    }

    for (var i = 0; i < pathData.cues.length; i++) {
        var go = new goer(i, pathData.cues[i]);
        $.popcorn.cue(pathData.cues[i].pos, go.to);
    }



});
