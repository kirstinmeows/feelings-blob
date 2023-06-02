document.body.style.margin = 0
document.body.style.overflow = `hidden`

let moods = ["cloud nine", "tranquil","rage"]
let index = 0;

function preload()
{
  openSans = loadFont('/fonts/openSans.ttf');
}
function setup() 
{
  createCanvas(innerWidth, innerHeight);
  textFont(openSans);
  textSize(100);
}

function draw() 
{
  background(15); 
  fill(255,20,147);
  text('hi', 500,500);
  
  // const p = frameCount % 180;
  // if (p == 0)
  // {
  //   index++;
  
  //   if (index > moods.length-1)
  //   {
  //     index = 0;
  //   }
  // }

  
} 

// change mood function to be added
function changeMood()
{

}


//MUST FIX 
function checkMood()
{
  let myScript = document.getElementById('myScript'); 
  let  blobScript = document.CreateElement('myScript');
  switch(moods)
   {
      case 0: 
        myScript.setAttribute("src","/blobs/utopiaBlob.js");
      break; 
      case 1: 
        myScript.setAttribute("src","/blobs/meditateBlob.js");
      break;
      case 2: 
        myScript.setAttribute("src","/blobs/rageBlob.js"); 
      break;
   }
   ref.parentNode.insertBefore(blobScript, myScript);
   console.log (myScript.src)
}