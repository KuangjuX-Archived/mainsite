function transfer(url) {
    /*window.location.href=url;*/
    document.querySelector('body').style.opacity=0;
    setTimeout(function () {
        window.location.href=url;
    },500);
}

