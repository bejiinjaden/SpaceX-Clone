const menuBtn = document.querySelectorAll('.menu-btn');
const closeBtn = document.querySelector('.close-btn')
const sidebar = document.querySelector('.sidebar');
const isSiderbarActive = document.getElementById("sidebar-active");
console.log(isSiderbarActive.checked)

function isChecked() {
   /* if (!isSiderbarActive.checked) {
        sidebar.style.display = "block"
        console.log(isSiderbarActive.checked)
    } else {
        sidebar.style.display = "none"
    }*/
    
    !isSiderbarActive.checked ? sidebar.style.display = "block" : sidebar.style.display = "none"
       
}

menuBtn.forEach(btn => btn.addEventListener("click", isChecked));



