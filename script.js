

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
      $('#div' + groupName).html(resultString);
    }
    else {
      $('#div' + groupName).html("Not checked");
    }
  });
});


$(function() {
  var divElement = $('#divResult');
  var result = "";
  $('li').each(function() {
    divElement.html(divElement.html() + "<br>" + $(this).text());
    result += '<br>' + $(this).text();
  });
});




$(function() {
  $('li')
    .text("My Jello")
    .css({
    'color': 'blue'
    }).slideUp(1000)
    .slideDown(1000)
    .attr("title", "Jello");
});


$(function() {

  var personJSON =  [
   {
  "firstName": "Pan",
  "lastName": "Jello",
  "gender": "Male",
  "salary": 90000
  },
   {
  "firstName": "Sam",
  "lastName": "Jello",
  "gender": "Male",
  "salary": 80000 
  }
 ];

  $('#divResult').html(personJSON);

});

$(function() {
  var jsObject = {
    "one": "1",
    "two": "2",
    "three": "3",
    "four": "4"
  };
  var result = '';
  $.each(jsObject, function(key,e) {
    result += "index = " + key + ', value = ' + e + '<br/>';
  })
  $('#theResult').html(result);
});



$(function () {
  var result = "";
  $('.inputRequired').change(function() {
    if(result == '') {
      result  = $(this).val();
    }
    else {
      result += ', ' + $(this).val();
    }
    $('#theResult').html(result);
  });
});


$(function() {
  $('#cars').change(function() {
    var selectedValue = $(this).val();
    if(selectedValue == "select") {
      selectedValue = "please select an option"
    }
    $('#theResult').html(selectedValue);
  });
});












