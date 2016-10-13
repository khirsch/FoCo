var CustomError = require('./../js/custom-error.js').customErrorModule;

function Color(hex) {
  this.title = null;
  this.hex = hex;
  this.rgb = null;
  this.description = null;
}

Color.prototype.getColorInfo = function(){
  var errorGenerator = new CustomError();
  $.get('http://www.colourlovers.com/api/color/' + this.hex.substring(1) + '?format=json').then(function(response){
    if(response[0]){
      $('#color-hex').text(response[0].hex);
      $('#color-rgb').text(response[0].rgb.red + ", " + response[0].rgb.green + ", " + response[0].rgb.blue);
      if(response[0].title){
        $('#color-title').text(response[0].title);
      }
      else{
        errorGenerator.titleError();
      }
      if(response[0].description){
        $('#color-description').removeClass('error');
        $('#color-description').text(response[0].description);
      }
      else{
        errorGenerator.descriptionError();
      }
      $('#output').show();
      $('#output-error').hide();
    }
    else {
      $('#output').hide();
      $('#output-error').show();
      errorGenerator.DBError();
    }
  });
};

exports.colorModule = Color;
