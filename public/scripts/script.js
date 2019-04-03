$(window).on('load', function() {
    $("#demo").empty();
      console.log('scraping')
    $.get("/scrape", function(response) {
        var info = response;
        $("#demo").load("/scrape .news-block h3, .news-block .wp-post-image, .news-block .news-excerpt");
    })
  });