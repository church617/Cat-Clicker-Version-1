var timesClicked = 0;
var $h1 = $('h1');

function btnClick(){
  timesClicked ++;
$h1.text("Number of clicks = "+timesClicked);
return true 
   }