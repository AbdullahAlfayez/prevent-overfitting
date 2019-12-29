var $ = jQuery;

//circumference calculator
function circumferenceCalculator(number, type) {
  if (type === 'radius') {
    var radius = number;
    var diameter = getDiameter(radius);
    var circumference = getCircumference(diameter);
    var areaOfCircle = getAreaOfCircle(diameter);
    return {
      radius: radius,
      diameter: diameter,
      circumference: circumference,
      areaOfCircle: areaOfCircle
    }
  }

  if (type === 'diameter') {
    var diameter = number;
    var radius = diameterToRadius(diameter);
    var circumference = getCircumference(diameter);
    var areaOfCircle = getAreaOfCircle(diameter);
    return {
      radius: radius,
      diameter: diameter,
      circumference: circumference,
      areaOfCircle: areaOfCircle
    }
  }

  if (type === 'circumference') {
    var circumference = number;
    var diameter = circumferenceToDiameter(circumference);
    var radius = diameterToRadius(diameter);
    var areaOfCircle = getAreaOfCircle(diameter);
    return {
      radius: radius,
      diameter: diameter,
      circumference: circumference,
      areaOfCircle: areaOfCircle
    }
  }

  if (type === 'area') {
    var areaOfCircle = number;
    var diameter = areaToDiameter(areaOfCircle);
    var circumference = getCircumference(diameter);
    var radius = diameterToRadius(diameter);

    return {
      radius: radius,
      diameter: diameter,
      circumference: circumference,
      areaOfCircle: areaOfCircle
    }
  }
};

function getDiameter(radius) {
  return radius * 2;
}

function getCircumference(diameter) {
  return Math.PI * diameter;
}

function getAreaOfCircle(diameter) {
  return Math.PI * Math.pow((diameter / 2), 2);
}

function getRadius(diameter) {
  return diameter / 2;
}

function circumferenceToDiameter(circumference) {
  return circumference / Math.PI;
}

function diameterToRadius(diameter) {
  return diameter / 2;
}

function areaToDiameter(area) {
  return Math.sqrt(area / Math.PI) * 2;
}

var unitConverter = (function () {
  return {
    cmToFeet: function (cm) {
      return cm * 0.0328084;
    },
    cmToInches: function (cm) {
      return cm * 0.39370079;
    },
    cmToYards: function (cm) {
      return cm * 0.0109361;
    },
    cmToMM: function (cm) {
      return cm * 10;
    },
    cmToMeters: function (cm) {
      return cm * 0.01;
    },
    feetToInches: function (feet) {
      return feet * 12;
    },
    feetToYards: function (feet) {
      return feet * 0.333333;
    },
    feetToMM: function (feet) {
      return feet * 304.8;
    },
    feetToCM: function (feet) {
      return feet * 30.48;
    },
    feetToMeters: function (feet) {
      return feet * 0.3048;
    },
    inchesToFeet: function (inches) {
      return inches / 12;
    },
    inchesToYards: function (inches) {
      return inches * 0.0277778;
    },
    inchesToMM: function (inches) {
      return inches * 25.4;
    },
    inchesToCM: function (inches) {
      return inches * 2.54;
    },
    inchesToMeters: function (inches) {
      return inches * 0.0254;
    },
    yardsToFeet: function (yards) {
      return yards * 3;
    },
    yardsToInches: function (yards) {
      return yards * 36;
    },
    yardsToMM: function (yards) {
      return yards * 914.4;
    },
    yardsToCM: function (yards) {
      return yards * 91.44;
    },
    yardsToMeters: function (yards) {
      return yards * 0.9144;
    },
    mmToFeet: function (mm) {
      return mm * 0.00328084;
    },
    mmToInches: function (mm) {
      return mm * 0.0393701;
    },
    mmToYards: function (mm) {
      return mm * 0.00109361;
    },
    mmToCM: function (mm) {
      return mm * 0.1;
    },
    mmToMeters: function (mm) {
      return mm * 0.001;
    },
    cmToFeet: function (cm) {
      return cm * 0.0328084;
    },
    cmToInches: function (cm) {
      return cm * 0.393701;
    },
    cmToYards: function (cm) {
      return cm * 0.0109361;
    },
    cmToMM: function (cm) {
      return cm * 10;
    },
    cmToMeters: function (cm) {
      return cm * 0.01;
    },
    metersToFeet: function (meters) {
      return meters * 3.28084;
    },
    metersToInches: function (meters) {
      return meters * 39.3701;
    },
    metersToYards: function (meters) {
      return meters * 1.09361;
    },
    metersToMM: function (meters) {
      return meters * 1000;
    },
    metersToCM: function (meters) {
      return meters * 100;
    }
  }
})();

