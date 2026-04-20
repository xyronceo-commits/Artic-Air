/* ARCTICAIR HVAC — main.js */
(function(){
  'use strict';
  const reviews=[
    {name:'Sarah M.',loc:'Homeowner',stars:'★★★★★',text:'"AC broke during a heat wave. ArcticAir arrived in 2 hours and had it fixed in 45 minutes. Incredible service!"',img:'https://i.pravatar.cc/60?img=5'},
    {name:'David K.',loc:'Business Owner',stars:'★★★★★',text:'"They installed a new commercial HVAC system for my restaurant. Professional, clean, and exactly on budget. Highly recommend."',img:'https://i.pravatar.cc/60?img=14'},
    {name:'Lisa T.',loc:'Homeowner',stars:'★★★★★',text:'"Signed up for their maintenance plan and it paid for itself in the first year. Caught a refrigerant leak before it became a big problem."',img:'https://i.pravatar.cc/60?img=23'},
    {name:'Mike R.',loc:'Property Manager',stars:'★★★★★',text:'"I manage 12 rental units and ArcticAir handles all my HVAC needs. They are reliable, fair, and always pick up the phone."',img:'https://i.pravatar.cc/60?img=31'},
    {name:'Jennifer H.',loc:'Homeowner',stars:'★★★★★',text:'"The technician was professional, on time, and explained everything. Got a new heat pump installed and the energy savings are real."',img:'https://i.pravatar.cc/60?img=47'},
    {name:'Carlos V.',loc:'Office Manager',stars:'★★★★★',text:'"Called at 7am for an emergency and they were here by 9am. Fixed the issue and even gave us tips to prevent future problems."',img:'https://i.pravatar.cc/60?img=57'},
  ];
  const grid=document.getElementById('reviewsGrid');
  if(grid)reviews.forEach(r=>{const el=document.createElement('div');el.className='rc';el.innerHTML=`<div class="stars">${r.stars}</div><p>${r.text}</p><div class="author"><img src="${r.img}" alt="${r.name}"/><div><strong>${r.name}</strong><span>${r.loc}</span></div></div>`;grid.appendChild(el);});
  ['contactForm','quickForm'].forEach(id=>{const f=document.getElementById(id);if(f)f.addEventListener('submit',e=>{e.preventDefault();const b=f.querySelector('button[type=submit]');const o=b.textContent;b.textContent='✓ Submitted!';b.style.background='#059669';setTimeout(()=>{b.textContent=o;b.style.background='';f.reset();},3000);});});
  const obs=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('visible');}),{threshold:.1});
  document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
})();
