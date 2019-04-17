$(window).on('load', function() {
  
    $("#demo").empty();
      console.log('scraping')
    $.get("/scrape", function(response) {
        var info = response;
        $("#demo").load("/scrape .news-block h3, .news-block .wp-post-image, .news-block .news-excerpt");
        var y = document.getElementById("info");
        y.style.display = "none";
        var x = document.getElementById("loader");
        x.style.display = "none";
        
    });

    $("#demo").on("mouseover", function() {
      $('a').miniPreview({ prefetch: 'none' });
    })

  });

  