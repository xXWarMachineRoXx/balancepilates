$(document).ready(function() {
    // Send a request when the button is clicked
    $(".button").click(function() {
      $.ajax('https://eu43.chat-api.com/instance**********/message?token=**********', {
        data: JSON.stringify({
          phone: $('input[name="recipient"]').val(),
          body: 
          `Name: ${$('input[name="name"]').val()}\n`+
          `Phone: ${$('input[name="phone"]').val()}\n`+
          `Address: ${$('input[name="address"]').val()}\n`+
          `Order: Pizza " Margarita"`
        }),
        contentType: 'application/json',
        type: 'POST'
      });
    });
  });