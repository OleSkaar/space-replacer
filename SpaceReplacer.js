var prompt;
var stringToBeReplaced = prompt('Paste a string here', 'default');
var newString = stringToBeReplaced.replace(/ /g, '_');
prompt('Voila:', newString);
