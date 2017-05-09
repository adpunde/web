(function (global) {

var ajaxUtils = {};

function getRequestObject() {
    if (window.XMLHttpRequest)
        return (new XMLHttpRequest());
    global.alert("AJAX is not supported");
    return null;
};

ajaxUtils.sendGetRequest = function (requestUrl, responseHandler, isJson) {
    var request = getRequestObject();
    request.onreadystatechange = function () {
        // Additional function necessary to pass variables
        handleResponse(request, responseHandler, isJson);
    };

    request.open("GET", requestUrl, true);
    request.send();
};

function handleResponse(request, responseHandler, isJson) {
    console.log('Request status: ', request.status);
    if (request.status === 200 && request.readyState === 4) {
        if (isJson)
            request.responseText = JSON.parse(request.responseText);
        responseHandler(request);
    }
};

global.$ajaxUtils = ajaxUtils;

})(window);
