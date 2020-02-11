#!/usr/bin/env node

const colors = require('colors')
const greet = require('../lib/greet')

var arguments = process.argv.splice(2)
var lang = null

if (arguments[0] === '--lang') lang = arguments[1]

if (lang) return console.log(colors.rainbow(greet.greet(lang)))
console.log(colors.rainbow(greet.greetRandom()))