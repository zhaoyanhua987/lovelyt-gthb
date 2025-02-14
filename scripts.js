// 监听滚动事件
window.addEventListener('scroll', function () {
    const mainContent = document.querySelector('.main-content');
    const scrollContent = document.querySelector('.scroll-content');
    const scrollPosition = window.scrollY;

    // 当滚动到一定位置时显示内容
    if (scrollPosition > window.innerHeight / 2) {
        scrollContent.classList.add('visible');
        mainContent.style.opacity = 0; // 隐藏欢迎内容
    } else {
        scrollContent.classList.remove('visible');
        mainContent.style.opacity = 1; // 显示欢迎内容
    }
});