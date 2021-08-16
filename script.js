  var theWorld = ["earth", "africa+contenent", "antarctica+contenent", "asia", "australia+contenent", "europe+contenent", "north+america", "south+america" ]
  
  var x = [theWorld[0]];

  hideButtons();  

  function hideButtons() {
    $("#africa").hide();
    $("#antarctica").hide();
    $("#asia").hide();
    $("#australia").hide();
    $("#europe").hide();
    $("#northAmerica").hide();
    $("#southAmerica").hide();
  };

$('#theEarth').on('click', function() {
  
  $("#theEarth").hide();

  $("#africa").show();
  $("#antarctica").show();
  $("#asia").show();
  $("#australia").show();
  $("#europe").show();
  $("#northAmerica").show();
  $("#southAmerica").show();

  theRequest();
});
  
function theRequest() {
  $(".ga").empty();
  
  var key = "b8166dc140c94f118151f1da044858ea";
  var queryEarth = "https://api.giphy.com/v1/gifs/search?q=" + x + "&api_key=" + key + "&limit=1";
    
  //	the API call
  $.ajax({
    url: queryEarth, 
    method: "GET",
  }).done(function(response) {
  //	.data is asking for a specific bit of data, 0 is asking for the first block of info
    for (var i = 0; i < response.data.length; i++) {
  //	pay special attention to how the single and double quotes are set up. 
      $('.ga').attr("src", response.data[i].images.downsized.url);
      console.log(response);
    }
  });
}

  $("#africa").on("click", function() {
    x.pop();
    $(".ga").empty();
    x.push(theWorld[1]);
    theRequest();
  });
  $("#antarctica").on("click", function() {
    x.pop();
    $(".ga").empty();
    x.push(theWorld[2]);
    theRequest();
  });
  $("#asia").on("click", function() {
    x.pop();
    $(".ga").empty();
    x.push(theWorld[3]);
    theRequest();
  });
  $("#australia").on("click", function() {
    x.pop();
    $(".ga").empty();
    x.push(theWorld[4]);
    theRequest();
  });
  $("#europe").on("click", function() {
    x.pop();
    $(".ga").empty();
    x.push(theWorld[5]);
    theRequest();
  });
  $("#northAmerica").on("click", function() {
    x.pop();
    $(".ga").empty();
    x.push(theWorld[6]);
    theRequest();
  });
  $("#southAmerica").on("click", function() {
    x.pop();
    $(".ga").empty();
    x.push(theWorld[7]);
    theRequest();
  });
