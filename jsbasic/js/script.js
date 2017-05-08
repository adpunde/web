var x = "Hello World !";
var scope = 1;

function check_scope() {
    var scope = 2;
    function lexical_scope() {
        console.log("lexical_scope: ", scope);
    }
    lexical_scope();
    global_scope();
}

function global_scope() {
    console.log("global_scope: ", scope);
}

check_scope();

function basic_types() {
    var a;
    var b = null;
    var c = 1.234567;
    var d = 'Basic types in javascript';
    var e = true;
    var f = {
        "script": "javascript",
        "type": "object"
    };
    console.log("Type of a: ", typeof a + " value: ", a);
    console.log("Type of b: " + typeof b + " value: ", b);
    console.log("Type of c: " + typeof c + " value: ", c);
    console.log("Type of d: " + typeof d + " value: ", d);
    console.log("Type of e: " + typeof e + " value: ", e);
    console.log("Type of f: " + typeof f + " value: ", f);
    console.log("Division of undefined: ", a / 5);
}

basic_types();

function equality() {
    var x = "1";
    var y = 1;

    // Type coercion - Javascript converts one type to other for comparison
    if (x == y) {
        console.log('x == y true');
    } else {
        console.log('x == y false');
    }

    if (x === y) {
        console.log('x === y true');
    } else {
        console.log('x === y false');
    }

    if (!(0 || false || null || undefined || NaN || "")) {
        console.log("0, false, null, undefined, NaN, '' are false." +
            " Everything else is true.");
    }
}

equality();

function function_style() {
    function a()
    {
        // Missing semicolon inserted by engine
        // resulting in returning undefined
        return
        {
            name: "abc"
        };
    }

    function b() {
        return {
            name: "abc"
        };
    }

    console.log("Curly braces style1 :", a());
    console.log("Curly braces style2 :", b());
}

function_style();

function loops() {
    for (var i = 0; i < 5; i++) {
        console.log('i = ', i);
    }

    var array = ['A', 'B', 'C'];
    for a in array {
        console.log(a);
    }
}

loops();
