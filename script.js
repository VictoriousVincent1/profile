const sideMenu = document.querySelector("#sideMenu");
const navBar = document.querySelector("nav");
// Clean app script: menu, scroll, theme toggle, and animated modal
const sideMenu = document.querySelector('#sideMenu');
const navBar = document.querySelector('nav');
// app script: menu, scroll, theme toggle, and animated project modal
const sideMenu = document.getElementById('sideMenu');
const navBar = document.querySelector('nav');
const navLinks = document.querySelector('nav ul');

function openMenu(){ if(sideMenu) sideMenu.style.transform = 'translateX(-16rem)'; }
function closeMenu(){ if(sideMenu) sideMenu.style.transform = 'translateX(16rem)'; }

window.addEventListener('scroll', ()=>{
    if(window.scrollY > 50){
        navBar.classList.add('bg-white','bg-opacity-50','backdrop-blur-lg','shadow-sm');
        navLinks.classList.remove('bg-white','shadow-sm','bg-opacity-50');
    } else {
        navBar.classList.remove('bg-white','bg-opacity-50','backdrop-blur-lg','shadow-sm');
        navLinks.classList.add('bg-white','shadow-sm','bg-opacity-50');
    }
});

// Theme init & toggle
try{
    const saved = localStorage.getItem('theme');
    if(saved === 'dark' || (!saved && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)){
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
}catch(e){/* ignore */}

function toggleTheme(){
    const isDark = document.documentElement.classList.toggle('dark');
    try{ localStorage.setItem('theme', isDark ? 'dark' : 'light'); }catch(e){}
}

// Project details
const PROJECT_DATA = {
    'web-design': {
        title: 'Web Design',
        html: `<p>I designed and built responsive websites for small businesses focusing on accessibility, SEO, and performance.</p>
                     <ul class="list-disc pl-5 mt-3">
                         <li>Responsive layouts (mobile-first)</li>
                         <li>Accessibility improvements (WCAG basics)</li>
                         <li>Performance optimizations and image handling</li>
                     </ul>`
    },
    'mobile-app': {
        title: 'Mobile App',
        html: `<p>Frontend lead for a matchmaking mobile app with real-time updates and OAuth authentication.</p>
                     <p class="mt-3">Tech: React Native, Firebase, Socket.IO</p>`
    },
    'ui-ux': {
        title: 'UI/UX',
        html: `<p>Designed user flows and high-fidelity prototypes in Figma; collaborated closely with product teams.</p>`
    }
};

// Modal: animation + accessibility
(function(){
    const modal = document.getElementById('projectModal');
    const backdrop = document.getElementById('modalBackdrop');
    const box = document.getElementById('modalContentBox');
    const closeBtn = document.getElementById('modalClose');
    const titleEl = document.getElementById('modalTitle');
    const bodyEl = document.getElementById('modalBody');
    const linksEl = document.getElementById('modalLinks');
    const readmoreLinks = document.querySelectorAll('.project-readmore');
    let previousFocus = null;

    function openModal(id){
        const data = PROJECT_DATA[id]; if(!data) return;
        // app script: menu, scroll, theme toggle, and animated project modal
        const sideMenu = document.getElementById('sideMenu');
        const navBar = document.querySelector('nav');
        const navLinks = document.querySelector('nav ul');

        function openMenu(){ if(sideMenu) sideMenu.style.transform = 'translateX(-16rem)'; }
        function closeMenu(){ if(sideMenu) sideMenu.style.transform = 'translateX(16rem)'; }

        window.addEventListener('scroll', ()=>{
            if(window.scrollY > 50){
                navBar.classList.add('bg-white','bg-opacity-50','backdrop-blur-lg','shadow-sm');
                navLinks.classList.remove('bg-white','shadow-sm','bg-opacity-50');
            } else {
                navBar.classList.remove('bg-white','bg-opacity-50','backdrop-blur-lg','shadow-sm');
                navLinks.classList.add('bg-white','shadow-sm','bg-opacity-50');
            }
        });

        // Theme init & toggle
        try{
            const saved = localStorage.getItem('theme');
            if(saved === 'dark' || (!saved && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)){
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        }catch(e){/* ignore */}

        function toggleTheme(){
            const isDark = document.documentElement.classList.toggle('dark');
            try{ localStorage.setItem('theme', isDark ? 'dark' : 'light'); }catch(e){}
        }

        // Project details
        const PROJECT_DATA = {
            'web-design': {
                title: 'Web Design',
                html: `<p>I designed and built responsive websites for small businesses focusing on accessibility, SEO, and performance.</p>
                             <ul class="list-disc pl-5 mt-3">
                                 <li>Responsive layouts (mobile-first)</li>
                                 <li>Accessibility improvements (WCAG basics)</li>
                                 <li>Performance optimizations and image handling</li>
                             </ul>`
            },
            'mobile-app': {
                title: 'Mobile App',
                html: `<p>Frontend lead for a matchmaking mobile app with real-time updates and OAuth authentication.</p>
                             <p class="mt-3">Tech: React Native, Firebase, Socket.IO</p>`
            },
            'ui-ux': {
                title: 'UI/UX',
                html: `<p>Designed user flows and high-fidelity prototypes in Figma; collaborated closely with product teams.</p>`
            }
        };

        // Modal: animation + accessibility
        (function(){
            const modal = document.getElementById('projectModal');
            const backdrop = document.getElementById('modalBackdrop');
            const box = document.getElementById('modalContentBox');
            const closeBtn = document.getElementById('modalClose');
            const titleEl = document.getElementById('modalTitle');
            const bodyEl = document.getElementById('modalBody');
            const linksEl = document.getElementById('modalLinks');
            const readmoreLinks = document.querySelectorAll('.project-readmore');
            let previousFocus = null;

            function openModal(id){
                const data = PROJECT_DATA[id]; if(!data) return;
                // Clean app script: menu, scroll, theme toggle, and animated rich project modal
                const sideMenu = document.getElementById('sideMenu');
                const navBar = document.querySelector('nav');
                const navLinks = document.querySelector('nav ul');

                function openMenu(){ if(sideMenu) sideMenu.style.transform = 'translateX(-16rem)'; }
                function closeMenu(){ if(sideMenu) sideMenu.style.transform = 'translateX(16rem)'; }

                window.addEventListener('scroll', ()=>{
                    if(window.scrollY > 50){
                        navBar.classList.add('bg-white','bg-opacity-50','backdrop-blur-lg','shadow-sm');
                        navLinks.classList.remove('bg-white','shadow-sm','bg-opacity-50');
                    } else {
                        navBar.classList.remove('bg-white','bg-opacity-50','backdrop-blur-lg','shadow-sm');
                        navLinks.classList.add('bg-white','shadow-sm','bg-opacity-50');
                    }
                });

                // Theme init & toggle
                try{
                    const saved = localStorage.getItem('theme');
                    if(saved === 'dark' || (!saved && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)){
                        document.documentElement.classList.add('dark');
                    } else {
                        document.documentElement.classList.remove('dark');
                    }
                }catch(e){/* ignore */}

                function toggleTheme(){
                    const isDark = document.documentElement.classList.toggle('dark');
                    try{ localStorage.setItem('theme', isDark ? 'dark' : 'light'); }catch(e){}
                }

                // Rich project data (image, role, period, tech, links)
                const PROJECT_DATA = {
                    'web-design': {
                        title: 'Web Design',
                        role: 'Frontend Developer',
                        period: '2023 — 2024',
                        image: './images/work-1.png',
                        tech: ['HTML', 'CSS', 'JavaScript', 'Tailwind'],
                        html: `<p>I designed and built responsive websites for small businesses focusing on accessibility, SEO, and performance.</p>
                                     <ul class="list-disc pl-5 mt-3">
                                         <li>Responsive layouts (mobile-first)</li>
                                         <li>Accessibility improvements (WCAG basics)</li>
                                         <li>Performance optimizations and image handling</li>
                                     </ul>`,
                        links: [ { label: 'Live Demo', href: '#' }, { label: 'Source', href: '#' } ]
                    },
                    'mobile-app': {
                        title: 'Mobile App',
                        role: 'Frontend Lead',
                        period: '2022 — 2023',
                        image: './images/work-2.png',
                        tech: ['React Native', 'Firebase', 'Socket.IO'],
                        html: `<p>Frontend lead for a matchmaking mobile app with real-time updates and OAuth authentication.</p>
                                     <p class="mt-3">Tech: React Native, Firebase, Socket.IO</p>`,
                        links: [ { label: 'Case Study', href: '#' } ]
                    },
                    'ui-ux': {
                        title: 'UI/UX',
                        role: 'Designer',
                        period: '2021 — 2022',
                        image: './images/work-3.png',
                        tech: ['Figma', 'Prototyping'],
                        html: `<p>Designed user flows and high-fidelity prototypes in Figma; collaborated closely with product teams.</p>`,
                        links: []
                    }
                };

                // Modal rendering + accessibility
                (function(){
                    const modal = document.getElementById('projectModal');
                    const backdrop = document.getElementById('modalBackdrop');
                    const box = document.getElementById('modalContentBox');
                    const closeBtn = document.getElementById('modalClose');
                    const titleEl = document.getElementById('modalTitle');
                    const bodyEl = document.getElementById('modalBody');
                    const linksEl = document.getElementById('modalLinks');
                    const techEl = document.getElementById('modalTech');
                    const imageEl = document.getElementById('modalImage');
                    const roleEl = document.getElementById('modalRole');
                    const periodEl = document.getElementById('modalPeriod');
                    const readmoreLinks = document.querySelectorAll('.project-readmore');
                    let previousFocus = null;

                    function populate(data){
                        titleEl.textContent = data.title || '';
                        roleEl.textContent = data.role || '';
                        periodEl.textContent = data.period || '';
                        if(data.image){ imageEl.style.backgroundImage = `url('${data.image}')`; } else { imageEl.style.backgroundImage = ''; }
                        bodyEl.innerHTML = data.html || '';

                        // tech tags
                        techEl.innerHTML = '';
                        (data.tech || []).forEach(t => {
                            const span = document.createElement('span');
                            span.className = 'text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-gray-700 dark:text-gray-200';
                            span.textContent = t;
                            techEl.appendChild(span);
                        });

                        // links
                        linksEl.innerHTML = '';
                        (data.links || []).forEach(l => {
                            const a = document.createElement('a');
                            a.href = l.href;
                            a.target = '_blank';
                            a.rel = 'noopener noreferrer';
                            a.className = 'px-3 py-2 bg-black text-white rounded hover:opacity-90 text-sm';
                            a.textContent = l.label;
                            linksEl.appendChild(a);
                        });
                    }

                    function openModal(id){
                        const data = PROJECT_DATA[id]; if(!data) return;
                        populate(data);
                        modal.classList.remove('hidden'); modal.classList.add('flex');
                        // animate in
                        requestAnimationFrame(()=>{
                            box.classList.remove('scale-95','opacity-0','translate-y-6');
                            box.classList.add('scale-100','opacity-100','translate-y-0');
                        });
                        previousFocus = document.activeElement; closeBtn && closeBtn.focus();
                    }

                    function closeModal(){
                        box.classList.add('scale-95','opacity-0','translate-y-6');
                        box.classList.remove('scale-100','opacity-100','translate-y-0');
                        setTimeout(()=>{ modal.classList.add('hidden'); modal.classList.remove('flex'); if(previousFocus) previousFocus.focus(); }, 250);
                    }

                    readmoreLinks.forEach(a => a.addEventListener('click', e => {
                        e.preventDefault(); const id = a.dataset.projectId;
                        if(!id){
                            // fallback: allow inline attributes title/body
                            const inlineTitle = a.dataset.projectTitle;
                            const inlineBody = a.dataset.projectBody;
                            populate({ title: inlineTitle, html: inlineBody, tech: [], links: [] });
                            modal.classList.remove('hidden'); modal.classList.add('flex');
                            requestAnimationFrame(()=>{ box.classList.remove('scale-95','opacity-0','translate-y-6'); box.classList.add('scale-100','opacity-100','translate-y-0'); });
                            previousFocus = document.activeElement; closeBtn && closeBtn.focus();
                            return;
                        }
                        openModal(id);
                    }));

                    backdrop && backdrop.addEventListener('click', closeModal);
                    closeBtn && closeBtn.addEventListener('click', closeModal);
                    document.addEventListener('keydown', e => { if(e.key === 'Escape') closeModal(); });

                })();

