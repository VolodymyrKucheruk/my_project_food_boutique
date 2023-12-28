import{c as d}from"./assets/sptite-940c2824.js";import{a as h,S as B}from"./assets/vendor-3d334923.js";async function F(){const t="https://food-boutique.b.goit.study/api/products/categories";try{return(await h.get(t)).data}catch(e){return console.error("Помилка під час запиту:",e),[]}}async function V({keyword:t,category:e,page:o,limit:c}){const r="https://food-boutique.b.goit.study/api/products";return(await h.get(r,{params:{keyword:t,category:e,page:o,limit:c}})).data}async function R(){const t="https://food-boutique.b.goit.study/api/products/popular";return(await h.get(t)).data}async function G(){const t="https://food-boutique.b.goit.study/api/products/discount";return(await h.get(t)).data}const y=document.querySelector(".wrapperPopularProduct"),b=document.querySelector("body");y.addEventListener("click",i);const C=document.querySelector(".card-discount-prod"),m=document.querySelector(".products-list");console.log(m);m.addEventListener("click",S);C.addEventListener("click",K);async function S(t){m.removeEventListener("click",S);const e=t.target.closest(".productlist-card");if(e===null||t.target.closest(".productlist-card-btn")){m.addEventListener("click",S);return}console.log(e);const o=e.dataset.id,c=await l(o);console.log(c),b.insertAdjacentHTML("beforeend",k(c));const r=document.querySelector(".modal-wimdow-add-to-cart-btn");(JSON.parse(localStorage.getItem("cart"))||[]).find(n=>n._id===c._id)&&(r.style.background="#6d8434",r.childNodes[0].nodeValue="Added to"),I()}async function i(t){y.removeEventListener("click",i);const e=t.target.closest("li");if(e===null||t.target.closest(".popular__products-button")){y.addEventListener("click",i);return}const o=e.dataset.id,c=await l(o);b.insertAdjacentHTML("beforeend",k(c));const r=document.querySelector(".modal-wimdow-add-to-cart-btn");(JSON.parse(localStorage.getItem("cart"))||[]).find(n=>n._id===c._id)&&(r.style.background="#6d8434",r.childNodes[0].nodeValue="Added to"),I()}async function K(t){C.removeEventListener("click",i);const e=t.target.closest("li");if(e===null||t.target.closest(".btn-icon-cart")){C.addEventListener("click",i);return}const o=e.dataset.id,c=await l(o);b.insertAdjacentHTML("beforeend",k(c));const r=document.querySelector(".modal-wimdow-add-to-cart-btn");(JSON.parse(localStorage.getItem("cart"))||[]).find(n=>n._id===c._id)&&(r.style.background="#6d8434",r.childNodes[0].nodeValue="Added to"),I()}async function l(t){const e="https://food-boutique.b.goit.study/api/products/";return h.get(`${e}${t}`).then(o=>o.data).catch(o=>{throw new Error(o)})}function k(t){let e;const{_id:o,name:c,category:r,size:s,popularity:a,desc:n,price:v,img:x}=t;return r.includes("_")&&(e=r.split("_").join(" ")),`
    <div class="backdrop" data-modal>
  <div class="modal-container modal-product" data-id="${o}" data-modal">
    <svg
      class="modal-product-close-icon"
      width="22"
      height="22"
      data-modal-close
    >
      <use href="${d}#icon-close"></use>
    </svg>
    <div class="modal-product-img-text">
      <div class="modal-product-container-img">
        <img
          class="modal-product-img"
          src="${x}"
          alt="${c}"
          width="160"
          height="160"
        />
      </div>
      <div class="modal-product-text">
        <p class="modal-product modal-product-name">${c}</p>
        <div class="modal-container-descs">
          <p class="modal-product modal-product-desc">
            Category:
            <span class="modal-product-desc modal-product-desc-value"
              >${e}</span
            >
          </p>

          <p class="modal-product modal-product-desc">
            Size:
            <span class="modal-product-desc modal-product-desc-value"
              >${s}</span
            >
          </p>

          <p class="modal-product modal-product-desc">
            Popularity:
            <span class="modal-product-desc modal-product-desc-value">${a}</span>
          </p>
        </div>

        <p class="modal-product-description" style="overflow-y:auto; max-height: 200px">
         ${n}

        </p>
      </div>
    </div>

    <div class="container-cost-button">
      <p class="modal-product-cost">$${v}</p>
      <button class="modal-wimdow-add-to-cart-btn">
        Add to
        <svg class="modal-product-addtocart" width="18" height="18">
          <use href="${d}#icon-cart"></use>
        </svg>
      </button>
    </div>
  </div>
</div>
    
    `}function I(){const t=document.querySelector("[data-modal-close]"),e=document.querySelector(".backdrop");document.querySelector("[data-modal]").addEventListener("click",U);function c(){const a=document.querySelector("[data-modal]");a&&(a.remove(),t.removeEventListener("click",c),document.removeEventListener("keydown",s),e.removeEventListener("click",r))}function r(a){a.target===e&&(c(),e.removeEventListener("click",r))}function s(a){a.code==="Escape"&&(c(),document.removeEventListener("keydown",s))}y.addEventListener("click",i),m.addEventListener("click",S),t.addEventListener("click",c),e.addEventListener("click",r),document.addEventListener("keydown",s),document.querySelector("[data-modal]")||b.insertAdjacentHTML("beforeend",k(info))}async function U(t){const o=t.target.closest(".modal-wimdow-add-to-cart-btn");if(console.log(o),o){const c=o.closest(".modal-container");console.log(c);const r=c.dataset.id;console.log(r);const s=await l(r);s.quantity=1,Y(s,o)}}function Y(t,e){let o=JSON.parse(localStorage.getItem("cart"))||[];o.find(r=>r._id===t._id)?(e.style.background="#6d8434",e.textContent="Added to"):(o.push(t),localStorage.setItem("cart",JSON.stringify(o)),e.style.background="#6d8434",e.childNodes[0].nodeValue="Added to",console.log("Товар доданий в кошик!")),Q()}function Q(){const t=JSON.parse(localStorage.getItem("cart"))||[],e=document.querySelector(".js-header-span");e&&(e.textContent=t.length)}const g=document.querySelector(".products-list"),E=document.querySelector(".products-list-none");let X=6;const Z={keyword:null,category:null,page:1,limit:6};window.addEventListener("resize",et);function tt(t){return window.innerWidth<768?t.limit=6:window.innerWidth>=768&&window.innerWidth<1440?t.limit=8:t.limit=9,t}async function u(){return localStorage.getItem("settings")?await q(JSON.parse(localStorage.getItem("settings"))):await q(Z)}async function q(t){try{t=tt(t);const e=JSON.parse(localStorage.getItem("settings"));e.limit=t.limit,localStorage.setItem("settings",JSON.stringify(e));const o=await V(t);o.results.length===0?(E.classList.remove("hidden"),g.classList.add("hidden")):(g.classList.contains("hidden")&&(E.classList.add("hidden"),g.classList.remove("hidden")),g.innerHTML=ot(o.results))}catch(e){console.log(e.message)}}function et(){const t=JSON.parse(localStorage.getItem("settings"));window.innerWidth<768&&t.limit===6||window.innerWidth>=768&&window.innerWidth<1440&&t.limit===8||window.innerWidth>=1440&&t.limit===9||(console.log(`windowChange ${X}`),u())}function ot(t){return t.map(({name:e,img:o,category:c,size:r,popularity:s,price:a,is10PercentOff:n,_id:v})=>{c.includes("_")&&(c=c.split("_").join(" "));const $=(JSON.parse(localStorage.getItem("cart"))||[]).find(z=>z._id===v);return`
    <div class="productlist-card" data-id="${v}">
    <div class="productlist-card-img-wrapper">
        <img src="${o}" alt="${e}" class="productlist-card-img" width="140">
    </div>
    <h3 class="productlist-card-header">${e}</h3>
    <div class="productlist-card-text-wrapper">
        <p class="productlist-card-text">
          Category: <span class="productlist-card-text-span">${c}</span>
        </p>
        <p class="productlist-card-text">
          Size: <span class="productlist-card-text-span">${r}</span>
        </p>
        <p class="productlist-card-text">
          Popularity: <span class="productlist-card-text-span">${s}</span>
        </p>
    </div>

    <div class="productlist-card-bottom">
        <span class="productlist-card-price">$${a}</span>
        <button type="button" class="productlist-card-btn" ${$?"disabled":""}>
            <svg class="productlist-card-icon-${$?"check":"cart"}" width="18" height="18">
                <use href="${d}#icon-${$?"check":"cart"}"></use>
            </svg></button>
    </div>
    ${n?`<svg class="productlist-dicount" width="60" height="60">
      <use href="${d}#icon-discount"></use>
    </svg>`:""}
</div>
  `}).join("")}window.addEventListener("load",M);g.addEventListener("click",ct);async function ct(t){const o=t.target.closest(".productlist-card-btn");if(o){const r=o.closest(".productlist-card").dataset.id,s=await l(r);s.quantity=1,rt(s,o)}}function rt(t,e){let o=JSON.parse(localStorage.getItem("cart"))||[];if(o.find(r=>r._id===t._id)){const r=e.querySelector(".productlist-card-icon-cart use"),s=e.querySelector(".productlist-card-icon-cart");console.log(s),s.classList.replace("productlist-card-icon-cart","productlist-card-icon-check"),r.setAttribute("href",`${d}#icon-check`),e.setAttribute("disabled","disabled")}else o.push(t),localStorage.setItem("cart",JSON.stringify(o)),console.log("Товар доданий в кошик!");M()}function M(){const t=JSON.parse(localStorage.getItem("cart"))||[],e=document.querySelector(".js-header-span");e&&(e.textContent=t.length)}const st=document.querySelector(".filters-form"),w=document.querySelector(".filters-form-input"),f=document.querySelector(".filters-form-select-category"),at=t=>t.map(e=>`<option value="${e.trim()}">${e.replace("_"," ").replace("_"," ")}</option>`).join("");let P=[];const nt=async()=>{P=[...await F(),"Show all"];const e=at(P);f.insertAdjacentHTML("beforeend",e);const o=JSON.parse(localStorage.getItem("settings"))||{keyword:null,category:null};f.value=o.category,new B({select:"#category",settings:{showSearch:!1}})};nt();const dt=t=>{t.preventDefault();const e=w.value.trim(),o=f.value,c={keyword:e||null,category:o==="Show all"?null:o.trim()||null};localStorage.setItem("settings",JSON.stringify(c)),u()},it=t=>{if(t.target.value===""){const e=f.value,o={keyword:null,category:e==="Show all"?null:e.trim()||null};localStorage.setItem("settings",JSON.stringify(o)),u()}},lt=t=>{const e=w.value.trim(),o=t.target.value,c={keyword:e||null,category:o==="Show all"?null:o.trim()||null};localStorage.setItem("settings",JSON.stringify(c)),u()};window.addEventListener("load",()=>{const t=JSON.parse(localStorage.getItem("settings"))||{keyword:null,category:null};w.value=t.keyword,u(),st.addEventListener("submit",dt),f.addEventListener("change",lt),w.addEventListener("input",it)});const ut={keyword:null,category:null,page:1,limit:6},pt=[];function T(){if(!localStorage.getItem("settings"))return localStorage.setItem("settings",JSON.stringify(ut))}function A(){if(!localStorage.getItem("cart"))return localStorage.setItem("cart",JSON.stringify(pt))}const j=document.querySelector(".card-discount-prod");T();A();function gt(t){return t.map(({img:e,name:o,price:c,_id:r})=>`<li class="discount-prod-item slide" data-id='${r}'>
    <div class="wrap-img-discount-prod">
      <img class="discount-img" src="${e}" alt="${o}">
    </div>
    <div class="info-discount-prod">
      <p class="text-discount-prod">${o}</p>
      <div class="price-discount-prod">
        <p class="text-discount-prod price-text-disc">$${c}</p>
        <button type="button" class="btn-icon-cart">
          <svg class="icon-cart-svg" width="18" height="18">
            <use href="${d}#icon-cart"></use>
          </svg>
        </button>
      </div>
    </div>
    <div class="wrap-discount-svg">
      <svg class="discount-svg" width="60" height="60">
        <use href="${d}#icon-discount"></use>
      </svg>
  </div>
</li>`).join("")}function mt(){G().then(t=>{ft(t),j.insertAdjacentHTML("beforeend",gt(t))}).catch(t=>console.log(t.message))}mt();function ft(t){let e=Math.floor(Math.random()*t.length),o=Math.floor(Math.random()*t.length);if(e===o)return;let c=t[o];t[o]=t[e],t[e]=c}window.addEventListener("load",H);j.addEventListener("click",ht);async function ht(t){const o=t.target.closest(".btn-icon-cart");if(o){const r=o.closest(".discount-prod-item").dataset.id,s=await l(r);s.quantity=1,vt(s,o)}}function vt(t,e){let o=JSON.parse(localStorage.getItem("cart"))||[];if(o.find(r=>r._id===t._id)){const r=e.querySelector(".icon-cart-svg use");r.setAttribute("style","stroke: var(--background); fill: var(--p_color);"),r.setAttribute("href",`${d}#icon-check`)}else o.push(t),localStorage.setItem("cart",JSON.stringify(o));H()}function H(){const t=JSON.parse(localStorage.getItem("cart"))||[],e=document.querySelector(".js-header-span");e&&(e.textContent=t.length)}let L=0;const N=2,_=document.querySelector("header"),O=document.querySelector(".header-container"),p=()=>window.pageYOffset||document.documentElement.scrollTop,J=()=>_.classList.contains("hide");function yt(){window.addEventListener("scroll",()=>{p()>L&&!J()&&p()>N?_.classList.add("hide"):p()<L&&J()&&_.classList.remove("hide"),p()>N?O.classList.add("scrolled"):O.classList.remove("scrolled"),L=p()})}const D=document.querySelector(".wrapperPopularProduct");document.querySelector("body");document.addEventListener("DOMContentLoaded",St);async function St(){try{const t=await bt();if(t===void 0)throw new Error;kt(t)}catch{W()}}function wt({category:t,img:e,name:o,popularity:c,size:r,_id:s}){return`
  <li data-id='${s}' class="popular__products-items  ">
  <div class="img-box">
    <img
      class="popular__products-img"
      src="${e}"
      alt="${o}"
    />
  </div>
  <div class="info-box">
    <h3 class="popular__products-name">${o}</h3>
    <p class="popular__products-text">
      Category:
      <span class="js-popular__products-category">${t}</span>
    </p>
    <div class="add-ifo-box">
      <p class="popular__products-text">
        Size: <span class="js-popular__products-size">${r}</span>
      </p>
      <p class="popular__products-text">
        Popularity:
        <span class="js-popular__products-popularity">${c}</span>
      </p>
    </div>
  </div>
  <button class="popular__products-button">
    <svg class="popular__products-svg" width="12" height="12">
      <use href="${d}#icon-cart"></use>
    </svg>
  </button>
</li>
  `}async function bt(){try{return(await R()).reduce((e,o)=>e+wt(o),"")}catch{W()}}function kt(t){D.insertAdjacentHTML("beforeend",t)}function W(){console.error("Error:",err),D.innerHTML=""}T();A();yt();u();
//# sourceMappingURL=commonHelpers2.js.map
