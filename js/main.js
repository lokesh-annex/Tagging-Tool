$(document).ready(function () {
    // Add validation login form
    $("#loginForm").validate({
      rules: {
        email: {
          required: true,
          email: true,
        },
        password: {
          required: true,
          minlength: 6, // Adjust the minimum password length as needed
        },
      },
      messages: {
        email: {
          required: "Please enter your email address",
          email: "Please enter a valid email address",
        },
        password: {
          required: "Please enter your password",
          minlength: "Your password must be at least {0} characters long",
        },
      },
      errorElement: "div",
      errorPlacement: function (error, element) {
        error.addClass("invalid-feedback");
        element.closest(".mb-4").append(error);
      },
      highlight: function (element, errorClass, validClass) {
        $(element).addClass("is-invalid").removeClass("is-valid");
      },
      unhighlight: function (element, errorClass, validClass) {
        $(element).removeClass("is-invalid").addClass("is-valid");
      },
    });
    
  });

