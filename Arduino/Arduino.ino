int NombrePropose;
int NombreTentative;
int NombreAleatoire;
int cr = 1;
String Valcom = "";

void setup () {

  Serial.begin(115200);
  Serial.println("Bienvenue dans le HarsGame, le but du jeu est de trouver le nombre aléatoire en moins d'essai possible");
  Serial.println("Saisir un nombre entre 0 et 100");
  randomSeed(analogRead(A0));
  NombreTentative = 0;
  Serial.write(cr);

}

void loop () 

{

  NombreAleatoire = random(100);

  while (NombrePropose != NombreAleatoire) 
  {

        while (!Serial.available()) 
        {

  
        }
 

        if (Serial.available()) 
        {

             NombreTentative += 1;
             Valcom = Serial.readString();
             if (Valcom.equals("Recommencer"))
             {
                 Serial.print(" ");
                 Serial.print(" ");
                 Serial.print(" ");
                 Serial.print(" ");
                 Serial.print(" ");
                 Serial.print(" ");
                 Serial.print(" ");
                 Serial.print(" ");
                 Serial.print(" ");
                 Serial.print(" ");
                 Serial.print(" ");
                 Serial.print(" ");
                 Serial.print(" ");
                 Serial.print(" ");
                 Serial.print(" ");
                 Serial.print(" ");
                 Serial.print(" ");
                 Serial.print(" ");
                 Serial.print(" ");
                 Serial.print(" ");
                 Serial.print(" ");
                 Serial.print(" ");
                 Serial.print(" ");
                 Serial.print(" ");
                 Serial.print(" ");
                 Serial.print(" ");
                 Serial.print(" ");
                 Serial.print(" ");
                 Serial.print(" ");
                 Serial.print(" ");
                 software_Reset();
              
             }
             
             NombrePropose = Valcom.toInt();
        }
              



       if (NombrePropose < NombreAleatoire) 
       {

            Serial.print("Nombre trop petit, tu as proposé(e):");
            Serial.println(NombrePropose);
    
       }

      
       if (NombrePropose > NombreAleatoire) 
       {
 
            Serial.print("Nombre trop grand, tu as proposé(e):");
            Serial.println(NombrePropose);
    
       }

       if (NombrePropose < 0 || NombrePropose > 100)
       {

            Serial.println("Votre nombre est incorect, il doit être entre 0 et 100 (compris)");
        
       }
       
       if (NombrePropose == NombreAleatoire) 
       {

           Serial.print("Tu as trouvé(e) le nombre qui est: ");
           Serial.println(NombreAleatoire);
           Serial.print("Tu as trouvé(e) le nombre en: ");
           Serial.print(NombreTentative);
           Serial.println(" Tentative(s)");
           if (NombreTentative > 6)
           {

                Serial.println("Tu peux encore t'améliorer, c'est bien !");
            
           }
          
           Serial.println("Si tu veux recommencet ce jeu, tapes Recommencer dans le moniteur");   
      }

  }

}

void software_Reset()
{
    asm volatile ("  jmp 0");  
}  

