import { checkForName } from "../client/js/nameChecker";

describe("Testing the name checker functionality", () => {
    
    test("Testing the nameChecker function", () => {

           let url = "https://www.rollingstone.com"; 
           expect(checkForName(url)).toMatch(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi);
    
        });

});