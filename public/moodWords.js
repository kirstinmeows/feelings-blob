let moods = ['cloud nine', 'tranquil',]
function setup() 
{
  createCanvas(windowWidth, windowHeight);
}

function draw() 
{
  background(20); 
  text (moods[index],windowWidth/2, windowHeight/2)
  
  const p = frameCount % 180;
  if (p == 0)
  {
    changeWord;
  }
} 

function changeWord()
{
  index++;
  
  if (index > moods.length-1)
  {
    index = 0;
  }
}

function checkMood()
{
  let myScript = document.getElementById("myScript"); 
  switch (moods)
   {
      case 0: 
        myScript.setAttribute("src","/blobs/utopiaBlob.js")
      break; 
      case 1: 
      break;
   }
   console.log (myScript.src)
}