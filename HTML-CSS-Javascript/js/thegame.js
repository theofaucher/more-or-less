function nb_aleatoire(min, max) // declaration de la fonction avec 2 variables: "min" et "max"
	  
{
	var nb = min + (max-min +1)*Math.random(); // Création d'un nombre aléatoire, qu'on stocke dans la variable "nb". EXEMPLE: le joueur prend le niveau "Normal" l'intervalle est de 0 à 100. Donc ce la peut donner:
											  //                                                                              Donc, min = 0, max = 100, et la fonction Math.random() génère un nombre aléatoire entre 0 et 1
											  //																			  nb = 0 + (100 - 0) * 0.57 = 57

	 return Math.floor(nb); // return met fin à l'exécution d'une fonction et Math.floor(nb), cette fonction permet d'arrondir le chiffre stocké dans la variable "nb", nous avons que des chiffres entier désormais

}

	function PoM_manche(min, max) // declaration de la fonction avec 2 variables: "min" et "max".

{

	 var nb = nb_aleatoire(min, max); //La valeur de la variable "nb_aleatoire" est copié dans la variable "nb"

	 var cpt = 0; //Variable qui stocke le nombre de tentative que le joueur à effctué

	 var saisie; //Variable qui stocke le nombre saisie par le joueur

	 var msg = 'The number has guess is between ' + min + ' and ' + max + '.'; //Permet de stocker le message


	 do{

		  saisie = prompt(msg);

		  if(saisie == null) //Si on annule 

			   return 0;

		  cpt++; //+1 dans la variable "cpt"

		  if(saisie > nb) //Si saisie > nb alors ...

			   msg = "The number to guess is LOWER"; //Le message "The number to guess is lower" est défini dans la variable "msg"

		  else //Sinon / Si aisie < nb alors ...

			   msg = "The number to guess is HIGHER"; //Le message "The number to guess is higher" est défini dans la variable "msg"

	 }

	 while(saisie != nb); //Tant que la variable "saisie" est différente de la variable "nb"

	 return cpt;

}

function PoM_partie(min, max) // declaration de la fonction avec 2 variables: "min" et "max". Le min et max sont transmit lors de l'appuie sur un des boutons "level"

{

	 var cpt = 0; //Remet la variable "nombre_tentative" à 0

	 var best_score = 0; // Créer la variable "meilleur_score" et la met à 0

	 var score; //Variable qui permet de stocker le score de la partie

	 var continuer; //Variable nommée "continuer"


	 do{

		  score = PoM_manche(min, max);   // joue la manche

		  if(score) 

		  {
			cpt++; //+1 dans la variable "cpt"

			var player = document.querySelector('#audioPlayer'); //Permet d'inclure un son
			player.play(); //Joue le son de victoire

			   if(score < best_score || best_score == 0) //Si la variable "score" < à "best_score"  ou que best_score == 0 alors:

					best_score = score; //score est copié dans "best_score"

			   continuer = confirm("Great , you win in " + score + " attempt(s).\nDo you want to play again ?"); //Si on appuie sur "Ok" dans la prompt, cela affiche ce message

		  }

		  else //Sinon

			   continuer = false; //continuer prend la valeur 0

	 }

	 while(continuer); //Tant que continuer = 1


	 alert("You played " + cpt + " round (s).\nYour best score is " + best_score + " attempt(s).");  //Ce message est affiché dans le prompt

	 return best_score;

}

