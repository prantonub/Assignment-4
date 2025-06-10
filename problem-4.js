//Problem-4
function calculateFinalScore(input){
    if (typeof input !== 'object' || input === null || !input.hasOwnProperty('name') || 
        !input.hasOwnProperty('testScore') || !input.hasOwnProperty('schoolGrade') || 
        !input.hasOwnProperty('isFFamily')){
        return "Invalid Input";
    }
    const { name, testScore, schoolGrade, isFFamily } = input;
    if (typeof name !== 'string' || typeof testScore !== 'number' || typeof schoolGrade !== 'number' || typeof isFFamily !== 'boolean') {
        return "Invalid Input";
    }
    if (testScore > 50 || schoolGrade > 30 || testScore < 0 || schoolGrade < 0){
        return "Invalid Input";
    }
    let finalScore = testScore + schoolGrade;
        if (isFFamily){
        finalScore += 20;
    }
    return finalScore >= 80;
}