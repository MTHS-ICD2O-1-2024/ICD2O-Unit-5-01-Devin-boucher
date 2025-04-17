// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Devin Boucher
// Created on: April 2025
// This file contains the JS functions for index.html

"use strict"
const randomNumber = Math.floor(Math.random() * 6) + 1

/**
  * Checks random number
  */
// eslint-disable-next-line no-unused-vars
function checkNumber () {
  // Get input values
  const userNumber = parseFloat(document.getElementById("user-Number").value)

  // process
  if (userNumber === randomNumber){
    // output
    document.getElementById('result').innerHTML =
      '<p>You have guessed the correct number</p>'
  }

  if (userNumber !== randomNumber) {
    // output
    document.getElementById('result').innerHTML =
      '<p>You have guessed the wrong number' +
      '<br/>The correct number was: ' + randomNumber + '</p>'
  }
}
