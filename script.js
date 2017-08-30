/* psudocode: 
2. create a button with an onclick function that go to your immage
3. get the gif working 
	a. create a http request object
	b. create a callback funciton
	c. open a request
	d. send a request
4. make a few more buttons, like 6 to 8 of them
5. create some kind of layout
// api key: b8166dc140c94f118151f1da044858ea
	*/

/*	var startingScreen = "https://media.giphy.com/media/rVz1J8spLtUtO/giphy.gif&api_key=b8166dc140c94f118151f1da044858ea"; 
//	send a get request from the server
    $.ajax({url:startingScreen, method:'GET'})
//	what .done is making this funciton go off after the request is made.
	.done(function(response) {
		console.log(response);		
	});*/
/*document.addEventListener('DOMContentLoaded', function () {
	q = "planet earth"; // search query
	
	request = new XMLHttpRequest;
	request.open('GET', 'http://api.giphy.com/v1/gifs/random?api_key=b8166dc140c94f118151f1da044858ea&tag='+q, true);
	
	request.onload = function() {
		if (request.status >= 200 && request.status < 400){
			data = JSON.parse(request.responseText).data.image_url;
			console.log(data);
			$("ga").innerHTML = '<center><img src = "'+data+'"  title="GIF via Giphy"></center>';
		} else {
			console.log('reached giphy, but API returned an error');
		 }
	};

	request.onerror = function() {
		console.log('connection error');
	};

	request.send();
});*/


/*	var startingScreen = "http://api.giphy.com/v1/gifs/search?q=data-earth&api_key=b8166dc140c94f118151f1da044858ea&limit=1";

    var image = $("<img>");

      $.ajax({

        url: startingScreen,

        method: "GET"

      }).done(function(response) {

    	var imageUrl = response.data;    


    		for (var i = 0; i < imageUrl.length; i++) {  

    			var gifDiv = $("<div class='item'>");	

            	var thePic = imageUrl[i].thePic;

            	var x = $(".ga").html(thePic);

            	image.attr("src", imageUrl[i].images.embed_url);

        		console.log("loaded picture of earth", imageUrl);

        		gifDiv.append(x, thePic);

            	$(".ga").append(gifDiv);

            };

      });*/

    $("#africa").hide();
    $("#antarctica").hide();
	$("#asia").hide();
	$("#australia").hide();
	$("#europe").hide();
	$("#northAmerica").hide();
	$("#southAmerica").hide();

$('#theEarth').on('click', function() {
	var x = $(this).data('search', ('earth'));
		console.log(x);
//	v1 = version 1, gifs is what I am serching for, search is what I'm doing
//	then I am intergecting the funciton "x", then I need my API key, the 
//	limit puts a limiter on my search to only search for, in this case the top  
//	whatever number of results
	var queryEarth = "//api.giphy.com/v1/gifs/search?q=earth" +x+ "&api_key=b8166dc140c94f118151f1da044858ea&limit=1";
	console.log(queryEarth);
//	the actual API call
	$.ajax({url:queryEarth, method:'GET'})
		.done(function(response) {
			console.log(response);
//	.data is asking for a specific bit of data, 0 is asking for the first block of
//	info, .rating is getting more specific and asking for something specific within 
//  that block of requested data. 				
//				console.log(response.data[0].rating);
			for(var i = 0; i < response.data.length; i++) {
//	adding something that manipulates what you're grabbing, options can be found in 
// 	the code found in the browser when I load the page
//	pay special attention to how the single and double quotes are set up. 
				$('#ga').append("<img src=' " + response.data[i].images.downsized.url + " ' >");
			    $("#africa").show();
    			$("#antarctica").show();
				$("#asia").show();
				$("#australia").show();
				$("#europe").show();
				$("#northAmerica").show();
				$("#southAmerica").show();
				$('#theEarth').hide();
			}
		});		
});

