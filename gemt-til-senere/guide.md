# Guiden

Taget ud af siden 14. august 2026, så den kan arbejdes videre på.
Sæt delene tilbage i `nyt/index.html` for at bruge den igen.

## 1. CSS (lige før `.hint{`)

```css
/* ── Guiden: Ingrid i hjørnet der viser vej ── */
.guide{
	position:absolute;left:26px;bottom:112px;z-index:900;
	display:flex;align-items:flex-end;gap:12px;
	opacity:0;transform:translateY(14px);pointer-events:none;
	transition:opacity .34s var(--ease),transform .34s var(--ease);
}
.guide.paa{opacity:1;transform:none;pointer-events:auto}
.guide__mig{
	width:66px;height:66px;flex:0 0 66px;border-radius:19px;overflow:hidden;
	background:#8B5CF6;border:none;padding:0;cursor:pointer;
	box-shadow:0 10px 26px rgba(0,0,0,.5);
	transition:transform .25s var(--ease);
}
.guide__mig img{width:100%;height:100%;object-fit:cover;display:block}
.guide__mig:hover{transform:translateY(-4px) rotate(-3deg)}
.guide.vinker .guide__mig{animation:vink 1.5s ease-in-out 2}
@keyframes vink{0%,100%{transform:rotate(0)}25%{transform:rotate(-9deg)}60%{transform:rotate(7deg)}}
.guide__boble{
	position:relative;max-width:330px;
	background:#F7F5F0;color:var(--ink);
	border-radius:16px 16px 16px 4px;padding:15px 17px 14px;
	box-shadow:0 14px 34px rgba(0,0,0,.4);
}
.guide__boble::after{
	content:"";position:absolute;left:-7px;bottom:11px;
	width:14px;height:14px;background:#F7F5F0;transform:rotate(45deg);border-radius:2px;
}
.guide__tekst{font-family:var(--f-l);font-size:14.5px;line-height:1.55;margin:0 0 11px;position:relative}
.guide__knapper{display:flex;gap:8px;flex-wrap:wrap;position:relative}
.guide__knapper button{
	font-family:var(--f-m);font-size:12.5px;letter-spacing:.01em;
	border:1px solid var(--ink);background:var(--ink);color:#F7F5F0;
	padding:7px 13px;border-radius:20px;cursor:pointer;transition:all .2s var(--ease);
}
.guide__knapper button:hover{background:#8B5CF6;border-color:#8B5CF6}
.guide__knapper button.blid{background:none;color:var(--ink-2);border-color:var(--line)}
.guide__knapper button.blid:hover{background:none;color:var(--ink);border-color:var(--ink-2)}
.guide__luk{
	position:absolute;top:6px;right:7px;width:22px;height:22px;border-radius:50%;
	border:none;background:none;color:var(--ink-3);cursor:pointer;font-size:15px;line-height:1;
	display:grid;place-items:center;padding:0;
}
.guide__luk:hover{background:rgba(20,20,20,.09);color:var(--ink)}
.guide.sover .guide__boble{display:none}
.guide.sover{pointer-events:auto;opacity:1;transform:none}
.guide__prik{
	position:absolute;top:-3px;right:-3px;width:14px;height:14px;border-radius:50%;
	background:#A8D400;border:2px solid #12100E;display:none;
}
.guide.sover .guide__prik{display:block}
```

## 2. HTML (lige før `<!-- FORDØR -->`)

```html
<!-- GUIDE -->
	<div class="guide" id="guide">
		<button class="guide__mig" id="guideMig" aria-label="Ingrid viser vej"><img src="img/tegning-mig-lys.png" alt=""><span class="guide__prik"></span></button>
		<div class="guide__boble">
			<button class="guide__luk" id="guideLuk" aria-label="Skjul">×</button>
			<p class="guide__tekst" id="guideTekst"></p>
			<div class="guide__knapper" id="guideKnapper"></div>
		</div>
	</div>
```

## 3. JavaScript (lige før kommentaren `/* Hintet forsvinder ... */`)

