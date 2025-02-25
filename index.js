import{T as F}from"./assets/vendor-W_U67ldY.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const f of s.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();function p(e){return[...e.children].every(i=>i.classList.contains("found"))}const o={cards:document.querySelector(".js-cards"),startBtn:document.querySelector(".start-btn"),gameTimeField:document.querySelector(".game-time"),stepsField:document.querySelector(".steps")};function A(e){const n=[];for(let r=0;r<e/2;r++)n.push(r,r);const i=[];for(;i.length<e;){const r=h(n.length),t=n[r];n.splice(r,1),i.push(t)}return i}function h(e){return Math.floor(Math.random()*e)}const B=["🐟","🦖","🦀","🐧","🐥","🔥","🐞","🦉","🐖","🐢","🦑","🦜","🦚","🦉","🪰","🐬","🪱","🪲","🪳","🪴","🪵","🪶","🪷","🪸","🪹","🪺","🪻","🪼","🪽","🪾","🪿","🫀"];function C(e=12){const i=A(e).map(r=>`<div class="card" data-id=${r}>
      ${B[r]}
  </div>`).join("");o.cards.innerHTML=i}let u=null,c=null;const S=16,a=new F;let l=null,d=0;o.cards.addEventListener("click",y);o.startBtn.addEventListener("click",v);function v(){C(S),l&&(clearInterval(l),a.stop()),a.start(),l=setInterval(()=>{const e=String(a.time().m).padStart(2,"0"),n=String(a.time().s).padStart(2,"0");o.gameTimeField.textContent=`${e}:${n}`},1e3)}function y({target:e,currentTarget:n}){if(e!==n&&!(u&&c)&&e!==u&&!e.classList.contains("found")){if(d+=1,o.stepsField.textContent=d,g(e),!u){u=e;return}if(c=e,c.dataset.id===u.dataset.id){m(c),m(u),u=null,c=null,p(o.cards)&&(o.cards.innerHTML=`<div>
        <h1>You WIN</h1>
        <p>Time: ${o.gameTimeField.textContent}</p>
        <p>Steps: ${d}</p>
        </div`,clearInterval(l),a.stop(),o.gameTimeField.textContent="00:00",d=0,o.stepsField.textContent=d);return}L()}}function L(){setTimeout(()=>{u.classList.remove("shown"),c.classList.remove("shown"),u=null,c=null},500)}function g(e){e.classList.add("shown")}function m(e){e.classList.add("found")}
//# sourceMappingURL=index.js.map
