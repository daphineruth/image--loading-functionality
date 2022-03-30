'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');


//image loading functionality

const wait = function (seconds) {
    return new Promise(function (resolve) {
      setTimeout(resolve, seconds * 1000);
    });
  };

  const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;
  })
}
  