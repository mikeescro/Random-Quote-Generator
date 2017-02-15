// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var quotes [
	{	quote: '"And, when you want something, all the universe conspires in helping you to achieve it."', 
		author: "Paulo Coelho", 
		source: "The Alchemist", 
		year: "1988", 
		tags: "love, universe"
	},
	{	
		quote: '"Two possibilities exist: either we are alone in the Universe or we are not. Both are equally terrifying."', 
		author: "Arthur C. Clarke", 
		source: "Visions: How Science Will Revolutionize the Twenty-First Century", 
		year: "1999", 
		tags: "universe, science"
	},
	{	
		quote: '"Live in the sunshine, swim the sea, drink the wild air."', 
		author: "Ralph Waldo Emerson", 
		source: "unknown", 
		year: , 
		tags: "life, nature"
	},
	{
		quote: '"I would like to be the air that inhabits you for a moment only. I would like to be that unnoticed and that necessary."', 
		author: "Margaret Atwood", 
		source: "Variation on the Word Sleep", 
		year: "1981", 
		tags: "love"
	},
	{
		quote: '"It has been said, \'time heals all wounds.\' I do not agree. The wounds remain. In time, the mind, protecting its sanity, covers them with scar tissue and the pain lessens. But it is never gone."', 
		author: "Rose Fitzgerald Kennedy", 
		source: "Times to Remember", 
		year: "1974", 
		tags: "memories, pain, wounds, healing"
	},
	{
		quote: '"When we try to pick out anything by itself, we find it hitched to everything else in the Universe."', 
		author: "John Muir", 
		source: "My First Summer in the Sierra", 
		year: "1911", 
		tags: "nature, science, universe"
	},
	{
		quote: '"The boldness of asking deep questions may require unforeseen flexibility if we are to accept the answers."', 
		author: "Brian Greene", 
		source: "The Elegant Universe", 
		year: "2000", 
		tags: "universe, science"
	},
	{
		quote: '"Talent hits a target no one else can hit. Genius hits a target no one else can see."', 
		author: "Michio Kaku", 
		source: "The Future of the Mind: The Scientific Quest To Understand, Enhance and Empower the Mind", 
		year: "2014", 
		tags: "talent, science, genius, knowledge"
	},
	{
		quote: '"Be open to your dreams, people. Embrace that distant shore. Because our mortal journey is over all too soon."', 
		author: "David Assael", 
		source: "Northern Exposure, It Happened in Juneau", 
		year: "1992", 
		tags: "dreams, life, death"
	},
	{
		quote: '"Life is pleasant. Death is peaceful. It\'s the transition that\'s troublesome."', 
		author: "Isaac Asimov", 
		source: "unknown", 
		year: "unknown", 
		tags: "life, death, peace"
	}, 
	{
		quote: '"If the inevitability of human oblivion worries you, I encourage you to ignore it."', 
		author: "John Green", 
		source: "The Fault in Our Stars", 
		year: "", 
		tags: "life ,death"
	}, 
	{
		quote: '"Do not judge men by mere appearances; for the light laughter that bubbles on the lip often mantles over the depths of sadness, and the serious look may be the sober veil that covers a divine peace and joy."', 
		author: "Edward Chapin", 
		source: "unknown", 
		year: "unknown", 
		tags: "sadness, laughter, judging, men"
	}, 
	{
		quote: '"...it\'s better to burn out than to fade away."', 
		author: "Kurt Cobain", 
		source: "Suicide Letter", 
		year: "1994", 
		tags: "life, death, ambition, suicide"
	}, 
	{
		quote: '"Never open the door to a lesser evil, for other and greater ones invariably slink in after it."', 
		author: "Baltasar Gracian", 
		source: "The Art of Worldly Wisdom", 
		year: "1647", 
		tags: "evil"
	}, 
	{
		quote: '"Life flows on within you and without you."', 
		author: "The Beatles", 
		source: "Album: Sgt. Peppers Lonely Hearts Band, Song: Within You Without You", 
		year: "1967", 
		tags: "music, life, The Beatles"
	} 

];




