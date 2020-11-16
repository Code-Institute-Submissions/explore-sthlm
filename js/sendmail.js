    window.onload = function() {
            document.getElementById('contact-form').addEventListener('submit', function() {
                emailjs.sendForm('contact_service', 'contact_form', this)
                  .then(function() {
                        console.log('SUCCESS!');
                    }, function(error) {
                        console.log('FAILED...', error);
                    });
        });
    }