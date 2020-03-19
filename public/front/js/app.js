import { Product } from './components/Product.js';
import { Cart } from './components/Cart.js';
import { select, settings, classNames } from './settings.js';
import { Booking } from './components/Booking.js';

const app = {
  initMenu: function () {
    const thisApp = this;
    // console.log('thisApp.data:', thisApp.data);

    for (let productData in thisApp.data.products) {
      new Product(thisApp.data.products[productData].id, thisApp.data.products[productData]);
    }
  },

  initData: function () {
    const thisApp = this;

    thisApp.data = {};

    const url = settings.db.url + '/' + settings.db.product;

    fetch(url)
      .then(function (rawResponse) {
        return rawResponse.json();
      })
      .then(function (parsedResponse) {
        console.log('parsedResponse', parsedResponse);
        /* save parsedResponse as thisApp.data.products */
        thisApp.data.products = parsedResponse;
        /* execute initMenu method*/
        thisApp.initMenu();
      });

    console.log('thisApp.data', JSON.stringify(thisApp.data));
  },

  initCart: function () {
    const thisApp = this;

    const cartElem = document.querySelector(select.containerOf.cart);
    thisApp.cart = new Cart(cartElem);

    thisApp.productList = document.querySelector(select.containerOf.menu);

    thisApp.productList.addEventListener('add-to-cart', function (event) {
      app.cart.add(event.detail.product);
    });
  },

  initPages: function () {
    const thisApp = this;
    thisApp.pages = Array.from(document.querySelector(select.containerOf.pages).children);
    console.log(thisApp.pages);
    thisApp.navLinks = Array.from(document.querySelectorAll(select.nav.links));
    thisApp.imageBoxes = Array.from(document.querySelectorAll('.navi a'));

    let pagesMatchingHash = [];

    if (window.location.hash.length > 2) {
      const idFromHash = window.location.hash.replace('#/', '');

      pagesMatchingHash = thisApp.pages.filter(function (page) {
        return page.id == idFromHash;
      });
    }

    thisApp.activatePage(pagesMatchingHash.length ? pagesMatchingHash[0].id : thisApp.pages[0].id);

    for (let link of thisApp.navLinks) {
      link.addEventListener('click', function (event) {
        const clickedElement = this;
        event.preventDefault();

        /* TODO: get page id from href*/
        const pageId = clickedElement.getAttribute('href');
        const href = pageId.replace('#', '');
        /* TODO activate page*/
        thisApp.activatePage(href);
      });
    }

    for (let box of thisApp.imageBoxes) {
      box.addEventListener('click', function (event) {
        const clickedElement = this;
        event.preventDefault();
        const id = clickedElement.getAttribute('href').replace('#', '');
        thisApp.activatePage(id);
      });
    }
  },

  activatePage: function (pageId) {
    const thisApp = this;

    for (let link of thisApp.navLinks) {
      link.classList.toggle(classNames.nav.active, link.getAttribute('href') == '#' + pageId);
    }
    for (let page of thisApp.pages) {
      page.classList.toggle(classNames.nav.active, page.getAttribute('id') == pageId);
    }
    window.location.hash = '#/' + pageId;
    document.body.classList = pageId;
  },

  initBooking: function () {
    const thisApp = this;
    thisApp.bookingContainer = document.querySelector(select.containerOf.booking);

    thisApp.booking = new Booking(thisApp.bookingContainer);
  },

  initCarousel: function () {
    /* global Mustache */

    const appContainer = document.querySelector('#carousel');
    const template = document.querySelector('#template_carousel').innerHTML;
    let id = 0;

    const data = {
      carousel: [
        {
          title: 'AMAZING SERVICE!',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas viverra tortor, eu ullamcorper dui imperdiet nec. Nunc sed dolor at elit lobortis sodales.',
          author: '- Margaret Osborne'
        },
        {
          title: 'Not neapolitan pizza, but still good',
          content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum vero ipsam magni blanditiis laudantium porro, natus aliquid necessitatibus beatae deleniti.',
          author: '- Ozzy Osborne'
        },
        {
          title: 'Very tasty.',
          content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur quia ab, vero nam magnam velit molestias quos amet quidem quaerat rem alias a. Id quam, cupiditate praesentium maxime tempora facere?',
          author: '- Pizza Lover'
        }
      ],
      idx: () => id++
    };

    const outputHTML = Mustache.render(template, data);
    appContainer.innerHTML = outputHTML;

    const items = document.querySelectorAll('.slide');
    const links = document.querySelectorAll('.carousel-dots-item');

    items[0].classList.add('active');
    links[0].classList.add('active');

    console.log(links);

    for (let link of links) {
      link.addEventListener('click', e => {
        const element = e.currentTarget;
        const index = element.getAttribute('data-index');

        for (let item of items) {
          item.classList.remove('active');
        }

        for (let l of links) {
          l.classList.remove('active');
        }

        items[index].classList.add('active');
        element.classList.add('active');
      });
    }
  },

  init: function () {
    const thisApp = this;
    // console.log('*** App starting ***');
    // console.log('thisApp:', thisApp);
    // console.log('classNames:', classNames);
    // console.log('settings:', settings);
    // console.log('templates:', templates);

    thisApp.initData();
    thisApp.initCart();
    thisApp.initPages();
    thisApp.initBooking();
    thisApp.initCarousel();
  },
};

app.init();
