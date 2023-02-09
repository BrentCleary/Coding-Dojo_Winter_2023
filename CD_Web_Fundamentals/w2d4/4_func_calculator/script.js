

var display = document.querySelector("#display");
var displayNumber;

var equation = [];
var wholeNumber = [];

var opPresent = false;

function press(input)
{
    opPresent = false;
    wholeNumber.push(input);
    console.log("WN is " + wholeNumber);
    displayNumber = wholeNumber.join('');
    display.innerText = displayNumber;
}


function setOP(operator)
{
    if(opPresent == true)
    {
        console.log("eq start = " + equation);
        
        equation.pop(equation[equation.length-1]);
        console.log("eq pop = " + equation);
        
        equation.push(operator);
        console.log("eq update = " + equation);
    }
    else if(opPresent == false){
        equation.push(wholeNumber.join(''));
        equation.push(operator);
        opPresent = true;
        wholeNumber = [];
        console.log(opPresent);
        console.log("WN is " + wholeNumber);
        console.log("Eq is " + equation);
    }

}

function calculate()
{
    if(equation.length == 0)
    {
        return;
    }
    var wholeNumJoin = wholeNumber.join('');
    equation.push(wholeNumJoin);
    var joinEquation = equation.join('');
    console.log("joinEq = " + joinEquation);
    var result = eval(joinEquation);
    console.log(result);
    display.innerText = result;
    opPresent = false;
    wholeNumber = [];
    equation = [];
    equation.push(result);
}


function clr()
{
    equation = [];
    wholeNumber = [];
    displayNumber = 0;
    display.innerText = displayNumber;
    opPresent = false;

    console.log("clr function");
    console.log("opPresent = " + opPresent);
    console.log("WH =" + wholeNumber);
    console.log("eq = " + equation);
    console.log("------");
}