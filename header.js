// header.js

document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');

    // Example: Change header background color on click
    header.addEventListener('click', function () {
        header.style.backgroundColor = getRandomColor();
    });

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
