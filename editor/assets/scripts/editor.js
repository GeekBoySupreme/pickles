var canvas = new fabric.Canvas('canvas');


function drawRectangle() {
    var rect = new fabric.Rect({
        left: 100,
        top: 100,
        fill: 'grey',
        width: 60,
        height: 60
    });
    
    canvas.add(rect);    
}



function drawCircle() {
    var circ = new fabric.Circle({
        left: 100,
        top: 100,
        fill: 'grey',
        radius: 30
    });
    
    canvas.add(circ);    
}   


function changeColor() {
    var obj = canvas.getActiveObject();
    obj.set('fill', 'blue');
    canvas.renderAll();
}

function deleteObject() {
    var obj = canvas.getActiveObject();
    canvas.remove(obj);
}