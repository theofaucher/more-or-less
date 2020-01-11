import time
import random

tentative = 0
Nombre_propose = 0
option = 0 
input_menu = 0
seed = 100
input_difficulty = 0
input_restart = 0
restart = 1

def difficulte():

    while True:

        print('')
        print('100 (Default)            - press 1')
        print('1000                     - press 2')
        print('10000                    - press 3')
        print('')
        input_difficulty = input (">> ") 

        if input_difficulty == '1' or input_difficulty == '2' or input_difficulty == '3':

            break

if input_difficulty == '1':

    seed = 100

if input_difficulty == '2':

    seed = 1000

if input_difficulty == '3':

    seed = 10000



print(chr(27) + "[2J")
print('Bienvenue dans le jeu du + ou -')
print('Trouvez le nombre aleatoire avec le minimum de tentative')

time.sleep(1)

while True:

    print('')
    print('Difficulte               - press 1')
    print('Jouer                    - press 2')
    print('Quitter                  - press 3')
    print('')
    input_menu = input (">> ") 

    if input_menu == '1' or input_menu == '2' or input_menu == '3':

        break

if input_menu == '1':

    difficulte()

if input_menu == '3':

    quit()

while restart == 1:

    restart = 0
    time.sleep(1)
    print(chr(27) + "[2J")

    Nombre_aleatoire = random.randint(1,seed + 1)

    while Nombre_propose != Nombre_aleatoire:

        while True:

            Nombre_propose = int(input ("Veuillez entrer un nombre (entre 0 et " + str(seed) + "): "))

            if Nombre_propose < seed and Nombre_propose > 0:

                break

        if Nombre_propose < Nombre_aleatoire:

            print('Nombre trop petit, tu as propose(e):' + str(Nombre_propose))
            tentative += 1

        
        if Nombre_propose > Nombre_aleatoire:

            print('Nombre trop grand, tu as propose(e):' + str(Nombre_propose))
            tentative += 1


        if Nombre_propose == Nombre_aleatoire:

            print('Tu as trouve(e) le nombre qui est: ' + str(Nombre_propose) + ' en ' + str(tentative) + ' tentative(s)')

            while True:

                print('')

                input_restart = input('Veux-tu recommencer ? (o ou n): ') 

                if input_restart == 'o' or input_restart == 'n':

                    break

            if input_menu == 'o':

                restart = 1

            if input_menu == 'n':

                quit()
