import { select, classNames, templates } from '../settings.js';
import { utils } from '../utils.js';
import { AmountWidget } from './AmountWidget.js';

export class Product {
  constructor(id, data) {
    const thisProduct = this;
    thisProduct.id = id;
    thisProduct.data = data;
    thisProduct.renderInMenu();
    thisProduct.getElements();
    thisProduct.initAccordion();
    thisProduct.initOrderForm();
    thisProduct.initAmountWidget();
    thisProduct.processOrder();
    // console.log('new Product:', thisProduct);
  }
  renderInMenu() {
    const thisProduct = this;

    /* generate HTML based on template */
    const generatedHTML = templates.menuProduct(thisProduct.data);
    /* create element using utils.createElementFromHTML */
    thisProduct.element = utils.createDOMFromHTML(generatedHTML);
    /* find menu container */
    const menuContainer = document.querySelector(select.containerOf.menu);
    /* add element to menu */
    menuContainer.appendChild(thisProduct.element);
  }
  getElements() {
    const thisProduct = this;

    thisProduct.accordionTrigger = thisProduct.element.querySelector(select.menuProduct.clickable);
    thisProduct.form = thisProduct.element.querySelector(select.menuProduct.form);
    thisProduct.formInputs = thisProduct.form.querySelectorAll(select.all.formInputs);
    thisProduct.cartButton = thisProduct.element.querySelector(select.menuProduct.cartButton);
    thisProduct.priceElem = thisProduct.element.querySelector(select.menuProduct.priceElem);
    thisProduct.imageWrapper = thisProduct.element.querySelector(select.menuProduct.imageWrapper);
    thisProduct.amountWidgetElem = thisProduct.element.querySelector(select.menuProduct.amountWidget);
  }
  initAccordion() {
    const thisProduct = this;

    /* find the clickable trigger (the element that should react to clicking) */
    // const clickableTrigger = thisProduct.element.querySelector(select.menuProduct.clickable);
    // console.log(clickableTrigger);
    /* START: click event listener to trigger */
    thisProduct.accordionTrigger.addEventListener('click', function (event) {
      event.preventDefault();
      /* prevent default action for event */
      /* toggle active class on element of thisProduct */
      thisProduct.element.classList.toggle('active');
      /* find all active products */
      const allActiveProducts = document.querySelectorAll('active');
      /* START LOOP: for each active product */
      for (let activeProduct of allActiveProducts) {
        /* START: if the active product isn't the element of thisProduct */
        if (activeProduct != thisProduct.element) {
          /* remove class active for the active product */
          activeProduct.classList.remove('active');
          /* END: if the active product isn't the element of thisProduct */
        }
        /* END LOOP: for each active product */
      }
      /* END: click event listener to trigger */
    });
  }
  initOrderForm() {
    const thisProduct = this;
    // console.log(thisProduct);
    thisProduct.form.addEventListener('submit', function (event) {
      event.preventDefault();
      thisProduct.processOrder();
    });

    for (let input of thisProduct.formInputs) {
      input.addEventListener('change', function () {
        thisProduct.processOrder();
      });
    }

    thisProduct.cartButton.addEventListener('click', function (event) {
      event.preventDefault();
      thisProduct.processOrder();
      thisProduct.addToCart();
    });
  }
  initAmountWidget() {
    const thisProduct = this;

    thisProduct.amountWidget = new AmountWidget(thisProduct.amountWidgetElem);

    thisProduct.amountWidgetElem.addEventListener('updated', function () {
      thisProduct.processOrder();
    });
  }
  processOrder() {
    const thisProduct = this;
    // console.log(thisProduct);
    /* read all data from the form (using utils.serializeFormToObject) and save it to const formData */
    const formData = utils.serializeFormToObject(thisProduct.form);
    // console.log('formData', formData);
    /* set variable price to equal thisProduct.data.price */
    thisProduct.params = {};
    let price = thisProduct.data.price;
    /* START LOOP: for each paramId in thisProduct.data.params */
    for (let paramId in thisProduct.data.params) {
      /* save the element in thisProduct.data.params with key paramId as const param */
      const param = thisProduct.data.params[paramId];
      // console.log(param);
      /* START LOOP: for each optionId in param.options */
      for (let optionId in param.options) {
        /* save the element in param.options with key optionId as const option */
        const option = param.options[optionId];
        // console.log(option);
        /* START IF: if option is selected and option is not default */
        const optionSelected = formData.hasOwnProperty(paramId) && formData[paramId].indexOf(optionId) > -1;
        // console.log(optionSelected);
        if (optionSelected && !option.default) {
          /* add price of option to variable price */
          price = price + option.price;
          /* END IF: if option is selected and option is not default */
          /* START ELSE IF: if option is not selected and option is default */
        } else if (!optionSelected && option.default) {
          /* deduct price of option from price */
          price = price - option.price;
        }
        /* END ELSE IF: if option is not selected and option is default */
        const activeImages = thisProduct.imageWrapper.querySelectorAll('.' + paramId + '-' + optionId);
        if (optionSelected) {

          if (!thisProduct.params[paramId]) {
            thisProduct.params[paramId] = {
              label: param.label,
              options: {},
            };
          }
          thisProduct.params[paramId].options[optionId] = option.label;

          for (let activeImage of activeImages) {
            activeImage.classList.add(classNames.menuProduct.imageVisible);
          }
        } else {
          for (let activeImage of activeImages) {
            activeImage.classList.remove(classNames.menuProduct.imageVisible);
          }

        }
      }
      /* END LOOP: for each optionId in param.options */
    }
    /* END LOOP: for each paramId in thisProduct.data.params */

    /* multiply price by amount */
    thisProduct.priceSingle = price;
    thisProduct.price = thisProduct.priceSingle * thisProduct.amountWidget.value;

    /* set the contents of thisProduct.priceElem to be the value of variable price */
    thisProduct.priceElem.innerHTML = thisProduct.price;

    // console.log(thisProduct.params);

  }
  addToCart() {
    const thisProduct = this;
    thisProduct.name = thisProduct.data.name;
    console.log(thisProduct.name);
    thisProduct.amount = thisProduct.amountWidget.value;

    const event = new CustomEvent('add-to-cart', {
      bubbles: true,
      detail: {
        product: thisProduct,
      },
    });
    thisProduct.element.dispatchEvent(event);
  }
}
