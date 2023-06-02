document.body.style.margin   = 0
document.body.style.overflow = "hidden"

let moods = ['cloud nine', 'tranquil','rage']
function setup() 
{
  createCanvas(innerWidth, innerHeight);
}

function draw() 
{
  background(20); 
  text (moods[index],innerWidth/2, innerHeight/2)
  
  const p = frameCount % 180;
  if (p == 0)
  {
    index++;
  
    if (index > moods.length-1)
    {
      index = 0;
    }
  }

  
} 



function checkMood()
{
  let myScript = document.getElementById("myScript"); 
  switch (moods)
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
   console.log (myScript.src)
}