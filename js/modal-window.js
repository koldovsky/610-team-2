let delay_popup = 10000;

setTimeout(document.querySelector('.modal-window').style.display = "block", delay_popup);

document.querySelector("#yes").addEventListener("click", function () {
    document.querySelector('.modal-window').style.display = "none";
})