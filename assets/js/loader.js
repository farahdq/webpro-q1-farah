function onReady(callback) {
    var intervalID = window.setInterval(checkReady, 1000);

    function checkReady() {
        if (document.getElementsByTagName('body')[0] !== undefined) {
            window.clearInterval(intervalID);
            callback.call(this);
        }
    }
}

function show(id, value) {
    document.getElementById(id).style.display = value ? 'block' : 'none';
}

onReady(function () {
    show('loader', false);
    document.getElementById('page').classList.add("fade-in");
    show('page', true);
    document.getElementById('footer').classList.add("fade-in");
    show('footer', true);
});