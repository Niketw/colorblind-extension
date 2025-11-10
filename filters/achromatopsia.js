if (document.getElementById("styleID612481")) {
    stylingID = document.getElementById("styleID612481").remove();
    filterID = document.getElementById("filterID471924").remove();
}
stylingID = document.createElement('style');
stylingID.id = "styleID612481";
document.body.appendChild(stylingID);

filterID = document.createElement('div');
filterID.id = "filterID471924";
filterID.setAttribute('style', 'height: 0; padding: 0; margin: 0; line-height: 0;');
document.body.appendChild(filterID);

filterID.innerHTML = '<svg id="colorblind-filters" style="display: none"> <defs> <filter id="achromatopsia"> <feComponentTransfer> <feFuncR type="linear" slope="2" intercept="-0.5"/> <feFuncG type="linear" slope="2" intercept="-0.5"/> <feFuncB type="linear" slope="2" intercept="-0.5"/> </feComponentTransfer> </filter> </defs> </svg>';
stylingID.innerHTML = 'html{-webkit-filter:url(#achromatopsia);-moz-filter:(#achromatopsia);-ms-filter:(#achromatopsia);-o-filter:(#achromatopsia);filter:(#achromatopsia);}'
setTimeout(function() {
    window.scrollBy(1, 1);
    window.scrollBy(-1, -1);
}, 1);
