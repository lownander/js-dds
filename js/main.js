$(function() {

  //////////////
  // EXERCISE 2
  // Add your code below here so that an alert message pops up when you press that button


  //////////////
  // EXERCISE 3

  /// "Fade out" spell

  /// "Fade in" spell

  // "Transformation" spell

  // "Hover" spell

  //////////////
  // EXERCISE 4

  //////////////
  // EXERCISE 5
  var numItems = 0;
  function addToCart() {
    console.log("added an item!");
    numItems = numItems + 1;
    // add code to make the cart fade out and fade in
    // add code to insert the value of numItems in the html
  }

  /////////////
  // EXERCISE 6
  $('#spotify-search').click(function() {
    // You need to add code to get the text from the input field.
    var query = "http://ws.spotify.com/search/1/track?q=sussudio";
    $.getJSON(query, function(data) {
      $.each(data.tracks, function(index, track) {
        // You need to add code to add each track name to the list of results.
      });
    });
  });


  ////////////
  // EXERCISE 7
  // Base your solution off of exercise 6
  // An example twitter API url is http://search.twitter.com/search.json?&q=phil%20collins"

});