 $(document).ready(function(){
 var snd = new Audio("http://soundjax.com/reddo/70324%5Eclub.mp3");
   //http://soundjax.com/reddo/77642%5Echinamusic.mp3
   snd.loop = true;
   snd.play();
   
   //Loads the background image, buttons and letters. 
   $('#background').fadeIn('slow');
  $('#M').delay(1000).fadeIn('slow');
   $('#A').delay(1800).fadeIn('slow');
  $('#T').delay(2300).fadeIn('slow');
   $('#H').delay(2600).fadeIn('slow');
$('#line').delay(2900).fadeIn('slow');
   $('#T2').delay(3200).fadeIn('slow');
  $('#I').delay(3400).fadeIn('slow');
   $('#S').delay(3700).fadeIn('slow');
  $('#M2').delay(3900).fadeIn('slow');
  $('#start').delay(5000).fadeIn('slow');
$('#Help').delay(5000).fadeIn('slow'); $('#firework1').delay(5000).fadeIn('slow');
   $('#firework2').delay(5000).fadeIn('slow');
 
 });

//Reloads the page.
function Refresh() {
location.reload();
}


//Plays the multiplcation() function if selected.
function multiplcation () {
  var numbers = Math.floor(Math.random()*10+1); 
  switch(numbers) {
    case 1:
      alert("5 times __ equals 25?");
      $("img").one("click",function(){
        if (this.id === "n5") {
          $("img").off();
          alert("Correct!");
          multiplcation();
        } else {
          GameOver();
        }
      });
      break;
      
    case 2:
     alert("9 times __ equals 54?");
      $("img").one("click",function(){
        if (this.id === "n6") {
          $("img").off();
          alert("Correct!");
          multiplcation();
        } else {
          GameOver();
        }
      });
      break;
      
    case 3:
      alert("8 times __ equals 64?");
      $("img").one("click",function(){
        if (this.id === "n8") {
          $("img").off();
          alert("Correct!");
        } else {
          GameOver();
        }
      });
     break;
  
  default:
    alert("No number was selected by the program.");
  }
  
}
