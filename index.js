// 1. Reverse a string
function reverse(word) {
    return word.split("").reverse().join("");
}
console.log(reverse("turd"))

// 2. Reverse a sentence ("bob likes dogs" -> "dogs likes bob")
function reverseString(str) {
    return str.split(" ").reverse().join(" ");
}
console.log(reverseString("rubber baby buggy bumpers"))

function testReverseString() {
    let result = "do to things";
    console.assert(result === "do to things", {
        "function": reverseString("things to do"),
        "expected": "do to things",
        "result": result
    })
    console.log(testReverseString("do to things"));
}

// 3. Find the minimum value in an array
function arrayMin(arr) {
    return arr.reduce(function (p, v) {
        return (p < v ? p : v);
    });
}
console.log(arrayMin([234, 623, 1, 7]))

// 4. Find the maximum value in an array

function arrayMax(arr) {
    return arr.reduce(function (p, v) {
        return (p > v ? p : v);
    });
}
console.log(arrayMax([344, 2, 6, 88]))

// // 5. Calculate a remainder (given a numerator and denominator)
function modulo(num1, num2) {
    // if (isNaN(num1) || isNaN(num2)) {
    //     return NaN;
    // }
    if (num1 === 0) {
        return 0;
    }
    if (num2 === 0) {
        return NaN;
    }

    var newNum1 = Math.abs(num1);
    var newNum2 = Math.abs(num2);

    var quotient = newNum1 - Math.floor(newNum1 / newNum2) * newNum2;

    if (num1 < 0) {
        return -(quotient);
    } else {
        return quotient;
    }
}
console.log(modulo(6, 2))

// 6. Return distinct values from a list including duplicates (i.e. "1 3 5 3 7 3 1 1 5" -> "1 3 5 7")
function countNumbers(duplicates) {
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
    return letterCounts;
}
console.log(countNumbers("4 5 3 7 9 3 3 29 4"))

// 7. Return distinct values and their counts (i.e. the list above becomes "1(3) 3(3) 5(2) 7(1)")
function countNumbersWithCounts(duplicates) {
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
    return letterCounts;
}
console.log(countNumbers("8 10 34 34 88 2 4"))

// 8. Given a string of expressions (only variables, +, and -) and an object describing a set of variable/value pairs like {a: 1, b: 7, c: 3, d: 14}, return the result of the expression ("a + b+c -d" would be -3).
// As an example, a unit test for the 8th kata might look like:
// console.assert(evaluateExpression("a + b + c - d", {a: 1, b: 7, c: 3, d: 14}) === -3);

function doMath(){
    
}

