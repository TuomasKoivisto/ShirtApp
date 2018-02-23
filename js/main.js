App.load('start-screen', 'fade');

setTimeout(function() {
  App.load('signin-page', 'fade');
}, 2500);

var blankImage = 'img/white.jpg';
var blanktext = '-';

function clearDetails() {
  localStorage.setItem('fabricImage', blankImage);
  localStorage.setItem('collarImage', blankImage);
  localStorage.setItem('cuffImage', blankImage);
  localStorage.setItem('placketImage', blankImage);

  localStorage.setItem('fabricName', blanktext);
  localStorage.setItem('collarName', blanktext);
  localStorage.setItem('cuffName', blanktext);
  localStorage.setItem('placketName', blanktext);
}

for (i = 1; i <= 10; i++) {
  localStorage.setItem('fabricName' + i.toString(), '');
  localStorage.setItem('collarName' + i.toString(), '');
  localStorage.setItem('cuffName' + i.toString(), '');
  localStorage.setItem('placketName' + i.toString(), '');
}

function addSelectValues(page) {
  $select = $(page).find('.1-30');
  for (i = 1; i <= 30; i++) {
    $select.append(
      $('<option></option>')
        .val(i)
        .html(i)
    );
  }
}

function saveAmount() {
  for (i = 1; i <= 10; i++) {
    if (localStorage.getItem('fabricName' + i.toString()) != '') {
      var sel = document.getElementById('shirt' + i.toString() + '-amount');
      var amount = sel.options[sel.selectedIndex].value;
      localStorage.setItem('shirt' + i.toString() + '-amount', amount);
    }
  }
}
App.controller('start-screen', function(page) {
  this.transition = 'fade';
});

App.controller('signin-page', function(page) {
  this.transition = 'fade';
  clearDetails();
});

App.controller('register-page', function(page) {
  this.transition = 'fade';
});

App.controller('steps-page', function(page) {
  this.transition = 'fade';

  var fabricImage = localStorage.getItem('fabricImage');

  $(page)
    .find('#confirmed-fabric-image')
    .attr('src', fabricImage);

  $(page)
    .find('#confirmed-fabric-image')
    .css('width', '20vw');

  $(page)
    .find('#confirmed-fabric-image')
    .css('height', '20vw');

  var fabricName = localStorage.getItem('fabricName');

  $(page)
    .find('#confirmed-fabric-name')
    .html(fabricName);

  var collarImage = localStorage.getItem('collarImage');

  $(page)
    .find('#confirmed-collar-image')
    .attr('src', collarImage);

  $(page)
    .find('#confirmed-collar-image')
    .css('width', '25vw');

  $(page)
    .find('#confirmed-collar-image')
    .css('height', '20vw');

  var collarName = localStorage.getItem('collarName');

  $(page)
    .find('#confirmed-collar-name')
    .html(collarName);

  var cuffImage = localStorage.getItem('cuffImage');

  $(page)
    .find('#confirmed-cuff-image')
    .attr('src', cuffImage);

  $(page)
    .find('#confirmed-cuff-image')
    .css('width', '25vw');

  $(page)
    .find('#confirmed-cuff-image')
    .css('height', '20vw');

  var collarName = localStorage.getItem('cuffName');

  $(page)
    .find('#confirmed-cuff-name')
    .html(collarName);

  var placketImage = localStorage.getItem('placketImage');

  $(page)
    .find('#confirmed-placket-image')
    .attr('src', placketImage);

  $(page)
    .find('#confirmed-placket-image')
    .css('width', '20vw');

  $(page)
    .find('#confirmed-placket-image')
    .css('height', '20vw');

  var placketName = localStorage.getItem('placketName');

  $(page)
    .find('#confirmed-placket-name')
    .html(placketName);

  $(page)
    .find('#clear-button')
    .clickable()
    .on('click', function() {
      clearDetails();
      App.load('steps-page');
    });

  if (
    localStorage.getItem('fabricName') != '-' &&
    localStorage.getItem('collarName') != '-' &&
    localStorage.getItem('cuffName') != '-' &&
    localStorage.getItem('placketName') != '-'
  ) {
    $(page)
      .find('#add-to-basket')
      .css('display', 'block');
  }

  if (localStorage.getItem('fabricName') != '-') {
    $(page)
      .find('#confirmed-fabric-select')
      .html('Change');
  }

  if (localStorage.getItem('collarName') != '-') {
    $(page)
      .find('#confirmed-collar-select')
      .html('Change');
  }

  if (localStorage.getItem('cuffName') != '-') {
    $(page)
      .find('#confirmed-cuff-select')
      .html('Change');
  }

  if (localStorage.getItem('placketName') != '-') {
    $(page)
      .find('#confirmed-placket-select')
      .html('Change');
  }

  $(page)
    .find('#add-to-basket')
    .clickable()
    .on('click', function() {
      for (i = 1; i <= 10; i++) {
        if (localStorage.getItem('fabricName' + i.toString()) == '') {
          localStorage.setItem(
            'fabricName' + i.toString(),
            localStorage.getItem('fabricName')
          );

          localStorage.setItem('addedShirt', i);
          break;
        }
      }

      for (i = 1; i <= 10; i++) {
        if (localStorage.getItem('collarName' + i.toString()) == '') {
          localStorage.setItem(
            'collarName' + i.toString(),
            localStorage.getItem('collarName')
          );

          break;
        }
      }

      for (i = 1; i <= 10; i++) {
        if (localStorage.getItem('cuffName' + i.toString()) == '') {
          localStorage.setItem(
            'cuffName' + i.toString(),
            localStorage.getItem('cuffName')
          );

          break;
        }
      }

      for (i = 1; i <= 10; i++) {
        if (localStorage.getItem('placketName' + i.toString()) == '') {
          localStorage.setItem(
            'placketName' + i.toString(),
            localStorage.getItem('placketName')
          );

          break;
        }
      }

      clearDetails();
      App.load('basket-page');
    });
});

