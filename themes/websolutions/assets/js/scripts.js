var body = document.querySelector('body')
var menuTrigger = document.querySelector('#toggle-main-menu-mobile');
var menuContainer = document.querySelector('#main-menu-mobile');

menuTrigger.onclick = function () {
    menuContainer.classList.toggle('open');
    menuTrigger.classList.toggle('is-active')
    body.classList.toggle('lock-scroll')
}

function claSubmit() {

    var response = grecaptcha.getResponse();
    if (response.length == 0) {
        //reCaptcha not verified
        alert("Δεν περάσατε τον έλεγχο ασφαλείας. Προσπαθήστε ξανά!");
        evt.preventDefault();
        return false;
    }
    //captcha verified
    //do the rest of your validations here
    document.getElementById('cla-form').submit();
    return true;
}
