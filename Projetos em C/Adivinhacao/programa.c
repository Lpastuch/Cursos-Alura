#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main () {

	printf("****************************************\n");
	printf("*Bem vindo ao nosso jogo de adivinhacao*\n");
	printf("****************************************\n");

	int segundos = time(0);
	srand(segundos);

	int numerogrande = rand();
	int numerosecreto = numerogrande % 100;

	int chute;
	int tentativas = 1;
	double pontos = 1000; 

	int acertou = 0;

	int nivel;
	printf("Qual o nivel de dificuldade?\n");
	printf("(1) Facil (2) Medio (3) Dificil\n");
	scanf("%d", &nivel);
	
	int numerodetentativas;

	switch(nivel) {
		case 1:
			numerodetentativas = 20;
			break;
		case 2:
			numerodetentativas = 15;
			break;
		default:
			numerodetentativas = 6;
			break;
	}

	for (int i = 1; i <= numerodetentativas; i++) {
		
		
		printf("\nTentativa %d ", tentativas );
		printf("\nQual eh o seu chute? \n");

		scanf("%d", &chute);
		printf("\nSeu chute foi %d\n", chute);

		if(chute < 0) {
			printf("Voce nao pode chutar numeros negativos!\n");
			continue;
		}

		acertou = (chute == numerosecreto);
		int maior = chute > numerosecreto;
	
		if(acertou) {
			break;
		}

		else if(maior) {
				printf("\nSeu chute foi maior que o numero secreto!\n");
		}
		
		else {
				printf("\nSeu chute foi menor que o numero secreto!\n");
		}

		tentativas++;

		double pontosperdidos = abs(chute - numerosecreto) / (double)2; 
		pontos = pontos - pontosperdidos;
	}

	printf("\n\n********************************************\n");
	printf("Fim de jogo!\n");

	if(acertou) {
		printf("Voce ganhou!\n");
		printf("\nVoce acertou em %d tentativas\n", tentativas);
		printf("Total de pontos: %.1f\n", pontos);
	}
	else {
		printf("Voce perdeu! Tente novamente!\n");
	}
}
