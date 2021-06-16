$(document).ready(() => {
  $('.menu').on('mouseenter', () => {
    $('.nav-menu').show();
  }).on('mouseleave', () => {
    $('.nav-menu').hide();
  });

  $('.btn').on('mouseenter', (e) => {
    $(e.currentTarget).addClass('btn-hover');
  }).on('mouseleave', (e) => {
    $(e.currentTarget).removeClass('btn-hover');
  });

  $('.postText').on('keyup', (event) => {
    $('.postText').focus();
    let post = $(event.currentTarget).val();
    let remaining = 149 - post.length;
    if (remaining <= 0) {
      $('.wordcount').addClass('red');
    } else {
      $('.wordcount').removeClass('red');
    }

    $('.characters').html(remaining);
  })
}); 
