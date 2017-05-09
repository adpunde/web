document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM loaded");

    document.querySelector("#button").onclick = function () {
        console.log('Sending AJAX request');
        $ajaxUtils.sendGetRequest("/data/name.txt", function (request) {
            console.log("Response received: ", request);
            var name = request.responseText;
            var message = "<h2>Hello " + name + "!";
            document.querySelector("#content").innerHTML = message;
        });
    };

    document.querySelector("#button2").onclick = function () {
        console.log('Sending AJAX request');
        $ajaxUtils.sendGetRequest("/data/name.json", function (request) {
            console.log("Response received: ", request);
            var name = request.responseText;
            var obj = JSON.parse(request.responseText);
            var message = "<h3>";
            message += "Original json: " + name + "<br>";
            message += "Object:" + "<br>";
            message += "First name: " + obj.firstName + "<br>";
            message += "Last name: " + obj.lastName + "<br>";
            message += "Age: " + obj.age + "<br>";
            message += "Object to json: " + JSON.stringify(obj);
            message += "</h2>";
            document.querySelector("#content").innerHTML = message;
        });
    };
});
