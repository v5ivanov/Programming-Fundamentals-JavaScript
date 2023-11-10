function reversedChars(char1, char2, char3) {
    let arr = [];
    let newArray=[];
    arr.push(char1, char2, char3);
    for (let i = arr.length - 1; i >= 0; i--) {
        newArray.push(arr[i])
    }
    console.log(newArray.join(' '))


}
reversedChars('A',
    'B',
    'C'
);
reversedChars('R',
    'U',
    'K'
);

