var leapYear = function(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
};


$(document).ready(function() {
  $('form.group').submit(function(event) {
    event.preventDefault()
var year = parseInt($('input#yearInput').val())
var result = leapYear(year);

$('#year').text(year);

if (result === false) {
  $('#not').show();
} else {
  $('#not').hide();
}
console.log(result);

$(".result").show();

  });
});
