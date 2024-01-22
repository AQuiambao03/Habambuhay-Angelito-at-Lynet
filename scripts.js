document.addEventListener("DOMContentLoaded", function () {
    // Add click event listener to trigger the door swing animation
    document.querySelector('.wrapper').addEventListener('click', function () {
        document.getElementById('left-door').style.transform = 'rotateY(-140deg)';
        document.getElementById('right-door').style.transform = 'rotateY(140deg)';
    });
});