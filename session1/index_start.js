// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'
function reverseString(str) {
  let reversed = "";
  for(let i = str.length; i >= 0; --i)
  {
    reversed += str.charAt(i);
  }
  
  return reversed;
}



// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false
function isPalindrome(str, isCaseSensitive)
{
  return isCaseSensitive ? (reverseString(str).toLowerCase() === str.toLowerCase()) : (reverseString(str) === str);
}



// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125
function reverseInt(int)
{
  return parseInt(reverseString(int.toString()), 10);
}



// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str)
{
  let endResult = str;
  let splitted = endResult.split(" ");

  for(let i = 0; i < splitted.length; i++)
  {
    let char = splitted[i].charAt(0);
    splitted[i] = char.toUpperCase() + splitted[i].substr(1);
  }

  endResult = splitted.join(" ");
  return endResult;
}



// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str)
{
  let mostCommonCharacter = '';
  let latestHighestCount = 0;
  let blacklistedCharacters = [' '];
  
  for(let i = 0; i < str.length; i++)
  {
    if(blacklistedCharacters.includes(str.charAt(i)))
    {
       continue;
    }
    
    let reg = new RegExp(str.charAt(i), 'gi');
    let matches = str.match(reg);
    if (matches.length > 0)
    {
      let matchStr = matches.toString().replace('/,/g', '');
      if(latestHighestCount < matchStr.length)
      {
        mostCommonCharacter = str.charAt(i);
        latestHighestCount = matchStr.length;
      }
      
      blacklistedCharacters.push(str.charAt(i));
    }
  }

  return mostCommonCharacter;
}



// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz()
{
  for(let i = 0; i <= 100; ++i)
  {
    if(i % 3 === 0 && i % 5 === 0)
    {
      console.log("Fizz Buzz");
    }
    else if(i % 3 === 0)
    {
      console.log("Fizz");
    }
    else if(i % 5 === 0)
    {
      console.log("Buzz");
    }
    else
    {
      console.log(i);
    }
  }
}



// Call Functions
console.log("ReverseString: " + reverseString("Chicken"));
console.log("IsPalindrome: " + isPalindrome("racecar", false));
console.log("ReverseInt: " + reverseInt(321));
console.log("CapitalizeLetters: " + capitalizeLetters("This is capitalizing the first letter in every word."));
console.log("MaxCharacter: " + maxCharacter("The most common character in this string."));
console.log("---------------------------------------------------");
console.log("Fizz Buzz starting:");
fizzBuzz();