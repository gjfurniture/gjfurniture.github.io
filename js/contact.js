//CONTACT FORM INIT
$('#name').on("focus", function() { $('#success').html(''); });
    
//SETUP JQBOOTSTRAPVALIDATION IN CONTACT FORM.
//SUBMIT AND ERROR CHECKING
$("input,textarea").jqBootstrapValidation({ 
  preventSubmit: true, 
  submitError: function($form, event, errors) { 
    // SOMETHING TO DO WHEN SUBMIT PRODUCES AN ERROR...
    // NOT NEEDED, LEFT FOR EXTENSION PURPOSES...
  },
  submitSuccess: function($form, event) {
    event.preventDefault();
        
    var name = $("input#name").val();  
    var email = $("input#email").val(); 
    var message = $("textarea#message").val();
    var firstName = name;
    // CHECK FOR WHITE SPACE IN NAME FOR SUCCESS/FAILURE MESSAGE
    if (firstName.indexOf(' ') >= 0) {
      firstName = name.split(' ').slice(0, -1).join(' ');
    }       
    var $succ = $('#success');        
    $.ajax({
      url: "contact_me.php",
      type: "POST",
      data: {name: name, email: email, message: message},
      cache: false,
      success: function() {  
        $succ.html("<div class='alert alert-success'>");
        $succ.find('.alert-success').html("").append( "</button>").append("Success! Your message has been sent.").append('</div>');
                    
        $('#contactForm').trigger("reset");
      },
      error: function() {   
        $succ.html("<div class='alert alert-danger'>");
        $succ.find('.alert-danger').html("").append( "</button>").append("WHOA! Sorry "+firstName+", it seems my email system is having a moment... Please email me directly to <a href='mailto:me@example.com'>me@example.com</a>.").append('</div>');
        $('#contactForm').trigger("reset");
      }
    });
  },
  filter: function() {
      return $(this).is(":visible");
  }
});