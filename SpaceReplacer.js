/*
1.0 Window prompt method: 
var prompt;
var stringToBeReplaced = prompt('Paste a string here', 'default');
var newString = stringToBeReplaced.replace(/ /g, '_');
prompt('Voila:', newString);

2.0 onpaste event listener

Open page, autofocus on field
On paste, replace spaces with underscores on text in field
Select text in field after replacement
*/

var inputfield = document.getElementById('inputfield');

function replacer() {
    setTimeout(function () {
        inputfield.value = inputfield.value.replace(/ /g, '_');
        inputfield.select();
    }, 4); 
}
