/*--------------------------MENU--------------------------*/
$(document).ready(function(){

$("div#header i#nav").click(function(){
  var margen=$("div#menu").css("margin-left");
  if(margen=="-1000px"){
    $("div#menu").animate({marginLeft:"0px"},800);
  }
});

$("div#menu i#close").click(function(){
    $("div#menu").animate({marginLeft:"-1000px"},800);
});

/*-------------------MAIN-NAVIGATIOR----------------------*/
var arrayImgs=["food.jpg","coffee6.jpg","hike.jpg","glasses.jpg","nasa.jpg"];
var info=[{"h1" : "Five super fruits you need right now",
           "p" : "Many neighborhoods in San Francisco have annual street festivals featuring live music, arts and crafts vendors, and community organizations. Among the largest of these are Castro Street Fair and Union Street Art Festival.",
           "img" : "food.jpg"},
          {"h1" : "Can coffee make you super human?",
           "p" : "Roasting coffee transforms the chemical and physical properties of green coffee beans into roasted coffee products. The roasting process is what produces the characteristic flavor of coffee.",
           "img" : "coffee6.jpg"},
          {"h1" : "On the hunt for adventure",
           "p" : "We sent our field reporters to the coast with a few cameras, a little cash and a single map to see if they could seek out an adventure. What came back were some of the best stories we've ever heard.",
           "img" : "hike.jpg"},
          {"h1" : "Don’t leave home without your sunglasses",
           "p" : "Brazil is the largest country in South America and fifth largest in the world. Famous for its football tradition and its annual Carnaval in Rio de Janeiro, Salvador, Recife and Olinda.",
           "img" : "glasses.jpg"},
          {"h1" : "Getting NASA back into outer space",
           "p" : "NASA is the United States government agency responsible for the civilian space program as well as aeronautics and aerospace research. President Dwight D. Eisenhower established the agency in 1958.",
           "img" : "nasa.jpg"}];
$("div#main-navigator").css({"background-image":"url("+info[0].img+")"});
$("div#main-navigator div#preview div#info h1").text(info[0].h1);
$("div#main-navigator div#preview div#info p").text(info[0].p);
var cont=0;

$("div#main-navigator i#siguiente").click(function(){
  cont++;
  if(cont>=info.length){
    cont=0;
  }
  $("div#main-navigator").css({"background-image":"url("+info[cont].img+")"});
  $("div#main-navigator div#preview div#info h1").text(info[cont].h1);
  $("div#main-navigator div#preview div#info p").text(info[cont].p);
});

$("div#main-navigator i#anterior").click(function(){
  cont--;
  if(cont<0){
    cont=info.length-1;
  }
  $("div#main-navigator").css({"background-image":"url("+info[cont].img+")"});
  $("div#main-navigator div#preview div#info h1").text(info[cont].h1);
  $("div#main-navigator div#preview div#info p").text(info[cont].p);
});

});
