function setZero(arr){
    let firstRowHaZero= false;
    let firstColHasZero = false;
    let row = arr.length-1;
    let col = arr[0].length-1;
    for(let i=0;i<=row;i++){
       if(arr[i][0] == 0){
        firstRowHaZero=true;
        break;
       }
    }
    for(let i=0;i<=col;i++){
        if(arr[0][i] == 0){
            firstColHasZero=true;
         break;
        }
     }
     //first row and column flags, if rest cells have zeros

     for(let i=1;i<=row;i++){
        for(let j=1;j<=col;j++){
          if(arr[i][j] == 0){
            arr[i][0] =0;
            arr[0][j]=0;
          }
        }
     }
     console.log(arr,"Arr");

     for(let i=1;i<=row;i++){
        for(let j=1;j<=col;j++){
            if(arr[i][0] == 0 ||arr[0][j] == 0 ){
                arr[i][j] = 0;
            }
        }  
    }
    console.log(arr,"Arr1");
  
  if(firstRowHaZero){
    for(let i=0;i<row;i++){
        arr[i][0] = 0;
    }
  }
  if(firstRowHaZero){
    for(let i=0;i<col;i++){
        arr[0][i] = 0;
    }
  }
  console.log(arr,"arr>>");


}

console.log(setZero(
    [[0,1,1],
     [1,1,1],
     [1,1,0]]
))