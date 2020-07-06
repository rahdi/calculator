console.log("działa");

let screen = document.getElementById("screen");
let currentValue = "";
let currentExpression = 0;
let result = 0;
let lastButtonExpression = "";
let lastButtonResult = false;
let lastButtonNumber = false;
let buttonsUsed ="";

// 1
let btn1 = document.getElementById("btn-1");
btn1.onmouseup = function() {
  if (lastButtonNumber === false) {
    currentValue = "";
    if (lastButtonResult === true) {
      currentExpression = 0;
      lastButtonExpression = "";
    }
  }
  screen.textContent = currentValue+"1";
  currentValue += "1";
  lastButtonResult = false;
  lastButtonNumber = true;

  buttonsUsed += "1";
  console.clear();
  console.log("screen.textContent: "+screen.textContent);
  console.log("currentValue: "+currentValue);
  console.log("currentExpression: "+currentExpression);
  console.log("result: "+result);
  console.log("buttonsUsed: "+buttonsUsed);
};

// 2
let btn2 = document.getElementById("btn-2");
btn2.onmouseup = function() {
  if (lastButtonNumber === false) {
    currentValue = "";
    if (lastButtonResult === true) {
      currentExpression = 0;
      lastButtonExpression = "";
    }
  }
  screen.textContent = currentValue+"2";
  currentValue += "2";
  lastButtonResult = false;
  lastButtonNumber = true;

  buttonsUsed += "2";
  console.clear();
  console.log("screen.textContent: "+screen.textContent);
  console.log("currentValue: "+currentValue);
  console.log("currentExpression: "+currentExpression);
  console.log("result: "+result);
  console.log("buttonsUsed: "+buttonsUsed);
};

// 3
let btn3 = document.getElementById("btn-3");
btn3.onmouseup = function() {
  if (lastButtonNumber === false) {
    currentValue = "";
    if (lastButtonResult === true) {
      currentExpression = 0;
      lastButtonExpression = "";
    }
  }
  screen.textContent = currentValue+"3";
  currentValue += "3";
  lastButtonResult = false;
  lastButtonNumber = true;

  buttonsUsed += "3";
  console.clear();
  console.log("screen.textContent: "+screen.textContent);
  console.log("currentValue: "+currentValue);
  console.log("currentExpression: "+currentExpression);
  console.log("result: "+result);
  console.log("buttonsUsed: "+buttonsUsed);
};

// 4
let btn4 = document.getElementById("btn-4");
btn4.onmouseup = function() {
  if (lastButtonNumber === false) {
    currentValue = "";
    if (lastButtonResult === true) {
      currentExpression = 0;
      lastButtonExpression = "";
    }
  }
  screen.textContent = currentValue+"4";
  currentValue += "4";
  lastButtonResult = false;
  lastButtonNumber = true;

  buttonsUsed += "4";
  console.clear();
  console.log("screen.textContent: "+screen.textContent);
  console.log("currentValue: "+currentValue);
  console.log("currentExpression: "+currentExpression);
  console.log("result: "+result);
  console.log("buttonsUsed: "+buttonsUsed);
};

// 5
let btn5 = document.getElementById("btn-5");
btn5.onmouseup = function() {
  if (lastButtonNumber === false) {
    currentValue = "";
    if (lastButtonResult === true) {
      currentExpression = 0;
      lastButtonExpression = "";
    }
  }
  screen.textContent = currentValue+"5";
  currentValue += "5";
  lastButtonResult = false;
  lastButtonNumber = true;

  buttonsUsed += "5";
  console.clear();
  console.log("screen.textContent: "+screen.textContent);
  console.log("currentValue: "+currentValue);
  console.log("currentExpression: "+currentExpression);
  console.log("result: "+result);
  console.log("buttonsUsed: "+buttonsUsed);
};

// 6
let btn6 = document.getElementById("btn-6");
btn6.onmouseup = function() {
  if (lastButtonNumber === false) {
    currentValue = "";
    if (lastButtonResult === true) {
      currentExpression = 0;
      lastButtonExpression = "";
    }
  }
  screen.textContent = currentValue+"6";
  currentValue += "6";
  lastButtonResult = false;
  lastButtonNumber = true;

  buttonsUsed += "6";
  console.clear();
  console.log("screen.textContent: "+screen.textContent);
  console.log("currentValue: "+currentValue);
  console.log("currentExpression: "+currentExpression);
  console.log("result: "+result);
  console.log("buttonsUsed: "+buttonsUsed);
};

// 7
let btn7 = document.getElementById("btn-7");
btn7.onmouseup = function() {
  if (lastButtonNumber === false) {
    currentValue = "";
    if (lastButtonResult === true) {
      currentExpression = 0;
      lastButtonExpression = "";
    }
  }
  screen.textContent = currentValue+"7";
  currentValue += "7";
  lastButtonResult = false;
  lastButtonNumber = true;

  buttonsUsed += "7";
  console.clear();
  console.log("screen.textContent: "+screen.textContent);
  console.log("currentValue: "+currentValue);
  console.log("currentExpression: "+currentExpression);
  console.log("result: "+result);
  console.log("buttonsUsed: "+buttonsUsed);
};

