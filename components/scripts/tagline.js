var $, fill;

$ = require('jquery');

(fill = function(item) {
  return $('.tagline').append("" + item);
})('The most BLUE loveable minds in Art');

fill;
