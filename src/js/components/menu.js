function menu() {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.mob-menu');

    burger.addEventListener('click', function () {
        this.classList.toggle('active');
        menu.classList.toggle('active');
    });

    document.addEventListener('click', function (e) {
        if (e.target !== menu & e.target !== burger) {
            burger.classList.remove('active');
            menu.classList.remove('active');
        }
    });

}

menu();