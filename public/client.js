$.getJSON('/items.json', function (items) {
    var list = '';
    items.forEach(function (category) {
        list += '<div class="col-sm-3 col-md-4"><h2>' + category.meta.title + '</h2><ul>';
        category.items.forEach(function (event) {
            list += '<li>' + event.meta.title + '&nbsp;<span class="badge badge-default badge-pill">' + event.items.length + '</span>';
            list += '<ul>';
            event.items.forEach(function (video) {
                list += '<li class="jsearch-row"><a class="jsearch-field videolink" href="#" data-video="'
                    + video.src + '">'
                    + video.meta.title + '</a>';
                list += '<div class="meta">';
                video.meta.people.forEach(function (authors) {
                    list += '<div class="jsearch-field"><span class="glyphicon glyphicon-user" aria-hidden="true"></span>' + authors + '</div>';
                });
                video.meta.tags.forEach(function (tag) {
                    list += '<span class="label label-primary jsearch-field" onclick="searchTag(this)">' + tag + '</span>&nbsp;';
                });
                list += '<div class="description jsearch-field">' + video.meta.description + ' <span title="Edit" class="edit glyphicon glyphicon-edit" aria-hidden="true"></span></div>';
                list += '</div>';
                list += '</li>';
            });
            list += '</ul>';
        });
        list += '</li>';
        list += '</ul></div>';
    });
    var $itemList = $('#itemList');
    $itemList.append(list);
    $itemList.on('click', '.videolink', function (item) {
        var path = item.target.getAttribute('data-video');
        var videoEl = document.getElementById('sbideo-main');
        videoEl.setAttribute('src', path);
        videoEl.play();
    });
});

function searchTag(obj) {
    var t = $(obj).text();
    $('#searchField').val(t).keyup();
}

// init jsearch
$("#searchField").jsearch({minLength: 2});