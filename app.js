var initialPrice = document.querySelector('#initial-price');
var stockQuantity = document.querySelector('#stocks-quantity');
var currentPrice = document.querySelector('#current-price');

var submitBtn = document.querySelector('#submit-btn');
var  outputBox = document.querySelector('#output-box');


function calculateProfiteAndLoss(initial,quantity,current){
    if(initial > current){
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss/initial) * 100;
        showOutput(`Hey the loss is  ${loss} and the percent  ${lossPercentage}%`);
    }else if(current > initial){
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit / initial ) * 100;
        showOutput(`Hey the profite is  ${profit} and the percent  ${profitPercentage}%`);
    }else{
        showOutput("NO Pain No Gain");
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


function showOutput(msg){
    outputBox.style.color = 'green';
    outputBox.innerText = msg;
}
























