var slider = document.getElementById('slider');

noUiSlider.create(slider, {
	start: [ 0 ],
	step: 12.5,
	range: {
			'min': [ 0 ],
			'25%': [ 12.5 , 12.5 ],
			'50%': [ 25 , 25 ],
			'75%': [ 37.5 , 37.5 ],
			'max': [ 50 ]
		}
});

slider.noUiSlider.on('set', function(){

  var staffNumbers = slider.noUiSlider.get();
	// console.log(staffNumbers);
	$("body").data( "staffNumbers", staffNumbers);
	// console.log($("body").data("staffNumbers"));
	// document.getElementById('js-slider-staff').value = staffNumbers;

	switch(staffNumbers) {
    case '0.00':
				document.getElementById('js-slider-staff').value = "1 - 6";
        break;
    case '12.50':
				document.getElementById('js-slider-staff').value = "6 - 10";
        break;
		case '25.00':
				document.getElementById('js-slider-staff').value = "11 - 20";
				break;
		case '37.50':
				document.getElementById('js-slider-staff').value = "20 - 50";
				break;
		case '50.00':
				document.getElementById('js-slider-staff').value = "50 +";
				break;
		default:
				document.getElementById('js-slider-staff').value = staffNumbers;
			// do nothing
	}

	// $('.js-staff-quantity').setAttribute('data', "staff: staffNumbers")
	// $('.js-staff-quantity').data( "staff", 'staffNumbers' );
	// $('.js-staff-quantity').data( "staff");
});
