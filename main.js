(function(){
  const scriptUrl=document.currentScript.src;
  const loader=document.createElement("div");
  loader.className="page-loader";
  loader.setAttribute("role","status");
  loader.setAttribute("aria-label","Loading");

  const spinner=document.createElement("span");
  spinner.className="page-loader-spinner";

  const logo=document.createElement("img");
  logo.className="page-loader-logo";
  logo.src=new URL("images/rishrRatnaayurved-logo.png",scriptUrl).href;
  logo.alt="";

  const ring=document.createElement("span");
  ring.className="page-loader-ring";
  ring.setAttribute("aria-hidden","true");

  spinner.append(logo,ring);
  loader.append(spinner);
  loader.addEventListener("animationend",()=>loader.remove(),{once:true});
  document.body.appendChild(loader);
})();

// ---- Products (With PDF Details & Correct List) ----
const products=[
  {
    "cat": "syrup",
    "slug": "risho-liv-syrup",
    "name": "Risho-Liv Syrup",
    "img": "images/risho-liv-syrup.jpeg",
    "type": "Herbal syrup",
    "points": []
  },
  {
    "cat": "syrup",
    "slug": "zymorish-syrup",
    "name": "Zymorish Syrup",
    "img": "product-placeholder/zymorish-syrup.svg",
    "type": "Herbal digestive syrup",
    "points": []
  },
  {
    "cat": "syrup",
    "slug": "femorish-syrup",
    "name": "Femorish Syrup",
    "img": "images/femorish-syrup.jpeg",
    "type": "Herbal syrup",
    "points": []
  },
  {
    "cat": "syrup",
    "slug": "blood-purrish-syrup",
    "name": "Blood Purrish Syrup",
    "img": "images/blood-purrish-syrup.jpeg",
    "type": "Herbal syrup",
    "points": []
  },
  {
    "cat": "syrup",
    "slug": "hemorish-syrup",
    "name": "Hemorish Syrup",
    "img": "images/hemorish-syrup.jpeg",
    "type": "Herbal syrup",
    "points": []
  },
  {
    "cat": "swaras",
    "slug": "aloevera-swaras",
    "name": "Aloevera Swaras",
    "img": "images/aloevera-swaras.jpeg",
    "type": "Herbal swaras",
    "points": []
  },
  {
    "cat": "syrup",
    "slug": "ortho-rish-syrup",
    "name": "Ortho Rish Syrup",
    "img": "images/ortho-rish-syrup.jpeg",
    "type": "Herbal syrup",
    "points": []
  },
  {
    "cat": "syrup",
    "slug": "cofrish-syrup",
    "name": "Cofrish Syrup",
    "img": "images/cofrish-syrup.jpeg",
    "type": "Herbal syrup",
    "points": []
  },
  {
    "cat": "churna",
    "slug": "x-jeevani-churna",
    "name": "X-Jeevani Churna",
    "img": "product-placeholder/x-jeevani-churna.svg",
    "type": "Herbal churna",
    "points": []
  },
  {
    "cat": "oil",
    "slug": "jorish-oil",
    "name": "Jorish Oil",
    "img": "product-placeholder/jorish-oil.svg",
    "type": "Herbal oil",
    "points": []
  },
  {
    "cat": "drops",
    "slug": "sciatorish-drop",
    "name": "Sciatorish Drop",
    "img": "product-placeholder/sciatorish-drop.svg",
    "type": "Herbal drops",
    "points": []
  },
  {
    "cat": "capsule",
    "slug": "ratnovit-capsule",
    "name": "Ratnovit Capsule",
    "img": "product-placeholder/ratnovit-capsule.svg",
    "type": "Herbal capsule",
    "points": []
  },
  {
    "cat": "capsule",
    "slug": "liv-ratna-capsule",
    "name": "Liv Ratna Capsule",
    "img": "product-placeholder/liv-ratna-capsule.svg",
    "type": "Herbal capsule",
    "points": []
  },
  {
    "cat": "capsule",
    "slug": "leucorish-capsules",
    "name": "Leucorish Capsules",
    "img": "product-placeholder/leucorish-capsules.svg",
    "type": "Herbal capsule",
    "points": []
  },
  {
    "cat": "churna",
    "slug": "p-jeevni-churna",
    "name": "P-Jeevni Churna",
    "img": "product-placeholder/p-jeevni-churna.svg",
    "type": "Herbal churna",
    "points": []
  },
  {
    "cat": "churna",
    "slug": "p-clear-1-churna",
    "name": "P-Clear-1 Churna",
    "img": "product-placeholder/p-clear-1-churna.svg",
    "type": "Herbal churna",
    "points": []
  },
  {
    "cat": "churna",
    "slug": "p-cool",
    "name": "P-Cool",
    "img": "product-placeholder/p-cool.svg",
    "type": "Herbal product",
    "points": []
  },
  {
    "cat": "churna",
    "slug": "p-clear-2-churna",
    "name": "P-Clear-2 Churna",
    "img": "product-placeholder/p-clear-2-churna.svg",
    "type": "Herbal churna",
    "points": []
  },
  {
    "cat": "bhasma",
    "slug": "p-bhasm",
    "name": "P-Bhasm",
    "img": "product-placeholder/p-bhasm.svg",
    "type": "Herbal bhasma",
    "points": []
  },
  {
    "cat": "capsule",
    "slug": "aloe-vera-capsule",
    "name": "Aloe Vera Capsule",
    "img": "product-placeholder/aloe-vera-capsule.svg",
    "type": "Herbal capsule",
    "points": []
  },
  {
    "cat": "churna",
    "slug": "arsh-ratna",
    "name": "Arsh Ratna",
    "img": "product-placeholder/arsh-ratna.svg",
    "type": "Herbal formulation",
    "points": []
  },
  {
    "cat": "churna",
    "slug": "p-pust-churna",
    "name": "P-Pust Churna",
    "img": "product-placeholder/p-pust-churna.svg",
    "type": "Herbal churna",
    "points": []
  },
  {
    "cat": "herbal",
    "slug": "niranjan-fal",
    "name": "Niranjan Fal",
    "img": "product-placeholder/niranjan-fal.svg",
    "type": "Herbal product",
    "points": []
  },
  {
    "cat": "churna",
    "slug": "pain-end-churna",
    "name": "Pain-End Churna",
    "img": "product-placeholder/pain-end-churna.svg",
    "type": "Herbal churna",
    "points": []
  },
  {
    "cat": "churna",
    "slug": "b-fine-churna",
    "name": "B-Fine Churna",
    "img": "product-placeholder/b-fine-churna.svg",
    "type": "Herbal churna",
    "points": []
  },
  {
    "cat": "capsule",
    "slug": "x-ratna-capsule",
    "name": "X-Ratna Capsule",
    "img": "product-placeholder/x-ratna-capsule.svg",
    "type": "Herbal capsule",
    "points": []
  },
  {
    "cat": "capsule",
    "slug": "vaatrish-capsule",
    "name": "Vaatrish Capsule",
    "img": "product-placeholder/vaatrish-capsule.svg",
    "type": "Herbal capsule",
    "points": []
  },
  {
    "cat": "oil",
    "slug": "p-end-oil",
    "name": "P-End Oil",
    "img": "product-placeholder/p-end-oil.svg",
    "type": "Herbal oil",
    "points": []
  },
  {
    "cat": "oil",
    "slug": "fungorish-oil",
    "name": "Fungorish Oil",
    "img": "product-placeholder/fungorish-oil.svg",
    "type": "Herbal oil",
    "points": []
  },
  {
    "cat": "churna",
    "slug": "p-clear-3",
    "name": "P-Clear 3",
    "img": "product-placeholder/p-clear-3.svg",
    "type": "Herbal churna",
    "points": []
  },
  {
    "cat": "syrup",
    "slug": "stono-rish-syrup",
    "name": "Stono Rish Syrup",
    "img": "images/stono-rish-syrup.jpeg",
    "type": "Ayurvedic syrup",
    "points": []
  },
  {
    "cat": "syrup",
    "slug": "risho-liv-ds-syrup",
    "name": "Risho Liv DS Syrup",
    "img": "images/risho-liv-DS-syrup.jpeg",
    "type": "Ayurvedic syrup",
    "points": []
  },
  {
    "cat": "syrup",
    "slug": "abhayristha-syrup",
    "name": "Abhayristha Syrup",
    "img": "images/abhayristha-syrup.jpeg",
    "type": "Ayurvedic syrup",
    "points": []
  },
  {
    "cat": "herbal",
    "slug": "zonyl-herbal-mixture",
    "name": "Zonyl Herbal Mixture",
    "img": "images/zonyl-herbal-mixture.jpeg",
    "type": "Herbal mixture",
    "points": []
  }
];


