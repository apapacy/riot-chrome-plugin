import riot from 'riot'


window.addEventListener('load', (event) => {
    const asins = document.querySelectorAll('[data-asin]:not([data-asin=""])');
    for (let i = 0; i < asins.length; i++) {
        const asin = asins[i];
        asin.insertBefore(document.createElement('div').appendChild(document.createTextNode('*** test ***')), asin.firstChild)
    }

}, false);