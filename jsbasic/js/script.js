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
    for (a in array) {
        console.log("Item " + a, ": ", array[a]);
    }
}

loops();

function objects() {
    var company = new Object();
    company.name = "Coursera";
    company.website = "http://coursera.org";
    company.ceo = new Object();
    company.ceo.firstName = "Mark";
    console.log(company['name']);

    // Object literal notation
    var facebook = {
        name: "facebook",
        ceo: {
            name: "Mark",
            favColor: "blue"
        },
        1: 'a'
    };

    console.log(facebook);
}

objects();

// Functions are First-Class Data Types
// Functions are objects
function functions() {
    function multiply(x, y) {
        return (x * y);
    }

    console.log('Multiplication of 5 and 3 :', multiply(3, 5));
    multiply.version = 2.3;
    console.log('Multiply function: ', multiply);
    console.log('Multiply version: ', multiply.version);

    function MultiplyFactory(multiplier) {
        var myFunc = function(x) {
            return (x * multiplier);
        }

        return myFunc;
    };

    var mul3 = MultiplyFactory(3);
    console.log("4 times 3: ", mul3(4));

    function doOperation(x, op) {
        return op(x);
    }

    console.log('9 times 7: ', doOperation(9, MultiplyFactory(7)));

    // Objects are passed by reference
    // Other types are passed by value
    function changeNum(x) {
        x = 4;
        console.log("Changed num: ", x);
    }

    function changeObjNum(z) {
        z.num = 4;
        console.log("CHanged obj.num: ", z.num);
    }

    var obj = {
        num: 5
    };
    console.log('Before function call num: ', obj.num);
    changeNum(obj.num);
    console.log('After function call num: ', obj.num);

    console.log('Before function call obj.num: ', obj.num);
    changeObjNum(obj);
    console.log('After function call obj.num: ', obj.num);
}

functions();

function prototype() {
    // Create object using function constructor
    function Circle (radius) {
        this.radius = radius;
        this.Area = function () {
            return (Math.PI * Math.pow(this.radius, 2));
        };
    }

    Circle.prototype.getArea = function () {
        return (Math.PI * Math.pow(this.radius, 2));
    }

    // Multiple circle objects will include same function code
    var myCircle = new Circle(10);
    console.log('Circle radius: ', myCircle.radius);
    console.log('Area: ', myCircle.Area(),
        ' Prototype are: ', myCircle.getArea());

    var literal = {
        radius: 10,
        getArea: function () {
            console.log(this);

            var increaseRadius = function () {
                // This points to window object
                console.log(this);
                this.radius = 20;
            }
            increaseRadius();

            return (Math.PI * Math.pow(this.radius, 2));
        }
    }

    console.log('Area:', literal.getArea());
}

prototype();
