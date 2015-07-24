// resulting char -> regex map
var IGC_convert = {
    ':': '=2',
    '.': /\=1/g
}

// capture a click event, and parse the link for the underlying div
function IGC_listener(event) {
    var div = $(event.toElement);
    var cl = div.attr('class');
    var url = div.attr('data-reactid');

    if (cl != '-cx-PRIVATE-Photo__clickShield') {
        return;
    }

    // strip off the prefix
    url = url.substr(url.indexOf('$')+1, url.length);

    // convert special chars
    for (s in IGC_convert) {
        regex = IGC_convert[s];
        url = url.replace(regex, s);
    }

    // strip the suffix
    url = url.substring(0, url.indexOf('.jpg')+4);

    prompt("Copy this URL with ctrl+c:", url);

    event.stopPropagation();
}

// register the global click handler
$(document).click(IGC_listener);
