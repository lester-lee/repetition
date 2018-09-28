var id = 1;

function addCatPost(){
  var catRequest = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.thecatapi.com/v1/images/search?format=json&order=RANDOM",
    "method": "GET",
    "headers": {
      "Content-Type": "application/json",
      "x-api-key": "eb2a590d-955b-4242-81e4-461bb7e85be0"
    }
  }

  $.ajax(catRequest).done(function (response) {
    addNewPost(response[0].url);
  });
}

function addNewPost(url) {
  $('.PostList').append(
    '<article class="Post"> <img id="image' + (id++) +
    '" class="PostImage" src="' + url + '"></article>'
  );
}


$(function () {
  var j;
  for (j = 0; j < 100; j++){
    addCatPost();
  }

});