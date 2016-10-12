function Color(hex) {
  this.title = null;
  this.hex = hex;
  this.rgb = null;
  this.description = null;
}

Color.prototype.getColorInfo = function(){
  $.get('http://www.colourlovers.com/api/color/' + this.hex.substring(1) + '?format=json')
    .then(function(response){

    // this.title = response[0].title;
    // this.hex = response[0].hex;
    // this.rgb = response[0].rgb.red + ", " + response[0].rgb.green + ", " + response[0].rgb.blue;
    // this.description = response[0].description;
    console.log(response);

    $('#color-hex').text(response[0].hex);
    $('#color-rgb').text(response[0].rgb.red + ", " + response[0].rgb.green + ", " + response[0].rgb.blue);
    if(response[0].title){
      $('#color-title').text(response[0].title);
    }
    else{
      $('#color-title').text("INSERT ERROR MESSAGE HERE");
    }
    if(response[0].description){
      $('#color-description').text(response[0].description);
    }
    else{
      $('#color-description').text("INSERT ERROR MESSAGE HERE");
    }
    $('#output').show();
  });
};

exports.colorModule = Color;
