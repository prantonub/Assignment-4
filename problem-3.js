///Problem-3
function checkDigitsInName(input){
    if (typeof input !== 'string'){
        return "Invalid Input";
    }
    for (let i = 0; i < input.length; i++){
        if (!isNaN(input[i]) && input[i] !== ' '){ 
            return true;
        }
    }
    return false;
}
