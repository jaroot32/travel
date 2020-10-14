import { entries } from "../client/js/entries"

describe("Testing the entries functionality", () => {
    
    test("Testing the entries function", () => {

    let test = [
        {
            polarity: "neutral",
            polarity_confidence: 0.6672996878623962,
            subjectivity: "subjective",
            subjectivity_confidence: 1,
            text: "A second lockdown is currently in place in Melbourne and its surrounding areasA strict lockdown in the Australian city of Melbourne has been extended by two weeks, with officials saying new Covid-19 cases had not dropped enough.\nVictoria State Premier Daniel Andrews said the restrictions would be in place until 28 September, with a slight relaxation.\nA gradual easing of the measures will be implemented from October.\nThe state has been the epicentre of the country's second wave, accounting for 90% of Australia's 753 deaths.\nAustralia has recorded a total of 26,000 cases in a population of 25 million.\nThe greater Melbourne area entered a second lockdown on 9 July after a rise in cases. A 5km (3 mile) travel limit and night time curfew was imposed while shops and businesses were closed.\nThe current stage four lockdown was originally set to end on 13 September.\nWhat are the new changes?\nMelbourne's curfew will be expanded from 21:00 to 05:00. Single people will be allowed to form a bubble and visit each other, and the current travel limit will not apply to these meetings.\n\"There is only one option and that is to do this in a series of steady and safe steps. You can't run out of lockdown. Because all you are doing is running into a third wave and we'll all be locked up again,\" Mr Andrews said at a news conference.\n\"We can't open up at this time. If we were to we would lose control very quickly... I want a Christmas that is as close to normal as possible and this is the only way, these steps are the only way that we will get to that point.\"\nMr Andrews said the state needed to \"open up in a safe and steady way\"If the daily average number of cases are between 30 and 50 by 28 September, the city will enter stage three of restrictions.\nUnder this stage, public gatherings will increase to five people from two households and there will be a staged return to schools for some years and specialist schools.\nIf the daily average number of cases fall below five by 26 October, then the curfew would be ended.\nOutside of the greater Melbourne area, the rest of Victoria state will have restrictions eased slightly quicker.\nStory continues\nFrom 13 September, up to five people from two households will be able to gather outdoors. Outdoor pools and playgrounds will open and religious services can be conducted outdoors with a maximum of five people.\nThe announcement comes a day after anti-lockdown protests were attended by hundreds of people across Australia.\nIn Melbourne, about 300 people marched through the city in defiance of the measures.\n\"It is selfish to protest and it is unlawful. Any behaviour from anyone that contributes to more virus than less and more restrictions than less is not in anyone's interests,\" Mr Andrews said.\n\"People want this over and so do I,\" he added."
        }
    ];


        
           expect(entries(test)).toBeDefined();
    
        });

});