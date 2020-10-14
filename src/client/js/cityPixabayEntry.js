function cityPixabayEntry(arr) {
   console.log('inside displayPixabay', arr)
   let html_entries = [];

   // for (let i = 0; i < arr.length; i++) {
      // console.log(arr[i].largeImageURL)
      let div = document.createElement("div");
      let img = document.createElement("img");
      img.src = arr[0].largeImageURL
      div.append(img)
      html_entries.push(div);
   // }
   return html_entries;
}

export { cityPixabayEntry }