App.controller('fabric-page', function(page) {
  this.transition = 'fade';
  $(page)
    .find('figure')
    .clickable()
    .on('click', function() {
      App.load('fabric3-page');
      $('#chosen-fabric').html($(this).clone());
      $('p', '#chosen-fabric').css('display', 'block');
    });
});

App.controller('fabric2-page', function(page) {
  this.transition = 'fade';
  $(page)
    .find('figure')
    .clickable()
    .on('click', function() {
      App.load('fabric3-page');
      $('#chosen-fabric').html($(this).clone());
      $('p', '#chosen-fabric').css('display', 'block');
    });
});

App.controller('fabric3-page', function(page) {
  this.transition = 'fade';
  $(page)
    .find('#chosen-fabric-select')
    .clickable()
    .on('click', function() {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(
          'fabricImage',
          $('#chosen-fabric img').attr('src')
        );
        localStorage.setItem('fabricName', $('#chosen-fabric strong').html());

        App.load('steps-page');
      }
    });
});

App.controller('collar-page', function(page) {
  this.transition = 'fade';
  $(page)
    .find('figure')
    .clickable()
    .on('click', function() {
      App.load('collar-select-page');
      $('#chosen-collar').html($(this).clone());
      $('p', '#chosen-collar').css('display', 'block');
    });
});

App.controller('collar-select-page', function(page) {
  this.transition = 'fade';
  $(page)
    .find('#chosen-collar-select')
    .clickable()
    .on('click', function() {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(
          'collarImage',
          $('#chosen-collar img').attr('src')
        );
        localStorage.setItem('collarName', $('#chosen-collar strong').html());

        App.load('steps-page');
      }
    });
});

App.controller('cuff-page', function(page) {
  this.transition = 'fade';

  $(page)
    .find('figure')
    .clickable()
    .on('click', function() {
      App.load('cuff-select-page');
      $('#chosen-cuff').html($(this).clone());
      $('p', '#chosen-cuff').css('display', 'block');
    });
});

