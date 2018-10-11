var $buttons = $('.Button');

function replaceColors() {
  let $randbtn = $($buttons[Math.floor(Math.random() * 8)]);

  let color1 = chroma.random();
  let color2 = chroma.random();
  while (chroma.contrast(color1, color2) < 4.5) {
    color2 = chroma.random();
  }
  let color3 = chroma.mix(color1, color2);

  $buttons.css({
    'box-shadow': '0 0 1.5em 4px ' + color1,
    'background-color': color1
  });
  $randbtn.css({
    'box-shadow': '0 0 1.5em 4px ' + color2,
    'background-color': color2
  });
  $('body').css('background-color', color3);

}

$(function () {
  replaceColors();
  $buttons.on('click', replaceColors);
});