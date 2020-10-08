"use strict";

var submit = document.getElementById('submit');
var clear = document.getElementById('clear');
var textArea = document.getElementById('text-area');
var resultsContainer = document.getElementsByClassName('result')[0];
var delimiter = ' ';
var text = textArea.value.trim();
/**
 * First clean the data: Remove unnecessary whitespaces eg more than one.
 * Then count the no of words separated with whitespace
 */

submit.addEventListener('click', function (e) {
  e.preventDefault();
  text = textArea.value.trim();

  if (!text) {
    alert('Enter text in box');
    return;
  }

  getResult(text);
});

var getResult = function getResult(text) {
  var words = countWords(text, delimiter);
  var characters = countCharacter(text);
  paintDom({
    words: words,
    characters: characters
  });
};

var countWords = function countWords(text, delimiter) {
  var cleanText = text.replaceAll('/n', '').replaceAll('/t', '');
  console.log(cleanText);
  return cleanText.split(delimiter).length;
};

var countCharacter = function countCharacter(text) {
  return text.length;
};

var showDisplayContainr = function showDisplayContainr() {
  resultsContainer.style.display = 'flex';
};

var paintDom = function paintDom(_ref) {
  var words = _ref.words,
      characters = _ref.characters;
  showDisplayContainr();
  var wordsBox = document.getElementById('words');
  var charactersBox = document.getElementById('characters');
  wordsBox.innerText = "".concat(words, " words");
  charactersBox.innerText = "".concat(characters, " characters");
};