var initialPrice = document.querySelector('#initial-price');
var stockQuantity = document.querySelector('#stocks-quantity');
var currentPrice = document.querySelector('#current-price');

var submitBtn = document.querySelector('#submit-btn');
var  outputBox = document.querySelector('#output-box');

function calculateProfiteAndLoss(initial,quantity,current){
    if(initial > current){
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss/initial) * 100;
        showOutput(`Hey the loss is  ${loss} and the percent  ${lossPercentage}%`,"LOSS");
    }else if(current > initial){
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit / initial ) * 100;
        showOutput(`Hey the profit is  ${profit} and the percent  ${profitPercentage}%`,"PROFIT");
    }else{
        showOutput("NO Pain No Gain","else");
    }
}

submitBtn.addEventListener('click',submitHandler);

function submitHandler(){
    let ip = initialPrice.value;
    let qty = stockQuantity.value;
    let cp = currentPrice.value;
    if(ip === '' || qty === '' || cp === ''){
        alert("Please fill out all Fileds");
    }
    else{
        calculateProfiteAndLoss(ip ,qty ,cp);
    }
}


function showOutput(msg,status){
    switch (status) {
        case "PROFIT":
            outputBox.style.color = 'yellow';
            outputBox.innerText = msg;
            
            break;
        case "LOSS":
            outputBox.style.color = 'red';
            outputBox.innerText = msg;
            break;
        case "else":
            outputBox.style.color = 'white';
            outputBox.innerText = msg;
            break;
        default:
            break;
    }
    
}
























