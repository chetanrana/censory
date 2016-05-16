var censorWords = ["sad", "bad", "mad"]
var customCensorWords = [];

function censor(inStr) {
	for( idx in censorWords ) {
		inStr = inStr.replace(censorWords[idx], "*****");
	}
	for( idx in customCensorWords ) {
		inStr = inStr.replace(customCensorWords[idx], "*****");
	}
	return inStr;
}

function addCensorWord( word ) {
	customCensorWords.push(word);
}

function addCensorWord( word ) {
	return censorWords.concat(customCensorWords);
}

exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWords = addCensoredWords;
