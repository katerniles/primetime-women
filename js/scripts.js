//$(document).ready(function(){
	//alert("Document is ready!");
$("#button").on("click", function() {
	//all your code goes in here
	console.log("clicked");
	$("#visible-comment").html(comment);
	var comment = $(".comment-box").val();
	return false;
}); // no more code below here