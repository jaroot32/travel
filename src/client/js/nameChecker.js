function checkForName(inputText) {
   
    let expression =  /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi; 
    let regex = new RegExp(expression); 
     
    return inputText.match(regex) ? inputText:  "Invalid URL";         
}

export { checkForName }
