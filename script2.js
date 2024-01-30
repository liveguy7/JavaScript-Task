
$(function() {
  var textBoxes = $('input[type="text"]');
  textBoxes.focus(function() {
    var helpDiv = $(this).attr("id") + 'HelpDiv';
    $('#' + helpDiv).load('help.html #' + helpDiv);
  });
  textBoxes.blur(function() {
    var helpDiv = $(this).attr("id") + 'HelpDiv';
    $('#' + helpDiv).html('');
  });
});



