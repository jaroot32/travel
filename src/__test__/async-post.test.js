import "babel-polyfill";
import { poster } from "../client/js/async-post"

describe("Testing the poster functionality", () => {
   
    let url = 'http://localhost:5000/url';
    let data = { "url": "https://www.rollingstone.com/music/music-news/mick-jagger-stones-quarantine-interview-1055105/"};
    
    test('the return data is a success object', () => {
        return expect(poster(url, data)).resolves.toStrictEqual({
            "status": "success",
            "term": {
              "url": "https://www.rollingstone.com/music/music-news/mick-jagger-stones-quarantine-interview-1055105/"
            }
          });
      });

});