$('#africa').on('click', function() {
	var af = $(this).data('search', ('africa'));
		console.log(af);

	var queryAfrica = "//api.giphy.com/v1/gifs/search?q=africa" +af+ "&api_key=b8166dc140c94f118151f1da044858ea&limit=5";
	console.log(queryAfrica);

	$.ajax({url:queryAfrica, method:'GET'})
		.done(function(response) {
			console.log(response);

			for(var i = 0; i < response.data.length; i++) {

				$('#ga').prepend("<img src=' " + response.data[i].images.downsized.url + " ' >");
				$('#africa').hide();
			}
		});		
});

$('#antarctica').on('click', function() {
	var an = $(this).data('search', ('antarctica'));
		console.log(an);

	var queryAntarctica = "//api.giphy.com/v1/gifs/search?q=antarctica" +an+ "&api_key=b8166dc140c94f118151f1da044858ea&limit=5";
	console.log(queryAntarctica);

	$.ajax({url:queryAntarctica, method:'GET'})
		.done(function(response) {
			console.log(response);

			for(var i = 0; i < response.data.length; i++) {

				$('#ga').prepend("<img src=' " + response.data[i].images.downsized.url + " ' >");
				$('#antarctica').hide();
			}
		});		
});

$('#asia').on('click', function() {
	var asi = $(this).data('search', ('asia'));
		console.log(asi);

	var queryAsia = "//api.giphy.com/v1/gifs/search?q=asia" +asi+ "&api_key=b8166dc140c94f118151f1da044858ea&limit=5";
	console.log(queryAsia);

	$.ajax({url:queryAsia, method:'GET'})
		.done(function(response) {
			console.log(response);

			for(var i = 0; i < response.data.length; i++) {

				$('#ga').prepend("<img src=' " + response.data[i].images.downsized.url + " ' >");
				$('#asia').hide();
			}
		});		
});

$('#australia').on('click', function() {
	var au = $(this).data('search', ('australia'));
		console.log(au);

	var queryAustralia = "//api.giphy.com/v1/gifs/search?q=australia" +au+ "&api_key=b8166dc140c94f118151f1da044858ea&limit=5";
	console.log(queryAustralia);

	$.ajax({url:queryAustralia, method:'GET'})
		.done(function(response) {
			console.log(response);

			for(var i = 0; i < response.data.length; i++) {

				$('#ga').prepend("<img src=' " + response.data[i].images.downsized.url + " ' >");
				$('#australia').hide();
			}
		});		
});

$('#europe').on('click', function() {
	var eu = $(this).data('search', ('europe'));
		console.log(eu);

	var queryEurope = "//api.giphy.com/v1/gifs/search?q=europe" +eu+ "&api_key=b8166dc140c94f118151f1da044858ea&limit=5";
	console.log(queryEurope);

	$.ajax({url:queryEurope, method:'GET'})
		.done(function(response) {
			console.log(response);

			for(var i = 0; i < response.data.length; i++) {

				$('#ga').prepend("<img src=' " + response.data[i].images.downsized.url + " ' >");
				$('#europe').hide();
			}
		});		
});

$('#northAmerica').on('click', function() {
	var na = $(this).data('search', ('northAmerica'));
		console.log(na);

	var queryNorthAmerica = "//api.giphy.com/v1/gifs/search?q=northAmerica" +na+ "&api_key=b8166dc140c94f118151f1da044858ea&limit=5";
	console.log(queryNorthAmerica);

	$.ajax({url:queryNorthAmerica, method:'GET'})
		.done(function(response) {
			console.log(response);

			for(var i = 0; i < response.data.length; i++) {

				$('#ga').prepend("<img src=' " + response.data[i].images.downsized.url + " ' >");
				$('#northAmerica').hide();
			}
		});		
});

$('#southAmerica').on('click', function() {
	var sa = $(this).data('search', ('southAmerica'));
		console.log(sa);

	var querySouthAmerica = "//api.giphy.com/v1/gifs/search?q=southAmerica" +sa+ "&api_key=b8166dc140c94f118151f1da044858ea&limit=5";
	console.log(querySouthAmerica);

	$.ajax({url:querySouthAmerica, method:'GET'})
		.done(function(response) {
			console.log(response);

			for(var i = 0; i < response.data.length; i++) {

				$('#ga').prepend("<img src=' " + response.data[i].images.downsized.url + " ' >");
				$('#southAmerica').hide();
			}
		});		
});