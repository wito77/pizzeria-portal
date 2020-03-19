import { select, settings } from '../settings.js';
import { BaseWidget } from './BaseWidget.js';

export class AmountWidget extends BaseWidget {
  constructor(wrapper) {
    super(wrapper, settings.amountWidget.defaultValue);
    const thisWidget = this;
    thisWidget.getElements();
    thisWidget.value = settings.amountWidget.defaultValue;
    // thisWidget.setValue(thisWidget.input.value);
    thisWidget.initActions();
    // console.log('AmountWidget:', thisWidget);
    // console.log('constructor arguments:', element);
  }

  getElements() {
    const thisWidget = this;

    thisWidget.dom.input = thisWidget.dom.wrapper.querySelector(select.widgets.amount.input);
    thisWidget.dom.linkDecrease = thisWidget.dom.wrapper.querySelector(select.widgets.amount.linkDecrease);
    thisWidget.dom.linkIncrease = thisWidget.dom.wrapper.querySelector(select.widgets.amount.linkIncrease);
  }
  /* method not nedded because of BaseWidget.js
  setValue(value) {
    const thisWidget = this;

    const newValue = parseInt(value);

    //value validation
    if (newValue != thisWidget.value && newValue >= settings.amountWidget.defaultMin && newValue <= settings.amountWidget.defaultMax) {
      thisWidget.value = newValue;
      thisWidget.announce();
    }

    thisWidget.input.value = thisWidget.value;
    // console.log(thisWidget.value);
  }
  */

  isValid(newValue) {
    console.log(newValue);
    console.log(settings.amountWidget.defaultMin);
    console.log(settings.amountWidget.defaultMax);
    return !isNaN(newValue) && newValue >= settings.amountWidget.defaultMin && newValue <= settings.amountWidget.defaultMax;
  }

  initActions() {
    const thisWidget = this;
    thisWidget.dom.input.addEventListener('change', function () {
      thisWidget.value = thisWidget.dom.input.value;
      // console.log(thisWidget.input.value);
    });
    thisWidget.dom.linkDecrease.addEventListener('click', function () {
      thisWidget.value = parseInt(thisWidget.dom.input.value) - 1;
    });
    thisWidget.dom.linkIncrease.addEventListener('click', function () {
      thisWidget.value = parseInt(thisWidget.dom.input.value) + 1;
    });
  }
  /* method not nedded because of BaseWidget.js
    announce() {
      const thisWidget = this;

      const event = new CustomEvent('updated', {
        bubbles: true
      });
      thisWidget.element.dispatchEvent(event);
    }
    */

  renderValue() {
    const thisWidget = this;

    thisWidget.dom.input.value = thisWidget.value;
  }
}
