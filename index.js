'use strict';

const getDogImages = (numOfImages) => {
  for (let i = 0; i < numOfImages; i++) {
    if (i < numOfImages) {
      console.log(i);
      fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(responseJson => 
          displayResults(responseJson))
        .catch(error => alert('Something went wrong. Try again later.'));
    };
  };
};

const displayResults = (responseJson) => {
  console.log(responseJson);
  //replace the existing image with the new one
  $('.results-img').html("");
  $('.pictureDisplay').append(
    `<img src="${responseJson.message}" class="results-img" width="250" height="200" style="margin: 10px; border-radius: 10px;">`
  );
  //display the results section
  $('h2').removeClass('hidden');
}

const watchForm = () => {
  $('form').submit(event => {
    event.preventDefault();
    let numOfImages = $('#picQuantity').val();
    getDogImages(numOfImages);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});