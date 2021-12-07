import * as riot  from 'riot'
import TestTag from './test.riot';

console.log(TestTag);
riot.register('test-tag', TestTag)

window.addEventListener('load', (event) => {
    const asins = document.querySelectorAll('[data-asin]:not([data-asin=""])');
    for (let i = 0; i < asins.length; i++) {
        const asin = asins[i];
        const el = asin.insertBefore(document.createElement('test-tag'), asin.firstChild)
        //el.appendChild(document.createTextNode('*** test ***'))
        el.setAttribute('data-asin', asin.getAttribute('data-asin'));
        //el.setAttribute('is', 'test-tag')
        riot.mount(el)
    }

}, false);