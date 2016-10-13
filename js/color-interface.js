var Color = require('./../js/color.js').colorModule;
var CustomError = require('./../js/custom-error.js').customErrorModule;

$(document).ready(function() {
  $('#colorpicker').click(function(event){
    event.preventDefault();
    $('#colorpicker').farbtastic('#color');
    var hex = $('#color').val();
    var color = new Color(hex);
    color.getColorInfo();
  });
});