function convertFromTo(from, to, units) {
  if (from === to) {
    return units;
  }
  if (from === 'cm' && to === 'ft') {
    return unitConverter.cmToFeet(units);
  }
  if (from === 'cm' && to === 'yd') {
    return unitConverter.cmToYards(units);
  }
  if (from === 'cm' && to === 'in') {
    return unitConverter.cmToInches(units);
  }
  if (from === 'cm' && to === 'mm') {
    return unitConverter.cmToMM(units);
  }
  if (from === 'cm' && to === 'm') {
    return unitConverter.cmToMeters(units);
  }

  if (from === 'in' && to === 'ft') {
    return unitConverter.inchesToFeet(units);
  }
  if (from === 'in' && to === 'yd') {
    return unitConverter.inchesToYards(units);
  }
  if (from === 'in' && to === 'cm') {
    return unitConverter.inchesToCM(units);
  }
  if (from === 'in' && to === 'mm') {
    return unitConverter.inchesToMM(units);
  }
  if (from === 'in' && to === 'm') {
    return unitConverter.inchesToMeters(units);
  }

  if (from === 'ft' && to === 'cm') {
    return unitConverter.feetToCM(units);
  }
  if (from === 'ft' && to === 'yd') {
    return unitConverter.feetToYards(units);
  }
  if (from === 'ft' && to === 'in') {
    return unitConverter.feetToInches(units);
  }
  if (from === 'ft' && to === 'mm') {
    return unitConverter.feetToMM(units);
  }
  if (from === 'ft' && to === 'm') {
    return unitConverter.feetToMeters(units);
  }

  if (from === 'yd' && to === 'cm') {
    return unitConverter.yardsToCM(units);
  }
  if (from === 'yd' && to === 'ft') {
    return unitConverter.yardsToFeet(units);
  }
  if (from === 'yd' && to === 'in') {
    return unitConverter.yardsToInches(units);
  }
  if (from === 'yd' && to === 'mm') {
    return unitConverter.yardsToMM(units);
  }
  if (from === 'yd' && to === 'm') {
    return unitConverter.yardsToMeters(units);
  }

  if (from === 'm' && to === 'cm') {
    return unitConverter.metersToCM(units);
  }
  if (from === 'm' && to === 'ft') {
    return unitConverter.metersToFeet(units);
  }
  if (from === 'm' && to === 'in') {
    return unitConverter.metersToInches(units);
  }
  if (from === 'm' && to === 'mm') {
    return unitConverter.metersToMM(units);
  }
  if (from === 'm' && to === 'yd') {
    return unitConverter.metersToYards(units);
  }

  if (from === 'mm' && to === 'cm') {
    return unitConverter.mmToCM(units);
  }
  if (from === 'mm' && to === 'ft') {
    return unitConverter.mmToFeet(units);
  }
  if (from === 'mm' && to === 'in') {
    return unitConverter.mmToInches(units);
  }
  if (from === 'mm' && to === 'yd') {
    return unitConverter.mmToYards(units);
  }
  if (from === 'mm' && to === 'm') {
    return unitConverter.mmToMeters(units);
  }

  return units;
}

