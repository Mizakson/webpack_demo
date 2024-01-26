import _ from 'lodash';
// import myName from './myName';

import './style.css';

function component() {
    const element = document.createElement('div');

    // Lodash is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // element.textContent = myName('Max');

    return element;
}

document.body.appendChild(component());