```js
/* ── Guiden: holder styr på hvad man har set og foreslår det næste ── */
const guide       = document.getElementById("guide");
const guideTekst  = document.getElementById("guideTekst");
const guideKnapper= document.getElementById("guideKnapper");
const RUTE = [
	{id:"w-digital", da:"Digitalt design", en:"Digital design"},
	{id:"w-brand",   da:"Branding",        en:"Branding"},
	{id:"w-print",   da:"Print & SoMe",    en:"Print & social"},
	{id:"w-foto",    da:"Foto",            en:"Foto"},
	{id:"w-bag",     da:"Bag om arbejdet", en:"Behind the work"},
	{id:"w-kode",    da:"Kodeværkstedet",  en:"The code workshop"},
	{id:"w-tegn",    da:"Tegn en streg",   en:"Draw something"},
	{id:"w-mig",     da:"Om mig",          en:"About me"}
];
const SET = new Set();
let guideVaekvalgt = false;

function navn(p){ return sprog==="en" ? p.en : p.da; }

function guideVis(tekst, knapper){
	guide.classList.remove("sover");
	guideTekst.textContent = tekst;
	guideKnapper.innerHTML = "";
	knapper.forEach(k=>{
		const b=document.createElement("button");
		b.textContent=k.tekst;
		if(k.blid) b.className="blid";
		b.addEventListener("click",k.gør);
		guideKnapper.appendChild(b);
	});
	guide.classList.add("paa");
	const h=document.getElementById("hint"); if(h) h.classList.add("vaek");
}

function guideSov(){
	guide.classList.add("sover","paa");
}

function guideNæste(){
	return RUTE.filter(p=>!SET.has(p.id) && document.getElementById(p.id));
}

function guideOpdater(sidst){
	if(guideVaekvalgt || !dor.classList.contains("vaek")) return;
	const mgl = guideNæste();
	const set = RUTE.length - mgl.length;

	if(mgl.length === 0){
		guideVis(
			sprog==="en"
				? "That's everything. If any of it fits what you need, I'd like to hear from you."
				: "Så har du set det hele. Hvis noget af det passer på det du står og mangler, hører jeg gerne fra dig.",
			[{tekst: sprog==="en"?"Get in touch":"Skriv til mig", gør:()=>{ aabn("w-kontakt"); guideSov(); }},
			 {tekst: sprog==="en"?"Start over":"Forfra", blid:true, gør:()=>{ SET.clear(); aabnHjem(); guideSov(); }}]
		);
		return;
	}

	const a = mgl[0], b = mgl[1];
	const lukket = sidst ? RUTE.find(p=>p.id===sidst) : null;
	let indled;
	if(lukket) indled = sprog==="en"
		? "You've seen "+navn(lukket)+". "+set+" of "+RUTE.length+" done. Where to now?"
		: "Du har set "+navn(lukket)+". "+set+" ud af "+RUTE.length+". Hvor skal vi hen nu?";
	else indled = sprog==="en"
		? "There are "+RUTE.length+" folders. Want me to pick one for you?"
		: "Der er "+RUTE.length+" mapper. Skal jeg vælge en for dig?";

	const knapper=[{tekst:navn(a), gør:()=>{ aabn(a.id); if(a.id==="w-tegn") setTimeout(fitCanvas,320); guideSov(); }}];
	if(b) knapper.push({tekst:navn(b), blid:true, gør:()=>{ aabn(b.id); if(b.id==="w-tegn") setTimeout(fitCanvas,320); guideSov(); }});
	guideVis(indled, knapper);
}

document.getElementById("guideMig").addEventListener("click",()=>{
	if(guide.classList.contains("sover") || !guide.classList.contains("paa")){
		guideVaekvalgt=false; guideOpdater(null);
	} else guideSov();
});
document.getElementById("guideLuk").addEventListener("click",()=>{ guideSov(); });

/* Registrér hvad der bliver åbnet og lukket */
const aabnUdenGuide = aabn;
aabn = function(id){
	aabnUdenGuide(id);
	if(RUTE.some(p=>p.id===id)) SET.add(id);
	if(guide.classList.contains("paa") && !guide.classList.contains("sover")) guideSov();
};

const lukUdenGuide = luk;
luk = function(w){
	const var_aaben = w.classList.contains("open");
	lukUdenGuide(w);
	if(!var_aaben) return;
	if(!RUTE.some(p=>p.id===w.id)) return;
	setTimeout(()=>{
		const nogenAabne = document.querySelectorAll(".window.open").length > 0;
		if(!nogenAabne) guideOpdater(w.id);
	},360);
};
```

## 4. To kroge i fordøren

I `lukDor()` efter `dor.classList.add("vaek")`:

```js
setTimeout(()=>{ if(typeof guideOpdater==="function"){ guide.classList.add("vinker"); guideOpdater(null); setTimeout(()=>guide.classList.remove("vinker"),3200); } },900);
```

I `aabnHjem()` efter `dor.classList.remove("vaek")`:

```js
guide.classList.remove("paa","sover");
```

## 5. Telefonreglen (i blokken `@media(max-width:700px)`)

```css
.guide{position:fixed;left:12px;right:12px;bottom:calc(104px + env(safe-area-inset-bottom));align-items:flex-end}
.guide__mig{width:52px;height:52px;flex:0 0 52px;border-radius:15px}
.guide__boble{max-width:none;flex:1}
.guide__tekst{font-size:14px}
```
