/*......................toggle icon navbar................*/

let menuIcon = document.querySelector('#menu-Icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=() =>{
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle()
}

/*......................scroll section active link................*/

let section = document.querySelectorAll('section');
let navlink=docuent.querySelectorAll('header now a');

window.onscroll=()=>{
    section.forEach(secv=>{
        let top= window.scrollY;
        let offset= sec.offsetTop-150;
        let height =sec.offsetHeight;
        let id= sec.getAttributer('id');

        if(top>=offset && top < offset + height){
            navlink.forEach.apply(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href"-' + id + ']').classList.add('active');
            });
        };
    });
    
    /*......................sticky navbar................*/
    let header=document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY>100);

    
    /*......................remove toggle icon and navbar................*/
    menuIcon.classList.remove("fa-xmark");
    navbar.classList.remove('active');

};

/*..............scroll reveal........................*/
ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading',{origin:'top'});
ScrollReveal().reveal('.home-img, .services-container,.portfokio-box,.contact form',{origin:'buttom'});
ScrollReveal().reveal('.home-contact h1, .about-img',{origin:'left'});
ScrollReveal().reveal('.home-contact p, .about-content',{origin:'right'});

/*..............typed js........................*/
const typed = new Typed('.multiple.text',{
    strings:{'Frontend Developer', 'Web Designer','Youtuber'},
    typeSpeed: 70,
    backSpeed:70,
    backDelay:1000,
    loop:true,
});