$(document).ready(function() {

	$thumbnail = $('.gallery__item');
	$modal = $('.modal');
	$modal_image = $('.modal__image');
	$modal_close = $('.modal-close');
	$next_button = $('.next-button');
	$prev_button = $('.prev-button');

    
	//function to open the modal and display the image from the thumbnail
	$thumbnail.click(function() {
		$current_image = $(this);

		//get the path of the image source (find the url for the image), and save it as a variable named img_src
		img_src = $(this).attr('data-href');

		//check to see if there is a next image, an image next to the thumbnail that was clicked on
		if ($(this).next().length) {
			//save the data-href of the image next to the thumbnail, and save it as a variable named imgnext
			imgnext = $(this).next().attr('data-href');

			//update the next buttons data-href to the value saved in the imgnext variable
			$next_button.attr('data-href', imgnext);
			
			//since the next button has a data-href value, we should remove the 'no-link' class from the next button
			$next_button.removeClass('no-link');
		} else {

			//if there is no next image, add the 'no-link' class to the next button
			$next_button.addClass('no-link');
		}

		//check to see if there is a previous image, an image previous to the thumbnail that was clicked on
		if ($(this).prev().length) {

			//save the data-href of the image previous to the thumbnail, and save it as a variable named imgprev
			imgprev = $(this).prev().attr('data-href');

			//update the prev buttons data-href to the value saved in the imgprev variable
			$prev_button.attr('data-href', imgprev);

			//since the prev button has a data-href value, we should remove the 'no-link' class from the prev button
			$prev_button.removeClass('no-link');
		} else {

			//if there is no previous image, add the 'no-link' class to the prev button
			$prev_button.addClass('no-link');
		}

		//pass the image url to the .modal__image, and put it in the src attribute
		$modal_image.attr('src', img_src);

		// open up the modal
		$modal.addClass('modal--open');

	});

	$next_button.click(function() {

		//update the img_src variable with the url from the next buttons data-href attribute
		img_src = $(this).attr('data-href');

		//change the value of the $current_image variable to the the image next to it's current value
		$current_image = $current_image.next();

		//update the img_next and img_prev variables with the urls from the data-href attributes from the previous and next images
		img_next = $current_image.next().attr('data-href');
		img_prev = $current_image.prev().attr('data-href');

		//update the source of the image in the modal
		$modal_image.attr('src', img_src);

		//update the data-href attribute values of the previous and the next buttons
		$next_button.attr('data-href', img_next);
		$prev_button.attr('data-href', img_prev);

		//remove the 'no-link' class from the previous button
		$prev_button.removeClass('no-link');

		//check to see if there is not another image after the current image
		if (!$current_image.next().length) {

			//add the 'no-link' class to the next button, and remove the data-href value of the next button
			$next_button.addClass('no-link');
			$next_button.attr('data-href', '');
		}
	});

	$prev_button.click(function() {

		//update the img_src variable with the url from the prev buttons data-href attribute
		img_src = $(this).attr('data-href');

		//change the value of the $current_image variable to the the image previous to it's current value
		$current_image = $current_image.prev();

		//update the img_next and img_prev variables with the urls from the data-href attributes from the previous and next images
		img_next = $current_image.next().attr('data-href');
		img_prev = $current_image.prev().attr('data-href');

		//update the source of the image in the modal
		$modal_image.attr('src', img_src);

		//update the data-href attribute values of the previous and the next buttons
		$next_button.attr('data-href', img_next);
		$prev_button.attr('data-href', img_prev);

		//remove the 'no-link' class from the next button
		$next_button.removeClass('no-link');

		//check to see if there is not another image previous to the current image
		if (!$current_image.prev().length) {

			//add the 'no-link' class to the prev button, and remove the data-href value of the prev button
			$prev_button.addClass('no-link');
			$prev_button.attr('data-href', '');
		}
	});

	//add function to click on close button and close the modal
	$modal_close.click(function() {

		//remove the modal--open class from the modal
		$modal.removeClass('modal--open');

		//remove the src value from the modal image
		$modal_image.attr('src', '');

		//remove the data-href values from the next and previous buttons
		$next_button.attr('data-href', '');
		$prev_button.attr('data-href', '');

		//remove the 'no-link' class from the buttons
		$('.no-link').removeClass('no-link');
	});


});