function preload()
{
    ;
}
function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
}
function draw()
{
    img();
    if(person=detected)
    {
        document.getElementById("Detection").innerHTML = "baby detected";
        song.stop();
    }
    else
    {
        document.getElementById("Detection").innerHTML = "baby is not detected";
        song.start();
    }
}
    if(objects_array.length < 0)
    {
        document.getElementById("status").innerHTML = "Status: Object Not Detected";
        song.start();
    }