// The ready function listens for the DOM content to be loaded.
$(document).ready(function () {
    // select the <input> elements by the id
    const $submitBtn = $('#btnSubmit');
    const $textInput = $('#inputTxt');

    // Create a div element and append it to the body.
    const $newDiv = $('<div id="newDiv"></div>');
    $('body').append($newDiv);

    // Use jQuery to create an unordered list and append it to the body
    const $newUl = $('<ul></ul');
    $('body').append($newUl);

    // set initial button attribute to disabled
    $submitBtn.attr('disabled', true);

    //  first add a click event handler to the <input> button that will alert a message in the browser when the button is clicked.
    $submitBtn.click(function (e) {
        // prevent default functionality of reloading the page
        e.preventDefault();
        // alert($textInput.val());

        // second objective- When the user types in the input field and clicks submit, append the text in an h2 element to the div
        // let $newH2 = $('<h2>' + $textInput.val() + '</h2>');

        // When the user submits the form, append the text as list item to the unordered list (use string literal)
        let $newLi = $(`<li>${$textInput.val()}</li>`);

        // Now, comment out the code for creating the h2 and we are going to work on creating a list instead
        // When the user mouses over the h2 element, assign it a new background color and border radius.
        // $newH2.mouseover(function () {
        //     $newH2.css({ "background-color": "red", "border-radius": "100px" });
        // });
        // $newH2.mouseout(function () {
        //     $newH2.css({ "background-color": "transparent", "border-radius": "100px" });
        // });

        // append new h2 text to div
        // $newDiv.append($newH2);

        // append new li to new ul
        $newUl.append($newLi);

        // When the user clicks on the li element, assign it a random color
        $newLi.click(function () {
            let num1 = Math.floor(Math.random() * 255);
            let num2 = Math.floor(Math.random() * 255);
            let num3 = Math.floor(Math.random() * 255);
    
            // $ here is for string literal, not jQuery
            $newLi.css({'color': `rgb(${num1}, ${num2}, ${num3})`});
        })

        // When the user double clicks on the list, remove the item that was clicked on.
        $newLi.dblclick(function () {
            $newLi.remove();
        })
    })

    // If the user has typed in the input field then the button should be enabled, otherwise the button should be disabled.
    $textInput.keyup(function () {
        if ($textInput.val() == '') {
            $submitBtn.attr('disabled', true);
        }
        else {
            $submitBtn.attr('disabled', false);
        }
    })

});
