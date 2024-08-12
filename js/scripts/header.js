const heading = document.querySelector('header');

document.addEventListener('scroll', () =>{
    if(scrollY >= 100){
         heading.classList.add('active');
    }
    else{
        heading.classList.remove('active');
    }
})