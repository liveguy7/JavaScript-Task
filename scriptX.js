

$(function() {
  $('[title$="Heading"]').css({
      'border': '5px solid black'
  });
});

$(function() {
  $('[title*="div2Title"]').css({
      'border': '5px solid green'
  });
});

$(function() {
  $('[title~="mySpan"]').css({
      'border': '5px solid red'
  });
});

$(function() {
  $('[title="div1Title"]').css({
    'border': '5px solid purple'
  });
});

$(function() {
  $('div[title]').filter(function() {
    var n = $(this).attr('title').toLowerCase() == 'div3Title';
    return n;
  }).css({
    'border': '3px solid yellow'
  });
});

$(function() {
  $('div[title]').filter(function() {
    var n = (/Div/i).test($(this).attr('title'));
    return n;
  }).css({
    'border': '3px solid yellow'
  });
});


$(function() {
  $('p[title]').filter(function() {
    var n = RegExp('My', 'i').test($(this).attr('title'));
    return n;
  }).css({
    'border': '3px solid green'
  });
});


$(function() {
  $('input[type="text"]').each(function(){
    $(this).val();
  });
});

$(function() {
  $('#btn1').click(function() {
   var result = $('input[type="radio"]:checked')
    if(result.length > 0) {
      $('#divResult').html(result.val() + " is checked");
    }
    else {
      $('#divResult').html(result.val() + " is not checked");
    }
  });
});


$(function() {
  $('#btn1').click(function() {
   var result = $('input[type="checkbox"]:checked')
    if(result.length > 0) {
      var resultString = result.length + " checkboxes checked<br>"
      result.each(function() {
        resultString += $(this).val() + "<br>";
      });
      $('#divResult').html(resultString);
    }
    else {
      $('#divResult').html("Not checked");
    }
  });
});



$(function() {
  $('#btn1').click(function() {
    getCheckedCheckBoxes('vehicle');
  });

  $('#btnOther').click(function() {
   getCheckedCheckBoxes('vehicle2');
  });

   var getCheckedCheckBoxes = function(groupName) {
     var result = $('input[type="checkbox"]:checked')
      if(result.length > 0) {
        var resultString = result.length + " checkboxes checked<br>"
        result.each(function() {
          var selectedValue = $(this).val();
          resultString += selectedValue + " - " + $('label[for="option-' + selectedValue + '"]').text() + "<br>";
        });
        $('#divResult').html(resultString);
      }
      else {
        $('#divResult').html("Not checked");
      }
  };
});


$(function() {
  $('#cars').change(function() {
  var selectedOptions = $('#cars option:selected');
  if(selectedOptions.length > 0) {
    var resultString = "";
    selectedOptions.each(function() {
      resultString += "value = " + $(this).val() + ", Text = " + $(this).text() + "<br>";
    });

    $('#divResult').html(resultString);
  }

  });
});


$(function() {
  $('button:enabled').css({
    'border': '3px solid red'
  })
})

$(function() {
  $('li').each(function(i,e) {
    alert(i + ": " + $(this).text() );
  })
})


$(function() {
  var result = 'DIV elements with Title attribute = ' + $('div[title]').length + '<br>';
  result += 'Removing title attribute<br>'
  $('div[title]').removeAttr('title');
  result += "DIV elements with Title attribute = " + $('div[title]').length;
  $('#resultSpan').html(result);

})




$(function() {
  $('#txt').each(function() {

    $(this).focus(function() {
      $(this).addClass('textBoxStyle');
    });

    $(this).blur(function() {
      $(this).removeClass('textBoxStyle');
    });

  });
});

$(function() {
  var result = '';
  var n = $('li').map(function(i,e) {
    return $(e).text();
  }).get().join('|');
  alert(n)
});



$(function() {

  var intArray = [1,2,3,4,5]

  $.each(intArray, function(i,e) {
    if(e == 3)
      return false;
    document.write(e + ',');
  });
  document.write("<br>")

  $.map(intArray, function(i,e) {
    if(e == 3)
      return false;
    document.write(e + ',');
  });


});


$(function() {
  $('#btn').click(function(event) {
    var eventDetails = 'Event = ' + event.type + '<br>' +
      'Event = ' + event.pageX + '<br>' +
      'Event = ' + event.pageY + '<br>' +
      'Event = ' + event.target.type + '<br>' +
      'Event = ' + event.target.tagName + '<br>' +
    $('#divResult').html(eventDetails);
  });
});


$(function() {
  $('#btnClick').bind('click', function(e) {
    $('#divResult').html('Button Clicked at x = ' + e.pageX + ' y = ' + e.pageY);
  });
});


$(function() {
  $('#btn').click(function(event) {
    var eventDetails = 'Event = ' + event.type + '<br>' +
      'Event = ' + event.pageX + '<br>' +
      'Event = ' + event.pageY + '<br>' +
      'Event = ' + event.target.type + '<br>' +
      'Event = ' + event.target.tagName + '<br>' +
    $('#divResult').html(eventDetails);
  });
});



$(function() {
  $("#divContainer img").on ({
    mouseover: function() {
      $(this).css({
        'cursor': 'pointer',
        'border-color': 'red'
      });
    },
    mouseout: function() {
      $(this).css({
        'cursor': 'default',
        'border-color': 'black'
      });
    },
    click: function() {
      var imageUrl = $(this).attr('src');
      $('#mainImage').fadeOut(300, function() {
        $(this).attr('src', imageUrl);
      }).fadeIn(300);
    }
  });
});




