// 1
function reverseNumber(n) {
  return parseInt(n.toString().split('').reverse().join(''));
}
console.log("1:", reverseNumber(32243)); 

// 2
function isPalindrome(str) {
  str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  return str === str.split('').reverse().join('');
}
console.log("2:", isPalindrome("madam")); 

// 3
function stringCombinations(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      result.push(str.slice(i, j));
    }
  }
  return result;
}
console.log("3:", stringCombinations("dog"));

// 4
function alphabetOrder(str) {
  return str.split('').sort().join('');
}
console.log("4:", alphabetOrder("webmaster")); 

// 5
function capitalizeWords(str) {
  return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
console.log("5:", capitalizeWords("the quick brown fox")); 

// 6
function longestWord(str) {
  return str.split(' ').reduce((longest, word) => word.length > longest.length ? word : longest, "");
}
console.log("6:", longestWord("Web Development Tutorial")); 

// 7
function countVowels(str) {
  return str.match(/[aeiou]/gi)?.length || 0;
}
console.log("7:", countVowels("The quick brown fox")); 

// 8
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log("8:", isPrime(7)); 

// 9
function detectType(input) {
  return typeof input;
}
console.log("9:", detectType(true)); 

// 10
function identityMatrix(n) {
  return Array.from({ length: n }, (_, i) =>
    Array.from({ length: n }, (_, j) => (i === j ? 1 : 0))
  );
}
console.log("10:", identityMatrix(3));

// 11
function secondLowestGreatest(arr) {
  const sorted = Array.from(new Set(arr)).sort((a, b) => a - b);
  return [sorted[1], sorted[sorted.length - 2]];
}
console.log("11:", secondLowestGreatest([1, 2, 3, 4, 5])); 

// 12
function isPerfectNumber(n) {
  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (n % i === 0) sum += i;
  }
  return sum === n;
}
console.log("12:",isPerfectNumber(6)); 

// 13
function getFactors(n) {
  let factors = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) factors.push(i);
  }
  return factors;
}
console.log("13:",getFactors(15)); 

// 14
function amountToCoins(amount, coins) {
  let result = [];
  for (let coin of coins) {
    while (amount >= coin) {
      amount -= coin;
      result.push(coin);
    }
  }
  return result;
}
console.log("14:",amountToCoins(46, [25, 10, 5, 2, 1]));

// 15
function power(b, n) {
  return Math.pow(b, n);
}
console.log("15:",power(2, 3)); 

// 16
function uniqueChars(str) {
  return [...new Set(str)].join('');
}
console.log("16:",uniqueChars("thequickbrownfoxjumpsoverthelazydog"));

// 17
function charCount(str) {
  let count = {};
  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
  }
  return count;
}
console.log("17:",charCount("hello")); 

// 18
function binarySearch(arr, target) {
  let start = 0, end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) start = mid + 1;
    else end = mid - 1;
  }
  return -1;
}
console.log("18:",binarySearch([1, 2, 3, 4, 5], 4)); 

// 19
function largerThan(arr, num) {
  return arr.filter(x => x > num);
}
console.log("19:",largerThan([1, 2, 3, 4], 2)); 

// 20
function generateId(length) {
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";
  for (let i = 0; i < length; i++) {
    id += chars[Math.floor(Math.random() * chars.length)];
  }
  return id;
}
console.log("20:",generateId(8));

// 21
function subsetFixedLength(arr, len) {
  let result = [];
  function helper(temp, start) {
    if (temp.length === len) {
      result.push([...temp]);
      return;
    }
    for (let i = start; i < arr.length; i++) {
      temp.push(arr[i]);
      helper(temp, i + 1);
      temp.pop();
    }
  }
  helper([], 0);
  return result;
}
console.log("21:",subsetFixedLength([1, 2, 3], 2));

// 22
function countLetter(str, letter) {
  return [...str].filter(l => l === letter).length;
}
console.log("22:",countLetter('microsoft.com', 'o')); 

// 23
function firstNonRepeated(str) {
  for (let char of str) {
    if (str.indexOf(char) === str.lastIndexOf(char)) return char;
  }
  return null;
}
console.log("23:",firstNonRepeated('abacddbec'));

// 24
function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
console.log("24:",bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));

// 25
function longestCountryName(countries) {
  return countries.reduce((a, b) => a.length > b.length ? a : b);
}
console.log("25:",longestCountryName(["Australia", "Germany", "United States of America"])); 

// 26
function longestUniqueSubstring(str) {
  let seen = {}, start = 0, maxLen = 0, maxStr = '';
  for (let i = 0; i < str.length; i++) {
    if (seen[str[i]] !== undefined && seen[str[i]] >= start) {
      start = seen[str[i]] + 1;
    }
    seen[str[i]] = i;
    if (i - start + 1 > maxLen) {
      maxLen = i - start + 1;
      maxStr = str.substring(start, i + 1);
    }
  }
  return maxStr;
}
console.log("26:",longestUniqueSubstring("abcabcbb")); 

// 27
function longestPalindrome(str) {
  let max = '';
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      let substr = str.slice(i, j);
      if (substr === substr.split('').reverse().join('') && substr.length > max.length) {
        max = substr;
      }
    }
  }
  return max;
}
console.log("27:",longestPalindrome("bananas")); 

// 28
function applyFunction(fn) {
  return fn();
}
console.log("28:",applyFunction(() => 'JavaScript function')); 

// 29
function getFunctionName(fn) {
  return fn.name;
}
function sampleFunction() {}
console.log("29:",getFunctionName(sampleFunction)); 

