

window.addEventListener("load", function() {
    const form = document.getElementById('inquiry-form');
    form.addEventListener("submit", function(e) {
        changeToLoadingGif();
        e.preventDefault();
        const data = new FormData(form);
        const action = e.target.action;
        fetch(action, {
            method: 'POST',
            body: data,
        })
            .then(() => {
                deleteFormElement();
            })
    });
});

function deleteFormElement() {
    let form = document.getElementById("inquiry-form");
    form.parentNode.removeChild(form);
    document.getElementById("img-container").style.display = "inherit";
}

function changeToLoadingGif() {
    let submit = document.getElementById("inquiry-form__submit");
    let spinner = document.getElementById("spinner");
    let sendText = document.getElementById("submit__text");
    sendText.parentNode.removeChild(sendText);
    submit.style.backgroundImage = "none";
    submit.style.borderRadius = "100%";
    submit.style.height = "5.0em";
    submit.style.width = "5.0em";
    setTimeout(function () {
        spinner.style.display = "inherit";
    }, 20)



}

