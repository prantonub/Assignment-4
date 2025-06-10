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
