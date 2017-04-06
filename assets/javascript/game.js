var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", 
				"p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins=0; // Variable Wins

var losses=0; // Variable losses

//Define our array for countries

var countries = ["australia", "america", "morocco", "holland", 
				"germany", "england", "france", "belgium", 
				"norway", "finland", "polen", "iceland", 
				"sweden", "thailand","china", "indonesia", 
				"russia", "venezuela", "chile", "argentina", 
				"mexico", "guyana","surinam", "england", 
				"ireland", "india", "pakistan", "afghanistan","canada", "uganda", "brazil", "peru"];

//Write the statement to randomly pick a country name

var randomPick = countries[Math.floor(Math.random() * countries.length)];

//Create an empty array to use for guessing the letters of the country

var answerArray = [];

var count
//This is the variable that is called to press a key to start

function start(randomPick){

	 //this is the "for statement" to initialize, check, change the random country name
	for (var i = 0; i<randomPick.length; i++)
	{
		//Filling in the empty array with under scores
		answerArray[i]= "_";
	}

	//Put the answer in a string
	document.getElementById("answer").innerHTML = answerArray.join(" ");
}

function letter(randomPick,userKey){

	// var letter = document.getElementById("letter").value;

	if (userKey.length>0){

		for (var i =0; i<randomPick.length; i++)
		{
			if (randomPick[i]===userKey)
			{

				answerArray[i] = userKey;

			}
		}
		
 		// count++;

		document.querySelector("#answer").innerHTML = answerArray.join(" ");
	}

	// if(count>5)
	// {

	// 	document.getElementById("stat").innerHTML = "Slow guesser";

	// }
}

		//Selecting a random country with under scores on reload
		start (randomPick);
			document.onkeyup = function (event){
		
			var userKey = event.key.toLowerCase();

			letter(randomPick,userKey);
	
			}




//Selected letter by user




//Match guessed letter to the Country name



//When a letter is used, log this in the window


//When a letter is pressed that is correct, fill in the blanks


//When a letter is pressed that is wrong, start the hangman


//Hangman has 10 guesses


//After 10 wrong guesses the game is over


//When the word is guessed correctly “You Win!”