const WA="919431873287";
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
function card(p){
  const msg=encodeURIComponent("Hello, I would like information about "+p.name+".");
  const page="product/"+esc(p.slug)+".html";
  return `<article class="card">
    <a class="pic" href="${page}" aria-label="Open ${esc(p.name)} details"><img src="${esc(p.img)}" alt="${esc(p.name)} product image" loading="lazy"></a>
    <div class="body"><span class="tag">${esc(p.type)}</span>
      <h3><a href="${page}">${esc(p.name)}</a></h3>
      <p>Product information, pack details and availability. Please refer to the product label for complete composition and directions.</p>
      <div class="card-actions"><a class="btn outline" href="${page}">View details</a>
      <a class="btn green" href="https://wa.me/${WA}?text=${msg}" target="_blank" rel="noopener">Ask on WhatsApp</a></div>
    </div></article>`;
}
const allGrid=document.getElementById("grid-all");
if(allGrid){
  const search=document.getElementById("product-search");
  const filter=document.getElementById("product-category");
  const render=()=>{
    const q=(search?.value||"").trim().toLowerCase(), c=filter?.value||"all";
    const list=products.filter(p=>(c==="all"||p.cat===c)&&(!q||(p.name+" "+p.type).toLowerCase().includes(q)));
    allGrid.innerHTML=list.length?list.map(card).join(""):"<p class='empty'>No products found. Try another search.</p>";
    const count=document.getElementById("product-count");if(count)count.textContent=list.length+" products";
  };
  search?.addEventListener("input",render);filter?.addEventListener("change",render);render();
}
["syrup","churan"].forEach(c=>{
  const el=document.getElementById("grid-"+c);if(!el)return;
  const cats=c==="syrup"?["syrup","swaras","drops"]:["churna","bhasma","oil","capsule","herbal"];
  const list=products.filter(p=>cats.includes(p.cat));
  el.innerHTML=list.length?list.map(card).join(""):"<p class='empty'>Products will be listed here soon.</p>";
  const n=document.getElementById("count-"+c);if(n)n.textContent=list.length;
});
// tap a product picture to see it full size
(function(){
  let box=null;
  function close(){if(box){box.remove();box=null;document.body.style.overflow=""}}
  document.addEventListener("click",e=>{
    const b=e.target.closest("[data-zoom]");
    if(!b){if(box&&e.target.closest(".lightbox"))close();return}
    box=document.createElement("div");box.className="lightbox";box.setAttribute("role","dialog");box.setAttribute("aria-label",b.dataset.alt);
    const img=document.createElement("img");img.src=b.dataset.zoom;img.alt=b.dataset.alt;
    const x=document.createElement("button");x.type="button";x.className="lb-close";x.setAttribute("aria-label","Close");x.textContent="\u00d7";
    box.append(x,img);document.body.appendChild(box);document.body.style.overflow="hidden";x.focus();
  });
  document.addEventListener("keydown",e=>{if(e.key==="Escape")close()});
})();

