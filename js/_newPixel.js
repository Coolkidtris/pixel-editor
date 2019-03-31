
function newPixel (width, height, palette) {
    currentLayer = new Canvas(width, height, canvas);
    currentLayer.initialize();

    checkerBoard = new Canvas(width, height, checkerBoard);
    checkerBoard.initialize();

	canvasSize = currentLayer.canvasSize;
	//remove current palette
	colors = document.getElementsByClassName('color-button');
	while (colors.length > 0) {
		colors[0].parentElement.remove();
	}
	
	//add colors from selected palette
	var selectedPalette = getText('palette-button');
	if (selectedPalette != 'Choose a palette...') {
		
		//if this palette isnt the one specified in the url, then reset the url
		if (!palettes[selectedPalette].specified)
		  history.pushState(null, null, '/pixel-editor/app');
		
		//fill the palette with specified palette
		createColorPalette(palettes[selectedPalette].colors,true);
	}
	else {
	  //this wasn't a specified palette, so reset the url
	  history.pushState(null, null, '/pixel-editor/app');
	  
	  //generate default colors
	  var fg = hslToRgb(Math.floor(Math.random()*255), 230,70);
	  var bg = hslToRgb(Math.floor(Math.random()*255), 230,170);
	  
	  //convert colors to hex
	  var defaultForegroundColor = rgbToHex(fg.r,fg.g,fg.b);
	  var defaultBackgroundColor = rgbToHex(bg.r,bg.g,bg.b);
	  
	  //add colors to paletee
	  addColor(defaultForegroundColor).classList.add('selected');
	  addColor(defaultBackgroundColor);
    
    //fill background of canvas with bg color
		fillCheckerboard();
		/*
		currentLayer.context.fillStyle = '#'+defaultBackgroundColor;
		currentLayer.context.fillRect(0, 0, canvasSize[0], canvasSize[1]);
		
		console.log('#'+defaultBackgroundColor)
		*/
		
		//set current drawing color as foreground color
		currentLayer.context.fillStyle = '#'+defaultForegroundColor;
		selectedPalette = 'none';
	}
		
	//reset undo and redo states
	undoStates = [];
	redoStates = [];
		
	closeDialogue();
	updateCursor();
	
	document.getElementById('save-as-button').classList.remove('disabled');
	documentCreated = true;
	
}