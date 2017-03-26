var str = require('./constant');
var $ = require('jquery');

var App = function(){
    console.log(str);
    $(function(){
      $("#id").text(str);
    })
};

var app = new App();

