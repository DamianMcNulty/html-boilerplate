/*
    Import stuff which should be placed at
    the end of the <body> section
 */
import './polyfills';

// –– jquery
// (optional)
// import $ from 'jquery';

// –– scss
// imports all our scss with webpack
import './../scss/global.scss';

// –– vanilla-lazyload
// see: https://github.com/verlok/lazyload
import LazyLoad from 'lazyload';

// –– scrollmagic
// (optional)
// needed plugins for scrollmagic
// NOTE: we has to use the import-loader?define=>false as we
// get an error otherwise using webpack to import. it
// see: https://www.reddit.com/r/Frontend/comments/4dshb8/new_to_webpack_problem_using_scrollmagic_gsap/
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
// we only load this plugin on development
if (process.env.NODE_ENV === 'development') {
	require('imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators');
}

// –– vue.js
// (optional)
// inis our vue app
import iniVueApp from './iniVueApp';

// –– inis our website
// run all your global ini code for your website here ...
window.onload = () => {
	iniVueApp({ element: '.vue-app' });

	// ini lazyloading
	// see: https://github.com/verlok/lazyload
	new LazyLoad();

	console.log('%cPage ready', 'background: #8be09f; color: #39485e');
};
