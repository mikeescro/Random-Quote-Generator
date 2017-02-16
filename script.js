// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var message = '';
var color = ["pink", "blue", "orange", "grey", "red", "black", "purple", "green", "brown"];
var viewedQuotes =[];

//Array to hold quotes, sources, citaitons & years
var quotes = [
	{	quote: 'And, when you want something, all the universe conspires in helping you to achieve it.', 
		source: "Paulo Coelho", 
		citation: "The Alchemist", 
		year: "1988", 
		tags: "Love, Universe"
	},
	{	
		quote: 'Two possibilities exist: either we are alone in the Universe or we are not. Both are equally terrifying.', 
		source: "Arthur C. Clarke", 
		citation: "Visions: How Science Will Revolutionize the Twenty-First Century", 
		year: "1999", 
		tags: "Universe, Science"
	},
	{	
		quote: 'Live in the sunshine, swim the sea, drink the wild air.', 
		source: "Ralph Waldo Emerson",  
		tags: "Life, Nature"
	},
	{
		quote: 'I would like to be the air that inhabits you for a moment only. I would like to be that unnoticed and that necessary.', 
		source: "Margaret Atwood", 
		citation: "Variation on the Word Sleep", 
		year: "1981", 
		tags: "Love"
	},
	{
		quote: 'It has been said, \'time heals all wounds.\' I do not agree. The wounds remain. In time, the mind, protecting its sanity, covers them with scar tissue and the pain lessens. But it is never gone.', 
		source: "Rose Fitzgerald Kennedy", 
		citation: "Times to Remember", 
		year: "1974", 
		tags: "Memories, Pain, Wounds, Healing"
	},
	{
		quote: 'When we try to pick out anything by itself, we find it hitched to everything else in the Universe.', 
		source: "John Muir", 
		citation: "My First Summer in the Sierra", 
		year: "1911", 
		tags: "Nature, Science, Universe"
	},
	{
		quote: 'The boldness of asking deep questions may require unforeseen flexibility if we are to accept the answers.', 
		source: "Brian Greene", 
		citation: "The Elegant Universe", 
		year: "2000", 
		tags: "Universe, Science"
	},
	{
		quote: 'Talent hits a target no one else can hit. Genius hits a target no one else can see.', 
		source: "Michio Kaku", 
		citation: "The Future of the Mind: The Scientific Quest To Understand, Enhance and Empower the Mind", 
		year: "2014", 
		tags: "Talent, Science, Genius, Knowledge"
	},
	{
		quote: 'Be open to your dreams, people. Embrace that distant shore. Because our mortal journey is over all too soon.', 
		source: "David Assael", 
		citation: "Northern Exposure, It Happened in Juneau", 
		year: "1992", 
		tags: "Dreams, Life, Death"
	},
	{
		quote: 'Life is pleasant. Death is peaceful. It\'s the transition that\'s troublesome.', 
		source: "Isaac Asimov",  
		tags: "Life, Death, Peace"
	}, 
	{
		quote: 'If the inevitability of human oblivion worries you, I encourage you to ignore it.', 
		source: "John Green", 
		citation: "The Fault in Our Stars", 
		year: "2014", 
		tags: "Life, Death"
	}, 
	{
		quote: 'Do not judge men by mere appearances; for the light laughter that bubbles on the lip often mantles over the depths of sadness, and the serious look may be the sober veil that covers a divine peace and joy.', 
		source: "Edward Chapin", 
		tags: "Sadness, Laughter, Judging, Men"
	}, 
	{
		quote: '...it\'s better to burn out than to fade away.', 
		source: "Kurt Cobain", 
		citation: "Suicide Letter", 
		year: "1994", 
		tags: "Life, Death, Ambition, Suicide"
	}, 
	{
		quote: 'Never open the door to a lesser evil, for other and greater ones invariably slink in after it.', 
		source: "Baltasar Gracian", 
		citation: "The Art of Worldly Wisdom", 
		year: "1647", 
		tags: "Evil"
	}, 
	{
		quote: 'Life flows on within you and without you.', 
		source: "The Beatles", 
		citation: "Album: Sgt. Peppers Lonely Hearts Band, Song: Within You Without You", 
		year: "1967", 
		tags: "Music, Life, The Beatles"
	} 
];

//Print quote function
function print(quote) {
	var outputDiv = document.getElementById('quote-box');
	outputDiv.innerHTML = quote;
}
// Function to get a random object from quotes array and store in variable randomQuote
function getRandomQuote() {
	var randomQuote = Math.floor(Math.random() * quotes.length);

	
	var splicedQuote = quotes.splice(randomQuote, 1)[0];
	viewedQuotes.push(splicedQuote);
	if ( quotes.length === 0 ) {
		quotes = viewedQuotes;
		viewedQuotes = [];
	}
	return splicedQuote;
}

//Function to genereate random color
function changeColor(){
  var random_color = Math.floor(Math.random() * color.length);
  return color[random_color];
}



// Function to take previously selected random object from array & print to screen
function printQuote() {
	
// On click event, function printQuote runs, then fires the getRandomQuote function
	var quotes = getRandomQuote();
	message ='<p class="quote">' + quotes.quote + '</p>';
	message  += '<p class="source">' + quotes.source;
	if ( quotes.citation ) {
		message += '<span class="citation">' + quotes.citation + '</span>';
	} else {
		message += '';
	}
	if (quotes.year) {
		message += '<span class="year">' + quotes.year + '</span></p>';	
	} else {
		message += '';
	}
	if ( quotes.tags ) {
		message += '<h3>' + quotes.tags + '</h3>';
	} else {
		message += '';
	}
	print(message);

// Fires random background color
  document.body.style.backgroundColor = changeColor();
}

// Automatic timer function
setInterval(function(){
  printQuote();
},15000);
