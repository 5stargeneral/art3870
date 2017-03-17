



$(document).ready(function(){
  //when the document is ready, do a bunch of stuff
  //console.log("oh glorious master, your document is read!");

  var fromTop=0;


  $(window).scroll(function(){
    //when you are scrolling do a bunch of stuff
    //fromLeft = $(window).scrollLeft();
    console.log(fromTop);

    fromTop = $(window).scrollTop();
    //update the variable from Top to the current pixels count

    if (fromTop < 2000 && fromTop <3000){
        $("#one").css({"display":"block"});
            console.log("sho block #one");
    }else {

      $("#one").css({"display":"none"});
        console.log("hide block #one");
     }


     if (fromTop > 3000 && fromTop < 4000){
         $("#two").css({"display":"block"});
             console.log("sho block #two");
     }else {
       $("#two").css({"display":"none"});
         console.log("hide block #two");
      }
      if (fromTop>=4000 && fromTop < 5000){


          $("#three").css({"display":"block"});
              console.log("sho block three");
      }else {

        $("#three").css({"display":"none"});
          console.log("hide block three");
       }


// BLOCK FOUR
       if (fromTop > 5000 && fromTop < 6000){
           $("#four").css({"display":"block"});
               console.log("sho block four");
       }else {
          $("#four").css({"display":"none"});
           console.log("hide block four");
        }

// BLOCK FIVE
        if (fromTop>=6000 && fromTop < 7000){


            $("#five").css({"display":"block"});
                console.log("sho block");
        }else {

          $("#five").css({"display":"none"});
            console.log("hide block five");
         }
         if (fromTop>=7000){


             $("#six").css({"display":"block"});
                 console.log("sho block six");
         }else {

           $("#six").css({"display":"none"});
             console.log("hide block six");
          }

      $("#one").css({"top":10+fromTop*1.1+"px"});
     //$("#one").css({"top":10+fromTop*1.1+"px"});
      $("#two").css({"top":50+fromTop*.9+"px"});
    $("#three").css({"top":100+fromTop*1.1+"px"});


$("#one").css({"top":10+fromTop * 1+"px"});
$("#two").css({"top":10+fromTop * 1.01+"px"});
$("#three").css({"top":10+fromTop * 1.03+"px"});
$("#four").css({"top":10+fromTop * 1.05+"px"});
$("#five").css({"top":10+fromTop * 1.07+"px"});
$("#six").css({"top":10+fromTop * 1.09+"px"});







  });//close.scroll
});//close.ready
