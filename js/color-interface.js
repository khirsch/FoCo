var Color = require('./../js/color.js').colorModule;
var CustomError = require('./../js/custom-error.js').customErrorModule;

$(document).ready(function() {

  $('#input').submit(function(event){
    event.preventDefault();
    var hex = $('#input-color').val();
    var color = new Color(hex);
    color.getColorInfo();


    // var testError = new CustomError();
    // testError.test();

  });



});
