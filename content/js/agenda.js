console.log(9)

$(document).on('click', '.show-description', function (e) {
  $(this)
    .removeClass('show-description')
    .addClass('hide-description')
    .siblings('.full-description')
    .slideDown()

  return false
})

$(document).on('click', '.hide-description', function (e) {
  $(this)
    .removeClass('hide-description')
    .addClass('show-description')
    .siblings('.full-description')
    .slideUp()

  return false
})
