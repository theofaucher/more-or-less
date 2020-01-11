#include <stdio.h>
#include <stdlib.h>
#include <time.h>

void menu() {

    system ("cls");
	printf("<             + ou -           >\n\n");

	printf("Difficulte               - press 1\n");
	printf("Jouer                    - press 2\n");
	printf("Quitter                  - press 3\n");

}

void difficulty() {

	system ("cls");
	printf("<           Difficulte         >\n\n");
	
	printf("Niveau 1                 - press 1\n");
	printf("Niveau 2                 - press 2\n");
	printf("Niveau 3                 - press 3\n");

}

void clearBuffer() {
	int c = getchar();
	while (c != EOF && c != '\n')
		c = getchar();
}

int main(int argc, char** argv) {
	int mystery, number, count, max = 100, again, quit = 0;
	const int min = 1;
	char input;
	srand(time(NULL));

	do {

		menu();
		scanf(" %c", &input);
		while (input != '1' && input != '2' && input != '3') {
			printf("Veuillez selectionne 1 ou 2 ou 3\n");
			clearBuffer();
			scanf(" %c", &input);
		}

		if (input == '1') {
			difficulty();
			scanf(" %c", &input);
			while (input != '1' && input != '2' && input != '3') {
				printf("Veuillez selectionne 1 ou 2 ou 3\n");
				clearBuffer();
				scanf(" %c", &input);
			}
			if (input == '1')
				max = 100;
			else if (input == '2')
				max = 1000;
			else
				max = 10000;
		}

		else if (input == '2') {
            system ("cls");
			printf("\n");
			do {

				mystery = (rand() % (max - min + 1)) + min;
				count = 0;
				printf("%d", mystery);

				do {

					printf("Propose un nombre ! ");
					scanf("%d", &number);

					count += 1;

                    if (number < 0)
                        printf("Le chiffre est hors champ\n");
                    else if (number > max)
                        printf("Le chiffre est hors champ\n");
					if (mystery > number)
						printf("Nombre trop petit, tu as propose(e): %d !\n\n", number);
					else if (mystery < number)
						printf("Nombre trop grand, tu as propose(e): %d !\n\n", number);
					else
						printf ("Felicitation ! Tu as trouve(e) le nombre aleatoire en %d tentative(s) !\n\n", count);

				} while (mystery != number);

				do {
					printf("Veux-tu rejouer ? (y/n) ");
					scanf(" %c", &input);
				} while (input != 'y' && input != 'n');

				again = input == 'y' ? 1 : 0;

			} while (again);
		}

		else {
			quit = 1;
		}

		clearBuffer();

	} while (!quit);

	system ("cls");
	printf("Merci d'avoir joue(e) !\n");

	return 0;
}