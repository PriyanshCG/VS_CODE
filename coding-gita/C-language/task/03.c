#include <stdio.h>
int main(){
    int arr[5]={1,1,9,1,7};
    int count=0;
    int len = sizeof(arr)/sizeof(arr[0]);
    for (int j=0; j<len; j++){
    for (int i=0; i<len; i++){ 
        if (arr[i]==arr[j]){
            count=count+1;
        }
    }
        printf("%d\n",count);
        count=0;
    }
    return 0;
}