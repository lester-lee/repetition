var $buttons = $('.Button');
var numClicks = 0;

function replaceColors() {
  //clear text
  $buttons.text('');

  //choose random button
  let $randbtn = $($buttons[Math.floor(Math.random() * 8)]);

  //choose random colors
  let color1 = chroma.random();
  let color2 = chroma.random();
  while (chroma.contrast(color1, color2) < 4.5) {
    color2 = chroma.random();
  }
  let color3 = chroma.mix(color1, color2);

  //apply corresponding css
  $buttons.css({
    'box-shadow': '0 0 1.5em 4px ' + color1,
    'background-color': color1
  });

  $randbtn.css({
    'box-shadow': '0 0 1.5em 4px ' + color2,
    'background-color': color2,
    'color': color1
  });
  $randbtn.addClass('--alt');
  $randbtn.text(numClicks);

  $('body').css('background-color', color3);
}

$(function () {
  let hit44 = false;
  let hit88 = false;
  replaceColors();
  $buttons.on('click', function(){
    numClicks++;
    if (numClicks === 44 && !hit44){
      numClicks = 40;
      hit44 = true;
    }
    if (numClicks === 89 && !hit88){
      numClicks = 0;
      hit88 = true;
    }
    replaceColors();
  });
});