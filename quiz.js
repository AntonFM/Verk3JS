/*
1% Hvað gerir eftirfarandi kóði, útskýrðu línu fyrir línu.
1. var elements = document.getElementsByTagName('li');
2. if (elements.length > 0) {
3. var el = elements[2];
4. el.className = 'cool';
}

"lína 1. setur breytuna elements sem 'li' tag í html kóðanum, sem er lista tag
lína 2. ef það sem li skilar er lengra/hærra gildi en 0 þá-
lína 3. gerir breytuna el, sem er 3ji hlutur listans
lína 4. breytir gildi el í 'cool'"


1% Hver er munurinn á að nota innerHtml() og DOM Manipulation ( t.d. createElement,
createTextNode, appendChild)?

"Í stuttu máli er innerHtml() grófara og DOM Man nákvæmara, en á sama tíma er DOM öruggara"
*/
"use strict";

// Gögnin, Array af objectum, þarf að bæta við fleiri objectum


function Sporgsmol(spurningar, svar, rettsvar) { //Function til að búa til spurningar og svör
	this.spurningar = spurningar;
	this.svar = svar;
	this.rettsvar = rettsvar;
}

//Setja inn gildi fyrir spurningar, svör og hvaða svar sé rétt
var spurning1 = new Sporgsmol("Who is Prime Minister of the United Kingdom?",["David Cameron", "Gordon Brown", "Winston Churchill","Tony Blair"], 0);
var spurning2 = new Sporgsmol("Er kongur á Íslandi?", ["Já", "Nei"], 1);
var spurning3 = new Sporgsmol("Hvað er besta bæjarfélagið?", ["Reykjavík", "Fellabær", "Kópavogur", "Akureyri"], 2);
var spurning4 = new Sporgsmol("Hvað er 5*5?", ["5", "55", "1", "25"], 3);

var allQuestions = [];

var rettsvor = 0; //Teljari fyrir rétt svör

allQuestions[0] = spurning1;
allQuestions[1] = spurning2;
allQuestions[2] = spurning3;
allQuestions[3] = spurning4;


//Declarea tags úr html til að nota í javascript
document.getElementById("next").onclick = myFunction; 
document.getElementById("end").onclick = myFunctions;
var quizDiv = document.getElementById("question");
var choicesDiv = document.getElementById("choices");



for (var i = 0; i < allQuestions.length; i++) {
	quizDiv.innerHTML += "<p>Sp: " + allQuestions[i].spurningar + "</p><br>";
	for (var i = 0; i < allQuestions.length; i++) {
	choicesDiv.innerHTML += '<input type="radio" name="svarmoguleiki" id="svar' + [i] + '">'+ allQuestions[0].svar[i]  +  "</p><br>"; //For loopur til að fá út fyrstu spurningu og svarmöguleikana með henni í radio buttons
	}

}

function myFunction() { //Function til að láta Svara hnapp virka
	var greeting;
    if (document.getElementById("svar"+allQuestions[0].rettsvar).checked == true) {
        greeting = "Rétt svar";
        rettsvor++; //Ef svarið er rétt þá lætur það greeting breytuna verða rétt svar og bætir 1 við teljara á réttum svörum
    } 
    
    else {
        greeting = "Rangt svar"; //Annars verður greeting rangt svar
    }
    alert(greeting);
}

function myFunctions() { //Function sem tekur saman rétt svör og lætur vita hvað maður náðir mörgum 
	var greetings = rettsvor;
   
    alert("Þú náðir" + greetings + " réttum svörum");
}

/*var radio = document.getElementById("choices");

<input type="radio" name="gender" value="male" checked> Male<br>
  <input type="radio" name="gender" value="female"> Female<br>
  <input type="radio" name="gender" value="other"> Other


  function makeRadioButton(name, value, text) {

    var label = document.createElement("label");
    var radio = document.createElement("input");
    radio.type = "radio";
    radio.name = name;
    radio.value = value;

    label.appendChild(radio);

    label.appendChild(document.createTextNode(text));
    return label;
  }

choicesDiv.innerHTML += "<p>Svor: " + allQuestions[i].svar +  "</p><br>";

  */

  




// Upphafstilling.
	// breytur fyrir t.d. teljara, score og spurningar 
	// DOM elements, ná í reference í HTML og setja í breytur nota t.d. getElementsById() 
	// Raða spurningum í fylkinu allQuestions.
	// Geyma: Kóði sem hlustar á atburði (t.d. mús, lyklaborð)
 
// render/Update fall.
	//  nota t.d. innerHTML eða búa til DOM elements.
	//  hreinsa út skjá,
	//  loada inn gögnin (spurningar, svarmöguleika)
	//  Geyma: Uppfæra telja, score

//  Hjálparföll/undirföll.
	//	fall fyrir random/shuffle (upphafstilla röðun spurningar)
	/*var randomNum = Math.floor((Math.random() * 10) + l);
	var el = document.getElementByid('info');
	el .innerHTML = '<h2>random number</h2><p>' + randomNum + '</p>'; */
	//	fall sem hreinsar út skjá?
	//	Geyma: fall til að athuga svar  
	//  Geyma: fall fyrir lokaskor
	//	Geyma: athuga svarmöguleika (rétt svar)
	
