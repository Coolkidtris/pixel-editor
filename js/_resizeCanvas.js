let resizeCanvasContainer = document.getElementById("resize-canvas");

function openResizeCanvasWindow() {
    showDialogue('resize-canvas');
    console.log("aperta");
    initButtons();
}

function initButtons() {
    let buttons = document.getElementsByClassName("pivot-button");

    console.log("length: " + buttons.length);

    for (let i=0; i<buttons.length; i++) {
        buttons[i].addEventListener("click", changePivot);
    }
}

function changePivot(event) {
    console.log("sas");
    console.log(event.target);
}

// Use a dialogue
    // Let the user specify data
        // Borders
        // Pivot
    // Apply the new sizing
    // Move the images on the layers to fit what the user actually decided

// Function to handle dropdown menu for pivots
    // Open when clicking on the button
    // Save the chosen pivot
    // Close the menu

// Function to retrieve data from the input field
    // Store the data in the form into variables
    // Call the function to resize the canvases

// Function to actually resize the canvases
    // Save all imageDatas
    // Resize the canvases
    // Clear the canvases

// Function to place the imageDatas as specified in the pivot section
    // Put the imageDatas in the right position