	var images = document.body.querySelectorAll("img");

	for(var iterator = 0; iterator < images.length; iterator++) {
		var image = images[iterator];
		var canvas = document.createElement('canvas');
		var context = canvas.getContext('2d');
		context.drawImage(image, 0, 0);
		var pixels = context.getImageData(0, 0, image.width, image.height).data;
		
		for(var i = 0; i < pixels.length; i += 4) {
			pixels[i] = 255 - pixels[i];
			pixels[i + 1] = 255 - pixels[i + 1];
			pixels[i + 2] = 255 - pixels[i + 2];
		}

		context.putImageData(image, 0, 0);
		image.parentNode.replaceChild(canvas, image);
	}
