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


function addImage() {
    var img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1KOgrpDSvLR_YsBx7k6ygmKP-C4g38R_HRQ&usqp=CAU';
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
    img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1KOgrpDSvLR_YsBx7k6ygmKP-C4g38R_HRQ&usqp=CAU';

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










const { createClient } = supabase
supabase = createClient("https://jxywbtgddxjqlcwoioah.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMzQ1NTIzMCwiZXhwIjoxOTQ5MDMxMjMwfQ.or_Vm-5JnsYH0BFHoRqND6ykaUwpSfo1VREUAB6S5YY");


async function createData() {
    const { data, error} = await supabase
    .from('pickle-gallery')
    .insert([
        {
            image_data: canvas.toDataURL(),
            name: 'Pickle Rick',
            social_handle: '@picklerick',
            remix: 0,
            featured: 1
        }
    ])
    .then(data => console.log(data))
}