/*const ac = document.getElementById("ac");
const modlus = document.getElementById("modlus");
const del = document.getElementById("del");
const divide = document.getElementById("divide");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const multi = document.getElementById("multi");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const minus = document.getElementById("minus");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const plus = document.getElementById("plus");
const doublezero = document.getElementById("doublezero");
const zero = document.getElementById("zero");
const dot = document.getElementById("dot");
const equal = document.getElementById("equal"); */

const  result_display = document.getElementById("result_display");

function appendtoresult_display(input)
{
    result_display.value += input;
}

function cleareresult_display()
{
    result_display.value = "";
}

function cut_one_element()
{
    
}

function provide_result()
{
    try
    {
        result_display.value = eval(result_display.value);
    }

    catch (error)
    {
        result_display.value = "Error";
    }
}
