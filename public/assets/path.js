/*global $:true Popcorn:true*/
$(function() {
    $.popcorn = Popcorn('#audioElt');

    function goer(id) {
        var chapterId = id;
        return {
            to: function() {
                console.log("cue ", chapterId);
                //TODO : Implement scrolling to chapter
            }
        };
    }

    for (var i = 0; i < pathData.cues.length; i++) {
        var go = new goer("chapter" + i);
        $.popcorn.cue(pathData.cues[i].pos, go.to);
    }
});
