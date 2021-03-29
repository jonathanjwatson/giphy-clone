var searchForm = $("#search-form");
var searchTermEl = $("#search-term");
var imagesDisplay = $("#images-display");

searchForm.on("submit", function (event) {
  event.preventDefault();
  // Grab the search term out of the input.
  var searchTerm = searchTermEl.val();
  console.log(searchTerm);
  var apiKey = "b29g54U81w1GbkyNxo6Osae29OsTEwso";
  // Build the api url with search term and the api key
  // store the api key in a variable
  var queryURL =
    "https://api.giphy.com/v1/gifs/search?api_key=" +
    apiKey +
    "&q=" +
    searchTerm +
    "&limit=3";
  // Make an API call using fetch
  fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data.data[0].images.fixed_width_small.url);

      imagesDisplay.empty();

      for (var i = 0; i < data.data.length; i++) {
        var imageEl = $("<img>");
        imageEl.addClass("col-sm-4");
        imageEl.attr("src", data.data[i].images.fixed_width_small.url);
        imagesDisplay.append(imageEl);
      }
    });
  // convert the response from JSON
  // Start by console logging the data.
});
