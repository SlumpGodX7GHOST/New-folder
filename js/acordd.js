$(document).ready(function() {
  $(".accordion-header").click(function() {
    $target = $(this).attr('id');
    $id= $target.match(/\d+/);
    $('.custom-images div').addClass('d-none');
    $('#img_'+$id).removeClass('d-none');

  });
});