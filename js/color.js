function Color(hex) {
  this.title = "";
  this.hex = hex;
  this.rgb = "";
  this.description = "";
}

Color.prototype.getColorInfo = function(){
  $.get('http://www.colourlovers.com/api/color/' + this.hex.substring(1) + '?format=json')
    .then(function(response){

    this.title = response[0].title;
    this.hex = response[0].hex;
    this.rgb = response[0].rgb.red + ", " + response[0].rgb.green + ", " + response[0].rgb.blue;
    this.description = response[0].description;

    $('#color-hex').text(response[0].hex);
    $('#color-rgb').text(response[0].rgb.red + ", " + response[0].rgb.green + ", " + response[0].rgb.blue);
    if(this.title === ""){
      $('#color-title').text("INSERT ERROR MESSAGE HERE");
    }
    else{
      $('#color-title').text(response[0].title);
    }
    if(this.description === ""){
      $('#color-description').text("INSERT ERROR MESSAGE HERE");
    }
    else{
      $('#color-description').text(response[0].description);
    }
    $('#output').show();
  });
};

exports.colorModule = Color;
exports.errorModule = Error;
