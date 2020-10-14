function clearEntries(list) {
    
        let list_to_clear = document.getElementById(list);

        while (list_to_clear.firstChild) {
            list_to_clear.removeChild(list_to_clear.firstChild);
        }

}

export { clearEntries }