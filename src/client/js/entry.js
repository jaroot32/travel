function entry(arr) {
    
        let html_entries = [];
     
            for (let i = 0; i < arr.length; i++) {
                let str = arr[i].text.replace(/\n/g, '<br>');
                let div = document.createElement("div");
                div.classList.add( "recent-entry" );
                div.innerHTML = `<div id="entryHolder">
                <h2>Polarity:</h2>
                <div id="polarity">${arr[i].polarity}</div>
                <h2>Subjectivity:</h2>
                <div id="subjectivity">${arr[i].subjectivity}</div>
                <h2>Polarity Confidence:</h2>
                <div id="polarity-confidence"><p>${arr[i].polarity_confidence}</p></div>
                <h2>Subjectivity Confidence:</h2>
                <div id="subjectivity-confidence"><p>${arr[i].subjectivity_confidence}</p></div>
                <h2>Article Text:</h2>
                <div id="content"><p>${str}</p></div>
            </div>`
            
            html_entries.push(div);

            }
    
        return html_entries;

}

export { entry }