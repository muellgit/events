$(window).on("load", function() {
	//	alert("hihi");
	//	alert($("iframe[class*='aachen'][id*='EVENTS']").css('display'));
    $("div[class*='holderCITY'").hide();
    $(".holder iframe:not([id*='EVENTS'])").addClass('holder-background');
});

$(document).ready(function(){
    /*
    //Toggle all clubs of a city button
    //
    */
    /*



    /*
    //Toggle a whole city button
    //
    */
        jQuery.fn.visible = function() {
    return this.css('visibility', 'visible');
};

jQuery.fn.invisible = function() {
    return this.css('visibility', 'hidden');
};

jQuery.fn.toggleVisibility = function() {
    return this.css('visibility', function(i, visibility) {
        return (visibility == 'visible') ? 'hidden' : 'visible';
    });
};


    $("h2").click(function s(){
        var t = $( this ).attr( "title" );
        var c = t + "CITY";
        $("div[class*="+c+"]").fadeToggle();
        $(this).toggleClass("special");
        $("button[class*='clubsButton'][name*="+t+"]").toggleVisibility();
    });

    /*
    //Toggle a all clubs in a city button
    //
    */

   // $("button[class*='clubsButton']").each(function(i, obj){
    $("button[class*='clubsButton']").click(function s(){
        var action = "hide";
        var c = $(this).attr('name');
        $("iframe[class*="+c+"][id*='EVENTS']").each(function(i, obj){
            if ( $(this).css( "display" ) == 'none'  ){
                action = "show";
            }
            return;
        });
        if (action == "show") {
            $("iframe[class*="+c+"][id*='EVENTS']").show();
            $("iframe[class*="+c+"]:not([id*='EVENTS'])").hide();
            }
         else {
            $("iframe[class*="+c+"][id*='EVENTS']").hide();
            $("iframe[class*="+c+"]:not([id*='EVENTS'])").show();
        }
    });
  //  });

	/*
    //boxes with fb-events
    /*/
    $("iframe[id*='EVENTS'").hide();
    $("div[id*='CLICK']").each(function(i, obj){
        $("#"+$(this).attr('id')).click(function s(){
          var club = $(this).attr('id').slice(0,-5);
          $("#"+club).toggle();
          $("#"+club+"EVENTS").toggle();
          $("iframe[id*='EVENTS']").toggleClass('noevent-background');
        });
    });

	/*
    //Scroll up button
    //
    */
    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $("#toTop").fadeIn("slow", "swing");
        } else {
            $("#toTop").fadeOut("slow", "swing");
        }
        if($(window).scrollTop() + $(window).height() < $(document).height() - $("#footer").height()) {
            //$('#toTop').css("position","fixed");    //resetting it
            $('#toTop').css("bottom","0"); //resetting it
        }
        if($(window).scrollTop() + $(window).height() > $(document).height() - $("#footer").height()) {
            //$('#toTop').css("position","relative"); // make it related
            $('#toTop').css("bottom","8px"); // 60 px, height of #toTop
        }
    });
    $("#toTop").click(function() {
        $("html, body").animate({scrollTop: 0}, 1300);
    });

  /*
  //Light off button
  //
  */
  var l = 0x0; //initialize to turn light off
  var fc = 0xf; //initialize to make font color white
  $("#but").click(function s(){
    //initial state causes
    //black (paint = 000000) paint color and
    //inverted color white (invert = ffffff)
    var paint = l.toString(16)
    +l.toString(16)+l.toString(16)+l.toString(16)+l.toString(16)+l.toString(16);
    var invert = fc.toString(16)
    +fc.toString(16)+fc.toString(16)+fc.toString(16)+fc.toString(16)+fc.toString(16);

    //change colors and icons
    $("a.ra").removeClass("ralogo-"+invert); $("a.ra").addClass("ralogo-"+paint);
    $("body").css("background-color", "#"+paint);
    $("a.ohell").toggleClass('ohellcolor');
    $("span.oh").toggleClass('ohcolor');
    $("body").css("color", "#"+invert);
    $(":after").css("color", "#"+invert);
    var styleElem = document.head.appendChild(document.createElement("style"));
    styleElem.innerHTML = "h2:after {color: "+"#"+invert+" !important;}";
    if ( l == 0 ) {
        $(this).val('☀');
        $(this).css("color","orange");
    }
    else{
        $(this).val('👓');
        //$(this).css("background-color","black");
        }
    //apply new switch state
    fc = l;
    l = Math.abs(l - 0xf);
  });


    /*
    //Resident Advisor button
    //
    */
    var MyDate = new Date();
    var MyDateString;
    MyDateString = MyDate.getFullYear() + '-' + ('0' + (MyDate.getMonth()+1)).slice(-2) + '-' + ('0' + MyDate.getDate()).slice(-2);
    $("a[class*='ra']").each(function(i, obj){
      $(this).attr('href', "https://www.residentadvisor.net/events"+$(this).attr('id')+"/week/"+MyDateString);
    });
});
