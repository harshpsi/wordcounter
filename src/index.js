const submit = document.getElementById('submit');
const clear = document.getElementById('clear');
const textArea = document.getElementById('text-area');
const resultsContainer = document.getElementsByClassName('result')[0];
let delimiter = ' ';
let text = textArea.value.trim();

/**
 * First clean the data: Remove unnecessary whitespaces eg more than one.
 * Then count the no of words separated with whitespace
 */

submit.addEventListener('click', (e) => {
	e.preventDefault();
	text = textArea.value.trim();
	if (!text) {
		alert('Enter text in box');
		return;
	}
	getResult(text);
});

const getResult = (text) => {
	const words = countWords(text, delimiter);
	const characters = countCharacter(text);
	paintDom({ words, characters });
};

const countWords = (text, delimiter) => {
	let cleanText = text.replaceAll('/n', '').replaceAll('/t', '');
	console.log(cleanText);
	return cleanText.split(delimiter).length;
};

const countCharacter = (text) => text.length;

const showDisplayContainr = () => {
	resultsContainer.style.display = 'flex';
};

const paintDom = ({ words, characters }) => {
	showDisplayContainr();
	const wordsBox = document.getElementById('words');
	const charactersBox = document.getElementById('characters');
	wordsBox.innerText = `${words} words`;
	charactersBox.innerText = `${characters} characters`;
};
