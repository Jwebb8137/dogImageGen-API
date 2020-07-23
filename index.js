'use strict';

const getDogImages = (numOfImages) => {
  //take number input and loop 
  for (let i = 0; i < numOfImages; i++) {
    if (i < numOfImages) {
      console.log(i);
      //call dog API
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
  //add images
  $('.pictureDisplay').append(
    `<img src="${responseJson.message}" class="results-img" width="auto" height="225" style="margin: 10px; border-radius: 10px;">`
  );
  //display the results section
  $('h2, p').removeClass('hidden');
}

const watchForm = () => {
  //on submit clear any current pictures and pass number value to
  //getDogImages function
  $('form').submit(event => {
    event.preventDefault();
    $('.pictureDisplay').html("");
    let numOfImages = $('#picQuantity').val();
    getDogImages(numOfImages);
  });
}

$(function() {
  //on ready run watchForm function
  console.log('App loaded! Waiting for submit!');
  watchForm();
});