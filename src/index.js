import '../src/CSS/style.css';
import '../src/script.js';
import _ from 'lodash';

function RenderSite() {
  let body = document.querySelector('body');

  console.log(body);
}
// // function component() {
// //   const element = document.createElement('div');

// //   // Lodash, now imported by this script
// //   element.innerHTML = _.join(['Hello', 'welcome to JavaScript with Webpack'], ' ');


// //   return element;
// // }

// document.body.appendChild(component());

RenderSite();