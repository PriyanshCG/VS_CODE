#include <stdio.h>

int main() {
    int arr[] = {2, 3, 2, 5, 2,1,5};
    int n = 7;
    for(int i = 0; i < n; i++) {
        int isDuplicate = 0;
        for(int j = 0; j < i; j++) {
            if(arr[i] == arr[j]) {
                isDuplicate = 1;
                break;
            }
        }
        if(!isDuplicate) {
            printf("%d ", arr[i]);
        }
    }

    return 0;
}


