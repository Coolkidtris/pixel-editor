//set the correct cursor for the current tool
function updateCursor () {
    if (currentTool == 'pencil' || currentTool == 'resize-brush') {
        canvasView.style.cursor = 'crosshair';
        brushPreview.style.display = 'block';
        brushPreview.style.width = pencilSize * zoom + 'px';
        brushPreview.style.height = pencilSize * zoom + 'px';
    } else if (currentTool == 'eraser' || currentTool == 'resize-eraser') {
        canvasView.style.cursor = 'crosshair';
        brushPreview.style.display = 'block';
        brushPreview.style.width = eraserSize * zoom + 'px';
        brushPreview.style.height = eraserSize * zoom + 'px';
    } else if (currentTool == 'rectangle' || currentTool == 'resize-rectangle') {
        canvasView.style.cursor = 'crosshair';
        brushPreview.style.display = 'block';
        brushPreview.style.width = rectangleSize * zoom + 'px';
        brushPreview.style.height = rectangleSize * zoom + 'px';
    }
    else if (currentTool == 'moveselection') {
        if (cursorInSelectedArea()) {
            canMoveSelection = true;
            canvasView.style.cursor = 'move';
            brushPreview.style.display = 'none';
        }
        else {
            canvasView.style.cursor = 'crosshair';
        }
    }
    else if (currentTool == 'rectselect')
        canvasView.style.cursor = 'crosshair';
    else
        brushPreview.style.display = 'none';

    if (currentTool == 'eyedropper') {
        canvasView.style.cursor = 'url(\'/pixel-editor/eyedropper.png\'), auto';
    } else 
        eyedropperPreview.style.display = 'none';

    if (currentTool == 'pan') {
        if (dragging)
            canvasView.style.cursor = 'url(\'/pixel-editor/pan-held.png\'), auto';
    } else {
        canvasView.style.cursor = 'url(\'/pixel-editor/pan.png\'), auto';
    }

    if (currentTool == 'fill') 
        canvasView.style.cursor = 'url(\'/pixel-editor/fill.png\'), auto';

    if (currentTool == 'zoom') 
        canvasView.style.cursor = 'url(\'/pixel-editor/zoom-in.png\'), auto';

    if (currentTool == 'resize-brush' || currentTool == 'resize-eraser')
        canvasView.style.cursor = 'default';
}
