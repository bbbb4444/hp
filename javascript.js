function deleteFormElement() {
    var form = document.getElementById("inquiry-form");
    document.getElementById("img-container").style.display = "inherit";
    form.parentNode.removeChild(form);
}