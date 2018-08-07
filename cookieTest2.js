var flossCount = 0;
var drCount = 0;
var offSet = 3;

var cookieCount = 0;
var jadidCookie = 0;


function add(){
  cookieCount++;
  someOtherOtherCode();

  $(".Dr").on("click", function adddis(){
    cookieCount = cookieCount + 50;
    $(".progress-bar").stop();
    $(".progress-bar").css("width", "0");

    time = 10000;
    document.getElementById("text").value  = cookieCount;
    document.title = cookieCount + " Cookies";

    drCount = 0;
    $(".Dr").fadeOut();
    someCode();
    someOtherCode();
    blimbloom();
  });
  flossPower();
  document.getElementById("text").value  = cookieCount;
  document.title = cookieCount + " Cookies";
};



function flossPower() {


//==========================floss++========================
        if( ((cookieCount % offSet) == 0) && (flossCount == 0)){
          flossCount++;
          $(".powerBubblesList").append("<button type=\"button\" id=\"flossin\" class=\"btn Flossing\">Flossing</button>");
        }

        else if( ((cookieCount % offSet) == 0) && (flossCount >=1)){
          flossCount++;
        }

//==========================dentalVisit++========================
        if( ((cookieCount % 100 ) == 0) && (drCount == 0)){
          drCount++;
          $(".powerBubblesList").append("<button type=\"button\" id=\"dr\" class=\"btn Dr\">Dentist Visit</button>");
        }

        else if( ((cookieCount % 100 ) == 0) && (drCount >=1)){
          drCount++;
          $(".Dr").text("Dentist Visit"+ drCount);
        }



    $(".Flossing").on("click", function(){
      $(".progress-bar").stop();
      $(".progress-bar").css("width", "0");
      time = time - 80;

//==========later Update ver0.1.1=========
          // if( flossCount >= 2){
          //
          //   flossCount--;
          //   // $(".Flossing").text( "Flossing "+ flossCount);
          //   // document.getElementsByClassName("Flossing").innerHTML = "Flossing Cam shod";
          //   // flossCount = flossCountCam;
          //
          //   // document.title = flossCount;    for check
          //
          //   // return false;
          //
          // }

          if( flossCount == 1){
            flossCount--;
            $(".Flossing").fadeOut(100);

          }

      someCode();
      glyphFloss();
      // blimbloom();
      });







}


var time = 10000;
function someCode(){

  $(".progress-bar").animate({"width": "100%"}, time , function(){
    document.title = "GameOver";
    $(".wholeGameCanvas").fadeOut(300, function() {
       $("body").append($(" <div class=\"GameOver\"> <div id= \"topEnd\"></div>  Game Over</div>  <button class=\"TryAgain\"> Try Again</button> ").fadeIn(3000));
       document.getElementById("topEnd").innerHTML  = "Score: "+cookieCount;
       $(".TryAgain").on("click", function() {
         location.reload();
       });

     });
  });



};



function someOtherCode(){

    $(".cookieCanvas").append("<div class=\"plusOneCanvas glyphicon glyphicon-plus-sign\"></div>");
    $(".plusOneCanvas").animate({top: '-60px',opacity:'0'}, 400,"linear",function()
                {
                    $(this).remove();
                });




};


function glyphFloss(){

    $(".cookieCanvas").append("<div class=\"plusOneCanvas glyphicon glyphicon-backward\"></div>");
    $(".plusOneCanvas").animate({top: '-60px',opacity:'0'}, 400,"linear",function()
                {
                    $(this).remove();
                });




};



function someOtherOtherCode(){
        $(".cookieCanvas").append("<div class=\"plusOneCanvas\">+1</div>");
        $(".plusOneCanvas").animate({top: '200px',opacity:'0'}, 400,"linear",function()
                    {
                        $(this).remove();
                    });
};
