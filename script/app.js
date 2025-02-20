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
