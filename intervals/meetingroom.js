//[[0,30],[5,10],[15,20]]

function meetingRomm(arr){
    let start = [];
    let end = [];
    for(let i=0; i<arr.length;i++){
        start.push(arr[i][0]);
        end.push(arr[i][1]);

    }

    for(let i=0;i<start.length;i++){
        if(start[i+1] < end[i]){
            return false;
        }
    }
    return true;
}

console.log(meetingRomm([[0,30],[30,40]]))