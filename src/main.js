const menuBtn = document.querySelectorAll('.menu-btn');
const closeBtn = document.querySelector('.close-btn')
const sidebar = document.querySelector('.sidebar');
const isSiderbarActive = document.getElementById("sidebar-active");
const navbar = document.querySelector('.navbar');
console.log(isSiderbarActive.checked);

function isChecked() {
    if (!isSiderbarActive.checked) {
        sidebar.style.display = "block"
        console.log(isSiderbarActive.checked)
        sidebar.classList.remove('sidebar-close')
        sidebar.classList.add('sidebar-open');
        
    } else {
        
        sidebar.classList.remove('sidebar-open')
        sidebar.classList.add('sidebar-close');
        setTimeout(function () {
             sidebar.style.display = "none"

        },400)  
    }

    
    
   // !isSiderbarActive.checked ? sidebar.style.display = "block" : sidebar.style.display = "none"
       
}

menuBtn.forEach(btn => btn.addEventListener("click", isChecked));

/*closeBtn.addEventListener('click', () => {
    sidebar.style.animationName = 'sidebar-animation-close';
    sidebar.style.animationDuration = '0.2s'
   
    console.log(sidebar.style.display)
})*/

/*const scroll = new LocomotiveScroll({
    el:document.querySelector('[')
})*/

const body = document.body;
let lastscroll = 0

window.addEventListener('scroll', () => {
    let currentscroll = window.scrollY
    console.log("current : ", currentscroll)
     
    console.log("lastscroll : ", lastscroll);
    if (currentscroll !== 0) {
        navbar.classList.remove('navbar-appear')
        navbar.classList.add('navbar-disappear')
    }
    
    if (currentscroll <= 100) {   
        navbar.style.backgroundColor = 'transparent'
        
    }
    
    if (lastscroll > currentscroll) {
        navbar.style.backgroundColor = 'black'
        navbar.classList.remove('navbar-disappear')
        navbar.classList.add('navbar-appear')
}
    lastscroll = currentscroll
})


const date = new Date();
let year = date.getFullYear()

document.querySelector('.copyright').innerHTML = `SPACEX &copy; ${year}`





