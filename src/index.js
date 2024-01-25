// import _ from 'lodash';
import myName from './myName';

function component() {
    const element = document.createElement('div');

    // Lodash is required for this line to work
    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    element.textContent = myName('Max');

    return element;
}

document.body.appendChild(component());