const cl = console.log;

const sideBarToggle = document.getElementById("sideBarToggle");
const sidebar = document.getElementById("sidebar");
const sideBarHide = document.querySelector("#sideBarHide");

// const showSideBar = () => {
//     sidebar.classList.add('active')
// }

// const hideSideBar = () => {
//     sidebar.classList.remove('active')
// }

const toggleSidebar = () => {
    sidebar.classList.toggle('active')
}


sideBarToggle.addEventListener('click', toggleSidebar);
sideBarHide.addEventListener("click", toggleSidebar)