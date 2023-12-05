// footer.js

document.addEventListener('DOMContentLoaded', function () {
    const footer = document.querySelector('footer');

    // Example: Change footer background color on click
    footer.addEventListener('click', function () {
        footer.style.backgroundColor = getRandomColor();
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
