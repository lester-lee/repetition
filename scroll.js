var id = 1;

function addNewPost(url) {
  $('.PostList').append(
    '<article class="Post"> <img id="image' + (id++) +
    '" class="PostImage" src="' + url + '"></article>'
  );
}

function addCatPost() {
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

function infiniteScroll(postFn) {
    let threshold = 0.95;
    let maxScroll = document.body.clientHeight - window.innerHeight;
    let curScroll = $(window).scrollTop() * 1.0;
    console.log(curScroll, maxScroll);
    if (curScroll / maxScroll > threshold) {
      postFn();
    }
}

$(function () {
  var j = 0;
  for (j; j < 5; j++) {
    addCatPost();
  }

  $(window).on('scroll', function(){
    infiniteScroll(addCatPost);
  });
});
