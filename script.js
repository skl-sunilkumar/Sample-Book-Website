document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.stylish-button');

    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            const color = window.getComputedStyle(button).backgroundColor;
            button.style.boxShadow = `0 0 15px ${color}, 0 0 20px ${color}`;
        });

        button.addEventListener('mouseleave', () => {
            button.style.boxShadow = `0 4px 10px rgba(0, 0, 0, 0.3)`;
        });
    });
});