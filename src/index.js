import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
//import Journal from './journal.js';
import {Entry, wordCounter, vowelCounter, getTeaser} from './journal.js';
//import {vowels} from './journal.js';


$(document).ready(function(){
  $("form#word-counter").submit(function(event){
    event.preventDefault();
    const name = $('#nameInput').val();
    const title = $('#titleInput').val();
    const body = $('#bodyInput').val();
    console.log(body);
    
    let entry1 = new Entry(name, title, body);
    $('.output').append(createHTML);
    $('#nameInput').addClass('inputSubmit');
    $('#titleInput').addClass('inputSubmit');
    $('#bodyInput').addClass('inputSubmit');
    console.log(entry1);
  });
});

function createHTML(entry1) {
  const wordCount = wordCounter(entry1.body);
  const countVowel = vowelCounter(entry1.body);
  //getTeaser return first sentence (up to 8 words)
  const teaserText = getTeaser(entry1.body);
  const wordCountHTML = document.createElement('ul');
  wordCountHTML.innerHTML = 'total count: ' + wordCount;
  const countVowelHTML = document.createElement('li');
  countVowelHTML.innerHTML = 'vowel count: ' + countVowel[0];
  const consCount = document.createElement('li');
  consCount.innerHTML = 'consonant count: ' + countVowel[1];
  const teaser = document.createElement('li');
  teaser.innerHTML = 'teaser text: ' + teaserText;
}