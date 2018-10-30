// 1. Reverse a string
function reverse(word) {
    return word.split("").reverse().join("");
}
console.log(reverse("idiot"))

function testReverseWord(word, reversedWord) {
    let result = reverse(word)
    console.assert(result === reversedWord, {
        "function": `reverse("${word}")`,
        "expected": reversedWord,
        "result": result
    })
}
testReverseWord("Tornado", "odanroT")
testReverseWord("Otto Rank", "knaR ottO")

// 2. Reverse a sentence ("bob likes dogs" -> "dogs likes bob")
function reverseSentence(str) {
    return str.split(" ").reverse().join(" ");
}
console.log(reverseSentence("rubber baby buggy bumpers"))

function testReverseSentence(sentence, reversedSentence) {
    let result = reverseSentence(sentence);
    console.assert(result === reversedSentence, {
        "function": `reverseString("${sentence}")`,
        "expected": reversedSentence,
        "result": result
    })
}
testReverseSentence("do to things", "things to do")
testReverseSentence("Bob likes dogs.", "dogs. likes Bob")

// 3. Find the minimum value in an array
function arrayMin(arr) {
    return arr.reduce(function (p, v) {
        return (p < v ? p : v);
    });
}
console.log(arrayMin([234, 623, 1, 7]))

function testArrayMin(arr, minValue) {
    let result = arrayMin(arr)
    console.assert(result === minValue, {
        "function": `arrayMin(${JSON.stringify(arr)})`,
        "expected": minValue,
        "result": result
    })
}
testArrayMin([4, -1, 8, 9, 11], -1)
testArrayMin([1, 109, 8, 9, 11], 1)



// 4. Find the maximum value in an array
function arrayMax(arr) {
    return arr.reduce(function (p, v) {
        return (p > v ? p : v);
    });
}
console.log(arrayMax([344, 2, 6, 88, 3888]))

function testArrayMax(arr, maxValue) {
    let result = arrayMax(arr);
    console.assert(result === maxValue, {
        "function": `arrayMax(${JSON.stringify(arr)})`,
        "expected": maxValue,
        "result": result
    })
}
testArrayMax([4, 1466, 8, 9, 11], 1466)
testArrayMax([-53, 0, -100, -2, -1], 0)

// // 5. Calculate a remainder (given a numerator and denominator)
function modulo(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        return NaN;
    }
    if (num1 === 0) {
        return 0;
    }
    if (num2 === 0) {
        return NaN;
    }

    const newNum1 = Math.abs(num1);
    const newNum2 = Math.abs(num2);

    const quotient = newNum1 - Math.floor(newNum1 / newNum2) * newNum2;

    return (num1 < 0 ? -quotient : quotient)
}
console.log(modulo(6, 2))

function testModulo(num1, num2, remainder) {
    let result = modulo(num1, num2)
    console.assert(result === remainder, {
        "function": modulo(num1, num2),
        "expected": remainder,
        "result": result
    })
}
testModulo(6, 2, 0)
testModulo(3, 2, 1)

// 6. Return distinct values from a list including duplicates (i.e. "1 3 5 3 7 3 1 1 5" -> "1 3 5 7")
function findDistinctNumbers(duplicates) {
    let res = duplicates.split(" ");
    let letterCounts = {};
    for (let i = 0; i < res.length; i++) {
        let currentLetter = res[i];
        if (letterCounts[currentLetter] === undefined) {
            letterCounts[currentLetter] = true;
        }
    }
    return Object.keys(letterCounts)
        .sort((a, b) => a - b)
        .join(" ")
}
console.log(findDistinctNumbers("4 5 3 7 9 3 3 29 4"))

function testFindDistinctNumbers(duplicates, distinctNumbers) {
    let result = findDistinctNumbers(duplicates)
    console.assert(result === distinctNumbers, {
        "function": `findDistinctNumbers(${JSON.stringify(duplicates)})`,
        "expected": distinctNumbers,
        "result": result
    })
}
testFindDistinctNumbers("4 4 2 9 8 8 9", "2 4 8 9")
testFindDistinctNumbers("4 2 7 9 9", "2 4 7 9")

// 7. Return distinct values and their counts (i.e. the list above becomes "1(3) 3(3) 5(2) 7(1)")
function findNumberCounts(duplicates) {
    let res = duplicates.split(" ");
    let letterCounts = {};
    for (let i = 0; i < res.length; i++) {
        let currentLetter = res[i];
        if (letterCounts[currentLetter] === undefined) {
            letterCounts[currentLetter] = 1;
        } else {
            letterCounts[currentLetter]++;
        }
    }
    return Object.keys(letterCounts)
        .sort((a, b) => a - b)
        .reduce((result, num) => {
            const newCount = `${num}(${letterCounts[num]}`;
            return `${result ? result + " " : result}${newCount})`;
        }, "");
}
console.log(findNumberCounts("8 10 34 34 88 2 4"))

// first test for kata7 (test of identifying duplicates with counts)
function testFindNumberCounts(duplicates, expectedResult) {
    let result = findNumberCounts(duplicates)
    console.assert(result === expectedResult, {
        "function": `findNumberCounts(${JSON.stringify(duplicates)})`,
        "expected": expectedResult,
        "result": result
    })
}
testFindNumberCounts("2 2 2 4 4 9", "2(3) 4(2) 9(1)")
testFindNumberCounts("2 2 2 2 4 9 9", "2(4) 4(1) 9(2)")

// 8. Given a string of expressions (only variables, +, and -) and an object describing a set of variable/value pairs like {a: 1, b: 7, c: 3, d: 14}, return the result of the expression ("a + b + c - d" would be -3).
function evaluateExpression(expression, keyValuePair) {
    let sign = "+";
    let value = 0;
    let singleCharacters = expression.split(" ")
    singleCharacters.forEach(character => {
        if(character === "-" || character === "+"){
            sign = character;
        } else{
            value += Number(sign + keyValuePair[character])
        }
    })
    return value;

    // check out james' solution to this one.
}
// first test for kata8 (give the result)
function testEvaluateExpression(expression, keyValuePair, expectedOutcome) {
    let result = evaluateExpression(expression, keyValuePair);
    console.assert(result === expectedOutcome, {
        "function": `endResult(${expression}, ${keyValuePair})`,
        "expected": expectedOutcome,
        "result": result
    })
}
testEvaluateExpression("a + b + c - d", {a: 1, b: 7, c: 3, d: 14}, -3)
testEvaluateExpression("- a - b + c + d", {a: 3, b: 4, c: 10, d: 5}, 8)