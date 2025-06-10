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