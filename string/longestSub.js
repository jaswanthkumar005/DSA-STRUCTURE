function longestSub(str){
    windowCharMap = {};
    windowStart=0;
    maxlength=0;

    for(let i=0; i< str.length;i++){
        let endChar = str[i];

        if(windowCharMap[endChar] >= windowStart){
            windowStart = windowCharMap[endChar]+1;
        }

      
        windowCharMap[endChar] = i;
    }
}