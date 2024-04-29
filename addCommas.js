function addCommas(number) {
    //stringify the number
    const numberString = number.toString();
    console.log(numberString);
    
    //handles 4-digit numbers
    if(numberString.length === 4){
        return numberString.slice(0, 1) + ',' + numberString.slice(1);
    }else if(numberString.length <4){
        return numberString;
    }
    

    const numDigits = numberString.length;
    let numCommas = Math.floor((numDigits -1) /3 )
    console.log(numCommas);
    //for numbers 7-digits and up
    const numberArr = numberString.split('');
    for (let i = 1; i <= numCommas; i++) {
        const commaPosition = numDigits - (i * 3);
        numberArr.splice(commaPosition, 0, ',');
    }
    return numberArr.join('');
}

module.exports = addCommas;