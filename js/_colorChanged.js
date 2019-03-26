

document.getElementById('jscolor-hex-input').addEventListener('change', colorChanged, false);

on('input', 'jscolor-hex-input', function (e) {
  
  //get hex value
  var newColorHex = e.target.value.toLowerCase();
  
  //if the color is not (yet) a valid hex color, exit this function and do nothing
  if (/^[0-9a-f]{6}$/i.test(newColorHex) == false) 
    return;
  
  //get currently editing color
  var currentlyEditedColor = document.getElementsByClassName('jscolor-active')[0];
  
  //update the actual color picker to the inputted color
  currentlyEditedColor.firstChild.jscolor.fromString(newColorHex);
  
  colorChanged(e);
})


//changes all of one color to another after being changed from color picker
function colorChanged(e) {
  console.log('colorChanged()');
  

  
	//get colors
	var newColor = hexToRgb(e.target.value);
	var oldColor = e.target.oldColor;
	
	console.log('newColor',newColor)
	console.log('oldColor',oldColor)
	
	//save undo state
	//saveHistoryState({type: 'colorchange', newColor: e.target.value, oldColor: rgbToHex(oldColor), canvas: context.getImageData(0, 0, canvasSize[0], canvasSize[1])});
	new HistoryStateEditColor(e.target.value.toLowerCase(), rgbToHex(oldColor));
	
  //get the currently selected color
  var currentlyEditedColor = document.getElementsByClassName('jscolor-active')[0];
  var duplicateColorWarning = document.getElementById("duplicate-color-warning");

	//check if selected color already matches another color 
  colors = document.getElementsByClassName('color-button');
  var colorCheckingStyle = "background: #bc60c4; color: white"
  var newColorHex = e.target.value.toLowerCase();
  
  //if the color is not a valid hex color, exit this function and do nothing
  if (/^[0-9a-f]{6}$/i.test(newColorHex) == false) 
    return;
  
  //loop through all colors in palette
  for (var i = 0; i < colors.length; i++) {
    console.log('%c'+newColorHex +' '+ colors[i].jscolor.toString(), colorCheckingStyle)
    
    //if generated color matches this color
    if (newColorHex == colors[i].jscolor.toString()) {
      console.log('%ccolor already exists'+(colors[i].parentElement.classList.contains('jscolor-active')?' (but is the current color)':''), colorCheckingStyle);

      //if the color isnt the one that has the picker currently open
      if (!colors[i].parentElement.classList.contains('jscolor-active')) {
        console.log('%cColor is duplicate', colorCheckingStyle)
        
        //show the duplicate color warning
        duplicateColorWarning.style.visibility = 'visible';
        
        //shake warning icon
        duplicateColorWarning.classList.remove('shake');
        void duplicateColorWarning.offsetWidth;
        duplicateColorWarning.classList.add('shake');
        
        //exit function without updating color
        return;
      }
    }
  }
  
  //if the color being edited has a duplicate color warning, remove it
  duplicateColorWarning.style.visibility = 'hidden';
    
	currentlyEditedColor.firstChild.jscolor.fromString(newColorHex)
	
	replaceAllOfColor(oldColor, newColor);
	
	//set new old color to changed color
	e.target.oldColor = newColor;
	
	console.log(e.target.colorElement);
	
	//if this is the current color, update the drawing color
	if (e.target.colorElement.parentElement.classList.contains('selected')) {
	  console.log('this color is the current color');
	  context.fillStyle = '#'+ rgbToHex(newColor.r,newColor.g,newColor.b);
	}
	/* this is wrong and bad
	if (settings.switchToChangedColor) {
		
	}*/
}

