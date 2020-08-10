/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * @providesModule site-constants
 * @flow
 */

// NOTE: We can't just use `location.toString()` because when we are rendering
// the SSR part in node.js we won't have a proper location.
<<<<<<< HEAD
const urlRoot = 'https://hy.reactjs.org';
const version = '16.12.0';
=======
const urlRoot = 'https://reactjs.org';
const version = '16.13.1';
>>>>>>> 80c16779a751ef997373adf95c47dbc9b1592eb6
const babelURL = 'https://unpkg.com/babel-standalone@6.26.0/babel.min.js';

export {babelURL, urlRoot, version};
