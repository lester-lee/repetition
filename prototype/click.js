function getRandomPercent() {
  var percent = Math.floor(Math.random() * 90);
  return percent + '%';
}

$(function () {
  var numClicks = 0;
  var thresh = 1;
  var rgb = 256;
  $('.Button').on('click', function () {
    numClicks++;
    if (numClicks % thresh == 0) {
      rgb--;
    }
    var color = 'rgb(' + rgb + ',' + rgb + ',' + rgb + ')';
    $('body').css('background-color', color);

    $(this).css('top', getRandomPercent());
    $(this).css('left', getRandomPercent());
    $(this).text(numClicks);

    if (numClicks == 20) {
      $(this).text("How long you gonna do this?");
    }
    if (numClicks == 35) {
      $(this).text("Sup, you're still here.");
    }
  })
});