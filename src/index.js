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
    const title = $('#title').val();
    const body = $('#bodyInput').val();
    console.log(body);
    const wordCount = wordCounter(body);
    const countVowel = vowelCounter(body);
    //getTeaser return first sentence (up to 8 words)
    const teaserText = getTeaser(body);

    let entry1 = new Entry(name, title, body);
    $('#total-count').text(wordCount);
    $('#vowel-count').text(countVowel[0]);
    $('#cons-count').text(countVowel[1]);
    $('#print').text(teaserText);
    $('#nameInput').addClass('inputSubmit');
    $('#titleInput').addClass('inputSubmit');
    $('#bodyInput').addClass('inputSubmit');
    console.log(entry1);
  });
});

