function CustomError() {

}

CustomError.prototype.test = function(){
  $.ajax({
    url: 'http://foaas.com/fascinating/' + 'KatrinaAndZack',
    dataType: "json",
    method: "get"
  }).then(function(response){
    console.log(response.message);
  });

};

exports.customErrorModule = CustomError;
