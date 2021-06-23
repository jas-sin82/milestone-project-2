function sendMail(contactForm) {
    emailjs.send("gmail", "template_i3671bf", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "message": contactForm.message.value
        })

        .then(
            function () {
                document.getElementById("contact-form").reset();
            })

        .then(
            function (response) {
                console.log("SUCCESS", response);
                emailSuccess();
            },
            function (error) {

                console.log("FAILED", error);
            }
        );
    return false;

}


function emailSuccess() {
    swal({
        title: "Great!",
        text: "Your message has been sent successfully!",
        icon: "success",
        button: "ok!",
    });
}