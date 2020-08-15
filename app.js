//TODO: functionality of CE, the result should stay, when any expression button is pressed after CE.
//TODO: %, sqrt, +-, arrow, memory.

let screen = document.getElementById("screen");

//First value in expression
let firstValue = "";

//Value, that is used as a second part of expression
let usedValue = 0;

//Current result
let result = 0;

//Currently used expression
let currentExpression = "";

//Additional variables
let lastButtonResult = false;
let lastButtonNumber = false;
let resetUsedValue = true;
let lastButtonCE = false;

//Only to check errors
let buttonsUsed ="";

// Button [1]
let btn1 = document.getElementById("btn-1");
btn1.onmouseup = function() {
  if (lastButtonNumber === false) {
    firstValue = "";
    if (lastButtonResult === true && resetUsedValue === true) {
      usedValue = 0;
      currentExpression = "";
    }
  }
  screen.textContent = firstValue+"1";
  firstValue += "1";
  lastButtonResult = false;
  lastButtonNumber = true;

  buttonsUsed += "1";
  console.clear();
  console.log("screen.textContent: "+screen.textContent);
  console.log("firstValue: "+firstValue);
  console.log("usedValue: "+usedValue);
  console.log("result: "+result);
  console.log("buttonsUsed: "+buttonsUsed);
};

// Button [2]
let btn2 = document.getElementById("btn-2");
btn2.onmouseup = function() {
  if (lastButtonNumber === false) {
    firstValue = "";
    if (lastButtonResult === true && resetUsedValue === true) {
      usedValue = 0;
      currentExpression = "";
    }
  }
  screen.textContent = firstValue+"2";
  firstValue += "2";
  lastButtonResult = false;
  lastButtonNumber = true;

  buttonsUsed += "2";
  console.clear();
  console.log("screen.textContent: "+screen.textContent);
  console.log("firstValue: "+firstValue);
  console.log("usedValue: "+usedValue);
  console.log("result: "+result);
  console.log("buttonsUsed: "+buttonsUsed);
};

// Button [3]
let btn3 = document.getElementById("btn-3");
btn3.onmouseup = function() {
  if (lastButtonNumber === false) {
    firstValue = "";
    if (lastButtonResult === true && resetUsedValue === true) {
      usedValue = 0;
      currentExpression = "";
    }
  }
  screen.textContent = firstValue+"3";
  firstValue += "3";
  lastButtonResult = false;
  lastButtonNumber = true;

  buttonsUsed += "3";
  console.clear();
  console.log("screen.textContent: "+screen.textContent);
  console.log("firstValue: "+firstValue);
  console.log("usedValue: "+usedValue);
  console.log("result: "+result);
  console.log("buttonsUsed: "+buttonsUsed);
};

// Button [4]
let btn4 = document.getElementById("btn-4");
btn4.onmouseup = function() {
  if (lastButtonNumber === false) {
    firstValue = "";
    if (lastButtonResult === true && resetUsedValue === true) {
      usedValue = 0;
      currentExpression = "";
    }
  }
  screen.textContent = firstValue+"4";
  firstValue += "4";
  lastButtonResult = false;
  lastButtonNumber = true;

  buttonsUsed += "4";
  console.clear();
  console.log("screen.textContent: "+screen.textContent);
  console.log("firstValue: "+firstValue);
  console.log("usedValue: "+usedValue);
  console.log("result: "+result);
  console.log("buttonsUsed: "+buttonsUsed);
};

// Button [5]
let btn5 = document.getElementById("btn-5");
btn5.onmouseup = function() {
  if (lastButtonNumber === false) {
    firstValue = "";
    if (lastButtonResult === true && resetUsedValue === true) {
      usedValue = 0;
      currentExpression = "";
    }
  }
  screen.textContent = firstValue+"5";
  firstValue += "5";
  lastButtonResult = false;
  lastButtonNumber = true;

  buttonsUsed += "5";
  console.clear();
  console.log("screen.textContent: "+screen.textContent);
  console.log("firstValue: "+firstValue);
  console.log("usedValue: "+usedValue);
  console.log("result: "+result);
  console.log("buttonsUsed: "+buttonsUsed);
};

