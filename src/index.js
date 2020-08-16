import _ from 'lodash';

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'welcome to JavaScript with Webpack'], ' ');


  return element;
}

document.body.appendChild(component());