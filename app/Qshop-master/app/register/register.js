function validateForm() {

    if (document.forms["q-form"]["username"].value == null || document.forms["q-form"]["username"].value == "") {
        alert("Name must be filled out");
        document.forms["q-form"]["username"].focus();
        return false;
    }
    
    if (document.forms["q-form"]["email"].value == null || document.forms["q-form"]["email"].value == "") {
        alert("Email must be filled out");
        document.forms["q-form"]["email"].focus();
        return false;
    }
    if (document.forms["q-form"]["password"].value == null || document.forms["q-form"]["password"].value == "") {
        alert("Pass must be filled out");
        document.forms["q-form"]["password"].focus();
        return false;
    }
    if (document.forms["q-form"]["comfirm-password"].value !== document.forms["q-form"]["password"].value) {
        alert("Pass must be the same");
        document.forms["q-form"]["comfirm-password"].focus();
        return false;
    }
    return (true)
}