App.controller('cuff-select-page', function(page) {
  this.transition = 'fade';
  $(page)
    .find('#chosen-cuff-select')
    .clickable()
    .on('click', function() {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('cuffImage', $('#chosen-cuff img').attr('src'));

        localStorage.setItem('cuffName', $('#chosen-cuff strong').html());

        App.load('steps-page');
      }
    });
});

App.controller('placket-page', function(page) {
  this.transition = 'fade';

  $(page)
    .find('figure')
    .clickable()
    .on('click', function() {
      App.load('placket-select-page');
      $('#chosen-placket').html($(this).clone());
      $('p', '#chosen-placket').css('display', 'block');
    });
});

App.controller('placket-select-page', function(page) {
  this.transition = 'fade';
  $(page)
    .find('#chosen-placket-select')
    .clickable()
    .on('click', function() {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(
          'placketImage',
          $('#chosen-placket img').attr('src')
        );

        localStorage.setItem('placketName', $('#chosen-placket strong').html());

        App.load('steps-page');
      }
    });
});

App.controller('basket-page', function(page) {
  this.transition = 'fade';
  addSelectValues(page);
  for (i = 1; i <= 10; i++) {
    if (localStorage.getItem('fabricName' + i.toString()) !== '') {
      $(page)
        .find('#shirt' + i.toString())
        .removeClass('non-visible');

      $(page)
        .find('#shirt' + i.toString() + '-fabricname')
        .html(localStorage.getItem('fabricName' + i.toString()));
      $(page)
        .find('#shirt' + i.toString() + '-collarname')
        .html(localStorage.getItem('collarName' + i.toString()));
      $(page)
        .find('#shirt' + i.toString() + '-cuffname')
        .html(localStorage.getItem('cuffName' + i.toString()));
      $(page)
        .find('#shirt' + i.toString() + '-placketname')
        .html(localStorage.getItem('placketName' + i.toString()));

      //checking the shirt amount also
      var shirtAmount = localStorage.getItem(
        'shirt' + i.toString() + '-amount'
      );

      $(page)
        .find('#shirt' + i.toString() + '-amount option')
        .each(function() {
          if ($(this).val() == shirtAmount) {
            $(this).attr('selected', 'selected');
          }
        });
    }
  }

  if (localStorage.getItem('addedShirt') != undefined) {
    $(page)
      .find('#shirt' + localStorage.getItem('addedShirt').toString())
      .css('background-color', 'rgb(230,255,230)');

    setTimeout(function() {
      $(page)
        .find('#shirt' + localStorage.getItem('addedShirt').toString())
        .css('background-color', 'rgb(255,255,255)');
      localStorage.setItem('addedShirt', undefined);
    }, 1500);
  }

  $(page)
    .find('#remove-shirt1')
    .on('click', function() {
      $(page)
        .find('#shirt1')
        .css('background-color', 'rgb(255,255,220)');

      setTimeout(function() {
        localStorage.setItem('fabricName1', '');
        localStorage.setItem('collarName1', '');
        localStorage.setItem('cuffName1', '');
        localStorage.setItem('placketName1', '');

        saveAmount();
        localStorage.setItem('shirt1-amount', 1);

        App.load('basket-page');
      }, 500);
    });

  $(page)
    .find('#remove-shirt2')
    .on('click', function() {
      $(page)
        .find('#shirt2')
        .css('background-color', 'rgb(255,255,220)');

      setTimeout(function() {
        localStorage.setItem('fabricName2', '');
        localStorage.setItem('collarName2', '');
        localStorage.setItem('cuffName2', '');
        localStorage.setItem('placketName2', '');

        saveAmount();
        localStorage.setItem('shirt2-amount', 1);

        App.load('basket-page');
      }, 500);
    });

  $(page)
    .find('#remove-shirt3')
    .on('click', function() {
      $(page)
        .find('#shirt3')
        .css('background-color', 'rgb(255,255,220)');

      setTimeout(function() {
        localStorage.setItem('fabricName3', '');
        localStorage.setItem('collarName3', '');
        localStorage.setItem('cuffName3', '');
        localStorage.setItem('placketName3', '');

        saveAmount();
        localStorage.setItem('shirt3-amount', 1);

        App.load('basket-page');
      }, 500);
    });

  $(page)
    .find('#remove-shirt4')
    .on('click', function() {
      $(page)
        .find('#shirt4')
        .css('background-color', 'rgb(255,255,220)');

      setTimeout(function() {
        localStorage.setItem('fabricName4', '');
        localStorage.setItem('collarName4', '');
        localStorage.setItem('cuffName4', '');
        localStorage.setItem('placketName4', '');

        saveAmount();
        localStorage.setItem('shirt4-amount', 1);

        App.load('basket-page');
      }, 500);
    });

  $(page)
    .find('#remove-shirt5')
    .on('click', function() {
      $(page)
        .find('#shirt5')
        .css('background-color', 'rgb(255,255,220)');

      setTimeout(function() {
        localStorage.setItem('fabricName5', '');
        localStorage.setItem('collarName5', '');
        localStorage.setItem('cuffName5', '');
        localStorage.setItem('placketName5', '');

        saveAmount();
        localStorage.setItem('shirt5-amount', 1);

        App.load('basket-page');
      }, 500);
    });

  $(page)
    .find('#remove-shirt6')
    .on('click', function() {
      $(page)
        .find('#shirt3')
        .css('background-color', 'rgb(255,255,220)');

      setTimeout(function() {
        localStorage.setItem('fabricName6', '');
        localStorage.setItem('collarName6', '');
        localStorage.setItem('cuffName6', '');
        localStorage.setItem('placketName6', '');

        saveAmount();
        localStorage.setItem('shirt6-amount', 1);

        App.load('basket-page');
      }, 500);
    });

  $(page)
    .find('#remove-shirt7')
    .on('click', function() {
      $(page)
        .find('#shirt7')
        .css('background-color', 'rgb(255,255,220)');

      setTimeout(function() {
        localStorage.setItem('fabricName7', '');
        localStorage.setItem('collarName7', '');
        localStorage.setItem('cuffName7', '');
        localStorage.setItem('placketName7', '');

        saveAmount();
        localStorage.setItem('shirt7-amount', 1);

        App.load('basket-page');
      }, 500);
    });

  $(page)
    .find('#remove-shirt8')
    .on('click', function() {
      $(page)
        .find('#shirt8')
        .css('background-color', 'rgb(255,255,220)');

      setTimeout(function() {
        localStorage.setItem('fabricName8', '');
        localStorage.setItem('collarName8', '');
        localStorage.setItem('cuffName8', '');
        localStorage.setItem('placketName8', '');

        saveAmount();
        localStorage.setItem('shirt8-amount', 1);

        App.load('basket-page');
      }, 500);
    });

  $(page)
    .find('#remove-shirt9')
    .on('click', function() {
      $(page)
        .find('#shirt9')
        .css('background-color', 'rgb(255,255,220)');

      setTimeout(function() {
        localStorage.setItem('fabricName9', '');
        localStorage.setItem('collarName9', '');
        localStorage.setItem('cuffName9', '');
        localStorage.setItem('placketName9', '');

        saveAmount();
        localStorage.setItem('shirt9-amount', 1);

        App.load('basket-page');
      }, 500);
    });

  $(page)
    .find('#remove-shirt10')
    .on('click', function() {
      $(page)
        .find('#shirt10')
        .css('background-color', 'rgb(255,255,220)');

      setTimeout(function() {
        localStorage.setItem('fabricName10', '');
        localStorage.setItem('collarName10', '');
        localStorage.setItem('cuffName10', '');
        localStorage.setItem('placketName10', '');

        saveAmount();
        localStorage.setItem('shirt10-amount', 1);

        App.load('basket-page');
      }, 500);
    });

  $(page)
    .find('#add-new-shirt')
    .on('click', function() {
      saveAmount();
      App.load('steps-page');
    });
});

App.controller('shipment-page', function(page) {
  this.transition = 'fade';
});

App.controller('payment-page', function(page) {});

try {
  App.restore();
} catch (err) {
  App.load('start-screen');
}
//{ maxAge: 5*60*6000 }
