export function Journal () {
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


export function Entry(name, title, body, getTeaser) {
  this.name = name;
  this.title = title;
  this.body = body;
  this.getTeaser = getTeaser;
}
//return number of words in entry
export function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const wordArray = text.split(' ');
  wordArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

//return number of vowels
export const vowels = ['a','e','i','o','u'];
export function vowelCounter(str) {
  let count = [];
  let count1 = 0;
  let count2 = 0;
  for (let letter of str.toLowerCase()) {
    if (vowels.includes(letter)) {
      count1++;
      
    } else {
      count2++;
    }
  }
  count.push(count1);
  count.push(count2);
  return count;
  // const count = str.match(/[aeiou]/gi).length;
  // return count;
}

export function getTeaser(text) {
  let string = text.toString();
  let split = string.split(' ');
  let newSplit = split.slice(0, 8);
  let newText = newSplit.join(' ');
  return newText;
}
// function noPottyMouth(text) {
//   let wordArray = text.split(' ');
//   wordArray.forEach(function (element, index) {
//     if (
//       element.includes('loopdaloop') ||
//       element.includes('zoinks') ||
//       element.includes('muppeteer') ||
//       element.includes('biffaroni')
//     ) {
//       wordArray[index] = 'awooga';
//     }
//   });
//   return wordArray;
// }
