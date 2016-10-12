function Color(hex) {
  this.title = null;
  this.hex = hex;
  this.rgb = null;
  this.description = null;
}

Color.prototype.getColorInfo = function(){
  $.get('http://www.colourlovers.com/api/color/' + this.hex.substring(1) + '?format=json').then(function(response){
    if(response[0]){
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
    }
    else {
      $('#output').hide();
      alert("No entry for this color at COLOURlovers!");
    }
  });
};

exports.colorModule = Color;
