function doBlue() {
    var cnvs = document.getElementById("canvas");
        cnvs.style.backgroundColor = "lightblue";
}

//onchange event for color picker
function doColor() {
    var cnvs = document.getElementById("canvas");
    var colorInput = document.getElementById("clr");
    cnvs.style.backgroundColor = colorInput.value;
}

function doSquare() {
    var dd1 = document.getElementById("canvas");
    var sizeinput =
    document.getElementById("sldr");
    var size = sizeinput.value;
    var context = dd1.getContext("2d");
    context.fillStyle = "yellow";
    context.fillRect(20, 20, size, size);
    
 
    // var sliderInput = document.getElementById("sldr");
    // var len = sliderInput.value;
    // var canvas = document.getElementById("canvas");
    // var context = canvas.getcontext("2d");

    // // //will clear the previous drawing
    // // context.clearRect(0,0, square.width, square.height);

    // context.fillStyle = "gray";
    // context.fillRect(10, 10, size, size);
    // context.fillRect(10, 10, len, len);
    // context.fillRect(parseInt(len)+20, 10, len, len);
    // context.fillRect(len*3, 10, len, len);
}