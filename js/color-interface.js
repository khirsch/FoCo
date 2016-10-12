var Color = require('./../js/color.js').colorModule;

$(document).ready(function() {
  $('#title').click(function(event){
    event.preventDefault();
    $('#hidden').toggle();
  });
  
});
