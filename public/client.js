$(function () {
    var $itemList = $('#itemList');

    // load items and generate list
    $.getJSON('/items.json', function (items) {
        var walkItems = function (items) {
            var html = '';
            items.forEach(function (item) {
                if (item.type === 'folder') {
                    html += '<li>';
                    html += item.meta.title;
                    if (item.items && item.items.length > 0) {
                        html += '<ul>';
                        html += walkItems(item.items);
                        html += '</ul>';
                    }
                } else if (item.type === 'video') {
                    html += '<li class="jsearch-row">';
                    html += '<a class="jsearch-field videolink" href="#" data-video="'
                        + item.src + '">'
                        + item.meta.title + '</a>';
                    html += '<div class="meta">';
                    item.meta.people.forEach(function (person) {
                        html += '<div class="jsearch-field"><span class="glyphicon glyphicon-user" aria-hidden="true"></span>' + person + '</div>';
                    });
                    item.meta.tags.forEach(function (tag) {
                        html += '<span class="tag label label-primary jsearch-field">' + tag + '</span>&nbsp;';
                    });
                    html += '<div class="description jsearch-field">' + item.meta.description + ' <span title="Edit" class="edit glyphicon glyphicon-edit" aria-hidden="true"></span></div>';
                    html += '</div>';
                }

                html += '</li>';
            });

            return html;
        };

        var list = '';
        items.forEach(function (category) {
            list += '<div class="col-sm-3 col-md-4"><h2>' + category.meta.title + '</h2><ul>';
            list += walkItems(category.items);
            list += '</ul></div>';
        });

        $itemList.append(list);
    });


    // event listener for playing videos
    $itemList.on('click', '.videolink', function (event) {
        var src = event.target.getAttribute('data-video');
        var videoEl = document.getElementById('sbideo-main');
        videoEl.setAttribute('src', src);
        videoEl.play();
    });

    // event listener for clicking on tags to filter videos
    $itemList.on('click', '.tag', function (event) {
        var tag = event.target.innerText;
        $('#searchField').val(tag).keyup();
    });

    // init jsearch
    $('#searchField').jsearch({minLength: 2});

});