// Button [6]
let btn6 = document.getElementById("btn-6");
btn6.onmouseup = function() {
  if (lastButtonNumber === false) {
    firstValue = "";
    if (lastButtonResult === true && resetUsedValue === true) {
      usedValue = 0;
      currentExpression = "";
    }
  }
  screen.textContent = firstValue+"6";
  firstValue += "6";
  lastButtonResult = false;
  lastButtonNumber = true;

  buttonsUsed += "6";
  console.clear();
  console.log("screen.textContent: "+screen.textContent);
  console.log("firstValue: "+firstValue);
  console.log("usedValue: "+usedValue);
  console.log("result: "+result);
  console.log("buttonsUsed: "+buttonsUsed);
};

// Button [7]
let btn7 = document.getElementById("btn-7");
btn7.onmouseup = function() {
  if (lastButtonNumber === false) {
    firstValue = "";
    if (lastButtonResult === true && resetUsedValue === true) {
      usedValue = 0;
      currentExpression = "";
    }
  }
  screen.textContent = firstValue+"7";
  firstValue += "7";
  lastButtonResult = false;
  lastButtonNumber = true;

  buttonsUsed += "7";
  console.clear();
  console.log("screen.textContent: "+screen.textContent);
  console.log("firstValue: "+firstValue);
  console.log("usedValue: "+usedValue);
  console.log("result: "+result);
  console.log("buttonsUsed: "+buttonsUsed);
};

// Button [8]
let btn8 = document.getElementById("btn-8");
btn8.onmouseup = function() {
  if (lastButtonNumber === false) {
    firstValue = "";
    if (lastButtonResult === true && resetUsedValue === true) {
      usedValue = 0;
      currentExpression = "";
    }
  }
  screen.textContent = firstValue+"8";
  firstValue += "8";
  lastButtonResult = false;
  lastButtonNumber = true;

  buttonsUsed += "8";
  console.clear();
  console.log("screen.textContent: "+screen.textContent);
  console.log("firstValue: "+firstValue);
  console.log("usedValue: "+usedValue);
  console.log("result: "+result);
  console.log("buttonsUsed: "+buttonsUsed);
};

// Button [9]
let btn9 = document.getElementById("btn-9");
btn9.onmouseup = function() {
  if (lastButtonNumber === false) {
    firstValue = "";
    if (lastButtonResult === true && resetUsedValue === true) {
      usedValue = 0;
      currentExpression = "";
    }
  }
  screen.textContent = firstValue+"9";
  firstValue += "9";
  lastButtonResult = false;
  lastButtonNumber = true;

  buttonsUsed += "9";
  console.clear();
  console.log("screen.textContent: "+screen.textContent);
  console.log("firstValue: "+firstValue);
  console.log("usedValue: "+usedValue);
  console.log("result: "+result);
  console.log("buttonsUsed: "+buttonsUsed);
};

// Button [0]
let btn0 = document.getElementById("btn-0");
btn0.onmouseup = function() {
  if (lastButtonNumber === false) {
    firstValue = "";
    if (lastButtonResult === true && resetUsedValue === true) {
      usedValue = 0;
      currentExpression = "";
    }
  }
  screen.textContent = firstValue+"0";
  firstValue += "0";
  lastButtonResult = false;
  lastButtonNumber = true;

  buttonsUsed += "0";
  console.clear();
  console.log("screen.textContent: "+screen.textContent);
  console.log("firstValue: "+firstValue);
  console.log("usedValue: "+usedValue);
  console.log("result: "+result);
  console.log("buttonsUsed: "+buttonsUsed);
};

