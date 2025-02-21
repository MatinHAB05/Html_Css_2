const button = document.querySelector('.button_class');
const footer = document.querySelector('.mainfooter');
const emailBox = document.querySelector('.emailbox');
const the_form = document.querySelector('.sendemail_box_container');


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            setTimeout(() => {
                button.style.display = 'none';  
                emailBox.setAttribute('readonly', 'true');
                emailBox.style.textAlign = 'center'
                emailBox.setAttribute('placeholder', 'Thanks for Your 97 :)');          
                the_form.style.gap='0rem';
            }, 100);

        } else {
           
        }
    });
}, {
    root: footer, 
    threshold: 0  
});

observer.observe(button);

button.addEventListener('click', function() {
    this.classList.add('active'); 
});





const openMenu = document.querySelector('.openMenu');
const closeMenuOn = document.querySelector('.closeOn');
const sidebar = document.getElementById('sildeBarMenu');


openMenu.addEventListener('click', () => {
        console.log("1")
        closeMenuOn.style.display='block';
        sidebar.style.display='flex';
        openMenu.style.width='0';
        

});

closeMenuOn.addEventListener('click', () => {
    openMenu.style.width='2rem';
    sidebar.style.display='none';
    closeMenuOn.style.display='none';
    
});



function checkViewportWidth() {
    if (window.innerWidth > 576 &&     sidebar.style.displa!='none'    ) {
        sidebar.style.display='none';
        closeMenuOn.style.display='none';
        openMenu.style.width='2rem';

        } 

}

window.addEventListener('resize', checkViewportWidth);

checkViewportWidth();
document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sildeBarMenu");
    const openMenu = document.querySelector(".sildeBar_mainheader");
    const closeMenu = document.querySelector(".closeOn");

    openMenu.addEventListener("click", function (e) {
        e.preventDefault();
        sidebar.classList.remove("hide");
        sidebar.classList.add("show");
        // openMenu.classList.add("hide");

    });

    closeMenu.addEventListener("click", function (e) {
        e.preventDefault();
        sidebar.classList.remove("show");
        sidebar.classList.add("hide");
    });
});
