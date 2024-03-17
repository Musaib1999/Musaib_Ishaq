let hamMenu = document.querySelector(".ham-menu");
let hamMenuContent = document.querySelector(".ham-menu-content");

hamMenu.addEventListener('click', () => {
    if (hamMenuContent.style.display === 'block' || hamMenuContent.style.display === '') {
        hamMenuContent.style.display = 'none';
    } else {
        hamMenuContent.style.display = 'block';
    }
});