// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(sen) {
  // SOLUTION 1 - Return a single longest word
  let getLongestWord = function()
  {
    let longestWord = "";
    let splitted = sen.split(' ');
    for(let i = 0; i < splitted.length; i++)
    {
      longestWord = longestWord.length < splitted[i].length ? splitted[i] : longestWord;
    }

    return longestWord;
  }
  

  // SOLUTION 2 - Return an array and include multiple words if they have the same length
  let getLongestWordsArray = function()
  {
    let longestWords = [];
    let splitted = sen.split(' ');
    let lengthArray = splitted.map(word => word.length);
  
    for(let i = 0; i < splitted.length; i++)
    {
      let maxLength = Math.max(...lengthArray);
  
      if(splitted[i].length == maxLength)
      {
        if(!longestWords.includes(splitted[i]))
        {
          longestWords.push(splitted[i]);
        }
      }
    }
  
    return longestWords;
  }

  // SOLUTION 3 - Only return an array if multiple words, otherwise return a string
  let wordsArray = getLongestWordsArray();
  return wordsArray.length > 1 ? wordsArray : (wordsArray.length == 1 ? wordsArray[0] : "");
}

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len)
{
  let resultArray = [];
  let chunk = [];

  for (let i = 0; i < arr.length; i++) {
    const iElement = arr[i];
    chunk.push(iElement);

    if(i + 1 % len === 0)
    {
      resultArray.push(chunk);
      chunk = [];
    }
  }

  return resultArray;
}

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays)
{
  let singleArr = [];

  for (let i = 0; i < arrays.length; i++) {
    const iElement = arrays[i];

    for (let j = 0; j < iElement.length; j++) {
      const jElement = iElement[j];
      singleArr.push(jElement);
    }
  }

  return singleArr;
}

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2)
{

}

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str)
{

}

// Call Function
const output = longestWord('Hello, my name is Brad');

console.log(output);
//https://codepen.io/anon/pen/ZoqZpJ?editors=0012