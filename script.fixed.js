// Cleaned script with dark-mode toggle and persistence
const sideMenu = document.querySelector('#sideMenu');
const navBar = document.querySelector('nav');
const navLinks = document.querySelector('nav ul');
const themeToggle = document.querySelector('#themeToggle');

function openMenu(){
  if (sideMenu) sideMenu.style.transform = 'translateX(-16rem)';
}

function closeMenu(){
  if (sideMenu) sideMenu.style.transform = 'translateX(16rem)';
}

// Persisted theme (dark/light)
function setTheme(isDark){
  if(isDark){
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
}

// Initialize theme from localStorage or prefers-color-scheme
try{
  const savedTheme = localStorage.getItem('theme');
  if(savedTheme === 'dark') setTheme(true);
  else if(savedTheme === 'light') setTheme(false);
  else if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) setTheme(true);
}catch(e){
  // localStorage might be unavailable in some contexts — ignore
}

if(themeToggle){
  themeToggle.addEventListener('click', ()=>{
    const isDark = document.documentElement.classList.toggle('dark');
    setTheme(isDark);
  });
}

window.addEventListener('scroll', ()=>{
  if(typeof scrollY !== 'undefined' && scrollY > 50){
    navBar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm');
    navLinks.classList.remove('bg-white', 'shadow-sm','bg-opacity-50');
  }else{
    navBar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm');
    navLinks.classList.add('bg-white', 'shadow-sm','bg-opacity-50');
  }
});
