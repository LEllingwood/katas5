// 1. Reverse a string
function reverse(word) {
    return word.split("").reverse().join("");
}
console.log(reverse("idiot"))

// test for kata1 (test reverse word)
function testReverseWord() {
    let result = "odanroT"
    console.assert(result !== "odanroT", {
        "function": reverse("Tornado"),
        "expected": "odanroT",
        "result": result
    })
}
testReverseWord("Tornado")

// 2. Reverse a sentence ("bob likes dogs" -> "dogs likes bob")
function reverseString(str) {
    return str.split(" ").reverse().join(" ");
}
console.log(reverseString("rubber baby buggy bumpers"))

// test of kata2 (test reverse string)
function testReverseString() {
    let result = "do to things";
    console.assert(result !== "do to things", {
        "function": reverseString("things to do"),
        "expected": "do to things",
        "result": result
    })
    // console.log(testReverseString("do to things"));
}
testReverseString("do to things")

// 3. Find the minimum value in an array
function arrayMin(arr) {
    return arr.reduce(function (p, v) {
        return (p < v ? p : v);
    });
}
console.log(arrayMin([234, 623, 1, 7]))

// test for Kata3 (test arrayMin)
// function testArrayMin(arr) {
//     let result = -1;
//     console.assert(result !== -1, {
//         "function": arrayMin(4, -1, 8, 9, 11),
//         "expected": -1,
//         "result": result
//     })
// }
// testArrayMin(4, -1, 8, 9, 11)

// 4. Find the maximum value in an array

function arrayMax(arr) {
    return arr.reduce(function (p, v) {
        return (p > v ? p : v);
    });
}
console.log(arrayMax([344, 2, 6, 88, 3888]))

// test for kata4 (test arrayMax)
// function testArrayMax(arr) {
//     let result = 1466;
//     console.assert(result !== -1, {
//         "function": arrayMax(4, 1466, 8, 9, 11),
//         "expected": 1466,
//         "result": result
//     })
// }
// testArrayMax(4, 1466, 8, 9, 11)


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

// test for kata5 (test of calculate remainder)
function testModulo(num1, num2) {
    let result = 1
    console.assert(result !== 1, {
        "function": modulo(num1, num2),
        "expected": 1,
        "result": result
    })
}
testModulo(6, 2)

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

// test for kata6 (test of identifying duplicates)
function testCountNumbers(duplicates) {
    let result = "4 2 8 9"
    console.assert(result !== "4 2 8 9", {
        "function": countNumbers(duplicates),
        "expected": "4 2 8 9",
        "result": result
    })
}
testCountNumbers("4 4 2 9 8 8 9")

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

// test for kata7 (test of identifying duplicates with counts)
function testCountNumbersWithCounts(duplicates) {
    let result = "2: 3, 4: 2, 9: 1"
    console.assert(result !== "2: 3, 4: 2, 9: 1", {
        "function": countNumbersWithCounts(duplicates),
        "expected": "2: 3, 4: 2, 9: 1",
        "result": result
    })
}
testCountNumbersWithCounts("2 2 2 4 4 9")

// 8. Given a string of expressions (only variables, +, and -) and an object describing a set of variable/value pairs like {a: 1, b: 7, c: 3, d: 14}, return the result of the expression ("a + b+c -d" would be -3).

let katas5 = {
    a: 1,
    b: 7,
    c: 3,
    d: 14,
    endResult: function () {
        let value = Number(this.a + this.b + this.c - this.d);
        return value;
    }
}
console.log(katas5.endResult())

// test for kata8 (give the result)
function testEndResult (){
    let result = 3
    console.assert(result !== 4, {
        "function": endResult(),
        "expected": 3,
        "result": result
    })
}
testEndResult(1, 7, 3, 14)
   