// Button [=] Result
let btnResult = document.getElementById("btn-result");
btnResult.onmouseup = function() {
  switch(currentExpression) {
    case "btnPlus":
      if (lastButtonResult === true) {
        result += usedValue;
      } 
      else if (lastButtonNumber === true && (resetUsedValue === true || lastButtonCE === true)) {
        firstValue = usedValue;
        usedValue = Number(screen.textContent);
        result = firstValue + usedValue;
      } 
      else {
        result = Number(screen.textContent) + usedValue;
      }
    break;
    case "btnMinus":
      if (lastButtonResult === true) {
        result -= usedValue;
      } 
      else if (lastButtonNumber === true && (resetUsedValue === true || lastButtonCE === true)) {
        firstValue = usedValue;
        usedValue = Number(screen.textContent);
        result = firstValue - usedValue;
      } 
      else {
        result = Number(screen.textContent) - usedValue;
      }
    break;
    case "btnX":
      if (lastButtonResult === true) {
        result *= usedValue;
      } 
      else if (lastButtonNumber === true && (resetUsedValue === true || lastButtonCE === true)) {
        firstValue = usedValue;
        usedValue = Number(screen.textContent);
        result = firstValue * usedValue;
      } 
      else {
        result = Number(screen.textContent) * usedValue;
      }
    break;
    case "btnDivision":
      if (lastButtonResult === true) {
        result /= usedValue;
      } 
      else if (lastButtonNumber === true && (resetUsedValue === true || lastButtonCE === true)) {
        firstValue = usedValue;
        usedValue = Number(screen.textContent);
        result = firstValue / usedValue;
      } 
      else {
        result = Number(screen.textContent) / usedValue;
      }
    break;
    default:
      result = Number(screen.textContent);
    break;
  }
  screen.textContent = result;
  lastButtonResult = true;
  lastButtonNumber = false;
  resetUsedValue = false;

  buttonsUsed += "=";
  console.clear();
  console.log("screen.textContent: "+screen.textContent);
  console.log("firstValue: "+firstValue);
  console.log("usedValue: "+usedValue);
  console.log("result: "+result);
  console.log("buttonsUsed: "+buttonsUsed);
}

// Button [+] Addition
let btnPlus = document.getElementById("btn-plus");
btnPlus.onmouseup = function() {
  if (lastButtonResult === true || lastButtonNumber === false || lastButtonCE === true) {
    usedValue = Number(screen.textContent);
  } else if (usedValue === 0 && lastButtonNumber === true) {
    usedValue = Number(firstValue);
  } else if (currentExpression === "btnMinus") {
    usedValue -= Number(firstValue);
  } else if (currentExpression === "btnX") {
    usedValue *= Number(firstValue);
  } else if (currentExpression === "btnDivision") {
    usedValue /= Number(firstValue);
  } else {
    usedValue += Number(firstValue);
  }

  screen.textContent = usedValue;
  currentExpression = "btnPlus";
  lastButtonResult = false;
  lastButtonNumber = false;
  resetUsedValue = true;

  buttonsUsed += "+";
  console.clear();
  console.log("screen.textContent: "+screen.textContent);
  console.log("firstValue: "+firstValue);
  console.log("usedValue: "+usedValue);
  console.log("result: "+result);
  console.log("buttonsUsed: "+buttonsUsed);
}

// Button [-] Subtraction
let btnMinus = document.getElementById("btn-minus");
btnMinus.onmouseup = function() {
  if (lastButtonResult === true || lastButtonNumber === false || lastButtonCE === true) {
    usedValue = Number(screen.textContent);
  } else if (usedValue === 0 && lastButtonNumber === true) {
    usedValue = Number(firstValue);
  } else if (currentExpression === "btnPlus") {
    usedValue += Number(firstValue);
  } else if (currentExpression === "btnX") {
    usedValue *= Number(firstValue);
  } else if (currentExpression === "btnDivision") {
    usedValue /= Number(firstValue);
  } else {
    usedValue -= Number(firstValue);
  }

  screen.textContent = usedValue;
  currentExpression = "btnMinus";
  lastButtonResult = false;
  lastButtonNumber = false;
  resetUsedValue = true;

  buttonsUsed += "-";
  console.clear();
  console.log("screen.textContent: "+screen.textContent);
  console.log("firstValue: "+firstValue);
  console.log("usedValue: "+usedValue);
  console.log("result: "+result);
  console.log("buttonsUsed: "+buttonsUsed);
}

