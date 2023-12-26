const btnMinus = document.querySelector('[data-action="minus"]')
const btnPlus = document.querySelector('[data-action="plus"]')
const counter = document.querySelector('[data-counter]')

btnMinus.addEventListener('click', function(){
    if (counter.textContent == '1') return
    counter.textContent--;
})

btnPlus.addEventListener('click', function(){
    counter.textContent++;
})