var Color = require('./../js/color.js').colorModule;

$(document).ready(function() {
  $('#input').submit(function(event){
    event.preventDefault();
    var hex = $('#input-color').val();
    var color = new Color(hex);
    color.getColorInfo();
    $('#output').show();
  });



});
