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
                    html += '<div class="meta hidden">';
                    item.meta.people.forEach(function (person) {
                        html += '<span class="jsearch-field"><span class="glyphicon glyphicon-user" aria-hidden="true"></span>&nbsp;' + person + '&nbsp;</span>';
                    });
                    html += '<div>';
                    item.meta.tags.forEach(function (tag) {
                        html += '<span class="tag label label-primary jsearch-field">' + tag + '</span>&nbsp;';
                    });
                    html += '</div>';
                    html += '<div class="description jsearch-field">' + item.meta.description + ' <span title="Edit" class="edit glyphicon glyphicon-edit" aria-hidden="true"></span></div>';
                    html += '</div>';
                }

                html += '</li>';
            });

            return html;
        };

        var list = '';
        items.forEach(function (category) {
            list += '<div class="col-sm-3 col-md-3"><h3>' + category.meta.title + '</h3><ul>';
            list += walkItems(category.items);
            list += '</ul></div>';
        });

        $itemList.append(list);

        // init popovers
        $itemList.find('a').popover({
            container: 'body',
            trigger: 'manual',
            html: true,
            title: function () {
                return $(this).text();
            },
            content: function () {
                return $(this).siblings('div.meta').html();
            }
        }).on('mouseenter', function () {
            var $this = $(this);
            $this.popover('show');
            $('.popover').on('mouseleave', function () {
                $this.popover('hide');
            });
        }).on('mouseleave', function () {
            var $this = $(this);
            setTimeout(function () {
                if (!$('.popover:hover').length) {
                    $this.popover('hide');
                }
            }, 100);
        });
    });


    // event listener for playing videos
    $itemList.on('click', '.videolink', function (event) {
        var src = event.target.getAttribute('data-video');
        var videoEl = document.getElementById('sbideo-main');
        videoEl.setAttribute('src', src);
        videoEl.play();

        var $videoLink = $(event.target);

        // highlight active video
        $('.activeVideo').removeClass('activeVideo');
        $videoLink.addClass('activeVideo');

        // show metadata
        var $meta = $videoLink.siblings('.meta').first().clone().removeClass('hidden');
        $('#activeVideoMeta').empty();
        $('#activeVideoMeta').append('<h2>' + $videoLink.text() + '</h2>');
        $('#activeVideoMeta').append($meta);
    });

    // event listener for clicking on tags to filter videos
    $('body').on('click', '.tag', function (event) {
        var tag = event.target.innerText;
        $('#searchField').val(tag).keyup();
    });

    // init jsearch
    $('#searchField').jsearch({minLength: 2}).focus();

});