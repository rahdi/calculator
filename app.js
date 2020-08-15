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
let lastButtonCE = false;

//Only to check errors
let buttonsUsed ="";

// 1
let btn1 = document.getElementById("btn-1");
btn1.onmouseup = function() {
  if (lastButtonNumber === false) {
    firstValue = "";
    if (lastButtonResult === true && lastButtonCE === false) {
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

// 2
let btn2 = document.getElementById("btn-2");
btn2.onmouseup = function() {
  if (lastButtonNumber === false) {
    firstValue = "";
    if (lastButtonResult === true && lastButtonCE === false) {
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

// 3
let btn3 = document.getElementById("btn-3");
btn3.onmouseup = function() {
  if (lastButtonNumber === false) {
    firstValue = "";
    if (lastButtonResult === true && lastButtonCE === false) {
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

// 4
let btn4 = document.getElementById("btn-4");
btn4.onmouseup = function() {
  if (lastButtonNumber === false) {
    firstValue = "";
    if (lastButtonResult === true && lastButtonCE === false) {
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

// 5
let btn5 = document.getElementById("btn-5");
btn5.onmouseup = function() {
  if (lastButtonNumber === false) {
    firstValue = "";
    if (lastButtonResult === true && lastButtonCE === false) {
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

// 6
let btn6 = document.getElementById("btn-6");
btn6.onmouseup = function() {
  if (lastButtonNumber === false) {
    firstValue = "";
    if (lastButtonResult === true && lastButtonCE === false) {
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

// 7
let btn7 = document.getElementById("btn-7");
btn7.onmouseup = function() {
  if (lastButtonNumber === false) {
    firstValue = "";
    if (lastButtonResult === true && lastButtonCE === false) {
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

// 8
let btn8 = document.getElementById("btn-8");
btn8.onmouseup = function() {
  if (lastButtonNumber === false) {
    firstValue = "";
    if (lastButtonResult === true && lastButtonCE === false) {
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

// 9
let btn9 = document.getElementById("btn-9");
btn9.onmouseup = function() {
  if (lastButtonNumber === false) {
    firstValue = "";
    if (lastButtonResult === true && lastButtonCE === false) {
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

// 0
let btn0 = document.getElementById("btn-0");
btn0.onmouseup = function() {
  if (lastButtonNumber === false) {
    firstValue = "";
    if (lastButtonResult === true && lastButtonCE === false) {
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

// =
let btnResult = document.getElementById("btn-result");
btnResult.onmouseup = function() {
  switch(currentExpression) {
    case "btnPlus":
      if (lastButtonResult === true) {
        result += usedValue;
      } 
      else if (lastButtonNumber === true && lastButtonCE === false) {
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
      else if (lastButtonNumber === true && lastButtonCE === false) {
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
      else if (lastButtonNumber === true && lastButtonCE === false) {
        firstValue = usedValue;
        usedValue = Number(screen.textContent);
        result = firstValue * usedValue;
      } 
      else {
        result = Number(screen.textContent) * usedValue;
      }
    break;
    default:
      result = Number(screen.textContent);
    break;
  }
  screen.textContent = result;
  lastButtonResult = true;
  lastButtonNumber = false;

  buttonsUsed += "=";
  console.clear();
  console.log("screen.textContent: "+screen.textContent);
  console.log("firstValue: "+firstValue);
  console.log("usedValue: "+usedValue);
  console.log("result: "+result);
  console.log("buttonsUsed: "+buttonsUsed);
}

// +
let btnPlus = document.getElementById("btn-plus");
btnPlus.onmouseup = function() {
  if (lastButtonResult === true || lastButtonNumber === false) {
    usedValue = Number(screen.textContent);
  } else if (currentExpression === "btnMinus") {
    usedValue -= Number(firstValue);
  } else if (currentExpression === "btnX") {
    usedValue *= Number(firstValue);
  } else {
    usedValue += Number(firstValue);
  }
  screen.textContent = usedValue;
  currentExpression = "btnPlus";
  lastButtonResult = false;
  lastButtonNumber = false;
  lastButtonCE = false;

  buttonsUsed += "+";
  console.clear();
  console.log("screen.textContent: "+screen.textContent);
  console.log("firstValue: "+firstValue);
  console.log("usedValue: "+usedValue);
  console.log("result: "+result);
  console.log("buttonsUsed: "+buttonsUsed);
}

// -
let btnMinus = document.getElementById("btn-minus");
btnMinus.onmouseup = function() {
  if (lastButtonResult === true || lastButtonNumber === false) {
    usedValue = Number(screen.textContent);
  } else if (usedValue === 0 && lastButtonNumber === true) {
    usedValue = Number(firstValue);
  } else if (currentExpression === "btnPlus") {
    usedValue += Number(firstValue);
  } else if (currentExpression === "btnX") {
    usedValue *= Number(firstValue);
  } else {
    usedValue -= Number(firstValue);
  }
  screen.textContent = usedValue;
  currentExpression = "btnMinus";
  lastButtonResult = false;
  lastButtonNumber = false;
  lastButtonCE = false;

  buttonsUsed += "-";
  console.clear();
  console.log("screen.textContent: "+screen.textContent);
  console.log("firstValue: "+firstValue);
  console.log("usedValue: "+usedValue);
  console.log("result: "+result);
  console.log("buttonsUsed: "+buttonsUsed);
}

// x
let btnX = document.getElementById("btn-x");
btnX.onmouseup = function() {
  if (lastButtonResult === true || lastButtonNumber === false) {
    usedValue = Number(screen.textContent);
  } else if (usedValue === 0 && lastButtonNumber === true) {
    usedValue = Number(firstValue);
  } else if (currentExpression === "btnMinus") {
    usedValue -= Number(firstValue);
  } else if (currentExpression === "btnPlus") {
    usedValue += Number(firstValue);
  } else {
    usedValue *= (Number(firstValue));
  }
  screen.textContent = usedValue;
  currentExpression = "btnX";
  lastButtonResult = false;
  lastButtonNumber = false;
  lastButtonCE = false;

  buttonsUsed += "x";
  console.clear();
  console.log("screen.textContent: "+screen.textContent);
  console.log("firstValue: "+firstValue);
  console.log("usedValue: "+usedValue);
  console.log("result: "+result);
  console.log("buttonsUsed: "+buttonsUsed);
}

// CE
let btnCE = document.getElementById("btn-ce");
btnCE.onmouseup = function() {
  firstValue = "0";
  screen.textContent = 0;
  result = 0;
  lastButtonCE = true;

  buttonsUsed += "[CE]";
  console.clear();
  console.log("screen.textContent: "+screen.textContent);
  console.log("firstValue: "+firstValue);
  console.log("usedValue: "+usedValue);
  console.log("result: "+result);
  console.log("buttonsUsed: "+buttonsUsed);
}

// C
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