const path = require('path');

module.exports = {
	mode: 'production',
	entry: './js/app.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'starrentacard.js'
	}
}
