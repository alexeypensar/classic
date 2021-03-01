// calc

//disabled - gray


const calculator = function() {
    let prices = {
        pvhClassic: 430,
        pvhPremium: 450,
        pvhEvolution: 530,
        pvhPongs: 700,
        pvhTeqtum: 750,
        tkanDPremium: 990,
        tkanDClipso: 2900,
        tkanDCerutti: 2990,
        pvhGold: 700,
        corner: 200,
        light: 250,
        light2: 400
    };

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


    let calcResult = document.querySelector('.calculator__result');

    let materials = Array.from(document.getElementsByClassName('calculator__input'));

    materials.addEventListener('change', function(el) {
        let startPrice = 0;
        if (el.value === prices.any)
    });




};

calculator();