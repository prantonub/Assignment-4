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