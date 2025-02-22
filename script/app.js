// With Dear ChatGpt!

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
                emailBox.style.cursor='default';          

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


// openMenu.addEventListener('click', () => {
//         console.log("1")


// });

// closeMenuOn.addEventListener('click', () => {

    
// });



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
    const openMenu = document.querySelector(".sildeBar_mainheader svg");
    const ParentopenMenu = document.querySelector(".sildeBar_mainheader");

    const closeMenu = document.querySelector(".closeOn");

    openMenu.addEventListener("click", function (e) {
        e.preventDefault();
        sidebar.style.opacity='0';
    
        openMenu.classList.remove("hideIcon", "showiconmenu"); // حذف هر دو کلاس
        setTimeout(() => {
            

            
            
            openMenu.classList.add("hideIcon"); // با تأخیر اضافه می‌کنیم
            ParentopenMenu.style.cursor='default';
        }, 10); // تاخیر ۱۰ میلی‌ثانیه‌ای برای ریست شدن انیمیشن
        

        // sidebar.style.opacity='0';

        sidebar.style.display='flex';
        sidebar.classList.remove("show","hide");
        setTimeout(()=>{
            sidebar.classList.add("show");
            closeMenu.style.display='block';

        },10);

        console.log('done1');
    });

    closeMenu.addEventListener("click", function (e) {
        e.preventDefault();
        sidebar.style.opacity='1';

        openMenu.classList.remove("hideIcon", "showiconmenu"); // حذف هر دو کلاس
        setTimeout(() => {
            openMenu.classList.add("showiconmenu"); // با تأخیر اضافه می‌کنیم




        }, 10); // تاخیر ۱۰ میلی‌ثانیه‌ای برای ریست شدن انیمیشن
        ParentopenMenu.style.cursor='pointer';

        
        sidebar.classList.remove("show","hide");
        setTimeout(()=>{
            sidebar.classList.add("hide");
        },10);


        console.log('done2');
    });
    
});
