$("#cat-button").on("click", function() {

    //url images are coming from
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cats";

    //GET request from the url
    $.ajax({
      url: queryURL,
      method: "GET"
    })

    //after we GET response run this function
      .then(function(response) {

      //response form url request stored in this varibale 
        var imageUrl = response.data.image_original_url;

        //
        var catImage = $("<img>");

        //
        catImage.attr("src", imageUrl);
        catImage.attr("alt", "cat image");



//njknjnlkjbnkjnklkm;kmkm;lm

    
        //
        $("#images").prepend(catImage);
      });
  });

  alert("Hello everybody");
  alert("Goodbye");