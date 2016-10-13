function CustomError() {

}

CustomError.prototype.test = function(){
  $.ajax({
    url: 'http://foaas.com/fascinating/FoCo',
    dataType: "json",
    method: "get"
  }).then(function(response){
    console.log(response.message);
    console.log(response.subtitle);
  });
};

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
    $('#color-description').text("No description provided. " + response.message);
  });
};

CustomError.prototype.DBError = function(){
  $.ajax({
    url: 'http://foaas.com/colors/FoCo',
    dataType: "json",
    method: "get"
  }).then(function(response){
    $('#output-error-flavor').addClass('error');
    $('#output-error-flavor').text(response.message);
  });
};

exports.customErrorModule = CustomError;