// contact page: enquiry form opens WhatsApp
const enq=document.getElementById("enq");
if(enq)enq.addEventListener("submit",e=>{
  e.preventDefault();
  const f=enq.elements;
  const t="Name: "+f.n.value+"\nPhone: "+f.p.value+"\nEnquiry: "+f.q.value;
  window.open("https://wa.me/"+WA+"?text="+encodeURIComponent(t),"_blank","noopener");
});

// ---- Home banner slider ----
const SLIDES=[
  {d:"images/home-page-laptop.png",m:"images/home-page-mobile.png",alt:"Rishi Ratna Ayurved banner"},
  {d:"images/gopt-roag-kit-laptop.jpeg",m:"images/gopt-roag-kit-mobile.png",alt:"Gupt Roag Kit",href:"products.html",fix:true,l:"#000000",r:"#F6EDC8"},
  {d:"images/joint-pain-kit-laptop.jpeg",m:"images/joint-pain-kit-mobile.png",alt:"Ortho Rish Syrup",href:"product/ortho-rish-syrup.html",fix:true,l:"#000000",r:"#F4F1EA"},
  {d:"images/piles-kit-laptop.jpeg",m:"images/piles-kit-mobile.png",alt:"Femorish Syrup",href:"product/femorish-syrup.html",fix:true,l:"#000000",r:"#FAF7F0"}
];
(function(){
  const box=document.querySelector(".bn");if(!box)return;
  const track=box.querySelector(".bn-track"),dotsEl=box.querySelector(".bn-dots");
  track.innerHTML=SLIDES.map((s,i)=>`<div class="bn-slide" style="--bg:url('${s.d}')" role="group" aria-roledescription="slide" aria-label="${i+1} of ${SLIDES.length}">${s.href?`<a class="bn-link" href="${s.href}" aria-label="${s.alt}: view full details">`:""}<picture><source media="(max-width:700px)" srcset="${s.m}"><img src="${s.d}" alt="${s.alt}" decoding="async"></picture>${s.href?"</a>":""}</div>`).join("");

  function edges(img,slide){
    try{
      const c=document.createElement("canvas");c.width=40;c.height=12;
      const ctx=c.getContext("2d");ctx.drawImage(img,0,0,40,12);
      const px=ctx.getImageData(0,0,40,12).data;
      const col=x=>Array.from({length:12},(_,y)=>{const k=(y*40+x)*4;return "rgb("+px[k]+","+px[k+1]+","+px[k+2]+") "+Math.round(y/11*100)+"%"}).join(",");
      slide.style.setProperty("--gl",col(0));slide.style.setProperty("--gr",col(39));slide.classList.add("ed");
    }catch(e){}
  }

  const SAMPLE=12;
  const solid=c=>c+" 0%,"+c+" 100%";
  function setSides(slide,l,r){
    slide.style.setProperty("--gl",l);
    slide.style.setProperty("--gr",r);
    slide.classList.add("ed");
  }
  function edgesFix(img,slide,s){
    if(!img.naturalWidth)return;
    slide.style.setProperty("--bg","url('"+img.currentSrc+"')");
    try{
      const w=img.naturalWidth,h=img.naturalHeight;
      const c=document.createElement("canvas");c.width=2;c.height=SAMPLE;
      const ctx=c.getContext("2d",{willReadFrequently:true});
      ctx.drawImage(img,0,0,3,h,0,0,1,SAMPLE);
      ctx.drawImage(img,w-3,0,3,h,1,0,1,SAMPLE);
      const px=ctx.getImageData(0,0,2,SAMPLE).data;
      const col=x=>Array.from({length:SAMPLE},(_,y)=>{
        const k=(y*2+x)*4;
        return "rgb("+px[k]+","+px[k+1]+","+px[k+2]+") "+Math.round(y/(SAMPLE-1)*100)+"%";
      }).join(",");
      setSides(slide,col(0),col(1));
    }catch(e){
      if(s.l&&s.r)setSides(slide,solid(s.l),solid(s.r));
      else slide.classList.remove("ed");
    }
  }

  [...track.children].forEach((sl,n)=>{
    const im=sl.querySelector("img"),s=SLIDES[n];
    if(s.fix){
      const run=()=>edgesFix(im,sl,s);
      im.addEventListener("load",run);
      if(im.complete&&im.naturalWidth)run();
    }else{
      const run=()=>edges(im,sl);
      im.complete&&im.naturalWidth?run():im.addEventListener("load",run);
    }
  });

  if(SLIDES.length<2){box.classList.add("one");return}
  dotsEl.innerHTML=SLIDES.map((s,i)=>`<button type="button" aria-label="Go to slide ${i+1}"></button>`).join("");
  const slides=[...track.children],dots=[...dotsEl.children];let i=0,timer=null,x0=null;
  function go(k){i=(k+slides.length)%slides.length;track.style.transform="translateX(-"+(i*100)+"%)";
    slides.forEach((s,j)=>{s.inert=j!==i;s.setAttribute("aria-hidden",j!==i)});dots.forEach((d,j)=>d.setAttribute("aria-current",j===i))}
  function stop(){clearInterval(timer)}
  function play(){stop();if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;timer=setInterval(()=>go(i+1),5500)}
  box.querySelector(".prev").onclick=()=>{go(i-1);play()};
  box.querySelector(".next").onclick=()=>{go(i+1);play()};
  dots.forEach((d,j)=>d.onclick=()=>{go(j);play()});
  box.addEventListener("mouseenter",stop);box.addEventListener("mouseleave",play);
  box.addEventListener("touchstart",e=>{x0=e.touches[0].clientX},{passive:true});
  box.addEventListener("touchend",e=>{if(x0===null)return;const d=e.changedTouches[0].clientX-x0;if(Math.abs(d)>50){go(d<0?i+1:i-1);play()}x0=null});
  go(0);play();
})();