function kgsToUSTons(kgs) {
  return kgs / 907.185;
}

function kgsToImperialTons(kgs) {
  return kgs / 1016.05;
}

function kgsToMetricTons(kgs) {
  return kgs / 1000;
}

function kgsToGrains(kgs) {
  return kgs * 15432.4;
}

function kgsToDrachms(kgs) {
  return kgs * 564.3834;
}

function kgsToOunces(kgs) {
  return kgs * 35.274;
}

function kgsToPounds(kgs) {
  return kgs * 2.20462;
}

function kgsToStones(kgs) {
  return kgs * 0.157473;
}

var volumeConverter = (function(){
  return {
    toCubicFeet: function(yards) {
      return yards * 27;
    },
    toCubicMeters: function(feet) {
      return feet / 35.3147;
    },
    toCubicCentimeters: function(feet) {
      return feet * 28316.847;
    },
    toCubicInches: function(feet) {
      return feet / 1728;
    },
    toCubicDecimeters: function(feet) {
      return feet * 28.3168;
    },
    toCubicYards: function(feet) {
      return feet * 0.037037;
    },
    toLiters: function(feet) {
      return feet * 28.3168;
    },
    toUSGallons: function(feet) {
      return feet * 7.48052;
    },
    toUSQuarts: function(feet) {
      return feet * 29.9221;
    },
    toUSPints: function(feet) {
      return feet * 59.8442;
    },
    toUKGallons: function(feet) {
      return feet * 6.22884;
    },
    toUKQuarts: function(feet) {
      return feet * 24.9153;
    },
    toUKPints: function(feet) {
      return feet * 49.8307;
    },
  }
}());

var yardsConverter = (function() {
  return {
    toCubicFeet: function(yards) {
      return yards * 27;
    },
    toCubicMeters: function(yards) {
      return yards / 1.308;
    },
    toCubicCentimeters: function(yards) {
      return yards * 764554.858;
    },
    toCubicInches: function(yards) {
      return yards * 46656;
    },
    toCubicDecimeters: function(yards) {
      return yards * 764.555;
    },
    toCubicYards: function(feet) {
      return feet * 0.037037;
    }
  }
}());

function convertDiameter(diameterUnit, areaUnit, diameter) {
  return convertFromTo(diameterUnit, areaUnit, diameter);
}

function removeWhiteSpaceTextarea(text) {
  return $.trim(text).replace(/\s*[\r\n]+\s*/g, '\n')
              .replace(/(<[^\/][^>]*>)\s*/g, '$1')
              .replace(/\s*(<\/[^>]+>)/g, '$1');
}

function calcEmbedWidgetURL() {
  var calcEmbedDiv = $('.calculator-embed-widget');
  var loaderSVG = `<svg  stroke-width="2" stroke="#ffffff" fill="none" class="loader" width="22px" height="22px" xmlns="http://www.w3.org/2000/svg">
                      <g>
                          <ellipse  cx="11" cy="11" rx="10" ry="10"/>
                      </g>
                  </svg>`;

  var embedCopyBtn = $('.copy-btn');
  
  var embedCopyBtnText = 'Copy Code!';
  
  embedCopyBtn.addClass('loading');

  // Set loader for copy button until clipboard.js is loaded.
  embedCopyBtn.html(loaderSVG);

  var pane = calcEmbedDiv.find('textarea');

  pane.focus(function() { 
      $(this).select(); 
  });

  $.getScript( "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.4/clipboard.min.js", function( data, textStatus, jqxhr ) {
      embedCopyBtn.removeClass('loading');
      embedCopyBtn.html(embedCopyBtnText);
      var clipboard = new ClipboardJS('.copy-btn');

      embedCopyBtn.on('click', function() { 
          var $this = $(this);                
          clipboard.on('success', function(event) {
              $(event.trigger).addClass('success');
              $(event.trigger).html('Copied!');
              setTimeout(function() {
                  $(event.trigger).removeClass('success');
                  $(event.trigger).html('Copy Code!');
                  // console.log(event);
                  event.clearSelection();
              }, 1200);
          });
      })
  });
}

