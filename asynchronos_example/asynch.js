"use strict";

let test1 = function() {
    setTimeout(function() {
        console.log('Code start here!');

        alert('This is an Alert!');

        console.log('Code Ends here!')
    }, 3000);
};

let test2 = function() {
    console.log("Please notice me!");

}

test1();
test2();