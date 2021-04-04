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


    calcResult.innerText = (materialPrice * square) + ((corners - 4) * cornerPrice) + (lightPrice * light) + (light2Price * light2) + ' рублей';


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



// // scroll for steps
//
// const testimonials = document.querySelector('.steps');
// const scroller = testimonials.querySelector('.steps__items');
// const nextBtn = testimonials.querySelector('.btn.next');
// const prevBtn = testimonials.querySelector('.btn.prev');
// const itemWidth = testimonials.querySelector('.step').clientWidth;
//
// nextBtn.addEventListener('click', scrollToNextItem);
// prevBtn.addEventListener('click', scrollToPrevItem);
//
// function scrollToNextItem() {
//     if (scroller.scrollLeft < (scroller.scrollWidth - itemWidth)) {
//         // Позиция прокрутки не в начале последнего элемента
//         scroller.scrollBy({ left: itemWidth, top: 0, behavior: 'smooth' });
//     } else {
//         // Достигнут последний элемент
//         // Вернёмся к первому элементу, установив положение прокрутки на 0
//         scroller.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
//     }
// }
//
// function scrollToPrevItem() {
//     if (scroller.scrollLeft != 0) {
//         // Позиция прокрутки не в начале первого элемента
//         scroller.scrollBy({ left: -itemWidth, top: 0, behavior: 'smooth' });
//     } else {
//         // Это первый элемент (отзыв)
//         // Перейдём к последнему элементу, установив положение прокрутки на ширину «.scroller»
//         scroller.scrollTo({ left: scroller.scrollWidth, top: 0, behavior: 'smooth' });
//     }
// }



// types ceilings changing
//
//
// typesFacture
// typesDecor
// typesRoom
// typesColor

// .types__items_active
// .types__button_active

// const typesButtons = Array.from(document.getElementsByClassName('types__button'));



// typesButtons.forEach(function(el) {
//
//       el.addEventListener('click', function() {
//           if(!el.classList.contains('active')) {
//               el.classList.toggle('types__button_active');
//               console.log('добавили');
//
//           }
//
//           else {
//               el.classList.toggle('types__button_active');
//               console.log('убрали');
//           }
//       });
//
//
//
//
//
//     // el.addEventListener('click', function() {
//     //     el.classList.add('types__button_active');
//     //
//     //
//     // });
//
//     // typesButtonsActive[0].classList.add('types__button_active');
//
// });


//
//
const typesButtonFacture = document.getElementById('typesButtonFacture');
const typesButtonDecor = document.getElementById('typesButtonDecor');
const typesButtonRoom = document.getElementById('typesButtonRoom');
const typesButtonColor = document.getElementById('typesButtonColor');

const typesFacture = document.getElementById('typesFacture');
const typesDecor = document.getElementById('typesDecor');
const typesRoom = document.getElementById('typesRoom');
const typesColor = document.getElementById('typesColor');


typesButtonDecor.addEventListener('click', function() {
    typesButtonDecor.classList.add('types__button_active');
    typesButtonFacture.classList.remove('types__button_active');
    typesButtonRoom.classList.remove('types__button_active');
    typesButtonColor.classList.remove('types__button_active');

    typesDecor.classList.add('types__items_active');
    typesFacture.classList.remove('types__items_active');
    typesRoom.classList.remove('types__items_active');
    typesColor.classList.remove('types__items_active');
});


typesButtonFacture.addEventListener('click', function() {
    typesButtonFacture.classList.add('types__button_active');
    typesButtonDecor.classList.remove('types__button_active');
    typesButtonRoom.classList.remove('types__button_active');
    typesButtonColor.classList.remove('types__button_active');

    typesFacture.classList.add('types__items_active');
    typesDecor.classList.remove('types__items_active');
    typesRoom.classList.remove('types__items_active');
    typesColor.classList.remove('types__items_active');
});

typesButtonRoom.addEventListener('click', function() {
    typesButtonRoom.classList.add('types__button_active');
    typesButtonFacture.classList.remove('types__button_active');
    typesButtonDecor.classList.remove('types__button_active');
    typesButtonColor.classList.remove('types__button_active');

    typesRoom.classList.add('types__items_active');
    typesFacture.classList.remove('types__items_active');
    typesDecor.classList.remove('types__items_active');
    typesColor.classList.remove('types__items_active');
});

typesButtonColor.addEventListener('click', function() {
    typesButtonColor.classList.add('types__button_active');
    typesButtonFacture.classList.remove('types__button_active');
    typesButtonRoom.classList.remove('types__button_active');
    typesButtonDecor.classList.remove('types__button_active');

    typesColor.classList.add('types__items_active');
    typesFacture.classList.remove('types__items_active');
    typesRoom.classList.remove('types__items_active');
    typesDecor.classList.remove('types__items_active');
});



// todo разделить скрипты, чтобы на страницах, на которых они не нужны, были только нужные