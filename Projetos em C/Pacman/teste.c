#include <stdio.h>

int main(){
    char matriz[2][2];
    char string[2];
    char letra = 1;

    matriz[0][0] = 1;

    printf("%d %d\n", letra, &letra);

    printf("%d %d %d %d %d\n", string, &string, &string[0], &string[1], &string[2]);

    printf("%d %d %d %d %d %d\n", matriz, matriz[0], matriz[0][0], &matriz, &matriz[0], &matriz[0][0]);

    printf("%d %d %d %d %d %d %d %d", &matriz[0], &matriz[1],&matriz[0][0], &matriz[0][1], &matriz[1][0], &matriz[1][1], &matriz[2][0], &matriz[2][1]);
}
