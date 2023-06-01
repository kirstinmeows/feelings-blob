document.body.style.margin   = 0
document.body.style.overflow = `hidden`

function setup () {
   createCanvas (innerWidth, innerHeight)
}

function  draw () 
{
   background (`turquoise`)
   noStroke();
   fill(`yellow`)
   square(100,100,500);
}
