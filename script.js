function getQuote() {
    let url = 'https://type.fit/api/quotes';
    fetch(url)
      .then(response => response.json())
      .then(data => {
        //console.log(data);
        //console.log(data[0].text);
        
        let random_index = Math.floor(Math.random() * 100) + 1;
        console.log(random_index);
        
        console.log(data[random_index].text);
        console.log(data[random_index].author);
        
        document.write(data[random_index].text);
        document.write(data[random_index].author);
      });
}

getQuote();