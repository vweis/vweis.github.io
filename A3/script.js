var allImages = [
  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Pied-winged_swallow_%28Hirundo_leucosoma%29.jpg/1280px-Pied-winged_swallow_%28Hirundo_leucosoma%29.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Rufous-tailed_flycatcher_%28Myiarchus_validus%29.JPG/1024px-Rufous-tailed_flycatcher_%28Myiarchus_validus%29.JPG',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Bare-faced_curassow_%28Crax_fasciolata%29_female_head.JPG/1024px-Bare-faced_curassow_%28Crax_fasciolata%29_female_head.JPG',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Savanna_hawk_%28Buteogallus_meridionalis%29.JPG/800px-Savanna_hawk_%28Buteogallus_meridionalis%29.JPG'
];

var currentSlide = 1;

var start = function()
{
  var markup = "";
  for(var i = 0; i < allImages.length; i++){
    var imgURL = allImages[i];
    markup = markup + "<div class='slide' style='background-image:url(" + imgURL + ")'></div>";
  }

  /*
  var i = 0;
  while(i < allImages.length){
    var imgURL = allImages[i];
    markup = markup + "<div class='slide' style='background-image:url(" + imgURL + ")'></div>";
    i = i + 1;
  }
   */
  $("#ssContainer").html(markup);

  var markup1 = "";
  for(var i = 0; i < allImages.length; i++){
    markup1 = markup1 + '<button onclick="goToSlide(' + (i + 1) + ',1000)">' + (i + 1) + '</button>';
  }
  $("#numContainer").html(markup1);
  


  goToSlide(1, 0);
}


var goToSlide = function(n, d)
{
  d = d || 0;
 /* $("#ssContainer .slide").stop().show("slide, left, d")
  $("#ssContainer .slide:nth-of-type(" + n + ")").stop().show("slide, left, d");
*/
$(".slide").stop().removeClass("currentSlide").removeClass("leftSlide").removeClass("rightSlide");

$(".slide:nth-of-type(" + n + ")").addClass("currentSlide");
$(".currentSlide").animate({
  left: "0px"
}, 500); 
var l = 0
while (l < n) {
  $(".slide:nth-of-type(" + l + ")").addClass("leftSlide");
  l++;
}
$(".leftSlide").animate({
  left: "-100%"
}, 500);
var r = 0
r = n + 1
while (r < (allImages.length + 1)) {
  $(".slide:nth-of-type(" + r + ")").addClass("rightSlide");
  r++;
}
$(".rightSlide").animate({
  left: "100%"
}, 500); 

  $("#numContainer button").removeClass("active");
  $("#numContainer button:nth-of-type(" + n + ")").addClass("active");

  currentSlide = n;
}


var goNext = function()
{
  var n = currentSlide + 1;
  if (n > allImages.length){
    n = 1;
  } 
  goToSlide(n, 1000);
}

var goPrev = function()
{
  var n = currentSlide - 1;
  if (n < 1){
    n = allImages.length;
  } 
  goToSlide(n, 1000);
}
