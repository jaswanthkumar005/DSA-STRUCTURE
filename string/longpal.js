function longPal(s){
    let maxlength = 1;
    let startIndex = 0;
    function expandAround(left,right){
        while(left >=0 && right < s.length && s[left]== s[right]){
            let currentPalLength = right-left+1;
            if(currentPalLength > maxlength){
                maxlength = currentPalLength;
                startIndex=left;
            }
            left = left-1;
            right = right+1;
        }
    }

    for(let i=0;i < s.length ; i++){
        expandAround(i-1,i+1);
        expandAround(i,i+1);
    }

    return s.slice(startIndex,maxlength);
}

console.log(longPal("ABBA"))