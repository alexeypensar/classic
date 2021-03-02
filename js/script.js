// calc

let changingSpans = function() {
    let plusMinusArray = Array.from(document.getElementsByClassName('calculator__fieldset'));

    let calculating = function(fieldset, amountCounter) {
        let minus = fieldset.querySelector('.calculator__minus');
        let plus = fieldset.querySelector('.calculator__plus');
        let amount = fieldset.querySelector('.calculator__number');

        let plusMinus = function() {
            const amountCounterInitial = amountCounter;

            plus.addEventListener('click', function() {
                amountCounter++;
                amount.innerText = amountCounter.toString();
                if(+amount.innerText > amountCounterInitial) {
                    minus.removeAttribute('disabled');
                }
            });

            minus.addEventListener('click', function() {
                amountCounter--;
                amount.innerText = amountCounter.toString();
                if(+amount.innerText === amountCounterInitial) {
                    minus.setAttribute('disabled', 'true');
                }
            });
        };

        plusMinus();
    };

    calculating(plusMinusArray[0], 0);
    calculating(plusMinusArray[1], 4);
    calculating(plusMinusArray[2], 0);
    calculating(plusMinusArray[3], 0);
};

changingSpans();


const calculator = function() {


    let calcResult = document.querySelector('.calculator__result');

    let materials = Array.from(document.getElementsByClassName('calculator__input'));


    let cornerPrice = 200;
    let lightPrice = 250;
    let light2Price = 400;

    let square = +document.getElementById('calculatorSquareCount').textContent;
    let corners = +document.getElementById('calculatorCornersCount').textContent;
    let light = +document.getElementById('calculatorLightsCount').textContent;
    let light2 = +document.getElementById('calculatorLights2Count').textContent;


    let materialPrice = 0;

    materials.find(function(el) {
        if (el.checked === true) {
            return materialPrice = el.value;
        }
    });


    calcResult.innerText = (materialPrice * square) + ((corners - 4) * cornerPrice) + (lightPrice * light) + (light2Price * light2);


};

let calculatorInteractiveInputs = Array.from(document.getElementsByClassName('calculator__input'));
calculatorInteractiveInputs.forEach(function(el) {
    el.addEventListener('change', function() {
        calculator();
    });
});

let calculatorInteractiveSpans = Array.from(document.getElementsByClassName('calculator__number'));

calculatorInteractiveSpans.forEach(function(el) {

    const config = {
        attributes: true,
        childList: true,
        subtree: true
    };

    const callback = function(mutationsList, observer) {
        for(const mutation of mutationsList) {
            calculator();
        }
    };

    const observer = new MutationObserver(callback);

    observer.observe(el, config);
});

