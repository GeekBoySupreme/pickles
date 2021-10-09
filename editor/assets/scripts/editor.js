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
    var colorpick = [
        '#32a852', '#4ed491', '#7affe0', '#4787bf', '#3e73cf', '#005dff', '#6a53fc', '#b653fc', '#fc53f6', '#fc536c',
        '#ff3030', '#baff59', '#eaff5e', '#eaff5e', '#fa9e48', '#fa7448', '#fa5d48'
    ]

    var index = randomize(colorpick.length-1);

    var obj = canvas.getActiveObject();
    obj.set('fill', colorpick[index]);
    canvas.renderAll();
}

function deleteObject() {
    var obj = canvas.getActiveObject();
    canvas.remove(obj);
}


function addImage() {
    var img = new Image();

    var index = randomize(49);
    img.crossOrigin = 'anonymous';
    img.src = '/editor/assets/images/1 ('+ index +').svg';
    img.onload = function() {
        var imgInstance = new fabric.Image(img, {
            left: 100,
            top: 100,
            angle: 0,
            opacity: 1
        });
        canvas.add(imgInstance);
    };
}



// function addEmoji() {
//     var img = new Image();

//     var index = randomize(49);
//     img.crossOrigin = 'anonymous';
//     img.src = '/editor/assets/images/1('+ index +').svg';
//     img.onload = function() {
//         var imgInstance = new fabric.Image(img, {
//             left: 100,
//             top: 100,
//             angle: 0,
//             opacity: 1
//         });
//         canvas.add(imgInstance);
//     };
// }


function saveImage() {
    var canv = document.getElementById('canvas');
    canv.toBlob(function(blob) {
        console.log(blob);
        saveAs(blob, 'my-image.png');
    });
}

function setBackground() {
    var img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = '/editor/assets/images/bgmaz.jpg';

    img.onload = function() {
        var imgInstance = new fabric.Image(img, {
            left: 0,
            top: 0,
            angle: 0,
            opacity: 1
        });
        //canvas.add(imgInstance);
        canvas.setBackgroundImage(imgInstance, canvas.renderAll.bind(canvas), {
            scaleX: canvas.width / img.width,
            scaleY: canvas.height / img.height
         });

}
}





function randomize(max) {
    return (Math.floor(Math.random() * (max - 0)));
}