// Button [x] Multiplication
let btnX = document.getElementById("btn-x");
btnX.onmouseup = function() {
  if (lastButtonResult === true || lastButtonNumber === false || lastButtonCE === true) {
    usedValue = Number(screen.textContent);
  } else if (usedValue === 0 && lastButtonNumber === true) {
    usedValue = Number(firstValue);
  } else if (currentExpression === "btnMinus") {
    usedValue -= Number(firstValue);
  } else if (currentExpression === "btnPlus") {
    usedValue += Number(firstValue);
  } else if (currentExpression === "btnDivision") {
    usedValue /= Number(firstValue);
  } else {
    usedValue *= (Number(firstValue));
  }

  screen.textContent = usedValue;
  currentExpression = "btnX";
  lastButtonResult = false;
  lastButtonNumber = false;
  resetUsedValue = true;

  buttonsUsed += "x";
  console.clear();
  console.log("screen.textContent: "+screen.textContent);
  console.log("firstValue: "+firstValue);
  console.log("usedValue: "+usedValue);
  console.log("result: "+result);
  console.log("buttonsUsed: "+buttonsUsed);
}

// Button [/] Division
let btnDivision = document.getElementById("btn-division");
btnDivision.onmouseup = function() {
  if (lastButtonResult === true || lastButtonNumber === false || lastButtonCE === true) {
    usedValue = Number(screen.textContent);
  } else if (usedValue === 0 && lastButtonNumber === true) {
    usedValue = Number(firstValue);
  } else if (currentExpression === "btnMinus") {
    usedValue -= Number(firstValue);
  } else if (currentExpression === "btnPlus") {
    usedValue += Number(firstValue);
  } else if (currentExpression === "btnX") {
    usedValue *= Number(firstValue);
  } else {
    usedValue /= (Number(firstValue));
  }

  screen.textContent = usedValue;
  currentExpression = "btnDivision";
  lastButtonResult = false;
  lastButtonNumber = false;
  resetUsedValue = true;

  buttonsUsed += "/";
  console.clear();
  console.log("screen.textContent: "+screen.textContent);
  console.log("firstValue: "+firstValue);
  console.log("usedValue: "+usedValue);
  console.log("result: "+result);
  console.log("buttonsUsed: "+buttonsUsed);
}

// Button [CE] Clear entry
let btnCE = document.getElementById("btn-ce");
btnCE.onmouseup = function() {
  firstValue = "0";
  screen.textContent = 0;
  result = 0;
  resetUsedValue = false;
  lastButtonCE = true;

  buttonsUsed += "[CE]";
  console.clear();
  console.log("screen.textContent: "+screen.textContent);
  console.log("firstValue: "+firstValue);
  console.log("usedValue: "+usedValue);
  console.log("result: "+result);
  console.log("buttonsUsed: "+buttonsUsed);
}

// Button [C] Clear all
let btnC = document.getElementById("btn-c");
btnC.onmouseup = function() {
  firstValue = "0";
  screen.textContent = 0;
  result = 0;
  usedValue = 0;

  buttonsUsed += "[C]";
  console.clear();
  console.log("screen.textContent: "+screen.textContent);
  console.log("firstValue: "+firstValue);
  console.log("usedValue: "+usedValue);
  console.log("result: "+result);
  console.log("buttonsUsed: "+buttonsUsed);
}