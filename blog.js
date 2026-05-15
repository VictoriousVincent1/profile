// Simple blog renderer: render a list of Medium posts (title, description, link)
const POSTS = [
    {
        title: "Designing Accessible Interfaces",
        description: "Key patterns I use to make interfaces accessible and pleasant for everyone.",
        url: "https://medium.com/@VictoriousVincent1/designing-accessible-interfaces-123456"
    },
    {
        title: "Small Performance Wins for Frontend",
        description: "Practical performance improvements you can make today without a rebuild.",
        url: "https://medium.com/@VictoriousVincent1/small-performance-wins-abcdef"
    },
    {
        title: "From Prototype to Production",
        description: "A short workflow for shipping prototypes that survive production.",
        url: "https://medium.com/@VictoriousVincent1/from-prototype-to-production-7890ab"
    }
];

function renderBlogList(containerId = 'blogList'){
    const container = document.getElementById(containerId);
    if(!container) return;
    const list = document.createElement('ul');
    list.className = 'grid gap-4';

    POSTS.forEach(p => {
        const li = document.createElement('li');
        li.className = 'rounded-xl p-6 border border-cyber-cyan/20 bg-surface/60 backdrop-blur-sm';
        li.innerHTML = `
            <h3 class="font-orbitron text-cyber-cyan font-semibold text-lg mb-1">${p.title}</h3>
            <p class="text-slate-400 mb-3">${p.description}</p>
            <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2 border border-cyber-cyan/40 rounded font-orbitron text-sm text-cyber-cyan hover:bg-cyber-cyan/10">Read on Medium →</a>
        `;
        list.appendChild(li);
    });

    container.appendChild(list);
}

// auto-render on pages that include this script
document.addEventListener('DOMContentLoaded', () => renderBlogList());

// Export for other pages if needed
window.BLOG_POSTS = POSTS;
window.renderBlogList = renderBlogList;
