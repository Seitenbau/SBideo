$.getJSON( "/data.json", function( obj ) {
  var table = "";
  obj.items.forEach(function(category) {
      table += '<div class="col-sm-3 col-md-4"><h2>' + category.title + "</h2><ul>";
          category.items.forEach(function(event) {
              table += "<li> " + event.meta.title;
              table += "<ul>";
              event.items.forEach(function(video) {
                  table += "<li><a class='videolink' href='#' data-video='"
                    + video.src + "'>"
                    + video.meta.title + "</a>";
                  table += "<div>meta</div></li>";
              });
              table += "</ul>";
          });
          table += "</li>";
      table += "</ul></div>";
  });
  $( "#itemList" ).append( table );
  $( ".videolink" ).click(function(item) {
    var path = item.target.getAttribute("data-video");
    // TODO: update video player
  });
});
