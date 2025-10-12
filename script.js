const sideMenu = document.querySelector("#sideMenu");
const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");

function openMenu(){
    sideMenu.style.transform = "translateX(-16rem)";
}

function closeMenu(){
    sideMenu.style.transform = "translateX(16rem)";
}
window.addEventListener('scroll', ()=>{
    if(scrollY > 50){
        navBar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm');
        navLinks.classList.remove('bg-white', 'shadow-sm','bg-opacity-50');

    }else{
        navBar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm');
        navLinks.classList.add('bg-white', 'shadow-sm','bg-opacity-50');
    }
})

// Light / Dark mode toggle
if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)){
    document.documentElement.classList.add('dark')
}else{
        document.documentElement.classList.remove('dark')
    }

function toggleTheme(){
    document.documentElement.classList.togle('dark');
    if(document.documentElement.classList.contains('dark')){
        localStorage.theme = 'dark';
    }else{
        localStorage.theme = 'light';
    }
}


// Project modal logic
(function(){
    const modal = document.getElementById('projectModal');
    const modalBackdrop = document.getElementById('modalBackdrop');
    const modalClose = document.getElementById('modalClose');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    const readmoreLinks = document.querySelectorAll('.project-readmore');

    function openModal(title, body){
        modalTitle.textContent = title;
        modalBody.textContent = body;
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        // trap focus
        modalClose.focus();
    }

    function closeModal(){
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }

    readmoreLinks.forEach(link=>{
        link.addEventListener('click', (e)=>{
            e.preventDefault();
            const title = link.dataset.projectTitle || 'Project';
            const body = link.dataset.projectBody || '';
            openModal(title, body);
        });
    });

    if(modalBackdrop) modalBackdrop.addEventListener('click', closeModal);
    if(modalClose) modalClose.addEventListener('click', closeModal);
    document.addEventListener('keydown', (e)=>{
        if(e.key === 'Escape') closeModal();
    });
})();

