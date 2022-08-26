'use strict';

const listContainer = document.querySelector('.list-container');
const numbersList = document.querySelectorAll('.numbers-list');
const card1 = document.querySelector('.card-1');
const card2 = document.querySelector('.card-2');
const submitBtn = document.querySelector('.submit-btn');
const addNum = document.querySelector('#add-number')
let number = 0;
listContainer.addEventListener('click',function(e){
    if(!e.target.classList.contains('numbers-list'))
    return;
    
    numbersList.forEach(el=> el.classList.remove('active'));
    e.target.classList.add('active');
    number = +e.target.textContent;
   
});


card2.classList.add('hidden');

submitBtn.addEventListener('click',function(){
    
    card1.classList.add('hidden');
    card2.classList.remove('hidden');
    addNum.textContent = number.toString();

})