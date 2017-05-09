// JQuery equivalent of addEventListener "DOMContentLoaded"
var DOMContentLoaded = function () {
    // JQuery equivalent of document.querySelector
    console.log('DOMContentLoaded');
    $("#navbarToggle").blur(function (event) {
        var screenWidth = window.innerWidth;
        if (screenWidth < 768) {
            $("#collapsable-nav").collapse('hide');
        }
    });
};

$(DOMContentLoaded);
