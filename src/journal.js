export default function Journal () {
  this.textEntry = {};
  this.currentID = 0;
}

Journal.prototype.addEntry = function(entry) {
  entry.id = this.assignId();
  this.textEntry[entry.id] = entry;
};

Journal.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};


function Entry(name, title, body) {
  this.name = name;
  this.title = title;
  this.body = body;
  //this.getTeaser = this.getTeaser();
}
//return number of words in entry
function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const wordArray = text.split(" ");
  wordArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function countVowel(body)

const name = $('#name').val();
const title = $('#title').val();
const body = $('#bodyText').val();
const wordCount = wordCounter(body);

let entry1 = new Entry(name, title, body);
$('#total-count').html(wordCount);

let entry1 = new Entry('Alex', 'First Entry', 'sdfdfsfad');
console.log(entry1);

//return number of vowels
//getTeaser return first sentence (up to 8 words)
