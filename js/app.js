var
shuffle = function(collection) {

	return collection.sort(sorters.SHUFFLE);

},
makeDeck = function() {

	var
	out = [],
	maxValue = 13,
	maxSuit = 4;

	for(var suit=0;suit<maxSuit;suit++) {
		for(var value=0;value<maxValue;value++) {
			out.push(new Card(suits[suit], values[value], getPosition()));
		};
	};

	return out;

},
getPosition = function() {

	var
	index = ROCK.MATH.random(0, (positions.length-1)),
	out = positions.splice(index, 1)[0];

	return out;

},
makePositions = function() {

	var
	out = [],
	max = 52;

	for(var i=0;i<max;i++) {
		out.push(i);
	};

	return out;

},
positions = makePositions(),
values = [
	'A',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
	'10',
	'J',
	'Q',
	'K'
],
suits = [
	'C',
	'D',
	'H',
	'S'
],
suitIcons = {
	'C': '&#9827;&#65038;',
	'D': '&#9830;&#65038;',
	'H': '&#9829;&#65038;',
	'S': '&#9824;&#65038;'
},
suitColours = {
	'C': 'black',
	'D': 'red',
	'H': 'red',
	'S': 'black'
},
Card = ROCK.Object.extend({
	constructor: function Card(suit, value, position) {

		this.suit = suit;
		this.value = value;
		this.position = position;
		this.id = this.getId();
		this.name = this.getName();

	},
	getName: function() {

		return `${this.value}${this.suit}`;

	},
	getDisplayName: function() {

		var
		icon = suitIcons[this.suit];

		return `<div class="card-value"><div class="card-value-value">${this.value}</div><div class="card-value-icon">${icon}</div></div>`;

	},
	getColour: function() {

		return suitColours[this.suit];

	},
	getId: function() {

		return `${this.value}${this.suit}`;

	},
	toHTML: function() {

		var
		node = document.createElement('div');

		node.innerHTML = this.getDisplayName();

		node.classList.add('card');
		node.classList.add(this.getColour());

		return node;

	}
}),
sorters = {
	SHUFFLE: ROCK.SORT.NUMBER_ASCENDING(function() {
		return this.position;
	})
},
cards = makeDeck();

$('body').append(cards[0].toHTML());
