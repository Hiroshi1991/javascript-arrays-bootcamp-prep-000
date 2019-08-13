var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];

var addElementToBeginningOfArray= function(array, element) {
    return [element,...array]
    // array.unshift(element)
    // return array
}

var destructivelyAddElementToBeginningOfArray= function(array, element) {
    array.unshift(element)
    return array
}

var addElementToEndOfArray= function(array, element) {
    return [...array, element]
    array.push(element)
    return array
}

var destructivelyAddElementToEndOfArray= function(array, element) {
    array.push(element)
    return array
}

var accessElementInArray = function(array, index) {
    return array[index]
}

var removeElementFromBeginningOfArray = function(array) {
    return array.slice(1)
}

var removeElementFromEndOfArray = function(array) {
    return array.slice(0, array.length - 1)
}

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  array
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}

function accessElementInArray(array, index) {
  return array[index]
}
