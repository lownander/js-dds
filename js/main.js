$(function() {

  //////////////
  // EXERCISE 2
  // Add your code below here so that an alert message pops up when you press that button
  
  //////////////
  // EXERCISE 3

  /// "Fade out" spell
  $("#disappear").click(function(){
    $("img.dolls").fadeOut();
  });

  /// "Fade in" spell
  $("#appear").click(function(){
    $("img.dolls").fadeIn();
  });
  // "Transformation" spell
  $("#transform").click(function(){
    $("#voldemort").fadeOut(function(){
      $("#cats").fadeIn();
    }); 
  });
  // "Hover" spell
  $("#levitate").hover(function(){
    $("#carola").toggleClass("levitating");
  });
  //////////////
  // EXERCISE 4

  //////////////
  // EXERCISE 5
  var numItems = 0;
  function addToCart() {
    console.log("added an item!");
    numItems = numItems + 1;
    $("#cart").fadeOut(function(){
      $("#cart-quantity").html(numItems);
    }).fadeIn();
    // add code to make the cart fade out and fade in
    // add code to insert the value of numItems in the html
  }
  $("#add-to-cart").click(addToCart);

  /////////////
  // EXERCISE 6
  $('#spotify-search').click(function() {
    // You need to add code to get the text from the input field.
    var song = $("#song").val();
    var query = "http://ws.spotify.com/search/1/track?q=" + song;
    $.getJSON(query, function(data) {
      $.each(data.tracks, function(index, track) {
        // You need to add code to add each track name to the list of results.
        $("#spotify-results").append(track.name);
      });
    });
  });


  ////////////
  // EXERCISE 7
  // Base your solution off of exercise 6
  // An example twitter API url is http://search.twitter.com/search.json?&q=phil%20collins"

});