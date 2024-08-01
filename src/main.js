const menuBtn = document.querySelectorAll('.menu-btn');
const closeBtn = document.querySelector('.close-btn')
const sidebar = document.querySelector('.sidebar');
const isSiderbarActive = document.getElementById("sidebar-active");
console.log(isSiderbarActive.checked)

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

        },200)  
    }

    
    
   // !isSiderbarActive.checked ? sidebar.style.display = "block" : sidebar.style.display = "none"
       
}

menuBtn.forEach(btn => btn.addEventListener("click", isChecked));

/*closeBtn.addEventListener('click', () => {
    sidebar.style.animationName = 'sidebar-animation-close';
    sidebar.style.animationDuration = '0.2s'
   
    console.log(sidebar.style.display)
})*/



