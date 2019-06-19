var leapYear = function(year) {
  return false;
}



$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    var year = parsInt($("input#year").val());
    var result = leapYear(year);
    $("#result").text(result);
  });
});