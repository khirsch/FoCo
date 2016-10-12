var Color = require('./../js/focolors.js').colorModule;

$(document).ready(function() {
  $('#title').click(function(event){
    event.preventDefault();
    $('#hidden').toggle();
  });
});
