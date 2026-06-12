import{S as s,g as r,a as n}from"./gsap-setup.-pxLK9jP.js";const i=s.create({wrapper:"#smooth-wrapper",content:"#smooth-content",smooth:1.2,effects:!0,smoothTouch:.1,normalizeScroll:!0,ignoreMobileResize:!0});window.__smoother=i;async function d(){const e=document.getElementById("loader");if(!e)return;await new Promise(t=>{if(document.documentElement.classList.contains("loader-ready"))t();else{const o=new MutationObserver(()=>{document.documentElement.classList.contains("loader-ready")&&(o.disconnect(),t())});o.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]}),setTimeout(()=>{o.disconnect(),t()},2500)}});const a=window.__loader;a?.hide?await a.hide():(e.style.opacity="0",e.style.pointerEvents="none",await new Promise(t=>setTimeout(t,400))),document.documentElement.classList.add("loader-done"),e.remove(),requestAnimationFrame(()=>{n.refresh()})}d();document.addEventListener("astro:before-swap",()=>{const e=document.createElement("div");e.id="loader",e.className="loader",e.setAttribute("aria-hidden","true"),e.innerHTML=`
      <div class="loader__content">
        <div class="loader__terminal">
          <div class="loader__line"><span class="loader__prompt">$</span><span class="loader__cmd">switching language...</span></div>
        </div>
        <div class="loader__bar">
          <div class="loader__bar-fill" id="loader-bar"></div>
        </div>
      </div>`,e.style.opacity="0",document.body.appendChild(e),r.to(e,{opacity:1,duration:.2,ease:"power2.out",onComplete:()=>{r.to("#loader-bar",{width:"100%",duration:.8,ease:"power2.inOut"})}})});document.addEventListener("astro:after-swap",()=>{n.refresh()});
