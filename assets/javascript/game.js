var wins=0; // Variable Wins

var losses=0; // Variable losses

//Define our array for countries

var countries = ["Australia", "America", "Morocco", "Holland", 
				"Germany", "England", "France", "Belgium", 
				"Norway", "Finland", "Polen", "Iceland", 
				"Sweden", "Thailand","China", "Indonesia", 
				"Russia", "Venezuela", "Chile", "Argentina", 
				"Mexico", "Guyana","Surinam", "England", 
				"Ireland", "India", "Pakistan", "Afghanistan","Canada", "Uganda", "Brazil", "Peru"];

//Write the statement to randomly pick a country name

var randomPick = countries[Math.floor(Math.random() * countries.length)];

//Create an empty array to use for guessing the letters of the country

var answerArray = [];

//This is the variable that is called to press a key to start

function start(){

	 //this is the "for statement" to initialize, check, change the random country name
	for (var i = 0; i<randomPick.length; i++)
	{
		//This is what the user will see before entering a correct letter
		answerArray[i]= "_";
	}

	//This is the the answer that is sent to the html id output
	document.getElementById("answer").innerHTML = answerArray.join(" ");
}

		//Filling in the empty array

		start (randomPick);
			document.onkeyup = function (event){
		
			var letter = event.key.toLowerCase();
	
			}



//Selected letter by user

// function Letter (){

// 	var letter = document.getElementById().value;

// 	if (letter.length>0){

// 		for (var i =0; i<randomPick.length; i++)
// 		{
// 			if (randomPick[i]===letter)
// 			{

// 				answerArray[i] = letter;

// 			}
// 		}

// 		count++;
// 		document.getElementById("counter").innerHTML = "Number of click: " + count;
// 		document.getElementById("answer").innerHTML = answerArray.join("");
// 	}

// 	if(count>5)
// 	{

// 		document.getElementById("stat").innerHTML = "Slow guesser";

// 	}
// }



// function isTheLetterInsideTheWord(countries, letter){
// 	var index = countries.indexOf(letter)> -1;
// 	return index;
// }
// var empty = [];

// 	for (var i = 0; i<pick.length; i++){

// 		empty[i] = "_";
	
// 	}

//Match guessed letter to the Country name



//When a letter is used, log this in the window


//When a letter is pressed that is correct, fill in the blanks


//When a letter is pressed that is wrong, start the hangman


//Hangman has 10 guesses


//After 10 wrong guesses the game is over


//When the word is guessed correctly “You Win!”




