function CustomError() {

}

CustomError.prototype.test = function(){
  $.ajax({
    url: 'http://foaas.com/fascinating/' + 'Katrina&Zack',
    dataType: "json",
    method: "get"
  }).then(function(response){
    console.log(response.message);
  });

};

exports.customErrorModule = CustomError;
