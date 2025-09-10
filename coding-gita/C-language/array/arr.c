// #include <stdio.h>

// int main() {
//     int arr1[5] = {4, 5, 7, 9, 10};
//     int arr2[5];

    
//     for(int i = 0; i < 5; i++) {
//     arr2[5 - 1 - i]  =  arr1[i];
//     }

    
//     for(int i = 0; i < 5; i++) {
//         printf("%d ", arr2[i]);
//     }
//     printf("\n");

//     return 0;
// }

#include <stdio.h>
int main (){
    int arr1[9] = {6,5,7,44,88,2,44,5,10};
    float arr2[9] = {};

    

    for (int i=0 ; i<9; i++){
        arr2[9-i-1] = arr1[i];
        printf("%.2f \n", arr2[i]);
    }
    return 0;
}