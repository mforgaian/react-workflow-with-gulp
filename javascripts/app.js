'use strict'

// Import babel/polyfill.
// https://babeljs.io/docs/en/babel-polyfill/#usage-in-node--browserify--webpack
// Installation
// npm install --save @babel/polyfill
// Because this is a polyfill (which will run before your source code), we need it to be a dependency, not a devDependency
import "@babel/polyfill";


// Import node modules.
import React from 'react';
import ReactDOM from 'react-dom';
import DocReady from 'es6-docready'
import $ from 'jquery'
import 'jquery-ui-bundle'
import Foundation from 'foundation-sites'

// Import local modules.
import { getZFcurrentMediaQuery } from './utils'
import Sample from './modules/sample/index'
import TodoApp from './modules/todoapp/index'
// Import local Components here

// Must wait until DOM is ready before initiating the modules.
DocReady(async () => {
  console.log("DOM is ready. Let's party")
  
  //todo app will be rendered here
  ReactDOM.render(
    <TodoApp />,
    document.querySelector('.root')
  );

  // Initiate foundation.
  // Must do it after Vue has rendered the view.
  $(document).foundation() 
})
