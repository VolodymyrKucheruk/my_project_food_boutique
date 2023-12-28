// Запуск сайту та ініціалізація localStorage
import { handleHeaderScroll } from './js/header-scroll.js';
import { localStorageSettings, localStorageCart } from './local-storage.js';
localStorageSettings();
localStorageCart();
handleHeaderScroll();
// Відмалювання карток прокутів products-list;
import { productsGeneretor } from './js/products-list.js';
productsGeneretor();
import './js/popular-products.js';
import './js/modalproductcard.js';
import './js/modalfooter.js';

// /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
// particlesJS.load('particles-js', './assets/particlesjs-config.json', function() {
//     console.log('callback - particles.js config loaded');
//   });