// 8
let btn8 = document.getElementById("btn-8");
btn8.onmouseup = function() {
  if (lastButtonNumber === false) {
    currentValue = "";
    if (lastButtonResult === true) {
      currentExpression = 0;
      lastButtonExpression = "";
    }
  }
  screen.textContent = currentValue+"8";
  currentValue += "8";
  lastButtonResult = false;
  lastButtonNumber = true;

  buttonsUsed += "8";
  console.clear();
  console.log("screen.textContent: "+screen.textContent);
  console.log("currentValue: "+currentValue);
  console.log("currentExpression: "+currentExpression);
  console.log("result: "+result);
  console.log("buttonsUsed: "+buttonsUsed);
};

// 9
let btn9 = document.getElementById("btn-9");
btn9.onmouseup = function() {
  if (lastButtonNumber === false) {
    currentValue = "";
    if (lastButtonResult === true) {
      currentExpression = 0;
      lastButtonExpression = "";
    }
  }
  screen.textContent = currentValue+"9";
  currentValue += "9";
  lastButtonResult = false;
  lastButtonNumber = true;

  buttonsUsed += "9";
  console.clear();
  console.log("screen.textContent: "+screen.textContent);
  console.log("currentValue: "+currentValue);
  console.log("currentExpression: "+currentExpression);
  console.log("result: "+result);
  console.log("buttonsUsed: "+buttonsUsed);
};

// 0
let btn0 = document.getElementById("btn-0");
btn0.onmouseup = function() {
  if (lastButtonNumber === false) {
    currentValue = "";
    if (lastButtonResult === true) {
      currentExpression = 0;
      lastButtonExpression = "";
    }
  }
  screen.textContent = currentValue+"0";
  currentValue += "0";
  lastButtonResult = false;
  lastButtonNumber = true;

  buttonsUsed += "0";
  console.clear();
  console.log("screen.textContent: "+screen.textContent);
  console.log("currentValue: "+currentValue);
  console.log("currentExpression: "+currentExpression);
  console.log("result: "+result);
  console.log("buttonsUsed: "+buttonsUsed);
};

// =
let btnResult = document.getElementById("btn-result");
btnResult.onmouseup = function() {
  switch(lastButtonExpression) {
    case "btnPlus":
      if (lastButtonResult === true) {
        result += currentExpression;
      } 
      else if (lastButtonNumber === true) {
        currentValue = currentExpression;
        currentExpression = Number(screen.textContent);
        result = currentValue + currentExpression;
      } 
      else {
        result = Number(screen.textContent) + currentExpression;
      }
    break;
    case "btnMinus":
      if (lastButtonResult === true) {
        result -= currentExpression;
      } 
      else if (lastButtonNumber === true) {
        currentValue = currentExpression;
        currentExpression = Number(screen.textContent);
        result = currentValue - currentExpression;
      } 
      else {
        result = Number(screen.textContent) - currentExpression;
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
  console.log("currentValue: "+currentValue);
  console.log("currentExpression: "+currentExpression);
  console.log("result: "+result);
  console.log("buttonsUsed: "+buttonsUsed);
}

// +
let btnPlus = document.getElementById("btn-plus");
btnPlus.onmouseup = function() {
  if (lastButtonResult === true || lastButtonNumber === false) {
    currentExpression = Number(screen.textContent);
  } else if (lastButtonExpression === "btnMinus") {
    currentExpression -= Number(currentValue);
  } else {
    currentExpression += Number(currentValue);
  }
  screen.textContent = currentExpression;
  lastButtonExpression = "btnPlus";
  lastButtonResult = false;
  lastButtonNumber = false;

  buttonsUsed += "+";
  console.clear();
  console.log("screen.textContent: "+screen.textContent);
  console.log("currentValue: "+currentValue);
  console.log("currentExpression: "+currentExpression);
  console.log("result: "+result);
  console.log("buttonsUsed: "+buttonsUsed);
}

// -
let btnMinus = document.getElementById("btn-minus");
btnMinus.onmouseup = function() {
  if (lastButtonResult === true || lastButtonNumber === false) {
    currentExpression = Number(screen.textContent);
  } else if (currentExpression === 0 && lastButtonNumber === true) {
    currentExpression = Number(currentValue);
  } else if (lastButtonExpression === "btnPlus") {
    currentExpression += Number(currentValue);
  } else {
    currentExpression -= Number(currentValue);
  }
  screen.textContent = currentExpression;
  lastButtonExpression = "btnMinus";
  lastButtonResult = false;
  lastButtonNumber = false;

  buttonsUsed += "-";
  console.clear();
  console.log("screen.textContent: "+screen.textContent);
  console.log("currentValue: "+currentValue);
  console.log("currentExpression: "+currentExpression);
  console.log("result: "+result);
  console.log("buttonsUsed: "+buttonsUsed);
}

//console.log(screen.childNodes[0]);