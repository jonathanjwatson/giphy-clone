var searchForm = $("#search-form");
var searchTermEl = $("#search-term");

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
      console.log(data);
    });
  // convert the response from JSON
  // Start by console logging the data.
});