$(document).ready(function () {
  var calcEmbedDiv = $('.calculator-embed-widget');
  var textareaClean = $('.js-clean-url');
  var modal = $('.modal');

  $(".menu-btn").on("click", function () {
    $(".sidebar").toggleClass("open");
    $(".blackLayer").toggleClass("open");
  });

  $(".blackLayer").on("click", function () {
    $(".blackLayer").removeClass("open");
    $(".sidebar").removeClass("open");
  });



  if (calcEmbedDiv.length) {
    calcEmbedWidgetURL();
  }

  if (modal.length) {
    MicroModal.init({
      onShow: function() {
          $.each(textareaClean, function( index, element ) {
            var $el = $(element);
            var text = $el.val();
            console.log(text);
            $el.val(removeWhiteSpaceTextarea(text));
          });
      }
    });

  }


  // Remove empty white space from all textareas.
  $.each(textareaClean, function( index, element ) {
      var $el = $(element);
      var text = $el.val();
      $el.val(removeWhiteSpaceTextarea(text));
  });

  $('#calculator_menu').on('change', function (e) {
    window.location = this.value;
  });

  $('#calculator_menu option').each(function () {
    if (this.value === window.location.href) {
      $(this).parent().val($(this).val())
    }
  });

  var $blogMenuBtn = $('.blog-menu .blog-menu-btn');
  var $blogMenu = $('.blog-menu .sidebar');

  $blogMenuBtn.on('click', function () {
    $(this).toggleClass('open');
    $blogMenu.toggleClass('open');
  });

  (function () {
    if (typeof r_fb_share !== 'undefined') {
      r_fb_share.href = 'http://www.facebook.com/share.php?u=' + encodeURIComponent(location.href);
      //r_whatsapp_share.href='whatsapp://send?text=' + encodeURIComponent(location.href); 
      // r_google_share.href='https://plus.google.com/share?url=' + encodeURIComponent(location.href); 
      r_twitter_share.href = 'https://twitter.com/intent/tweet?text=' + document.title + ' ' + encodeURIComponent(location.href);
      r_linkedin_share.href = 'https://www.linkedin.com/shareArticle?mini=true&url=' + encodeURIComponent(location.href) + '&title' + document.title + '=&summary=' + $('meta[name="description"]').attr('content'); +'&source=SquareFootageArea.com';
    } else {
      return;
    }
  })();

  var circumferenceForm = $('#circumference-calculator');

  if (circumferenceForm.length) {
    var radiusInput = circumferenceForm.find('#radius_number');
    var radiusUnit = circumferenceForm.find('#radius_unit');
    var diameterInput = circumferenceForm.find('#diameter_number');
    var diameterUnit = circumferenceForm.find('#diameter_unit');
    var circumferenceInput = circumferenceForm.find('#circumference_number');
    var circumferenceUnit = circumferenceForm.find('#circumference_unit');
    var areaInput = circumferenceForm.find('#area_number');
    var areaUnit = circumferenceForm.find('#area_unit');

    radiusInput.on('input', function (event) {
      var results = circumferenceCalculator(radiusInput.val(), 'radius');

      var convertedDiameterForArea = convertDiameter(radiusUnit.val(), diameterUnit.val(), results.diameter);

      diameterInput.val(
        Number(convertFromTo(radiusUnit.val(), diameterUnit.val(), results.diameter).toFixed(4))
      );

      circumferenceInput.val(
        Number(convertFromTo(radiusUnit.val(), circumferenceUnit.val(), results.circumference).toFixed(4))
      );

      areaInput.val(
        Number(getAreaOfCircle(convertedDiameterForArea).toFixed(4))
      );

    });

    var radiusCachedUnitValue;
    radiusUnit.click(function (e) {
      e.stopImmediatePropagation()
      radiusCachedUnitValue = radiusUnit.val();
    }).change(function (e) {
      e.stopImmediatePropagation()
      radiusInput.val(Number(convertFromTo(radiusCachedUnitValue, e.currentTarget.value, radiusInput.val()).toFixed(4)))
    });


    diameterInput.on('input', function () {
      var results = circumferenceCalculator(diameterInput.val(), 'diameter');

      // Convert diameter from current unit type to area unit type.
      var convertedDiameterForArea = convertDiameter(diameterUnit.val(), areaUnit.val(), results.diameter);

      // Update Input Values
      radiusInput.val(
        Number(convertFromTo(diameterUnit.val(), radiusUnit.val(), results.radius).toFixed(4))
      );

      circumferenceInput.val(
        Number(convertFromTo(diameterUnit.val(), circumferenceUnit.val(), results.circumference).toFixed(4))
      );

      areaInput.val(
        Number(getAreaOfCircle(convertedDiameterForArea).toFixed(4))
      );
    });

    var diameterCachedUnitValue;
    diameterUnit.click(function (e) {
      e.stopImmediatePropagation()
      diameterCachedUnitValue = diameterUnit.val();
    }).change(function (e) {
      e.stopImmediatePropagation()
      diameterInput.val(Number(convertFromTo(diameterCachedUnitValue, e.currentTarget.value, diameterInput.val()).toFixed(4)))
    })

    circumferenceInput.on('input', function () {
      var results = circumferenceCalculator(circumferenceInput.val(), 'circumference');

      var convertedDiameterForArea = convertDiameter(circumferenceUnit.val(), areaUnit.val(), results.diameter);

      radiusInput.val(
        Number(convertFromTo(circumferenceUnit.val(), radiusUnit.val(), results.radius).toFixed(4))
      );

      diameterInput.val(
        Number(convertFromTo(circumferenceUnit.val(), diameterUnit.val(), results.diameter).toFixed(4))
      );

      areaInput.val(
        Number(getAreaOfCircle(convertedDiameterForArea).toFixed(4))
      );
    });

    var circumferenceCachedUnitValue;
    circumferenceUnit.click(function (e) {
      e.stopImmediatePropagation()
      circumferenceCachedUnitValue = circumferenceUnit.val();
    }).change(function (e) {
      e.stopImmediatePropagation()
      circumferenceInput.val(Number(convertFromTo(circumferenceCachedUnitValue, e.currentTarget.value, circumferenceInput.val()).toFixed(4)))
    });

    var areaCachedUnitValue;
    areaUnit.click(function (e) {
      e.stopImmediatePropagation()
      areaCachedUnitValue = areaUnit.val();
    }).change(function (e) {
      e.stopImmediatePropagation()
      areaInput.val(
        Number(convertFromTo(areaCachedUnitValue, e.currentTarget.value,
          convertFromTo(areaCachedUnitValue, e.currentTarget.value, areaInput.val())
        ).toFixed(4))
      )
    });

  }

  var $circleAreaCalculator = $("#circle-area-calculator");

  if ($circleAreaCalculator.length) {
    var radiusInput = $circleAreaCalculator.find('#radius_number');
    var radiusUnit = $circleAreaCalculator.find('#radius_unit');
    var diameterInput = $circleAreaCalculator.find('#diameter_number');
    var diameterUnit = $circleAreaCalculator.find('#diameter_unit');

    var results = circumferenceCalculator(diameterInput.val(), 'diameter');

    if (diameterInput.val() !== "") {
      radiusInput.val(
        Number(convertFromTo(diameterUnit.val(), radiusUnit.val(), results.radius).toFixed(4))
      );
    }

    diameterInput.on('input', function () {
      var results = circumferenceCalculator(diameterInput.val(), 'diameter');
      radiusInput.val(
        Number(convertFromTo(diameterUnit.val(), radiusUnit.val(), results.radius).toFixed(4))
      );
    });

    radiusInput.on('input', function () {
      var results = circumferenceCalculator(radiusInput.val(), 'radius');
      diameterInput.val(
        Number(convertFromTo(radiusUnit.val(), diameterUnit.val(), results.diameter).toFixed(4))
      );
    });

  }

  // Gravel calculator
  var $weightDropdown = $('#weight-converter');
  var $weightEl = $('#weight > h2');
  var weight = parseFloat($weightEl.html());

  $weightDropdown.on("change", function(e) {
    var weightUnit = e.currentTarget.value;

    switch (weightUnit) {
      case "us-ton":
        $weightEl.html(kgsToUSTons(weight).toFixed(4));
        break;
      
      case "imperial-ton":
        $weightEl.html(kgsToImperialTons(weight).toFixed(4));
        break;

      case "metric-ton":
        $weightEl.html(kgsToMetricTons(weight).toFixed(4));
        break;

      case "grains":
        $weightEl.html(kgsToGrains(weight).toFixed(4));
        break;

      case "drachms":
        $weightEl.html(kgsToDrachms(weight).toFixed(4));
        break;
      
      case "ounces":
        $weightEl.html(kgsToOunces(weight).toFixed(4));
        break;

      case "pounds":
        $weightEl.html(kgsToPounds(weight).toFixed(4));
        break;

      case "stones":
        $weightEl.html(kgsToStones(weight).toFixed(4));
        break;

      default:
        $weightEl.html(weight);
        return;
    }

    e.preventDefault();
  });


  var $volumeDropdown = $('#volume-converter');
  var $volumeEl = $('#volume > h2');
  var volume = parseFloat($volumeEl.html());

  $volumeDropdown.on("change", function(e) {
    var volumeUnit = e.currentTarget.value;

    switch (volumeUnit) {
      case "ft3":
        $volumeEl.html(yardsConverter.toCubicFeet(volume).toFixed(4));
        break;
      
      case "cm3":
        $volumeEl.html(yardsConverter.toCubicCentimeters(volume).toFixed(4));
        break;

      case "dm3":
        $volumeEl.html(yardsConverter.toCubicDecimeters(volume).toFixed(4));
        break;

      case "m3":
        $volumeEl.html(yardsConverter.toCubicMeters(volume).toFixed(4));
        break;

      case "in3":
        $volumeEl.html(yardsConverter.toCubicInches(volume).toFixed(4));
        break;
      
      default:
        $volumeEl.html(volume);
        return;
    }

    e.preventDefault();
  });

  // Gravel calculator
  var $areaDropdown = $('#area-converter');
  var $areaEl = $('#area > h2');
  var area = parseFloat($areaEl.html());

  $areaDropdown.on("change", function(e) {
    var areaUnit = e.currentTarget.value;

    switch (areaUnit) {
      case "sq-cm":
        $areaEl.html((area * 929.03).toFixed(4));
        break;
      
      case "sq-m":
        $areaEl.html( (area / 10.764).toFixed(4) );
        break;

      case "sq-km":
        $areaEl.html((area / 10763910.41671).toFixed(6));
        break;

      case "sq-in":
        $areaEl.html((area * 144).toFixed(4));
        break;

      case "sq-yd":
        $areaEl.html((area / 9).toFixed(4));
        break;
      
      case "sq-mi":
        $areaEl.html((area / 2.788e+7).toFixed(6));
        break;

      case "acres":
        $areaEl.html((area / 43560).toFixed(6));
        break;

      case "ares":
        $areaEl.html((area / 1076.391).toFixed(6));
        break;

      case "decares":
        $areaEl.html((area /10763.910).toFixed(6));
        break;

      case "hectares":
        $areaEl.html((area / 107639.104).toFixed(6));
        break;

      default:
        $areaEl.html(area);
        return;
    }

    e.preventDefault();
  });

});