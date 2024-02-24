var svg = document.querySelector('.svg');
var svgX = document.querySelector('.svgX'); 
var sidebar = document.querySelector('.Sidebar');

svg.addEventListener('click', () => {
    sidebar.style.display = 'flex';
})

svgX.addEventListener('click', () => {
    sidebar.style.display = 'none';
});
