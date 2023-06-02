let moods = []
function setup() 
{
  createCanvas(windowWidth, windowHeight);
}

function draw() 
{
  
  background(20); 
  text (moods[index],windowWidth/2, windowHeight/2)
  
  const p = frameCount % 120;
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