// Mobile hamburger menu
(function(){
  const btn=document.querySelector(".menu-btn"),nav=document.getElementById("nav");
  if(!btn||!nav)return;
  function set(open){
    nav.classList.toggle("open",open);
    btn.setAttribute("aria-expanded",open);
    btn.setAttribute("aria-label",open?"Close menu":"Open menu");
  }
  btn.addEventListener("click",e=>{e.stopPropagation();set(!nav.classList.contains("open"))});
  nav.addEventListener("click",e=>{if(e.target.closest("a"))set(false)});
  document.addEventListener("click",e=>{if(!nav.contains(e.target))set(false)});
  document.addEventListener("keydown",e=>{if(e.key==="Escape")set(false)});
  matchMedia("(min-width:821px)").addEventListener("change",e=>{if(e.matches)set(false)});
})();

// automatic copyright year
const yr=document.getElementById("yr");
if(yr)yr.textContent=new Date().getFullYear();

// ==========================================
// FLOATING CALL AND WHATSAPP BUTTONS
// ==========================================
(function(){
    const style = document.createElement("style");
    style.innerHTML = `
        .floating-contact {
            position: fixed;
            bottom: 25px;
            left: 20px;
            display: flex;
            flex-direction: column;
            gap: 15px;
            z-index: 9999;
        }
        .floating-btn {
            width: 55px;
            height: 55px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            text-decoration: none;
        }
        .floating-btn:hover {
            transform: scale(1.1) translateY(-3px);
            box-shadow: 0 6px 20px rgba(0,0,0,0.4);
        }
        .floating-btn svg {
            width: 28px;
            height: 28px;
            fill: currentColor;
        }
        .btn-call {
            background-color: #34b7f1;
        }
        .btn-wa {
            background-color: #25D366;
            animation: pulse-wa 2s infinite;
        }
        @keyframes pulse-wa {
            0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); }
            70% { box-shadow: 0 0 0 15px rgba(37, 211, 102, 0); }
            100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
        }
        @media(max-width: 600px) {
            .floating-contact { bottom: 15px; left: 15px; gap: 10px; }
            .floating-btn { width: 50px; height: 50px; }
            .floating-btn svg { width: 24px; height: 24px; }
        }
    `;
    document.head.appendChild(style);

    const container = document.createElement("div");
    container.className = "floating-contact";

    const phoneNumber = "919431873287";
    const message = encodeURIComponent("Hello Rishi Ratna Ayurved, I want to know more about your products.");

    container.innerHTML = `
        <a href="tel:+${phoneNumber}" class="floating-btn btn-call" aria-label="Call Us" title="Call Us">
            <svg viewBox="0 0 24 24">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.03 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
            </svg>
        </a>
        <a href="https://wa.me/${phoneNumber}?text=${message}" target="_blank" rel="noopener" class="floating-btn btn-wa" aria-label="Chat on WhatsApp" title="Chat on WhatsApp">
            <svg viewBox="0 0 24 24">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm0 18c-1.48 0-2.93-.4-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29z"/>
            </svg>
        </a>
    `;

    document.body.appendChild(container);
})();
