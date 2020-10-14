function displayEntries(arr, list) {

        let l = document.getElementById(list);
        console.log(list, l)
        Client.clearEntries(list);
        
        for (let i = 0; i < arr.length; i++) {
            l.append(arr[i])
        }

}

export { displayEntries }