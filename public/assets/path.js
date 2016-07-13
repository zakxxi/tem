/*global $:true Popcorn:true*/

$(function() {
	$.popcorn = Popcorn('#audioElt');
	$("#mp3_src").attr("src",pathData.audiourl);
});
