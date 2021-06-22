//select all the elements with the class drum
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
	//Listen for the click event for all the elements of the html file
  	document.querySelectorAll(".drum")[i].addEventListener("click", function() {

	    console.log(this.innerHTML);
	    //save the letter of the picture clickled in the variable buttonInnerHTML
	    var buttonInnerHTML = this.innerHTML;
	    //call the function tones, to play the sound of the corresponding letter
	    tones(buttonInnerHTML);
	    //call the fucntion for the animation
	    buttonAnimation(buttonInnerHTML);
  });
}

//Listen for the event keypress when you press a key 
document.addEventListener("keypress", function(event) {
  console.log(event);
  //save the value of the key when is pressed in the variable keys
  var keys=event.key;
   //call the function tones, to play the sound of the corresponding letter
  tones(keys);
  //call the fucntion for the animation
  buttonAnimation(keys);
});


//fucntion to play the tones for the different letters
function tones(buttonInnerHTML) {
  switch (buttonInnerHTML) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;

    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;

    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;

    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;

    case "j":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;

    case "k":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;

    case "l":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;

    default:
      console.log(buttonInnerHTML);
  }
}

//Function to execute the animation
function buttonAnimation(currentKey){
	//select the element for the key selected
  	var activeButton=document.querySelector("."+currentKey)
  	//add a new class to the element selected
  	activeButton.classList.add("pressed");
  	setTimeout(function(){
    	activeButton.classList.remove("pressed");
  	},100);
}

