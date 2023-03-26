$(function () {
  function submitData($form) {
    let data = $(this).serialize();
    return $.ajax({
      type: $form.attr('method'),
      url: $form.attr('action'),
      data: data,
    });
  }
  $("form").submit(function (e) {
    e.preventDefault();
      submitData($(this)).done(function(){
        $("#contact_form").html("<div id='message' style='background-color:#00704A; text-align:center; padding:20px; color:#FFFFFF'></div>");
        $("#message")
          .html("<h2>Contact Form Submitted!</h2>")
          .append("<p>We will be in touch soon.</p>")
          .hide()
          .fadeIn(1500, function () {
            $("#message").append(
              "<img id='checkbox' src='checkbox.png' width='100' heigth='100'/>"
            );
          });
      });
  });
});