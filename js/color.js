function Color(hex) {
  this.hex = hex;
}

Color.prototype.getColorInfo = function(){
  $.get('http://www.colourlovers.com/api/color/' + this.hex.substring(1) + '?format=json')
    .then(function(response){
    console.log(response);
    $('#color-name').text(response[0].title);
    $('#color-hex').text(response[0].hex);
    $('#color-rgb').text(response[0].rgb.red + ", " + response[0].rgb.green + ", " + response[0].rgb.blue);
    $('#color-desc').text(response[0].description);
  });
};




exports.colorModule = Color;
