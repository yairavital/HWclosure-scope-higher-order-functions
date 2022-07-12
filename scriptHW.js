//Ex1 Function Times 3
/*
function ex1(num1, num2) {
  return function (num3, num4) {
    return function (num5, num6) {
      return num1 * num3 * num5 + num2 * num4 * num6;
    };
  };
}

//Ex fix array
const x = [3, 3, 3, 3, 3, 3, 3];
console.log(change(x, 2));
console.log(x);

function change(x, times) {
  let y = [...x];
  for (let i = 0; i < y.length; i++) {
    let j = 1;
    while (j <= times) {
      if (i >= j && i < y.length - j) {
        y[i]--;
      }
      j++;
    }
  }
  return y;
}

//Ex Backspace Attack

function erase(str) {
  const arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] != "#") {
      arr.push(str[i]);
    } else arr.pop();
  }
  return arr.join("");
}
console.log(erase("he##l#hel#llo"));

/*
//Ex 
*/
/*
//Ex Moving Partition
const originArr = [1, 2, 3, 4, 5];
function movePart(arr) {
  const arrMoved = [];

  for (let i = 1; i <= arr.length; i++) {
    let arrow = [];
    arrow[0] = arr.slice(0, i);
    arrow[1] = arr.slice(i);
    arrMoved.push(arrow);
  }
  return arrMoved;
}
console.log(movePart(originArr));
*/
//Ex test

function createTest(a, b) {
  if (Array.isArray(a) && Array.isArray(b)) {
    return assertSimilar(a, b);
  } else if (isNaN(a) && isNaN(b)) {
    return assertEquals(a, b, a + b);
  } else {
    return assertEquals(a, b, Number(a) + Number(b));
  }
}
function assertEquals(a, b, result) {
  return a + " + " + b + " = " + result;
}

function assertSimilar(a, b) {
  let sumA = "";
  let sumB = "";

  for (let i = 0; i < a.length; i++) {
    sumA += a[i];
  }

  for (let i = 0; i < b.length; i++) {
    sumB += b[i];
  }

  return a + " + " + b + " = " + (a + " " + b);
}

console.log(createTest(1, 1));
console.log(createTest("a", "b"));
console.log(createTest(["s", "t", "r"], ["i", "n", "g"]));
//Ex Function Factory
/*function callingMakePlusFunction(baseNumber) {
  return function (antoherNum) {
    return antoherNum + baseNumber;
  };
}
const plusFive = callingMakePlusFunction(5);
console.log(plusFive(2));
let moreNum = prompt("enter num");
moreNum = parseInt(moreNum);
isOk(moreNum);
function isOk(num) {
  if (typeof num == "number") {
    console.log(plusFive(num));
  } else {
    num = prompt("please enter another num");
    num = parseInt(num);
    isOk(num);
  }
}

*/
