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
cards = shuffle([].concat(makeDeck())),
deal = function() {

	var
	card = $(cards[ROCK.MATH.random(0, (cards.length-1))].toHTML()),
	rotation = ROCK.MATH.random(-10, 10);

	card.css({
		'transform': 'scale(2.5) translate(0%, 0%) rotate(-10deg)',
		'box-shadow': '0 10px 20px rgba(0, 0, 0, 0.8)'
	});

	$table.append(card);

	setTimeout(function() {

		card.css({
			'transform': `scale(1) translate(-50%, -50%) rotate(${rotation}deg)`,
			'box-shadow': '0 0 0 rgba(0, 0, 0, 0.5)'
		});

	}, 100);

},
$table = $('#table'),
$deal = $('#deal').on('click', function() {

	deal();

});

deal();
