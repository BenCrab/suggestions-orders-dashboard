// ReWrite without Library fuctions and old style JS
// Move console.log outside the function


// 1. Write a function that takes a string and a number, and returns the string repeated that many times (`"ben", 3` would return `"benbenben"`)

// Creates function that takes in a name, and the number of times you want that name to be repeated
const multiplyString = (name, number) => {
    // Creates a variable for the repeated name
    // Assigns that variable the passed-in name and repeats that by the value of the passed-in number
    const repeatedName = name.repeat(number);
    // Logs the repeatedName to the console
    console.log(repeatedName);
    // Returns the repeatedName for use elsewhere if needed
    return repeatedName;
}

multiplyString('Ben', 3);


// 2. Write a function that takes a string and uppercases it (`"Ben Crabtree"` would return `"BEN CRABTREE"`)

// Creates function that takes in a word and transforms all characters to uppercase
const upperCaseString = (word) => {
    // Creates a variable for the upper-cased string
    let upperCasedString;
    // Assigns the variable the passed-in word and uppercases that word
    upperCasedString = word.toUpperCase();
    // Logs the upper-cased word to the console
    console.log(upperCasedString);
    // Returns the uppercased string for use elsewhere if needed
    return upperCasedString;
}

upperCaseString('Ben Crabtree');


// 3. Write a function that takes a string and removes all the vowels from it (`"Ben Crabtree"` would return `"Bn Crbtr"`)

// Creates a function that takes in a word and removes the vowels from it
const vowelRemover = (word) => {
    // Creates a variable to store the word striped of its vowels
    let noVowelWord;
    // Assigns the variable the word with any found vowels replaced with empty characters (g: match all characters in the string, not just the first found, i: case insensitivity)
    noVowelWord = word.replace(/[aeiou]/ig,'');
    // Logs the de-voweled word to the console
    console.log(noVowelWord);
    // Returns the de-vowled word for use elsewhere if needed
    return noVowelWord;
}

vowelRemover('Ben Crabtree');

// 4. Write a function that takes a string and returns the number of "e"s in it (`"Ben Crabtree"` would return `"e"`)

// Creates a function that counts the number of e characters in a passed-in string
const eCounter = (string) => {
    // Creates an array that stores each of the e characters found in the string
    let extractedEs;
    // Creates an array to store the number of e characters stored in the extractedEs array
    let numberOfLetterE;
    // Takes the passed-in string and performs a match that finds every e character in the string and stores each found characer in the extractedEs array
    extractedEs = string.match(/[e]/ig);
    // Counts the number of e characters stored in the extractedEs array
    numberOfLetterE = extractedEs.length;
    // Logs the numberOfLetterE to the console
    console.log(numberOfLetterE);
}

eCounter('Ben Crabtree');

// 5. Write a function that takes a string and returns a list of the distinct letters in it, lowercased, ignoring spaces (`"Ben Crabtree"` would return `["b", "e", "n", "c", "r", "a", "t"]`)

// Creates a function that finds the distinct letters in a string and produces an array of those distinct characters
const distinctify = (string) => {
    // Creates a variable for the nonDistinctLetters in the string (All characters from within the passed-in string)
    let nonDistinctLetters;
    // Creates a variable for the distinct letters found in the string
    let distinctLetters;
    // Collects the passed-in string, transforms it to lowercase, removes spaces, joins the split arrays together into one string, and then splits that sting into each individual character stored within an array
    nonDistinctLetters = string.toLowerCase().split(' ').join('').split('');
    distinctLetters = nonDistinctLetters.filter(
        function(arrayElement, iterationIndex) {
            return nonDistinctLetters.indexOf(arrayElement) === iterationIndex
        });
    console.log(distinctLetters);
}

distinctify('Ben Crabtree');

// 6. Write a function that takes a string and returns an object listing how many times each letter (all lowercase) was in it (`"Ben Crabtree"` would return `{ "b": 2, "e": 3, "n": 1, "c": 1, "r": 2, "a": 1, "t": 1 }`, and sort order on the keys doesn't matter)

const objectify = (string) => {
    // Create a variable for each of the characters from the string
    let letters;
    // Get all of the letters in the string, remove the spaces and store each of the characters in an array
    letters = string.toLowerCase().split(' ').join('').split('');

    // Create the object to store each of the unique letters and how many times they occur
    const count = (letters) => letters.reduce((a, b) => Object.assign(a, {[b]: (a[b] || 0) + 1}), {})

    const duplicates = (dict) => Object.keys(dict).filter((a) => dict[a] > 1)

    console.log(count(letters))
}

objectify('Ben Crabtree');
