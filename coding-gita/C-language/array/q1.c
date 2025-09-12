// AAA
// BBB
// CCC

// #include <stdio.h>

// int main() {
//     int n, i, j;
//     printf("Enter the number of rows: ");
//     scanf("%d", &n);

//     for (i = 1; i<= n; i++) {
//         for (j = 1; j <= n; j++) {
//             printf("%c",64+i);
//         }
//         printf("\n");
        
//     }
//     return 0;
// }
// #include <stdio.h>

// int main() {
//     int n, i, j;
//     printf("Enter the number of rows: ");
//     scanf("%d", &n);

//     for (i = 65; i<= 67; i++) {
//         for (j = 65; j <= i; j++) {
//             printf("%c ", j);
//         }
//         printf("\n");
//     }
//     return 0;
// }

// #include <stdio.h>
// int main() {
//     int n, i, j;
//     printf("Enter the number of rows: ");
//     scanf("%d", &n);

//     for (i = 0; i< n; i++) {
//         for (j = 0; j <=n; j++) {
//             printf("%c",'C'-i);
//         }
//         printf("\n");
        
//     }
//     return 0;
// }

#include <stdio.h>

int main() {
    int n, i, j;
    printf("Enter the number of rows: ");
    scanf("%d", &n);

    for (i = 1; i<= n; i++) {
        for (j = 0; j <= i; j++) {
            printf("%c ",j+65);
        }
        printf("\n");
    }
    return 0;
}

// #include <stdio.h>

// int main() {
//     int n, i, j;
//     printf("Enter the number of rows: ");
//     scanf("%d", &n);

//     for (i = 65; i<= 67; i++) {
//         for (j = 67; j >= i; j--) {
//             printf("%c ", j);
//         }
//         printf("\n");
//     }
//     return 0;
// }