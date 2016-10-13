function CustomError() {

}

CustomError.prototype.titleError = function(){
  $.ajax({
    url: 'http://foaas.com/sake/FoCo',
    dataType: "json",
    method: "get"
  }).then(function(response){
    $('#color-title').text("No title provided. " + response.message);
  });
};

CustomError.prototype.descriptionError = function(){
  $.ajax({
    url: 'http://foaas.com/thanks/FoCo',
    dataType: "json",
    method: "get"
  }).then(function(response){
    $('#color-description').addClass('error');
    $('#color-description').text("No description. " + response.message);
  });
};

CustomError.prototype.DBError = function(route){
  $.ajax({
    url: 'http://foaas.com/' + route + '/FoCo',
    dataType: "json",
    method: "get"
  }).then(function(response){
    $('#output-error-flavor').text(response.message);
  });
};

exports.customErrorModule = CustomError;
