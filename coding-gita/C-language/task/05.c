#include <stdio.h>
void count(){
     int arr[6]={7,7,7,7,1,3};
     for(int i=0;i<6;i++){
        if(arr[i]/arr[i-1]==1){
            if(arr[i])
            
            printf("most repeated value is %d\n",arr[i]);
}}
}
int main (){
    count();
    return 0;
}
