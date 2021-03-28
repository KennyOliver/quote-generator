function getQuote() {
    let url = 'https://type.fit/api/quotes';
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        console.log(data[0].text);
      });
}

getQuote();