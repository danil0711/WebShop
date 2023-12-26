window.addEventListener('click', function(event){

    if(event.target.dataset.action == 'minus' || event.target.dataset.action == 'plus'){

    counter_wrapper = event.target.closest('.counter-wrapper')
    counter = counter_wrapper.querySelector('[data-counter]')
}
    
    
    if(event.target.dataset.action == 'minus'){
        if(event.target.closest('.cart-wrapper') && (counter.innerText) == 1){
            event.target.closest('.cart-item').remove()
            toggleCartStatus()

            calcCartPriceAndDelivery()

        }
        if(counter.innerText == 1){return}
        counter.innerText--;


    }
    
    if(event.target.dataset.action == 'plus'){
        console.log('plus')
        counter.innerText++;

    }

    if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')){
        calcCartPriceAndDelivery()

    }



})