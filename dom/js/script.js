(function (window) {
    console.log('window.document: ', window.document);
    console.log('h1: ', document.getElementById('title'));
    console.log(document instanceof HTMLDocument);
})(window);

function buttonEnterClick() {
    var name = document.getElementById('name').value;
    console.log('Text entered: ', name);
    var message = 'Hello ' + name;
    document.getElementById('content').textContent = message;
    document.getElementById('content2').innerHTML = '<h2>' + message + '</h2>';

    if (name === 'student') {
        var title = document.querySelector('#title').textContent;
        title += '(important)';
        document.querySelector('h1').textContent = title;
    }
}

function onBlur () {
    var name = document.getElementById('name').value;
    document.querySelector('h1').textContent = 'Hello ' + name;
    console.log(this);
}

function onDblClick (event) {
    console.log('THIS:', this);
    console.log('EVENT:', event);
    document.querySelector('h1').textContent = 'Double Click';
    this.textContent = 'Changed';
}

// Unobstrusive event binding
document.querySelector("#name").addEventListener("blur", onBlur);
document.querySelector("button").ondblclick = onDblClick;
document.querySelector("html").onmousemove = function (event) {
    var str = event.clientX.toString() + ', ' + event.clientY.toString();
    document.querySelector('#coordinates').textContent = str;
};
