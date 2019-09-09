import Vue from 'vue'
import MyComponent from '../component/MyComponent.vue'
import $ from 'jquery' // TOFIX: the dependency is not found.

// eslint-disable-next-line
// var $ = require('../../statics/jquery.min.js')
window.jQuery = $
window.$ = $

// WIP HERE but jquery must work before test this part.
require('../statics/jquery.jqplot.min.js')
require('../statics/jqplot.canvasTextRenderer.js')
require('../statics/jqplot.canvasAxisLabelRenderer.js')

// we globally register our component
Vue.component('my-component', MyComponent)
