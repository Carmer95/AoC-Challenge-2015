const fs = require('fs');

fs.readFile('./info.txt', (err, data) => {      //reads the value of the info.txt file, received as the 'data' parameter, while receiving any error received as the 'err' parameter.
    if (err) {
        console.log('Error!');
    }
    info = data.toString();     //converts the bit buffer code (info) that we receive into a string (data). ())(()(), etc.

    const arrInfo = Array.from(info);

    let leftBracket = [];
    let rightBracket = [];
    
    arrInfo.filter(char => {
        if (char === '(') {
            leftBracket.push(char);
        } else {
            rightBracket.push(char);
        }
    })
    console.log(rightBracket); //...3540
    console.log(leftBracket); //...3260

    let difference = leftBracket.length - rightBracket.length; //3540 '(' - 3260 ')' = 280 '('

    console.log(difference); //280 '('

    let floor = 0;
    let firstTime = 0;
    let index = 0;

    arrInfo.forEach(bracket => {
        if (bracket == '(') {
            floor += 1;
            index += 1;
            // console.log( floor, index );
        } else {
            floor -= 1;
            index += 1;
        }
        if (floor == -1 && firstTime == 0) {
            if (firstTime == 0) {
            console.log(index);
            }
            firstTime += 1;
        }
    })


    // let answerTwo = arrInfo.reduce((acc, bracket, index = 0) => {
    //     if(bracket == ')') {
    //         if (currentLeftBracket.length < currentRightBracket.length) {
    //             return index;
    //         } else {
    //         currentRightBracket.push(bracket)
    //         console.log(1, currentLeftBracket.length, currentRightBracket.length)
    //         }
    //     }
    //     else {
    //         currentLeftBracket.push(bracket)
    //         console.log(2, currentLeftBracket.length, currentRightBracket.length)
    //     } 
    //     // else if (bracket == '{') {
    //     //     acc[0] + 1;
    //     //     console.log(acc[0]);
    //     // }
    //     // console.log(bracket, acc, index)
    
    // }, [[],[]])
    // console.log(3, answerTwo)
})
