const header = document.getElementById('header');
const onScroll = () => {
    const scrolled = window.scrollY > 10;
    header.classList.toggle('bg-white/95', scrolled);
    header.classList.toggle('backdrop-blur', scrolled);
    header.classList.toggle('shadow-sm', scrolled);
};
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

const btn = document.getElementById('menuBtn');
const menu = document.getElementById('mobileMenu');
btn.addEventListener('click', () => menu.classList.toggle('hidden'));
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.add('hidden')));

const body = document.querySelector('body')
const butn = document.getElementById('butn')
let home = document.getElementById('home')
let secb = document.getElementById('secb')
let dashboard = document.getElementById('dashboard')
let pricing = document.getElementById('pricing')
let portfolio = document.getElementById('portfolio')
let power = document.getElementById('power')
let what = document.getElementById('what')
let about = document.getElementById('about')
let why = document.getElementById('why')
let how = document.getElementById('how')
let work = document.getElementById('work')
let feed = document.getElementById('feed')
let client = document.getElementById('client')

let mode = localStorage.mode || 'day'
show()

butn.onclick = function () {
    mode = mode == 'day' ? 'night' : 'day'
    localStorage.mode = mode
    show()
}

function show() {
    if (mode == 'day') {
        butn.innerHTML = '🌙'
        body.classList.remove('bg-[#333]', 'text-white')
        body.classList.add('bg-white')
        dashboard.classList.add('bg-white')
        dashboard.classList.remove('bg-[#333]')
        pricing.classList.add('bg-white')
        pricing.classList.remove('bg-[#333]')
        portfolio.classList.add('bg-white')
        portfolio.classList.remove('bg-[#333]')
        header.classList.remove('bg-[#333]')
        secb.classList.add('bg-white')
        secb.classList.remove('bg-[#333]')
        power.classList.add('bg-white')
        power.classList.remove('bg-[#333]', 'text-white')
        about.classList.add('bg-white')
        about.classList.remove('bg-[#333]', 'text-white')
        what.classList.add('bg-blue-50')
        what.classList.remove('bg-gray-500')
        why.classList.add('bg-blue-50')
        why.classList.remove('bg-gray-500')
        how.classList.add('bg-blue-50')
        how.classList.remove('bg-gray-500')
        work.classList.add('bg-blue-50')
        work.classList.remove('bg-gray-500')
        feed.classList.add('bg-blue-50')
        feed.classList.remove('bg-gray-500')
        client.classList.add('border-slate-200', 'bg-white')
        client.classList.remove('border-slate-500', 'bg-[#333]')
        home.classList.add('bg-gradient-to-br', 'from-[#eef1ff]', 'via-[#f1f2ff]', 'to-[#f5f3ff]')
        home.classList.remove('bg-[#333]','text-white')
    } else {
        butn.innerHTML = '☀'
        body.classList.remove('bg-white')
        body.classList.add('bg-[#333]', 'text-white')
        dashboard.classList.remove('bg-white')
        dashboard.classList.add('bg-[#333]')
        pricing.classList.remove('bg-white')
        pricing.classList.add('bg-[#333]')
        portfolio.classList.remove('bg-white')
        portfolio.classList.add('bg-[#333]')
        header.classList.add('bg-[#333]')
        secb.classList.remove('bg-white')
        secb.classList.add('bg-[#333]')
        power.classList.remove('bg-white')
        power.classList.add('bg-[#333]', 'text-white')
        about.classList.remove('bg-white')
        about.classList.add('bg-[#333]', 'text-white')
        what.classList.remove('bg-blue-50')
        what.classList.add('bg-gray-500')
        why.classList.remove('bg-blue-50')
        why.classList.add('bg-gray-500')
        how.classList.remove('bg-blue-50')
        how.classList.add('bg-gray-500')
        work.classList.remove('bg-blue-50')
        work.classList.add('bg-gray-500')
        feed.classList.remove('bg-blue-50')
        feed.classList.add('bg-gray-500')
        client.classList.remove('border-slate-200', 'bg-white')
        client.classList.add('border-slate-500', 'bg-[#333]')
        home.classList.remove('bg-gradient-to-br', 'from-[#eef1ff]', 'via-[#f1f2ff]', 'to-[#f5f3ff]')
        home.classList.add('bg-[#333]','text-white')
    }
}