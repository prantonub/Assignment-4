//Problem-1
function calculateTax(income, expense){
if (income < 0 || expense < 0 || income < expense)
{
    return "Invalid Input";
}
    let difference = income - expense;
     let calculateTax = difference * 0.20;
    return calculateTax; 
}

//Problem-2
function sendNotification(email){
if ( email.indexOf('@')=== -1 || email.split('@').length !== 2)
{
    return "Invalid Input";
}
     let indexOf = email.split('@');
      let username = indexOf [0];
      let domainName = indexOf [1];
    return `${username} sent you an email from ${domainName}`;
}

//Problem-3
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

//Problem-5
function waitingTime(interviewTimes, serialNumber) {
    if (!Array.isArray(interviewTimes) || typeof serialNumber !== 'number'){
        return "Invalid Input";
    }
    let interviewedCount = interviewTimes.length;
    let remainingPeople = serialNumber - interviewedCount - 1;
    if (remainingPeople <= 0) 
        {
        return 0;
    }
}

