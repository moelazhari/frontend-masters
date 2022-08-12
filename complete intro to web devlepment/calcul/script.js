let   ret = 0;
let   buff = "0";
let   operator = null;
let   pval = 0;
const buttons = document.querySelectorAll(".calc-button");
const disbly = document.querySelector(".disbly");

for(let i = 0; i < buttons.length; i++)
    buttons[i].addEventListener("click", function(event){
        buttonClick(event.target.innerText);
});

function rander(){
    disbly.innerText = buff;
}

function buttonClick(value){
    if (isNaN(parseInt(value)))
        handleSymbol(value);
    else
        handleNumber(value);
}

function handleNumber(value){
    if (buff === "0")
        buff = value;
    else
        buff += value; 
    rander();
}

function handleSymbol(value){
    switch (value){
        case 'C':
            buff = "0";
            ret = 0;
            operator = null;
            break;
        case '←':
            if (buff.length === 1)
                buff = "0";
            else
                buff = buff.substring(0, buff.length - 1);
            break;
        case '=':
            if (!operator)
                return;
            calcul(parseInt(buff));
            buff = "" + ret;
            ret = 0;
            operator = null;
            break;
         case '+':
            if (operator)
            {
                calcul(parseInt(buff));
                pval = ret;
                ret = 0;
            }
            pval = parseInt(buff);
            buff = "0";
            operator = '+';
            break;
        case '-':
            if (operator)
            {
                calcul(parseInt(buff));
                pval = ret;
                ret = 0;
            }
            else
                pval = parseInt(buff);
            buff = "0";
            operator = '-';
            break;
        case '×':
            if (operator)
            {
                calcul(parseInt(buff));
                pval = ret;
                ret = 0;
            }
            pval = parseInt(buff);
            buff = "0";
            operator = '×';
            break;
        case '÷':
            if (operator)
            {
                calcul(parseInt(buff));
                pval = ret;
                ret = 0;
            }
            pval = parseInt(buff);
            buff = "0";
            operator = '÷';
            break;
        }
    rander();
}

function calcul(value){
    if (operator === '+')
        ret = pval + value;
    if (operator === '-')
        ret = pval - value;
    if (operator === '×')
        ret = pval * value;
    if (operator === '÷')
        ret = pval / value;
}


