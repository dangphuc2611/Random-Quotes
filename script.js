let quotes = {
  'author1': 'Quotes 1',
  'author2': 'Quotes 2',
  'author3': 'Quotes 3',
  'author4': 'Quotes 4',
  'author5': 'Quotes 5',
  'author6': 'Quotes 6',
  'author7': 'Quotes 7',
  'author8': 'Quotes 8',
  'author9': 'Quotes 9',
  'author10': 'Quotes 10'
}

let authors = Object.keys(quotes);

document.getElementById('newQuoteBtn').addEventListener('click', function() {
  let randomKey = authors[Math.floor(Math.random() * authors.length)];
  document.getElementById('quoteText').innerHTML = (quotes[randomKey])
  document.getElementById('quoteAuthor').innerHTML = (randomKey)
  
})