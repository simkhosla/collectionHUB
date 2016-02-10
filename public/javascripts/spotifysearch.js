$(document).ready(function () {
  // Stores the search result in this array.
  var temp_artist = '';

  // Finds the element the search results will appear in.
  var resultsPlaceholder = document.getElementById('results')

  // ---------------
  // Ajax call to Spotify search.
  // ---------------

  var searchAlbums = function (query) {
      $.ajax({
          url: 'https://api.spotify.com/v1/search?q=artist:' + query + '&type=album&limit=10',
          data: 'json',
          success: function (data) {
            temp_artist = query;
            $('#results').html('');
            $('#write_mem').html('');
            $('#results').append('<h5>Results</h5>');
            console.log('winner!');
            console.table(data.albums.items);
            // Loops through the 10 search results.
            for (var i = 0; i < data.albums.items.length; i++) {
              // Assigns album name and album art to a variable.
              var temp_result = '<div class="falalalala"><p>' + data.albums.items[i].name + '<br>' + '<img src="' + data.albums.items[i].images[1].url + '"></p></div>';
              // Appends it to the results.
              $('#results').append(temp_result);
            }
            // This is the event listener for any image clicked on in the page. Could cause a problem if nav is clicked on.
            $(document).on("click", "img", createform);
          }
      });
  };
