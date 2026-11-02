var g_=Object.defineProperty;var __=(i,t)=>{for(var e in t)g_(i,e,{get:t[e],enumerable:!0})};var vd=1,oo=15,cs=3,x_=["studio","summer","autumn","winter","desert"],y_=["open","window","canvas","down"],Lc={open:"\xD6ppet br\xE4tte",window:"WallFlex f\xF6nster",canvas:"WallFlex duk",down:"Nedf\xE4lld t\xE4ltduk"},We={table200:{name:"F\xE4llbart bord 200",sku:"41006",l:1.98,w:.7,h:.73,kind:"table",image:"reference-table200.png",handle:"collapsible-table-200-oil-treated"},bench200:{name:"F\xE4llbar b\xE4nk 200",sku:"41005",l:1.98,w:.23,h:.44,kind:"bench",image:"reference-bench200.png",handle:"collapsible-bench-200-oil-treated"},table150:{name:"F\xE4llbart bord 150",sku:"41053",l:1.55,w:.7,h:.73,kind:"table",image:"reference-table150.webp",handle:"collapsible-table-150-oil-treated"},bench150:{name:"F\xE4llbar b\xE4nk 150",sku:"41052",l:1.55,w:.23,h:.44,kind:"bench",image:"reference-bench150.webp",handle:"collapsible-bench-150-oil-treated"},bamse:{name:"Bamse max",sku:"40005",l:1.5,w:1.2,h:.8,kind:"fire",illustrative:!0,image:"reference-bamse-max.webp",handle:"bamse-max"}};function Ur(){return"p"+Math.random().toString(36).slice(2,10)}function ao(i,t,e,n=0){return{id:Ur(),type:i,x:t,z:e,rotation:n}}function Sd(i){let t=[];if(i==="empty")return t;let e=i==="dinner"?[[-1.65,-1.4],[1.65,-1.4],[-1.65,1.4],[1.65,1.4]]:[[-1.65,0],[1.65,0]];for(let[n,s]of e)t.push(ao("table200",n,s),ao("bench200",n,s-.66),ao("bench200",n,s+.66));return t}function kp(){return{version:vd,environment:"summer",ventOpen:!0,entranceOpen:!0,fabric:"beige",walls:["open","open","open","window","window","window","open","open","open"],doors:Array(9).fill(!1),floor:!0,lights:!0,items:Sd("dinner")}}function Si(i){if(!i||i.version!==vd||!Array.isArray(i.walls)||i.walls.length!==9||i.walls.some(n=>!y_.includes(n)))throw Error("Filen inneh\xE5ller inte en giltig Stratus 72-konfiguration.");if(i.environment!==void 0&&!x_.includes(i.environment))throw Error("Ogiltig visningsmilj\xF6.");if(!["beige","white"].includes(i.fabric)||!Array.isArray(i.items)||i.items.length>90)throw Error("Ogiltig f\xE4rg eller f\xF6r m\xE5nga m\xF6bler.");let t=new Set,e=i.items.map(n=>{if(!n||typeof n.type!="string"||!Object.hasOwn(We,n.type)||typeof n.id!="string"||!/^[a-zA-Z0-9_-]{1,32}$/.test(n.id)||t.has(n.id)||![n.x,n.z,n.rotation].every(Number.isFinite)||Math.abs(n.x)>oo||Math.abs(n.z)>oo||Math.abs(n.rotation)>3600)throw Error("En m\xF6bel har ogiltiga m\xE5tt eller koordinater.");return t.add(n.id),{id:n.id,type:n.type,x:n.x,z:n.z,rotation:(n.rotation%360+360)%360}});return{version:vd,environment:i.environment??"studio",ventOpen:i.ventOpen===void 0?!0:!!i.ventOpen,entranceOpen:i.entranceOpen===void 0?!0:!!i.entranceOpen,fabric:i.fabric,walls:[...i.walls],doors:Array.from({length:9},(n,s)=>!!i.doors?.[s]&&["window","canvas"].includes(i.walls[s])),floor:!!i.floor,lights:!!i.lights,items:e}}function Us(i){let t=Si(i);return i.site!==void 0&&(t.site=Wp(i.site,t),Object.assign(t,structuredClone(t.site.tents.find(e=>e.id===t.site.activeId).config))),t}function zp(i,t){let e=structuredClone(i);return t(e),Us(e)}function bd(i){if(typeof i!="string"||!i.trim()||!Number.isFinite(Number(i))||Math.abs(Number(i))>oo)throw Error("Ange b\xE5da koordinaterna mellan \u221215 och 15 meter.");return Number(i)}function Vp(i){return{...i,id:Ur(),x:i.x+(i.x+.3>oo?-.3:.3),z:i.z+(i.z+.3>oo?-.3:.3)}}function De(i){return i*Math.PI*2/9-Math.PI/2}function Md(i,t=0){let e=We[i.type],n=i.rotation*Math.PI/180,s=Math.cos(n),r=Math.sin(n);return[[-1,-1],[1,-1],[1,1],[-1,1]].map(([a,o])=>{let l=a*(e.l/2+t),c=o*(e.w/2+t);return{x:i.x+l*s-c*r,z:i.z+l*r+c*s}})}function v_(i,t){let e=Md(i,.025),n=Md(t,.025);for(let s of[e,n])for(let r=0;r<4;r++){let a=(r+1)%4,o={x:-(s[a].z-s[r].z),z:s[a].x-s[r].x},l=d=>d.map(u=>u.x*o.x+u.z*o.z),c=l(e),h=l(n);if(Math.max(...c)<=Math.min(...h)||Math.max(...h)<=Math.min(...c))return!1}return!0}function Fp(i){let t=[];for(let e of i.items)Md(e).some(n=>Math.hypot(n.x,n.z)>4.75)&&t.push({ids:[e.id],text:We[e.type].name+": kontrollera plats vid den sluttande duken och stommen."});for(let e=0;e<i.items.length;e++)for(let n=e+1;n<i.items.length;n++)v_(i.items[e],i.items[n])&&t.push({ids:[i.items[e].id,i.items[n].id],text:"Tv\xE5 m\xF6bler \xF6verlappar varandra."});return t}function Op(i){let t=[{name:"Stratus 72 \xB7 "+(i.fabric==="white"?"naturvit":"beige"),qty:1,sku:null,note:"V\xE4v och offert bekr\xE4ftas av Tentipi"}];for(let n of["window","canvas"]){let s=i.walls.filter(r=>r===n).length;s&&t.push({name:Lc[n]+" \xB7 enkelv\xE4gg",qty:s,sku:null,note:"V\xE4ggm\xE5tt, st\xF6d och komponentutf\xF6rande bekr\xE4ftas"})}let e=0;for(let n=0;n<9;n++){let s=["window","canvas"].includes(i.walls[n]),r=["window","canvas"].includes(i.walls[(n+1)%9]);s!==r&&e++}e&&t.push({name:"WallFlex \xE4ndutfyllnad \xB7 indikativt behov",qty:e,sku:null,note:"Tentipi verifierar r\xE4tt \xE4ndstycken, inf\xE4stning och antal"});for(let[n,s]of Object.entries(We)){let r=i.items.filter(a=>a.type===n).length;r&&t.push({name:s.name,qty:r,sku:s.sku,note:s.illustrative?"Angivna m\xE5tt 150 \xD7 120 \xD7 80 cm; detaljgeometri och anv\xE4ndning bekr\xE4ftas":""})}return i.floor&&t.push({name:"Eventmatta Sand \xB7 2 \xD7 10,5 m",qty:5,sku:"43052",note:"Rekommenderat grundpaket f\xF6r Stratus 72, ej ut\xF6kat br\xE4tte"}),i.lights&&t.push({name:"TT Ljusslingesystem \xB7 9 \xD7 8 m",qty:1,sku:"42003",note:"Tillg\xE4nglighet bekr\xE4ftas"},{name:"TT str\xF6madapter/dimmer EU",qty:1,sku:"42004",note:"Kr\xE4vs f\xF6r vald ljusslinga"}),t}function Bp(i,t=""){let e=Dc(i).length;return["TENTIPI \xB7 STRATUS 72 / WALLFLEX","Konfigurationsf\xF6rfr\xE5gan \xB7 ej bindande order","",...Nc(i).map(n=>`${n.qty} \xD7 ${n.name}${n.sku?" \xB7 art. "+n.sku:""}${n.note?" ("+n.note+")":""}`),"","Ventilation upptill: "+(i.ventOpen?"\xF6ppen":"st\xE4ngd"),"Dragkedjeentr\xE9, sida "+(cs+1)+": "+(i.walls[cs]!=="down"?"fri passage under uppf\xE4llt br\xE4tte":i.entranceOpen?"\xF6ppen":"st\xE4ngd"),"","SEKTIONER (numrering enligt planvyn)",...i.walls.map((n,s)=>`${s+1}: ${Lc[n]}${i.doors[s]?" \xB7 mittparti \xF6ppet":""}`),"","M\xD6BLERING (meter fr\xE5n t\xE4ltcentrum)",...i.items.map(n=>`${We[n.type].name}: x ${n.x.toFixed(2)}, z ${n.z.toFixed(2)}, rotation ${n.rotation}\xB0`),"",e?`${e} placeringspunkter beh\xF6ver granskas.`:"Inga uppt\xE4ckta m\xF6bel\xF6verlappningar.","Yttergeometri och fria passager \xE4r illustrativa. Slutlig komponentlista, pris, f\xF6rankring och anv\xE4ndning godk\xE4nns av Tentipi.",t?"\xD6ppna konfigurationen: "+t:""].join(`
`)}function Dc(i){return i.site?[...Je(i).flatMap(t=>Fp(t.config).map(e=>({...e,text:t.name+": "+e.text}))),...Fc(i)]:Fp(i)}function Nc(i){if(!i.site)return Op(i);let t=new Map;for(let e of Je(i))for(let n of Op(e.config)){let s=n.name+"|"+n.sku;t.has(s)?t.get(s).qty+=n.qty:t.set(s,{...n})}i.site.links.length&&t.set("linkflex",{name:"LinkFlex \xB7 Linking kit",qty:i.site.links.length,sku:null,note:"St\xE4nger, kopplingsdukar och sp\xE4nnband. Slutligt utf\xF6rande verifieras av Tentipi."});for(let e of["canvas","window"]){let n=i.site.links.filter(s=>s.closure===e).length;n&&t.set("midfill"+e,{name:"Midfill / utfyllnader \xB7 "+(e==="canvas"?"duk":"f\xF6nster"),qty:n,sku:null,note:"Planerad sidost\xE4ngning per koppling. Paneler, \xE4ndstycken och antal bekr\xE4ftas av Tentipi."})}return[...t.values()]}function Uc(i,t=""){return i.site?["TENTIPI EVENT \xB7 FLERA STRATUS 72","Visuell layout \xB7 ej montage- eller s\xE4kerhetsritning","Centrumavst\xE5nd och kopplingsgeometri \xE4r illustrativa. Bekr\xE4ftas av Tentipi.","",...Nc(i).map(e=>e.qty+" \xD7 "+e.name+(e.sku?" \xB7 art. "+e.sku:"")),...Je(i).flatMap(e=>["","=== "+e.name+" ===","Centrum X "+e.x.toFixed(2)+" m, Z "+e.z.toFixed(2)+" m \xB7 rotation "+e.rotation.toFixed(1)+"\xB0",Bp(e.config)]),"","KOPPLINGAR",...i.site.links.map(e=>{let n=i.site.tents.find(r=>r.id===e.a),s=i.site.tents.find(r=>r.id===e.b);return n.name+" sida "+(e.aBay+1)+" \u2194 "+s.name+" sida "+(e.bBay+1)+" \xB7 sidost\xE4ngning "+e.closure}),t?"\xD6ppna hela layouten: "+t:""].join(`
`):Bp(i,t)}function Gp(i){return btoa(String.fromCharCode(...new TextEncoder().encode(JSON.stringify(Us(i))))).replaceAll("+","-").replaceAll("/","_").replaceAll("=","")}function Hp(i){if(typeof i!="string"||i.length>24e4)throw Error("Delningsl\xE4nken \xE4r f\xF6r stor.");return Us(JSON.parse(new TextDecoder().decode(Uint8Array.from(atob(i.replaceAll("-","+").replaceAll("_","/")),t=>t.charCodeAt(0)))))}var wd=6,Xp=60,Oc=10.6,M_=["version","fabric","walls","doors","floor","lights","items","ventOpen","entranceOpen","environment"],Bc=i=>(i%360+360)%360,Fs=(i,t)=>{let e=t.rotation*Math.PI/180,n=Math.cos(e),s=Math.sin(e);return{x:t.x+i.x*n-i.z*s,z:t.z+i.x*s+i.z*n}},kc=(i,t)=>{let e=t.rotation*Math.PI/180,n=Math.cos(e),s=Math.sin(e),r=i.x-t.x,a=i.z-t.z;return{x:r*n+a*s,z:-r*s+a*n}};function Je(i){return i.site?i.site.tents.map(t=>({...t,config:t.id===i.site.activeId?Si(i):t.config})):[{id:"t1",name:"T\xE4lt 1",x:0,z:0,rotation:0,config:Si(i)}]}var Jn=i=>Je(i).find(t=>t.id===(i.site?.activeId??"t1"));function hs(i){return i.site||(i.site={activeId:"t1",tents:Je(i),links:[]}),i.site}function Kn(i,t){let e=new Set([t]),n=!0;for(;n;){n=!1;for(let s of i.links)e.has(s.a)!==e.has(s.b)&&(e.add(s.a),e.add(s.b),n=!0)}return e}function zc(i,t=i.site?.activeId){let e=new Set,n=i.site;if(!n)return e;let s=a=>{for(let o of[-1,0,1])e.add((a+o+9)%9)};for(let a of n.links)for(let[o,l]of[["a","aBay"],["b","bBay"]])a[o]===t&&s(a[l]);let r=n.tents.find(a=>a.id===t);if(r)for(let a of n.tents){let o=Math.hypot(a.x-r.x,a.z-r.z);if(a.id===t||o<=8.8||o>=12.5||!Kn(n,t).has(a.id))continue;let l=kc(a,r),c=Math.atan2(l.x,l.z),h=0,d=1/0;for(let u=0;u<9;u++){let f=Math.abs(Math.atan2(Math.sin(c-De(u)),Math.cos(c-De(u))));f<d&&(h=u,d=f)}s(h)}return e}function Wp(i,t){if(!i||!Array.isArray(i.tents)||!i.tents.length||i.tents.length>wd||!Array.isArray(i.links)||i.links.length>wd-1)throw Error("Layouten m\xE5ste inneh\xE5lla 1\u20136 t\xE4lt och giltiga kopplingar.");let e=new Set,n=i.tents.map(a=>{if(!a||typeof a.id!="string"||!/^[a-zA-Z0-9_-]{1,32}$/.test(a.id)||e.has(a.id)||![a.x,a.z,a.rotation].every(Number.isFinite)||Math.abs(a.x)>Xp||Math.abs(a.z)>Xp||Math.abs(a.rotation)>3600||typeof a.name!="string"||a.name.length>40||a.config?.site)throw Error("Ett t\xE4lt har ogiltigt namn, l\xE4ge eller konfiguration.");return e.add(a.id),{id:a.id,name:a.name.trim()||"Stratus 72",x:a.x,z:a.z,rotation:Bc(a.rotation),config:Si(a.config)}});if(!e.has(i.activeId))throw Error("Det valda t\xE4ltet saknas i layouten.");let s={activeId:i.activeId,tents:n,links:[]},r=new Set;for(let a of i.links){if(!a||!e.has(a.a)||!e.has(a.b)||a.a===a.b||![a.aBay,a.bBay].every(l=>Number.isInteger(l)&&l>=0&&l<9)||!["open","canvas","window"].includes(a.closure))throw Error("Ogiltig LinkFlex-koppling.");let o=[a.a,a.b].sort().join("|");if(r.has(o)||Kn(s,a.a).has(a.b))throw Error("Kopplingarna inneh\xE5ller en dubblering eller sluten slinga. Anv\xE4nd triangelf\xF6rslaget f\xF6r tre t\xE4lt.");r.add(o),s.links.push({a:a.a,b:a.b,aBay:a.aBay,bBay:a.bBay,closure:a.closure})}n.find(a=>a.id===s.activeId).config=Si(t);for(let a of n)for(let o of zc({site:s},a.id))a.config.walls[o]="open",a.config.doors[o]=!1;return s}function lo(i,t){let e=hs(i),n=e.tents.find(r=>r.id===e.activeId),s=e.tents.find(r=>r.id===t);if(!s)throw Error("T\xE4ltet saknas.");n.config=Si(i);for(let r of M_)r!=="environment"&&(i[r]=structuredClone(s.config[r]));e.activeId=t}function Vc(i,t,e,n,s){let r=hs(i),a=r.tents.find(d=>d.id===t);if(!a||![e,n,s??a.rotation].every(Number.isFinite))throw Error("Ange giltigt l\xE4ge och vinkel.");let o=Kn(r,t),l={...a},c=s??a.rotation,h=c-l.rotation;for(let d of r.tents)if(o.has(d.id)){let u={x:d.x-l.x,z:d.z-l.z},f=Fs(u,{x:e,z:n,rotation:h});d.x=f.x,d.z=f.z,d.rotation=Bc(d.rotation+h)}}function Td(i,{linked:t=!0,bay:e=0}={}){let n=hs(i);if(n.tents.length>=wd)throw Error("H\xF6gst sex t\xE4lt i denna layout.");let s=n.tents.find(c=>c.id===n.activeId),r=Ur(),a=Fs({x:Math.sin(De(e))*Oc,z:Math.cos(De(e))*Oc},s);s.config=Si(i);let o=Si(i),l={id:r,name:"T\xE4lt "+(n.tents.length+1),x:t?a.x:s.x+15,z:t?a.z:s.z,rotation:t?Bc(s.rotation+180):s.rotation,config:o};return n.tents.push(l),t&&n.links.push({a:s.id,b:r,aBay:e,bBay:e,closure:"open"}),lo(i,r),r}function qp(i,t){let e=hs(i);if(e.tents.length===1)throw Error("Minst ett t\xE4lt beh\xF6vs.");t===e.activeId&&lo(i,e.tents.find(n=>n.id!==t).id),e.tents=e.tents.filter(n=>n.id!==t),e.links=e.links.filter(n=>n.a!==t&&n.b!==t)}function Yp(i,t,e,n){let s=hs(i),r=s.tents.find(l=>l.id===t),a=s.tents.find(l=>l.id===e);if(!r||!a||Kn(s,t).has(e))throw Error("V\xE4lj ett t\xE4lt fr\xE5n en annan grupp att koppla till.");let o=Fs({x:Math.sin(De(n))*Oc,z:Math.cos(De(n))*Oc},r);Vc(i,e,o.x,o.z,Bc(r.rotation+180)),s.links.push({a:t,b:e,aBay:n,bBay:n,closure:"open"})}function Zp(i,t){hs(i).links.splice(t,1)}function $p(i,t){let e={pair:[[-5.3,0,0],[5.3,0,180]],triangle:[[-5.3,-3.06,0],[5.3,-3.06,180],[0,6.12,60]],arc:[[-10,3,0],[0,0,180],[10,3,0]],four:[[-15,4,0],[-5.3,0,180],[5.3,0,0],[15,4,180]],six:[[-10,-9,0],[0,-5.3,180],[10,-9,0],[-10,9,0],[0,5.3,0],[10,9,180]]}[t];if(!e)throw Error("Ok\xE4nd layout.");let n=Si(i),s=e.map(([o,l,c],h)=>({id:"t"+(h+1),name:"T\xE4lt "+(h+1),x:o,z:l,rotation:c,config:structuredClone(n)})),r={activeId:"t1",tents:s,links:[]},a=t==="triangle"?[[0,1],[0,2]]:t==="six"?[[0,1],[1,2],[1,4],[3,4],[4,5]]:e.slice(1).map((o,l)=>[l,l+1]);for(let[o,l]of a){let c=s[o],h=s[l],d=u=>{let f=kc(u===c?h:c,u),p=Math.atan2(f.x,f.z),x=0,g=1/0;for(let m=0;m<9;m++){let v=Math.abs(Math.atan2(Math.sin(p-De(m)),Math.cos(p-De(m))));v<g&&(g=v,x=m)}return x};r.links.push({a:c.id,b:h.id,aBay:d(c),bBay:d(h),closure:"open"})}return i.site=r,r}function Gc(i){let t=Je(i),e=Math.min(...t.map(a=>a.x))-7.8,n=Math.max(...t.map(a=>a.x))+7.8,s=Math.min(...t.map(a=>a.z))-7.8,r=Math.max(...t.map(a=>a.z))+7.8;return{minX:e,maxX:n,minZ:s,maxZ:r,x:(e+n)/2,z:(s+r)/2,width:n-e,depth:r-s}}function Jp(i){if(!i.site)return[];let t=Je(i),e=[];for(let n=0;n<t.length;n++)for(let s=n+1;s<t.length;s++){let r=t[n],a=t[s],o=Math.hypot(r.x-a.x,r.z-a.z);if(o>8.8&&o<12.5&&Kn(i.site,r.id).has(a.id)){let l=i.site.links.find(c=>c.a===r.id&&c.b===a.id||c.b===r.id&&c.a===a.id);e.push({a:r,b:a,closure:l?.closure??"open"})}}return e}function Fc(i){let t=[];if(!i.site)return t;let e=Je(i);for(let n=0;n<e.length;n++)for(let s=n+1;s<e.length;s++){let r=e[n],a=e[s],o=Math.hypot(r.x-a.x,r.z-a.z);o<9?t.push({ids:[],text:r.name+" och "+a.name+": f\xF6r liten separation. Kontrollera stomme och duk."}):o<13&&!Kn(i.site,r.id).has(a.id)&&t.push({ids:[],text:r.name+" och "+a.name+" \xF6verlappar utan LinkFlex-koppling."})}for(let n of i.site.links){let s=e.find(o=>o.id===n.a),r=e.find(o=>o.id===n.b),a=Math.hypot(s.x-r.x,s.z-r.z);(a<8.8||a>12.5)&&t.push({ids:[],text:"Kontrollera avst\xE5ndet i kopplingen "+s.name+" / "+r.name+"."})}return t}var zn={bays:9,halfAngle:Math.PI/9,peak:6.8,bodyTop:6.35,kneeRadius:3.25,topRadius:.48,closedRadius:5.15,raisedRadius:6.5,closedHem:.06,raisedHem:2.3},si=(i,t,e)=>i+(t-i)*e,Ed=(i,t)=>i[(t+9)%9]!=="down"?1:0,Kp=i=>i*i*(3-2*i);function Hc(i,t,e){let n=Ed(i,t),s=Math.max(n,Ed(i,t-1)),r=Math.max(n,Ed(i,t+1));return e<=.5?si(s,n,Kp(e*2)):si(n,r,Kp((e-.5)*2))}function S_(i,t){let e=zn,n=si(e.closedRadius,e.raisedRadius,i),s=si(e.closedHem,e.raisedHem,i),r=si(e.bodyTop,e.closedHem,(e.kneeRadius-e.topRadius)/(e.closedRadius-e.topRadius)),a=si(r,2.65,i);if(t<=.64){let l=t/.64;return{r:si(e.topRadius,e.kneeRadius,l),y:si(e.bodyTop,a,l)}}let o=(t-.64)/.36;return{r:si(e.kneeRadius,n,o),y:si(a,s,o)}}function jp(i){return Math.cos(zn.halfAngle)/Math.cos((i-.5)*zn.halfAngle*2)}function Vn(i,t,e,n){let s=De(t)+(e-.5)*zn.halfAngle*2,{r,y:a}=S_(Hc(i,t,e),n),o=r*jp(e);return[Math.sin(s)*o,a-.1*Math.sin(Math.PI*e)*Math.sin(Math.PI*n),Math.cos(s)*o]}function Wc(i,t,e,n){let s=Hc(i,t,e),r=n/jp(e),a=si(zn.closedRadius,zn.raisedRadius,s),o=r<=zn.kneeRadius?.64*(r-zn.topRadius)/(zn.kneeRadius-zn.topRadius):.64+.36*(r-zn.kneeRadius)/(a-zn.kneeRadius);return Vn(i,t,e,Math.max(0,Math.min(1,o)))[1]}function Qp(i){let e=Math.max(.01,i);return{x:8.8*Math.max(1,e),y:8.8*Math.max(1,1/e)}}function Os(i,t,e){let n=Math.max(0,Math.min(1,Number(i))),s=t*Math.PI*2,r=.53*(.38*e+.62*e*e*e),a=(Math.sin(s*9+.35)*Math.sin(Math.PI*e)*.035+Math.sin(s*3+.7)*e*e*.012)*(1-.7*n),o=.08*n*Math.sin(e*Math.PI*6)*e*(1-e),l=.66*e*(1+.045*Math.sin(s*9)*e*e+.02*Math.sin(s*3)*e)-.105*n*e*e+.055*n*Math.sin(s*9)*Math.sin(Math.PI*e)+.045*n*Math.sin(e*Math.PI*4)*Math.sin(Math.PI*e);return[Math.sin(s)*l,zn.peak-Math.max(.015*e,r*(1-.72*n)-a-o),Math.cos(s)*l]}function tm(i,t){if(i[t]!=="down")return[];let e=s=>s==="window"||s==="canvas",n=[];return e(i[(t+8)%9])&&n.push([0,.5]),e(i[(t+1)%9])&&n.push([.5,1]),n.map(([s,r])=>{let a=[],o=[],l=Array(9).fill("down"),c=24;for(let h=0;h<=c;h++){let d=s+(r-s)*h/c,u=Vn(i,t,d,1),f=Vn(l,t,d,1);if(f[1]=.04,a.push(...f,...u),h<c){let p=h*2;o.push(p,p+1,p+2,p+1,p+3,p+2)}}return{points:a,indices:o,lo:s,hi:r}})}var b_=.08;function w_(i,t,e){let n=kc({x:t,z:e},i),s=Math.atan2(n.x,n.z),r=Math.hypot(n.x,n.z),a=0,o=1/0,l=0;for(let d=0;d<9;d++){let u=Math.atan2(Math.sin(s-De(d)),Math.cos(s-De(d)));Math.abs(u)<o&&(a=d,o=Math.abs(u),l=u)}let c=Math.max(0,Math.min(1,.5+l/(Math.PI*2/9))),h=Vn(i.config.walls,a,c,1);return r<=Math.hypot(h[0],h[2])-1e-5?Wc(i.config.walls,a,c,r):null}function em(i,t,e){let n=i.map(s=>w_(s,t,e)).filter(s=>s!==null);return n.length?Math.min(...n):null}function Xc(i,t,e){let n=em(i,t,e);return n===null?null:n-b_}function nm(i,t,e){let n=[];for(let s=0;s<e.length;s+=3){let r=e.slice(s,s+3),[a,o,l]=r.map(h=>t[h]);[a,o,l,...[[a,o],[o,l],[l,a]].map(([h,d])=>h.map((u,f)=>(u+d[f])/2)),a.map((h,d)=>(h+o[d]+l[d])/3)].every(h=>{let d=em(i,h[0],h[2]);return d!==null&&h[1]<d-.025})&&n.push(...r)}return n}function im(i,t,e,n,{plan:s=!1,cutaway:r=!1}={}){let a=Jp(e),o=Je(e),l=(f,p,x)=>new i.Vector3(f,p,x);function c(f,p,x,g=!1){let m=new i.BufferGeometry;m.setAttribute("position",new i.Float32BufferAttribute(f.flat(),3)),m.setIndex(g?nm(o,f,p):p),m.setAttribute("uv",new i.Float32BufferAttribute(f.flatMap(b=>[b[0]/14,b[2]/14]),2)),m.computeVertexNormals();let v=new i.Mesh(m,x);return v.castShadow=v.receiveShadow=!0,v.userData.connectionRoof=g,h.add(v),v}let h=t,d=f=>new i.MeshStandardMaterial({map:n,color:f.config.fabric==="white"?15855586:14468247,roughness:.95,side:i.DoubleSide});for(let{a:f,b:p,closure:x}of a){h=new i.Group,h.userData.linkTents=[f.id,p.id],t.add(h);let g=p.x-f.x,m=p.z-f.z,v=Math.hypot(g,m),b={x:g/v,z:m/v},y={x:-m/v,z:g/v},E={x:f.x+b.x*3.5,z:f.z+b.z*3.5},w={x:p.x-b.x*3.5,z:p.z-b.z*3.5},A=(z,P)=>{let k=3.5*(.85+.15*Math.sin(Math.PI*z)),H=E.x+(w.x-E.x)*z+y.x*k*P,W=E.z+(w.z-E.z)*z+y.z*k*P;return[H,Xc(o,H,W)??2.22,W]},_=[],T=[],C=18,L=24;for(let z=0;z<=C;z++)for(let P=0;P<=L;P++)if(_.push(A(z/C,P/L*2-1)),z<C&&P<L){let k=z*(L+1)+P;T.push(k,k+1,k+L+1,k+1,k+L+2,k+L+1)}let B=c(_,T,d(f),!0);if(B.visible=!s&&!r,s){let z=[A(0,-1),A(1,-1),A(1,1),A(0,1)].map(k=>l(k[0],.08,k[2])),P=new i.LineLoop(new i.BufferGeometry().setFromPoints(z),new i.LineBasicMaterial({color:9016698}));h.add(P)}if(x!=="open"){let z=x==="window"?new i.MeshPhysicalMaterial({color:13097170,transparent:!0,opacity:.38,roughness:.2,side:i.DoubleSide,depthWrite:!1}):d(f);for(let P of[-1,1]){let k=[],H=[];for(let W=0;W<=C;W++){let ct=A(W/C,P);if(k.push([ct[0],.04,ct[2]],ct),W<C){let $=W*2;H.push($,$+1,$+2,$+1,$+3,$+2)}}c(k,H,z);for(let W of[0,1]){let ct=A(W,P),$=new i.Mesh(new i.CylinderGeometry(.035,.035,ct[1],10),new i.MeshStandardMaterial({color:12956300,roughness:.85}));$.position.set(ct[0],ct[1]/2,ct[2]),h.add($)}}}}let u=e.site?.tents??[];for(let f=0;f<u.length;f++)for(let p=f+1;p<u.length;p++)for(let x=p+1;x<u.length;x++){let g=[u[f],u[p],u[x]];if(!g.every(w=>Kn(e.site,g[0].id).has(w.id))||!g.every((w,A)=>g.slice(A+1).every(_=>{let T=Math.hypot(w.x-_.x,w.z-_.z);return T>8.8&&T<12.5})))continue;h=new i.Group,h.userData.linkTents=g.map(w=>w.id),t.add(h);let m=g.map((w,A)=>{let _=g[(A+1)%3],T=(w.x+_.x)/2,C=(w.z+_.z)/2;return[T,Xc(o,T,C)??2.22,C]}),v=g.reduce((w,A)=>w+A.x,0)/3,b=g.reduce((w,A)=>w+A.z,0)/3,y=[v,Xc(o,v,b)??2.22,b],E=c([y,...m],[0,1,2,0,2,3,0,3,1],d({...g[0],config:g[0].config}),!0);E.visible=!s&&!r}}var hd={};__(hd,{ACESFilmicToneMapping:()=>ka,AddEquation:()=>Ds,AddOperation:()=>Xf,AdditiveAnimationBlendMode:()=>nd,AdditiveBlending:()=>Bu,AgXToneMapping:()=>Yu,AlphaFormat:()=>td,AlwaysCompare:()=>sp,AlwaysDepth:()=>Po,AlwaysStencilFunc:()=>jf,AmbientLight:()=>bl,AnimationAction:()=>Nl,AnimationClip:()=>Is,AnimationLoader:()=>eu,AnimationMixer:()=>fu,AnimationObjectGroup:()=>du,AnimationUtils:()=>tu,ArcCurve:()=>Ko,ArrayCamera:()=>Il,ArrowHelper:()=>Du,AttachedBindMode:()=>Uh,Audio:()=>Ll,AudioAnalyser:()=>uu,AudioContext:()=>Na,AudioListener:()=>cu,AudioLoader:()=>ou,AxesHelper:()=>Nu,BackSide:()=>rn,BasicDepthPacking:()=>Jf,BasicShadowMap:()=>gg,BatchedMesh:()=>Wo,BezierInterpolant:()=>vl,Bone:()=>fa,BooleanKeyframeTrack:()=>Ai,Box2:()=>Ul,Box3:()=>Ke,Box3Helper:()=>Pu,BoxGeometry:()=>Xn,BoxHelper:()=>Fa,BufferAttribute:()=>Te,BufferGeometry:()=>re,BufferGeometryLoader:()=>Cl,ByteType:()=>Ju,Cache:()=>hi,Camera:()=>vr,CameraHelper:()=>Iu,CanvasTexture:()=>lr,CapsuleGeometry:()=>$o,CatmullRomCurve3:()=>Es,CineonToneMapping:()=>Xu,CircleGeometry:()=>cr,ClampToEdgeWrapping:()=>En,Clock:()=>yu,Color:()=>kt,ColorKeyframeTrack:()=>Ca,ColorManagement:()=>me,Compatibility:()=>s0,CompressedArrayTexture:()=>Jh,CompressedCubeTexture:()=>Kh,CompressedTexture:()=>or,CompressedTextureLoader:()=>nu,ConeGeometry:()=>ga,ConstantAlphaFactor:()=>Gf,ConstantColorFactor:()=>zf,Controls:()=>Oa,CubeCamera:()=>Rl,CubeDepthTexture:()=>Zo,CubeReflectionMapping:()=>gi,CubeRefractionMapping:()=>ts,CubeTexture:()=>Ts,CubeTextureLoader:()=>iu,CubeUVReflectionMapping:()=>Tr,CubicBezierCurve:()=>_a,CubicBezierCurve3:()=>jo,CubicInterpolant:()=>xl,CullFaceBack:()=>Ou,CullFaceFront:()=>wf,CullFaceFrontBack:()=>mg,CullFaceNone:()=>bf,Curve:()=>On,CurvePath:()=>tl,CustomBlending:()=>Ef,CustomToneMapping:()=>qu,CylinderGeometry:()=>Ei,Cylindrical:()=>vu,Data3DTexture:()=>tr,DataArrayTexture:()=>Qs,DataTexture:()=>An,DataTextureLoader:()=>Pa,DataUtils:()=>Hi,DecrementStencilOp:()=>Ug,DecrementWrapStencilOp:()=>Og,DefaultLoadingManager:()=>hp,DepthFormat:()=>ui,DepthStencilFormat:()=>es,DepthTexture:()=>Xi,DetachedBindMode:()=>qf,DirectionalLight:()=>Mr,DirectionalLightHelper:()=>Ru,DiscreteInterpolant:()=>yl,DodecahedronGeometry:()=>Jo,DoubleSide:()=>dn,DstAlphaFactor:()=>Uf,DstColorFactor:()=>Of,DynamicCopyUsage:()=>jg,DynamicDrawUsage:()=>qg,DynamicReadUsage:()=>$g,EdgesGeometry:()=>hr,EllipseCurve:()=>ur,EqualCompare:()=>ep,EqualDepth:()=>Do,EqualStencilFunc:()=>Vg,EquirectangularReflectionMapping:()=>za,EquirectangularRefractionMapping:()=>Va,Euler:()=>ei,EventDispatcher:()=>Fn,ExternalTexture:()=>ma,ExtrudeGeometry:()=>sl,FileLoader:()=>ni,Float16BufferAttribute:()=>Xh,Float32BufferAttribute:()=>Vt,FloatType:()=>je,Fog:()=>ir,FogExp2:()=>ko,FramebufferTexture:()=>$h,FrontSide:()=>Qi,Frustum:()=>Ti,FrustumArray:()=>Ho,GLBufferAttribute:()=>xu,GLSL1:()=>t0,GLSL3:()=>id,GreaterCompare:()=>np,GreaterDepth:()=>Uo,GreaterEqualCompare:()=>Mc,GreaterEqualDepth:()=>No,GreaterEqualStencilFunc:()=>Xg,GreaterStencilFunc:()=>Hg,GridHelper:()=>Au,Group:()=>qe,HTMLTexture:()=>jh,HalfFloatType:()=>Mn,HemisphereLight:()=>xr,HemisphereLightHelper:()=>Eu,IcosahedronGeometry:()=>rl,ImageBitmapLoader:()=>au,ImageLoader:()=>Ps,ImageUtils:()=>Bo,IncrementStencilOp:()=>Ng,IncrementWrapStencilOp:()=>Fg,InstancedBufferAttribute:()=>Wi,InstancedBufferGeometry:()=>Al,InstancedInterleavedBuffer:()=>_u,InstancedMesh:()=>ar,Int16BufferAttribute:()=>Hh,Int32BufferAttribute:()=>Wh,Int8BufferAttribute:()=>zh,IntType:()=>Ol,InterleavedBuffer:()=>sr,InterleavedBufferAttribute:()=>bs,Interpolant:()=>$i,InterpolateBezier:()=>Fh,InterpolateDiscrete:()=>ra,InterpolateLinear:()=>Oo,InterpolateSmooth:()=>wo,InterpolationSamplingMode:()=>i0,InterpolationSamplingType:()=>n0,InvertStencilOp:()=>Bg,KeepStencilOp:()=>To,KeyframeTrack:()=>In,LOD:()=>zo,LatheGeometry:()=>al,Layers:()=>er,LessCompare:()=>tp,LessDepth:()=>Lo,LessEqualCompare:()=>vc,LessEqualDepth:()=>Ks,LessEqualStencilFunc:()=>Gg,LessStencilFunc:()=>zg,Light:()=>pi,LightProbe:()=>Tl,LightShadow:()=>yr,Line:()=>fi,Line3:()=>Su,LineBasicMaterial:()=>$e,LineCurve:()=>xa,LineCurve3:()=>Qo,LineDashedMaterial:()=>_l,LineLoop:()=>Xo,LineSegments:()=>Cn,LinearFilter:()=>Ce,LinearInterpolant:()=>Aa,LinearMipMapLinearFilter:()=>Mg,LinearMipMapNearestFilter:()=>vg,LinearMipmapLinearFilter:()=>_i,LinearMipmapNearestFilter:()=>Ga,LinearSRGBColorSpace:()=>vs,LinearToneMapping:()=>Hu,LinearTransfer:()=>oa,Loader:()=>un,LoaderUtils:()=>Da,LoadingManager:()=>Ia,LoopOnce:()=>Yf,LoopPingPong:()=>$f,LoopRepeat:()=>Zf,MOUSE:()=>Ki,Material:()=>Ze,MaterialBlending:()=>_g,MaterialLoader:()=>El,MathUtils:()=>sd,Matrix2:()=>Mu,Matrix3:()=>ae,Matrix4:()=>se,MaxEquation:()=>If,Mesh:()=>oe,MeshBasicMaterial:()=>hn,MeshDepthMaterial:()=>Ta,MeshDistanceMaterial:()=>Ea,MeshLambertMaterial:()=>mr,MeshMatcapMaterial:()=>gl,MeshNormalMaterial:()=>ml,MeshPhongMaterial:()=>fl,MeshPhysicalMaterial:()=>pr,MeshStandardMaterial:()=>He,MeshToonMaterial:()=>pl,MinEquation:()=>Rf,MirroredRepeatWrapping:()=>sa,MixOperation:()=>Wf,MultiplyBlending:()=>zu,MultiplyOperation:()=>Ba,NearestFilter:()=>ke,NearestMipMapLinearFilter:()=>yg,NearestMipMapNearestFilter:()=>xg,NearestMipmapLinearFilter:()=>Er,NearestMipmapNearestFilter:()=>$u,NeutralToneMapping:()=>Zu,NeverCompare:()=>Qf,NeverDepth:()=>Io,NeverStencilFunc:()=>kg,NoBlending:()=>mi,NoColorSpace:()=>Pi,NoNormalPacking:()=>Rg,NoToneMapping:()=>ii,NormalAnimationBlendMode:()=>yc,NormalBlending:()=>wr,NormalGAPacking:()=>Pg,NormalRGPacking:()=>Ig,NotEqualCompare:()=>ip,NotEqualDepth:()=>Fo,NotEqualStencilFunc:()=>Wg,NumberKeyframeTrack:()=>gr,Object3D:()=>ge,ObjectLoader:()=>ru,ObjectSpaceNormalMap:()=>Kf,OctahedronGeometry:()=>ba,OneFactor:()=>Lf,OneMinusConstantAlphaFactor:()=>Hf,OneMinusConstantColorFactor:()=>Vf,OneMinusDstAlphaFactor:()=>Ff,OneMinusDstColorFactor:()=>Bf,OneMinusSrcAlphaFactor:()=>Gu,OneMinusSrcColorFactor:()=>Nf,OrthographicCamera:()=>Ri,PCFShadowMap:()=>Ls,PCFSoftShadowMap:()=>Tf,PMREMGenerator:()=>Pr,Path:()=>As,PerspectiveCamera:()=>Be,Plane:()=>yn,PlaneGeometry:()=>fr,PlaneHelper:()=>Lu,PointLight:()=>Ji,PointLightHelper:()=>Tu,Points:()=>qo,PointsMaterial:()=>pa,PolarGridHelper:()=>Cu,PolyhedronGeometry:()=>qi,PositionalAudio:()=>hu,PropertyBinding:()=>we,PropertyMixer:()=>Dl,QuadraticBezierCurve:()=>ya,QuadraticBezierCurve3:()=>va,Quaternion:()=>Fe,QuaternionKeyframeTrack:()=>_r,QuaternionLinearInterpolant:()=>Ml,R11_EAC_Format:()=>Jl,RED_GREEN_RGTC2_Format:()=>$a,RED_RGTC1_Format:()=>gc,REVISION:()=>Sf,RG11_EAC_Format:()=>Za,RGBADepthPacking:()=>Eg,RGBAFormat:()=>vn,RGBAIntegerFormat:()=>Gl,RGBA_ASTC_10x10_Format:()=>hc,RGBA_ASTC_10x5_Format:()=>oc,RGBA_ASTC_10x6_Format:()=>lc,RGBA_ASTC_10x8_Format:()=>cc,RGBA_ASTC_12x10_Format:()=>uc,RGBA_ASTC_12x12_Format:()=>dc,RGBA_ASTC_4x4_Format:()=>Ql,RGBA_ASTC_5x4_Format:()=>tc,RGBA_ASTC_5x5_Format:()=>ec,RGBA_ASTC_6x5_Format:()=>nc,RGBA_ASTC_6x6_Format:()=>ic,RGBA_ASTC_8x5_Format:()=>sc,RGBA_ASTC_8x6_Format:()=>rc,RGBA_ASTC_8x8_Format:()=>ac,RGBA_BPTC_Format:()=>fc,RGBA_ETC2_EAC_Format:()=>$l,RGBA_PVRTC_2BPPV1_Format:()=>ql,RGBA_PVRTC_4BPPV1_Format:()=>Xl,RGBA_S3TC_DXT1_Format:()=>Xa,RGBA_S3TC_DXT3_Format:()=>qa,RGBA_S3TC_DXT5_Format:()=>Ya,RGBDepthPacking:()=>Ag,RGBFormat:()=>ed,RGBIntegerFormat:()=>Sg,RGB_BPTC_SIGNED_Format:()=>pc,RGB_BPTC_UNSIGNED_Format:()=>mc,RGB_ETC1_Format:()=>Yl,RGB_ETC2_Format:()=>Zl,RGB_PVRTC_2BPPV1_Format:()=>Wl,RGB_PVRTC_4BPPV1_Format:()=>Hl,RGB_S3TC_DXT1_Format:()=>Wa,RGDepthPacking:()=>Cg,RGFormat:()=>ns,RGIntegerFormat:()=>Vl,RawShaderMaterial:()=>wa,Ray:()=>di,Raycaster:()=>Ua,RectAreaLight:()=>wl,RedFormat:()=>zl,RedIntegerFormat:()=>Ha,ReinhardToneMapping:()=>Wu,RenderObjectRefreshType:()=>r0,RenderTarget:()=>ha,RenderTarget3D:()=>pu,RepeatWrapping:()=>ys,ReplaceStencilOp:()=>Dg,ReverseSubtractEquation:()=>Cf,RingGeometry:()=>ol,SIGNED_R11_EAC_Format:()=>Kl,SIGNED_RED_GREEN_RGTC2_Format:()=>xc,SIGNED_RED_RGTC1_Format:()=>_c,SIGNED_RG11_EAC_Format:()=>jl,SRGBColorSpace:()=>ln,SRGBTransfer:()=>Se,Scene:()=>Gi,ShaderChunk:()=>de,ShaderLib:()=>xi,ShaderMaterial:()=>Rn,ShadowMaterial:()=>dl,Shape:()=>Cs,ShapeGeometry:()=>ll,ShapePath:()=>Uu,ShapeUtils:()=>ti,ShortType:()=>Ku,Skeleton:()=>Go,SkeletonHelper:()=>wu,SkinnedMesh:()=>Vo,Source:()=>Oh,Sphere:()=>Ye,SphereGeometry:()=>Yi,Spherical:()=>Sr,SphericalHarmonics3:()=>La,SplineCurve:()=>Ma,SpotLight:()=>Sl,SpotLightHelper:()=>bu,Sprite:()=>rr,SpriteMaterial:()=>ws,SrcAlphaFactor:()=>Vu,SrcAlphaSaturateFactor:()=>kf,SrcColorFactor:()=>Df,StaticCopyUsage:()=>Kg,StaticDrawUsage:()=>Sc,StaticReadUsage:()=>Zg,StereoCamera:()=>lu,StreamCopyUsage:()=>Qg,StreamDrawUsage:()=>Yg,StreamReadUsage:()=>Jg,StringKeyframeTrack:()=>Ci,SubtractEquation:()=>Af,SubtractiveBlending:()=>ku,TOUCH:()=>ji,TangentSpaceNormalMap:()=>Ii,TetrahedronGeometry:()=>cl,Texture:()=>ze,TextureLoader:()=>su,TextureSource:()=>Qn,TextureUtils:()=>Fu,Timer:()=>Pl,TimestampQuery:()=>e0,TorusGeometry:()=>Zi,TorusKnotGeometry:()=>hl,Triangle:()=>ci,TriangleFanDrawMode:()=>Tg,TriangleStripDrawMode:()=>wg,TrianglesDrawMode:()=>bg,TubeGeometry:()=>Rs,UVMapping:()=>Fl,Uint16BufferAttribute:()=>ua,Uint32BufferAttribute:()=>da,Uint8BufferAttribute:()=>Vh,Uint8ClampedBufferAttribute:()=>Gh,Uniform:()=>mu,UniformsGroup:()=>gu,UniformsLib:()=>Ft,UniformsUtils:()=>cp,UnsignedByteType:()=>Pn,UnsignedInt101111Type:()=>Qu,UnsignedInt248Type:()=>Cr,UnsignedInt5999Type:()=>ju,UnsignedIntType:()=>qn,UnsignedShort4444Type:()=>Bl,UnsignedShort5551Type:()=>kl,UnsignedShortType:()=>Ar,VSMShadowMap:()=>br,Vector2:()=>ut,Vector3:()=>I,Vector4:()=>Ee,VectorKeyframeTrack:()=>Ra,VideoFrameTexture:()=>Zh,VideoTexture:()=>Yo,WebGL3DRenderTarget:()=>kh,WebGLArrayRenderTarget:()=>Bh,WebGLCoordinateSystem:()=>Un,WebGLCubeRenderTarget:()=>Ec,WebGLRenderTarget:()=>cn,WebGLRenderer:()=>Ac,WebGLUtils:()=>$0,WebGPUCoordinateSystem:()=>Ms,WebXRController:()=>nr,WireframeGeometry:()=>ul,WrapAroundEnding:()=>aa,ZeroCurvatureEnding:()=>_s,ZeroFactor:()=>Pf,ZeroSlopeEnding:()=>xs,ZeroStencilOp:()=>Lg,createCanvasElement:()=>rp,error:()=>Jt,getConsoleFunction:()=>l0,log:()=>ca,setConsoleFunction:()=>o0,warn:()=>Lt,warnOnce:()=>wi});var Sf="186",Ki={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ji={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},bf=0,Ou=1,wf=2,mg=3,gg=0,Ls=1,Tf=2,br=3,Qi=0,rn=1,dn=2,mi=0,wr=1,Bu=2,ku=3,zu=4,Ef=5,_g=6,Ds=100,Af=101,Cf=102,Rf=103,If=104,Pf=200,Lf=201,Df=202,Nf=203,Vu=204,Gu=205,Uf=206,Ff=207,Of=208,Bf=209,kf=210,zf=211,Vf=212,Gf=213,Hf=214,Io=0,Po=1,Lo=2,Ks=3,Do=4,No=5,Uo=6,Fo=7,Ba=0,Wf=1,Xf=2,ii=0,Hu=1,Wu=2,Xu=3,ka=4,qu=5,Yu=6,Zu=7,Uh="attached",qf="detached",Fl=300,gi=301,ts=302,za=303,Va=304,Tr=306,ys=1e3,En=1001,sa=1002,ke=1003,$u=1004,xg=1004,Er=1005,yg=1005,Ce=1006,Ga=1007,vg=1007,_i=1008,Mg=1008,Pn=1009,Ju=1010,Ku=1011,Ar=1012,Ol=1013,qn=1014,je=1015,Mn=1016,Bl=1017,kl=1018,Cr=1020,ju=35902,Qu=35899,td=1021,ed=1022,vn=1023,ui=1026,es=1027,zl=1028,Ha=1029,ns=1030,Vl=1031,Sg=1032,Gl=1033,Wa=33776,Xa=33777,qa=33778,Ya=33779,Hl=35840,Wl=35841,Xl=35842,ql=35843,Yl=36196,Zl=37492,$l=37496,Jl=37488,Kl=37489,Za=37490,jl=37491,Ql=37808,tc=37809,ec=37810,nc=37811,ic=37812,sc=37813,rc=37814,ac=37815,oc=37816,lc=37817,cc=37818,hc=37819,uc=37820,dc=37821,fc=36492,pc=36494,mc=36495,gc=36283,_c=36284,$a=36285,xc=36286,Yf=2200,Zf=2201,$f=2202,ra=2300,Oo=2301,wo=2302,Fh=2303,_s=2400,xs=2401,aa=2402,yc=2500,nd=2501,bg=0,wg=1,Tg=2,Jf=3200,Eg=3201,Ag=3202,Cg=3203,Ii=0,Kf=1,Pi="",ln="srgb",vs="srgb-linear",oa="linear",Se="srgb",Rg="",Ig="rg",Pg="ga",Lg=0,To=7680,Dg=7681,Ng=7682,Ug=7683,Fg=34055,Og=34056,Bg=5386,kg=512,zg=513,Vg=514,Gg=515,Hg=516,Wg=517,Xg=518,jf=519,Qf=512,tp=513,ep=514,vc=515,np=516,ip=517,Mc=518,sp=519,Sc=35044,qg=35048,Yg=35040,Zg=35045,$g=35049,Jg=35041,Kg=35046,jg=35050,Qg=35042,t0="100",id="300 es",Un=2e3,Ms=2001,e0={COMPUTE:"compute",RENDER:"render"},n0={PERSPECTIVE:"perspective",LINEAR:"linear",FLAT:"flat"},i0={NORMAL:"normal",CENTROID:"centroid",SAMPLE:"sample",FIRST:"first",EITHER:"either"},s0={TEXTURE_COMPARE:"depthTextureCompare"},r0={NONE:0,SHARED:1,FULL:2};function T_(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}var E_={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function na(i,t){return new E_[i](t)}function a0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function la(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function rp(){let i=la("canvas");return i.style.display="block",i}var sm={},Ss=null;function o0(i){Ss=i}function l0(){return Ss}function ca(...i){let t="THREE."+i.shift();Ss?Ss("log",t,...i):console.log(t,...i)}function c0(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Lt(...i){i=c0(i);let t="THREE."+i.shift();if(Ss)Ss("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Jt(...i){i=c0(i);let t="THREE."+i.shift();if(Ss)Ss("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function wi(...i){let t=i.join(" ");t in sm||(sm[t]=!0,Lt(...i))}function h0(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var u0={[Io]:Po,[Lo]:Uo,[Do]:Fo,[Ks]:No,[Po]:Io,[Uo]:Lo,[Fo]:Do,[No]:Ks},Fn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],rm=1234567,Js=Math.PI/180,js=180/Math.PI;function Wn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gn[i&255]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]+"-"+gn[t&255]+gn[t>>8&255]+"-"+gn[t>>16&15|64]+gn[t>>24&255]+"-"+gn[e&63|128]+gn[e>>8&255]+"-"+gn[e>>16&255]+gn[e>>24&255]+gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]).toLowerCase()}function ie(i,t,e){return Math.max(t,Math.min(e,i))}function ap(i,t){return(i%t+t)%t}function A_(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function C_(i,t,e){return i!==t?(e-i)/(t-i):0}function Eo(i,t,e){return(1-e)*i+e*t}function R_(i,t,e,n){return Eo(i,t,1-Math.exp(-e*n))}function I_(i,t=1){return t-Math.abs(ap(i,t*2)-t)}function P_(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function L_(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function D_(i,t){return i+Math.floor(Math.random()*(t-i+1))}function N_(i,t){return i+Math.random()*(t-i)}function U_(i){return i*(.5-Math.random())}function F_(i){i!==void 0&&(rm=i);let t=rm+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function O_(i){return i*Js}function B_(i){return i*js}function k_(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function z_(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function V_(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function G_(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),d=r((t-n)/2),u=a((t-n)/2),f=r((n-t)/2),p=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*d,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*d,o*c);break;case"ZXZ":i.set(l*d,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*p,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*p,o*c);break;case"ZYZ":i.set(l*p,l*f,o*h,o*c);break;default:Lt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Tn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ue(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var sd={DEG2RAD:Js,RAD2DEG:js,generateUUID:Wn,clamp:ie,euclideanModulo:ap,mapLinear:A_,inverseLerp:C_,lerp:Eo,damp:R_,pingpong:I_,smoothstep:P_,smootherstep:L_,randInt:D_,randFloat:N_,randFloatSpread:U_,seededRandom:F_,degToRad:O_,radToDeg:B_,isPowerOfTwo:k_,ceilPowerOfTwo:z_,floorPowerOfTwo:V_,setQuaternionFromProperEuler:G_,normalize:ue,denormalize:Tn},ut=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Fe=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],p=r[a+2],x=r[a+3];if(d!==x||l!==u||c!==f||h!==p){let g=l*u+c*f+h*p+d*x;g<0&&(u=-u,f=-f,p=-p,x=-x,g=-g);let m=1-o;if(g<.9995){let v=Math.acos(g),b=Math.sin(v);m=Math.sin(m*v)/b,o=Math.sin(o*v)/b,l=l*m+u*o,c=c*m+f*o,h=h*m+p*o,d=d*m+x*o}else{l=l*m+u*o,c=c*m+f*o,h=h*m+p*o,d=d*m+x*o;let v=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=v,c*=v,h*=v,d*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],p=r[a+3];return t[e]=o*p+h*d+l*f-c*u,t[e+1]=l*p+h*u+c*d-o*f,t[e+2]=c*p+h*f+o*u-l*d,t[e+3]=h*p-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),f=l(s/2),p=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:Lt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ie(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(am.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(am.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ad.copy(this).projectOnVector(t),this.sub(Ad)}reflect(t){return this.sub(Ad.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ad=new I,am=new Fe,ae=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],p=n[8],x=s[0],g=s[3],m=s[6],v=s[1],b=s[4],y=s[7],E=s[2],w=s[5],A=s[8];return r[0]=a*x+o*v+l*E,r[3]=a*g+o*b+l*w,r[6]=a*m+o*y+l*A,r[1]=c*x+h*v+d*E,r[4]=c*g+h*b+d*w,r[7]=c*m+h*y+d*A,r[2]=u*x+f*v+p*E,r[5]=u*g+f*b+p*w,r[8]=u*m+f*y+p*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,p=e*d+n*u+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=d*x,t[1]=(s*c-h*n)*x,t[2]=(o*n-s*a)*x,t[3]=u*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return wi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Cd.makeScale(t,e)),this}rotate(t){return wi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Cd.makeRotation(-t)),this}translate(t,e){return wi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Cd.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Cd=new ae,om=new ae().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lm=new ae().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function H_(){let i={enabled:!0,workingColorSpace:vs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Se&&(s.r=Vi(s.r),s.g=Vi(s.g),s.b=Vi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Se&&(s.r=ia(s.r),s.g=ia(s.g),s.b=ia(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Pi?oa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return wi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return wi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[vs]:{primaries:t,whitePoint:n,transfer:oa,toXYZ:om,fromXYZ:lm,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ln},outputColorSpaceConfig:{drawingBufferColorSpace:ln}},[ln]:{primaries:t,whitePoint:n,transfer:Se,toXYZ:om,fromXYZ:lm,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ln}}}),i}var me=H_();function Vi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ia(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Fr,Bo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Fr===void 0&&(Fr=la("canvas")),Fr.width=t.width,Fr.height=t.height;let s=Fr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Fr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=la("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Vi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Vi(e[n]/255)*255):e[n]=Vi(e[n]);return{data:e,width:t.width,height:t.height}}else return Lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},W_=0,Qn=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:W_++}),this.uuid=Wn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Rd(s[a].image)):r.push(Rd(s[a]))}else r=Rd(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Rd(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Bo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Lt("Texture: Unable to serialize Texture."),{})}var Oh=class extends Qn{constructor(t=null){wi('Source: "Source" has been renamed to "TextureSource". Please update your code to use "THREE.TextureSource" instead.'),super(t),this.isSource=!0}},X_=0,Id=new I,ze=class i extends Fn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=En,s=En,r=Ce,a=_i,o=vn,l=Pn,c=i.DEFAULT_ANISOTROPY,h=Pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:X_++}),this.uuid=Wn(),this.name="",this.source=new Qn(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ae,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Id).x}get height(){return this.source.getSize(Id).y}get depth(){return this.source.getSize(Id).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Lt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Lt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Fl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ys:t.x=t.x-Math.floor(t.x);break;case En:t.x=t.x<0?0:1;break;case sa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ys:t.y=t.y-Math.floor(t.y);break;case En:t.y=t.y<0?0:1;break;case sa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ze.DEFAULT_IMAGE=null;ze.DEFAULT_MAPPING=Fl;ze.DEFAULT_ANISOTROPY=1;var Ee=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(c+1)/2,y=(f+1)/2,E=(m+1)/2,w=(h+u)/4,A=(d+x)/4,_=(p+g)/4;return b>y&&b>E?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=w/n,r=A/n):y>E?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=w/s,r=_/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=A/r,s=_/r),this.set(n,s,r,e),this}let v=Math.sqrt((g-p)*(g-p)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(g-p)/v,this.y=(d-x)/v,this.z=(u-h)/v,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this.w=ie(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this.w=ie(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ha=class extends Fn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ce,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new ze(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ce,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Qn(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},cn=class extends ha{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Qs=class extends ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ke,this.minFilter=ke,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},Bh=class extends cn{constructor(t=1,e=1,n=1,s={}){super(t,e,s),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new Qs(null,t,e,n),this._setTextureOptions(s),this.texture.isRenderTargetTexture=!0}},tr=class extends ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ke,this.minFilter=ke,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}},kh=class extends cn{constructor(t=1,e=1,n=1,s={}){super(t,e,s),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new tr(null,t,e,n),this._setTextureOptions(s),this.texture.isRenderTargetTexture=!0}},se=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,l,c,h,d,u,f,p,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,d,u,f,p,x,g)}set(t,e,n,s,r,a,o,l,c,h,d,u,f,p,x,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Or.setFromMatrixColumn(t,0).length(),r=1/Or.setFromMatrixColumn(t,1).length(),a=1/Or.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,f=a*d,p=o*h,x=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+p*c,e[5]=u-x*c,e[9]=-o*l,e[2]=x-u*c,e[6]=p+f*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,p=c*h,x=c*d;e[0]=u+x*o,e[4]=p*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-p,e[6]=x+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,p=c*h,x=c*d;e[0]=u-x*o,e[4]=-a*d,e[8]=p+f*o,e[1]=f+p*o,e[5]=a*h,e[9]=x-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,f=a*d,p=o*h,x=o*d;e[0]=l*h,e[4]=p*c-f,e[8]=u*c+x,e[1]=l*d,e[5]=x*c+u,e[9]=f*c-p,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,f=a*c,p=o*l,x=o*c;e[0]=l*h,e[4]=x-u*d,e[8]=p*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+p,e[10]=u-x*d}else if(t.order==="XZY"){let u=a*l,f=a*c,p=o*l,x=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+x,e[5]=a*h,e[9]=f*d-p,e[2]=p*d-f,e[6]=o*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(q_,t,Y_)}lookAt(t,e,n){let s=this.elements;return Gn.subVectors(t,e),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),us.crossVectors(n,Gn),us.lengthSq()===0&&(Math.abs(n.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),us.crossVectors(n,Gn)),us.normalize(),qc.crossVectors(Gn,us),s[0]=us.x,s[4]=qc.x,s[8]=Gn.x,s[1]=us.y,s[5]=qc.y,s[9]=Gn.y,s[2]=us.z,s[6]=qc.z,s[10]=Gn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],p=n[2],x=n[6],g=n[10],m=n[14],v=n[3],b=n[7],y=n[11],E=n[15],w=s[0],A=s[4],_=s[8],T=s[12],C=s[1],L=s[5],B=s[9],z=s[13],P=s[2],k=s[6],H=s[10],W=s[14],ct=s[3],$=s[7],ot=s[11],O=s[15];return r[0]=a*w+o*C+l*P+c*ct,r[4]=a*A+o*L+l*k+c*$,r[8]=a*_+o*B+l*H+c*ot,r[12]=a*T+o*z+l*W+c*O,r[1]=h*w+d*C+u*P+f*ct,r[5]=h*A+d*L+u*k+f*$,r[9]=h*_+d*B+u*H+f*ot,r[13]=h*T+d*z+u*W+f*O,r[2]=p*w+x*C+g*P+m*ct,r[6]=p*A+x*L+g*k+m*$,r[10]=p*_+x*B+g*H+m*ot,r[14]=p*T+x*z+g*W+m*O,r[3]=v*w+b*C+y*P+E*ct,r[7]=v*A+b*L+y*k+E*$,r[11]=v*_+b*B+y*H+E*ot,r[15]=v*T+b*z+y*W+E*O,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],p=t[3],x=t[7],g=t[11],m=t[15],v=l*f-c*u,b=o*f-c*d,y=o*u-l*d,E=a*f-c*h,w=a*u-l*h,A=a*d-o*h;return e*(x*v-g*b+m*y)-n*(p*v-g*E+m*w)+s*(p*b-x*E+m*A)-r*(p*y-x*w+g*A)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],p=t[12],x=t[13],g=t[14],m=t[15],v=e*o-n*a,b=e*l-s*a,y=e*c-r*a,E=n*l-s*o,w=n*c-r*o,A=s*c-r*l,_=h*x-d*p,T=h*g-u*p,C=h*m-f*p,L=d*g-u*x,B=d*m-f*x,z=u*m-f*g,P=v*z-b*B+y*L+E*C-w*T+A*_;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/P;return t[0]=(o*z-l*B+c*L)*k,t[1]=(s*B-n*z-r*L)*k,t[2]=(x*A-g*w+m*E)*k,t[3]=(u*w-d*A-f*E)*k,t[4]=(l*C-a*z-c*T)*k,t[5]=(e*z-s*C+r*T)*k,t[6]=(g*y-p*A-m*b)*k,t[7]=(h*A-u*y+f*b)*k,t[8]=(a*B-o*C+c*_)*k,t[9]=(n*C-e*B-r*_)*k,t[10]=(p*w-x*y+m*v)*k,t[11]=(d*y-h*w-f*v)*k,t[12]=(o*T-a*L-l*_)*k,t[13]=(e*L-n*T+s*_)*k,t[14]=(x*b-p*E-g*v)*k,t[15]=(h*E-d*b+u*v)*k,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,p=r*d,x=a*h,g=a*d,m=o*d,v=l*c,b=l*h,y=l*d,E=n.x,w=n.y,A=n.z;return s[0]=(1-(x+m))*E,s[1]=(f+y)*E,s[2]=(p-b)*E,s[3]=0,s[4]=(f-y)*w,s[5]=(1-(u+m))*w,s[6]=(g+v)*w,s[7]=0,s[8]=(p+b)*A,s[9]=(g-v)*A,s[10]=(1-(u+x))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Or.set(s[0],s[1],s[2]).length(),o=Or.set(s[4],s[5],s[6]).length(),l=Or.set(s[8],s[9],s[10]).length();r<0&&(a=-a),ri.copy(this);let c=1/a,h=1/o,d=1/l;return ri.elements[0]*=c,ri.elements[1]*=c,ri.elements[2]*=c,ri.elements[4]*=h,ri.elements[5]*=h,ri.elements[6]*=h,ri.elements[8]*=d,ri.elements[9]*=d,ri.elements[10]*=d,e.setFromRotationMatrix(ri),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=Un,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),p,x;if(l)p=r/(a-r),x=a*r/(a-r);else if(o===Un)p=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Ms)p=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Un,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s),p,x;if(l)p=1/(a-r),x=a/(a-r);else if(o===Un)p=-2/(a-r),x=-(a+r)/(a-r);else if(o===Ms)p=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Or=new I,ri=new se,q_=new I(0,0,0),Y_=new I(1,1,1),us=new I,qc=new I,Gn=new I,cm=new se,hm=new Fe,ei=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ie(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ie(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ie(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return cm.makeRotationFromQuaternion(t),this.setFromRotationMatrix(cm,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return hm.setFromEuler(this),this.setFromQuaternion(hm,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ei.DEFAULT_ORDER="XYZ";var er=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Z_=0,um=new I,Br=new Fe,Ni=new se,Yc=new I,co=new I,$_=new I,J_=new Fe,dm=new I(1,0,0),fm=new I(0,1,0),pm=new I(0,0,1),mm={type:"added"},K_={type:"removed"},kr={type:"childadded",child:null},Pd={type:"childremoved",child:null},ge=class i extends Fn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Z_++}),this.uuid=Wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new I,e=new ei,n=new Fe,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new se},normalMatrix:{value:new ae}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new er,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Br.setFromAxisAngle(t,e),this.quaternion.multiply(Br),this}rotateOnWorldAxis(t,e){return Br.setFromAxisAngle(t,e),this.quaternion.premultiply(Br),this}rotateX(t){return this.rotateOnAxis(dm,t)}rotateY(t){return this.rotateOnAxis(fm,t)}rotateZ(t){return this.rotateOnAxis(pm,t)}translateOnAxis(t,e){return um.copy(t).applyQuaternion(this.quaternion),this.position.add(um.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(dm,t)}translateY(t){return this.translateOnAxis(fm,t)}translateZ(t){return this.translateOnAxis(pm,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ni.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Yc.copy(t):Yc.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ni.lookAt(co,Yc,this.up):Ni.lookAt(Yc,co,this.up),this.quaternion.setFromRotationMatrix(Ni),s&&(Ni.extractRotation(s.matrixWorld),Br.setFromRotationMatrix(Ni),this.quaternion.premultiply(Br.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Jt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(mm),kr.child=t,this.dispatchEvent(kr),kr.child=null):Jt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(K_),Pd.child=t,this.dispatchEvent(Pd),Pd.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ni.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ni.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ni),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(mm),kr.child=t,this.dispatchEvent(kr),kr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,t,$_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,J_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),p=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};ge.DEFAULT_UP=new I(0,1,0);ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var qe=class extends ge{constructor(){super(),this.isGroup=!0,this.type="Group"}},j_={type:"move"},nr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(j_)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new qe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},d0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ds={h:0,s:0,l:0},Zc={h:0,s:0,l:0};function Ld(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var kt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ln){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,me.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=me.workingColorSpace){return this.r=t,this.g=e,this.b=n,me.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=me.workingColorSpace){if(t=ap(t,1),e=ie(e,0,1),n=ie(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ld(a,r,t+1/3),this.g=Ld(a,r,t),this.b=Ld(a,r,t-1/3)}return me.colorSpaceToWorking(this,s),this}setStyle(t,e=ln){function n(r){r!==void 0&&parseFloat(r)<1&&Lt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Lt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Lt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ln){let n=d0[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Lt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Vi(t.r),this.g=Vi(t.g),this.b=Vi(t.b),this}copyLinearToSRGB(t){return this.r=ia(t.r),this.g=ia(t.g),this.b=ia(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ln){return me.workingToColorSpace(_n.copy(this),t),Math.round(ie(_n.r*255,0,255))*65536+Math.round(ie(_n.g*255,0,255))*256+Math.round(ie(_n.b*255,0,255))}getHexString(t=ln){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=me.workingColorSpace){me.workingToColorSpace(_n.copy(this),e);let n=_n.r,s=_n.g,r=_n.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=me.workingColorSpace){return me.workingToColorSpace(_n.copy(this),e),t.r=_n.r,t.g=_n.g,t.b=_n.b,t}getStyle(t=ln){me.workingToColorSpace(_n.copy(this),t);let e=_n.r,n=_n.g,s=_n.b;return t!==ln?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ds),this.setHSL(ds.h+t,ds.s+e,ds.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ds),t.getHSL(Zc);let n=Eo(ds.h,Zc.h,e),s=Eo(ds.s,Zc.s,e),r=Eo(ds.l,Zc.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},_n=new kt;kt.NAMES=d0;var ko=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new kt(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},ir=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new kt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Gi=class extends ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ei,this.environmentIntensity=1,this.environmentRotation=new ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ai=new I,Ui=new I,Dd=new I,Fi=new I,zr=new I,Vr=new I,gm=new I,Nd=new I,Ud=new I,Fd=new I,Od=new Ee,Bd=new Ee,kd=new Ee,ci=class i{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ai.subVectors(t,e),s.cross(ai);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ai.subVectors(s,e),Ui.subVectors(n,e),Dd.subVectors(t,e);let a=ai.dot(ai),o=ai.dot(Ui),l=ai.dot(Dd),c=Ui.dot(Ui),h=Ui.dot(Dd),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,p=(a*h-o*l)*u;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Fi.x),l.addScaledVector(a,Fi.y),l.addScaledVector(o,Fi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Od.setScalar(0),Bd.setScalar(0),kd.setScalar(0),Od.fromBufferAttribute(t,e),Bd.fromBufferAttribute(t,n),kd.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Od,r.x),a.addScaledVector(Bd,r.y),a.addScaledVector(kd,r.z),a}static isFrontFacing(t,e,n,s){return ai.subVectors(n,e),Ui.subVectors(t,e),ai.cross(Ui).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ai.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),ai.cross(Ui).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;zr.subVectors(s,n),Vr.subVectors(r,n),Nd.subVectors(t,n);let l=zr.dot(Nd),c=Vr.dot(Nd);if(l<=0&&c<=0)return e.copy(n);Ud.subVectors(t,s);let h=zr.dot(Ud),d=Vr.dot(Ud);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(zr,a);Fd.subVectors(t,r);let f=zr.dot(Fd),p=Vr.dot(Fd);if(p>=0&&f<=p)return e.copy(r);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return o=c/(c-p),e.copy(n).addScaledVector(Vr,o);let g=h*p-f*d;if(g<=0&&d-h>=0&&f-p>=0)return gm.subVectors(r,s),o=(d-h)/(d-h+(f-p)),e.copy(s).addScaledVector(gm,o);let m=1/(g+x+u);return a=x*m,o=u*m,e.copy(n).addScaledVector(zr,a).addScaledVector(Vr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ke=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(oi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(oi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=oi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,oi):oi.fromBufferAttribute(r,a),oi.applyMatrix4(t.matrixWorld),this.expandByPoint(oi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),$c.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$c.copy(n.boundingBox)),$c.applyMatrix4(t.matrixWorld),this.union($c)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,oi),oi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ho),Jc.subVectors(this.max,ho),Gr.subVectors(t.a,ho),Hr.subVectors(t.b,ho),Wr.subVectors(t.c,ho),fs.subVectors(Hr,Gr),ps.subVectors(Wr,Hr),Bs.subVectors(Gr,Wr);let e=[0,-fs.z,fs.y,0,-ps.z,ps.y,0,-Bs.z,Bs.y,fs.z,0,-fs.x,ps.z,0,-ps.x,Bs.z,0,-Bs.x,-fs.y,fs.x,0,-ps.y,ps.x,0,-Bs.y,Bs.x,0];return!zd(e,Gr,Hr,Wr,Jc)||(e=[1,0,0,0,1,0,0,0,1],!zd(e,Gr,Hr,Wr,Jc))?!1:(Kc.crossVectors(fs,ps),e=[Kc.x,Kc.y,Kc.z],zd(e,Gr,Hr,Wr,Jc))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,oi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(oi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Oi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Oi=[new I,new I,new I,new I,new I,new I,new I,new I],oi=new I,$c=new Ke,Gr=new I,Hr=new I,Wr=new I,fs=new I,ps=new I,Bs=new I,ho=new I,Jc=new I,Kc=new I,ks=new I;function zd(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ks.fromArray(i,r);let o=s.x*Math.abs(ks.x)+s.y*Math.abs(ks.y)+s.z*Math.abs(ks.z),l=t.dot(ks),c=e.dot(ks),h=n.dot(ks);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var zi=Q_();function Q_(){let i=new ArrayBuffer(4),t=new Float32Array(i),e=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function Nn(i){Math.abs(i)>65504&&Lt("DataUtils.toHalfFloat(): Value out of range."),i=ie(i,-65504,65504),zi.floatView[0]=i;let t=zi.uint32View[0],e=t>>23&511;return zi.baseTable[e]+((t&8388607)>>zi.shiftTable[e])}function So(i){let t=i>>10;return zi.uint32View[0]=zi.mantissaTable[zi.offsetTable[t]+(i&1023)]+zi.exponentTable[t],zi.floatView[0]}var Hi=class{static toHalfFloat(t){return Nn(t)}static fromHalfFloat(t){return So(t)}},Xe=new I,jc=new ut,tx=0,Te=class extends Fn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:tx++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Sc,this.updateRanges=[],this.gpuType=je,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)jc.fromBufferAttribute(this,e),jc.applyMatrix3(t),this.setXY(e,jc.x,jc.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix3(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix4(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyNormalMatrix(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.transformDirection(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Tn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ue(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Tn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Tn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Tn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Tn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array),r=ue(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}},zh=class extends Te{constructor(t,e,n){super(new Int8Array(t),e,n)}},Vh=class extends Te{constructor(t,e,n){super(new Uint8Array(t),e,n)}},Gh=class extends Te{constructor(t,e,n){super(new Uint8ClampedArray(t),e,n)}},Hh=class extends Te{constructor(t,e,n){super(new Int16Array(t),e,n)}},ua=class extends Te{constructor(t,e,n){super(new Uint16Array(t),e,n)}},Wh=class extends Te{constructor(t,e,n){super(new Int32Array(t),e,n)}},da=class extends Te{constructor(t,e,n){super(new Uint32Array(t),e,n)}},Xh=class extends Te{constructor(t,e,n){super(new Uint16Array(t),e,n),this.isFloat16BufferAttribute=!0}getX(t){let e=So(this.array[t*this.itemSize]);return this.normalized&&(e=Tn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize]=Nn(e),this}getY(t){let e=So(this.array[t*this.itemSize+1]);return this.normalized&&(e=Tn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+1]=Nn(e),this}getZ(t){let e=So(this.array[t*this.itemSize+2]);return this.normalized&&(e=Tn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+2]=Nn(e),this}getW(t){let e=So(this.array[t*this.itemSize+3]);return this.normalized&&(e=Tn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+3]=Nn(e),this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array)),this.array[t+0]=Nn(e),this.array[t+1]=Nn(n),this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array)),this.array[t+0]=Nn(e),this.array[t+1]=Nn(n),this.array[t+2]=Nn(s),this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array),r=ue(r,this.array)),this.array[t+0]=Nn(e),this.array[t+1]=Nn(n),this.array[t+2]=Nn(s),this.array[t+3]=Nn(r),this}},Vt=class extends Te{constructor(t,e,n){super(new Float32Array(t),e,n)}},ex=new Ke,uo=new I,Vd=new I,Ye=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):ex.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;uo.subVectors(t,this.center);let e=uo.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(uo,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Vd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(uo.copy(t.center).add(Vd)),this.expandByPoint(uo.copy(t.center).sub(Vd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},nx=0,jn=new se,Gd=new ge,Xr=new I,Hn=new Ke,fo=new Ke,sn=new I,re=class i extends Fn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nx++}),this.uuid=Wn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(T_(t)?da:ua)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ae().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return jn.makeRotationFromQuaternion(t),this.applyMatrix4(jn),this}rotateX(t){return jn.makeRotationX(t),this.applyMatrix4(jn),this}rotateY(t){return jn.makeRotationY(t),this.applyMatrix4(jn),this}rotateZ(t){return jn.makeRotationZ(t),this.applyMatrix4(jn),this}translate(t,e,n){return jn.makeTranslation(t,e,n),this.applyMatrix4(jn),this}scale(t,e,n){return jn.makeScale(t,e,n),this.applyMatrix4(jn),this}lookAt(t){return Gd.lookAt(t),Gd.updateMatrix(),this.applyMatrix4(Gd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xr).negate(),this.translate(Xr.x,Xr.y,Xr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Vt(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ke);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Jt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Hn.setFromBufferAttribute(r),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,Hn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,Hn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(Hn.min),this.boundingBox.expandByPoint(Hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Jt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ye);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Jt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(Hn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];fo.setFromBufferAttribute(o),this.morphTargetsRelative?(sn.addVectors(Hn.min,fo.min),Hn.expandByPoint(sn),sn.addVectors(Hn.max,fo.max),Hn.expandByPoint(sn)):(Hn.expandByPoint(fo.min),Hn.expandByPoint(fo.max))}Hn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)sn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(sn));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)sn.fromBufferAttribute(o,c),l&&(Xr.fromBufferAttribute(t,c),sn.add(Xr)),s=Math.max(s,n.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Jt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Jt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Te(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new I,l[_]=new I;let c=new I,h=new I,d=new I,u=new ut,f=new ut,p=new ut,x=new I,g=new I;function m(_,T,C){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,T),d.fromBufferAttribute(n,C),u.fromBufferAttribute(r,_),f.fromBufferAttribute(r,T),p.fromBufferAttribute(r,C),h.sub(c),d.sub(c),f.sub(u),p.sub(u);let L=1/(f.x*p.y-p.x*f.y);isFinite(L)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(L),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(L),o[_].add(x),o[T].add(x),o[C].add(x),l[_].add(g),l[T].add(g),l[C].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let _=0,T=v.length;_<T;++_){let C=v[_],L=C.start,B=C.count;for(let z=L,P=L+B;z<P;z+=3)m(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let b=new I,y=new I,E=new I,w=new I;function A(_){E.fromBufferAttribute(s,_),w.copy(E);let T=o[_];b.copy(T),b.sub(E.multiplyScalar(E.dot(T))).normalize(),y.crossVectors(w,T);let L=y.dot(l[_])<0?-1:1;a.setXYZW(_,b.x,b.y,b.z,L)}for(let _=0,T=v.length;_<T;++_){let C=v[_],L=C.start,B=C.count;for(let z=L,P=L+B;z<P;z+=3)A(t.getX(z+0)),A(t.getX(z+1)),A(t.getX(z+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Te(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,d=new I;if(t)for(let u=0,f=t.count;u<f;u+=3){let p=t.getX(u+0),x=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,g),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)sn.fromBufferAttribute(t,e),sn.normalize(),t.setXYZ(e,sn.x,sn.y,sn.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,p=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let m=0;m<h;m++)u[p++]=c[f++]}return new Te(u,h,d)}if(this.index===null)return Lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},sr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Sc,this.updateRanges=[],this.version=0,this.uuid=Wn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},wn=new I,bs=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)wn.fromBufferAttribute(this,e),wn.applyMatrix4(t),this.setXYZ(e,wn.x,wn.y,wn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)wn.fromBufferAttribute(this,e),wn.applyNormalMatrix(t),this.setXYZ(e,wn.x,wn.y,wn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)wn.fromBufferAttribute(this,e),wn.transformDirection(t),this.setXYZ(e,wn.x,wn.y,wn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Tn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ue(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Tn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Tn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Tn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Tn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array),r=ue(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){ca("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Te(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ca("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Hd=new I,ix=new I,sx=new ae,yn=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Hd.subVectors(n,e).cross(ix.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Hd),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||sx.getNormalMatrix(t),s=this.coplanarPoint(Hd).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},rx=0,Ze=class extends Fn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rx++}),this.uuid=Wn(),this.name="",this.type="Material",this.blending=wr,this.side=Qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vu,this.blendDst=Gu,this.blendEquation=Ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=To,this.stencilZFail=To,this.stencilZPass=To,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Lt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Lt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new kt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new yn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ut().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ut().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ws=class extends Ze{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},qr,po=new I,Yr=new I,Zr=new I,$r=new ut,mo=new ut,f0=new se,Qc=new I,go=new I,th=new I,_m=new ut,Wd=new ut,xm=new ut,rr=class extends ge{constructor(t=new ws){if(super(),this.isSprite=!0,this.type="Sprite",qr===void 0){qr=new re;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new sr(e,5);qr.setIndex([0,1,2,0,2,3]),qr.setAttribute("position",new bs(n,3,0,!1)),qr.setAttribute("uv",new bs(n,2,3,!1))}this.geometry=qr,this.material=t,this.center=new ut(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Jt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Yr.setFromMatrixScale(this.matrixWorld),f0.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Zr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Yr.multiplyScalar(-Zr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;eh(Qc.set(-.5,-.5,0),Zr,a,Yr,s,r),eh(go.set(.5,-.5,0),Zr,a,Yr,s,r),eh(th.set(.5,.5,0),Zr,a,Yr,s,r),_m.set(0,0),Wd.set(1,0),xm.set(1,1);let o=t.ray.intersectTriangle(Qc,go,th,!1,po);if(o===null&&(eh(go.set(-.5,.5,0),Zr,a,Yr,s,r),Wd.set(0,1),o=t.ray.intersectTriangle(Qc,th,go,!1,po),o===null))return;let l=t.ray.origin.distanceTo(po);l<t.near||l>t.far||e.push({distance:l,point:po.clone(),uv:ci.getInterpolation(po,Qc,go,th,_m,Wd,xm,new ut),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function eh(i,t,e,n,s,r){$r.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(mo.x=r*$r.x-s*$r.y,mo.y=s*$r.x+r*$r.y):mo.copy($r),i.copy(t),i.x+=mo.x,i.y+=mo.y,i.applyMatrix4(f0)}var nh=new I,ym=new I,zo=class extends ge{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(t){super.copy(t,!1);let e=t.levels;for(let n=0,s=e.length;n<s;n++){let r=e[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=t.autoUpdate,this}addLevel(t,e=0,n=0){e=Math.abs(e);let s=this.levels,r;for(r=0;r<s.length&&!(e<s[r].distance);r++);return s.splice(r,0,{distance:e,hysteresis:n,object:t}),this.add(t),this}removeLevel(t){let e=this.levels;for(let n=0;n<e.length;n++)if(e[n].distance===t){let s=e.splice(n,1);return this.remove(s[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(t){let e=this.levels;if(e.length>0){let n,s;for(n=1,s=e.length;n<s;n++){let r=e[n].distance;if(e[n].object.visible&&(r-=r*e[n].hysteresis),t<r)break}return e[n-1].object}return null}raycast(t,e){if(this.levels.length>0){nh.setFromMatrixPosition(this.matrixWorld);let s=t.ray.origin.distanceTo(nh);this.getObjectForDistance(s).raycast(t,e)}}update(t){let e=this.levels;if(e.length>1){nh.setFromMatrixPosition(t.matrixWorld),ym.setFromMatrixPosition(this.matrixWorld);let n=nh.distanceTo(ym)/t.zoom;e[0].object.visible=!0;let s,r;for(s=1,r=e.length;s<r;s++){let a=e[s].distance;if(e[s].object.visible&&(a-=a*e[s].hysteresis),n>=a)e[s-1].object.visible=!1,e[s].object.visible=!0;else break}for(this._currentLevel=s-1;s<r;s++)e[s].object.visible=!1}}toJSON(t){let e=super.toJSON(t);e.object.autoUpdate=this.autoUpdate,e.object.levels=[];let n=this.levels;for(let s=0,r=n.length;s<r;s++){let a=n[s];e.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return e}},Bi=new I,Xd=new I,ih=new I,sh=new I,di=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Bi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Bi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Bi.copy(this.origin).addScaledVector(this.direction,e),Bi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Xd.copy(t).add(e).multiplyScalar(.5),ih.copy(e).sub(t).normalize(),sh.copy(this.origin).sub(Xd);let r=t.distanceTo(e)*.5,a=-this.direction.dot(ih),o=sh.dot(this.direction),l=-sh.dot(ih),c=sh.lengthSq(),h=Math.abs(1-a*a),d,u,f,p;if(h>0)if(d=a*l-o,u=a*o-l,p=r*h,d>=0)if(u>=-p)if(u<=p){let x=1/h;d*=x,u*=x,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Xd).addScaledVector(ih,u),f}intersectSphere(t,e){if(t.radius<0)return null;Bi.subVectors(t.center,this.origin);let n=Bi.dot(this.direction),s=Bi.dot(Bi)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Bi)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,p=e.x-a.x,x=e.y-a.y,g=e.z-a.z,m=n.x-a.x,v=n.y-a.y,b=n.z-a.z,y=Math.abs(l),E=Math.abs(c),w=Math.abs(h),A,_,T,C,L,B,z,P,k,H,W,ct;if(y>=E&&y>=w?(T=l,B=d,k=p,ct=m,l>=0?(A=c,_=h,C=u,L=f,z=x,P=g,H=v,W=b):(A=h,_=c,C=f,L=u,z=g,P=x,H=b,W=v)):E>=w?(T=c,B=u,k=x,ct=v,c>=0?(A=h,_=l,C=f,L=d,z=g,P=p,H=b,W=m):(A=l,_=h,C=d,L=f,z=p,P=g,H=m,W=b)):(T=h,B=f,k=g,ct=b,h>=0?(A=l,_=c,C=d,L=u,z=p,P=x,H=m,W=v):(A=c,_=l,C=u,L=d,z=x,P=p,H=v,W=m)),T===0)return null;let $=A/T,ot=_/T,O=1/T,K=C-$*B,lt=L-ot*B,Pt=z-$*k,Dt=P-ot*k,Ut=H-$*ct,q=W-ot*ct,j=Ut*Dt-q*Pt,gt=K*q-lt*Ut,xt=Pt*lt-Dt*K;if(s){if(j<0||gt<0||xt<0)return null}else if((j<0||gt<0||xt<0)&&(j>0||gt>0||xt>0))return null;let _t=j+gt+xt;if(_t===0)return null;let Ot=O*(j*B+gt*k+xt*ct);return(_t>0?Ot<0:Ot>0)?null:this.at(Ot/_t,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},hn=class extends Ze{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=Ba,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},vm=new se,zs=new di,rh=new Ye,Mm=new I,ah=new I,oh=new I,lh=new I,qd=new I,ch=new I,Sm=new I,hh=new I,oe=class extends ge{constructor(t=new re,e=new hn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){ch.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(qd.fromBufferAttribute(d,t),a?ch.addScaledVector(qd,h):ch.addScaledVector(qd.sub(e),h))}e.add(ch)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),rh.copy(n.boundingSphere),rh.applyMatrix4(r),zs.copy(t.ray).recast(t.near),!(rh.containsPoint(zs.origin)===!1&&(zs.intersectSphere(rh,Mm)===null||zs.origin.distanceToSquared(Mm)>(t.far-t.near)**2))&&(vm.copy(r).invert(),zs.copy(t.ray).applyMatrix4(vm),!(n.boundingBox!==null&&zs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,zs)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,x=u.length;p<x;p++){let g=u[p],m=a[g.materialIndex],v=Math.max(g.start,f.start),b=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let y=v,E=b;y<E;y+=3){let w=o.getX(y),A=o.getX(y+1),_=o.getX(y+2);s=uh(this,m,t,n,c,h,d,w,A,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let v=o.getX(g),b=o.getX(g+1),y=o.getX(g+2);s=uh(this,a,t,n,c,h,d,v,b,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,x=u.length;p<x;p++){let g=u[p],m=a[g.materialIndex],v=Math.max(g.start,f.start),b=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=v,E=b;y<E;y+=3){let w=y,A=y+1,_=y+2;s=uh(this,m,t,n,c,h,d,w,A,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let v=g,b=g+1,y=g+2;s=uh(this,a,t,n,c,h,d,v,b,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function ax(i,t,e,n,s,r,a,o){let l;if(t.side===rn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Qi,o),l===null)return null;hh.copy(o),hh.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(hh);return c<e.near||c>e.far?null:{distance:c,point:hh.clone(),object:i}}function uh(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,ah),i.getVertexPosition(l,oh),i.getVertexPosition(c,lh);let h=ax(i,t,e,n,ah,oh,lh,Sm);if(h){let d=new I;ci.getBarycoord(Sm,ah,oh,lh,d),s&&(h.uv=ci.getInterpolatedAttribute(s,o,l,c,d,new ut)),r&&(h.uv1=ci.getInterpolatedAttribute(r,o,l,c,d,new ut)),a&&(h.normal=ci.getInterpolatedAttribute(a,o,l,c,d,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new I,materialIndex:0};ci.getNormal(ah,oh,lh,u.normal),h.face=u,h.barycoord=d}return h}var _o=new Ee,bm=new Ee,wm=new Ee,ox=new Ee,Tm=new se,dh=new I,Yd=new Ye,Em=new se,Zd=new di,Vo=class extends oe{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Uh,this.bindMatrix=new se,this.bindMatrixInverse=new se,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ke),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,dh),this.boundingBox.expandByPoint(dh)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ye),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,dh),this.boundingSphere.expandByPoint(dh)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yd.copy(this.boundingSphere),Yd.applyMatrix4(s),t.ray.intersectsSphere(Yd)!==!1&&(Em.copy(s).invert(),Zd.copy(t.ray).applyMatrix4(Em),!(this.boundingBox!==null&&Zd.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Zd)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new Ee,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);let r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Uh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===qf?this.bindMatrixInverse.copy(this.bindMatrix).invert():Lt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let n=this.skeleton,s=this.geometry;bm.fromBufferAttribute(s.attributes.skinIndex,t),wm.fromBufferAttribute(s.attributes.skinWeight,t),e.isVector4?(_o.copy(e),e.set(0,0,0,0)):(_o.set(...e,1),e.set(0,0,0)),_o.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=wm.getComponent(r);if(a!==0){let o=bm.getComponent(r);Tm.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(ox.copy(_o).applyMatrix4(Tm),a)}}return e.isVector4&&(e.w=_o.w),e.applyMatrix4(this.bindMatrixInverse)}},fa=class extends ge{constructor(){super(),this.isBone=!0,this.type="Bone"}},An=class extends ze{constructor(t=null,e=1,n=1,s,r,a,o,l,c=ke,h=ke,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Am=new se,lx=new se,Go=class i{constructor(t=[],e=[]){this.uuid=Wn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){Lt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new se)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new se;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=t.length;r<a;r++){let o=t[r]?t[r].matrixWorld:lx;Am.multiplyMatrices(o,e[r]),Am.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let n=new An(e,t,t,vn,je);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){let s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){let r=t.bones[n],a=e[r];a===void 0&&(Lt("Skeleton: No bone found with UUID:",r),a=new fa),this.bones.push(a),this.boneInverses.push(new se().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){let t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let s=0,r=e.length;s<r;s++){let a=e[s];t.bones.push(a.uuid);let o=n[s];t.boneInverses.push(o.toArray())}return t}},Wi=class extends Te{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Jr=new se,Cm=new se,fh=[],Rm=new Ke,cx=new se,xo=new oe,yo=new Ye,ar=class extends oe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Wi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,cx)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ke),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Jr),Rm.copy(t.boundingBox).applyMatrix4(Jr),this.boundingBox.union(Rm)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ye),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Jr),yo.copy(t.boundingSphere).applyMatrix4(Jr),this.boundingSphere.union(yo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(xo.geometry=this.geometry,xo.material=this.material,xo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yo.copy(this.boundingSphere),yo.applyMatrix4(n),t.ray.intersectsSphere(yo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Jr),Cm.multiplyMatrices(n,Jr),xo.matrixWorld=Cm,xo.raycast(t,fh);for(let a=0,o=fh.length;a<o;a++){let l=fh[a];l.instanceId=r,l.object=this,e.push(l)}fh.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Wi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new An(new Float32Array(s*this.count),s,this.count,zl,je));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Vs=new Ye,hx=new ut(.5,.5),ph=new I,Ti=class{constructor(t=new yn,e=new yn,n=new yn,s=new yn,r=new yn,a=new yn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Un,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],p=r[8],x=r[9],g=r[10],m=r[11],v=r[12],b=r[13],y=r[14],E=r[15];if(s[0].setComponents(c-a,f-h,m-p,E-v).normalize(),s[1].setComponents(c+a,f+h,m+p,E+v).normalize(),s[2].setComponents(c+o,f+d,m+x,E+b).normalize(),s[3].setComponents(c-o,f-d,m-x,E-b).normalize(),n)s[4].setComponents(l,u,g,y).normalize(),s[5].setComponents(c-l,f-u,m-g,E-y).normalize();else if(s[4].setComponents(c-l,f-u,m-g,E-y).normalize(),e===Un)s[5].setComponents(c+l,f+u,m+g,E+y).normalize();else if(e===Ms)s[5].setComponents(l,u,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Vs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Vs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Vs)}intersectsSprite(t){Vs.center.set(0,0,0);let e=hx.distanceTo(t.center);return Vs.radius=.7071067811865476+e,Vs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Vs)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ph.x=s.normal.x>0?t.max.x:t.min.x,ph.y=s.normal.y>0?t.max.y:t.min.y,ph.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ph)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Im=new se,Ho=class i{constructor(){this.coordinateSystem=Un,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Im.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Ti),n[s].setFromProjectionMatrix(Im,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Ti),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};function $d(i,t){return i-t}function ux(i,t){return i.z-t.z}function dx(i,t){return t.z-i.z}var hf=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(t,e,n,s){let r=this.pool,a=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});let o=r[this.index];a.push(o),this.index++,o.start=t,o.count=e,o.z=n,o.index=s}reset(){this.list.length=0,this.index=0}},Dn=new se,fx=new kt(1,1,1),px=new Ti,mx=new Ho,mh=new Ke,Gs=new Ye,vo=new I,Pm=new I,gx=new I,Jd=new hf,xn=new oe,gh=[];function _x(i,t,e=0){let n=t.itemSize;if(i.isInterleavedBufferAttribute||i.array.constructor!==t.array.constructor){let s=i.count;for(let r=0;r<s;r++)for(let a=0;a<n;a++)t.setComponent(r+e,a,i.getComponent(r,a))}else t.array.set(i.array,e*n);t.needsUpdate=!0}function Hs(i,t){if(i.constructor!==t.constructor){let e=Math.min(i.length,t.length);for(let n=0;n<e;n++)t[n]=i[n]}else{let e=Math.min(i.length,t.length);t.set(new i.constructor(i.buffer,0,e))}}var Wo=class extends oe{constructor(t,e,n=e*2,s){super(new re,s),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=t,this._maxVertexCount=e,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(t),this._multiDrawStarts=new Int32Array(t),this._multiDrawCount=0,this._multiDrawBytesPerElement=1,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let t=Math.sqrt(this._maxInstanceCount*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4),n=new An(e,t,t,vn,je);this._matricesTexture=n}_initIndirectTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);let e=new Uint32Array(t*t),n=new An(e,t,t,Ha,qn);this._indirectTexture=n}_initColorsTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);let e=new Float32Array(t*t*4).fill(1),n=new An(e,t,t,vn,je);n.colorSpace=me.workingColorSpace,this._colorsTexture=n}_initializeGeometry(t){let e=this.geometry,n=this._maxVertexCount,s=this._maxIndexCount;if(this._geometryInitialized===!1){for(let r in t.attributes){let a=t.getAttribute(r),{array:o,itemSize:l,normalized:c}=a,h=new o.constructor(n*l),d=new Te(h,l,c);e.setAttribute(r,d)}if(t.getIndex()!==null){let r=n>65535?new Uint32Array(s):new Uint16Array(s);e.setIndex(new Te(r,1))}this._geometryInitialized=!0}}_validateGeometry(t){let e=this.geometry;if(!!t.getIndex()!=!!e.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(let n in e.attributes){if(!t.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);let s=t.getAttribute(n),r=e.getAttribute(n);if(s.itemSize!==r.itemSize||s.normalized!==r.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(t){let e=this._instanceInfo;if(t<0||t>=e.length||e[t].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${t}. Instance is either out of range or has been deleted.`)}validateGeometryId(t){let e=this._geometryInfo;if(t<0||t>=e.length||e[t].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${t}. Geometry is either out of range or has been deleted.`)}setCustomSort(t){return this.customSort=t,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ke);let t=this.boundingBox,e=this._instanceInfo;t.makeEmpty();for(let n=0,s=e.length;n<s;n++){if(e[n].active===!1)continue;let r=e[n].geometryIndex;this.getMatrixAt(n,Dn),this.getBoundingBoxAt(r,mh).applyMatrix4(Dn),t.union(mh)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ye);let t=this.boundingSphere,e=this._instanceInfo;t.makeEmpty();for(let n=0,s=e.length;n<s;n++){if(e[n].active===!1)continue;let r=e[n].geometryIndex;this.getMatrixAt(n,Dn),this.getBoundingSphereAt(r,Gs).applyMatrix4(Dn),t.union(Gs)}}addInstance(t){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");let n={visible:!0,active:!0,geometryIndex:t},s=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort($d),s=this._availableInstanceIds.shift(),this._instanceInfo[s]=n):(s=this._instanceInfo.length,this._instanceInfo.push(n));let r=this._matricesTexture;Dn.identity().toArray(r.image.data,s*16),r.needsUpdate=!0;let a=this._colorsTexture;return a&&(fx.toArray(a.image.data,s*4),a.needsUpdate=!0),this._visibilityChanged=!0,s}addGeometry(t,e=-1,n=-1){this._initializeGeometry(t),this._validateGeometry(t);let s={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;s.vertexStart=this._nextVertexStart,s.reservedVertexCount=e===-1?t.getAttribute("position").count:e;let a=t.getIndex();if(a!==null&&(s.indexStart=this._nextIndexStart,s.reservedIndexCount=n===-1?a.count:n),s.indexStart!==-1&&s.indexStart+s.reservedIndexCount>this._maxIndexCount||s.vertexStart+s.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort($d),l=this._availableGeometryIds.shift(),r[l]=s):(l=this._geometryCount,this._geometryCount++,r.push(s)),this.setGeometryAt(l,t),this._nextIndexStart=s.indexStart+s.reservedIndexCount,this._nextVertexStart=s.vertexStart+s.reservedVertexCount,l}setGeometryAt(t,e){if(t>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(e);let n=this.geometry,s=n.getIndex()!==null,r=n.getIndex(),a=e.getIndex(),o=this._geometryInfo[t];if(s&&a.count>o.reservedIndexCount||e.attributes.position.count>o.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");let l=o.vertexStart,c=o.reservedVertexCount;o.vertexCount=e.getAttribute("position").count;for(let h in n.attributes){let d=e.getAttribute(h),u=n.getAttribute(h);_x(d,u,l);let f=d.itemSize;for(let p=d.count,x=c;p<x;p++){let g=l+p;for(let m=0;m<f;m++)u.setComponent(g,m,0)}u.needsUpdate=!0,u.addUpdateRange(l*f,c*f)}if(s){let h=o.indexStart,d=o.reservedIndexCount;o.indexCount=e.getIndex().count;for(let u=0;u<a.count;u++)r.setX(h+u,l+a.getX(u));for(let u=a.count,f=d;u<f;u++)r.setX(h+u,l);r.needsUpdate=!0,r.addUpdateRange(h,o.reservedIndexCount)}return o.start=s?o.indexStart:o.vertexStart,o.count=s?o.indexCount:o.vertexCount,o.boundingBox=null,e.boundingBox!==null&&(o.boundingBox=e.boundingBox.clone()),o.boundingSphere=null,e.boundingSphere!==null&&(o.boundingSphere=e.boundingSphere.clone()),this._visibilityChanged=!0,t}deleteGeometry(t){let e=this._geometryInfo;if(t>=e.length||e[t].active===!1)return this;let n=this._instanceInfo;for(let s=0,r=n.length;s<r;s++)n[s].active&&n[s].geometryIndex===t&&this.deleteInstance(s);return e[t].active=!1,this._availableGeometryIds.push(t),this._visibilityChanged=!0,this}deleteInstance(t){return this.validateInstanceId(t),this._instanceInfo[t].active=!1,this._availableInstanceIds.push(t),this._visibilityChanged=!0,this}optimize(){let t=0,e=0,n=this._geometryInfo,s=n.map((a,o)=>o).sort((a,o)=>n[a].vertexStart-n[o].vertexStart),r=this.geometry;for(let a=0,o=n.length;a<o;a++){let l=s[a],c=n[l];if(c.active!==!1){if(r.index!==null){if(c.indexStart!==e){let{indexStart:h,vertexStart:d,reservedIndexCount:u}=c,f=r.index,p=f.array,x=t-d;for(let g=h;g<h+u;g++)p[g]=p[g]+x;f.array.copyWithin(e,h,h+u),f.addUpdateRange(e,u),f.needsUpdate=!0,c.indexStart=e}e+=c.reservedIndexCount}if(c.vertexStart!==t){let{vertexStart:h,reservedVertexCount:d}=c,u=r.attributes;for(let f in u){let p=u[f],{array:x,itemSize:g}=p;x.copyWithin(t*g,h*g,(h+d)*g),p.addUpdateRange(t*g,d*g),p.needsUpdate=!0}c.vertexStart=t}t+=c.reservedVertexCount,c.start=r.index?c.indexStart:c.vertexStart}}return this._nextIndexStart=e,this._nextVertexStart=t,this._visibilityChanged=!0,this}getBoundingBoxAt(t,e){if(t>=this._geometryCount)return null;let n=this.geometry,s=this._geometryInfo[t];if(s.boundingBox===null){let r=new Ke,a=n.index,o=n.attributes.position;for(let l=s.start,c=s.start+s.count;l<c;l++){let h=l;a&&(h=a.getX(h)),r.expandByPoint(vo.fromBufferAttribute(o,h))}s.boundingBox=r}return e.copy(s.boundingBox),e}getBoundingSphereAt(t,e){if(t>=this._geometryCount)return null;let n=this.geometry,s=this._geometryInfo[t];if(s.boundingSphere===null){let r=new Ye;this.getBoundingBoxAt(t,mh),mh.getCenter(r.center);let a=n.index,o=n.attributes.position,l=0;for(let c=s.start,h=s.start+s.count;c<h;c++){let d=c;a&&(d=a.getX(d)),vo.fromBufferAttribute(o,d),l=Math.max(l,r.center.distanceToSquared(vo))}r.radius=Math.sqrt(l),s.boundingSphere=r}return e.copy(s.boundingSphere),e}setMatrixAt(t,e){this.validateInstanceId(t);let n=this._matricesTexture,s=this._matricesTexture.image.data;return e.toArray(s,t*16),n.needsUpdate=!0,this}getMatrixAt(t,e){return this.validateInstanceId(t),e.fromArray(this._matricesTexture.image.data,t*16)}setColorAt(t,e){return this.validateInstanceId(t),this._colorsTexture===null&&this._initColorsTexture(),e.toArray(this._colorsTexture.image.data,t*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(t,e){return this.validateInstanceId(t),this._colorsTexture===null?e.isVector4?e.set(1,1,1,1):e.setRGB(1,1,1):e.fromArray(this._colorsTexture.image.data,t*4)}setVisibleAt(t,e){return this.validateInstanceId(t),this._instanceInfo[t].visible===e?this:(this._instanceInfo[t].visible=e,this._visibilityChanged=!0,this)}getVisibleAt(t){return this.validateInstanceId(t),this._instanceInfo[t].visible}setGeometryIdAt(t,e){return this.validateInstanceId(t),this.validateGeometryId(e),this._instanceInfo[t].geometryIndex=e,this._visibilityChanged=!0,this}getGeometryIdAt(t){return this.validateInstanceId(t),this._instanceInfo[t].geometryIndex}getGeometryRangeAt(t,e={}){this.validateGeometryId(t);let n=this._geometryInfo[t];return e.vertexStart=n.vertexStart,e.vertexCount=n.vertexCount,e.reservedVertexCount=n.reservedVertexCount,e.indexStart=n.indexStart,e.indexCount=n.indexCount,e.reservedIndexCount=n.reservedIndexCount,e.start=n.start,e.count=n.count,e}setInstanceCount(t){let e=this._availableInstanceIds,n=this._instanceInfo;for(e.sort($d);e[e.length-1]===n.length-1;)n.pop(),e.pop();if(t<n.length)throw new Error(`THREE.BatchedMesh: Instance ids outside the range ${t} are being used. Cannot shrink instance count.`);let s=new Int32Array(t),r=new Int32Array(t);Hs(this._multiDrawCounts,s),Hs(this._multiDrawStarts,r),this._multiDrawCounts=s,this._multiDrawStarts=r,this._maxInstanceCount=t;let a=this._indirectTexture,o=this._matricesTexture,l=this._colorsTexture;a.dispose(),this._initIndirectTexture(),Hs(a.image.data,this._indirectTexture.image.data),o.dispose(),this._initMatricesTexture(),Hs(o.image.data,this._matricesTexture.image.data),l&&(l.dispose(),this._initColorsTexture(),Hs(l.image.data,this._colorsTexture.image.data))}setGeometrySize(t,e){let n=[...this._geometryInfo].filter(o=>o.active);if(Math.max(...n.map(o=>o.vertexStart+o.reservedVertexCount))>t)throw new Error(`THREE.BatchedMesh: Geometry vertex values are being used outside the range ${e}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(l=>l.indexStart+l.reservedIndexCount))>e)throw new Error(`THREE.BatchedMesh: Geometry index values are being used outside the range ${e}. Cannot shrink further.`);let r=this.geometry;r.dispose(),this._maxVertexCount=t,this._maxIndexCount=e,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new re,this._initializeGeometry(r));let a=this.geometry;r.index&&Hs(r.index.array,a.index.array);for(let o in r.attributes)Hs(r.attributes[o].array,a.attributes[o].array)}raycast(t,e){let n=this._instanceInfo,s=this._geometryInfo,r=this.matrixWorld,a=this.geometry;xn.material=this.material,xn.geometry.index=a.index,xn.geometry.attributes=a.attributes,xn.geometry.boundingBox===null&&(xn.geometry.boundingBox=new Ke),xn.geometry.boundingSphere===null&&(xn.geometry.boundingSphere=new Ye);for(let o=0,l=n.length;o<l;o++){if(!n[o].visible||!n[o].active)continue;let c=n[o].geometryIndex,h=s[c];xn.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(o,xn.matrixWorld).premultiply(r),this.getBoundingBoxAt(c,xn.geometry.boundingBox),this.getBoundingSphereAt(c,xn.geometry.boundingSphere),xn.raycast(t,gh);for(let d=0,u=gh.length;d<u;d++){let f=gh[d];f.object=this,f.batchId=o,e.push(f)}gh.length=0}xn.material=null,xn.geometry.index=null,xn.geometry.attributes={},xn.geometry.setDrawRange(0,1/0)}copy(t){return super.copy(t),this.geometry=t.geometry.clone(),this.perObjectFrustumCulled=t.perObjectFrustumCulled,this.sortObjects=t.sortObjects,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this._geometryInfo=t._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox!==null?e.boundingBox.clone():null,boundingSphere:e.boundingSphere!==null?e.boundingSphere.clone():null})),this._instanceInfo=t._instanceInfo.map(e=>({...e})),this._availableInstanceIds=t._availableInstanceIds.slice(),this._availableGeometryIds=t._availableGeometryIds.slice(),this._nextIndexStart=t._nextIndexStart,this._nextVertexStart=t._nextVertexStart,this._geometryCount=t._geometryCount,this._maxInstanceCount=t._maxInstanceCount,this._maxVertexCount=t._maxVertexCount,this._maxIndexCount=t._maxIndexCount,this._geometryInitialized=t._geometryInitialized,this._multiDrawCounts=t._multiDrawCounts.slice(),this._multiDrawStarts=t._multiDrawStarts.slice(),this._multiDrawBytesPerElement=t._multiDrawBytesPerElement,this._indirectTexture=t._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=t._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=t._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){super.dispose(),this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(t,e,n,s,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;let a=s.getIndex(),o=a===null?1:a.array.BYTES_PER_ELEMENT,l=1;r.wireframe&&(l=2,o=s.attributes.position.count>65535?4:2);let c=this._instanceInfo,h=this._multiDrawStarts,d=this._multiDrawCounts,u=this._geometryInfo,f=this.perObjectFrustumCulled,p=this._indirectTexture,x=p.image.data,g=n.isArrayCamera?mx:px;f&&(n.isArrayCamera?g.setFromArrayCamera(n):(Dn.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),g.setFromProjectionMatrix(Dn,n.coordinateSystem,n.reversedDepth)));let m=0;if(this.sortObjects){Dn.copy(this.matrixWorld).invert(),vo.setFromMatrixPosition(n.matrixWorld).applyMatrix4(Dn),Pm.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(Dn);for(let y=0,E=c.length;y<E;y++)if(c[y].visible&&c[y].active){let w=c[y].geometryIndex;this.getMatrixAt(y,Dn),this.getBoundingSphereAt(w,Gs).applyMatrix4(Dn);let A=!1;if(f&&(A=!g.intersectsSphere(Gs)),!A){let _=u[w],T=gx.subVectors(Gs.center,vo).dot(Pm);Jd.push(_.start,_.count,T,y)}}let v=Jd.list,b=this.customSort;b===null?v.sort(r.transparent?dx:ux):b.call(this,v,n);for(let y=0,E=v.length;y<E;y++){let w=v[y];h[m]=w.start*o*l,d[m]=w.count*l,x[m]=w.index,m++}Jd.reset()}else for(let v=0,b=c.length;v<b;v++)if(c[v].visible&&c[v].active){let y=c[v].geometryIndex,E=!1;if(f&&(this.getMatrixAt(v,Dn),this.getBoundingSphereAt(y,Gs).applyMatrix4(Dn),E=!g.intersectsSphere(Gs)),!E){let w=u[y];h[m]=w.start*o*l,d[m]=w.count*l,x[m]=v,m++}}p.needsUpdate=!0,this._multiDrawCount=m,this._multiDrawBytesPerElement=o,this._visibilityChanged=!1}onBeforeShadow(t,e,n,s,r,a){this.onBeforeRender(t,null,s,r,a)}},$e=class extends Ze{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},qh=new I,Yh=new I,Lm=new se,Mo=new di,_h=new Ye,Kd=new I,Dm=new I,fi=class extends ge{constructor(t=new re,e=new $e){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)qh.fromBufferAttribute(e,s-1),Yh.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=qh.distanceTo(Yh);t.setAttribute("lineDistance",new Vt(n,1))}else Lt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_h.copy(n.boundingSphere),_h.applyMatrix4(s),_h.radius+=r,t.ray.intersectsSphere(_h)===!1)return;Lm.copy(s).invert(),Mo.copy(t.ray).applyMatrix4(Lm);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let x=f,g=p-1;x<g;x+=c){let m=h.getX(x),v=h.getX(x+1),b=xh(this,t,Mo,l,m,v,x);b&&e.push(b)}if(this.isLineLoop){let x=h.getX(p-1),g=h.getX(f),m=xh(this,t,Mo,l,x,g,p-1);m&&e.push(m)}}else{let f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let x=f,g=p-1;x<g;x+=c){let m=xh(this,t,Mo,l,x,x+1,x);m&&e.push(m)}if(this.isLineLoop){let x=xh(this,t,Mo,l,p-1,f,p-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function xh(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(qh.fromBufferAttribute(o,s),Yh.fromBufferAttribute(o,r),e.distanceSqToSegment(qh,Yh,Kd,Dm)>n)return;Kd.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Kd);if(!(c<t.near||c>t.far))return{distance:c,point:Dm.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Nm=new I,Um=new I,Cn=class extends fi{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Nm.fromBufferAttribute(e,s),Um.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Nm.distanceTo(Um);t.setAttribute("lineDistance",new Vt(n,1))}else Lt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Xo=class extends fi{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},pa=class extends Ze{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Fm=new se,uf=new di,yh=new Ye,vh=new I,qo=class extends ge{constructor(t=new re,e=new pa){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),yh.copy(n.boundingSphere),yh.applyMatrix4(s),yh.radius+=r,t.ray.intersectsSphere(yh)===!1)return;Fm.copy(s).invert(),uf.copy(t.ray).applyMatrix4(Fm);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=u,x=f;p<x;p++){let g=c.getX(p);vh.fromBufferAttribute(d,g),Om(vh,g,l,s,t,e,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let p=u,x=f;p<x;p++)vh.fromBufferAttribute(d,p),Om(vh,p,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Om(i,t,e,n,s,r,a){let o=uf.distanceSqToPoint(i);if(o<e){let l=new I;uf.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Yo=class extends ze{constructor(t,e,n,s,r=Ce,a=Ce,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;let h=this;function d(){h.needsUpdate=!0,h._requestVideoFrameCallbackId=t.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in t&&(this._requestVideoFrameCallbackId=t.requestVideoFrameCallback(d))}clone(){return new this.constructor(this.image).copy(this)}update(){let t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}},Zh=class extends Yo{constructor(t,e,n,s,r,a,o,l){super({},t,e,n,s,r,a,o,l),this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(t){this.image=t,this.needsUpdate=!0}},$h=class extends ze{constructor(t,e){super({width:t,height:e}),this.isFramebufferTexture=!0,this.magFilter=ke,this.minFilter=ke,this.generateMipmaps=!1,this.needsUpdate=!0}},or=class extends ze{constructor(t,e,n,s,r,a,o,l,c,h,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isCompressedTexture=!0,this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}},Jh=class extends or{constructor(t,e,n,s,r,a){super(t,e,n,r,a),this.isCompressedArrayTexture=!0,this.image.depth=s,this.wrapR=En,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},Kh=class extends or{constructor(t,e,n){super(void 0,t[0].width,t[0].height,e,n,gi),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=t}},Ts=class extends ze{constructor(t=[],e=gi,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},lr=class extends ze{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},jh=class extends ze{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isHTMLTexture=!0,this.generateMipmaps=!1,this.needsUpdate=!0;let h=t?t.parentNode:null;h!==null&&"requestPaint"in h&&(h.onpaint=()=>{this.needsUpdate=!0},h.requestPaint())}dispose(){let t=this.image?this.image.parentNode:null;t!==null&&"onpaint"in t&&(t.onpaint=null),super.dispose()}},Xi=class extends ze{constructor(t,e,n=qn,s,r,a,o=ke,l=ke,c,h=ui,d=1){if(h!==ui&&h!==es)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Qn(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Zo=class extends Xi{constructor(t,e=qn,n=gi,s,r,a=ke,o=ke,l,c=ui){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ma=class extends ze{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Xn=class i extends re{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;p("z","y","x",-1,-1,n,e,t,a,r,0),p("z","y","x",1,-1,n,e,-t,a,r,1),p("x","z","y",1,1,t,n,e,s,a,2),p("x","z","y",1,-1,t,n,-e,s,a,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Vt(c,3)),this.setAttribute("normal",new Vt(h,3)),this.setAttribute("uv",new Vt(d,2));function p(x,g,m,v,b,y,E,w,A,_,T){let C=y/A,L=E/_,B=y/2,z=E/2,P=w/2,k=A+1,H=_+1,W=0,ct=0,$=new I;for(let ot=0;ot<H;ot++){let O=ot*L-z;for(let K=0;K<k;K++){let lt=K*C-B;$[x]=lt*v,$[g]=O*b,$[m]=P,c.push($.x,$.y,$.z),$[x]=0,$[g]=0,$[m]=w>0?1:-1,h.push($.x,$.y,$.z),d.push(K/A),d.push(1-ot/_),W+=1}}for(let ot=0;ot<_;ot++)for(let O=0;O<A;O++){let K=u+O+k*ot,lt=u+O+k*(ot+1),Pt=u+(O+1)+k*(ot+1),Dt=u+(O+1)+k*ot;l.push(K,lt,Dt),l.push(lt,Pt,Dt),ct+=6}o.addGroup(f,ct,T),f+=ct,u+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},$o=class i extends re{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=e/2,d=Math.PI/2*t,u=e,f=2*d+u,p=n*2+r,x=s+1,g=new I,m=new I;for(let v=0;v<=p;v++){let b=0,y=0,E=0,w=0;if(v<=n){let T=v/n,C=T*Math.PI/2;y=-h-t*Math.cos(C),E=t*Math.sin(C),w=-t*Math.cos(C),b=T*d}else if(v<=n+r){let T=(v-n)/r;y=-h+T*e,E=t,w=0,b=d+T*u}else{let T=(v-n-r)/n,C=T*Math.PI/2;y=h+t*Math.sin(C),E=t*Math.cos(C),w=t*Math.sin(C),b=d+u+T*d}let A=Math.max(0,Math.min(1,b/f)),_=0;v===0?_=.5/s:v===p&&(_=-.5/s);for(let T=0;T<=s;T++){let C=T/s,L=C*Math.PI*2,B=Math.sin(L),z=Math.cos(L);m.x=-E*z,m.y=y,m.z=E*B,o.push(m.x,m.y,m.z),g.set(-E*z,w,E*B),g.normalize(),l.push(g.x,g.y,g.z),c.push(C+_,A)}if(v>0){let T=(v-1)*x;for(let C=0;C<s;C++){let L=T+C,B=T+C+1,z=v*x+C,P=v*x+C+1;a.push(L,B,z),a.push(B,P,z)}}}this.setIndex(a),this.setAttribute("position",new Vt(o,3)),this.setAttribute("normal",new Vt(l,3)),this.setAttribute("uv",new Vt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},cr=class i extends re{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new I,h=new ut;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=n+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Vt(a,3)),this.setAttribute("normal",new Vt(o,3)),this.setAttribute("uv",new Vt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ei=class i extends re{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],p=0,x=[],g=n/2,m=0;v(),a===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new Vt(d,3)),this.setAttribute("normal",new Vt(u,3)),this.setAttribute("uv",new Vt(f,2));function v(){let y=new I,E=new I,w=0,A=(e-t)/n;for(let _=0;_<=r;_++){let T=[],C=_/r,L=C*(e-t)+t;for(let B=0;B<=s;B++){let z=B/s,P=z*l+o,k=Math.sin(P),H=Math.cos(P);E.x=L*k,E.y=-C*n+g,E.z=L*H,d.push(E.x,E.y,E.z),y.set(k,A,H).normalize(),u.push(y.x,y.y,y.z),f.push(z,1-C),T.push(p++)}x.push(T)}for(let _=0;_<s;_++)for(let T=0;T<r;T++){let C=x[T][_],L=x[T+1][_],B=x[T+1][_+1],z=x[T][_+1];(t>0||T!==0)&&(h.push(C,L,z),w+=3),(e>0||T!==r-1)&&(h.push(L,B,z),w+=3)}c.addGroup(m,w,0),m+=w}function b(y){let E=p,w=new ut,A=new I,_=0,T=y===!0?t:e,C=y===!0?1:-1;for(let B=1;B<=s;B++)d.push(0,g*C,0),u.push(0,C,0),f.push(.5,.5),p++;let L=p;for(let B=0;B<=s;B++){let P=B/s*l+o,k=Math.cos(P),H=Math.sin(P);A.x=T*H,A.y=g*C,A.z=T*k,d.push(A.x,A.y,A.z),u.push(0,C,0),w.x=k*.5+.5,w.y=H*.5*C+.5,f.push(w.x,w.y),p++}for(let B=0;B<s;B++){let z=E+B,P=L+B;y===!0?h.push(P,P+1,z):h.push(P+1,P,z),_+=3}c.addGroup(m,_,y===!0?1:2),m+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ga=class i extends Ei{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},qi=class i extends re{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new Vt(r,3)),this.setAttribute("normal",new Vt(r.slice(),3)),this.setAttribute("uv",new Vt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let b=new I,y=new I,E=new I;for(let w=0;w<e.length;w+=3)f(e[w+0],b),f(e[w+1],y),f(e[w+2],E),l(b,y,E,v)}function l(v,b,y,E){let w=E+1,A=[];for(let _=0;_<=w;_++){A[_]=[];let T=v.clone().lerp(y,_/w),C=b.clone().lerp(y,_/w),L=w-_;for(let B=0;B<=L;B++)B===0&&_===w?A[_][B]=T:A[_][B]=T.clone().lerp(C,B/L)}for(let _=0;_<w;_++)for(let T=0;T<2*(w-_)-1;T++){let C=Math.floor(T/2);T%2===0?(u(A[_][C+1]),u(A[_+1][C]),u(A[_][C])):(u(A[_][C+1]),u(A[_+1][C+1]),u(A[_+1][C]))}}function c(v){let b=new I;for(let y=0;y<r.length;y+=3)b.x=r[y+0],b.y=r[y+1],b.z=r[y+2],b.normalize().multiplyScalar(v),r[y+0]=b.x,r[y+1]=b.y,r[y+2]=b.z}function h(){let v=new I;for(let b=0;b<r.length;b+=3){v.x=r[b+0],v.y=r[b+1],v.z=r[b+2];let y=g(v)/2/Math.PI+.5,E=m(v)/Math.PI+.5;a.push(y,1-E)}p(),d()}function d(){for(let v=0;v<a.length;v+=6){let b=a[v+0],y=a[v+2],E=a[v+4],w=Math.max(b,y,E),A=Math.min(b,y,E);w>.9&&A<.1&&(b<.2&&(a[v+0]+=1),y<.2&&(a[v+2]+=1),E<.2&&(a[v+4]+=1))}}function u(v){r.push(v.x,v.y,v.z)}function f(v,b){let y=v*3;b.x=t[y+0],b.y=t[y+1],b.z=t[y+2]}function p(){let v=new I,b=new I,y=new I,E=new I,w=new ut,A=new ut,_=new ut;for(let T=0,C=0;T<r.length;T+=9,C+=6){v.set(r[T+0],r[T+1],r[T+2]),b.set(r[T+3],r[T+4],r[T+5]),y.set(r[T+6],r[T+7],r[T+8]),w.set(a[C+0],a[C+1]),A.set(a[C+2],a[C+3]),_.set(a[C+4],a[C+5]),E.copy(v).add(b).add(y).divideScalar(3);let L=g(E);x(w,C+0,v,L),x(A,C+2,b,L),x(_,C+4,y,L)}}function x(v,b,y,E){E<0&&v.x===1&&(a[b]=v.x-1),y.x===0&&y.z===0&&(a[b]=E/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}},Jo=class i extends qi{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Mh=new I,Sh=new I,jd=new I,bh=new ci,hr=class extends re{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(Js*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),u={},f=[];for(let p=0;p<l;p+=3){a?(c[0]=a.getX(p),c[1]=a.getX(p+1),c[2]=a.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);let{a:x,b:g,c:m}=bh;if(x.fromBufferAttribute(o,c[0]),g.fromBufferAttribute(o,c[1]),m.fromBufferAttribute(o,c[2]),bh.getNormal(jd),d[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,d[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,d[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let v=0;v<3;v++){let b=(v+1)%3,y=d[v],E=d[b],w=bh[h[v]],A=bh[h[b]],_=`${y}_${E}`,T=`${E}_${y}`;T in u&&u[T]?(jd.dot(u[T].normal)<=r&&(f.push(w.x,w.y,w.z),f.push(A.x,A.y,A.z)),u[T]=null):_ in u||(u[_]={index0:c[v],index1:c[b],normal:jd.clone()})}}for(let p in u)if(u[p]){let{index0:x,index1:g}=u[p];Mh.fromBufferAttribute(o,x),Sh.fromBufferAttribute(o,g),f.push(Mh.x,Mh.y,Mh.z),f.push(Sh.x,Sh.y,Sh.z)}this.setAttribute("position",new Vt(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},On=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Lt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new ut:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new I,s=[],r=[],a=[],o=new I,l=new se;for(let f=0;f<=t;f++){let p=f/t;s[f]=this.getTangentAt(p,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(ie(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(ie(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ur=class extends On{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new ut){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ko=class extends ur{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function op(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Bm=new I,km=new I,Qd=new op,tf=new op,ef=new op,Es=class extends On{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(km.subVectors(s[0],s[1]).add(s[0]),c=km);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Bm.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Bm),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),Qd.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,p,x,g),tf.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,p,x,g),ef.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,p,x,g)}else this.curveType==="catmullrom"&&(Qd.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),tf.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),ef.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Qd.calc(l),tf.calc(l),ef.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function zm(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function xx(i,t){let e=1-i;return e*e*t}function yx(i,t){return 2*(1-i)*i*t}function vx(i,t){return i*i*t}function Ao(i,t,e,n){return xx(i,t)+yx(i,e)+vx(i,n)}function Mx(i,t){let e=1-i;return e*e*e*t}function Sx(i,t){let e=1-i;return 3*e*e*i*t}function bx(i,t){return 3*(1-i)*i*i*t}function wx(i,t){return i*i*i*t}function Co(i,t,e,n,s){return Mx(i,t)+Sx(i,e)+bx(i,n)+wx(i,s)}var _a=class extends On{constructor(t=new ut,e=new ut,n=new ut,s=new ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ut){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Co(t,s.x,r.x,a.x,o.x),Co(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},jo=class extends On{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Co(t,s.x,r.x,a.x,o.x),Co(t,s.y,r.y,a.y,o.y),Co(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},xa=class extends On{constructor(t=new ut,e=new ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ut){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Qo=class extends On{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ya=class extends On{constructor(t=new ut,e=new ut,n=new ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ut){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ao(t,s.x,r.x,a.x),Ao(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},va=class extends On{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ao(t,s.x,r.x,a.x),Ao(t,s.y,r.y,a.y),Ao(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ma=class extends On{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ut){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(zm(o,l.x,c.x,h.x,d.x),zm(o,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new ut().fromArray(s))}return this}},Qh=Object.freeze({__proto__:null,ArcCurve:Ko,CatmullRomCurve3:Es,CubicBezierCurve:_a,CubicBezierCurve3:jo,EllipseCurve:ur,LineCurve:xa,LineCurve3:Qo,QuadraticBezierCurve:ya,QuadraticBezierCurve3:va,SplineCurve:Ma}),tl=class extends On{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Qh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Qh[s.type]().fromJSON(s))}return this}},As=class extends tl{constructor(t){super(),this.type="Path",this.currentPoint=new ut,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new xa(this.currentPoint.clone(),new ut(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new ya(this.currentPoint.clone(),new ut(t,e),new ut(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new _a(this.currentPoint.clone(),new ut(t,e),new ut(n,s),new ut(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Ma(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new ur(t,e,n,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Cs=class extends As{constructor(t){super(t),this.uuid=Wn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new As().fromJSON(s))}return this}};function Tx(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=p0(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Ix(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,d=l;for(let u=e;u<s;u+=e){let f=i[u],p=i[u+1];f<o&&(o=f),p<l&&(l=p),f>h&&(h=f),p>d&&(d=p)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return el(r,a,e,o,l,c,0),a}function p0(i,t,e,n,s){let r;if(s===Vx(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=Vm(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Vm(a/n|0,i[a],i[a+1],r);return r&&Sa(r,r.next)&&(il(r),r=r.next),r}function dr(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Sa(e,e.next)||Ue(e.prev,e,e.next)===0)){if(il(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function el(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Ux(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Ax(i,n,s,r):Ex(i)){t.push(l.i,i.i,c.i),il(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Cx(dr(i),t),el(i,t,e,n,s,r,2)):a===2&&Rx(i,t,e,n,s,r):el(dr(i),t,e,n,s,r,1);break}}}function Ex(i){let t=i.prev,e=i,n=i.next;if(Ue(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),d=Math.min(o,l,c),u=Math.max(s,r,a),f=Math.max(o,l,c),p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=u&&p.y>=d&&p.y<=f&&bo(s,o,r,l,a,c,p.x,p.y)&&Ue(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Ax(i,t,e,n){let s=i.prev,r=i,a=i.next;if(Ue(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,u=a.y,f=Math.min(o,l,c),p=Math.min(h,d,u),x=Math.max(o,l,c),g=Math.max(h,d,u),m=df(f,p,t,e,n),v=df(x,g,t,e,n),b=i.prevZ,y=i.nextZ;for(;b&&b.z>=m&&y&&y.z<=v;){if(b.x>=f&&b.x<=x&&b.y>=p&&b.y<=g&&b!==s&&b!==a&&bo(o,h,l,d,c,u,b.x,b.y)&&Ue(b.prev,b,b.next)>=0||(b=b.prevZ,y.x>=f&&y.x<=x&&y.y>=p&&y.y<=g&&y!==s&&y!==a&&bo(o,h,l,d,c,u,y.x,y.y)&&Ue(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;b&&b.z>=m;){if(b.x>=f&&b.x<=x&&b.y>=p&&b.y<=g&&b!==s&&b!==a&&bo(o,h,l,d,c,u,b.x,b.y)&&Ue(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;y&&y.z<=v;){if(y.x>=f&&y.x<=x&&y.y>=p&&y.y<=g&&y!==s&&y!==a&&bo(o,h,l,d,c,u,y.x,y.y)&&Ue(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Cx(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Sa(n,s)&&g0(n,e,e.next,s)&&nl(n,s)&&nl(s,n)&&(t.push(n.i,e.i,s.i),il(e),il(e.next),e=i=s),e=e.next}while(e!==i);return dr(e)}function Rx(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Bx(a,o)){let l=_0(a,o);a=dr(a,a.next),l=dr(l,l.next),el(a,t,e,n,s,r,0),el(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Ix(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=p0(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Ox(c))}s.sort(Px);for(let r=0;r<s.length;r++)e=Lx(s[r],e);return e}function Px(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Lx(i,t){let e=Dx(i,t);if(!e)return t;let n=_0(e,i);return dr(n,n.next),dr(e,e.next)}function Dx(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(Sa(i,e))return e;do{if(Sa(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&m0(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let d=Math.abs(s-e.y)/(n-e.x);nl(e,i)&&(d<h||d===h&&(e.x>a.x||e.x===a.x&&Nx(a,e)))&&(a=e,h=d)}e=e.next}while(e!==o);return a}function Nx(i,t){return Ue(i.prev,i,t.prev)<0&&Ue(t.next,i,i.next)<0}function Ux(i,t,e,n){let s=i;do s.z===0&&(s.z=df(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Fx(s)}function Fx(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function df(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Ox(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function m0(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function bo(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&m0(i,t,e,n,s,r,a,o)}function Bx(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!kx(i,t)&&(nl(i,t)&&nl(t,i)&&zx(i,t)&&(Ue(i.prev,i,t.prev)||Ue(i,t.prev,t))||Sa(i,t)&&Ue(i.prev,i,i.next)>0&&Ue(t.prev,t,t.next)>0)}function Ue(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Sa(i,t){return i.x===t.x&&i.y===t.y}function g0(i,t,e,n){let s=Th(Ue(i,t,e)),r=Th(Ue(i,t,n)),a=Th(Ue(e,n,i)),o=Th(Ue(e,n,t));return!!(s!==r&&a!==o||s===0&&wh(i,e,t)||r===0&&wh(i,n,t)||a===0&&wh(e,i,n)||o===0&&wh(e,t,n))}function wh(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Th(i){return i>0?1:i<0?-1:0}function kx(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&g0(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function nl(i,t){return Ue(i.prev,i,i.next)<0?Ue(i,t,i.next)>=0&&Ue(i,i.prev,t)>=0:Ue(i,t,i.prev)<0||Ue(i,i.next,t)<0}function zx(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function _0(i,t){let e=ff(i.i,i.x,i.y),n=ff(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Vm(i,t,e,n){let s=ff(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function il(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ff(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Vx(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var pf=class{static triangulate(t,e,n=2){return Tx(t,e,n)}},ti=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Gm(t),Hm(n,t);let a=t.length;e.forEach(Gm);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Hm(n,e[l]);let o=pf.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Gm(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Hm(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var sl=class i extends re{constructor(t=new Cs([new ut(.5,.5),new ut(-.5,.5),new ut(-.5,-.5),new ut(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new Vt(s,3)),this.setAttribute("uv",new Vt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:Gx,b,y=!1,E,w,A,_;if(m){b=m.getSpacedPoints(h),y=!0,u=!1;let Q=m.isCatmullRomCurve3?m.closed:!1;E=m.computeFrenetFrames(h,Q),w=new I,A=new I,_=new I}u||(g=0,f=0,p=0,x=0);let T=o.extractPoints(c),C=T.shape,L=T.holes;if(!ti.isClockWise(C)){C=C.reverse();for(let Q=0,dt=L.length;Q<dt;Q++){let ft=L[Q];ti.isClockWise(ft)&&(L[Q]=ft.reverse())}}function z(Q){let ft=10000000000000001e-36,mt=Q[0];for(let wt=1;wt<=Q.length;wt++){let Yt=wt%Q.length,$t=Q[Yt],Qt=$t.x-mt.x,Kt=$t.y-mt.y,U=Qt*Qt+Kt*Kt,fe=Math.max(Math.abs($t.x),Math.abs($t.y),Math.abs(mt.x),Math.abs(mt.y)),ce=ft*fe*fe;if(U<=ce){Q.splice(Yt,1),wt--;continue}mt=$t}}z(C),L.forEach(z);let P=L.length,k=C;for(let Q=0;Q<P;Q++){let dt=L[Q];C=C.concat(dt)}function H(Q,dt,ft){return dt||Jt("ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(dt,ft)}let W=C.length;function ct(Q,dt,ft){let mt,wt,Yt,$t=Q.x-dt.x,Qt=Q.y-dt.y,Kt=ft.x-Q.x,U=ft.y-Q.y,fe=$t*$t+Qt*Qt,ce=$t*U-Qt*Kt;if(Math.abs(ce)>Number.EPSILON){let R=Math.sqrt(fe),M=Math.sqrt(Kt*Kt+U*U),X=dt.x-Qt/R,J=dt.y+$t/R,rt=ft.x-U/M,St=ft.y+Kt/M,Rt=((rt-X)*U-(St-J)*Kt)/($t*U-Qt*Kt);mt=X+$t*Rt-Q.x,wt=J+Qt*Rt-Q.y;let at=mt*mt+wt*wt;if(at<=2)return new ut(mt,wt);Yt=Math.sqrt(at/2)}else{let R=!1;$t>Number.EPSILON?Kt>Number.EPSILON&&(R=!0):$t<-Number.EPSILON?Kt<-Number.EPSILON&&(R=!0):Math.sign(Qt)===Math.sign(U)&&(R=!0),R?(mt=-Qt,wt=$t,Yt=Math.sqrt(fe)):(mt=$t,wt=Qt,Yt=Math.sqrt(fe/2))}return new ut(mt/Yt,wt/Yt)}let $=[];for(let Q=0,dt=k.length,ft=dt-1,mt=Q+1;Q<dt;Q++,ft++,mt++)ft===dt&&(ft=0),mt===dt&&(mt=0),$[Q]=ct(k[Q],k[ft],k[mt]);let ot=[],O,K=$.concat();for(let Q=0,dt=P;Q<dt;Q++){let ft=L[Q];O=[];for(let mt=0,wt=ft.length,Yt=wt-1,$t=mt+1;mt<wt;mt++,Yt++,$t++)Yt===wt&&(Yt=0),$t===wt&&($t=0),O[mt]=ct(ft[mt],ft[Yt],ft[$t]);ot.push(O),K=K.concat(O)}let lt;if(g===0)lt=ti.triangulateShape(k,L);else{let Q=[],dt=[];for(let ft=0;ft<g;ft++){let mt=ft/g,wt=f*Math.cos(mt*Math.PI/2),Yt=p*Math.sin(mt*Math.PI/2)+x;for(let $t=0,Qt=k.length;$t<Qt;$t++){let Kt=H(k[$t],$[$t],Yt);gt(Kt.x,Kt.y,-wt),mt===0&&Q.push(Kt)}for(let $t=0,Qt=P;$t<Qt;$t++){let Kt=L[$t];O=ot[$t];let U=[];for(let fe=0,ce=Kt.length;fe<ce;fe++){let R=H(Kt[fe],O[fe],Yt);gt(R.x,R.y,-wt),mt===0&&U.push(R)}mt===0&&dt.push(U)}}lt=ti.triangulateShape(Q,dt)}let Pt=lt.length,Dt=p+x;for(let Q=0;Q<W;Q++){let dt=u?H(C[Q],K[Q],Dt):C[Q];y?(A.copy(E.normals[0]).multiplyScalar(dt.x),w.copy(E.binormals[0]).multiplyScalar(dt.y),_.copy(b[0]).add(A).add(w),gt(_.x,_.y,_.z)):gt(dt.x,dt.y,0)}for(let Q=1;Q<=h;Q++)for(let dt=0;dt<W;dt++){let ft=u?H(C[dt],K[dt],Dt):C[dt];y?(A.copy(E.normals[Q]).multiplyScalar(ft.x),w.copy(E.binormals[Q]).multiplyScalar(ft.y),_.copy(b[Q]).add(A).add(w),gt(_.x,_.y,_.z)):gt(ft.x,ft.y,d/h*Q)}for(let Q=g-1;Q>=0;Q--){let dt=Q/g,ft=f*Math.cos(dt*Math.PI/2),mt=p*Math.sin(dt*Math.PI/2)+x;for(let wt=0,Yt=k.length;wt<Yt;wt++){let $t=H(k[wt],$[wt],mt);gt($t.x,$t.y,d+ft)}for(let wt=0,Yt=L.length;wt<Yt;wt++){let $t=L[wt];O=ot[wt];for(let Qt=0,Kt=$t.length;Qt<Kt;Qt++){let U=H($t[Qt],O[Qt],mt);y?gt(U.x,U.y+b[h-1].y,b[h-1].x+ft):gt(U.x,U.y,d+ft)}}}Ut(),q();function Ut(){let Q=s.length/3;if(u){let dt=0,ft=W*dt;for(let mt=0;mt<Pt;mt++){let wt=lt[mt];xt(wt[2]+ft,wt[1]+ft,wt[0]+ft)}dt=h+g*2,ft=W*dt;for(let mt=0;mt<Pt;mt++){let wt=lt[mt];xt(wt[0]+ft,wt[1]+ft,wt[2]+ft)}}else{for(let dt=0;dt<Pt;dt++){let ft=lt[dt];xt(ft[2],ft[1],ft[0])}for(let dt=0;dt<Pt;dt++){let ft=lt[dt];xt(ft[0]+W*h,ft[1]+W*h,ft[2]+W*h)}}n.addGroup(Q,s.length/3-Q,0)}function q(){let Q=s.length/3,dt=0;j(k,dt),dt+=k.length;for(let ft=0,mt=L.length;ft<mt;ft++){let wt=L[ft];j(wt,dt),dt+=wt.length}n.addGroup(Q,s.length/3-Q,1)}function j(Q,dt){let ft=Q.length;for(;--ft>=0;){let mt=ft,wt=ft-1;wt<0&&(wt=Q.length-1);for(let Yt=0,$t=h+g*2;Yt<$t;Yt++){let Qt=W*Yt,Kt=W*(Yt+1),U=dt+mt+Qt,fe=dt+wt+Qt,ce=dt+wt+Kt,R=dt+mt+Kt;_t(U,fe,ce,R)}}}function gt(Q,dt,ft){l.push(Q),l.push(dt),l.push(ft)}function xt(Q,dt,ft){Ot(Q),Ot(dt),Ot(ft);let mt=s.length/3,wt=v.generateTopUV(n,s,mt-3,mt-2,mt-1);Zt(wt[0]),Zt(wt[1]),Zt(wt[2])}function _t(Q,dt,ft,mt){Ot(Q),Ot(dt),Ot(mt),Ot(dt),Ot(ft),Ot(mt);let wt=s.length/3,Yt=v.generateSideWallUV(n,s,wt-6,wt-3,wt-2,wt-1);Zt(Yt[0]),Zt(Yt[1]),Zt(Yt[3]),Zt(Yt[1]),Zt(Yt[2]),Zt(Yt[3])}function Ot(Q){s.push(l[Q*3+0]),s.push(l[Q*3+1]),s.push(l[Q*3+2])}function Zt(Q){r.push(Q.x),r.push(Q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Hx(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Qh[s.type]().fromJSON(s)),new i(n,t.options)}},Gx={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new ut(r,a),new ut(o,l),new ut(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[s*3],f=t[s*3+1],p=t[s*3+2],x=t[r*3],g=t[r*3+1],m=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ut(a,1-l),new ut(c,1-d),new ut(u,1-p),new ut(x,1-m)]:[new ut(o,1-l),new ut(h,1-d),new ut(f,1-p),new ut(g,1-m)]}};function Hx(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var rl=class i extends qi{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},al=class i extends re{constructor(t=[new ut(0,-.5),new ut(.5,0),new ut(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=ie(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,d=new I,u=new ut,f=new I,p=new I,x=new I,g=0,m=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:g=t[v+1].x-t[v].x,m=t[v+1].y-t[v].y,f.x=m*1,f.y=-g,f.z=m*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:g=t[v+1].x-t[v].x,m=t[v+1].y-t[v].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(p)}for(let v=0;v<=e;v++){let b=n+v*h*s,y=Math.sin(b),E=Math.cos(b);for(let w=0;w<=t.length-1;w++){d.x=t[w].x*y,d.y=t[w].y,d.z=t[w].x*E,a.push(d.x,d.y,d.z),u.x=v/e,u.y=w/(t.length-1),o.push(u.x,u.y);let A=l[3*w+0]*y,_=l[3*w+1],T=l[3*w+0]*E;c.push(A,_,T)}}for(let v=0;v<e;v++)for(let b=0;b<t.length-1;b++){let y=b+v*t.length,E=y,w=y+t.length,A=y+t.length+1,_=y+1;r.push(E,w,_),r.push(A,_,w)}this.setIndex(r),this.setAttribute("position",new Vt(a,3)),this.setAttribute("uv",new Vt(o,2)),this.setAttribute("normal",new Vt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},ba=class i extends qi{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},fr=class i extends re{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=e/l,f=[],p=[],x=[],g=[];for(let m=0;m<h;m++){let v=m*u-a;for(let b=0;b<c;b++){let y=b*d-r;p.push(y,-v,0),x.push(0,0,1),g.push(b/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<o;v++){let b=v+c*m,y=v+c*(m+1),E=v+1+c*(m+1),w=v+1+c*m;f.push(b,y,w),f.push(y,E,w)}this.setIndex(f),this.setAttribute("position",new Vt(p,3)),this.setAttribute("normal",new Vt(x,3)),this.setAttribute("uv",new Vt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},ol=class i extends re{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],d=t,u=(e-t)/s,f=new I,p=new ut;for(let x=0;x<=s;x++){for(let g=0;g<=n;g++){let m=r+g/n*a;f.x=d*Math.cos(m),f.y=d*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/e+1)/2,p.y=(f.y/e+1)/2,h.push(p.x,p.y)}d+=u}for(let x=0;x<s;x++){let g=x*(n+1);for(let m=0;m<n;m++){let v=m+g,b=v,y=v+n+1,E=v+n+2,w=v+1;o.push(b,y,w),o.push(y,E,w)}}this.setIndex(o),this.setAttribute("position",new Vt(l,3)),this.setAttribute("normal",new Vt(c,3)),this.setAttribute("uv",new Vt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},ll=class i extends re{constructor(t=new Cs([new ut(0,.5),new ut(-.5,-.5),new ut(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Vt(s,3)),this.setAttribute("normal",new Vt(r,3)),this.setAttribute("uv",new Vt(a,2));function c(h){let d=s.length/3,u=h.extractPoints(e),f=u.shape,p=u.holes;ti.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,m=p.length;g<m;g++){let v=p[g];ti.isClockWise(v)===!0&&(p[g]=v.reverse())}let x=ti.triangulateShape(f,p);for(let g=0,m=p.length;g<m;g++){let v=p[g];f=f.concat(v)}for(let g=0,m=f.length;g<m;g++){let v=f[g];s.push(v.x,v.y,0),r.push(0,0,1),a.push(v.x,v.y)}for(let g=0,m=x.length;g<m;g++){let v=x[g],b=v[0]+d,y=v[1]+d,E=v[2]+d;n.push(b,y,E),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Wx(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}return new i(n,t.curveSegments)}};function Wx(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var Yi=class i extends re{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new I,u=new I,f=[],p=[],x=[],g=[];for(let m=0;m<=n;m++){let v=[],b=m/n,y=a+b*o,E=t*Math.cos(y),w=Math.sqrt(t*t-E*E),A=0;m===0&&a===0?A=.5/e:m===n&&l===Math.PI&&(A=-.5/e);for(let _=0;_<=e;_++){let T=_/e,C=s+T*r;d.x=-w*Math.cos(C),d.y=E,d.z=w*Math.sin(C),p.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),g.push(T+A,1-b),v.push(c++)}h.push(v)}for(let m=0;m<n;m++)for(let v=0;v<e;v++){let b=h[m][v+1],y=h[m][v],E=h[m+1][v],w=h[m+1][v+1];(m!==0||a>0)&&f.push(b,y,w),(m!==n-1||l<Math.PI)&&f.push(y,E,w)}this.setIndex(f),this.setAttribute("position",new Vt(p,3)),this.setAttribute("normal",new Vt(x,3)),this.setAttribute("uv",new Vt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},cl=class i extends qi{constructor(t=1,e=0){let n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Zi=class i extends re{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new I,f=new I,p=new I;for(let x=0;x<=n;x++){let g=a+x/n*o;for(let m=0;m<=s;m++){let v=m/s*r;f.x=(t+e*Math.cos(g))*Math.cos(v),f.y=(t+e*Math.cos(g))*Math.sin(v),f.z=e*Math.sin(g),c.push(f.x,f.y,f.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),p.subVectors(f,u).normalize(),h.push(p.x,p.y,p.z),d.push(m/s),d.push(x/n)}}for(let x=1;x<=n;x++)for(let g=1;g<=s;g++){let m=(s+1)*x+g-1,v=(s+1)*(x-1)+g-1,b=(s+1)*(x-1)+g,y=(s+1)*x+g;l.push(m,v,y),l.push(v,b,y)}this.setIndex(l),this.setAttribute("position",new Vt(c,3)),this.setAttribute("normal",new Vt(h,3)),this.setAttribute("uv",new Vt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},hl=class i extends re{constructor(t=1,e=.4,n=64,s=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:s,p:r,q:a},n=Math.floor(n),s=Math.floor(s);let o=[],l=[],c=[],h=[],d=new I,u=new I,f=new I,p=new I,x=new I,g=new I,m=new I;for(let b=0;b<=n;++b){let y=b/n*r*Math.PI*2;v(y,r,a,t,f),v(y+.01,r,a,t,p),g.subVectors(p,f),m.addVectors(p,f),x.crossVectors(g,m),m.crossVectors(x,g),x.normalize(),m.normalize();for(let E=0;E<=s;++E){let w=E/s*Math.PI*2,A=-e*Math.cos(w),_=e*Math.sin(w);d.x=f.x+(A*m.x+_*x.x),d.y=f.y+(A*m.y+_*x.y),d.z=f.z+(A*m.z+_*x.z),l.push(d.x,d.y,d.z),u.subVectors(d,f).normalize(),c.push(u.x,u.y,u.z),h.push(b/n),h.push(E/s)}}for(let b=1;b<=n;b++)for(let y=1;y<=s;y++){let E=(s+1)*(b-1)+(y-1),w=(s+1)*b+(y-1),A=(s+1)*b+y,_=(s+1)*(b-1)+y;o.push(E,w,_),o.push(w,A,_)}this.setIndex(o),this.setAttribute("position",new Vt(l,3)),this.setAttribute("normal",new Vt(c,3)),this.setAttribute("uv",new Vt(h,2));function v(b,y,E,w,A){let _=Math.cos(b),T=Math.sin(b),C=E/y*b,L=Math.cos(C);A.x=w*(2+L)*.5*_,A.y=w*(2+L)*T*.5,A.z=w*Math.sin(C)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}},Rs=class i extends re{constructor(t=new va(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new I,l=new I,c=new ut,h=new I,d=[],u=[],f=[],p=[];x(),this.setIndex(p),this.setAttribute("position",new Vt(d,3)),this.setAttribute("normal",new Vt(u,3)),this.setAttribute("uv",new Vt(f,2));function x(){for(let b=0;b<e;b++)g(b);g(r===!1?e:0),v(),m()}function g(b){h=t.getPointAt(b/e,h);let y=a.normals[b],E=a.binormals[b];for(let w=0;w<=s;w++){let A=w/s*Math.PI*2,_=Math.sin(A),T=-Math.cos(A);l.x=T*y.x+_*E.x,l.y=T*y.y+_*E.y,l.z=T*y.z+_*E.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,d.push(o.x,o.y,o.z)}}function m(){for(let b=1;b<=e;b++)for(let y=1;y<=s;y++){let E=(s+1)*(b-1)+(y-1),w=(s+1)*b+(y-1),A=(s+1)*b+y,_=(s+1)*(b-1)+y;p.push(E,w,_),p.push(w,A,_)}}function v(){for(let b=0;b<=e;b++)for(let y=0;y<=s;y++)c.x=b/e,c.y=y/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Qh[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},ul=class extends re{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,s=new I,r=new I;if(t.index!==null){let a=t.attributes.position,o=t.index,l=t.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let d=l[c],u=d.start,f=d.count;for(let p=u,x=u+f;p<x;p+=3)for(let g=0;g<3;g++){let m=o.getX(p+g),v=o.getX(p+(g+1)%3);s.fromBufferAttribute(a,m),r.fromBufferAttribute(a,v),Wm(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let a=t.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,d=3*o+(c+1)%3;s.fromBufferAttribute(a,h),r.fromBufferAttribute(a,d),Wm(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new Vt(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function Wm(i,t,e){let n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}var Xm=Object.freeze({__proto__:null,BoxGeometry:Xn,CapsuleGeometry:$o,CircleGeometry:cr,ConeGeometry:ga,CylinderGeometry:Ei,DodecahedronGeometry:Jo,EdgesGeometry:hr,ExtrudeGeometry:sl,IcosahedronGeometry:rl,LatheGeometry:al,OctahedronGeometry:ba,PlaneGeometry:fr,PolyhedronGeometry:qi,RingGeometry:ol,ShapeGeometry:ll,SphereGeometry:Yi,TetrahedronGeometry:cl,TorusGeometry:Zi,TorusKnotGeometry:hl,TubeGeometry:Rs,WireframeGeometry:ul}),dl=class extends Ze{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new kt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};function Rr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(qm(s))s.isRenderTargetTexture?(Lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(qm(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Sn(i){let t={};for(let e=0;e<i.length;e++){let n=Rr(i[e]);for(let s in n)t[s]=n[s]}return t}function qm(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Xx(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function lp(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:me.workingColorSpace}var cp={clone:Rr,merge:Sn},qx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Rn=class extends Ze{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qx,this.fragmentShader=Yx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Rr(t.uniforms),this.uniformsGroups=Xx(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new kt().setHex(s.value);break;case"v2":this.uniforms[n].value=new ut().fromArray(s.value);break;case"v3":this.uniforms[n].value=new I().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ee().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ae().fromArray(s.value);break;case"m4":this.uniforms[n].value=new se().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},wa=class extends Rn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},He=class extends Ze{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ii,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},pr=class extends He{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ut(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ie(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new kt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new kt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new kt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}},fl=class extends Ze{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new kt(16777215),this.specular=new kt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ii,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=Ba,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},pl=class extends Ze{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new kt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ii,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},ml=class extends Ze{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ii,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}},mr=class extends Ze{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ii,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=Ba,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ta=class extends Ze{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ea=class extends Ze{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},gl=class extends Ze{constructor(t){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new kt(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ii,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this.fog=t.fog,this}},_l=class extends $e{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};function li(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Ro(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function x0(i){function t(s,r){return i[s]-i[r]}let e=i.length,n=new Array(e);for(let s=0;s!==e;++s)n[s]=s;return n.sort(t),n}function mf(i,t,e){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=e[r]*t;for(let l=0;l!==t;++l)s[a++]=i[o+l]}return s}function y0(i,t,e,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(t.push(r.time),e.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(t.push(r.time),a.toArray(e,e.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(t.push(r.time),e.push(a)),r=i[s++];while(r!==void 0)}function Zx(i,t,e,n,s=30){let r=i.clone();r.name=t;let a=[];for(let l=0;l<r.tracks.length;++l){let c=r.tracks[l],h=c.getValueSize(),d=[],u=[];for(let f=0;f<c.times.length;++f){let p=c.times[f]*s;if(!(p<e||p>=n)){d.push(c.times[f]);for(let x=0;x<h;++x)u.push(c.values[f*h+x])}}d.length!==0&&(c.times=li(d,c.times.constructor),c.values=li(u,c.values.constructor),a.push(c))}r.tracks=a;let o=1/0;for(let l=0;l<r.tracks.length;++l)o>r.tracks[l].times[0]&&(o=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*o);return r.resetDuration(),r}function $x(i,t=0,e=i,n=30){n<=0&&(n=30);let s=e.tracks.length,r=t/n;for(let a=0;a<s;++a){let o=e.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;let c=i.tracks.find(function(m){return m.name===o.name&&m.ValueTypeName===l});if(c===void 0)continue;let h=0,d=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=d/3);let u=0,f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=f/3);let p=o.times.length-1,x;if(r<=o.times[0]){let m=h,v=d-h;x=o.values.slice(m,v)}else if(r>=o.times[p]){let m=p*d+h,v=m+d-h;x=o.values.slice(m,v)}else{let m=o.createInterpolant(),v=h,b=d-h;m.evaluate(r),x=m.resultBuffer.slice(v,b)}l==="quaternion"&&new Fe().fromArray(x).normalize().conjugate().toArray(x);let g=c.times.length;for(let m=0;m<g;++m){let v=m*f+u;if(l==="quaternion")Fe.multiplyQuaternionsFlat(c.values,v,x,0,c.values,v);else{let b=f-u*2;for(let y=0;y<b;++y)c.values[v+y]-=x[y]}}}return i.blendMode=nd,i}var tu=class{static convertArray(t,e){return li(t,e)}static isTypedArray(t){return a0(t)}static hasTangents(t){return Ro(t)}static getKeyframeOrder(t){return x0(t)}static sortedArray(t,e,n){return mf(t,e,n)}static flattenJSON(t,e,n,s){y0(t,e,n,s)}static subclip(t,e,n,s,r=30){return Zx(t,e,n,s,r)}static makeClipAdditive(t,e=0,n=t,s=30){return $x(t,e,n,s)}},$i=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];t:{e:{let a;n:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break e}a=e.length;break n}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break e}a=n,n=0;break n}break t}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},xl=class extends $i{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:_s,endingEnd:_s}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case xs:r=t,o=2*e-n;break;case aa:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case xs:a=t,l=2*n-e;break;case aa:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(n-e)/(s-e),x=p*p,g=x*p,m=-u*g+2*u*x-u*p,v=(1+u)*g+(-1.5-2*u)*x+(-.5+u)*p+1,b=(-1-f)*g+(1.5+f)*x+.5*p,y=f*g-f*x;for(let E=0;E!==o;++E)r[E]=m*a[h+E]+v*a[c+E]+b*a[l+E]+y*a[d+E];return r}},Aa=class extends $i{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},yl=class extends $i{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},vl=class extends $i{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(n-e)/(s-e),x=1-p;for(let g=0;g!==o;++g)r[g]=a[c+g]*x+a[l+g]*p;return r}let u=o*2,f=t-1;for(let p=0;p!==o;++p){let x=a[c+p],g=a[l+p],m=f*u+p*2,v=d[m],b=d[m+1],y=t*u+p*2,E=h[y],w=h[y+1],A=Kx(n,e,v,E,s);r[p]=v0(A,x,b,w,g)}return r}};function v0(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Jx(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Kx(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=v0(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Jx(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var In=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=li(e,this.TimeBufferType),this.values=li(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:li(t.times,Array),values:li(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Ro(t.settings)&&(n.settings={inTangents:li(t.settings.inTangents,Array),outTangents:li(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new yl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Aa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new xl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new vl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ra:e=this.InterpolantFactoryMethodDiscrete;break;case Oo:e=this.InterpolantFactoryMethodLinear;break;case wo:e=this.InterpolantFactoryMethodSmooth;break;case Fh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Lt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ra;case this.InterpolantFactoryMethodLinear:return Oo;case this.InterpolantFactoryMethodSmooth:return wo;case this.InterpolantFactoryMethodBezier:return Fh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Ro(this.settings)&&(Ym(this.settings.inTangents,t),Ym(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Jt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Jt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Jt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Jt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&a0(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Jt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===wo,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*n,u=d-n,f=d+n;for(let p=0;p!==n;++p){let x=e[d+p];if(x!==e[u+p]||x!==e[f+p]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Ro(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Ym(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}In.prototype.ValueTypeName="";In.prototype.TimeBufferType=Float32Array;In.prototype.ValueBufferType=Float32Array;In.prototype.DefaultInterpolation=Oo;var Ai=class extends In{constructor(t,e,n){super(t,e,n)}};Ai.prototype.ValueTypeName="bool";Ai.prototype.ValueBufferType=Array;Ai.prototype.DefaultInterpolation=ra;Ai.prototype.InterpolantFactoryMethodLinear=void 0;Ai.prototype.InterpolantFactoryMethodSmooth=void 0;var Ca=class extends In{constructor(t,e,n,s){super(t,e,n,s)}};Ca.prototype.ValueTypeName="color";var gr=class extends In{constructor(t,e,n,s){super(t,e,n,s)}};gr.prototype.ValueTypeName="number";var Ml=class extends $i{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Fe.slerpFlat(r,0,a,c-o,a,c,l);return r}},_r=class extends In{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Ml(this.times,this.values,this.getValueSize(),t)}};_r.prototype.ValueTypeName="quaternion";_r.prototype.InterpolantFactoryMethodSmooth=void 0;var Ci=class extends In{constructor(t,e,n){super(t,e,n)}};Ci.prototype.ValueTypeName="string";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=ra;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var Ra=class extends In{constructor(t,e,n,s){super(t,e,n,s)}};Ra.prototype.ValueTypeName="vector";var Is=class{constructor(t="",e=-1,n=[],s=yc){this.name=t,this.tracks=n,this.duration=e,this.blendMode=s,this.uuid=Wn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){let e=[],n=t.tracks,s=1/(t.fps||1);for(let a=0,o=n.length;a!==o;++a)e.push(Qx(n[a]).scale(s));let r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r.userData=JSON.parse(t.userData||"{}"),r}static toJSON(t){let e=[],n=t.tracks,s={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let r=0,a=n.length;r!==a;++r)e.push(In.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(t,e,n,s){let r=e.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=x0(l);l=mf(l,1,h),c=mf(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new gr(".morphTargetInfluences["+e[o].name+"]",l,c).scale(1/n))}return new this(t,-1,a)}static findByName(t,e){let n=t;if(!Array.isArray(t)){let s=t;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===e)return n[s];return null}static CreateClipsFromMorphTargetSequences(t,e,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=t.length;o<l;o++){let c=t[o],h=c.name.match(r);if(h&&h.length>1){let d=h[1],u=s[d];u||(s[d]=u=[]),u.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],e,n));return a}resetDuration(){let t=this.tracks,e=0;for(let n=0,s=t.length;n!==s;++n){let r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){let t=[];for(let n=0;n<this.tracks.length;n++)t.push(this.tracks[n].clone());let e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}};function jx(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return gr;case"vector":case"vector2":case"vector3":case"vector4":return Ra;case"color":return Ca;case"quaternion":return _r;case"bool":case"boolean":return Ai;case"string":return Ci}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Qx(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=jx(i.type);if(i.times===void 0){let n=[],s=[];y0(i.keys,n,s,"value"),i.times=n,i.values=s}let e;return t.parse!==void 0?e=t.parse(i):e=new t(i.name,i.times,i.values,i.interpolation),Ro(i.settings)&&(e.settings={inTangents:li(i.settings.inTangents,Float32Array),outTangents:li(i.settings.outTangents,Float32Array)}),e}var hi={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Zm(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Zm(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Zm(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Ia=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},hp=new Ia,un=class{constructor(t){this.manager=t!==void 0?t:hp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};un.DEFAULT_MATERIAL_NAME="__DEFAULT";var ki={},gf=class extends Error{constructor(t,e){super(t),this.response=e}},ni=class extends un{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=hi.get(`file:${t}`);if(r!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0);return}if(ki[t]!==void 0){ki[t].push({onLoad:e,onProgress:n,onError:s});return}ki[t]=[],ki[t].push({onLoad:e,onProgress:n,onError:s});let a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Lt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=ki[t],d=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=u?parseInt(u):0,p=f!==0,x=0,g=new ReadableStream({start(m){v();function v(){d.read().then(({done:b,value:y})=>{if(b)m.close();else{x+=y.byteLength;let E=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:f});for(let w=0,A=h.length;w<A;w++){let _=h[w];_.onProgress&&_.onProgress(E)}m.enqueue(y),v()}},b=>{m.error(b)})}}});return new Response(g)}else throw new gf(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{hi.add(`file:${t}`,c);let h=ki[t];delete ki[t];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=ki[t];if(h===void 0)throw this.manager.itemError(t),c;delete ki[t];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},eu=class extends un{constructor(t){super(t)}load(t,e,n,s){let r=this,a=new ni(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(o){try{e(r.parse(JSON.parse(o)))}catch(l){s?s(l):Jt(l),r.manager.itemError(t)}},n,s)}parse(t){let e=[];for(let n=0;n<t.length;n++){let s=Is.parse(t[n]);e.push(s)}return e}},nu=class extends un{constructor(t){super(t)}load(t,e,n,s){let r=this,a=[],o=new or,l=new ni(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(r.withCredentials);let c=0;function h(d){l.load(t[d],function(u){let f=r.parse(u,!0);a[d]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},c+=1,c===6&&(f.mipmapCount===1&&(o.minFilter=Ce),o.image=a,o.format=f.format,o.needsUpdate=!0,e&&e(o))},n,s)}if(Array.isArray(t))for(let d=0,u=t.length;d<u;++d)h(d);else l.load(t,function(d){let u=r.parse(d,!0);if(u.isCubemap){let f=u.mipmaps.length/u.mipmapCount;for(let p=0;p<f;p++){a[p]={mipmaps:[]};for(let x=0;x<u.mipmapCount;x++)a[p].mipmaps.push(u.mipmaps[p*u.mipmapCount+x]),a[p].format=u.format,a[p].width=u.width,a[p].height=u.height}o.image=a}else o.image.width=u.width,o.image.height=u.height,o.mipmaps=u.mipmaps;u.mipmapCount===1&&(o.minFilter=Ce),o.format=u.format,o.needsUpdate=!0,e&&e(o)},n,s);return o}},Kr=new WeakMap,Ps=class extends un{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=hi.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let d=Kr.get(a);d===void 0&&(d=[],Kr.set(a,d)),d.push({onLoad:e,onError:s})}return a}let o=la("img");function l(){h(),e&&e(this);let d=Kr.get(this)||[];for(let u=0;u<d.length;u++){let f=d[u];f.onLoad&&f.onLoad(this)}Kr.delete(this),r.manager.itemEnd(t)}function c(d){h(),s&&s(d),hi.remove(`image:${t}`);let u=Kr.get(this)||[];for(let f=0;f<u.length;f++){let p=u[f];p.onError&&p.onError(d)}Kr.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),hi.add(`image:${t}`,o),r.manager.itemStart(t),o.src=t,o}},iu=class extends un{constructor(t){super(t)}load(t,e,n,s){let r=new Ts;r.colorSpace=ln;let a=new Ps(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(t[c],function(h){r.images[c]=h,o++,o===6&&(r.needsUpdate=!0,e&&e(r))},void 0,s)}for(let c=0;c<t.length;++c)l(c);return r}},Pa=class extends un{constructor(t){super(t)}load(t,e,n,s){let r=this,a=new An,o=new ni(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(t,function(l){let c;try{c=r.parse(l)}catch(h){s!==void 0?s(h):Jt(h);return}r._applyTexData(a,c),e&&e(a,c)},n,s),a}createDataTexture(t){let e=new An;return this._applyTexData(e,this.parse(t)),e}_applyTexData(t,e){e.image!==void 0?t.image=e.image:e.data!==void 0&&(t.image.width=e.width,t.image.height=e.height,t.image.data=e.data),t.wrapS=e.wrapS!==void 0?e.wrapS:En,t.wrapT=e.wrapT!==void 0?e.wrapT:En,t.magFilter=e.magFilter!==void 0?e.magFilter:Ce,t.minFilter=e.minFilter!==void 0?e.minFilter:Ce,t.anisotropy=e.anisotropy!==void 0?e.anisotropy:1,e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.mipmaps!==void 0&&(t.mipmaps=e.mipmaps,t.minFilter=_i),e.mipmapCount===1&&(t.minFilter=Ce),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),t.needsUpdate=!0}},su=class extends un{constructor(t){super(t)}load(t,e,n,s){let r=new ze,a=new Ps(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},pi=class extends ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},xr=class extends pi{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},nf=new se,$m=new I,Jm=new I,yr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.mapType=Pn,this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ti,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new Ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;$m.setFromMatrixPosition(t.matrixWorld),e.position.copy($m),Jm.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Jm),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){nf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(nf,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Ms||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(nf)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Eh=new I,Ah=new Fe,bi=new I,vr=class extends ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=Un,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Eh,Ah,bi),bi.x===1&&bi.y===1&&bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Eh,Ah,bi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Eh,Ah,bi),bi.x===1&&bi.y===1&&bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Eh,Ah,bi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ms=new I,Km=new ut,jm=new ut,Be=class extends vr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=js*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Js*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return js*2*Math.atan(Math.tan(Js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ms.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ms.x,ms.y).multiplyScalar(-t/ms.z),ms.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ms.x,ms.y).multiplyScalar(-t/ms.z)}getViewSize(t,e){return this.getViewBounds(t,Km,jm),e.subVectors(jm,Km)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Js*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},_f=class extends yr{constructor(){super(new Be(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=js*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},Sl=class extends pi{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new _f}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},xf=class extends yr{constructor(){super(new Be(90,1,.5,500)),this.isPointLightShadow=!0}},Ji=class extends pi{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new xf}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Ri=class extends vr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},yf=class extends yr{constructor(){super(new Ri(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Mr=class extends pi{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.shadow=new yf}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},bl=class extends pi{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}},wl=class extends pi{constructor(t,e,n=10,s=10){super(t,e),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=s}get power(){return this.intensity*this.width*this.height*Math.PI}set power(t){this.intensity=t/(this.width*this.height*Math.PI)}copy(t){return super.copy(t),this.width=t.width,this.height=t.height,this}toJSON(t){let e=super.toJSON(t);return e.object.width=this.width,e.object.height=this.height,e}},La=class{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let t=0;t<9;t++)this.coefficients.push(new I)}set(t){for(let e=0;e<9;e++)this.coefficients[e].copy(t[e]);return this}zero(){for(let t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this}getAt(t,e){let n=t.x,s=t.y,r=t.z,a=this.coefficients;return e.copy(a[0]).multiplyScalar(.282095),e.addScaledVector(a[1],.488603*s),e.addScaledVector(a[2],.488603*r),e.addScaledVector(a[3],.488603*n),e.addScaledVector(a[4],1.092548*(n*s)),e.addScaledVector(a[5],1.092548*(s*r)),e.addScaledVector(a[6],.315392*(3*r*r-1)),e.addScaledVector(a[7],1.092548*(n*r)),e.addScaledVector(a[8],.546274*(n*n-s*s)),e}getIrradianceAt(t,e){let n=t.x,s=t.y,r=t.z,a=this.coefficients;return e.copy(a[0]).multiplyScalar(.886227),e.addScaledVector(a[1],2*.511664*s),e.addScaledVector(a[2],2*.511664*r),e.addScaledVector(a[3],2*.511664*n),e.addScaledVector(a[4],2*.429043*n*s),e.addScaledVector(a[5],2*.429043*s*r),e.addScaledVector(a[6],.743125*r*r-.247708),e.addScaledVector(a[7],2*.429043*n*r),e.addScaledVector(a[8],.429043*(n*n-s*s)),e}add(t){for(let e=0;e<9;e++)this.coefficients[e].add(t.coefficients[e]);return this}addScaledSH(t,e){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(t.coefficients[n],e);return this}scale(t){for(let e=0;e<9;e++)this.coefficients[e].multiplyScalar(t);return this}lerp(t,e){for(let n=0;n<9;n++)this.coefficients[n].lerp(t.coefficients[n],e);return this}equals(t){for(let e=0;e<9;e++)if(!this.coefficients[e].equals(t.coefficients[e]))return!1;return!0}copy(t){return this.set(t.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(t,e=0){let n=this.coefficients;for(let s=0;s<9;s++)n[s].fromArray(t,e+s*3);return this}toArray(t=[],e=0){let n=this.coefficients;for(let s=0;s<9;s++)n[s].toArray(t,e+s*3);return t}static getBasisAt(t,e){let n=t.x,s=t.y,r=t.z;e[0]=.282095,e[1]=.488603*s,e[2]=.488603*r,e[3]=.488603*n,e[4]=1.092548*n*s,e[5]=1.092548*s*r,e[6]=.315392*(3*r*r-1),e[7]=1.092548*n*r,e[8]=.546274*(n*n-s*s)}},Tl=class extends pi{constructor(t=new La,e=1){super(void 0,e),this.isLightProbe=!0,this.sh=t}copy(t){return super.copy(t),this.sh.copy(t.sh),this}toJSON(t){let e=super.toJSON(t);return e.object.sh=this.sh.toArray(),e}},Qm={},El=class i extends un{constructor(t){super(t),this.textures={}}load(t,e,n,s){let r=this,a=new ni(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(t,function(o){try{e(r.parse(JSON.parse(o)))}catch(l){s?s(l):Jt(l),r.manager.itemError(t)}},n,s)}parse(t){let e=this.createMaterialFromType(t.type);return e.fromJSON(t,this.textures),e}setTextures(t){return this.textures=t,this}createMaterialFromType(t){return i.createMaterialFromType(t)}static createMaterialFromType(t){let n={ShadowMaterial:dl,SpriteMaterial:ws,RawShaderMaterial:wa,ShaderMaterial:Rn,PointsMaterial:pa,MeshPhysicalMaterial:pr,MeshStandardMaterial:He,MeshPhongMaterial:fl,MeshToonMaterial:pl,MeshNormalMaterial:ml,MeshLambertMaterial:mr,MeshDepthMaterial:Ta,MeshDistanceMaterial:Ea,MeshBasicMaterial:hn,MeshMatcapMaterial:gl,LineDashedMaterial:_l,LineBasicMaterial:$e,Material:Ze,...Qm}[t],s;return n===void 0?(wi(`MaterialLoader: Unknown material type "${t}". Use .registerMaterial() before starting the deserialization process.`),s=new Ze):s=new n,s}static registerMaterial(t,e){Qm[t]=e}},Da=class{static extractUrlBase(t){let e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}},Al=class extends re{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}},Cl=class extends un{constructor(t){super(t)}load(t,e,n,s){let r=this,a=new ni(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(t,function(o){try{e(r.parse(JSON.parse(o)))}catch(l){s?s(l):Jt(l),r.manager.itemError(t)}},n,s)}parse(t){let e={},n={};function s(f,p){if(e[p]!==void 0)return e[p];let g=f.interleavedBuffers[p],m=r(f,g.buffer),v=na(g.type,m),b=new sr(v,g.stride);return b.uuid=g.uuid,g.usage!==void 0&&b.setUsage(g.usage),e[p]=b,b}function r(f,p){if(n[p]!==void 0)return n[p];let g=f.arrayBuffers[p],m=new Uint32Array(g).buffer;return n[p]=m,m}let a=t.isInstancedBufferGeometry?new Al:new re,o=t.data.index;if(o!==void 0){let f=na(o.type,o.array);a.setIndex(new Te(f,1))}let l=t.data.attributes;for(let f in l){let p=l[f],x;if(p.isInterleavedBufferAttribute){let g=s(t.data,p.data);x=new bs(g,p.itemSize,p.offset,p.normalized)}else{let g=na(p.type,p.array),m=p.isInstancedBufferAttribute?Wi:Te;x=new m(g,p.itemSize,p.normalized)}p.name!==void 0&&(x.name=p.name),p.usage!==void 0&&x.setUsage(p.usage),p.gpuType!==void 0&&(x.gpuType=p.gpuType),a.setAttribute(f,x)}let c=t.data.morphAttributes;if(c)for(let f in c){let p=c[f],x=[];for(let g=0,m=p.length;g<m;g++){let v=p[g],b;if(v.isInterleavedBufferAttribute){let y=s(t.data,v.data);b=new bs(y,v.itemSize,v.offset,v.normalized)}else{let y=na(v.type,v.array);b=new Te(y,v.itemSize,v.normalized)}v.name!==void 0&&(b.name=v.name),v.usage!==void 0&&b.setUsage(v.usage),v.gpuType!==void 0&&(b.gpuType=v.gpuType),x.push(b)}a.morphAttributes[f]=x}t.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);let d=t.data.groups||t.data.drawcalls||t.data.offsets;if(d!==void 0)for(let f=0,p=d.length;f!==p;++f){let x=d[f];a.addGroup(x.start,x.count,x.materialIndex)}let u=t.data.boundingSphere;return u!==void 0&&(a.boundingSphere=new Ye().fromJSON(u)),t.name&&(a.name=t.name),t.userData&&(a.userData=t.userData),a}},sf={},ru=class extends un{constructor(t){super(t)}load(t,e,n,s){let r=this,a=this.path===""?Da.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||a;let o=new ni(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(l){let c=null;try{c=JSON.parse(l)}catch(d){s!==void 0&&s(d),Jt("ObjectLoader: Can't parse "+t+".",d.message);return}let h=c.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){s!==void 0&&s(new Error("THREE.ObjectLoader: Can't load "+t)),Jt("ObjectLoader: Can't load "+t);return}r.parse(c,e)},n,s)}async loadAsync(t,e){let n=this,s=this.path===""?Da.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||s;let r=new ni(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);let a=await r.loadAsync(t,e),o;try{o=JSON.parse(a)}catch(c){throw new Error("THREE.ObjectLoader: Can't parse "+t+". "+c.message)}let l=o.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+t);return await n.parseAsync(o)}parse(t,e){let n=this.parseAnimations(t.animations),s=this.parseShapes(t.shapes),r=this.parseGeometries(t.geometries,s),a=this.parseImages(t.images,function(){e!==void 0&&e(c)}),o=this.parseTextures(t.textures,a),l=this.parseMaterials(t.materials,o),c=this.parseObject(t.object,r,l,o,n),h=this.parseSkeletons(t.skeletons,c);if(this.bindSkeletons(c,h),this.bindLightTargets(c),e!==void 0){let d=!1;for(let u in a)if(a[u].data instanceof HTMLImageElement){d=!0;break}d===!1&&e(c)}return c}async parseAsync(t){let e=this.parseAnimations(t.animations),n=this.parseShapes(t.shapes),s=this.parseGeometries(t.geometries,n),r=await this.parseImagesAsync(t.images),a=this.parseTextures(t.textures,r),o=this.parseMaterials(t.materials,a),l=this.parseObject(t.object,s,o,a,e),c=this.parseSkeletons(t.skeletons,l);return this.bindSkeletons(l,c),this.bindLightTargets(l),l}static registerGeometry(t,e){sf[t]=e}parseShapes(t){let e={};if(t!==void 0)for(let n=0,s=t.length;n<s;n++){let r=new Cs().fromJSON(t[n]);e[r.uuid]=r}return e}parseSkeletons(t,e){let n={},s={};if(e.traverse(function(r){r.isBone&&(s[r.uuid]=r)}),t!==void 0)for(let r=0,a=t.length;r<a;r++){let o=new Go().fromJSON(t[r],s);n[o.uuid]=o}return n}parseGeometries(t,e){let n={};if(t!==void 0){let s=new Cl;for(let r=0,a=t.length;r<a;r++){let o,l=t[r];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":o=s.parse(l);break;default:l.type in Xm?o=Xm[l.type].fromJSON(l,e):l.type in sf?o=sf[l.type].fromJSON(l,e):Lt(`ObjectLoader: Unknown geometry type "${l.type}". Use .registerGeometry() before starting the deserialization process.`)}o.uuid=l.uuid,l.name!==void 0&&(o.name=l.name),l.userData!==void 0&&(o.userData=l.userData),n[l.uuid]=o}}return n}parseMaterials(t,e){let n={},s={};if(t!==void 0){let r=new El;r.setTextures(e);for(let a=0,o=t.length;a<o;a++){let l=t[a];n[l.uuid]===void 0&&(n[l.uuid]=r.parse(l)),s[l.uuid]=n[l.uuid]}}return s}parseAnimations(t){let e={};if(t!==void 0)for(let n=0;n<t.length;n++){let s=t[n],r=Is.parse(s);e[r.uuid]=r}return e}parseImages(t,e){let n=this,s={},r;function a(l){return l=n.manager.resolveURL(l),n.manager.itemStart(l),r.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l)})}function o(l){if(typeof l=="string"){let c=l,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return a(h)}else return l.data?{data:na(l.type,l.data),width:l.width,height:l.height}:null}if(t!==void 0&&t.length>0){let l=new Ia(e);r=new Ps(l),r.setCrossOrigin(this.crossOrigin);for(let c=0,h=t.length;c<h;c++){let d=t[c],u=d.url;if(Array.isArray(u)){let f=[];for(let p=0,x=u.length;p<x;p++){let g=u[p],m=o(g);m!==null&&(m instanceof HTMLImageElement?f.push(m):f.push(new An(m.data,m.width,m.height)))}s[d.uuid]=new Qn(f)}else{let f=o(d.url);s[d.uuid]=new Qn(f)}}}return s}async parseImagesAsync(t){let e=this,n={},s;async function r(a){if(typeof a=="string"){let o=a,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:e.resourcePath+o;return await s.loadAsync(l)}else return a.data?{data:na(a.type,a.data),width:a.width,height:a.height}:null}if(t!==void 0&&t.length>0){s=new Ps(this.manager),s.setCrossOrigin(this.crossOrigin);for(let a=0,o=t.length;a<o;a++){let l=t[a],c=l.url;if(Array.isArray(c)){let h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d],p=await r(f);p!==null&&(p instanceof HTMLImageElement?h.push(p):h.push(new An(p.data,p.width,p.height)))}n[l.uuid]=new Qn(h)}else{let h=await r(l.url);n[l.uuid]=new Qn(h)}}}return n}parseTextures(t,e){function n(r,a){return typeof r=="number"?r:(Lt("ObjectLoader.parseTexture: Constant should be in numeric form.",r),a[r])}let s={};if(t!==void 0)for(let r=0,a=t.length;r<a;r++){let o=t[r];o.image===void 0&&Lt('ObjectLoader: No "image" specified for',o.uuid),e[o.image]===void 0&&Lt("ObjectLoader: Undefined image",o.image);let l=e[o.image],c=l.data,h;Array.isArray(c)?(h=new Ts,c.length===6&&(h.needsUpdate=!0)):(c&&c.data?h=new An:h=new ze,c&&(h.needsUpdate=!0)),h.source=l,h.uuid=o.uuid,o.name!==void 0&&(h.name=o.name),o.mapping!==void 0&&(h.mapping=n(o.mapping,ty)),o.channel!==void 0&&(h.channel=o.channel),o.offset!==void 0&&h.offset.fromArray(o.offset),o.repeat!==void 0&&h.repeat.fromArray(o.repeat),o.center!==void 0&&h.center.fromArray(o.center),o.rotation!==void 0&&(h.rotation=o.rotation),o.wrap!==void 0&&(h.wrapS=n(o.wrap[0],tg),h.wrapT=n(o.wrap[1],tg)),o.format!==void 0&&(h.format=o.format),o.internalFormat!==void 0&&(h.internalFormat=o.internalFormat),o.type!==void 0&&(h.type=o.type),o.colorSpace!==void 0&&(h.colorSpace=o.colorSpace),o.minFilter!==void 0&&(h.minFilter=n(o.minFilter,eg)),o.magFilter!==void 0&&(h.magFilter=n(o.magFilter,eg)),o.anisotropy!==void 0&&(h.anisotropy=o.anisotropy),o.flipY!==void 0&&(h.flipY=o.flipY),o.generateMipmaps!==void 0&&(h.generateMipmaps=o.generateMipmaps),o.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(h.unpackAlignment=o.unpackAlignment),o.compareFunction!==void 0&&(h.compareFunction=o.compareFunction),o.normalized!==void 0&&(h.normalized=o.normalized),o.userData!==void 0&&(h.userData=o.userData),s[o.uuid]=h}return s}parseObject(t,e,n,s,r){let a;function o(u){return e[u]===void 0&&Lt("ObjectLoader: Undefined geometry",u),e[u]}function l(u){if(u!==void 0){if(Array.isArray(u)){let f=[];for(let p=0,x=u.length;p<x;p++){let g=u[p];n[g]===void 0&&Lt("ObjectLoader: Undefined material",g),f.push(n[g])}return f}return n[u]===void 0&&Lt("ObjectLoader: Undefined material",u),n[u]}}function c(u){return s[u]===void 0&&Lt("ObjectLoader: Undefined texture",u),s[u]}let h,d;switch(t.type){case"Scene":a=new Gi,t.background!==void 0&&(Number.isInteger(t.background)?a.background=new kt(t.background):a.background=c(t.background)),t.environment!==void 0&&(a.environment=c(t.environment)),t.fog!==void 0&&(t.fog.type==="Fog"?a.fog=new ir(t.fog.color,t.fog.near,t.fog.far):t.fog.type==="FogExp2"&&(a.fog=new ko(t.fog.color,t.fog.density)),t.fog.name!==""&&(a.fog.name=t.fog.name)),t.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=t.backgroundBlurriness),t.backgroundIntensity!==void 0&&(a.backgroundIntensity=t.backgroundIntensity),t.backgroundRotation!==void 0&&a.backgroundRotation.fromArray(t.backgroundRotation),t.environmentIntensity!==void 0&&(a.environmentIntensity=t.environmentIntensity),t.environmentRotation!==void 0&&a.environmentRotation.fromArray(t.environmentRotation);break;case"PerspectiveCamera":a=new Be(t.fov,t.aspect,t.near,t.far),t.focus!==void 0&&(a.focus=t.focus),t.zoom!==void 0&&(a.zoom=t.zoom),t.filmGauge!==void 0&&(a.filmGauge=t.filmGauge),t.filmOffset!==void 0&&(a.filmOffset=t.filmOffset),t.view!==void 0&&(a.view=Object.assign({},t.view));break;case"OrthographicCamera":a=new Ri(t.left,t.right,t.top,t.bottom,t.near,t.far),t.zoom!==void 0&&(a.zoom=t.zoom),t.view!==void 0&&(a.view=Object.assign({},t.view));break;case"AmbientLight":a=new bl(t.color,t.intensity);break;case"DirectionalLight":a=new Mr(t.color,t.intensity),a.target=t.target||"";break;case"PointLight":a=new Ji(t.color,t.intensity,t.distance,t.decay);break;case"RectAreaLight":a=new wl(t.color,t.intensity,t.width,t.height);break;case"SpotLight":a=new Sl(t.color,t.intensity,t.distance,t.angle,t.penumbra,t.decay),a.target=t.target||"";break;case"HemisphereLight":a=new xr(t.color,t.groundColor,t.intensity);break;case"LightProbe":let u=new La().fromArray(t.sh);a=new Tl(u,t.intensity);break;case"SkinnedMesh":h=o(t.geometry),d=l(t.material),a=new Vo(h,d),t.bindMode!==void 0&&(a.bindMode=t.bindMode),t.bindMatrix!==void 0&&a.bindMatrix.fromArray(t.bindMatrix),t.skeleton!==void 0&&(a.skeleton=t.skeleton);break;case"Mesh":h=o(t.geometry),d=l(t.material),a=new oe(h,d);break;case"InstancedMesh":h=o(t.geometry),d=l(t.material);let f=t.count,p=t.instanceMatrix,x=t.instanceColor;a=new ar(h,d,f),a.instanceMatrix=new Wi(new Float32Array(p.array),16),x!==void 0&&(a.instanceColor=new Wi(new Float32Array(x.array),x.itemSize));break;case"BatchedMesh":h=o(t.geometry),d=l(t.material),a=new Wo(t.maxInstanceCount,t.maxVertexCount,t.maxIndexCount,d),a.geometry=h,a.perObjectFrustumCulled=t.perObjectFrustumCulled,a.sortObjects=t.sortObjects,a._drawRanges=t.drawRanges,a._reservedRanges=t.reservedRanges,a._geometryInfo=t.geometryInfo.map(g=>{let m=null,v=null;return g.boundingBox!==void 0&&(m=new Ke().fromJSON(g.boundingBox)),g.boundingSphere!==void 0&&(v=new Ye().fromJSON(g.boundingSphere)),{...g,boundingBox:m,boundingSphere:v}}),a._instanceInfo=t.instanceInfo,a._availableInstanceIds=t._availableInstanceIds,a._availableGeometryIds=t._availableGeometryIds,a._nextIndexStart=t.nextIndexStart,a._nextVertexStart=t.nextVertexStart,a._geometryCount=t.geometryCount,a._maxInstanceCount=t.maxInstanceCount,a._maxVertexCount=t.maxVertexCount,a._maxIndexCount=t.maxIndexCount,a._geometryInitialized=t.geometryInitialized,a._matricesTexture=c(t.matricesTexture.uuid),a._indirectTexture=c(t.indirectTexture.uuid),t.colorsTexture!==void 0&&(a._colorsTexture=c(t.colorsTexture.uuid)),t.boundingSphere!==void 0&&(a.boundingSphere=new Ye().fromJSON(t.boundingSphere)),t.boundingBox!==void 0&&(a.boundingBox=new Ke().fromJSON(t.boundingBox));break;case"LOD":a=new zo;break;case"Line":a=new fi(o(t.geometry),l(t.material));break;case"LineLoop":a=new Xo(o(t.geometry),l(t.material));break;case"LineSegments":a=new Cn(o(t.geometry),l(t.material));break;case"PointCloud":case"Points":a=new qo(o(t.geometry),l(t.material));break;case"Sprite":a=new rr(l(t.material));break;case"Group":a=new qe;break;case"Bone":a=new fa;break;default:a=new ge}if(a.uuid=t.uuid,t.name!==void 0&&(a.name=t.name),t.matrix!==void 0?(a.matrix.fromArray(t.matrix),t.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=t.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)):(t.position!==void 0&&a.position.fromArray(t.position),t.rotation!==void 0&&a.rotation.fromArray(t.rotation),t.quaternion!==void 0&&a.quaternion.fromArray(t.quaternion),t.scale!==void 0&&a.scale.fromArray(t.scale)),t.up!==void 0&&a.up.fromArray(t.up),t.pivot!==void 0&&(a.pivot=new I().fromArray(t.pivot)),t.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),t.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=t.morphTargetInfluences.slice()),t.castShadow!==void 0&&(a.castShadow=t.castShadow),t.receiveShadow!==void 0&&(a.receiveShadow=t.receiveShadow),t.shadow&&(t.shadow.intensity!==void 0&&(a.shadow.intensity=t.shadow.intensity),t.shadow.bias!==void 0&&(a.shadow.bias=t.shadow.bias),t.shadow.normalBias!==void 0&&(a.shadow.normalBias=t.shadow.normalBias),t.shadow.radius!==void 0&&(a.shadow.radius=t.shadow.radius),t.shadow.blurSamples!==void 0&&(a.shadow.blurSamples=t.shadow.blurSamples),t.shadow.focus!==void 0&&(a.shadow.focus=t.shadow.focus),t.shadow.aspect!==void 0&&(a.shadow.aspect=t.shadow.aspect),t.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(t.shadow.mapSize),t.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(t.shadow.camera))),t.visible!==void 0&&(a.visible=t.visible),t.frustumCulled!==void 0&&(a.frustumCulled=t.frustumCulled),t.renderOrder!==void 0&&(a.renderOrder=t.renderOrder),t.static!==void 0&&(a.static=t.static),t.userData!==void 0&&(a.userData=t.userData),t.layers!==void 0&&(a.layers.mask=t.layers),t.children!==void 0){let u=t.children;for(let f=0;f<u.length;f++)a.add(this.parseObject(u[f],e,n,s,r))}if(t.animations!==void 0){let u=t.animations;for(let f=0;f<u.length;f++){let p=u[f];a.animations.push(r[p])}}if(t.type==="LOD"){t.autoUpdate!==void 0&&(a.autoUpdate=t.autoUpdate);let u=t.levels;for(let f=0;f<u.length;f++){let p=u[f],x=a.getObjectByProperty("uuid",p.object);x!==void 0&&a.addLevel(x,p.distance,p.hysteresis)}}return a}bindSkeletons(t,e){Object.keys(e).length!==0&&t.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){let s=e[n.skeleton];s===void 0?Lt("ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(s,n.bindMatrix)}})}bindLightTargets(t){t.traverse(function(e){if(e.isDirectionalLight||e.isSpotLight){let n=e.target,s=t.getObjectByProperty("uuid",n);s!==void 0?e.target=s:e.target=new ge}})}},ty={UVMapping:Fl,CubeReflectionMapping:gi,CubeRefractionMapping:ts,EquirectangularReflectionMapping:za,EquirectangularRefractionMapping:Va,CubeUVReflectionMapping:Tr},tg={RepeatWrapping:ys,ClampToEdgeWrapping:En,MirroredRepeatWrapping:sa},eg={NearestFilter:ke,NearestMipmapNearestFilter:$u,NearestMipmapLinearFilter:Er,LinearFilter:Ce,LinearMipmapNearestFilter:Ga,LinearMipmapLinearFilter:_i},rf=new WeakMap,au=class extends un{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Lt("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Lt("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=hi.get(`image-bitmap:${t}`);if(a!==void 0){if(r.manager.itemStart(t),a.then){a.then(c=>{rf.has(a)===!0?(s&&s(rf.get(a)),r.manager.itemError(t),r.manager.itemEnd(t)):(e&&e(c),r.manager.itemEnd(t))});return}setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(t,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return hi.add(`image-bitmap:${t}`,c),e&&e(c),r.manager.itemEnd(t),c}).catch(function(c){s&&s(c),rf.set(l,c),hi.remove(`image-bitmap:${t}`),r.manager.itemError(t),r.manager.itemEnd(t)});hi.add(`image-bitmap:${t}`,l),r.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Ch,Na=class{static getContext(){return Ch===void 0&&(Ch=new(window.AudioContext||window.webkitAudioContext)),Ch}static setContext(t){Ch=t}},ou=class extends un{constructor(t){super(t)}load(t,e,n,s){let r=this,a=new ni(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(l){try{let c=l.slice(0),h=Na.getContext(),d=t+"#decode";r.manager.itemStart(d),h.decodeAudioData(c,function(u){e(u),r.manager.itemEnd(d)}).catch(function(u){o(u),r.manager.itemEnd(d)})}catch(c){o(c)}},n,s);function o(l){s?s(l):Jt(l),r.manager.itemError(t)}}},ng=new se,ig=new se,Ws=new se,lu=class{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Be,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Be,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(t){let e=this._cache;if(e.focus!==t.focus||e.fov!==t.fov||e.aspect!==t.aspect*this.aspect||e.near!==t.near||e.far!==t.far||e.zoom!==t.zoom||e.eyeSep!==this.eyeSep){e.focus=t.focus,e.fov=t.fov,e.aspect=t.aspect*this.aspect,e.near=t.near,e.far=t.far,e.zoom=t.zoom,e.eyeSep=this.eyeSep,Ws.copy(t.projectionMatrix);let s=e.eyeSep/2,r=s*e.near/e.focus,a=e.near*Math.tan(Js*e.fov*.5)/e.zoom,o,l;ig.elements[12]=-s,ng.elements[12]=s,o=-a*e.aspect+r,l=a*e.aspect+r,Ws.elements[0]=2*e.near/(l-o),Ws.elements[8]=(l+o)/(l-o),this.cameraL.projectionMatrix.copy(Ws),o=-a*e.aspect-r,l=a*e.aspect-r,Ws.elements[0]=2*e.near/(l-o),Ws.elements[8]=(l+o)/(l-o),this.cameraR.projectionMatrix.copy(Ws)}this.cameraL.matrix.copy(t.matrixWorld).multiply(ig),this.cameraL.matrixWorldNeedsUpdate=!0,this.cameraR.matrix.copy(t.matrixWorld).multiply(ng),this.cameraR.matrixWorldNeedsUpdate=!0}},jr=-90,Qr=1,Rl=class extends ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Be(jr,Qr,t,e);s.layers=this.layers,this.add(s);let r=new Be(jr,Qr,t,e);r.layers=this.layers,this.add(r);let a=new Be(jr,Qr,t,e);a.layers=this.layers,this.add(a);let o=new Be(jr,Qr,t,e);o.layers=this.layers,this.add(o);let l=new Be(jr,Qr,t,e);l.layers=this.layers,this.add(l);let c=new Be(jr,Qr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Un)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ms)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Il=class extends Be{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Pl=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=ey.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function ey(){this._document.hidden===!1&&this.reset()}var Xs=new I,af=new Fe,ny=new I,qs=new I,Ys=new I,cu=class extends ge{constructor(){super(),this.type="AudioListener",this.context=Na.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._timer=new Pl}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t),this._timer.update();let e=this.context.listener;if(this.timeDelta=this._timer.getDelta(),this.matrixWorld.decompose(Xs,af,ny),qs.set(0,0,-1).applyQuaternion(af),Ys.set(0,1,0).applyQuaternion(af),e.positionX){let n=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(Xs.x,n),e.positionY.linearRampToValueAtTime(Xs.y,n),e.positionZ.linearRampToValueAtTime(Xs.z,n),e.forwardX.linearRampToValueAtTime(qs.x,n),e.forwardY.linearRampToValueAtTime(qs.y,n),e.forwardZ.linearRampToValueAtTime(qs.z,n),e.upX.linearRampToValueAtTime(Ys.x,n),e.upY.linearRampToValueAtTime(Ys.y,n),e.upZ.linearRampToValueAtTime(Ys.z,n)}else e.setPosition(Xs.x,Xs.y,Xs.z),e.setOrientation(qs.x,qs.y,qs.z,Ys.x,Ys.y,Ys.z)}},Ll=class extends ge{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){Lt("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){Lt("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;let e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){Lt("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(t=0){if(this.hasPlaybackControl===!1){Lt("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+t),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){return this.detune=t,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){Lt("Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(Lt("Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){Lt("Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}copy(t,e){return super.copy(t,e),t.sourceType!=="buffer"?(Lt("Audio: Audio source type cannot be copied."),this):(this.autoplay=t.autoplay,this.buffer=t.buffer,this.detune=t.detune,this.loop=t.loop,this.loopStart=t.loopStart,this.loopEnd=t.loopEnd,this.offset=t.offset,this.duration=t.duration,this.playbackRate=t.playbackRate,this.hasPlaybackControl=t.hasPlaybackControl,this.sourceType=t.sourceType,this.filters=t.filters.slice(),this)}clone(t){return new this.constructor(this.listener).copy(this,t)}},Zs=new I,sg=new Fe,iy=new I,$s=new I,hu=class extends Ll{constructor(t){super(t),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(t){return this.panner.refDistance=t,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(t){return this.panner.rolloffFactor=t,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(t){return this.panner.distanceModel=t,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(t){return this.panner.maxDistance=t,this}setDirectionalCone(t,e,n){return this.panner.coneInnerAngle=t,this.panner.coneOuterAngle=e,this.panner.coneOuterGain=n,this}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Zs,sg,iy),$s.set(0,0,1).applyQuaternion(sg);let e=this.panner;if(e.positionX){let n=this.context.currentTime+this.listener.timeDelta;e.positionX.linearRampToValueAtTime(Zs.x,n),e.positionY.linearRampToValueAtTime(Zs.y,n),e.positionZ.linearRampToValueAtTime(Zs.z,n),e.orientationX.linearRampToValueAtTime($s.x,n),e.orientationY.linearRampToValueAtTime($s.y,n),e.orientationZ.linearRampToValueAtTime($s.z,n)}else e.setPosition(Zs.x,Zs.y,Zs.z),e.setOrientation($s.x,$s.y,$s.z)}},uu=class{constructor(t,e=2048){this.analyser=t.context.createAnalyser(),this.analyser.fftSize=e,this.data=new Uint8Array(this.analyser.frequencyBinCount),t.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let t=0,e=this.getFrequencyData();for(let n=0;n<e.length;n++)t+=e[n];return t/e.length}},Dl=class{constructor(t,e,n){this.binding=t,this.valueSize=n;let s,r,a;switch(e){case"quaternion":s=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){let n=this.buffer,s=this.valueSize,r=t*s+s,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==s;++o)n[r+o]=n[o];a=e}else{a+=e;let o=e/a;this._mixBufferRegion(n,r,0,o,s)}this.cumulativeWeight=a}accumulateAdditive(t){let e=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,s,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){let e=this.valueSize,n=this.buffer,s=t*e+e,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=e*this._origIndex;this._mixBufferRegion(n,s,l,1-r,e)}a>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*e,1,e);for(let l=e,c=e+e;l!==c;++l)if(n[l]!==n[l+e]){o.setValue(n,s);break}}saveOriginalState(){let t=this.binding,e=this.buffer,n=this.valueSize,s=n*this._origIndex;t.getValue(e,s);for(let r=n,a=s;r!==a;++r)e[r]=e[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){let t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,s,r){if(s>=.5)for(let a=0;a!==r;++a)t[e+a]=t[n+a]}_slerp(t,e,n,s){Fe.slerpFlat(t,e,t,e,t,n,s)}_slerpAdditive(t,e,n,s,r){let a=this._workIndex*r;Fe.multiplyQuaternionsFlat(t,a,t,e,t,n),Fe.slerpFlat(t,e,t,e,t,a,s)}_lerp(t,e,n,s,r){let a=1-s;for(let o=0;o!==r;++o){let l=e+o;t[l]=t[l]*a+t[n+o]*s}}_lerpAdditive(t,e,n,s,r){for(let a=0;a!==r;++a){let o=e+a;t[o]=t[o]+t[n+a]*s}}},up="\\[\\]\\.:\\/",sy=new RegExp("["+up+"]","g"),dp="[^"+up+"]",ry="[^"+up.replace("\\.","")+"]",ay=/((?:WC+[\/:])*)/.source.replace("WC",dp),oy=/(WCOD+)?/.source.replace("WCOD",ry),ly=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",dp),cy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",dp),hy=new RegExp("^"+ay+oy+ly+cy+"$"),uy=["material","materials","bones","map"],vf=class{constructor(t,e,n){let s=n||we.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},we=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(sy,"")}static parseTrackName(t){let e=hy.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);uy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Lt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Jt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Jt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Jt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Jt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Jt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Jt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};we.Composite=vf;we.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};we.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};we.prototype.GetterByBindingType=[we.prototype._getValue_direct,we.prototype._getValue_array,we.prototype._getValue_arrayElement,we.prototype._getValue_toArray];we.prototype.SetterByBindingTypeAndVersioning=[[we.prototype._setValue_direct,we.prototype._setValue_direct_setNeedsUpdate,we.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[we.prototype._setValue_array,we.prototype._setValue_array_setNeedsUpdate,we.prototype._setValue_array_setMatrixWorldNeedsUpdate],[we.prototype._setValue_arrayElement,we.prototype._setValue_arrayElement_setNeedsUpdate,we.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[we.prototype._setValue_fromArray,we.prototype._setValue_fromArray_setNeedsUpdate,we.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var du=class{constructor(){this.isAnimationObjectGroup=!0,this.uuid=Wn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;let t={};this._indicesByUUID=t;for(let n=0,s=arguments.length;n!==s;++n)t[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};let e=this;this.stats={objects:{get total(){return e._objects.length},get inUse(){return this.total-e.nCachedObjects_}},get bindingsPerObject(){return e._bindings.length}}}add(){let t=this._objects,e=this._indicesByUUID,n=this._paths,s=this._parsedPaths,r=this._bindings,a=r.length,o,l=t.length,c=this.nCachedObjects_;for(let h=0,d=arguments.length;h!==d;++h){let u=arguments[h],f=u.uuid,p=e[f];if(p===void 0){p=l++,e[f]=p,t.push(u);for(let x=0,g=a;x!==g;++x)r[x].push(new we(u,n[x],s[x]))}else if(p<c){o=t[p];let x=--c,g=t[x];e[g.uuid]=p,t[p]=g,e[f]=x,t[x]=u;for(let m=0,v=a;m!==v;++m){let b=r[m],y=b[x],E=b[p];b[p]=y,E===void 0&&(E=new we(u,n[m],s[m])),b[x]=E}}else t[p]!==o&&Jt("AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){let t=this._objects,e=this._indicesByUUID,n=this._bindings,s=n.length,r=this.nCachedObjects_;for(let a=0,o=arguments.length;a!==o;++a){let l=arguments[a],c=l.uuid,h=e[c];if(h!==void 0&&h>=r){let d=r++,u=t[d];e[u.uuid]=h,t[h]=u,e[c]=d,t[d]=l;for(let f=0,p=s;f!==p;++f){let x=n[f],g=x[d],m=x[h];x[h]=g,x[d]=m}}}this.nCachedObjects_=r}uncache(){let t=this._objects,e=this._indicesByUUID,n=this._bindings,s=n.length,r=this.nCachedObjects_,a=t.length;for(let o=0,l=arguments.length;o!==l;++o){let c=arguments[o],h=c.uuid,d=e[h];if(d!==void 0)if(delete e[h],d<r){let u=--r,f=t[u],p=--a,x=t[p];d!==u&&(e[f.uuid]=d),t[d]=f,u!==p&&(e[x.uuid]=u),t[u]=x,t.pop();for(let g=0,m=s;g!==m;++g){let v=n[g],b=v[u],y=v[p];v[d]=b,v[u]=y,v.pop()}}else{let u=--a,f=t[u];d!==u&&(e[f.uuid]=d),t[d]=f,t.pop();for(let p=0,x=s;p!==x;++p){let g=n[p];g[d]=g[u],g.pop()}}}this.nCachedObjects_=r}subscribe_(t,e){let n=this._bindingsIndicesByPath,s=n[t],r=this._bindings;if(s!==void 0)return r[s];let a=this._paths,o=this._parsedPaths,l=this._objects,c=l.length,h=this.nCachedObjects_,d=new Array(c);s=r.length,n[t]=s,a.push(t),o.push(e),r.push(d);for(let u=h,f=l.length;u!==f;++u){let p=l[u];d[u]=new we(p,t,e)}return d}unsubscribe_(t){let e=this._bindingsIndicesByPath,n=e[t];if(n!==void 0){let s=this._paths,r=this._parsedPaths,a=this._bindings,o=a.length-1,l=a[o],c=s[o];e[c]=n,a[n]=l,a.pop(),r[n]=r[o],r.pop(),s[n]=s[o],s.pop()}}},Nl=class{constructor(t,e,n=null,s=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=s;let r=e.tracks,a=r.length,o=new Array(a),l={endingStart:_s,endingEnd:_s};for(let c=0;c!==a;++c){let h=r[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Zf,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n=!1){if(t.fadeOut(e),this.fadeIn(e),n===!0){let s=this._clip.duration,r=t._clip.duration,a=r/s,o=s/r;t._restoreTimeScale=t.timeScale,this._restoreTimeScale=this.timeScale,t.warp(1,a,e),this.warp(o,1,e)}return this}crossFadeTo(t,e,n=!1){return t.crossFadeFrom(this,e,n)}stopFading(){let t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){let s=this._mixer,r=s.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=s._lendControlInterpolant(),this._timeScaleInterpolant=o);let l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=t/a,c[1]=e/a,this}stopWarping(){let t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,s){if(!this.enabled){this._updateWeight(t);return}let r=this._startTime;if(r!==null){let l=(t-r)*n;l<0||n===0?e=0:(this._startTime=null,e=n*l)}e*=this._updateTimeScale(t);let a=this._updateTime(e),o=this._updateWeight(t);if(o>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case nd:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case yc:default:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(a),c[h].accumulate(s,o)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;let n=this._weightInterpolant;if(n!==null){let s=n.evaluate(t)[0];e*=s,t>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let s=n.evaluate(t)[0];e*=s,t>n.parameterPositions[1]&&(e===0?this.paused=!0:(this._restoreTimeScale!==null&&(e=this._restoreTimeScale),this.timeScale=e),this.stopWarping())}}return this._effectiveTimeScale=e,e}_updateTime(t){let e=this._clip.duration,n=this.loop,s=this.time+t,r=this._loopCount,a=n===$f;if(t===0)return r===-1?s:a&&(r&1)===1?e-s:s;if(n===Yf){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(s>=e)s=e;else if(s<0)s=0;else{this.time=s;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),s>=e||s<0){let o=Math.floor(s/e);s-=e*o,r+=Math.abs(o);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=t>0?e:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){let c=t<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=r,this.time=s;if(a&&(r&1)===1)return e-s}return s}_setEndings(t,e,n){let s=this._interpolantSettings;n?(s.endingStart=xs,s.endingEnd=xs):(t?s.endingStart=this.zeroSlopeAtStart?xs:_s:s.endingStart=aa,e?s.endingEnd=this.zeroSlopeAtEnd?xs:_s:s.endingEnd=aa)}_scheduleFading(t,e,n){let s=this._mixer,r=s.time,a=this._weightInterpolant;a===null&&(a=s._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=e,o[1]=r+t,l[1]=n,this}},dy=new Float32Array(1),fu=class extends Fn{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(t,e){let n=t._localRoot||this._root,s=t._clip.tracks,r=s.length,a=t._propertyBindings,o=t._interpolants,l=n.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let d=0;d!==r;++d){let u=s[d],f=u.name,p=h[f];if(p!==void 0)++p.referenceCount,a[d]=p;else{if(p=a[d],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,f));continue}let x=e&&e._propertyBindings[d].binding.parsedPath;p=new Dl(we.create(n,f,x),u.ValueTypeName,u.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,f),a[d]=p}o[d].resultBuffer=p.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){let n=(t._localRoot||this._root).uuid,s=t._clip.uuid,r=this._actionsByClip[s];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,s,n)}let e=t._propertyBindings;for(let n=0,s=e.length;n!==s;++n){let r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){let e=t._propertyBindings;for(let n=0,s=e.length;n!==s;++n){let r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){let e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){let s=this._actions,r=this._actionsByClip,a=r[e];if(a===void 0)a={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=a;else{let o=a.knownActions;t._byClipCacheIndex=o.length,o.push(t)}t._cacheIndex=s.length,s.push(t),a.actionByRoot[n]=t}_removeInactiveAction(t){let e=this._actions,n=e[e.length-1],s=t._cacheIndex;n._cacheIndex=s,e[s]=n,e.pop(),t._cacheIndex=null;let r=t._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],h=t._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),t._byClipCacheIndex=null;let d=o.actionByRoot,u=(t._localRoot||this._root).uuid;delete d[u],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){let e=t._propertyBindings;for(let n=0,s=e.length;n!==s;++n){let r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){let e=this._actions,n=t._cacheIndex,s=this._nActiveActions++,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){let e=this._actions,n=t._cacheIndex,s=--this._nActiveActions,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){let s=this._bindingsByRootAndName,r=this._bindings,a=s[e];a===void 0&&(a={},s[e]=a),a[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){let e=this._bindings,n=t.binding,s=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[s],l=e[e.length-1],c=t._cacheIndex;l._cacheIndex=c,e[c]=l,e.pop(),delete o[r],Object.keys(o).length===0&&delete a[s]}_lendBinding(t){let e=this._bindings,n=t._cacheIndex,s=this._nActiveBindings++,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){let e=this._bindings,n=t._cacheIndex,s=--this._nActiveBindings,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){let t=this._controlInterpolants,e=this._nActiveControlInterpolants++,n=t[e];return n===void 0&&(n=new Aa(new Float32Array(2),new Float32Array(2),1,dy),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){let e=this._controlInterpolants,n=t.__cacheIndex,s=--this._nActiveControlInterpolants,r=e[s];t.__cacheIndex=s,e[s]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){let s=e||this._root,r=s.uuid,a=typeof t=="string"?Is.findByName(s,t):t,o=a!==null?a.uuid:t,l=this._actionsByClip[o],c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=yc),l!==void 0){let d=l.actionByRoot[r];if(d!==void 0&&d.blendMode===n)return d;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;let h=new Nl(this,a,e,n);return this._bindAction(h,c),this._addInactiveAction(h,o,r),h}existingAction(t,e){let n=e||this._root,s=n.uuid,r=typeof t=="string"?Is.findByName(n,t):t,a=r?r.uuid:t,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[s]||null}stopAllAction(){let t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;let e=this._actions,n=this._nActiveActions,s=this.time+=t,r=Math.sign(t),a=this._accuIndex^=1;for(let c=0;c!==n;++c)e[c]._update(s,t,r,a);let o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){let e=this._actions,n=t.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){let a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){let c=a[o];this._deactivateAction(c);let h=c._cacheIndex,d=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=h,e[h]=d,e.pop(),this._removeInactiveBindingsForAction(c)}delete s[n]}}uncacheRoot(t){let e=t.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,l=o[e];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let s=this._bindingsByRootAndName,r=s[e];if(r!==void 0)for(let a in r){let o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(t,e){let n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}},pu=class extends ha{constructor(t=1,e=1,n=1,s={}){super(t,e,s),this.isRenderTarget3D=!0,this.depth=n;for(let r=0;r<this.textures.length;r++){let a=new tr(null,t,e,n);a.isRenderTargetTexture=!0,a.renderTarget=this,this.textures[r]=a}this._setTextureOptions(s)}},mu=class i{constructor(t){this.value=t}clone(){return new i(this.value.clone===void 0?this.value:this.value.clone())}},fy=0,gu=class extends Fn{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:fy++}),this.name="",this.usage=Sc,this.uniforms=[]}add(t){return this.uniforms.push(t),this}remove(t){let e=this.uniforms.indexOf(t);return e!==-1&&this.uniforms.splice(e,1),this}setName(t){return this.name=t,this}setUsage(t){return this.usage=t,this}dispose(){this.dispatchEvent({type:"dispose"})}copy(t){this.name=t.name,this.usage=t.usage;let e=t.uniforms;this.uniforms.length=0;for(let n=0,s=e.length;n<s;n++){let r=Array.isArray(e[n])?e[n]:[e[n]];for(let a=0;a<r.length;a++)this.uniforms.push(r[a].clone())}return this}clone(){return new this.constructor().copy(this)}},_u=class extends sr{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}},xu=class{constructor(t,e,n,s,r,a=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=t,this.type=e,this.itemSize=n,this.elementSize=s,this.count=r,this.normalized=a,this.version=0}set needsUpdate(t){t===!0&&this.version++}setBuffer(t){return this.buffer=t,this}setType(t,e){return this.type=t,this.elementSize=e,this}setItemSize(t){return this.itemSize=t,this}setCount(t){return this.count=t,this}},rg=new se,Ua=class{constructor(t,e,n=0,s=1/0){this.ray=new di(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new er,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Jt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return rg.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(rg),this}intersectObject(t,e=!0,n=[]){return Mf(t,this,n,e),n.sort(ag),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Mf(t[s],this,n,e);return n.sort(ag),n}};function ag(i,t){return i.distance-t.distance}function Mf(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Mf(r[a],t,e,!0)}}var yu=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Lt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}},Sr=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ie(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ie(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},vu=class{constructor(t=1,e=0,n=0){this.radius=t,this.theta=e,this.y=n}set(t,e,n){return this.radius=t,this.theta=e,this.y=n,this}copy(t){return this.radius=t.radius,this.theta=t.theta,this.y=t.y,this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+n*n),this.theta=Math.atan2(t,n),this.y=e,this}clone(){return new this.constructor().copy(this)}},Mu=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}},og=new ut,Ul=class{constructor(t=new ut(1/0,1/0),e=new ut(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=og.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,og).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},lg=new I,Rh=new I,ta=new I,ea=new I,of=new I,py=new I,my=new I,Su=class{constructor(t=new I,e=new I){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){lg.subVectors(t,this.start),Rh.subVectors(this.end,this.start);let n=Rh.dot(Rh);if(n===0)return 0;let r=Rh.dot(lg)/n;return e&&(r=ie(r,0,1)),r}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=py,n=my){let s=10000000000000001e-32,r,a,o=this.start,l=t.start,c=this.end,h=t.end;ta.subVectors(c,o),ea.subVectors(h,l),of.subVectors(o,l);let d=ta.dot(ta),u=ea.dot(ea),f=ea.dot(of);if(d<=s&&u<=s)return e.copy(o),n.copy(l),e.sub(n),e.dot(e);if(d<=s)r=0,a=f/u,a=ie(a,0,1);else{let p=ta.dot(of);if(u<=s)a=0,r=ie(-p/d,0,1);else{let x=ta.dot(ea),g=d*u-x*x;g!==0?r=ie((x*f-p*u)/g,0,1):r=0,a=(x*r+f)/u,a<0?(a=0,r=ie(-p/d,0,1)):a>1&&(a=1,r=ie((x-p)/d,0,1))}}return e.copy(o).addScaledVector(ta,r),n.copy(l).addScaledVector(ea,a),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}},cg=new I,bu=class extends ge{constructor(t,e){super(),this.light=t,this.matrixAutoUpdate=!1,this.color=e,this.type="SpotLightHelper";let n=new re,s=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,o=1,l=32;a<l;a++,o++){let c=a/l*Math.PI*2,h=o/l*Math.PI*2;s.push(Math.cos(c),Math.sin(c),1,Math.cos(h),Math.sin(h),1)}n.setAttribute("position",new Vt(s,3));let r=new $e({fog:!1,toneMapped:!1});this.cone=new Cn(n,r),this.add(this.cone),this.update()}dispose(){super.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorldNeedsUpdate=!0;let t=this.light.distance?this.light.distance:1e3,e=t*Math.tan(this.light.angle);this.cone.scale.set(e,e,t),cg.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(cg),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}},gs=new I,Ih=new se,lf=new se,wu=class extends Cn{constructor(t){let e=M0(t),n=new re,s=[],r=[];for(let c=0;c<e.length;c++){let h=e[c];h.parent&&h.parent.isBone&&(s.push(0,0,0),s.push(0,0,0),r.push(0,0,0),r.push(0,0,0))}n.setAttribute("position",new Vt(s,3)),n.setAttribute("color",new Vt(r,3));let a=new $e({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,a),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=t,this.bones=e,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1;let o=new kt(255),l=new kt(65280);this.setColors(o,l)}updateMatrixWorld(t){let e=this.bones,n=this.geometry,s=n.getAttribute("position");lf.copy(this.root.matrixWorld).invert();for(let r=0,a=0;r<e.length;r++){let o=e[r];o.parent&&o.parent.isBone&&(Ih.multiplyMatrices(lf,o.matrixWorld),gs.setFromMatrixPosition(Ih),s.setXYZ(a,gs.x,gs.y,gs.z),Ih.multiplyMatrices(lf,o.parent.matrixWorld),gs.setFromMatrixPosition(Ih),s.setXYZ(a+1,gs.x,gs.y,gs.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(t)}setColors(t,e){let s=this.geometry.getAttribute("color");for(let r=0;r<s.count;r+=2)s.setXYZ(r,t.r,t.g,t.b),s.setXYZ(r+1,e.r,e.g,e.b);return s.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};function M0(i){let t=[];i.isBone===!0&&t.push(i);for(let e=0;e<i.children.length;e++)t.push(...M0(i.children[e]));return t}var Tu=class extends oe{constructor(t,e,n){let s=new Yi(e,4,2),r=new hn({wireframe:!0,fog:!1,toneMapped:!1});super(s,r),this.light=t,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}},gy=new I,hg=new kt,ug=new kt,Eu=class extends ge{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";let s=new ba(e);s.rotateY(Math.PI*.5),this.material=new hn({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);let r=s.getAttribute("position"),a=new Float32Array(r.count*3);s.setAttribute("color",new Te(a,3)),this.add(new oe(s,this.material)),this.update()}dispose(){super.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){let t=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{let e=t.geometry.getAttribute("color");hg.copy(this.light.color),ug.copy(this.light.groundColor);for(let n=0,s=e.count;n<s;n++){let r=n<s/2?hg:ug;e.setXYZ(n,r.r,r.g,r.b)}e.needsUpdate=!0}this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),t.lookAt(gy.setFromMatrixPosition(this.light.matrixWorld).negate())}},Au=class extends Cn{constructor(t=10,e=10,n=4473924,s=8947848){n=new kt(n),s=new kt(s);let r=e/2,a=t/e,o=t/2,l=[],c=[];for(let u=0,f=0,p=-o;u<=e;u++,p+=a){l.push(-o,0,p,o,0,p),l.push(p,0,-o,p,0,o);let x=u===r?n:s;x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3}let h=new re;h.setAttribute("position",new Vt(l,3)),h.setAttribute("color",new Vt(c,3));let d=new $e({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},Cu=class extends Cn{constructor(t=10,e=16,n=8,s=64,r=4473924,a=8947848){r=new kt(r),a=new kt(a);let o=[],l=[];if(e>1)for(let d=0;d<e;d++){let u=d/e*(Math.PI*2),f=Math.sin(u)*t,p=Math.cos(u)*t;o.push(0,0,0),o.push(f,0,p);let x=d&1?r:a;l.push(x.r,x.g,x.b),l.push(x.r,x.g,x.b)}for(let d=0;d<n;d++){let u=d&1?r:a,f=t-t/n*d;for(let p=0;p<s;p++){let x=p/s*(Math.PI*2),g=Math.sin(x)*f,m=Math.cos(x)*f;o.push(g,0,m),l.push(u.r,u.g,u.b),x=(p+1)/s*(Math.PI*2),g=Math.sin(x)*f,m=Math.cos(x)*f,o.push(g,0,m),l.push(u.r,u.g,u.b)}}let c=new re;c.setAttribute("position",new Vt(o,3)),c.setAttribute("color",new Vt(l,3));let h=new $e({vertexColors:!0,toneMapped:!1});super(c,h),this.type="PolarGridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},dg=new I,Ph=new I,fg=new I,Ru=class extends ge{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",e===void 0&&(e=1);let s=new re;s.setAttribute("position",new Vt([-e,e,0,e,e,0,e,-e,0,-e,-e,0,-e,e,0],3));let r=new $e({fog:!1,toneMapped:!1});this.lightPlane=new fi(s,r),this.add(this.lightPlane),s=new re,s.setAttribute("position",new Vt([0,0,0,0,0,1],3)),this.targetLine=new fi(s,r),this.add(this.targetLine),this.update()}dispose(){super.dispose(),this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),dg.setFromMatrixPosition(this.light.matrixWorld),Ph.setFromMatrixPosition(this.light.target.matrixWorld),fg.subVectors(Ph,dg),this.lightPlane.lookAt(Ph),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Ph),this.targetLine.scale.z=fg.length()}},Lh=new I,Oe=new vr,Iu=class extends Cn{constructor(t){let e=new re,n=new $e({color:16777215,vertexColors:!0,toneMapped:!1}),s=[],r=[],a={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(p,x){l(p),l(x)}function l(p){s.push(0,0,0),r.push(0,0,0),a[p]===void 0&&(a[p]=[]),a[p].push(s.length/3-1)}e.setAttribute("position",new Vt(s,3)),e.setAttribute("color",new Vt(r,3)),super(e,n),this.type="CameraHelper",this.camera=t,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();let c=new kt(16755200),h=new kt(16711680),d=new kt(43775),u=new kt(16777215),f=new kt(3355443);this.setColors(c,h,d,u,f)}setColors(t,e,n,s,r){let o=this.geometry.getAttribute("color");return o.setXYZ(0,t.r,t.g,t.b),o.setXYZ(1,t.r,t.g,t.b),o.setXYZ(2,t.r,t.g,t.b),o.setXYZ(3,t.r,t.g,t.b),o.setXYZ(4,t.r,t.g,t.b),o.setXYZ(5,t.r,t.g,t.b),o.setXYZ(6,t.r,t.g,t.b),o.setXYZ(7,t.r,t.g,t.b),o.setXYZ(8,t.r,t.g,t.b),o.setXYZ(9,t.r,t.g,t.b),o.setXYZ(10,t.r,t.g,t.b),o.setXYZ(11,t.r,t.g,t.b),o.setXYZ(12,t.r,t.g,t.b),o.setXYZ(13,t.r,t.g,t.b),o.setXYZ(14,t.r,t.g,t.b),o.setXYZ(15,t.r,t.g,t.b),o.setXYZ(16,t.r,t.g,t.b),o.setXYZ(17,t.r,t.g,t.b),o.setXYZ(18,t.r,t.g,t.b),o.setXYZ(19,t.r,t.g,t.b),o.setXYZ(20,t.r,t.g,t.b),o.setXYZ(21,t.r,t.g,t.b),o.setXYZ(22,t.r,t.g,t.b),o.setXYZ(23,t.r,t.g,t.b),o.setXYZ(24,e.r,e.g,e.b),o.setXYZ(25,e.r,e.g,e.b),o.setXYZ(26,e.r,e.g,e.b),o.setXYZ(27,e.r,e.g,e.b),o.setXYZ(28,e.r,e.g,e.b),o.setXYZ(29,e.r,e.g,e.b),o.setXYZ(30,e.r,e.g,e.b),o.setXYZ(31,e.r,e.g,e.b),o.setXYZ(32,n.r,n.g,n.b),o.setXYZ(33,n.r,n.g,n.b),o.setXYZ(34,n.r,n.g,n.b),o.setXYZ(35,n.r,n.g,n.b),o.setXYZ(36,n.r,n.g,n.b),o.setXYZ(37,n.r,n.g,n.b),o.setXYZ(38,s.r,s.g,s.b),o.setXYZ(39,s.r,s.g,s.b),o.setXYZ(40,r.r,r.g,r.b),o.setXYZ(41,r.r,r.g,r.b),o.setXYZ(42,r.r,r.g,r.b),o.setXYZ(43,r.r,r.g,r.b),o.setXYZ(44,r.r,r.g,r.b),o.setXYZ(45,r.r,r.g,r.b),o.setXYZ(46,r.r,r.g,r.b),o.setXYZ(47,r.r,r.g,r.b),o.setXYZ(48,r.r,r.g,r.b),o.setXYZ(49,r.r,r.g,r.b),o.needsUpdate=!0,this}update(){let t=this.geometry,e=this.pointMap,n=1,s=1,r,a;if(Oe.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)r=1,a=0;else if(this.camera.coordinateSystem===Un)r=-1,a=1;else if(this.camera.coordinateSystem===Ms)r=0,a=1;else throw new Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);Ge("c",e,t,Oe,0,0,r),Ge("t",e,t,Oe,0,0,a),Ge("n1",e,t,Oe,-n,-s,r),Ge("n2",e,t,Oe,n,-s,r),Ge("n3",e,t,Oe,-n,s,r),Ge("n4",e,t,Oe,n,s,r),Ge("f1",e,t,Oe,-n,-s,a),Ge("f2",e,t,Oe,n,-s,a),Ge("f3",e,t,Oe,-n,s,a),Ge("f4",e,t,Oe,n,s,a),Ge("u1",e,t,Oe,n*.7,s*1.1,r),Ge("u2",e,t,Oe,-n*.7,s*1.1,r),Ge("u3",e,t,Oe,0,s*2,r),Ge("cf1",e,t,Oe,-n,0,a),Ge("cf2",e,t,Oe,n,0,a),Ge("cf3",e,t,Oe,0,-s,a),Ge("cf4",e,t,Oe,0,s,a),Ge("cn1",e,t,Oe,-n,0,r),Ge("cn2",e,t,Oe,n,0,r),Ge("cn3",e,t,Oe,0,-s,r),Ge("cn4",e,t,Oe,0,s,r),t.getAttribute("position").needsUpdate=!0}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};function Ge(i,t,e,n,s,r,a){Lh.set(s,r,a).unproject(n);let o=t[i];if(o!==void 0){let l=e.getAttribute("position");for(let c=0,h=o.length;c<h;c++)l.setXYZ(o[c],Lh.x,Lh.y,Lh.z)}}var Dh=new Ke,Fa=class extends Cn{constructor(t,e=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=new Float32Array(24),r=new re;r.setIndex(new Te(n,1)),r.setAttribute("position",new Te(s,3)),super(r,new $e({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&Dh.setFromObject(this.object),Dh.isEmpty())return;let t=Dh.min,e=Dh.max,n=this.geometry.attributes.position,s=n.array;s[0]=e.x,s[1]=e.y,s[2]=e.z,s[3]=t.x,s[4]=e.y,s[5]=e.z,s[6]=t.x,s[7]=t.y,s[8]=e.z,s[9]=e.x,s[10]=t.y,s[11]=e.z,s[12]=e.x,s[13]=e.y,s[14]=t.z,s[15]=t.x,s[16]=e.y,s[17]=t.z,s[18]=t.x,s[19]=t.y,s[20]=t.z,s[21]=e.x,s[22]=t.y,s[23]=t.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},Pu=class extends Cn{constructor(t,e=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new re;r.setIndex(new Te(n,1)),r.setAttribute("position",new Vt(s,3)),super(r,new $e({color:e,toneMapped:!1})),this.box=t,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(t){let e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(t))}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},Lu=class extends fi{constructor(t,e=1,n=16776960){let s=n,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],a=new re;a.setAttribute("position",new Vt(r,3)),a.computeBoundingSphere(),super(a,new $e({color:s,toneMapped:!1})),this.type="PlaneHelper",this.plane=t,this.size=e;let o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new re;l.setAttribute("position",new Vt(o,3)),l.computeBoundingSphere(),this.add(new oe(l,new hn({color:s,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(t){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(t)}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}},pg=new I,Nh,cf,Du=class extends ge{constructor(t=new I(0,0,1),e=new I(0,0,0),n=1,s=16776960,r=n*.2,a=r*.2){super(),this.type="ArrowHelper",Nh===void 0&&(Nh=new re,Nh.setAttribute("position",new Vt([0,0,0,0,1,0],3)),cf=new ga(.5,1,5,1),cf.translate(0,-.5,0)),this.position.copy(e),this.line=new fi(Nh,new $e({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new oe(cf,new hn({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,r,a)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{pg.set(t.z,0,-t.x).normalize();let e=Math.acos(t.y);this.quaternion.setFromAxisAngle(pg,e)}}setLength(t,e=t*.2,n=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){super.dispose(),this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}},Nu=class extends Cn{constructor(t=1){let e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new re;s.setAttribute("position",new Vt(e,3)),s.setAttribute("color",new Vt(n,3));let r=new $e({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(t,e,n){let s=new kt,r=this.geometry.attributes.color.array;return s.set(t),s.toArray(r,0),s.toArray(r,3),s.set(e),s.toArray(r,6),s.toArray(r,9),s.set(n),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},Uu=class{constructor(){this.type="ShapePath",this.color=new kt,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(t,e){return this.currentPath=new As,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,s){return this.currentPath.quadraticCurveTo(t,e,n,s),this}bezierCurveTo(t,e,n,s,r,a){return this.currentPath.bezierCurveTo(t,e,n,s,r,a),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(){function t(l,c){let h=!1,d=c.length;for(let u=0,f=d-1;u<d;f=u++){let p=c[u],x=c[f];p.y>l.y!=x.y>l.y&&l.x<(x.x-p.x)*(l.y-p.y)/(x.y-p.y)+p.x&&(h=!h)}return h}function e(l,c){let h=c.getCenter(new ut);if(t(h,l))return h;let d=h.y,u=[],f=l.length;for(let p=0;p<f;p++){let x=l[p],g=l[(p+1)%f];if(x.y>d!=g.y>d){let m=x.x+(d-x.y)*(g.x-x.x)/(g.y-x.y);u.push(m)}}return u.length>1&&(u.sort((p,x)=>p-x),h.x=(u[0]+u[1])/2),h}let n=this.userData.style&&this.userData.style.fillRule||"nonzero";n!=="nonzero"&&n!=="evenodd"&&(Lt('Fill-rule "'+n+'" is not supported, falling back to "nonzero".'),n="nonzero");let s=n==="nonzero"?(l=>l!==0):(l=>(l&1)!==0),r=[];for(let l of this.subPaths){let c=l.getPoints();if(c.length<3)continue;let h=ti.area(c);if(h===0)continue;let d=new Ul;for(let u=0;u<c.length;u++)d.expandByPoint(c[u]);r.push({subPath:l,points:c,boundingBox:d,interiorPoint:e(c,d),absArea:Math.abs(h),winding:h<0?-1:1,container:null,exclude:!1,role:null})}r.sort((l,c)=>c.absArea-l.absArea);for(let l=0;l<r.length;l++){let c=r[l],h=0;for(let d=l-1;d>=0;d--){let u=r[d];if(u.boundingBox.containsBox(c.boundingBox)&&t(c.interiorPoint,u.points)){c.container=u.exclude?u.container:u,h=u.winding,c.winding+=h;break}}s(c.winding)===s(h)&&(c.exclude=!0)}for(let l of r)l.exclude||(l.role=l.container===null||l.container.role==="hole"?"outer":"hole");let a=[],o=new Map;for(let l of r){if(l.exclude||l.role!=="outer")continue;let c=new Cs;c.curves=l.subPath.curves,a.push(c),o.set(l,c)}for(let l of r){if(l.exclude||l.role!=="hole")continue;let c=o.get(l.container);if(!c)continue;let h=new As;h.curves=l.subPath.curves,c.holes.push(h)}return a}},Oa=class extends Fn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function _y(i,t){let e=i.image&&i.image.width?i.image.width/i.image.height:1;return e>t?(i.repeat.x=1,i.repeat.y=e/t,i.offset.x=0,i.offset.y=(1-i.repeat.y)/2):(i.repeat.x=t/e,i.repeat.y=1,i.offset.x=(1-i.repeat.x)/2,i.offset.y=0),i}function xy(i,t){let e=i.image&&i.image.width?i.image.width/i.image.height:1;return e>t?(i.repeat.x=t/e,i.repeat.y=1,i.offset.x=(1-i.repeat.x)/2,i.offset.y=0):(i.repeat.x=1,i.repeat.y=e/t,i.offset.x=0,i.offset.y=(1-i.repeat.y)/2),i}function yy(i){return i.repeat.x=1,i.repeat.y=1,i.offset.x=0,i.offset.y=0,i}function rd(i,t,e,n){let s=vy(n);switch(e){case td:return i*t;case zl:return i*t/s.components*s.byteLength;case Ha:return i*t/s.components*s.byteLength;case ns:return i*t*2/s.components*s.byteLength;case Vl:return i*t*2/s.components*s.byteLength;case ed:return i*t*3/s.components*s.byteLength;case vn:return i*t*4/s.components*s.byteLength;case Gl:return i*t*4/s.components*s.byteLength;case Wa:case Xa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case qa:case Ya:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wl:case ql:return Math.max(i,16)*Math.max(t,8)/4;case Hl:case Xl:return Math.max(i,8)*Math.max(t,8)/2;case Yl:case Zl:case Jl:case Kl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case $l:case Za:case jl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ql:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case tc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ec:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case nc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ic:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case sc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case rc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ac:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case oc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case lc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case cc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case hc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case uc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case dc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case fc:case pc:case mc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case gc:case _c:return Math.ceil(i/4)*Math.ceil(t/4)*8;case $a:case xc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function vy(i){switch(i){case Pn:case Ju:return{byteLength:1,components:1};case Ar:case Ku:case Mn:return{byteLength:2,components:1};case Bl:case kl:return{byteLength:2,components:4};case qn:case Ol:case je:return{byteLength:4,components:1};case ju:case Qu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}var Fu=class{static contain(t,e){return _y(t,e)}static cover(t,e){return xy(t,e)}static fill(t){return yy(t)}static getByteLength(t,e,n,s){return rd(t,e,n,s)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function H0(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function My(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){let p=d[u],x=d[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){let x=d[f];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Sy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,by=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,wy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ty=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ey=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ay=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ry=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Iy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Py=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ly=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ny=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Uy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Fy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Oy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,By=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ky=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Gy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Hy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Wy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Xy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Yy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Zy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$y=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ky=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ev=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,nv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,iv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,rv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,av=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ov=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,hv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,pv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,mv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_v=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,vv=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Mv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Sv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,bv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wv=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Tv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ev=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Av=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Iv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Lv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Uv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ov=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,kv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Vv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Gv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Xv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,qv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$v=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,jv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,rM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,aM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,oM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,lM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,hM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,dM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,gM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_M=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,xM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,MM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,SM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,RM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,IM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,PM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,LM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,DM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,UM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,FM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,OM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,VM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,HM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,WM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,YM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$M=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,KM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,QM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,de={alphahash_fragment:Sy,alphahash_pars_fragment:by,alphamap_fragment:wy,alphamap_pars_fragment:Ty,alphatest_fragment:Ey,alphatest_pars_fragment:Ay,aomap_fragment:Cy,aomap_pars_fragment:Ry,batching_pars_vertex:Iy,batching_vertex:Py,begin_vertex:Ly,beginnormal_vertex:Dy,bsdfs:Ny,iridescence_fragment:Uy,bumpmap_pars_fragment:Fy,clipping_planes_fragment:Oy,clipping_planes_pars_fragment:By,clipping_planes_pars_vertex:ky,clipping_planes_vertex:zy,color_fragment:Vy,color_pars_fragment:Gy,color_pars_vertex:Hy,color_vertex:Wy,common:Xy,cube_uv_reflection_fragment:qy,defaultnormal_vertex:Yy,displacementmap_pars_vertex:Zy,displacementmap_vertex:$y,emissivemap_fragment:Jy,emissivemap_pars_fragment:Ky,colorspace_fragment:jy,colorspace_pars_fragment:Qy,envmap_fragment:tv,envmap_common_pars_fragment:ev,envmap_pars_fragment:nv,envmap_pars_vertex:iv,envmap_physical_pars_fragment:pv,envmap_vertex:sv,fog_vertex:rv,fog_pars_vertex:av,fog_fragment:ov,fog_pars_fragment:lv,gradientmap_pars_fragment:cv,lightmap_pars_fragment:hv,lights_lambert_fragment:uv,lights_lambert_pars_fragment:dv,lights_pars_begin:fv,lights_toon_fragment:mv,lights_toon_pars_fragment:gv,lights_phong_fragment:_v,lights_phong_pars_fragment:xv,lights_physical_fragment:yv,lights_physical_pars_fragment:vv,lights_fragment_begin:Mv,lights_fragment_maps:Sv,lights_fragment_end:bv,lightprobes_pars_fragment:wv,logdepthbuf_fragment:Tv,logdepthbuf_pars_fragment:Ev,logdepthbuf_pars_vertex:Av,logdepthbuf_vertex:Cv,map_fragment:Rv,map_pars_fragment:Iv,map_particle_fragment:Pv,map_particle_pars_fragment:Lv,metalnessmap_fragment:Dv,metalnessmap_pars_fragment:Nv,morphinstance_vertex:Uv,morphcolor_vertex:Fv,morphnormal_vertex:Ov,morphtarget_pars_vertex:Bv,morphtarget_vertex:kv,normal_fragment_begin:zv,normal_fragment_maps:Vv,normal_pars_fragment:Gv,normal_pars_vertex:Hv,normal_vertex:Wv,normalmap_pars_fragment:Xv,clearcoat_normal_fragment_begin:qv,clearcoat_normal_fragment_maps:Yv,clearcoat_pars_fragment:Zv,iridescence_pars_fragment:$v,opaque_fragment:Jv,packing:Kv,premultiplied_alpha_fragment:jv,project_vertex:Qv,dithering_fragment:tM,dithering_pars_fragment:eM,roughnessmap_fragment:nM,roughnessmap_pars_fragment:iM,shadowmap_pars_fragment:sM,shadowmap_pars_vertex:rM,shadowmap_vertex:aM,shadowmask_pars_fragment:oM,skinbase_vertex:lM,skinning_pars_vertex:cM,skinning_vertex:hM,skinnormal_vertex:uM,specularmap_fragment:dM,specularmap_pars_fragment:fM,tonemapping_fragment:pM,tonemapping_pars_fragment:mM,transmission_fragment:gM,transmission_pars_fragment:_M,uv_pars_fragment:xM,uv_pars_vertex:yM,uv_vertex:vM,worldpos_vertex:MM,background_vert:SM,background_frag:bM,backgroundCube_vert:wM,backgroundCube_frag:TM,cube_vert:EM,cube_frag:AM,depth_vert:CM,depth_frag:RM,distance_vert:IM,distance_frag:PM,equirect_vert:LM,equirect_frag:DM,linedashed_vert:NM,linedashed_frag:UM,meshbasic_vert:FM,meshbasic_frag:OM,meshlambert_vert:BM,meshlambert_frag:kM,meshmatcap_vert:zM,meshmatcap_frag:VM,meshnormal_vert:GM,meshnormal_frag:HM,meshphong_vert:WM,meshphong_frag:XM,meshphysical_vert:qM,meshphysical_frag:YM,meshtoon_vert:ZM,meshtoon_frag:$M,points_vert:JM,points_frag:KM,shadow_vert:jM,shadow_frag:QM,sprite_vert:tS,sprite_frag:eS},Ft={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ae}},envmap:{envMap:{value:null},envMapRotation:{value:new ae},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ae}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ae}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ae},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ae},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ae},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ae}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ae}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ae}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0},uvTransform:{value:new ae}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}}},xi={basic:{uniforms:Sn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:Sn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new kt(0)},envMapIntensity:{value:1}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:Sn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:Sn([Ft.common,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.roughnessmap,Ft.metalnessmap,Ft.fog,Ft.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:Sn([Ft.common,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.gradientmap,Ft.fog,Ft.lights,{emissive:{value:new kt(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:Sn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:Sn([Ft.points,Ft.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:Sn([Ft.common,Ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:Sn([Ft.common,Ft.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:Sn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:Sn([Ft.sprite,Ft.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new ae},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ae}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distance:{uniforms:Sn([Ft.common,Ft.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distance_vert,fragmentShader:de.distance_frag},shadow:{uniforms:Sn([Ft.lights,Ft.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};xi.physical={uniforms:Sn([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ae},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ae},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ae},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ae},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ae},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ae},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ae},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ae},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ae},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ae},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ae},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ae}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};var ad={r:0,b:0,g:0},nS=new se,W0=new ae;W0.set(-1,0,0,0,1,0,0,0,1);function iS(i,t,e,n,s,r){let a=new kt(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function f(v){let b=v.isScene===!0?v.background:null;if(b&&b.isTexture){let y=v.backgroundBlurriness>0;b=t.get(b,y)}return b}function p(v){let b=!1,y=f(v);y===null?g(a,o):y&&y.isColor&&(g(y,1),b=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(v,b){let y=f(b);y&&(y.isCubeTexture||y.mapping===Tr)?(c===void 0&&(c=new oe(new Xn(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:Rr(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(nS.makeRotationFromEuler(b.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(W0),c.material.toneMapped=me.getTransfer(y.colorSpace)!==Se,(h!==y||d!==y.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new oe(new fr(2,2),new Rn({name:"BackgroundMaterial",uniforms:Rr(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:Qi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=me.getTransfer(y.colorSpace)!==Se,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,b){v.getRGB(ad,lp(i)),e.buffers.color.setClear(ad.r,ad.g,ad.b,b,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,b=1){a.set(v),o=b,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,g(a,o)},render:p,addToRenderList:x,dispose:m}}function sS(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(L,B,z,P,k){let H=!1,W=d(L,P,z,B);r!==W&&(r=W,c(r.object)),H=f(L,P,z,k),H&&p(L,P,z,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,y(L,B,z,P),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return i.createVertexArray()}function c(L){return i.bindVertexArray(L)}function h(L){return i.deleteVertexArray(L)}function d(L,B,z,P){let k=P.wireframe===!0,H=n[B.id];H===void 0&&(H={},n[B.id]=H);let W=L.isInstancedMesh===!0?L.id:0,ct=H[W];ct===void 0&&(ct={},H[W]=ct);let $=ct[z.id];$===void 0&&($={},ct[z.id]=$);let ot=$[k];return ot===void 0&&(ot=u(l()),$[k]=ot),ot}function u(L){let B=[],z=[],P=[];for(let k=0;k<e;k++)B[k]=0,z[k]=0,P[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:z,attributeDivisors:P,object:L,attributes:{},index:null}}function f(L,B,z,P){let k=r.attributes,H=B.attributes,W=0,ct=z.getAttributes();for(let $ in ct)if(ct[$].location>=0){let O=k[$],K=H[$];if(K===void 0&&($==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),$==="instanceColor"&&L.instanceColor&&(K=L.instanceColor)),O===void 0||O.attribute!==K||K&&O.data!==K.data)return!0;W++}return r.attributesNum!==W||r.index!==P}function p(L,B,z,P){let k={},H=B.attributes,W=0,ct=z.getAttributes();for(let $ in ct)if(ct[$].location>=0){let O=H[$];O===void 0&&($==="instanceMatrix"&&L.instanceMatrix&&(O=L.instanceMatrix),$==="instanceColor"&&L.instanceColor&&(O=L.instanceColor));let K={};K.attribute=O,O&&O.data&&(K.data=O.data),k[$]=K,W++}r.attributes=k,r.attributesNum=W,r.index=P}function x(){let L=r.newAttributes;for(let B=0,z=L.length;B<z;B++)L[B]=0}function g(L){m(L,0)}function m(L,B){let z=r.newAttributes,P=r.enabledAttributes,k=r.attributeDivisors;z[L]=1,P[L]===0&&(i.enableVertexAttribArray(L),P[L]=1),k[L]!==B&&(i.vertexAttribDivisor(L,B),k[L]=B)}function v(){let L=r.newAttributes,B=r.enabledAttributes;for(let z=0,P=B.length;z<P;z++)B[z]!==L[z]&&(i.disableVertexAttribArray(z),B[z]=0)}function b(L,B,z,P,k,H,W){W===!0?i.vertexAttribIPointer(L,B,z,k,H):i.vertexAttribPointer(L,B,z,P,k,H)}function y(L,B,z,P){x();let k=P.attributes,H=z.getAttributes(),W=B.defaultAttributeValues;for(let ct in H){let $=H[ct];if($.location>=0){let ot=k[ct];if(ot===void 0&&(ct==="instanceMatrix"&&L.instanceMatrix&&(ot=L.instanceMatrix),ct==="instanceColor"&&L.instanceColor&&(ot=L.instanceColor)),ot!==void 0){let O=ot.normalized,K=ot.itemSize,lt=t.get(ot);if(lt===void 0)continue;let Pt=lt.buffer,Dt=lt.type,Ut=lt.bytesPerElement,q=Dt===i.INT||Dt===i.UNSIGNED_INT||ot.gpuType===Ol;if(ot.isInterleavedBufferAttribute){let j=ot.data,gt=j.stride,xt=ot.offset;if(j.isInstancedInterleavedBuffer){for(let _t=0;_t<$.locationSize;_t++)m($.location+_t,j.meshPerAttribute);L.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let _t=0;_t<$.locationSize;_t++)g($.location+_t);i.bindBuffer(i.ARRAY_BUFFER,Pt);for(let _t=0;_t<$.locationSize;_t++)b($.location+_t,K/$.locationSize,Dt,O,gt*Ut,(xt+K/$.locationSize*_t)*Ut,q)}else{if(ot.isInstancedBufferAttribute){for(let j=0;j<$.locationSize;j++)m($.location+j,ot.meshPerAttribute);L.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let j=0;j<$.locationSize;j++)g($.location+j);i.bindBuffer(i.ARRAY_BUFFER,Pt);for(let j=0;j<$.locationSize;j++)b($.location+j,K/$.locationSize,Dt,O,K*Ut,K/$.locationSize*j*Ut,q)}}else if(W!==void 0){let O=W[ct];if(O!==void 0)switch(O.length){case 2:i.vertexAttrib2fv($.location,O);break;case 3:i.vertexAttrib3fv($.location,O);break;case 4:i.vertexAttrib4fv($.location,O);break;default:i.vertexAttrib1fv($.location,O)}}}}v()}function E(){T();for(let L in n){let B=n[L];for(let z in B){let P=B[z];for(let k in P){let H=P[k];for(let W in H)h(H[W].object),delete H[W];delete P[k]}}delete n[L]}}function w(L){if(n[L.id]===void 0)return;let B=n[L.id];for(let z in B){let P=B[z];for(let k in P){let H=P[k];for(let W in H)h(H[W].object),delete H[W];delete P[k]}}delete n[L.id]}function A(L){for(let B in n){let z=n[B];for(let P in z){let k=z[P];if(k[L.id]===void 0)continue;let H=k[L.id];for(let W in H)h(H[W].object),delete H[W];delete k[L.id]}}}function _(L){for(let B in n){let z=n[B],P=L.isInstancedMesh===!0?L.id:0,k=z[P];if(k!==void 0){for(let H in k){let W=k[H];for(let ct in W)h(W[ct].object),delete W[ct];delete k[H]}delete z[P],Object.keys(z).length===0&&delete n[B]}}}function T(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:C,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfObject:_,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:g,disableUnusedAttributes:v}}function rS(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function aS(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==vn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let _=A===Mn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Pn&&A!==je&&!_&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Lt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Lt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:v,maxVaryings:b,maxFragmentUniforms:y,maxSamples:E,samples:w}}function oS(i){let t=this,e=null,n=0,s=!1,r=!1,a=new yn,o=new ae,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,m=i.get(d);if(!s||p===null||p.length===0||r&&!g)r?h(null):c();else{let v=r?0:n,b=v*4,y=m.clippingState||null;l.value=y,y=h(p,u,b,f);for(let E=0;E!==b;++E)y[E]=e[E];m.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,p){let x=d!==null?d.length:0,g=null;if(x!==0){if(g=l.value,p!==!0||g===null){let m=f+x*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<m)&&(g=new Float32Array(m));for(let b=0,y=f;b!==x;++b,y+=4)a.copy(d[b]).applyMatrix4(v,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}var Ka=4,lS=6,cS=20,hS=256,bc=new Ri,S0=new kt,fp=null,pp=0,mp=0,gp=!1,uS=new I,Ir=new I,Pr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=uS}=r;fp=this._renderer.getRenderTarget(),pp=this._renderer.getActiveCubeFace(),mp=this._renderer.getActiveMipmapLevel(),gp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=T0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=w0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(fp,pp,mp),this._renderer.xr.enabled=gp,t.scissorTest=!1,Ja(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===gi||t.mapping===ts?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),fp=this._renderer.getRenderTarget(),pp=this._renderer.getActiveCubeFace(),mp=this._renderer.getActiveMipmapLevel(),gp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ce,minFilter:Ce,generateMipmaps:!1,type:Mn,format:vn,colorSpace:vs,depthBuffer:!1},s=b0(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=b0(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=dS(r)),this._blurMaterial=pS(r,t,e),this._ggxMaterial=fS(r,t,e)}return s}_compileMaterial(t){let e=new oe(new re,t);this._renderer.compile(e,bc)}_sceneToCubeUV(t,e,n,s,r){let l=new Be(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(S0),d.toneMapping=ii,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new oe(new Xn,new hn({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,m=!1,v=t.background;v?v.isColor&&(g.color.copy(v),t.background=null,m=!0):(g.color.copy(S0),m=!0);for(let b=0;b<6;b++){let y=b%3;y===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[b],r.y,r.z)):y===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[b]));let E=this._cubeSize;Ja(s,y*E,b>2?E:0,E,E),d.setRenderTarget(s),m&&d.render(x,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=v}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===gi||t.mapping===ts;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=T0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=w0());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Ja(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,bc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:p}=this,x=this._sizeLods[n],g=3*x*(n>p-Ka?n-p+Ka:0),m=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=p-e,Ja(r,g,m,3*x,2*x),s.setRenderTarget(r),s.render(o,bc),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,Ja(t,g,m,3*x,2*x),s.setRenderTarget(t),s.render(o,bc)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-Ka?s-this._lodMax+Ka:0),u=4*(this._cubeSize-h);Ja(e,d,u,3*h,2*h),a.setRenderTarget(e),a.render(l,bc)}};function dS(i){let t=[],e=[],n=i,s=i-Ka+1+lS;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,p=new Float32Array(f*u*d),x=new Float32Array(f*u*d);for(let m=0;m<d;m++){let v=m%3*2/3-1,b=m>2?0:-1,y=[v,b,0,v+2/3,b,0,v+2/3,b+1,0,v,b,0,v+2/3,b+1,0,v,b+1,0];p.set(y,f*u*m);for(let E=0;E<u;E++){let w=h[E*2]*2-1,A=h[E*2+1]*2-1;m===0?Ir.set(1,A,w):m===1?Ir.set(-w,1,-A):m===2?Ir.set(-w,A,1):m===3?Ir.set(-1,A,-w):m===4?Ir.set(-w,-1,A):Ir.set(w,A,-1),Ir.toArray(x,(m*u+E)*f)}}let g=new re;g.setAttribute("position",new Te(p,f)),g.setAttribute("outputDirection",new Te(x,f)),e.push(new oe(g,null)),n>Ka&&n--}return{lodMeshes:e,sizeLods:t}}function b0(i,t,e){let n=new cn(i,t,e);return n.texture.mapping=Tr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ja(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function fS(i,t,e){return new Rn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:hS,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ld(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function pS(i,t,e){return new Rn({name:"SphericalGaussianBlur",defines:{SAMPLES:cS,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ld(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function w0(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ld(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function T0(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ld(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function ld(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ec=class extends cn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ts(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Xn(5,5,5),r=new Rn({name:"CubemapFromEquirect",uniforms:Rr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:mi});r.uniforms.tEquirect.value=e;let a=new oe(s,r),o=e.minFilter;return e.minFilter===_i&&(e.minFilter=Ce),new Rl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function mS(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===za||f===Va)if(t.has(u)){let p=t.get(u).texture;return o(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let x=new Ec(p.height);return x.fromEquirectangularTexture(i,u),t.set(u,x),u.addEventListener("dispose",c),o(x.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,p=f===za||f===Va,x=f===gi||f===ts;if(p||x){let g=e.get(u),m=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new Pr(i)),g=p?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{let v=u.image;return p&&v&&v.height>0||x&&v&&l(v)?(n===null&&(n=new Pr(i)),g=p?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,f){return f===za?u.mapping=gi:f===Va&&(u.mapping=ts),u}function l(u){let f=0,p=6;for(let x=0;x<p;x++)u[x]!==void 0&&f++;return f===p}function c(u){let f=u.target;f.removeEventListener("dispose",c);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function gS(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&wi("WebGLRenderer: "+n+" extension not supported."),s}}}function _S(i,t,e,n){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let p in u.attributes)t.remove(u.attributes[p]);u.removeEventListener("dispose",a),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],i.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,p=d.attributes.position,x=0;if(p===void 0)return;if(f!==null){let v=f.array;x=f.version;for(let b=0,y=v.length;b<y;b+=3){let E=v[b+0],w=v[b+1],A=v[b+2];u.push(E,w,w,A,A,E)}}else{let v=p.array;x=p.version;for(let b=0,y=v.length/3-1;b<y;b+=3){let E=b+0,w=b+1,A=b+2;u.push(E,w,w,A,A,E)}}let g=new(p.count>=65535?da:ua)(u,1);g.version=x;let m=r.get(d);m&&t.remove(m),r.set(d,g)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function xS(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*a),e.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*a,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let x=0;for(let g=0;g<f;g++)x+=u[g];e.update(x,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function yS(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Jt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function vS(i,t,e){let n=new WeakMap,s=new Ee;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let T=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],b=0;f===!0&&(b=1),p===!0&&(b=2),x===!0&&(b=3);let y=o.attributes.position.count*b,E=1;y>t.maxTextureSize&&(E=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let w=new Float32Array(y*E*4*d),A=new Qs(w,y,E,d);A.type=je,A.needsUpdate=!0;let _=b*4;for(let C=0;C<d;C++){let L=g[C],B=m[C],z=v[C],P=y*E*4*C;for(let k=0;k<L.count;k++){let H=k*_;f===!0&&(s.fromBufferAttribute(L,k),w[P+H+0]=s.x,w[P+H+1]=s.y,w[P+H+2]=s.z,w[P+H+3]=0),p===!0&&(s.fromBufferAttribute(B,k),w[P+H+4]=s.x,w[P+H+5]=s.y,w[P+H+6]=s.z,w[P+H+7]=0),x===!0&&(s.fromBufferAttribute(z,k),w[P+H+8]=s.x,w[P+H+9]=s.y,w[P+H+10]=s.z,w[P+H+11]=z.itemSize===4?s.w:1)}}u={count:d,texture:A,size:new ut(y,E)},n.set(o,u),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function MS(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var SS={[Hu]:"LINEAR_TONE_MAPPING",[Wu]:"REINHARD_TONE_MAPPING",[Xu]:"CINEON_TONE_MAPPING",[ka]:"ACES_FILMIC_TONE_MAPPING",[Yu]:"AGX_TONE_MAPPING",[Zu]:"NEUTRAL_TONE_MAPPING",[qu]:"CUSTOM_TONE_MAPPING"};function bS(i,t,e,n,s,r){let a=new cn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new re;c.setAttribute("position",new Vt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Vt([0,2,0,0,2,0],2));let h=new wa({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new oe(c,h),u=new Ri(-1,1,1,-1,0,1),f=null,p=null,x=!1,g,m=null,v=[],b=!1;this.setSize=function(y,E){a.setSize(y,E),o!==null&&o.setSize(y,E),l!==null&&l.setSize(y,E);for(let w=0;w<v.length;w++){let A=v[w];A.setSize&&A.setSize(y,E)}},this.setEffects=function(y){v=y,b=v.length>0&&v[0].isRenderPass===!0;let E=a.width,w=a.height;v.length>0&&o===null&&(o=new cn(E,w,{type:Mn,depthBuffer:!1,stencilBuffer:!1}),l=new cn(E,w,{type:Mn,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<v.length;A++){let _=v[A];_.setSize&&_.setSize(E,w)}},this.begin=function(y,E){if(x||y.toneMapping===ii&&v.length===0)return!1;if(m=E,E!==null){let w=E.width,A=E.height;(a.width!==w||a.height!==A)&&this.setSize(w,A)}return b===!1&&y.setRenderTarget(a),g=y.toneMapping,y.toneMapping=ii,!0},this.hasRenderPass=function(){return b},this.end=function(y,E){y.toneMapping=g,x=!0;let w=a,A=o;for(let _=0;_<v.length;_++){let T=v[_];T.enabled!==!1&&(T.render(y,A,w,E),T.needsSwap!==!1&&(w=A,A=A===o?l:o))}if(f!==y.outputColorSpace||p!==y.toneMapping){f=y.outputColorSpace,p=y.toneMapping,h.defines={},me.getTransfer(f)===Se&&(h.defines.SRGB_TRANSFER="");let _=SS[p];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,y.setRenderTarget(m),y.render(d,u),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var X0=new ze,yp=new Xi(1,1),q0=new Qs,Y0=new tr,Z0=new Ts,E0=[],A0=[],C0=new Float32Array(16),R0=new Float32Array(9),I0=new Float32Array(4);function Qa(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=E0[s];if(r===void 0&&(r=new Float32Array(s),E0[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Qe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function tn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function cd(i,t){let e=A0[t];e===void 0&&(e=new Int32Array(t),A0[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function wS(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function TS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;i.uniform2fv(this.addr,t),tn(e,t)}}function ES(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Qe(e,t))return;i.uniform3fv(this.addr,t),tn(e,t)}}function AS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;i.uniform4fv(this.addr,t),tn(e,t)}}function CS(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Qe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,n))return;I0.set(n),i.uniformMatrix2fv(this.addr,!1,I0),tn(e,n)}}function RS(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Qe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,n))return;R0.set(n),i.uniformMatrix3fv(this.addr,!1,R0),tn(e,n)}}function IS(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Qe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,n))return;C0.set(n),i.uniformMatrix4fv(this.addr,!1,C0),tn(e,n)}}function PS(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function LS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;i.uniform2iv(this.addr,t),tn(e,t)}}function DS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Qe(e,t))return;i.uniform3iv(this.addr,t),tn(e,t)}}function NS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;i.uniform4iv(this.addr,t),tn(e,t)}}function US(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function FS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;i.uniform2uiv(this.addr,t),tn(e,t)}}function OS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Qe(e,t))return;i.uniform3uiv(this.addr,t),tn(e,t)}}function BS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;i.uniform4uiv(this.addr,t),tn(e,t)}}function kS(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(yp.compareFunction=e.isReversedDepthBuffer()?Mc:vc,r=yp):r=X0,e.setTexture2D(t||r,s)}function zS(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Y0,s)}function VS(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Z0,s)}function GS(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||q0,s)}function HS(i){switch(i){case 5126:return wS;case 35664:return TS;case 35665:return ES;case 35666:return AS;case 35674:return CS;case 35675:return RS;case 35676:return IS;case 5124:case 35670:return PS;case 35667:case 35671:return LS;case 35668:case 35672:return DS;case 35669:case 35673:return NS;case 5125:return US;case 36294:return FS;case 36295:return OS;case 36296:return BS;case 35678:case 36198:case 36298:case 36306:case 35682:return kS;case 35679:case 36299:case 36307:return zS;case 35680:case 36300:case 36308:case 36293:return VS;case 36289:case 36303:case 36311:case 36292:return GS}}function WS(i,t){i.uniform1fv(this.addr,t)}function XS(i,t){let e=Qa(t,this.size,2);i.uniform2fv(this.addr,e)}function qS(i,t){let e=Qa(t,this.size,3);i.uniform3fv(this.addr,e)}function YS(i,t){let e=Qa(t,this.size,4);i.uniform4fv(this.addr,e)}function ZS(i,t){let e=Qa(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function $S(i,t){let e=Qa(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function JS(i,t){let e=Qa(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function KS(i,t){i.uniform1iv(this.addr,t)}function jS(i,t){i.uniform2iv(this.addr,t)}function QS(i,t){i.uniform3iv(this.addr,t)}function tb(i,t){i.uniform4iv(this.addr,t)}function eb(i,t){i.uniform1uiv(this.addr,t)}function nb(i,t){i.uniform2uiv(this.addr,t)}function ib(i,t){i.uniform3uiv(this.addr,t)}function sb(i,t){i.uniform4uiv(this.addr,t)}function rb(i,t,e){let n=this.cache,s=t.length,r=cd(e,s);Qe(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=yp:a=X0;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function ab(i,t,e){let n=this.cache,s=t.length,r=cd(e,s);Qe(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Y0,r[a])}function ob(i,t,e){let n=this.cache,s=t.length,r=cd(e,s);Qe(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Z0,r[a])}function lb(i,t,e){let n=this.cache,s=t.length,r=cd(e,s);Qe(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||q0,r[a])}function cb(i){switch(i){case 5126:return WS;case 35664:return XS;case 35665:return qS;case 35666:return YS;case 35674:return ZS;case 35675:return $S;case 35676:return JS;case 5124:case 35670:return KS;case 35667:case 35671:return jS;case 35668:case 35672:return QS;case 35669:case 35673:return tb;case 5125:return eb;case 36294:return nb;case 36295:return ib;case 36296:return sb;case 35678:case 36198:case 36298:case 36306:case 35682:return rb;case 35679:case 36299:case 36307:return ab;case 35680:case 36300:case 36308:case 36293:return ob;case 36289:case 36303:case 36311:case 36292:return lb}}var vp=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=HS(e.type)}},Mp=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=cb(e.type)}},Sp=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},_p=/(\w+)(\])?(\[|\.)?/g;function P0(i,t){i.seq.push(t),i.map[t.id]=t}function hb(i,t,e){let n=i.name,s=n.length;for(_p.lastIndex=0;;){let r=_p.exec(n),a=_p.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){P0(e,c===void 0?new vp(o,i,t):new Mp(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new Sp(o),P0(e,d)),e=d}}}var ja=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);hb(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function L0(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var ub=37297,db=0;function fb(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var D0=new ae;function pb(i){me._getMatrix(D0,me.workingColorSpace,i);let t=`mat3( ${D0.elements.map(e=>e.toFixed(4))} )`;switch(me.getTransfer(i)){case oa:return[t,"LinearTransferOETF"];case Se:return[t,"sRGBTransferOETF"];default:return Lt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function N0(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+fb(i.getShaderSource(t),o)}else return r}function mb(i,t){let e=pb(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var gb={[Hu]:"Linear",[Wu]:"Reinhard",[Xu]:"Cineon",[ka]:"ACESFilmic",[Yu]:"AgX",[Zu]:"Neutral",[qu]:"Custom"};function _b(i,t){let e=gb[t];return e===void 0?(Lt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var od=new I;function xb(){me.getLuminanceCoefficients(od);let i=od.x.toFixed(4),t=od.y.toFixed(4),e=od.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yb(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Tc).join(`
`)}function vb(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Mb(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Tc(i){return i!==""}function U0(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function F0(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Sb=/^[ \t]*#include +<([\w\d./]+)>/gm;function bp(i){return i.replace(Sb,wb)}var bb=new Map;function wb(i,t){let e=de[t];if(e===void 0){let n=bb.get(t);if(n!==void 0)e=de[n],Lt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return bp(e)}var Tb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function O0(i){return i.replace(Tb,Eb)}function Eb(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function B0(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Ab={[Ls]:"SHADOWMAP_TYPE_PCF",[br]:"SHADOWMAP_TYPE_VSM"};function Cb(i){return Ab[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Rb={[gi]:"ENVMAP_TYPE_CUBE",[ts]:"ENVMAP_TYPE_CUBE",[Tr]:"ENVMAP_TYPE_CUBE_UV"};function Ib(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Rb[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Pb={[ts]:"ENVMAP_MODE_REFRACTION"};function Lb(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Pb[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Db={[Ba]:"ENVMAP_BLENDING_MULTIPLY",[Wf]:"ENVMAP_BLENDING_MIX",[Xf]:"ENVMAP_BLENDING_ADD"};function Nb(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Db[i.combine]||"ENVMAP_BLENDING_NONE"}function Ub(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Fb(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Cb(e),c=Ib(e),h=Lb(e),d=Nb(e),u=Ub(e),f=yb(e),p=vb(r),x=s.createProgram(),g,m,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Tc).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Tc).join(`
`),m.length>0&&(m+=`
`)):(g=[B0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Tc).join(`
`),m=[B0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ii?"#define TONE_MAPPING":"",e.toneMapping!==ii?de.tonemapping_pars_fragment:"",e.toneMapping!==ii?_b("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,mb("linearToOutputTexel",e.outputColorSpace),xb(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Tc).join(`
`)),a=bp(a),a=U0(a,e),a=F0(a,e),o=bp(o),o=U0(o,e),o=F0(o,e),a=O0(a),o=O0(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===id?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===id?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let b=v+g+a,y=v+m+o,E=L0(s,s.VERTEX_SHADER,b),w=L0(s,s.FRAGMENT_SHADER,y);s.attachShader(x,E),s.attachShader(x,w),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(L){if(i.debug.checkShaderErrors){let B=s.getProgramInfoLog(x)||"",z=s.getShaderInfoLog(E)||"",P=s.getShaderInfoLog(w)||"",k=B.trim(),H=z.trim(),W=P.trim(),ct=!0,$=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(ct=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,E,w);else{let ot=N0(s,E,"vertex"),O=N0(s,w,"fragment");Jt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+k+`
`+ot+`
`+O)}else k!==""?Lt("WebGLProgram: Program Info Log:",k):(H===""||W==="")&&($=!1);$&&(L.diagnostics={runnable:ct,programLog:k,vertexShader:{log:H,prefix:g},fragmentShader:{log:W,prefix:m}})}s.deleteShader(E),s.deleteShader(w),_=new ja(s,x),T=Mb(s,x)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(x,ub)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=db++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=w,this}var Ob=0,wp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Tp(t),e.set(t,n)),n}},Tp=class{constructor(t){this.id=Ob++,this.code=t,this.usedTimes=0}};function Bb(i){return i===ns||i===Za||i===$a}function kb(i,t,e,n,s,r){let a=new er,o=new wp,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function x(_,T,C,L,B,z){let P=L.fog,k=B.geometry,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?L.environment:null,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,ct=t.get(_.envMap||H,W),$=ct&&ct.mapping===Tr?ct.image.height:null,ot=f[_.type];_.precision!==null&&(u=n.getMaxPrecision(_.precision),u!==_.precision&&Lt("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));let O=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,K=O!==void 0?O.length:0,lt=0;k.morphAttributes.position!==void 0&&(lt=1),k.morphAttributes.normal!==void 0&&(lt=2),k.morphAttributes.color!==void 0&&(lt=3);let Pt,Dt,Ut,q;if(ot){let Ae=xi[ot];Pt=Ae.vertexShader,Dt=Ae.fragmentShader}else{Pt=_.vertexShader,Dt=_.fragmentShader;let Ae=o.getVertexShaderStage(_),_e=o.getFragmentShaderStage(_);o.update(_,Ae,_e),Ut=Ae.id,q=_e.id}let j=i.getRenderTarget(),gt=i.state.buffers.depth.getReversed(),xt=B.isInstancedMesh===!0,_t=B.isBatchedMesh===!0,Ot=!!_.map,Zt=!!_.matcap,Q=!!ct,dt=!!_.aoMap,ft=!!_.lightMap,mt=!!_.bumpMap&&_.wireframe===!1,wt=!!_.normalMap,Yt=!!_.displacementMap,$t=!!_.emissiveMap,Qt=!!_.metalnessMap,Kt=!!_.roughnessMap,U=_.anisotropy>0,fe=_.clearcoat>0,ce=_.dispersion>0,R=_.retroreflectivity>0,M=_.iridescence>0,X=_.sheen>0,J=_.transmission>0,rt=U&&!!_.anisotropyMap,St=fe&&!!_.clearcoatMap,Rt=fe&&!!_.clearcoatNormalMap,at=fe&&!!_.clearcoatRoughnessMap,D=M&&!!_.iridescenceMap,Y=M&&!!_.iridescenceThicknessMap,it=X&&!!_.sheenColorMap,st=X&&!!_.sheenRoughnessMap,tt=!!_.specularMap,ht=!!_.specularColorMap,vt=!!_.specularIntensityMap,At=J&&!!_.transmissionMap,N=J&&!!_.thicknessMap,yt=!!_.gradientMap,nt=!!_.alphaMap,Tt=_.alphaTest>0,Nt=!!_.alphaHash,pt=!!_.extensions,Wt=ii;_.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Wt=i.toneMapping);let Ht={shaderID:ot,shaderType:_.type,shaderName:_.name,vertexShader:Pt,fragmentShader:Dt,defines:_.defines,customVertexShaderID:Ut,customFragmentShaderID:q,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:_t,batchingColor:_t&&B._colorsTexture!==null,instancing:xt,instancingColor:xt&&B.instanceColor!==null,instancingMorph:xt&&B.morphTexture!==null,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:me.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ot,matcap:Zt,envMap:Q,envMapMode:Q&&ct.mapping,envMapCubeUVHeight:$,aoMap:dt,lightMap:ft,bumpMap:mt,normalMap:wt,displacementMap:Yt,emissiveMap:$t,normalMapObjectSpace:wt&&_.normalMapType===Kf,normalMapTangentSpace:wt&&_.normalMapType===Ii,packedNormalMap:wt&&_.normalMapType===Ii&&Bb(_.normalMap.format),metalnessMap:Qt,roughnessMap:Kt,anisotropy:U,anisotropyMap:rt,clearcoat:fe,clearcoatMap:St,clearcoatNormalMap:Rt,clearcoatRoughnessMap:at,dispersion:ce,retroreflection:R,iridescence:M,iridescenceMap:D,iridescenceThicknessMap:Y,sheen:X,sheenColorMap:it,sheenRoughnessMap:st,specularMap:tt,specularColorMap:ht,specularIntensityMap:vt,transmission:J,transmissionMap:At,thicknessMap:N,gradientMap:yt,opaque:_.transparent===!1&&_.blending===wr&&_.alphaToCoverage===!1,alphaMap:nt,alphaTest:Tt,alphaHash:Nt,combine:_.combine,mapUv:Ot&&p(_.map.channel),aoMapUv:dt&&p(_.aoMap.channel),lightMapUv:ft&&p(_.lightMap.channel),bumpMapUv:mt&&p(_.bumpMap.channel),normalMapUv:wt&&p(_.normalMap.channel),displacementMapUv:Yt&&p(_.displacementMap.channel),emissiveMapUv:$t&&p(_.emissiveMap.channel),metalnessMapUv:Qt&&p(_.metalnessMap.channel),roughnessMapUv:Kt&&p(_.roughnessMap.channel),anisotropyMapUv:rt&&p(_.anisotropyMap.channel),clearcoatMapUv:St&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:D&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:Y&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:it&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:st&&p(_.sheenRoughnessMap.channel),specularMapUv:tt&&p(_.specularMap.channel),specularColorMapUv:ht&&p(_.specularColorMap.channel),specularIntensityMapUv:vt&&p(_.specularIntensityMap.channel),transmissionMapUv:At&&p(_.transmissionMap.channel),thicknessMapUv:N&&p(_.thicknessMap.channel),alphaMapUv:nt&&p(_.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(wt||U),vertexNormals:!!k.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!k.attributes.uv&&(Ot||nt),fog:!!P,useFog:_.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||k.attributes.normal===void 0&&wt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:gt,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:lt,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Wt,decodeVideoTexture:Ot&&_.map.isVideoTexture===!0&&me.getTransfer(_.map.colorSpace)===Se,decodeVideoTextureEmissive:$t&&_.emissiveMap.isVideoTexture===!0&&me.getTransfer(_.emissiveMap.colorSpace)===Se,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===dn,flipSided:_.side===rn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:pt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pt&&_.extensions.multiDraw===!0||_t)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ht.vertexUv1s=l.has(1),Ht.vertexUv2s=l.has(2),Ht.vertexUv3s=l.has(3),l.clear(),Ht}function g(_){let T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(let C in _.defines)T.push(C),T.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(m(T,_),v(T,_),T.push(i.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function m(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numSunLights),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numSunLightShadows),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function v(_,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function b(_){let T=f[_.type],C;if(T){let L=xi[T];C=cp.clone(L.uniforms)}else C=_.uniforms;return C}function y(_,T){let C=h.get(T);return C!==void 0?++C.usedTimes:(C=new Fb(i,T,_,s),c.push(C),h.set(T,C)),C}function E(_){if(--_.usedTimes===0){let T=c.indexOf(_);c[T]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function w(_){o.remove(_)}function A(){o.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:b,acquireProgram:y,releaseProgram:E,releaseShaderCache:w,programs:c,dispose:A}}function zb(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Vb(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function k0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function z0(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,p,x,g,m){let v=i[t];return v===void 0?(v={id:u.id,object:u,geometry:f,material:p,materialVariant:a(u),groupOrder:x,renderOrder:u.renderOrder,z:g,group:m},i[t]=v):(v.id=u.id,v.object=u,v.geometry=f,v.material=p,v.materialVariant=a(u),v.groupOrder=x,v.renderOrder=u.renderOrder,v.z=g,v.group=m),t++,v}function l(u,f,p,x,g,m,v){v.reversedDepth===!0&&(g=-g);let b=o(u,f,p,x,g,m);p.transmission>0?n.push(b):p.transparent===!0?s.push(b):e.push(b)}function c(u,f,p,x,g,m){let v=o(u,f,p,x,g,m);p.transmission>0?n.unshift(v):p.transparent===!0?s.unshift(v):e.unshift(v)}function h(u,f){e.length>1&&e.sort(u||Vb),n.length>1&&n.sort(f||k0),s.length>1&&s.sort(f||k0)}function d(){for(let u=t,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function Gb(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new z0,i.set(n,[a])):s>=r.length?(a=new z0,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Hb(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new I,color:new kt};break;case"SpotLight":e={position:new I,direction:new I,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function Wb(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Xb=0;function qb(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Yb(i){let t=new Hb,e=Wb(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let s=new I,r=new se,a=new se;function o(c){let h=0,d=0,u=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let f=0,p=0,x=0,g=0,m=0,v=0,b=0,y=0,E=0,w=0,A=0,_=0,T=0,C=0;c.sort(qb);for(let B=0,z=c.length;B<z;B++){let P=c[B],k=P.color,H=P.intensity,W=P.distance,ct=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===ns?ct=P.shadow.map.texture:ct=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=k.r*H,d+=k.g*H,u+=k.b*H;else if(P.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(P.sh.coefficients[$],H);C++}else if(P.isSunLight){let $=t.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let ot=P.shadow,O=e.get(P);O.shadowIntensity=ot.intensity,O.shadowBias=ot.bias,O.shadowNormalBias=ot.normalBias,O.shadowRadius=ot.radius,O.shadowMapSize.copy(ot.mapSize).multiply(ot.getFrameExtents()),n.sunShadow[p]=O,n.sunShadowMap[p]=ct;let K=ot.getViewportCount();for(let lt=0;lt<K;lt++)n.sunShadowMatrix[x+lt]=ot.getMatrix(lt),n.sunShadowCascade[x+lt]=ot._cascadeData[lt];x+=K,p++}n.sun[f]=$,f++}else if(P.isDirectionalLight){let $=t.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let ot=P.shadow,O=e.get(P);O.shadowIntensity=ot.intensity,O.shadowBias=ot.bias,O.shadowNormalBias=ot.normalBias,O.shadowRadius=ot.radius,O.shadowMapSize=ot.mapSize,n.directionalShadow[g]=O,n.directionalShadowMap[g]=ct,n.directionalShadowMatrix[g]=P.shadow.matrix,E++}n.directional[g]=$,g++}else if(P.isSpotLight){let $=t.get(P);$.position.setFromMatrixPosition(P.matrixWorld),$.color.copy(k).multiplyScalar(H),$.distance=W,$.coneCos=Math.cos(P.angle),$.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),$.decay=P.decay,n.spot[v]=$;let ot=P.shadow;if(P.map&&(n.spotLightMap[_]=P.map,_++,ot.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[v]=ot.matrix,P.castShadow){let O=e.get(P);O.shadowIntensity=ot.intensity,O.shadowBias=ot.bias,O.shadowNormalBias=ot.normalBias,O.shadowRadius=ot.radius,O.shadowMapSize=ot.mapSize,n.spotShadow[v]=O,n.spotShadowMap[v]=ct,A++}v++}else if(P.isRectAreaLight){let $=t.get(P);$.color.copy(k).multiplyScalar(H),$.halfWidth.set(P.width*.5,0,0),$.halfHeight.set(0,P.height*.5,0),n.rectArea[b]=$,b++}else if(P.isPointLight){let $=t.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity),$.distance=P.distance,$.decay=P.decay,P.castShadow){let ot=P.shadow,O=e.get(P);O.shadowIntensity=ot.intensity,O.shadowBias=ot.bias,O.shadowNormalBias=ot.normalBias,O.shadowRadius=ot.radius,O.shadowMapSize=ot.mapSize,O.shadowCameraNear=ot.camera.near,O.shadowCameraFar=ot.camera.far,n.pointShadow[m]=O,n.pointShadowMap[m]=ct,n.pointShadowMatrix[m]=P.shadow.matrix,w++}n.point[m]=$,m++}else if(P.isHemisphereLight){let $=t.get(P);$.skyColor.copy(P.color).multiplyScalar(H),$.groundColor.copy(P.groundColor).multiplyScalar(H),n.hemi[y]=$,y++}}b>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ft.LTC_FLOAT_1,n.rectAreaLTC2=Ft.LTC_FLOAT_2):(n.rectAreaLTC1=Ft.LTC_HALF_1,n.rectAreaLTC2=Ft.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let L=n.hash;(L.sunLength!==f||L.directionalLength!==g||L.pointLength!==m||L.spotLength!==v||L.rectAreaLength!==b||L.hemiLength!==y||L.numSunShadows!==p||L.numDirectionalShadows!==E||L.numPointShadows!==w||L.numSpotShadows!==A||L.numSpotMaps!==_||L.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=g,n.spot.length=v,n.rectArea.length=b,n.point.length=m,n.hemi.length=y,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+_-T,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,L.sunLength=f,L.directionalLength=g,L.pointLength=m,L.spotLength=v,L.rectAreaLength=b,L.hemiLength=y,L.numSunShadows=p,L.numDirectionalShadows=E,L.numPointShadows=w,L.numSpotShadows=A,L.numSpotMaps=_,L.numLightProbes=C,n.version=Xb++)}function l(c,h){let d=0,u=0,f=0,p=0,x=0,g=0,m=h.matrixWorldInverse;for(let v=0,b=c.length;v<b;v++){let y=c[v];if(y.isSunLight){let E=n.sun[d];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(m),d++}else if(y.isDirectionalLight){let E=n.directional[u];E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),u++}else if(y.isSpotLight){let E=n.spot[p];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),p++}else if(y.isRectAreaLight){let E=n.rectArea[x];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){let E=n.point[f];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){let E=n.hemi[g];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function V0(i){let t=new Yb(i),e=[],n=[],s=[];function r(u){d.camera=u,e.length=0,n.length=0,s.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Zb(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new V0(i),t.set(s,[o])):r>=a.length?(o=new V0(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var $b=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Kb=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],jb=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],G0=new se,wc=new I,xp=new I;function Qb(i,t,e){let n=new Ti,s=new ut,r=new ut,a=new Ee,o=new Ta,l=new Ea,c={},h=e.maxTextureSize,d={[Qi]:rn,[rn]:Qi,[dn]:dn},u=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:$b,fragmentShader:Jb}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new re;p.setAttribute("position",new Te(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new oe(p,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ls;let m=this.type;this.render=function(w,A,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===Tf&&(Lt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ls);let T=i.getRenderTarget(),C=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),B=i.state;B.setBlending(mi),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let z=m!==this.type;z&&A.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(k=>k.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,k=w.length;P<k;P++){let H=w[P],W=H.shadow;if(W===void 0){Lt("WebGLShadowMap:",H,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let ct=W.getFrameExtents();s.multiply(ct),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ct.x),s.x=r.x*ct.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ct.y),s.y=r.y*ct.y,W.mapSize.y=r.y));let $=i.state.buffers.depth.getReversed();if(W.camera._reversedDepth=$,W.map===null||z===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===br){if(H.isPointLight){Lt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new cn(s.x,s.y,{format:ns,type:Mn,minFilter:Ce,magFilter:Ce,generateMipmaps:!1}),W.map.texture.name=H.name+".shadowMap",W.map.depthTexture=new Xi(s.x,s.y,je),W.map.depthTexture.name=H.name+".shadowMapDepth",W.map.depthTexture.format=ui,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=ke,W.map.depthTexture.magFilter=ke}else H.isPointLight?(W.map=new Ec(s.x),W.map.depthTexture=new Zo(s.x,qn)):(W.map=new cn(s.x,s.y),W.map.depthTexture=new Xi(s.x,s.y,qn)),W.map.depthTexture.name=H.name+".shadowMap",W.map.depthTexture.format=ui,this.type===Ls?(W.map.depthTexture.compareFunction=$?Mc:vc,W.map.depthTexture.minFilter=Ce,W.map.depthTexture.magFilter=Ce):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=ke,W.map.depthTexture.magFilter=ke);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);let ot=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();H.isPointLight!==!0&&W.updateMatrices(H,_);for(let O=0;O<ot;O++){let K=W.getCamera(O);if(H.isPointLight){let lt=W.camera,Pt=W.matrix,Dt=H.distance||lt.far;Dt!==lt.far&&(lt.far=Dt,lt.updateProjectionMatrix()),wc.setFromMatrixPosition(H.matrixWorld),lt.position.copy(wc),xp.copy(lt.position),xp.add(Kb[O]),lt.up.copy(jb[O]),lt.lookAt(xp),lt.updateMatrixWorld(),Pt.makeTranslation(-wc.x,-wc.y,-wc.z),G0.multiplyMatrices(lt.projectionMatrix,lt.matrixWorldInverse),W._frustum.setFromProjectionMatrix(G0,lt.coordinateSystem,lt.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)i.setRenderTarget(W.map,O),i.clear();else{O===0&&(i.setRenderTarget(W.map),i.clear());let lt=W.getViewport(O);a.set(r.x*lt.x,r.y*lt.y,r.x*lt.z,r.y*lt.w),B.viewport(a)}n=W.getFrustum(O),y(A,_,K,H,this.type)}W.isPointLightShadow!==!0&&this.type===br&&v(W,_),W.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(T,C,L)};function v(w,A){let _=t.update(x);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new cn(s.x,s.y,{format:ns,type:Mn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,_,u,x,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,_,f,x,null)}function b(w,A,_,T){let C=null,L=_.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)C=L;else if(C=_.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let B=C.uuid,z=A.uuid,P=c[B];P===void 0&&(P={},c[B]=P);let k=P[z];k===void 0&&(k=C.clone(),P[z]=k,A.addEventListener("dispose",E)),C=k}if(C.visible=A.visible,C.wireframe=A.wireframe,T===br?C.side=A.shadowSide!==null?A.shadowSide:A.side:C.side=A.shadowSide!==null?A.shadowSide:d[A.side],C.alphaMap=A.alphaMap,C.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,C.map=A.map,C.clipShadows=A.clipShadows,C.clippingPlanes=A.clippingPlanes,C.clipIntersection=A.clipIntersection,C.displacementMap=A.displacementMap,C.displacementScale=A.displacementScale,C.displacementBias=A.displacementBias,C.wireframeLinewidth=A.wireframeLinewidth,C.linewidth=A.linewidth,_.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let B=i.properties.get(C);B.light=_}return C}function y(w,A,_,T,C){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&C===br)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,w.matrixWorld);let z=t.update(w),P=w.material;if(Array.isArray(P)){let k=z.groups;for(let H=0,W=k.length;H<W;H++){let ct=k[H],$=P[ct.materialIndex];if($&&$.visible){let ot=b(w,$,T,C);w.onBeforeShadow(i,w,A,_,z,ot,ct),i.renderBufferDirect(_,null,z,ot,w,ct),w.onAfterShadow(i,w,A,_,z,ot,ct)}}}else if(P.visible){let k=b(w,P,T,C);w.onBeforeShadow(i,w,A,_,z,k,null),i.renderBufferDirect(_,null,z,k,w,null),w.onAfterShadow(i,w,A,_,z,k,null)}}let B=w.children;for(let z=0,P=B.length;z<P;z++)y(B[z],A,_,T,C)}function E(w){w.target.removeEventListener("dispose",E);for(let _ in c){let T=c[_],C=w.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}function tw(i,t){function e(){let N=!1,yt=new Ee,nt=null,Tt=new Ee(0,0,0,0);return{setMask:function(Nt){nt!==Nt&&!N&&(i.colorMask(Nt,Nt,Nt,Nt),nt=Nt)},setLocked:function(Nt){N=Nt},setClear:function(Nt,pt,Wt,Ht,Ae){Ae===!0&&(Nt*=Ht,pt*=Ht,Wt*=Ht),yt.set(Nt,pt,Wt,Ht),Tt.equals(yt)===!1&&(i.clearColor(Nt,pt,Wt,Ht),Tt.copy(yt))},reset:function(){N=!1,nt=null,Tt.set(-1,0,0,0)}}}function n(){let N=!1,yt=!1,nt=null,Tt=null,Nt=null;return{setReversed:function(pt){if(yt!==pt){let Wt=t.get("EXT_clip_control");pt?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT),yt=pt;let Ht=Nt;Nt=null,this.setClear(Ht)}},getReversed:function(){return yt},setTest:function(pt){pt?j(i.DEPTH_TEST):gt(i.DEPTH_TEST)},setMask:function(pt){nt!==pt&&!N&&(i.depthMask(pt),nt=pt)},setFunc:function(pt){if(yt&&(pt=u0[pt]),Tt!==pt){switch(pt){case Io:i.depthFunc(i.NEVER);break;case Po:i.depthFunc(i.ALWAYS);break;case Lo:i.depthFunc(i.LESS);break;case Ks:i.depthFunc(i.LEQUAL);break;case Do:i.depthFunc(i.EQUAL);break;case No:i.depthFunc(i.GEQUAL);break;case Uo:i.depthFunc(i.GREATER);break;case Fo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Tt=pt}},setLocked:function(pt){N=pt},setClear:function(pt){Nt!==pt&&(Nt=pt,yt&&(pt=1-pt),i.clearDepth(pt))},reset:function(){N=!1,nt=null,Tt=null,Nt=null,yt=!1}}}function s(){let N=!1,yt=null,nt=null,Tt=null,Nt=null,pt=null,Wt=null,Ht=null,Ae=null;return{setTest:function(_e){N||(_e?j(i.STENCIL_TEST):gt(i.STENCIL_TEST))},setMask:function(_e){yt!==_e&&!N&&(i.stencilMask(_e),yt=_e)},setFunc:function(_e,Ln,an){(nt!==_e||Tt!==Ln||Nt!==an)&&(i.stencilFunc(_e,Ln,an),nt=_e,Tt=Ln,Nt=an)},setOp:function(_e,Ln,an){(pt!==_e||Wt!==Ln||Ht!==an)&&(i.stencilOp(_e,Ln,an),pt=_e,Wt=Ln,Ht=an)},setLocked:function(_e){N=_e},setClear:function(_e){Ae!==_e&&(i.clearStencil(_e),Ae=_e)},reset:function(){N=!1,yt=null,nt=null,Tt=null,Nt=null,pt=null,Wt=null,Ht=null,Ae=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,p=[],x=null,g=!1,m=null,v=null,b=null,y=null,E=null,w=null,A=null,_=new kt(0,0,0),T=0,C=!1,L=null,B=null,z=null,P=null,k=null,H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,ct=0,$=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(ct=parseFloat(/^WebGL (\d)/.exec($)[1]),W=ct>=1):$.indexOf("OpenGL ES")!==-1&&(ct=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),W=ct>=2);let ot=null,O={},K=i.getParameter(i.SCISSOR_BOX),lt=i.getParameter(i.VIEWPORT),Pt=new Ee().fromArray(K),Dt=new Ee().fromArray(lt);function Ut(N,yt,nt,Tt){let Nt=new Uint8Array(4),pt=i.createTexture();i.bindTexture(N,pt),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Wt=0;Wt<nt;Wt++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(yt,0,i.RGBA,1,1,Tt,0,i.RGBA,i.UNSIGNED_BYTE,Nt):i.texImage2D(yt+Wt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Nt);return pt}let q={};q[i.TEXTURE_2D]=Ut(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=Ut(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=Ut(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=Ut(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(i.DEPTH_TEST),a.setFunc(Ks),mt(!1),wt(Ou),j(i.CULL_FACE),dt(mi);function j(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function gt(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function xt(N,yt){return u[N]!==yt?(i.bindFramebuffer(N,yt),u[N]=yt,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=yt),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=yt),!0):!1}function _t(N,yt){let nt=p,Tt=!1;if(N){nt=f.get(yt),nt===void 0&&(nt=[],f.set(yt,nt));let Nt=N.textures;if(nt.length!==Nt.length||nt[0]!==i.COLOR_ATTACHMENT0){for(let pt=0,Wt=Nt.length;pt<Wt;pt++)nt[pt]=i.COLOR_ATTACHMENT0+pt;nt.length=Nt.length,Tt=!0}}else nt[0]!==i.BACK&&(nt[0]=i.BACK,Tt=!0);Tt&&i.drawBuffers(nt)}function Ot(N){return x!==N?(i.useProgram(N),x=N,!0):!1}let Zt={[Ds]:i.FUNC_ADD,[Af]:i.FUNC_SUBTRACT,[Cf]:i.FUNC_REVERSE_SUBTRACT};Zt[Rf]=i.MIN,Zt[If]=i.MAX;let Q={[Pf]:i.ZERO,[Lf]:i.ONE,[Df]:i.SRC_COLOR,[Vu]:i.SRC_ALPHA,[kf]:i.SRC_ALPHA_SATURATE,[Of]:i.DST_COLOR,[Uf]:i.DST_ALPHA,[Nf]:i.ONE_MINUS_SRC_COLOR,[Gu]:i.ONE_MINUS_SRC_ALPHA,[Bf]:i.ONE_MINUS_DST_COLOR,[Ff]:i.ONE_MINUS_DST_ALPHA,[zf]:i.CONSTANT_COLOR,[Vf]:i.ONE_MINUS_CONSTANT_COLOR,[Gf]:i.CONSTANT_ALPHA,[Hf]:i.ONE_MINUS_CONSTANT_ALPHA};function dt(N,yt,nt,Tt,Nt,pt,Wt,Ht,Ae,_e){if(N===mi){g===!0&&(gt(i.BLEND),g=!1);return}if(g===!1&&(j(i.BLEND),g=!0),N!==Ef){if(N!==m||_e!==C){if((v!==Ds||E!==Ds)&&(i.blendEquation(i.FUNC_ADD),v=Ds,E=Ds),_e)switch(N){case wr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bu:i.blendFunc(i.ONE,i.ONE);break;case ku:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case zu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Jt("WebGLState: Invalid blending: ",N);break}else switch(N){case wr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bu:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ku:Jt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zu:Jt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Jt("WebGLState: Invalid blending: ",N);break}b=null,y=null,w=null,A=null,_.set(0,0,0),T=0,m=N,C=_e}return}Nt=Nt||yt,pt=pt||nt,Wt=Wt||Tt,(yt!==v||Nt!==E)&&(i.blendEquationSeparate(Zt[yt],Zt[Nt]),v=yt,E=Nt),(nt!==b||Tt!==y||pt!==w||Wt!==A)&&(i.blendFuncSeparate(Q[nt],Q[Tt],Q[pt],Q[Wt]),b=nt,y=Tt,w=pt,A=Wt),(Ht.equals(_)===!1||Ae!==T)&&(i.blendColor(Ht.r,Ht.g,Ht.b,Ae),_.copy(Ht),T=Ae),m=N,C=!1}function ft(N,yt){N.side===dn?gt(i.CULL_FACE):j(i.CULL_FACE);let nt=N.side===rn;yt&&(nt=!nt),mt(nt),N.blending===wr&&N.transparent===!1?dt(mi):dt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let Tt=N.stencilWrite;o.setTest(Tt),Tt&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),$t(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):gt(i.SAMPLE_ALPHA_TO_COVERAGE)}function mt(N){L!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),L=N)}function wt(N){N!==bf?(j(i.CULL_FACE),N!==B&&(N===Ou?i.cullFace(i.BACK):N===wf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):gt(i.CULL_FACE),B=N}function Yt(N){N!==z&&(W&&i.lineWidth(N),z=N)}function $t(N,yt,nt){N?(j(i.POLYGON_OFFSET_FILL),(P!==yt||k!==nt)&&(P=yt,k=nt,a.getReversed()&&(yt=-yt),i.polygonOffset(yt,nt))):gt(i.POLYGON_OFFSET_FILL)}function Qt(N){N?j(i.SCISSOR_TEST):gt(i.SCISSOR_TEST)}function Kt(N){N===void 0&&(N=i.TEXTURE0+H-1),ot!==N&&(i.activeTexture(N),ot=N)}function U(N,yt,nt){nt===void 0&&(ot===null?nt=i.TEXTURE0+H-1:nt=ot);let Tt=O[nt];Tt===void 0&&(Tt={type:void 0,texture:void 0},O[nt]=Tt),(Tt.type!==N||Tt.texture!==yt)&&(ot!==nt&&(i.activeTexture(nt),ot=nt),i.bindTexture(N,yt||q[N]),Tt.type=N,Tt.texture=yt)}function fe(){let N=O[ot];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function ce(){try{i.compressedTexImage2D(...arguments)}catch(N){Jt("WebGLState:",N)}}function R(){try{i.compressedTexImage3D(...arguments)}catch(N){Jt("WebGLState:",N)}}function M(){try{i.texSubImage2D(...arguments)}catch(N){Jt("WebGLState:",N)}}function X(){try{i.texSubImage3D(...arguments)}catch(N){Jt("WebGLState:",N)}}function J(){try{i.compressedTexSubImage2D(...arguments)}catch(N){Jt("WebGLState:",N)}}function rt(){try{i.compressedTexSubImage3D(...arguments)}catch(N){Jt("WebGLState:",N)}}function St(){try{i.texStorage2D(...arguments)}catch(N){Jt("WebGLState:",N)}}function Rt(){try{i.texStorage3D(...arguments)}catch(N){Jt("WebGLState:",N)}}function at(){try{i.texImage2D(...arguments)}catch(N){Jt("WebGLState:",N)}}function D(){try{i.texImage3D(...arguments)}catch(N){Jt("WebGLState:",N)}}function Y(N){return d[N]!==void 0?d[N]:i.getParameter(N)}function it(N,yt){d[N]!==yt&&(i.pixelStorei(N,yt),d[N]=yt)}function st(N){Pt.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Pt.copy(N))}function tt(N){Dt.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Dt.copy(N))}function ht(N,yt){let nt=c.get(yt);nt===void 0&&(nt=new WeakMap,c.set(yt,nt));let Tt=nt.get(N);Tt===void 0&&(Tt=i.getUniformBlockIndex(yt,N.name),nt.set(N,Tt))}function vt(N,yt){let Tt=c.get(yt).get(N);l.get(yt)!==Tt&&(i.uniformBlockBinding(yt,Tt,N.__bindingPointIndex),l.set(yt,Tt))}function At(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},ot=null,O={},u={},f=new WeakMap,p=[],x=null,g=!1,m=null,v=null,b=null,y=null,E=null,w=null,A=null,_=new kt(0,0,0),T=0,C=!1,L=null,B=null,z=null,P=null,k=null,Pt.set(0,0,i.canvas.width,i.canvas.height),Dt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:j,disable:gt,bindFramebuffer:xt,drawBuffers:_t,useProgram:Ot,setBlending:dt,setMaterial:ft,setFlipSided:mt,setCullFace:wt,setLineWidth:Yt,setPolygonOffset:$t,setScissorTest:Qt,activeTexture:Kt,bindTexture:U,unbindTexture:fe,compressedTexImage2D:ce,compressedTexImage3D:R,texImage2D:at,texImage3D:D,pixelStorei:it,getParameter:Y,updateUBOMapping:ht,uniformBlockBinding:vt,texStorage2D:St,texStorage3D:Rt,texSubImage2D:M,texSubImage3D:X,compressedTexSubImage2D:J,compressedTexSubImage3D:rt,scissor:st,viewport:tt,reset:At}}function ew(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ut,h=new WeakMap,d=new Set,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,M){return p?new OffscreenCanvas(R,M):la("canvas")}function g(R,M,X){let J=1,rt=ce(R);if((rt.width>X||rt.height>X)&&(J=X/Math.max(rt.width,rt.height)),J<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let St=Math.floor(J*rt.width),Rt=Math.floor(J*rt.height);u===void 0&&(u=x(St,Rt));let at=M?x(St,Rt):u;return at.width=St,at.height=Rt,at.getContext("2d").drawImage(R,0,0,St,Rt),Lt("WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+St+"x"+Rt+")."),at}else return"data"in R&&Lt("WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),R;return R}function m(R){return R.generateMipmaps}function v(R){i.generateMipmap(R)}function b(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(R,M,X,J,rt,St=!1){if(R!==null){if(i[R]!==void 0)return i[R];Lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Rt;J&&(Rt=t.get("EXT_texture_norm16"),Rt||Lt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let at=M;if(M===i.RED&&(X===i.FLOAT&&(at=i.R32F),X===i.HALF_FLOAT&&(at=i.R16F),X===i.UNSIGNED_BYTE&&(at=i.R8),X===i.UNSIGNED_SHORT&&Rt&&(at=Rt.R16_EXT),X===i.SHORT&&Rt&&(at=Rt.R16_SNORM_EXT)),M===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(at=i.R8UI),X===i.UNSIGNED_SHORT&&(at=i.R16UI),X===i.UNSIGNED_INT&&(at=i.R32UI),X===i.BYTE&&(at=i.R8I),X===i.SHORT&&(at=i.R16I),X===i.INT&&(at=i.R32I)),M===i.RG&&(X===i.FLOAT&&(at=i.RG32F),X===i.HALF_FLOAT&&(at=i.RG16F),X===i.UNSIGNED_BYTE&&(at=i.RG8),X===i.UNSIGNED_SHORT&&Rt&&(at=Rt.RG16_EXT),X===i.SHORT&&Rt&&(at=Rt.RG16_SNORM_EXT)),M===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(at=i.RG8UI),X===i.UNSIGNED_SHORT&&(at=i.RG16UI),X===i.UNSIGNED_INT&&(at=i.RG32UI),X===i.BYTE&&(at=i.RG8I),X===i.SHORT&&(at=i.RG16I),X===i.INT&&(at=i.RG32I)),M===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(at=i.RGB8UI),X===i.UNSIGNED_SHORT&&(at=i.RGB16UI),X===i.UNSIGNED_INT&&(at=i.RGB32UI),X===i.BYTE&&(at=i.RGB8I),X===i.SHORT&&(at=i.RGB16I),X===i.INT&&(at=i.RGB32I)),M===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(at=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(at=i.RGBA16UI),X===i.UNSIGNED_INT&&(at=i.RGBA32UI),X===i.BYTE&&(at=i.RGBA8I),X===i.SHORT&&(at=i.RGBA16I),X===i.INT&&(at=i.RGBA32I)),M===i.RGB&&(X===i.UNSIGNED_SHORT&&Rt&&(at=Rt.RGB16_EXT),X===i.SHORT&&Rt&&(at=Rt.RGB16_SNORM_EXT),X===i.UNSIGNED_INT_5_9_9_9_REV&&(at=i.RGB9_E5),X===i.UNSIGNED_INT_10F_11F_11F_REV&&(at=i.R11F_G11F_B10F)),M===i.RGBA){let D=St?oa:me.getTransfer(rt);X===i.FLOAT&&(at=i.RGBA32F),X===i.HALF_FLOAT&&(at=i.RGBA16F),X===i.UNSIGNED_BYTE&&(at=D===Se?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT&&Rt&&(at=Rt.RGBA16_EXT),X===i.SHORT&&Rt&&(at=Rt.RGBA16_SNORM_EXT),X===i.UNSIGNED_SHORT_4_4_4_4&&(at=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(at=i.RGB5_A1)}return(at===i.R16F||at===i.R32F||at===i.RG16F||at===i.RG32F||at===i.RGBA16F||at===i.RGBA32F)&&t.get("EXT_color_buffer_float"),at}function E(R,M){let X;return R?M===null||M===qn||M===Cr?X=i.DEPTH24_STENCIL8:M===je?X=i.DEPTH32F_STENCIL8:M===Ar&&(X=i.DEPTH24_STENCIL8,Lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===qn||M===Cr?X=i.DEPTH_COMPONENT24:M===je?X=i.DEPTH_COMPONENT32F:M===Ar&&(X=i.DEPTH_COMPONENT16),X}function w(R,M){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==ke&&R.minFilter!==Ce?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function A(R){let M=R.target;M.removeEventListener("dispose",A),T(M),M.isVideoTexture&&h.delete(M),M.isHTMLTexture&&d.delete(M)}function _(R){let M=R.target;M.removeEventListener("dispose",_),L(M)}function T(R){let M=n.get(R);if(M.__webglInit===void 0)return;let X=R.source,J=f.get(X);if(J){let rt=J[M.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&C(R),Object.keys(J).length===0&&f.delete(X)}n.remove(R)}function C(R){let M=n.get(R);i.deleteTexture(M.__webglTexture);let X=R.source,J=f.get(X);delete J[M.__cacheKey],a.memory.textures--}function L(R){let M=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(M.__webglFramebuffer[J]))for(let rt=0;rt<M.__webglFramebuffer[J].length;rt++)i.deleteFramebuffer(M.__webglFramebuffer[J][rt]);else i.deleteFramebuffer(M.__webglFramebuffer[J]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[J])}else{if(Array.isArray(M.__webglFramebuffer))for(let J=0;J<M.__webglFramebuffer.length;J++)i.deleteFramebuffer(M.__webglFramebuffer[J]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let J=0;J<M.__webglColorRenderbuffer.length;J++)M.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[J]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let X=R.textures;for(let J=0,rt=X.length;J<rt;J++){let St=n.get(X[J]);St.__webglTexture&&(i.deleteTexture(St.__webglTexture),a.memory.textures--),n.remove(X[J])}n.remove(R)}let B=0;function z(){B=0}function P(){return B}function k(R){B=R}function H(){let R=B;return R>=s.maxTextures&&Lt("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),B+=1,R}function W(R){let M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function ct(R,M){let X=n.get(R);if(R.isVideoTexture&&U(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&X.__version!==R.version){let J=R.image;if(J===null)Lt("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)Lt("WebGLRenderer: Texture marked for update but image is incomplete");else{gt(X,R,M);return}}else R.isExternalTexture&&(X.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+M)}function $(R,M){let X=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&X.__version!==R.version){gt(X,R,M);return}else R.isExternalTexture&&(X.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+M)}function ot(R,M){let X=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&X.__version!==R.version){gt(X,R,M);return}e.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+M)}function O(R,M){let X=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&X.__version!==R.version){xt(X,R,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+M)}let K={[ys]:i.REPEAT,[En]:i.CLAMP_TO_EDGE,[sa]:i.MIRRORED_REPEAT},lt={[ke]:i.NEAREST,[$u]:i.NEAREST_MIPMAP_NEAREST,[Er]:i.NEAREST_MIPMAP_LINEAR,[Ce]:i.LINEAR,[Ga]:i.LINEAR_MIPMAP_NEAREST,[_i]:i.LINEAR_MIPMAP_LINEAR},Pt={[Qf]:i.NEVER,[sp]:i.ALWAYS,[tp]:i.LESS,[vc]:i.LEQUAL,[ep]:i.EQUAL,[Mc]:i.GEQUAL,[np]:i.GREATER,[ip]:i.NOTEQUAL};function Dt(R,M){if(M.type===je&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Ce||M.magFilter===Ga||M.magFilter===Er||M.magFilter===_i||M.minFilter===Ce||M.minFilter===Ga||M.minFilter===Er||M.minFilter===_i)&&Lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,K[M.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,K[M.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,K[M.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,lt[M.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,lt[M.minFilter]),M.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Pt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===ke||M.minFilter!==Er&&M.minFilter!==_i||M.type===je&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let X=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Ut(R,M){let X=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",A));let J=M.source,rt=f.get(J);rt===void 0&&(rt={},f.set(J,rt));let St=W(M);if(St!==R.__cacheKey){rt[St]===void 0&&(rt[St]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,X=!0),rt[St].usedTimes++;let Rt=rt[R.__cacheKey];Rt!==void 0&&(rt[R.__cacheKey].usedTimes--,Rt.usedTimes===0&&C(M)),R.__cacheKey=St,R.__webglTexture=rt[St].texture}return X}function q(R,M,X){return Math.floor(Math.floor(R/X)/M)}function j(R,M,X,J){let St=R.updateRanges;if(St.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,X,J,M.data);else{St.sort((it,st)=>it.start-st.start);let Rt=0;for(let it=1;it<St.length;it++){let st=St[Rt],tt=St[it],ht=st.start+st.count,vt=q(tt.start,M.width,4),At=q(st.start,M.width,4);tt.start<=ht+1&&vt===At&&q(tt.start+tt.count-1,M.width,4)===vt?st.count=Math.max(st.count,tt.start+tt.count-st.start):(++Rt,St[Rt]=tt)}St.length=Rt+1;let at=e.getParameter(i.UNPACK_ROW_LENGTH),D=e.getParameter(i.UNPACK_SKIP_PIXELS),Y=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let it=0,st=St.length;it<st;it++){let tt=St[it],ht=Math.floor(tt.start/4),vt=Math.ceil(tt.count/4),At=ht%M.width,N=Math.floor(ht/M.width),yt=vt,nt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,At),e.pixelStorei(i.UNPACK_SKIP_ROWS,N),e.texSubImage2D(i.TEXTURE_2D,0,At,N,yt,nt,X,J,M.data)}R.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,at),e.pixelStorei(i.UNPACK_SKIP_PIXELS,D),e.pixelStorei(i.UNPACK_SKIP_ROWS,Y)}}function gt(R,M,X){let J=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(J=i.TEXTURE_3D);let rt=Ut(R,M),St=M.source;e.bindTexture(J,R.__webglTexture,i.TEXTURE0+X);let Rt=n.get(St);if(St.version!==Rt.__version||rt===!0){if(e.activeTexture(i.TEXTURE0+X),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let nt=me.getPrimaries(me.workingColorSpace),Tt=M.colorSpace===Pi?null:me.getPrimaries(M.colorSpace),Nt=M.colorSpace===Pi||nt===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt)}e.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment);let D=g(M.image,!1,s.maxTextureSize);D=fe(M,D);let Y=r.convert(M.format,M.colorSpace),it=r.convert(M.type),st=y(M.internalFormat,Y,it,M.normalized,M.colorSpace,M.isVideoTexture);Dt(J,M);let tt,ht=M.mipmaps,vt=M.isVideoTexture!==!0,At=Rt.__version===void 0||rt===!0,N=St.dataReady,yt=w(M,D);if(M.isDepthTexture)st=E(M.format===es,M.type),At&&(vt?e.texStorage2D(i.TEXTURE_2D,1,st,D.width,D.height):e.texImage2D(i.TEXTURE_2D,0,st,D.width,D.height,0,Y,it,null));else if(M.isDataTexture)if(ht.length>0){vt&&At&&e.texStorage2D(i.TEXTURE_2D,yt,st,ht[0].width,ht[0].height);for(let nt=0,Tt=ht.length;nt<Tt;nt++)tt=ht[nt],vt?N&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,tt.width,tt.height,Y,it,tt.data):e.texImage2D(i.TEXTURE_2D,nt,st,tt.width,tt.height,0,Y,it,tt.data);M.generateMipmaps=!1}else vt?(At&&e.texStorage2D(i.TEXTURE_2D,yt,st,D.width,D.height),N&&j(M,D,Y,it)):e.texImage2D(i.TEXTURE_2D,0,st,D.width,D.height,0,Y,it,D.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){vt&&At&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,st,ht[0].width,ht[0].height,D.depth);for(let nt=0,Tt=ht.length;nt<Tt;nt++)if(tt=ht[nt],M.format!==vn)if(Y!==null)if(vt){if(N)if(M.layerUpdates.size>0){let Nt=rd(tt.width,tt.height,M.format,M.type);for(let pt of M.layerUpdates){let Wt=tt.data.subarray(pt*Nt/tt.data.BYTES_PER_ELEMENT,(pt+1)*Nt/tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,pt,tt.width,tt.height,1,Y,Wt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,tt.width,tt.height,D.depth,Y,tt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,nt,st,tt.width,tt.height,D.depth,0,tt.data,0,0);else Lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else vt?N&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,tt.width,tt.height,D.depth,Y,it,tt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,nt,st,tt.width,tt.height,D.depth,0,Y,it,tt.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{vt&&At&&e.texStorage2D(i.TEXTURE_2D,yt,st,ht[0].width,ht[0].height);for(let nt=0,Tt=ht.length;nt<Tt;nt++)tt=ht[nt],M.format!==vn?Y!==null?vt?N&&e.compressedTexSubImage2D(i.TEXTURE_2D,nt,0,0,tt.width,tt.height,Y,tt.data):e.compressedTexImage2D(i.TEXTURE_2D,nt,st,tt.width,tt.height,0,tt.data):Lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):vt?N&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,tt.width,tt.height,Y,it,tt.data):e.texImage2D(i.TEXTURE_2D,nt,st,tt.width,tt.height,0,Y,it,tt.data)}else if(M.isDataArrayTexture)if(vt){if(At&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,st,D.width,D.height,D.depth),N)if(M.layerUpdates.size>0){let nt=rd(D.width,D.height,M.format,M.type);for(let Tt of M.layerUpdates){let Nt=D.data.subarray(Tt*nt/D.data.BYTES_PER_ELEMENT,(Tt+1)*nt/D.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Tt,D.width,D.height,1,Y,it,Nt)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,D.width,D.height,D.depth,Y,it,D.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,st,D.width,D.height,D.depth,0,Y,it,D.data);else if(M.isData3DTexture)vt?(At&&e.texStorage3D(i.TEXTURE_3D,yt,st,D.width,D.height,D.depth),N&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,D.width,D.height,D.depth,Y,it,D.data)):e.texImage3D(i.TEXTURE_3D,0,st,D.width,D.height,D.depth,0,Y,it,D.data);else if(M.isFramebufferTexture){if(At)if(vt)e.texStorage2D(i.TEXTURE_2D,yt,st,D.width,D.height);else{let nt=D.width,Tt=D.height;for(let Nt=0;Nt<yt;Nt++)e.texImage2D(i.TEXTURE_2D,Nt,st,nt,Tt,0,Y,it,null),nt>>=1,Tt>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in i){let nt=i.canvas;if(nt.hasAttribute("layoutsubtree")||nt.setAttribute("layoutsubtree","true"),D.parentNode!==nt){nt.appendChild(D),d.add(M),nt.onpaint=Tt=>{let Nt=Tt.changedElements;for(let pt of d)Nt.includes(pt.image)&&(pt.needsUpdate=!0)},nt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,D);else{let Nt=i.RGBA,pt=i.RGBA,Wt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Nt,pt,Wt,D)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ht.length>0){if(vt&&At){let nt=ce(ht[0]);e.texStorage2D(i.TEXTURE_2D,yt,st,nt.width,nt.height)}for(let nt=0,Tt=ht.length;nt<Tt;nt++)tt=ht[nt],vt?N&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,Y,it,tt):e.texImage2D(i.TEXTURE_2D,nt,st,Y,it,tt);M.generateMipmaps=!1}else if(vt){if(At){let nt=ce(D);e.texStorage2D(i.TEXTURE_2D,yt,st,nt.width,nt.height)}N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Y,it,D)}else e.texImage2D(i.TEXTURE_2D,0,st,Y,it,D);m(M)&&v(J),Rt.__version=St.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function xt(R,M,X){if(M.image.length!==6)return;let J=Ut(R,M),rt=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+X);let St=n.get(rt);if(rt.version!==St.__version||J===!0){e.activeTexture(i.TEXTURE0+X);let Rt=me.getPrimaries(me.workingColorSpace),at=M.colorSpace===Pi?null:me.getPrimaries(M.colorSpace),D=M.colorSpace===Pi||Rt===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,D);let Y=M.isCompressedTexture||M.image[0].isCompressedTexture,it=M.image[0]&&M.image[0].isDataTexture,st=[];for(let pt=0;pt<6;pt++)!Y&&!it?st[pt]=g(M.image[pt],!0,s.maxCubemapSize):st[pt]=it?M.image[pt].image:M.image[pt],st[pt]=fe(M,st[pt]);let tt=st[0],ht=r.convert(M.format,M.colorSpace),vt=r.convert(M.type),At=y(M.internalFormat,ht,vt,M.normalized,M.colorSpace),N=M.isVideoTexture!==!0,yt=St.__version===void 0||J===!0,nt=rt.dataReady,Tt=w(M,tt);Dt(i.TEXTURE_CUBE_MAP,M);let Nt;if(Y){N&&yt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,At,tt.width,tt.height);for(let pt=0;pt<6;pt++){Nt=st[pt].mipmaps;for(let Wt=0;Wt<Nt.length;Wt++){let Ht=Nt[Wt];M.format!==vn?ht!==null?N?nt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Wt,0,0,Ht.width,Ht.height,ht,Ht.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Wt,At,Ht.width,Ht.height,0,Ht.data):Lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Wt,0,0,Ht.width,Ht.height,ht,vt,Ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Wt,At,Ht.width,Ht.height,0,ht,vt,Ht.data)}}}else{if(Nt=M.mipmaps,N&&yt){Nt.length>0&&Tt++;let pt=ce(st[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,At,pt.width,pt.height)}for(let pt=0;pt<6;pt++)if(it){N?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,st[pt].width,st[pt].height,ht,vt,st[pt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,At,st[pt].width,st[pt].height,0,ht,vt,st[pt].data);for(let Wt=0;Wt<Nt.length;Wt++){let Ae=Nt[Wt].image[pt].image;N?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Wt+1,0,0,Ae.width,Ae.height,ht,vt,Ae.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Wt+1,At,Ae.width,Ae.height,0,ht,vt,Ae.data)}}else{N?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,ht,vt,st[pt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,At,ht,vt,st[pt]);for(let Wt=0;Wt<Nt.length;Wt++){let Ht=Nt[Wt];N?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Wt+1,0,0,ht,vt,Ht.image[pt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Wt+1,At,ht,vt,Ht.image[pt])}}}m(M)&&v(i.TEXTURE_CUBE_MAP),St.__version=rt.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function _t(R,M,X,J,rt,St){let Rt=r.convert(X.format,X.colorSpace),at=r.convert(X.type),D=y(X.internalFormat,Rt,at,X.normalized,X.colorSpace),Y=n.get(M),it=n.get(X);if(it.__renderTarget=M,!Y.__hasExternalTextures){let st=Math.max(1,M.width>>St),tt=Math.max(1,M.height>>St);rt===i.TEXTURE_3D||rt===i.TEXTURE_2D_ARRAY?e.texImage3D(rt,St,D,st,tt,M.depth,0,Rt,at,null):e.texImage2D(rt,St,D,st,tt,0,Rt,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),Kt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,rt,it.__webglTexture,0,Qt(M)):(rt===i.TEXTURE_2D||rt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,rt,it.__webglTexture,St),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ot(R,M,X){if(i.bindRenderbuffer(i.RENDERBUFFER,R),M.depthBuffer){let J=M.depthTexture,rt=J&&J.isDepthTexture?J.type:null,St=E(M.stencilBuffer,rt),Rt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Kt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Qt(M),St,M.width,M.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,Qt(M),St,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,St,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Rt,i.RENDERBUFFER,R)}else{let J=M.textures;for(let rt=0;rt<J.length;rt++){let St=J[rt],Rt=r.convert(St.format,St.colorSpace),at=r.convert(St.type),D=y(St.internalFormat,Rt,at,St.normalized,St.colorSpace);Kt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Qt(M),D,M.width,M.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,Qt(M),D,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,D,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Zt(R,M,X){let J=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let rt=n.get(M.depthTexture);if(rt.__renderTarget=M,(!rt.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),J){if(rt.__webglInit===void 0&&(rt.__webglInit=!0,M.depthTexture.addEventListener("dispose",A)),rt.__webglTexture===void 0){rt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,rt.__webglTexture),Dt(i.TEXTURE_CUBE_MAP,M.depthTexture);let Y=r.convert(M.depthTexture.format),it=r.convert(M.depthTexture.type),st;M.depthTexture.format===ui?st=i.DEPTH_COMPONENT24:M.depthTexture.format===es&&(st=i.DEPTH24_STENCIL8);for(let tt=0;tt<6;tt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,st,M.width,M.height,0,Y,it,null)}}else ct(M.depthTexture,0);let St=rt.__webglTexture,Rt=Qt(M),at=J?i.TEXTURE_CUBE_MAP_POSITIVE_X+X:i.TEXTURE_2D,D=M.depthTexture.format===es?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===ui)Kt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,D,at,St,0,Rt):i.framebufferTexture2D(i.FRAMEBUFFER,D,at,St,0);else if(M.depthTexture.format===es)Kt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,D,at,St,0,Rt):i.framebufferTexture2D(i.FRAMEBUFFER,D,at,St,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Q(R){let M=n.get(R),X=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){let J=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),J){let rt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,J.removeEventListener("dispose",rt)};J.addEventListener("dispose",rt),M.__depthDisposeCallback=rt}M.__boundDepthTexture=J}if(R.depthTexture&&!M.__autoAllocateDepthBuffer)if(X)for(let J=0;J<6;J++)Zt(M.__webglFramebuffer[J],R,J);else{let J=R.texture.mipmaps;J&&J.length>0?Zt(M.__webglFramebuffer[0],R,0):Zt(M.__webglFramebuffer,R,0)}else if(X){M.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[J]),M.__webglDepthbuffer[J]===void 0)M.__webglDepthbuffer[J]=i.createRenderbuffer(),Ot(M.__webglDepthbuffer[J],R,!1);else{let rt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=M.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,St),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,St)}}else{let J=R.texture.mipmaps;if(J&&J.length>0?e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),Ot(M.__webglDepthbuffer,R,!1);else{let rt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,St),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,St)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function dt(R,M,X){let J=n.get(R);M!==void 0&&_t(J.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&Q(R)}function ft(R){let M=R.texture,X=n.get(R),J=n.get(M);R.addEventListener("dispose",_);let rt=R.textures,St=R.isWebGLCubeRenderTarget===!0,Rt=rt.length>1;if(Rt||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=M.version,a.memory.textures++),St){X.__webglFramebuffer=[];for(let at=0;at<6;at++)if(M.mipmaps&&M.mipmaps.length>0){X.__webglFramebuffer[at]=[];for(let D=0;D<M.mipmaps.length;D++)X.__webglFramebuffer[at][D]=i.createFramebuffer()}else X.__webglFramebuffer[at]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){X.__webglFramebuffer=[];for(let at=0;at<M.mipmaps.length;at++)X.__webglFramebuffer[at]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(Rt)for(let at=0,D=rt.length;at<D;at++){let Y=n.get(rt[at]);Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&Kt(R)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let at=0;at<rt.length;at++){let D=rt[at];X.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[at]);let Y=r.convert(D.format,D.colorSpace),it=r.convert(D.type),st=y(D.internalFormat,Y,it,D.normalized,D.colorSpace,R.isXRRenderTarget===!0),tt=Qt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,tt,st,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,X.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),Ot(X.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(St){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Dt(i.TEXTURE_CUBE_MAP,M);for(let at=0;at<6;at++)if(M.mipmaps&&M.mipmaps.length>0)for(let D=0;D<M.mipmaps.length;D++)_t(X.__webglFramebuffer[at][D],R,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,D);else _t(X.__webglFramebuffer[at],R,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);m(M)&&v(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Rt){for(let at=0,D=rt.length;at<D;at++){let Y=rt[at],it=n.get(Y),st=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(st=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(st,it.__webglTexture),Dt(st,Y),_t(X.__webglFramebuffer,R,Y,i.COLOR_ATTACHMENT0+at,st,0),m(Y)&&v(st)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(at=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,J.__webglTexture),Dt(at,M),M.mipmaps&&M.mipmaps.length>0)for(let D=0;D<M.mipmaps.length;D++)_t(X.__webglFramebuffer[D],R,M,i.COLOR_ATTACHMENT0,at,D);else _t(X.__webglFramebuffer,R,M,i.COLOR_ATTACHMENT0,at,0);m(M)&&v(at),e.unbindTexture()}R.depthBuffer&&Q(R)}function mt(R){let M=R.textures;for(let X=0,J=M.length;X<J;X++){let rt=M[X];if(m(rt)){let St=b(R),Rt=n.get(rt).__webglTexture;e.bindTexture(St,Rt),v(St),e.unbindTexture()}}}let wt=[],Yt=[];function $t(R){if(R.samples>0){if(Kt(R)===!1){let M=R.textures,X=R.width,J=R.height,rt=i.COLOR_BUFFER_BIT,St=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Rt=n.get(R),at=M.length>1;if(at)for(let Y=0;Y<M.length;Y++)e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer);let D=R.texture.mipmaps;D&&D.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let Y=0;Y<M.length;Y++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(rt|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(rt|=i.STENCIL_BUFFER_BIT)),at){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[Y]);let it=n.get(M[Y]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,it,0)}i.blitFramebuffer(0,0,X,J,0,0,X,J,rt,i.NEAREST),l===!0&&(wt.length=0,Yt.length=0,wt.push(i.COLOR_ATTACHMENT0+Y),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(wt.push(St),Yt.push(St),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Yt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,wt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let Y=0;Y<M.length;Y++){e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[Y]);let it=n.get(M[Y]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.TEXTURE_2D,it,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let M=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function Qt(R){return Math.min(s.maxSamples,R.samples)}function Kt(R){let M=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function U(R){let M=a.render.frame;h.get(R)!==M&&(h.set(R,M),R.update())}function fe(R,M){let X=R.colorSpace,J=R.format,rt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||X!==vs&&X!==Pi&&(me.getTransfer(X)===Se?(J!==vn||rt!==Pn)&&Lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Jt("WebGLTextures: Unsupported texture color space:",X)),M}function ce(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=z,this.getTextureUnits=P,this.setTextureUnits=k,this.setTexture2D=ct,this.setTexture2DArray=$,this.setTexture3D=ot,this.setTextureCube=O,this.rebindTextures=dt,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=$t,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=Kt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function $0(i,t){function e(n,s=Pi){let r,a=me.getTransfer(s);if(n===Pn)return i.UNSIGNED_BYTE;if(n===Bl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===kl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ju)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Qu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ju)return i.BYTE;if(n===Ku)return i.SHORT;if(n===Ar)return i.UNSIGNED_SHORT;if(n===Ol)return i.INT;if(n===qn)return i.UNSIGNED_INT;if(n===je)return i.FLOAT;if(n===Mn)return i.HALF_FLOAT;if(n===td)return i.ALPHA;if(n===ed)return i.RGB;if(n===vn)return i.RGBA;if(n===ui)return i.DEPTH_COMPONENT;if(n===es)return i.DEPTH_STENCIL;if(n===zl)return i.RED;if(n===Ha)return i.RED_INTEGER;if(n===ns)return i.RG;if(n===Vl)return i.RG_INTEGER;if(n===Gl)return i.RGBA_INTEGER;if(n===Wa||n===Xa||n===qa||n===Ya)if(a===Se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Wa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===qa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Wa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Xa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===qa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ya)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Hl||n===Wl||n===Xl||n===ql)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Hl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Wl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Xl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ql)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Yl||n===Zl||n===$l||n===Jl||n===Kl||n===Za||n===jl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Yl||n===Zl)return a===Se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===$l)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Jl)return r.COMPRESSED_R11_EAC;if(n===Kl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Za)return r.COMPRESSED_RG11_EAC;if(n===jl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ql||n===tc||n===ec||n===nc||n===ic||n===sc||n===rc||n===ac||n===oc||n===lc||n===cc||n===hc||n===uc||n===dc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ql)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===tc)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ec)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===nc)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ic)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===sc)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===rc)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ac)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===oc)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===lc)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===cc)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===hc)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===uc)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===dc)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fc||n===pc||n===mc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===fc)return a===Se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===pc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===mc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===gc||n===_c||n===$a||n===xc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===gc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===_c)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$a)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Cr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var nw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ep=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new ma(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Rn({vertexShader:nw,fragmentShader:iw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new oe(new fr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ap=class extends Fn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null,x=typeof XRWebGLBinding<"u",g=new Ep,m={},v=e.getContextAttributes(),b=null,y=null,E=[],w=[],A=new ut,_=null,T=null,C=new Be;C.viewport=new Ee;let L=new Be;L.viewport=new Ee;let B=[C,L],z=new Il,P=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let j=E[q];return j===void 0&&(j=new nr,E[q]=j),j.getTargetRaySpace()},this.getControllerGrip=function(q){let j=E[q];return j===void 0&&(j=new nr,E[q]=j),j.getGripSpace()},this.getHand=function(q){let j=E[q];return j===void 0&&(j=new nr,E[q]=j),j.getHandSpace()};function H(q){let j=w.indexOf(q.inputSource);if(j===-1)return;let gt=E[j];gt!==void 0&&(gt.update(q.inputSource,q.frame,c||a),gt.dispatchEvent({type:q.type,data:q.inputSource}))}function W(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",ct);for(let q=0;q<E.length;q++){let j=w[q];j!==null&&(w[q]=null,E[q].disconnect(j))}P=null,k=null,g.reset();for(let q in m)delete m[q];if(t.setRenderTarget(b),f=null,u=null,d=null,s=null,y=null,Ut.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(A.width,A.height,!1),T!==null){let q=T.camera;q.fov=T.fov,q.zoom=T.zoom,q.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&Lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&Lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(b=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",W),s.addEventListener("inputsourceschange",ct),v.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let gt=null,xt=null,_t=null;v.depth&&(_t=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,gt=v.stencil?es:ui,xt=v.stencil?Cr:qn);let Ot={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Ot),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new cn(u.textureWidth,u.textureHeight,{format:vn,type:Pn,depthTexture:new Xi(u.textureWidth,u.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,gt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let gt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,gt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new cn(f.framebufferWidth,f.framebufferHeight,{format:vn,type:Pn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ut.setContext(s),Ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ct(q){for(let j=0;j<q.removed.length;j++){let gt=q.removed[j],xt=w.indexOf(gt);xt>=0&&(w[xt]=null,E[xt].disconnect(gt))}for(let j=0;j<q.added.length;j++){let gt=q.added[j],xt=w.indexOf(gt);if(xt===-1){for(let Ot=0;Ot<E.length;Ot++)if(Ot>=w.length){w.push(gt),xt=Ot;break}else if(w[Ot]===null){w[Ot]=gt,xt=Ot;break}if(xt===-1)break}let _t=E[xt];_t&&_t.connect(gt)}}let $=new I,ot=new I;function O(q,j,gt){$.setFromMatrixPosition(j.matrixWorld),ot.setFromMatrixPosition(gt.matrixWorld);let xt=$.distanceTo(ot),_t=j.projectionMatrix.elements,Ot=gt.projectionMatrix.elements,Zt=_t[14]/(_t[10]-1),Q=_t[14]/(_t[10]+1),dt=(_t[9]+1)/_t[5],ft=(_t[9]-1)/_t[5],mt=(_t[8]-1)/_t[0],wt=(Ot[8]+1)/Ot[0],Yt=Zt*mt,$t=Zt*wt,Qt=xt/(-mt+wt),Kt=Qt*-mt;if(j.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Kt),q.translateZ(Qt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),_t[10]===-1)q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let U=Zt+Qt,fe=Q+Qt,ce=Yt-Kt,R=$t+(xt-Kt),M=dt*Q/fe*U,X=ft*Q/fe*U;q.projectionMatrix.makePerspective(ce,R,M,X,U,fe),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function K(q,j){j===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(j.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let j=q.near,gt=q.far;g.texture!==null&&(g.depthNear>0&&(j=g.depthNear),g.depthFar>0&&(gt=g.depthFar)),z.near=L.near=C.near=j,z.far=L.far=C.far=gt,(P!==z.near||k!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),P=z.near,k=z.far),z.layers.mask=q.layers.mask|6,C.layers.mask=z.layers.mask&-5,L.layers.mask=z.layers.mask&-3;let xt=q.parent,_t=z.cameras;K(z,xt);for(let Ot=0;Ot<_t.length;Ot++)K(_t[Ot],xt);_t.length===2?O(z,C,L):z.projectionMatrix.copy(C.projectionMatrix),T===null&&q.isPerspectiveCamera&&(T={camera:q,fov:q.fov,zoom:q.zoom}),lt(q,z,xt)};function lt(q,j,gt){gt===null?q.matrix.copy(j.matrixWorld):(q.matrix.copy(gt.matrixWorld),q.matrix.invert(),q.matrix.multiply(j.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=js*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(q){l=q,u!==null&&(u.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(z)},this.getCameraTexture=function(q){return m[q]};let Pt=null;function Dt(q,j){if(h=j.getViewerPose(c||a),p=j,h!==null){let gt=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let xt=!1;gt.length!==z.cameras.length&&(z.cameras.length=0,xt=!0);for(let Q=0;Q<gt.length;Q++){let dt=gt[Q],ft=null;if(f!==null)ft=f.getViewport(dt);else{let wt=d.getViewSubImage(u,dt);ft=wt.viewport,Q===0&&(t.setRenderTargetTextures(y,wt.colorTexture,wt.depthStencilTexture),t.setRenderTarget(y))}let mt=B[Q];mt===void 0&&(mt=new Be,mt.layers.enable(Q),mt.viewport=new Ee,B[Q]=mt),mt.matrix.fromArray(dt.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(dt.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(ft.x,ft.y,ft.width,ft.height),Q===0&&(z.matrix.copy(mt.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),xt===!0&&z.cameras.push(mt)}let _t=s.enabledFeatures;if(_t&&_t.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=n.getBinding();let Q=d.getDepthInformation(gt[0]);Q&&Q.isValid&&Q.texture&&g.init(Q,s.renderState)}if(_t&&_t.includes("camera-access")&&x){t.state.unbindTexture(),d=n.getBinding();for(let Q=0;Q<gt.length;Q++){let dt=gt[Q].camera;if(dt){let ft=m[dt];ft||(ft=new ma,m[dt]=ft);let mt=d.getCameraImage(dt);ft.sourceTexture=mt}}}}for(let gt=0;gt<E.length;gt++){let xt=w[gt],_t=E[gt];xt!==null&&_t!==void 0&&_t.update(xt,j,c||a)}Pt&&Pt(q,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),p=null}let Ut=new H0;Ut.setAnimationLoop(Dt),this.setAnimationLoop=function(q){Pt=q},this.dispose=function(){}}},sw=new se,J0=new ae;J0.set(-1,0,0,0,1,0,0,0,1);function rw(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,lp(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,v,b,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),u(g,m),m.isMeshPhysicalMaterial&&f(g,m,y)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,v,b):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===rn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===rn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let v=t.get(m),b=v.envMap,y=v.envMapRotation;b&&(g.envMap.value=b,g.envMapRotation.value.setFromMatrix4(sw.makeRotationFromEuler(y)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(J0),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,v,b){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*v,g.scale.value=b*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,v){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===rn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let v=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function aw(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,E){let w=E.program;n.uniformBlockBinding(y,w)}function c(y,E){let w=s[y.id];w===void 0&&(g(y),w=h(y),s[y.id]=w,y.addEventListener("dispose",v));let A=E.program;n.updateUBOMapping(y,A);let _=t.render.frame;r[y.id]!==_&&(u(y),r[y.id]=_)}function h(y){let E=d();y.__bindingPointIndex=E;let w=i.createBuffer(),A=y.__size,_=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,A,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,w),w}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Jt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let E=s[y.id],w=y.uniforms,A=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let _=0,T=w.length;_<T;_++){let C=w[_];if(Array.isArray(C))for(let L=0,B=C.length;L<B;L++)f(C[L],_,L,A);else f(C,_,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,E,w,A){if(x(y,E,w,A)===!0){let _=y.__offset,T=y.value;if(Array.isArray(T)){let C=0;for(let L=0;L<T.length;L++){let B=T[L],z=m(B);p(B,y.__data,C),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(C+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(T,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,y.__data)}}function p(y,E,w){typeof y=="number"||typeof y=="boolean"?E[0]=y:y.isMatrix3?(E[0]=y.elements[0],E[1]=y.elements[1],E[2]=y.elements[2],E[3]=0,E[4]=y.elements[3],E[5]=y.elements[4],E[6]=y.elements[5],E[7]=0,E[8]=y.elements[6],E[9]=y.elements[7],E[10]=y.elements[8],E[11]=0):ArrayBuffer.isView(y)?E.set(new y.constructor(y.buffer,y.byteOffset,E.length)):y.toArray(E,w)}function x(y,E,w,A){let _=y.value,T=E+"_"+w;if(A[T]===void 0)return typeof _=="number"||typeof _=="boolean"?A[T]=_:ArrayBuffer.isView(_)?A[T]=_.slice():A[T]=_.clone(),!0;{let C=A[T];if(typeof _=="number"||typeof _=="boolean"){if(C!==_)return A[T]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(C.equals(_)===!1)return C.copy(_),!0}}return!1}function g(y){let E=y.uniforms,w=0,A=16;for(let T=0,C=E.length;T<C;T++){let L=Array.isArray(E[T])?E[T]:[E[T]];for(let B=0,z=L.length;B<z;B++){let P=L[B],k=Array.isArray(P.value)?P.value:[P.value];for(let H=0,W=k.length;H<W;H++){let ct=k[H],$=m(ct),ot=w%A,O=ot%$.boundary,K=ot+O;w+=O,K!==0&&A-K<$.storage&&(w+=A-K),P.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=w,w+=$.storage}}}let _=w%A;return _>0&&(w+=A-_),y.__size=w,y.__cache={},this}function m(y){let E={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(E.boundary=4,E.storage=4):y.isVector2?(E.boundary=8,E.storage=8):y.isVector3||y.isColor?(E.boundary=16,E.storage=12):y.isVector4?(E.boundary=16,E.storage=16):y.isMatrix3?(E.boundary=48,E.storage=48):y.isMatrix4?(E.boundary=64,E.storage=64):y.isTexture?Lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(E.boundary=16,E.storage=y.byteLength):Lt("WebGLRenderer: Unsupported uniform value type.",y),E}function v(y){let E=y.target;E.removeEventListener("dispose",v);let w=a.indexOf(E.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function b(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:b}}var ow=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Li=null;function lw(){return Li===null&&(Li=new An(ow,16,16,ns,Mn),Li.name="DFG_LUT",Li.minFilter=Ce,Li.magFilter=Ce,Li.wrapS=En,Li.wrapT=En,Li.generateMipmaps=!1,Li.needsUpdate=!0),Li}var Ac=class{constructor(t={}){let{canvas:e=rp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Pn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let x=f,g=new Set([Gl,Vl,Ha]),m=new Set([Pn,qn,Ar,Cr,Bl,kl]),v=new Uint32Array(4),b=new Int32Array(4),y=new I,E=null,w=null,A=[],_=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,L=!1,B=null,z=null,P=null,k=null;this._outputColorSpace=ln;let H=0,W=0,ct=null,$=-1,ot=null,O=new Ee,K=new Ee,lt=null,Pt=new kt(0),Dt=0,Ut=e.width,q=e.height,j=1,gt=null,xt=null,_t=new Ee(0,0,Ut,q),Ot=new Ee(0,0,Ut,q),Zt=!1,Q=new Ti,dt=!1,ft=!1,mt=new se,wt=new I,Yt=new Ee,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Qt=!1;function Kt(){return ct===null?j:1}let U=n;function fe(S,F){return e.getContext(S,F)}let ce,R,M,X,J,rt,St,Rt,at,D,Y,it,st,tt,ht,vt,At,N,yt,nt,Tt,Nt,pt;try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ae,!1),e.addEventListener("webglcontextrestored",_e,!1),e.addEventListener("webglcontextcreationerror",Ln,!1),U===null){let F="webgl2";if(U=fe(F,S),U===null)throw fe(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Wt()}catch(S){throw e.removeEventListener("webglcontextlost",Ae,!1),e.removeEventListener("webglcontextrestored",_e,!1),e.removeEventListener("webglcontextcreationerror",Ln,!1),Jt("WebGLRenderer: "+S.message),S}function Wt(){ce=new gS(U),ce.init(),Tt=new $0(U,ce),R=new aS(U,ce,t,Tt),M=new tw(U,ce),R.reversedDepthBuffer&&u&&M.buffers.depth.setReversed(!0),z=U.createFramebuffer(),P=U.createFramebuffer(),k=U.createFramebuffer(),X=new yS(U),J=new zb,rt=new ew(U,ce,M,J,R,Tt,X),St=new mS(C),Rt=new My(U),Nt=new sS(U,Rt),at=new _S(U,Rt,X,Nt),D=new MS(U,at,Rt,Nt,X),N=new vS(U,R,rt),ht=new oS(J),Y=new kb(C,St,ce,R,Nt,ht),it=new rw(C,J),st=new Gb,tt=new Zb(ce),At=new iS(C,St,M,D,p,l),vt=new Qb(C,D,R),pt=new aw(U,X,R,M),yt=new rS(U,ce,X),nt=new xS(U,ce,X),X.programs=Y.programs,C.capabilities=R,C.extensions=ce,C.properties=J,C.renderLists=st,C.shadowMap=vt,C.state=M,C.info=X}x!==Pn&&(T=new bS(x,e.width,e.height,o,s,r));let Ht=new Ap(C,U);this.xr=Ht,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let S=ce.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=ce.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(S){S!==void 0&&(j=S,this.setSize(Ut,q,!1))},this.getSize=function(S){return S.set(Ut,q)},this.setSize=function(S,F,Z=!0){if(Ht.isPresenting){Lt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ut=S,q=F,e.width=Math.floor(S*j),e.height=Math.floor(F*j),Z===!0&&(e.style.width=S+"px",e.style.height=F+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,S,F)},this.getDrawingBufferSize=function(S){return S.set(Ut*j,q*j).floor()},this.setDrawingBufferSize=function(S,F,Z){Ut=S,q=F,j=Z,e.width=Math.floor(S*Z),e.height=Math.floor(F*Z),this.setViewport(0,0,S,F)},this.setEffects=function(S){if(x===Pn){Jt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let F=0;F<S.length;F++)if(S[F].isOutputPass===!0){Lt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(O)},this.getViewport=function(S){return S.copy(_t)},this.setViewport=function(S,F,Z,V){S.isVector4?_t.set(S.x,S.y,S.z,S.w):_t.set(S,F,Z,V),M.viewport(O.copy(_t).multiplyScalar(j).round())},this.getScissor=function(S){return S.copy(Ot)},this.setScissor=function(S,F,Z,V){S.isVector4?Ot.set(S.x,S.y,S.z,S.w):Ot.set(S,F,Z,V),M.scissor(K.copy(Ot).multiplyScalar(j).round())},this.getScissorTest=function(){return Zt},this.setScissorTest=function(S){M.setScissorTest(Zt=S)},this.setOpaqueSort=function(S){gt=S},this.setTransparentSort=function(S){xt=S},this.getClearColor=function(S){return S.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor(...arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha(...arguments)},this.clear=function(S=!0,F=!0,Z=!0){let V=0;if(S){let G=!1;if(ct!==null){let Mt=ct.texture.format;G=g.has(Mt)}if(G){let Mt=ct.texture.type,Et=m.has(Mt),Ct=At.getClearColor(),Bt=At.getClearAlpha(),It=Ct.r,qt=Ct.g,jt=Ct.b;Et?(v[0]=It,v[1]=qt,v[2]=jt,v[3]=Bt,U.clearBufferuiv(U.COLOR,0,v)):(b[0]=It,b[1]=qt,b[2]=jt,b[3]=Bt,U.clearBufferiv(U.COLOR,0,b))}else V|=U.COLOR_BUFFER_BIT}F&&(V|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(V|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&U.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),B=S},this.dispose=function(){e.removeEventListener("webglcontextlost",Ae,!1),e.removeEventListener("webglcontextrestored",_e,!1),e.removeEventListener("webglcontextcreationerror",Ln,!1),At.dispose(),st.dispose(),tt.dispose(),J.dispose(),St.dispose(),D.dispose(),Nt.dispose(),pt.dispose(),Y.dispose(),Ht.dispose(),Ht.removeEventListener("sessionstart",ee),Ht.removeEventListener("sessionend",pe),le.stop()};function Ae(S){S.preventDefault(),ca("WebGLRenderer: Context Lost."),L=!0}function _e(){ca("WebGLRenderer: Context Restored."),L=!1;let S=X.autoReset,F=vt.enabled,Z=vt.autoUpdate,V=vt.needsUpdate,G=vt.type;Wt(),X.autoReset=S,vt.enabled=F,vt.autoUpdate=Z,vt.needsUpdate=V,vt.type=G}function Ln(S){Jt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function an(S){let F=S.target;F.removeEventListener("dispose",an),Rc(F)}function Rc(S){Ic(S),J.remove(S)}function Ic(S){let F=J.get(S).programs;F!==void 0&&(F.forEach(function(Z){Y.releaseProgram(Z)}),S.isShaderMaterial&&Y.releaseShaderCache(S))}this.renderBufferDirect=function(S,F,Z,V,G,Mt){F===null&&(F=$t);let Et=G.isMesh&&G.matrixWorld.determinantAffine()<0,Ct=ro(S,F,Z,V,G);M.setMaterial(V,Et);let Bt=Z.index,It=1;if(V.wireframe===!0){if(Bt=at.getWireframeAttribute(Z),Bt===void 0)return;It=2}let qt=Z.drawRange,jt=Z.attributes.position,bt=qt.start*It,he=(qt.start+qt.count)*It;Mt!==null&&(bt=Math.max(bt,Mt.start*It),he=Math.min(he,(Mt.start+Mt.count)*It)),Bt!==null?(bt=Math.max(bt,0),he=Math.min(he,Bt.count)):jt!=null&&(bt=Math.max(bt,0),he=Math.min(he,jt.count));let be=he-bt;if(be<0||be===1/0)return;Nt.setup(G,V,Ct,Z,Bt);let ve,Pe=yt;if(Bt!==null&&(ve=Rt.get(Bt),Pe=nt,Pe.setIndex(ve)),G.isMesh)V.wireframe===!0?(M.setLineWidth(V.wireframeLinewidth*Kt()),Pe.setMode(U.LINES)):Pe.setMode(U.TRIANGLES);else if(G.isLine){let mn=V.linewidth;mn===void 0&&(mn=1),M.setLineWidth(mn*Kt()),G.isLineSegments?Pe.setMode(U.LINES):G.isLineLoop?Pe.setMode(U.LINE_LOOP):Pe.setMode(U.LINE_STRIP)}else G.isPoints?Pe.setMode(U.POINTS):G.isSprite&&Pe.setMode(U.TRIANGLES);if(G.isBatchedMesh)if(ce.get("WEBGL_multi_draw"))Pe.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let mn=G._multiDrawStarts,Gt=G._multiDrawCounts,bn=G._multiDrawCount,xe=Bt?Rt.get(Bt).bytesPerElement:1,$n=J.get(V).currentProgram.getUniforms();for(let Mi=0;Mi<bn;Mi++)$n.setValue(U,"_gl_DrawID",Mi),Pe.render(mn[Mi]/xe,Gt[Mi])}else if(G.isInstancedMesh)Pe.renderInstances(bt,be,G.count);else if(Z.isInstancedBufferGeometry){let mn=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Gt=Math.min(Z.instanceCount,mn);Pe.renderInstances(bt,be,Gt)}else Pe.render(bt,be)};function is(S,F,Z,V){B!==null&&S.isNodeMaterial&&B.setObject(V,S),dt===!0&&ht.setState(S,Z,!1),S.transparent===!0&&S.side===dn&&S.forceSinglePass===!1?(S.side=rn,S.needsUpdate=!0,Yn(S,F,V),S.side=Qi,S.needsUpdate=!0,Yn(S,F,V),S.side=dn):Yn(S,F,V)}this.compile=function(S,F,Z=null){Z===null&&(Z=S),B!==null&&B.renderStart(S,F,Z),w=tt.get(Z),w.init(F),_.push(w),Z.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),S!==Z&&S.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),w.setupLights(),B!==null&&B.updateLights(w.state.lightsArray),ft=this.localClippingEnabled,dt=ht.init(this.clippingPlanes,ft),dt===!0&&ht.setGlobalState(this.clippingPlanes,F),B!==null&&vt.render(w.state.shadowsArray,Z,F);let V=new Set;return S.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let Mt=G.material;if(Mt)if(Array.isArray(Mt))for(let Et=0;Et<Mt.length;Et++){let Ct=Mt[Et];is(Ct,Z,F,G),V.add(Ct)}else is(Mt,Z,F,G),V.add(Mt)}),w=_.pop(),B!==null&&B.renderEnd(),V},this.compileAsync=function(S,F,Z=null){let V=this.compile(S,F,Z);return new Promise(G=>{function Mt(){if(V.forEach(function(Et){let Bt=J.get(Et).currentProgram;(Bt===void 0||Bt.isReady())&&V.delete(Et)}),V.size===0){G(S);return}setTimeout(Mt,10)}ce.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let zt=null;function Xt(S){zt&&zt(S)}function ee(){le.stop()}function pe(){le.start()}let le=new H0;le.setAnimationLoop(Xt),typeof self<"u"&&le.setContext(self),this.setAnimationLoop=function(S){zt=S,Ht.setAnimationLoop(S),S===null?le.stop():le.start()},Ht.addEventListener("sessionstart",ee),Ht.addEventListener("sessionend",pe),this.render=function(S,F){if(F!==void 0&&F.isCamera!==!0){Jt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;B!==null&&B.renderStart(S,F);let Z=Ht.enabled===!0&&Ht.isPresenting===!0,V=T!==null&&(ct===null||Z)&&T.begin(C,ct);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Ht.enabled===!0&&Ht.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Ht.cameraAutoUpdate===!0&&Ht.updateCamera(F),F=Ht.getCamera()),S.isScene===!0&&S.onBeforeRender(C,S,F,ct),w=tt.get(S,_.length),w.init(F),w.state.textureUnits=rt.getTextureUnits(),_.push(w),mt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Q.setFromProjectionMatrix(mt,Un,F.reversedDepth),ft=this.localClippingEnabled,dt=ht.init(this.clippingPlanes,ft),E=st.get(S,A.length),E.init(),A.push(E),Ht.enabled===!0&&Ht.isPresenting===!0){let Et=C.xr.getDepthSensingMesh();Et!==null&&on(Et,F,-1/0,C.sortObjects)}on(S,F,0,C.sortObjects),E.finish(),B!==null&&B.updateLights(w.state.lightsArray),C.sortObjects===!0&&E.sort(gt,xt),Qt=Ht.enabled===!1||Ht.isPresenting===!1||Ht.hasDepthSensing()===!1,Qt&&At.addToRenderList(E,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),dt===!0&&ht.beginShadows();let G=w.state.shadowsArray;if(vt.render(G,S,F),dt===!0&&ht.endShadows(),(V&&T.hasRenderPass())===!1){let Et=E.opaque,Ct=E.transmissive;if(w.setupLights(),F.isArrayCamera){let Bt=F.cameras;if(Ct.length>0)for(let It=0,qt=Bt.length;It<qt;It++){let jt=Bt[It];ss(Et,Ct,S,jt)}Qt&&At.render(S);for(let It=0,qt=Bt.length;It<qt;It++){let jt=Bt[It];so(E,S,jt,jt.viewport)}}else Ct.length>0&&ss(Et,Ct,S,F),Qt&&At.render(S),so(E,S,F)}ct!==null&&W===0&&(rt.updateMultisampleRenderTarget(ct),rt.updateRenderTargetMipmap(ct)),V&&T.end(C),S.isScene===!0&&S.onAfterRender(C,S,F),Nt.resetDefaultState(),$=-1,ot=null,_.pop(),_.length>0?(w=_[_.length-1],rt.setTextureUnits(w.state.textureUnits),dt===!0&&ht.setGlobalState(C.clippingPlanes,w.state.camera)):w=null,A.pop(),A.length>0?E=A[A.length-1]:E=null,B!==null&&B.renderEnd()};function on(S,F,Z,V){if(S.visible===!1)return;if(S.layers.test(F.layers)){if(S.isGroup)Z=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(F);else if(S.isLightProbeGrid)w.pushLightProbeGrid(S);else if(S.isLight)w.pushLight(S),S.castShadow&&w.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(Q)){V&&Yt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(mt);let Et=D.update(S),Ct=S.material;Ct.visible&&E.push(S,Et,Ct,Z,Yt.z,null,F)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(Q))){let Et=D.update(S),Ct=S.material;if(V&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Yt.copy(S.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),Yt.copy(Et.boundingSphere.center)),Yt.applyMatrix4(S.matrixWorld).applyMatrix4(mt)),Array.isArray(Ct)){let Bt=Et.groups;for(let It=0,qt=Bt.length;It<qt;It++){let jt=Bt[It],bt=Ct[jt.materialIndex];bt&&bt.visible&&E.push(S,Et,bt,Z,Yt.z,jt,F)}}else Ct.visible&&E.push(S,Et,Ct,Z,Yt.z,null,F)}}let Mt=S.children;for(let Et=0,Ct=Mt.length;Et<Ct;Et++)on(Mt[Et],F,Z,V)}function so(S,F,Z,V){let{opaque:G,transmissive:Mt,transparent:Et}=S;w.setupLightsView(Z),dt===!0&&ht.setGlobalState(C.clippingPlanes,Z),V&&M.viewport(O.copy(V)),G.length>0&&vi(G,F,Z),Mt.length>0&&vi(Mt,F,Z),Et.length>0&&vi(Et,F,Z),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function ss(S,F,Z,V){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[V.id]===void 0){let bt=ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[V.id]=new cn(1,1,{generateMipmaps:!0,type:bt?Mn:Pn,minFilter:_i,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:me.workingColorSpace})}let Mt=w.state.transmissionRenderTarget[V.id],Et=V.viewport||O;Mt.setSize(Et.z*C.transmissionResolutionScale,Et.w*C.transmissionResolutionScale);let Ct=C.getRenderTarget(),Bt=C.getActiveCubeFace(),It=C.getActiveMipmapLevel();C.setRenderTarget(Mt),C.getClearColor(Pt),Dt=C.getClearAlpha(),Dt<1&&C.setClearColor(16777215,.5),C.clear(),Qt&&At.render(Z);let qt=C.toneMapping;C.toneMapping=ii;let jt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),w.setupLightsView(V),dt===!0&&ht.setGlobalState(C.clippingPlanes,V),vi(S,Z,V),rt.updateMultisampleRenderTarget(Mt),rt.updateRenderTargetMipmap(Mt),ce.has("WEBGL_multisampled_render_to_texture")===!1){let bt=!1;for(let he=0,be=F.length;he<be;he++){let ve=F[he],{object:Pe,geometry:mn,material:Gt,group:bn}=ve;if(Gt.side===dn&&Pe.layers.test(V.layers)){let xe=Gt.side;Gt.side=rn,Gt.needsUpdate=!0,Di(Pe,Z,V,mn,Gt,bn),Gt.side=xe,Gt.needsUpdate=!0,bt=!0}}bt===!0&&(rt.updateMultisampleRenderTarget(Mt),rt.updateRenderTargetMipmap(Mt))}C.setRenderTarget(Ct,Bt,It),C.setClearColor(Pt,Dt),jt!==void 0&&(V.viewport=jt),C.toneMapping=qt}function vi(S,F,Z){let V=F.isScene===!0?F.overrideMaterial:null;for(let G=0,Mt=S.length;G<Mt;G++){let Et=S[G],{object:Ct,geometry:Bt,group:It}=Et,qt=Et.material;qt.allowOverride===!0&&V!==null&&(qt=V),Ct.layers.test(Z.layers)&&Di(Ct,F,Z,Bt,qt,It)}}function Di(S,F,Z,V,G,Mt){B!==null&&G.isNodeMaterial&&B.setObject(S,G),S.onBeforeRender(C,F,Z,V,G,Mt),S.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),G.onBeforeRender(C,F,Z,V,S,Mt),G.transparent===!0&&G.side===dn&&G.forceSinglePass===!1?(G.side=rn,G.needsUpdate=!0,C.renderBufferDirect(Z,F,V,G,S,Mt),G.side=Qi,G.needsUpdate=!0,C.renderBufferDirect(Z,F,V,G,S,Mt),G.side=dn):C.renderBufferDirect(Z,F,V,G,S,Mt),S.onAfterRender(C,F,Z,V,G,Mt)}function Yn(S,F,Z){F.isScene!==!0&&(F=$t);let V=J.get(S),G=w.state.lights,Mt=w.state.shadowsArray,Et=G.state.version,Ct=Y.getParameters(S,G.state,Mt,F,Z,w.state.lightProbeGridArray),Bt=Y.getProgramCacheKey(Ct),It=V.programs;V.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?F.environment:null,V.fog=F.fog;let qt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;V.envMap=St.get(S.envMap||V.environment,qt),V.envMapRotation=V.environment!==null&&S.envMap===null?F.environmentRotation:S.envMapRotation,It===void 0&&(S.addEventListener("dispose",an),It=new Map,V.programs=It);let jt=It.get(Bt);if(jt!==void 0){if(V.currentProgram===jt&&V.lightsStateVersion===Et)return Pc(S,Ct),jt}else Ct.uniforms=Y.getUniforms(S),B!==null&&S.isNodeMaterial&&B.build(S,Z,Ct),S.onBeforeCompile(Ct,C),jt=Y.acquireProgram(Ct,Bt),It.set(Bt,jt),V.uniforms=Ct.uniforms;let bt=V.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(bt.clippingPlanes=ht.uniform),Pc(S,Ct),V.needsLights=yd(S),V.lightsStateVersion=Et,V.needsLights&&(bt.ambientLightColor.value=G.state.ambient,bt.lightProbe.value=G.state.probe,bt.sunLights.value=G.state.sun,bt.sunLightShadows.value=G.state.sunShadow,bt.directionalLights.value=G.state.directional,bt.directionalLightShadows.value=G.state.directionalShadow,bt.spotLights.value=G.state.spot,bt.spotLightShadows.value=G.state.spotShadow,bt.rectAreaLights.value=G.state.rectArea,bt.ltc_1.value=G.state.rectAreaLTC1,bt.ltc_2.value=G.state.rectAreaLTC2,bt.pointLights.value=G.state.point,bt.pointLightShadows.value=G.state.pointShadow,bt.hemisphereLights.value=G.state.hemi,bt.sunShadowMatrix.value=G.state.sunShadowMatrix,bt.sunShadowCascade.value=G.state.sunShadowCascade,bt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,bt.spotLightMatrix.value=G.state.spotLightMatrix,bt.spotLightMap.value=G.state.spotLightMap,bt.pointShadowMatrix.value=G.state.pointShadowMatrix),V.lightProbeGrid=w.state.lightProbeGridArray.length>0,V.currentProgram=jt,V.uniformsList=null,jt}function rs(S){if(S.uniformsList===null){let F=S.currentProgram.getUniforms();S.uniformsList=ja.seqWithValue(F.seq,S.uniforms)}return S.uniformsList}function Pc(S,F){let Z=J.get(S);Z.outputColorSpace=F.outputColorSpace,Z.batching=F.batching,Z.batchingColor=F.batchingColor,Z.instancing=F.instancing,Z.instancingColor=F.instancingColor,Z.instancingMorph=F.instancingMorph,Z.skinning=F.skinning,Z.morphTargets=F.morphTargets,Z.morphNormals=F.morphNormals,Z.morphColors=F.morphColors,Z.morphTargetsCount=F.morphTargetsCount,Z.numClippingPlanes=F.numClippingPlanes,Z.numIntersection=F.numClipIntersection,Z.vertexAlphas=F.vertexAlphas,Z.vertexTangents=F.vertexTangents,Z.toneMapping=F.toneMapping}function Zn(S,F){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;y.setFromMatrixPosition(F.matrixWorld);for(let Z=0,V=S.length;Z<V;Z++){let G=S[Z];if(G.texture!==null&&G.boundingBox.containsPoint(y))return G}return null}function ro(S,F,Z,V,G){F.isScene!==!0&&(F=$t),rt.resetTextureUnits();let Mt=F.fog,Et=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?F.environment:null,Ct=ct===null?C.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:me.workingColorSpace,Bt=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,It=St.get(V.envMap||Et,Bt),qt=V.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,jt=!!Z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),bt=!!Z.morphAttributes.position,he=!!Z.morphAttributes.normal,be=!!Z.morphAttributes.color,ve=ii;V.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(ve=C.toneMapping);let Pe=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,mn=Pe!==void 0?Pe.length:0,Gt=J.get(V),bn=w.state.lights;if(dt===!0&&(ft===!0||S!==ot)){let Le=S===ot&&V.id===$;ht.setState(V,S,Le)}let xe=!1;V.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==bn.state.version||Gt.outputColorSpace!==Ct||G.isBatchedMesh&&Gt.batching===!1||!G.isBatchedMesh&&Gt.batching===!0||G.isBatchedMesh&&Gt.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Gt.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Gt.instancing===!1||!G.isInstancedMesh&&Gt.instancing===!0||G.isSkinnedMesh&&Gt.skinning===!1||!G.isSkinnedMesh&&Gt.skinning===!0||G.isInstancedMesh&&Gt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Gt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Gt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Gt.instancingMorph===!1&&G.morphTexture!==null||Gt.envMap!==It||V.fog===!0&&Gt.fog!==Mt||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==ht.numPlanes||Gt.numIntersection!==ht.numIntersection)||Gt.vertexAlphas!==qt||Gt.vertexTangents!==jt||Gt.morphTargets!==bt||Gt.morphNormals!==he||Gt.morphColors!==be||Gt.toneMapping!==ve||Gt.morphTargetsCount!==mn||!!Gt.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(xe=!0):(xe=!0,Gt.__version=V.version);let $n=Gt.currentProgram;xe===!0&&($n=Yn(V,F,G),B&&V.isNodeMaterial&&B.onUpdateProgram(V,$n,Gt));let Mi=!1,as=!1,Dr=!1,Ie=$n.getUniforms(),Ve=Gt.uniforms;if(M.useProgram($n.program)&&(Mi=!0,as=!0,Dr=!0),V.id!==$&&($=V.id,as=!0),Gt.needsLights){let Le=Zn(w.state.lightProbeGridArray,G);Gt.lightProbeGrid!==Le&&(Gt.lightProbeGrid=Le,as=!0)}if(Mi||ot!==S){M.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),Ie.setValue(U,"projectionMatrix",S.projectionMatrix),Ie.setValue(U,"viewMatrix",S.matrixWorldInverse);let ls=Ie.map.cameraPosition;ls!==void 0&&ls.setValue(U,wt.setFromMatrixPosition(S.matrixWorld)),R.logarithmicDepthBuffer&&Ie.setValue(U,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Ie.setValue(U,"isOrthographic",S.isOrthographicCamera===!0),ot!==S&&(ot=S,as=!0,Dr=!0)}if(Gt.needsLights&&(bn.state.sunShadowMap.length>0&&Ie.setValue(U,"sunShadowMap",bn.state.sunShadowMap,rt),bn.state.directionalShadowMap.length>0&&Ie.setValue(U,"directionalShadowMap",bn.state.directionalShadowMap,rt),bn.state.spotShadowMap.length>0&&Ie.setValue(U,"spotShadowMap",bn.state.spotShadowMap,rt),bn.state.pointShadowMap.length>0&&Ie.setValue(U,"pointShadowMap",bn.state.pointShadowMap,rt)),G.isSkinnedMesh){Ie.setOptional(U,G,"bindMatrix"),Ie.setOptional(U,G,"bindMatrixInverse");let Le=G.skeleton;Le&&(Le.boneTexture===null&&Le.computeBoneTexture(),Ie.setValue(U,"boneTexture",Le.boneTexture,rt))}G.isBatchedMesh&&(Ie.setOptional(U,G,"batchingTexture"),Ie.setValue(U,"batchingTexture",G._matricesTexture,rt),Ie.setOptional(U,G,"batchingIdTexture"),Ie.setValue(U,"batchingIdTexture",G._indirectTexture,rt),Ie.setOptional(U,G,"batchingColorTexture"),G._colorsTexture!==null&&Ie.setValue(U,"batchingColorTexture",G._colorsTexture,rt));let os=Z.morphAttributes;if((os.position!==void 0||os.normal!==void 0||os.color!==void 0)&&N.update(G,Z,$n),(as||Gt.receiveShadow!==G.receiveShadow)&&(Gt.receiveShadow=G.receiveShadow,Ie.setValue(U,"receiveShadow",G.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&F.environment!==null&&(Ve.envMapIntensity.value=F.environmentIntensity),Ve.dfgLUT!==void 0&&(Ve.dfgLUT.value=lw()),as){if(Ie.setValue(U,"toneMappingExposure",C.toneMappingExposure),Gt.needsLights&&xd(Ve,Dr),Mt&&V.fog===!0&&it.refreshFogUniforms(Ve,Mt),it.refreshMaterialUniforms(Ve,V,j,q,w.state.transmissionRenderTarget[S.id]),Gt.needsLights&&Gt.lightProbeGrid){let Le=Gt.lightProbeGrid;Ve.probesSH.value=Le.texture,Ve.probesMin.value.copy(Le.boundingBox.min),Ve.probesMax.value.copy(Le.boundingBox.max),Ve.probesResolution.value.copy(Le.resolution)}ja.upload(U,rs(Gt),Ve,rt)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(ja.upload(U,rs(Gt),Ve,rt),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Ie.setValue(U,"center",G.center),Ie.setValue(U,"modelViewMatrix",G.modelViewMatrix),Ie.setValue(U,"normalMatrix",G.normalMatrix),Ie.setValue(U,"modelMatrix",G.matrixWorld),V.uniformsGroups!==void 0){let Le=V.uniformsGroups;for(let ls=0,Nr=Le.length;ls<Nr;ls++){let Up=Le[ls];pt.update(Up,$n),pt.bind(Up,$n)}}return $n}function xd(S,F){S.ambientLightColor.needsUpdate=F,S.lightProbe.needsUpdate=F,S.sunLights.needsUpdate=F,S.sunLightShadows.needsUpdate=F,S.directionalLights.needsUpdate=F,S.directionalLightShadows.needsUpdate=F,S.pointLights.needsUpdate=F,S.pointLightShadows.needsUpdate=F,S.spotLights.needsUpdate=F,S.spotLightShadows.needsUpdate=F,S.rectAreaLights.needsUpdate=F,S.hemisphereLights.needsUpdate=F}function yd(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return ct},this.setRenderTargetTextures=function(S,F,Z){let V=J.get(S);V.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),J.get(S.texture).__webglTexture=F,J.get(S.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:Z,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,F){let Z=J.get(S);Z.__webglFramebuffer=F,Z.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(S,F=0,Z=0){ct=S,H=F,W=Z;let V=null,G=!1,Mt=!1;if(S){let Ct=J.get(S);if(Ct.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(U.FRAMEBUFFER,Ct.__webglFramebuffer),O.copy(S.viewport),K.copy(S.scissor),lt=S.scissorTest,M.viewport(O),M.scissor(K),M.setScissorTest(lt),$=-1;return}else if(Ct.__webglFramebuffer===void 0)rt.setupRenderTarget(S);else if(Ct.__hasExternalTextures)rt.rebindTextures(S,J.get(S.texture).__webglTexture,J.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let qt=S.depthTexture;if(Ct.__boundDepthTexture!==qt){if(qt!==null&&J.has(qt)&&(S.width!==qt.image.width||S.height!==qt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");rt.setupDepthRenderbuffer(S)}}let Bt=S.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(Mt=!0);let It=J.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(It[F])?V=It[F][Z]:V=It[F],G=!0):S.samples>0&&rt.useMultisampledRTT(S)===!1?V=J.get(S).__webglMultisampledFramebuffer:Array.isArray(It)?V=It[Z]:V=It,O.copy(S.viewport),K.copy(S.scissor),lt=S.scissorTest}else O.copy(_t).multiplyScalar(j).floor(),K.copy(Ot).multiplyScalar(j).floor(),lt=Zt;if(Z!==0&&(V=z),M.bindFramebuffer(U.FRAMEBUFFER,V)&&M.drawBuffers(S,V),M.viewport(O),M.scissor(K),M.setScissorTest(lt),G){let Ct=J.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ct.__webglTexture,Z)}else if(Mt){let Ct=F;for(let Bt=0;Bt<S.textures.length;Bt++){let It=J.get(S.textures[Bt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Bt,It.__webglTexture,Z,Ct)}}else if(S!==null&&Z!==0){let Ct=J.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ct.__webglTexture,Z)}$=-1};function Me(S){let F=J.get(S);return(F.__readFormat!==S.format||F.__readType!==S.type)&&(F.__readFormat=S.format,F.__readType=S.type,F.__formatReadable=R.textureFormatReadable(S.format),F.__typeReadable=R.textureTypeReadable(S.type)),F}this.readRenderTargetPixels=function(S,F,Z,V,G,Mt,Et,Ct=0){if(!(S&&S.isWebGLRenderTarget)){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=J.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Et!==void 0&&(Bt=Bt[Et]),Bt){M.bindFramebuffer(U.FRAMEBUFFER,Bt);try{let It=S.textures[Ct],qt=It.format,jt=It.type;S.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ct);let bt=Me(It);if(bt.__formatReadable===!1){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(bt.__typeReadable===!1){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=S.width-V&&Z>=0&&Z<=S.height-G&&U.readPixels(F,Z,V,G,Tt.convert(qt),Tt.convert(jt),Mt)}finally{let It=ct!==null?J.get(ct).__webglFramebuffer:null;M.bindFramebuffer(U.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(S,F,Z,V,G,Mt,Et,Ct=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=J.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Et!==void 0&&(Bt=Bt[Et]),Bt)if(F>=0&&F<=S.width-V&&Z>=0&&Z<=S.height-G){M.bindFramebuffer(U.FRAMEBUFFER,Bt);let It=S.textures[Ct],qt=It.format,jt=It.type;S.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ct);let bt=Me(It);if(bt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(bt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let he=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,he),U.bufferData(U.PIXEL_PACK_BUFFER,Mt.byteLength,U.STREAM_READ),U.readPixels(F,Z,V,G,Tt.convert(qt),Tt.convert(jt),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let be=ct!==null?J.get(ct).__webglFramebuffer:null;M.bindFramebuffer(U.FRAMEBUFFER,be);let ve=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await h0(U,ve,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,he),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Mt),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(he),U.deleteSync(ve),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,F=null,Z=0){let V=Math.pow(2,-Z),G=Math.floor(S.image.width*V),Mt=Math.floor(S.image.height*V),Et=F!==null?F.x:0,Ct=F!==null?F.y:0;rt.setTexture2D(S,0),U.copyTexSubImage2D(U.TEXTURE_2D,Z,0,0,Et,Ct,G,Mt),M.unbindTexture()},this.copyTextureToTexture=function(S,F,Z=null,V=null,G=0,Mt=0){let Et,Ct,Bt,It,qt,jt,bt,he,be,ve=S.isCompressedTexture?S.mipmaps[Mt]:S.image;if(Z!==null)Et=Z.max.x-Z.min.x,Ct=Z.max.y-Z.min.y,Bt=Z.isBox3?Z.max.z-Z.min.z:1,It=Z.min.x,qt=Z.min.y,jt=Z.isBox3?Z.min.z:0;else{let Ve=Math.pow(2,-G);Et=Math.floor(ve.width*Ve),Ct=Math.floor(ve.height*Ve),S.isDataArrayTexture?Bt=ve.depth:S.isData3DTexture?Bt=Math.floor(ve.depth*Ve):Bt=1,It=0,qt=0,jt=0}V!==null?(bt=V.x,he=V.y,be=V.z):(bt=0,he=0,be=0);let Pe=Tt.convert(F.format),mn=Tt.convert(F.type),Gt;F.isData3DTexture?(rt.setTexture3D(F,0),Gt=U.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(rt.setTexture2DArray(F,0),Gt=U.TEXTURE_2D_ARRAY):(rt.setTexture2D(F,0),Gt=U.TEXTURE_2D),M.activeTexture(U.TEXTURE0),M.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,F.flipY),M.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),M.pixelStorei(U.UNPACK_ALIGNMENT,F.unpackAlignment);let bn=M.getParameter(U.UNPACK_ROW_LENGTH),xe=M.getParameter(U.UNPACK_IMAGE_HEIGHT),$n=M.getParameter(U.UNPACK_SKIP_PIXELS),Mi=M.getParameter(U.UNPACK_SKIP_ROWS),as=M.getParameter(U.UNPACK_SKIP_IMAGES);M.pixelStorei(U.UNPACK_ROW_LENGTH,ve.width),M.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ve.height),M.pixelStorei(U.UNPACK_SKIP_PIXELS,It),M.pixelStorei(U.UNPACK_SKIP_ROWS,qt),M.pixelStorei(U.UNPACK_SKIP_IMAGES,jt);let Dr=S.isDataArrayTexture||S.isData3DTexture,Ie=F.isDataArrayTexture||F.isData3DTexture;if(S.isDepthTexture){let Ve=J.get(S),os=J.get(F),Le=J.get(Ve.__renderTarget),ls=J.get(os.__renderTarget);M.bindFramebuffer(U.READ_FRAMEBUFFER,Le.__webglFramebuffer),M.bindFramebuffer(U.DRAW_FRAMEBUFFER,ls.__webglFramebuffer);for(let Nr=0;Nr<Bt;Nr++)Dr&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,J.get(S).__webglTexture,G,jt+Nr),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,J.get(F).__webglTexture,Mt,be+Nr)),U.blitFramebuffer(It,qt,Et,Ct,bt,he,Et,Ct,U.DEPTH_BUFFER_BIT,U.NEAREST);M.bindFramebuffer(U.READ_FRAMEBUFFER,null),M.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(G!==0||S.isRenderTargetTexture||J.has(S)){let Ve=J.get(S),os=J.get(F);M.bindFramebuffer(U.READ_FRAMEBUFFER,P),M.bindFramebuffer(U.DRAW_FRAMEBUFFER,k);for(let Le=0;Le<Bt;Le++)Dr?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ve.__webglTexture,G,jt+Le):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ve.__webglTexture,G),Ie?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,os.__webglTexture,Mt,be+Le):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,os.__webglTexture,Mt),G!==0?U.blitFramebuffer(It,qt,Et,Ct,bt,he,Et,Ct,U.COLOR_BUFFER_BIT,U.NEAREST):Ie?U.copyTexSubImage3D(Gt,Mt,bt,he,be+Le,It,qt,Et,Ct):U.copyTexSubImage2D(Gt,Mt,bt,he,It,qt,Et,Ct);M.bindFramebuffer(U.READ_FRAMEBUFFER,null),M.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Ie?S.isDataTexture||S.isData3DTexture?U.texSubImage3D(Gt,Mt,bt,he,be,Et,Ct,Bt,Pe,mn,ve.data):F.isCompressedArrayTexture?U.compressedTexSubImage3D(Gt,Mt,bt,he,be,Et,Ct,Bt,Pe,ve.data):U.texSubImage3D(Gt,Mt,bt,he,be,Et,Ct,Bt,Pe,mn,ve):S.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Mt,bt,he,Et,Ct,Pe,mn,ve.data):S.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Mt,bt,he,ve.width,ve.height,Pe,ve.data):U.texSubImage2D(U.TEXTURE_2D,Mt,bt,he,Et,Ct,Pe,mn,ve);M.pixelStorei(U.UNPACK_ROW_LENGTH,bn),M.pixelStorei(U.UNPACK_IMAGE_HEIGHT,xe),M.pixelStorei(U.UNPACK_SKIP_PIXELS,$n),M.pixelStorei(U.UNPACK_SKIP_ROWS,Mi),M.pixelStorei(U.UNPACK_SKIP_IMAGES,as),Mt===0&&F.generateMipmaps&&U.generateMipmap(Gt),M.unbindTexture()},this.initRenderTarget=function(S){J.get(S).__webglFramebuffer===void 0&&rt.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?rt.setTextureCube(S,0):S.isData3DTexture?rt.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?rt.setTexture2DArray(S,0):rt.setTexture2D(S,0),M.unbindTexture()},this.resetState=function(){H=0,W=0,ct=null,M.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=me._getDrawingBufferColorSpace(t),e.unpackColorSpace=me._getUnpackColorSpace()}};var K0={type:"change"},Rp={type:"start"},Q0={type:"end"},ud=new di,j0=new yn,cw=Math.cos(70*sd.DEG2RAD),en=new I,Bn=2*Math.PI,Re={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Cp=1e-6,dd=class extends Oa{constructor(t,e=null){super(t,e),this.state=Re.NONE,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ki.ROTATE,MIDDLE:Ki.DOLLY,RIGHT:Ki.PAN},this.touches={ONE:ji.ROTATE,TWO:ji.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new Fe,this._lastTargetPosition=new I,this._quat=new Fe().setFromUnitVectors(t.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Sr,this._sphericalDelta=new Sr,this._scale=1,this._panOffset=new I,this._rotateStart=new ut,this._rotateEnd=new ut,this._rotateDelta=new ut,this._panStart=new ut,this._panEnd=new ut,this._panDelta=new ut,this._dollyStart=new ut,this._dollyEnd=new ut,this._dollyDelta=new ut,this._dollyDirection=new I,this._mouse=new ut,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=uw.bind(this),this._onPointerDown=hw.bind(this),this._onPointerUp=dw.bind(this),this._onContextMenu=yw.bind(this),this._onMouseWheel=mw.bind(this),this._onKeyDown=gw.bind(this),this._onTouchStart=_w.bind(this),this._onTouchMove=xw.bind(this),this._onMouseDown=fw.bind(this),this._onMouseMove=pw.bind(this),this._interceptControlDown=vw.bind(this),this._interceptControlUp=Mw.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Re.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(K0),this.update(),this.state=Re.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;en.copy(e).sub(this.target),en.applyQuaternion(this._quat),this._spherical.setFromVector3(en),this.autoRotate&&this.state===Re.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Bn:n>Math.PI&&(n-=Bn),s<-Math.PI?s+=Bn:s>Math.PI&&(s-=Bn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(en.setFromSpherical(this._spherical),en.applyQuaternion(this._quatInverse),e.copy(this.target).add(en),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=en.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new I(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=en.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(ud.origin.copy(this.object.position),ud.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ud.direction))<cw?this.object.lookAt(this.target):(j0.setFromNormalAndCoplanarPoint(this.object.up,this.target),ud.intersectPlane(j0,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Cp||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Cp||this._lastTargetPosition.distanceToSquared(this.target)>Cp?(this.dispatchEvent(K0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Bn/60*this.autoRotateSpeed*t:Bn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){en.setFromMatrixColumn(e,0),en.multiplyScalar(-t),this._panOffset.add(en)}_panUp(t,e){this.screenSpacePanning===!0?en.setFromMatrixColumn(e,1):(en.setFromMatrixColumn(e,0),en.crossVectors(this.object.up,en)),en.multiplyScalar(t),this._panOffset.add(en)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;en.copy(s).sub(this.target);let r=en.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Bn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Bn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Bn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Bn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ut,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function hw(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function uw(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function dw(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Q0),this.state=Re.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function fw(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ki.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Re.DOLLY;break;case Ki.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Re.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Re.ROTATE}break;case Ki.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Re.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Re.PAN}break;default:this.state=Re.NONE}this.state!==Re.NONE&&this.dispatchEvent(Rp)}function pw(i){switch(this.state){case Re.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Re.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Re.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function mw(i){this.enabled===!1||this.enableZoom===!1||this.state!==Re.NONE||(i.preventDefault(),this.dispatchEvent(Rp),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Q0))}function gw(i){this.enabled!==!1&&this._handleKeyDown(i)}function _w(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ji.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Re.TOUCH_ROTATE;break;case ji.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Re.TOUCH_PAN;break;default:this.state=Re.NONE}break;case 2:switch(this.touches.TWO){case ji.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Re.TOUCH_DOLLY_PAN;break;case ji.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Re.TOUCH_DOLLY_ROTATE;break;default:this.state=Re.NONE}break;default:this.state=Re.NONE}this.state!==Re.NONE&&this.dispatchEvent(Rp)}function xw(i){switch(this._trackPointer(i),this.state){case Re.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Re.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Re.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Re.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Re.NONE}}function yw(i){this.enabled!==!1&&i.preventDefault()}function vw(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Mw(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var fd=class extends Gi{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new Xn;t.deleteAttribute("uv");let e=new He({side:rn}),n=new He,s=new Ji(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new oe(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new ar(t,n,6),o=new ge;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new oe(t,to(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new oe(t,to(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new oe(t,to(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new oe(t,to(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let u=new oe(t,to(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let f=new oe(t,to(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function to(i){return new mr({color:0,emissive:16777215,emissiveIntensity:i})}var Cc=(i,t,e)=>[Math.sin(e)*i,t,Math.cos(e)*i],Sw={footRadius:5.05,footHeight:.08,topRadius:.12,topHeight:6.65};function t_(i,t){let e=De(t)-Math.PI/9,n=Sw,s=[Cc(n.footRadius,n.footHeight,e),Cc(n.topRadius,n.topHeight,e)];if(Hc(i,t,0)!==1)return{main:s,beam:null,support:null};let r=Cc(3.25,2.6,e),a=Cc(6.5,2.27,e);return{main:s,beam:[r,a],support:[Cc(6.5,.03,e),a]}}var pd=class extends Pa{constructor(t){super(t),this.type=Mn}parse(t){let a=function(_,T){switch(_){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(T||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(T||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(T||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(T||""))}},d=function(_,T,C){T=T||1024;let B=_.pos,z=-1,P=0,k="",H=String.fromCharCode.apply(null,new Uint16Array(_.subarray(B,B+128)));for(;0>(z=H.indexOf(`
`))&&P<T&&B<_.byteLength;)k+=H,P+=H.length,B+=128,H=String.fromCharCode.apply(null,new Uint16Array(_.subarray(B,B+128)));return-1<z?(C!==!1&&(_.pos+=P+z+1),k+H.slice(0,z)):!1},u=function(_){let T=/^#\?(\S+)/,C=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,L=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,B=/^\s*FORMAT=(\S+)\s*$/,z=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,P={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},k,H;for((_.pos>=_.byteLength||!(k=d(_)))&&a(1,"no header found"),(H=k.match(T))||a(3,"bad initial token"),P.valid|=1,P.programtype=H[1],P.string+=k+`
`;k=d(_),k!==!1;){if(P.string+=k+`
`,k.charAt(0)==="#"){P.comments+=k+`
`;continue}if((H=k.match(C))&&(P.gamma=parseFloat(H[1])),(H=k.match(L))&&(P.exposure=parseFloat(H[1])),(H=k.match(B))&&(P.valid|=2,P.format=H[1]),(H=k.match(z))&&(P.valid|=4,P.height=parseInt(H[1],10),P.width=parseInt(H[2],10)),P.valid&2&&P.valid&4)break}return P.valid&2||a(3,"missing format specifier"),P.valid&4||a(3,"missing image size specifier"),P},f=function(_,T,C){let L=T;if(L<8||L>32767||_[0]!==2||_[1]!==2||_[2]&128)return new Uint8Array(_);L!==(_[2]<<8|_[3])&&a(3,"wrong scanline width");let B=new Uint8Array(4*T*C);B.length||a(4,"unable to allocate buffer space");let z=0,P=0,k=4*L,H=new Uint8Array(4),W=new Uint8Array(k),ct=C;for(;ct>0&&P<_.byteLength;){P+4>_.byteLength&&a(1),H[0]=_[P++],H[1]=_[P++],H[2]=_[P++],H[3]=_[P++],(H[0]!=2||H[1]!=2||(H[2]<<8|H[3])!=L)&&a(3,"bad rgbe scanline format");let $=0,ot;for(;$<k&&P<_.byteLength;){ot=_[P++];let K=ot>128;if(K&&(ot-=128),(ot===0||$+ot>k)&&a(3,"bad scanline data"),K){let lt=_[P++];for(let Pt=0;Pt<ot;Pt++)W[$++]=lt}else W.set(_.subarray(P,P+ot),$),$+=ot,P+=ot}let O=L;for(let K=0;K<O;K++){let lt=0;B[z]=W[K+lt],lt+=L,B[z+1]=W[K+lt],lt+=L,B[z+2]=W[K+lt],lt+=L,B[z+3]=W[K+lt],z+=4}ct--}return B},p=function(_,T,C,L){let B=_[T+3],z=Math.pow(2,B-128)/255;C[L+0]=_[T+0]*z,C[L+1]=_[T+1]*z,C[L+2]=_[T+2]*z,C[L+3]=1},x=function(_,T,C,L){let B=_[T+3],z=Math.pow(2,B-128)/255;C[L+0]=Hi.toHalfFloat(Math.min(_[T+0]*z,65504)),C[L+1]=Hi.toHalfFloat(Math.min(_[T+1]*z,65504)),C[L+2]=Hi.toHalfFloat(Math.min(_[T+2]*z,65504)),C[L+3]=Hi.toHalfFloat(1)},g=new Uint8Array(t);g.pos=0;let m=u(g),v=m.width,b=m.height,y=f(g.subarray(g.pos),v,b),E,w,A;switch(this.type){case je:A=y.length/4;let _=new Float32Array(A*4);for(let C=0;C<A;C++)p(y,C*4,_,C*4);E=_,w=je;break;case Mn:A=y.length/4;let T=new Uint16Array(A*4);for(let C=0;C<A;C++)x(y,C*4,T,C*4);E=T,w=Mn;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:v,height:b,data:E,header:m.string,gamma:m.gamma,exposure:m.exposure,type:w,colorSpace:vs,minFilter:Ce,magFilter:Ce,generateMipmaps:!1,flipY:!0}}setDataType(t){return this.type=t,this}};var Ip={studio:{background:"#e8e8df",fog:"#e8e8df",sunColor:"#ffedcf",sunIntensity:3.5,ambientIntensity:2,exposure:1.05,ground:"#b7b4a5",skyTop:"#e2e5de",skyHorizon:"#eeeae0"},summer:{background:"#d5e1d6",fog:"#d5e1d6",sunColor:"#fff0d6",sunIntensity:3.6,ambientIntensity:1.8,exposure:1.02,ground:"#89915d",skyTop:"#9cbdd1",skyHorizon:"#e5e8d4"},autumn:{background:"#ded3bc",fog:"#ded3bc",sunColor:"#ffe0af",sunIntensity:3.1,ambientIntensity:1.65,exposure:1.06,ground:"#9d8862",skyTop:"#bacbd0",skyHorizon:"#e7ddc8"},winter:{background:"#dce3e5",fog:"#dce3e5",sunColor:"#e9f3ff",sunIntensity:2.9,ambientIntensity:2.05,exposure:.98,ground:"#e2e7e6",skyTop:"#9db7c9",skyHorizon:"#eef0ec"},desert:{background:"#e6d4b4",fog:"#e6d4b4",sunColor:"#ffe3b3",sunIntensity:3.9,ambientIntensity:1.65,exposure:1.02,ground:"#cdb180",skyTop:"#aebfc3",skyHorizon:"#f0d9b5"}},bw={background:"#172330",fog:"#172330",sunColor:"#9eb7da",sunIntensity:.16,ambientIntensity:.34,exposure:1.16};function e_(i,t,e){let n=null,s=null,r=0,a=!1,o=t.environment,l=t.environmentIntensity,c=new Map,h=new Map,d=new Map,u=new Map,f=new pd,p=new i.TextureLoader,x=(O,K)=>{try{e?.({name:O,status:K})}catch{}};function g(){t.environment=o,t.environmentIntensity=l}function m(O){if(c.has(O))return Promise.resolve(c.get(O));if(h.has(O))return h.get(O);let K=f.loadAsync("environment-"+O+".hdr").then(lt=>{if(a)throw lt.dispose(),new Error("Environment disposed");return lt.mapping=i.EquirectangularReflectionMapping,c.set(O,lt),lt}).finally(()=>h.delete(O));return h.set(O,K),K}function v(O){if(d.has(O))return Promise.resolve(d.get(O));if(u.has(O))return u.get(O);let K=p.loadAsync("ground-"+O+".jpg").then(lt=>{if(a)throw lt.dispose(),new Error("Environment disposed");lt.colorSpace=i.SRGBColorSpace,lt.wrapS=lt.wrapT=i.RepeatWrapping;let Pt={summer:2,autumn:1.3,winter:2,desert:1.5}[O]||2;return lt.repeat.set(90/Pt,90/Pt),lt.anisotropy=8,d.set(O,lt),lt}).finally(()=>u.delete(O));return u.set(O,K),K}function b(O){let K=[],lt=[],Pt=[],Dt=[],Ut=[0,8,16,25,30,35,39,42,45],q=128;for(let _t of Ut)for(let Ot=0;Ot<=q;Ot++){let Zt=Ot/q*Math.PI*2,Q=Math.sin(Zt)*_t,dt=Math.cos(Zt)*_t;K.push(Q,-.06,dt),lt.push(Q/90+.5,dt/90+.5);let ft=Math.max(0,Math.min(1,(_t-25)/17)),mt=1-ft*ft*(3-2*ft);Pt.push(1,1,1,mt)}for(let _t=0;_t<Ut.length-1;_t++)for(let Ot=0;Ot<q;Ot++){let Zt=_t*(q+1)+Ot,Q=Zt+q+1;Dt.push(Zt,Q,Zt+1,Zt+1,Q,Q+1)}let j=A(new i.BufferGeometry);j.setAttribute("position",new i.Float32BufferAttribute(K,3)),j.setAttribute("uv",new i.Float32BufferAttribute(lt,2)),j.setAttribute("color",new i.Float32BufferAttribute(Pt,4)),j.setIndex(Dt),j.computeVertexNormals();let gt=_(new i.MeshStandardMaterial({color:Ip[O].ground,roughness:1,vertexColors:!0,transparent:!0,depthWrite:!0})),xt=new i.Mesh(j,gt);return xt.name="Photographic near ground",xt.renderOrder=1,xt}function y(O,K,lt,Pt,Dt){let Ut=new i.Group;Ut.name="Photographic environment";let q=new i.Mesh(new i.SphereGeometry(105,64,32),new i.MeshBasicMaterial({map:O,side:i.BackSide,depthWrite:!1}));q.material.color.setScalar(lt?.12:1),q.renderOrder=-100,E.add(q.geometry),w.add(q.material),Ut.add(q);let j=b(K);Ut.add(j),Dt.then(xt=>{!xt||a||r!==Pt||s!==K+":"+lt||(j.material.map=xt,j.material.color.set("#ffffff"),j.material.needsUpdate=!0)});let gt=new i.Mesh(A(new i.PlaneGeometry(120,120)),_(new i.ShadowMaterial({color:"#171a16",opacity:lt?.16:.28,depthWrite:!1})));gt.rotation.x=-Math.PI/2,gt.position.y=-.045,gt.receiveShadow=!0,gt.renderOrder=2,Ut.add(gt);for(let xt of n.children)xt.visible=!1;n.add(Ut),t.environment=O,t.environmentIntensity=lt?.065:l}let E=new Set,w=new Set,A=O=>(E.add(O),O),_=O=>(w.add(O),O),T=(O,K=1)=>_(new i.MeshStandardMaterial({color:O,roughness:K})),C=O=>(O=Math.max(0,Math.min(1,O)),O*O*(3-2*O));function L(O){let K=O;return()=>(K=K*16807%2147483647,(K-1)/2147483646)}function B(){g(),n&&(t.remove(n),n=null);for(let O of E)O.dispose();for(let O of w)O.dispose();E.clear(),w.clear()}function z(O,K,lt,Pt){if(!lt.length)return null;let Dt=new i.InstancedMesh(O,K,lt.length),Ut=new i.Object3D;return lt.forEach((q,j)=>{Ut.position.set(...q.position),Ut.rotation.set(...q.rotation||[0,0,0]),Ut.scale.set(...q.scale||[1,1,1]),Ut.updateMatrix(),Dt.setMatrixAt(j,Ut.matrix),Pt&&Dt.setColorAt(j,new i.Color(Pt[j%Pt.length]))}),Dt.instanceMatrix.needsUpdate=!0,Dt.instanceColor&&(Dt.instanceColor.needsUpdate=!0),Dt.receiveShadow=!0,n.add(Dt),Dt}function P(O,K,lt){let Pt=new i.Vector3(...O),Dt=new i.Vector3(...K),Ut=Dt.clone().sub(Pt),q=new i.Quaternion().setFromUnitVectors(new i.Vector3(0,1,0),Ut.clone().normalize()),j=new i.Euler().setFromQuaternion(q);return{position:Pt.add(Dt).multiplyScalar(.5).toArray(),rotation:[j.x,j.y,j.z],scale:[lt,Ut.length(),lt]}}function k(O,K,lt){let Pt=Math.hypot(O,K),Dt=C((Pt-12)/15);return lt==="studio"?-.075:lt==="desert"?-.075+Dt*(.42+1.3*Math.sin(O*.095+K*.033)+.85*Math.cos(K*.115-O*.04)):-.075+Dt*(.48*Math.sin(O*.09)*Math.cos(K*.08)+.24*Math.sin((O+K)*.13))}function H(O,K){let lt=[0,11,14,19,26,36,50,68,90],Pt=128,Dt=[],Ut=[];for(let gt of lt)for(let xt=0;xt<=Pt;xt++){let _t=xt/Pt*Math.PI*2,Ot=Math.sin(_t)*gt,Zt=Math.cos(_t)*gt;Dt.push(Ot,k(Ot,Zt,O),Zt)}for(let gt=0;gt<lt.length-1;gt++)for(let xt=0;xt<Pt;xt++){let _t=gt*(Pt+1)+xt,Ot=_t+Pt+1;Ut.push(_t,Ot,_t+1,_t+1,Ot,Ot+1)}let q=A(new i.BufferGeometry);q.setAttribute("position",new i.Float32BufferAttribute(Dt,3)),q.setIndex(Ut),q.computeVertexNormals();let j=new i.Mesh(q,T(K.ground));j.receiveShadow=!0,n.add(j)}function W(O,K){let lt=_(new i.ShaderMaterial({side:i.BackSide,depthWrite:!1,uniforms:{top:{value:new i.Color(K?"#0b1525":O.skyTop)},horizon:{value:new i.Color(K?"#283746":O.skyHorizon)},night:{value:K?1:0}},vertexShader:"varying vec3 direction; void main(){direction=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:`varying vec3 direction; uniform vec3 top; uniform vec3 horizon; uniform float night; void main(){vec3 d=normalize(direction);float h=smoothstep(-0.06,0.75,d.y);vec3 color=mix(horizon,top,h);float glow=pow(max(0.0,dot(d,normalize(vec3(-0.45,0.48,0.65)))),40.0);color+=vec3(0.09,0.065,0.025)*glow*(1.0-night);gl_FragColor=vec4(color,1.0);
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`})),Pt=new i.Mesh(A(new i.SphereGeometry(105,32,16)),lt);Pt.renderOrder=-100,n.add(Pt)}function ct(O){let K=L(7521),lt=[],Pt=[],Dt=[],Ut=[],q=[],j=[],gt=O==="winter",xt=O==="autumn",_t=xt?["#9b672f","#b17d36","#806d3a","#99623d","#b49348"]:["#58704a","#6e8051","#718553","#4e6a46","#7d8c59"];for(let Ot=0;Ot<56;Ot++){let Zt=Ot/56*Math.PI*2+(K()-.5)*.12,Q=25+K()*35,dt=Math.sin(Zt)*Q,ft=Math.cos(Zt)*Q,mt=k(dt,ft,O),wt=4.2+K()*5.5,Yt=(K()-.5)*.65,$t=(K()-.5)*.65,Qt=[dt+Yt,mt+wt,ft+$t];lt.push(P([dt,mt,ft],[dt+Yt*.45,mt+wt*.69,ft+$t*.45],.13+K()*.12));for(let Kt=0;Kt<5;Kt++){let U=Kt/5*Math.PI*2+K()*.5,fe=1.05+K()*1.35,ce=[dt+Yt*.35,mt+wt*(.45+Kt*.035),ft+$t*.35],R=[Qt[0]+Math.sin(U)*fe,mt+wt*(.72+K()*.25),Qt[2]+Math.cos(U)*fe];if(Pt.push(P(ce,R,.035+K()*.035)),gt){let M=[R[0]+Math.sin(U+.6)*.65,R[1]+.6+K()*.5,R[2]+Math.cos(U+.6)*.65];Pt.push(P(R,M,.022))}else Dt.push({position:[R[0],R[1]-.12,R[2]],rotation:[K(),K()*Math.PI,K()],scale:[1.3+K()*.65,1.2+K()*.9,1.25+K()*.7]})}gt&&Ut.push({position:[dt,mt+.02,ft],scale:[.7+K(),.08+K()*.1,.7+K()]})}if(z(A(new i.CylinderGeometry(.7,1,1,7)),T(gt?"#706e65":"#77694e"),lt),z(A(new i.CylinderGeometry(.35,1,1,6)),T(gt?"#78796f":"#786b51"),Pt),gt||z(A(new i.SphereGeometry(1,9,7)),T("#ffffff"),Dt,_t),gt&&z(A(new i.SphereGeometry(1,10,6)),T("#eef0ed"),Ut),!gt){for(let Ot=0;Ot<280;Ot++){let Zt=K()*Math.PI*2,Q=12.5+K()*20,dt=Math.sin(Zt)*Q,ft=Math.cos(Zt)*Q,mt=k(dt,ft,O);xt?q.push({position:[dt,mt+.015,ft],rotation:[-.1+K()*.2,K()*Math.PI,0],scale:[.08+K()*.1,.008,.045+K()*.07]}):j.push({position:[dt,mt+.09,ft],rotation:[0,K()*Math.PI,0],scale:[.16+K()*.16,.1+K()*.18,.12+K()*.12]})}xt?z(A(new i.SphereGeometry(1,5,3)),T("#ffffff"),q,["#b48843","#8f6539","#b99b55"]):z(A(new i.SphereGeometry(1,5,3)),T("#6f7e4b"),j)}}function $(){let O=L(3124),K=[];for(let lt=0;lt<35;lt++){let Pt=O()*Math.PI*2,Dt=17+O()*45,Ut=Math.sin(Pt)*Dt,q=Math.cos(Pt)*Dt,j=k(Ut,q,"desert"),gt=.12+O()*.42;K.push({position:[Ut,j+gt*.2,q],rotation:[O()*.3,O()*Math.PI,O()*.2],scale:[gt*1.7,gt*.5,gt]})}z(A(new i.DodecahedronGeometry(1,0)),T("#ffffff"),K,["#b49d79","#b7a582","#a99271"])}function ot(O,K=!1){O=Object.hasOwn(Ip,O)?O:"studio",K=!!K;let lt=Ip[O],Pt=O+":"+K;if(!a&&s!==Pt){let _t=++r;if(B(),n=new i.Group,n.name="Tentipi presentation environment: "+O,t.add(n),H(O,lt),W(lt,K),["summer","autumn","winter"].includes(O)&&ct(O),O==="desert"&&$(),s=Pt,O!=="studio"){x(O,"loading");let Ot=v(O).catch(()=>null);m(O).then(Zt=>{a||r!==_t||s!==Pt||(y(Zt,O,K,_t,Ot),x(O,"ready"))}).catch(()=>{!a&&r===_t&&s===Pt&&x(O,"fallback")})}}let{background:Dt,fog:Ut,sunColor:q,sunIntensity:j,ambientIntensity:gt,exposure:xt}=K?bw:lt;return{background:Dt,fog:Ut,sunColor:q,sunIntensity:j,ambientIntensity:gt,exposure:xt}}return{set:ot,dispose(){a=!0,r++,B();for(let O of c.values())O.dispose();for(let O of d.values())O.dispose();c.clear(),d.clear(),s=null}}}var ne=(i,t,e)=>new I(i,t,e);function n_(i,t){let e=new Ac({antialias:!0,alpha:!1,preserveDrawingBuffer:!0,powerPreference:"high-performance"});e.setPixelRatio(Math.min(devicePixelRatio,2)),e.shadowMap.enabled=!0,e.shadowMap.type=Ls,e.toneMapping=ka,e.toneMappingExposure=1.05,i.append(e.domElement),e.domElement.setAttribute("aria-label","Interaktiv 3D-vy av Stratus 72. Anv\xE4nd vyknapparna och planvyn f\xF6r att m\xF6blera.");let n=new Gi;n.background=new kt("#e8e8df"),n.fog=new ir("#e8e8df",35,100);let s=new Be(38,1,.05,400);s.position.set(14,9,17);let r=new Ri(-9,9,9,-9,.1,400);r.position.set(0,30,.001),r.lookAt(0,0,0);let a=new dd(s,e.domElement);a.target.set(0,2.4,0),a.enableDamping=!0,a.minDistance=2,a.maxDistance=220,a.maxPolarAngle=Math.PI*.495,a.minPolarAngle=.08,a.enablePan=!0;let o=new Pr(e),l=o.fromScene(new fd,.04);n.environment=l.texture,n.environmentIntensity=.35,o.dispose();let c=new xr(16777215,9340783,2);n.add(c);let h=new Mr(16772559,3.5);h.position.set(-9,18,9),h.castShadow=!0,h.shadow.mapSize.set(2048,2048),Object.assign(h.shadow.camera,{left:-14,right:14,top:14,bottom:-14,near:1,far:55}),h.shadow.bias=-25e-5,h.shadow.normalBias=.025,n.add(h);let d=7;function u(){return d=d*16807%2147483647,(d-1)/2147483646}function f(D){let Y=document.createElement("canvas");Y.width=Y.height=512;let it=Y.getContext("2d");it.fillStyle=D==="wood"?"#c5b28c":D==="mat"?"#b7a17a":"#e8d5af",it.fillRect(0,0,512,512);for(let tt=0;tt<4e3;tt++){let ht=u()*512,vt=u()*512;it.strokeStyle=D==="wood"?`rgba(74,45,22,${u()*.18})`:`rgba(60,45,24,${u()*.09})`,it.lineWidth=D==="wood"?u()*1.5:.5,it.beginPath(),it.moveTo(ht,vt),it.lineTo(ht+(D==="wood"?u()*3:3),vt+(D==="wood"?u()*200:0)),it.stroke()}if(D!=="wood"){it.strokeStyle="rgba(255,255,255,.12)";for(let tt=0;tt<512;tt+=3)it.beginPath(),it.moveTo(tt,0),it.lineTo(tt,512),it.moveTo(0,tt),it.lineTo(512,tt),it.stroke()}let st=new lr(Y);return st.wrapS=st.wrapT=ys,st.colorSpace=ln,st.repeat.set(D==="cloth"?3:2,D==="cloth"?3:2),st.anisotropy=e.capabilities.getMaxAnisotropy(),st}let p=f("wood"),x=f("cloth"),g=f("mat"),m=new He({map:p,roughness:.78,color:14731681}),v=new He({map:p,roughness:.54,color:12622695}),b=new He({color:3553847,metalness:.8,roughness:.38}),y=new He({color:13352349,roughness:1}),E=new He({color:12231293,roughness:1}),w=e_(hd,n),A="studio",_=new qe,T=new qe,C=_,L=T,B=new Map,z=null,P="",k=null;n.add(_,T);let H=()=>ct==="plan"||ct==="layout",W,ct="outside",$=null,ot=!1,O=!1,K=!0,lt=null,Pt=null,Dt=null,Ut=[],q=new Ua,j=new ut,gt=new yn(ne(0,1,0),0),xt=null,_t=null,Ot=[];function Zt(D,Y,it,st=m,tt=_,ht=it){let vt=Y.clone().sub(D),At=new oe(new Ei(ht,it,vt.length(),16),st);return At.position.copy(D).add(Y).multiplyScalar(.5),At.quaternion.setFromUnitVectors(ne(0,1,0),vt.normalize()),At.castShadow=!0,At.receiveShadow=!0,tt.add(At),At}function Q(D,Y,it,st,tt,ht,vt,At){let N=new oe(new Xn(D,Y,it),vt);return N.position.set(st,tt,ht),N.castShadow=!0,N.receiveShadow=!0,At.add(N),N}function dt(D,Y,it,st){let tt=new re;tt.setAttribute("position",new Vt(D,3)),tt.setIndex(Y);let ht=[];for(let At=0;At<D.length;At+=3)ht.push((D[At]+7)/14,(D[At+2]+7)/14);tt.setAttribute("uv",new Vt(ht,2)),tt.computeVertexNormals();let vt=new oe(tt,it);return vt.castShadow=!0,vt.receiveShadow=!0,st.add(vt),vt}let ft=(D,Y,it)=>ne(Math.sin(it)*D,Y,Math.cos(it)*D);function mt(D,Y,it,st=_){let tt=new Es(D),ht=new oe(new Rs(tt,Math.max(10,D.length*4),Y,5,!1),it);return st.add(ht),ht}function wt(D){let Y=new Set;D.traverse(it=>{it.geometry?.dispose(),it.material&&Y.add(it.material)});for(let it of Y)[m,v,b,y,E].includes(it)||it.dispose();n.remove(D)}function Yt(D){D.environment&&D.environment!==A&&(A=D.environment,Qt()),W=D,wt(C),wt(L),C=new qe,L=new qe,n.add(C,L),B=new Map,Ut.length=0,Ot.length=0,Pt=null;let Y=Je(D),it=Jn(D);k=Gc(D);for(let tt of Y){let ht=tt.config,vt=tt.id===it.id;_=new qe,T=new qe,C.add(_),L.add(T),B.set(tt.id,{structure:_,furn:T,entry:tt});let At=Ut.length,N=new He({map:x,bumpMap:x,bumpScale:.012,color:ht.fabric==="white"?15855586:14468247,roughness:.95,side:dn}),yt=new He({map:x,bumpMap:x,bumpScale:.008,color:8488556,roughness:1,side:dn,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),nt=N.clone(),Tt=new pr({color:13097170,roughness:.18,metalness:0,transparent:!0,opacity:.27,side:dn,depthWrite:!1}),Nt=new He({color:3488050,roughness:.7,side:dn});for(let zt=0;zt<9;zt++){let Xt=De(zt)-Math.PI/9,ee=De(zt)+Math.PI/9,pe=ht.walls[zt],le=pe!=="down",on=le?6.5:5.15,so=le?2.3:.06,ss=12,vi=24,Di=!(ot||H()),Yn=(Me,S,F,Z,V="roof",G=N)=>{let Mt=[],Et=[];for(let qt=0;qt<=24;qt++){let jt=Me+(S-Me)*qt/24,bt=F(jt),he=Z(jt);for(let be=0;be<=12;be++)if(Mt.push(...Vn(ht.walls,zt,bt+(he-bt)*be/12,jt)),qt<24&&be<12){let ve=qt*13+be;Et.push(ve,ve+1,ve+12+1,ve+1,ve+12+2,ve+12+1)}}let It=dt(Mt,Et,G,_);if(It.userData={bay:zt,part:V},It.visible=Di,Ut.push(It),G===N&&S===1){let qt=Yn(Math.max(Me,.975),1,F,Z,V,yt);It.add(qt)}return It},rs;if(zt===cs){let S=V=>.145*Math.max(0,(V-.7)/.30000000000000004),F=V=>.5-S(V),Z=V=>.5+S(V);if(pe==="down"){rs=Yn(0,.7,()=>0,()=>1),Yn(.7,1,()=>0,F),Yn(.7,1,Z,()=>1);for(let V of[-1,1]){let G=Yn(.7,1,V<0?F:()=>.5,V<0?()=>.5:Z,"entrance");if(ht.entranceOpen){let Mt=ne(...Vn(ht.walls,zt,V<0?F(1):Z(1),1)),Et=ne(...Vn(ht.walls,zt,.5,.7)),Ct=Et.clone().sub(Mt).normalize(),Bt=new Fe().setFromAxisAngle(Ct,V*1.85),It=[G,...G.children];for(let qt of It){let jt=qt.geometry.getAttribute("position");for(let bt=0;bt<jt.count;bt++){let he=ne(jt.getX(bt),jt.getY(bt),jt.getZ(bt)).sub(Mt).applyQuaternion(Bt).add(Mt);jt.setXYZ(bt,he.x,he.y,he.z)}jt.needsUpdate=!0,qt.geometry.computeVertexNormals()}}}}else rs=Yn(0,1,()=>0,()=>1);if(pe!=="down"||!ht.entranceOpen){let V=(qt,jt)=>{let bt=ne(...Vn(ht.walls,zt,qt,jt)),he=ne(bt.x,.7*Math.hypot(bt.x,bt.z),bt.z).normalize();return bt.addScaledVector(he,.022)},G=[],Mt=[];for(let qt=0;qt<=64;qt++){let jt=.7+.30000000000000004*qt/64;if(G.push(...V(.4955,jt).toArray(),...V(.5045,jt).toArray()),qt<64){let bt=qt*2;Mt.push(bt,bt+1,bt+2,bt+1,bt+3,bt+2)}}let Et=dt(G,Mt,Nt,_);Et.visible=Di,Et.userData={bay:zt,part:"entrance"},Ut.push(Et);let Ct=new He({color:9014142,roughness:.65,metalness:.2,side:dn});for(let qt=0;qt<72;qt++){let jt=.7+.30000000000000004*(qt+.5)/72,bt=V(.5,jt),he=V(.502,jt).sub(V(.498,jt)).normalize();bt.addScaledVector(he,qt%2?.003:-.003);let be=Zt(bt.clone().addScaledVector(he,-.006),bt.clone().addScaledVector(he,.006),.0035,Ct);be.visible=Di,be.userData={bay:zt,part:"entrance"},Ut.push(be)}let Bt=V(.5,.745),It=new oe(new Zi(.025,.004,6,16),b);It.position.copy(Bt),It.position.y-=.035,It.lookAt(It.position.clone().add(ne(Bt.x,0,Bt.z).normalize())),It.visible=Di,It.userData={bay:zt,part:"entrance"},_.add(It),Ut.push(It)}else for(let V of[F,Z]){let G=mt(Array.from({length:21},(Mt,Et)=>{let Ct=.7+.30000000000000004*Et/20;return ne(...Vn(ht.walls,zt,V(Ct),Ct))}),.012,E);G.visible=Di}}else rs=Yn(0,1,()=>0,()=>1);let Pc=mt(Array.from({length:vi+1},(Me,S)=>ne(...Vn(ht.walls,zt,0,S/vi))),.016,E);Pc.visible=rs.visible;for(let[Me,S]of zt===cs&&pe==="down"&&ht.entranceOpen?[[0,.355],[.645,1]]:[[0,1]]){let F=mt(Array.from({length:ss+1},(Z,V)=>ne(...Vn(ht.walls,zt,Me+(S-Me)*V/ss,1))),.018,yt);F.visible=rs.visible}for(let Me of tm(ht.walls,zt)){let S=dt(Me.points,Me.indices,nt,_);S.visible=Di,S.userData={bay:zt,part:"roof"},Ut.push(S)}let Zn=t_(ht.walls,zt),ro=ne(...Zn.main[0]),xd=Zt(ro,ne(...Zn.main[1]),.075,m,_,.052);xd.visible=!H(),H()&&Zt(ro,ro.clone().add(ne(0,.07,0)),.09,m);let yd=Zt(ft(.13,6.83,Xt),ft(.56,7.4,Xt+.2),.045,m);if(yd.visible=!H(),Zn.beam){let Me=Zt(ne(...Zn.beam[0]),ne(...Zn.beam[1]),.035,m),S=Zt(ne(...Zn.support[0]),ne(...Zn.support[1]),.04,m);Me.visible=S.visible=!H();for(let V of[Zn.support[1],Zn.beam[0]]){let G=new oe(new Ei(.085,.085,.05,10),b);G.position.set(...V),G.visible=!H(),_.add(G)}let F=ft(7.75,.02,Xt+.04),Z=mt([ne(...Zn.beam[1]),F],.006,y);Z.visible=K&&ct!=="inside"&&!H(),Q(.05,.08,.05,F.x,.02,F.z,b,_)}if(pe==="window"||pe==="canvas"){let Me=new qe;_.add(Me);let S=ft(on,0,Xt),F=ft(on,0,ee),Z=S.distanceTo(F);Me.position.copy(S).add(F).multiplyScalar(.5),Me.rotation.y=-Math.atan2(F.z-S.z,F.x-S.x);for(let G=0;G<3;G++){let Mt=(G-1)*Z/3,Et=Z/3;if(G===1&&ht.doors[zt]?Zt(ne(Mt-Et/2,2.15,0),ne(Mt+Et/2,2.15,0),.09,nt,Me):(pe==="window"?Q(Et,1.82,.014,Mt,1.26,0,Tt,Me):Q(Et,2.14,.018,Mt,1.16,0,nt,Me),Q(Et,.32,.025,Mt,.19,0,nt,Me)),Q(Et,.14,.035,Mt,2.24,0,nt,Me),G<2){let Bt=Mt+Et/2;Q(.045,2.3,.025,Bt,1.15,.025,Nt,Me);for(let It=0;It<42;It++)Q(.018,.009,.01,Bt+(It%2?.004:-.004),.06+It*.053,.044,b,Me);if(!ht.doors[zt]){let It=new oe(new Zi(.025,.005,6,12),b);It.position.set(Bt,1.9,.055),Me.add(It)}}}for(let G of[-Z/2,Z/2])Q(.045,2.3,.05,G,1.15,0,Nt,Me);let V=new oe(new Xn(Z/3,2.15,.1),new hn({visible:!1}));V.position.set(0,1.12,0),V.userData={bay:zt,part:"door"},Me.add(V),Ut.push(V),Me.traverse(G=>{G.isMesh&&G!==V&&(G.userData={bay:zt,part:"door"},Ut.push(G))});for(let[G,Mt]of[[Xt,(zt+8)%9],[ee,(zt+1)%9]])if(!["window","canvas"].includes(ht.walls[Mt])){let Et=ft(on,0,G),Ct=ft(on,2.3,G),Bt=ft(5.15,.05,G);dt([...Et,...Ct,...Bt],[0,1,2],nt,_)}}}let pt=72,Wt=20,Ht=ht.ventOpen?1:0;Dt===null&&(Dt=Ht);let Ae=vt?Dt:Ht,_e=[],Ln=[];for(let zt=0;zt<=Wt;zt++)for(let Xt=0;Xt<=pt;Xt++)if(_e.push(...Os(Ae,Xt/pt,zt/Wt)),zt<Wt&&Xt<pt){let ee=zt*(pt+1)+Xt;Ln.push(ee,ee+1,ee+pt+1,ee+1,ee+pt+2,ee+pt+1)}let an=dt(_e,Ln,N,_);an.visible=!(ot||H()),an.userData={part:"vent"},Ut.push(an);let Rc=mt(Array.from({length:73},(zt,Xt)=>ne(...Os(Ae,Xt/72,1))),.018,E);Rc.visible=an.visible;let Ic=[0,3,6].map(zt=>{let Xt=De(zt)-Math.PI/9,ee=(Xt/(Math.PI*2)%1+1)%1,pe=ft(.36,7.1,Xt+.2),le=Zt(ne(0,0,0),ne(0,1,0),.004,y);return le.visible=an.visible,{line:le,anchor:pe,u:ee}});if(vt)Pt={hood:an,rim:Rc,cords:Ic,target:Ht,nu:pt,nv:Wt},$t(Dt);else for(let{line:zt,anchor:Xt,u:ee}of Ic){let pe=ne(...Os(Ht,ee,1)),le=Xt.clone().sub(pe);zt.position.copy(Xt).add(pe).multiplyScalar(.5),zt.scale.y=le.length(),zt.quaternion.setFromUnitVectors(ne(0,1,0),le.normalize())}if(ht.floor){let zt=new oe(new Ei(5.12,5.12,.025,9),new He({map:g,color:12166006,roughness:1}));zt.position.y=.003,zt.rotation.y=Math.PI/18,zt.receiveShadow=!0,_.add(zt);for(let Xt=-3;Xt<=3;Xt+=2){let ee=Math.sqrt(26.009999999999998-Xt*Xt);Zt(ne(-ee,.022,Xt),ne(ee,.022,Xt),.008,y)}}if(ht.lights&&!H()){for(let zt=0;zt<9;zt++){let Xt=De(zt),ee=[];for(let pe=0;pe<=20;pe++){let le=pe/20,on=.55+4*le,so=Wc(ht.walls,zt,.5,on),ss=so-.2-.08*Math.sin(Math.PI*le);if(ee.push(ft(on,ss,Xt)),pe>0&&pe%2===0){let vi=new oe(new Yi(.045,8,6),new He({color:16771246,emissive:16764530,emissiveIntensity:O?4:1}));vi.position.copy(ft(on,ss-.08,Xt)),_.add(vi)}}mt(ee,.009,Nt)}for(let[zt,Xt]of[[-2,-2],[2,2],[2,-2],[-2,2]]){let ee=new Ji(16761464,O?24:0,7,2);ee.position.set(zt,2.5,Xt),_.add(ee),Ot.push(ee)}}for(let zt of ht.items){let Xt=We[zt.type],ee=new qe;if(ee.position.set(zt.x,0,zt.z),ee.rotation.y=-zt.rotation*Math.PI/180,ee.userData={item:zt.id},T.add(ee),H()){let pe=new hn({color:Xt.kind==="table"?13152910:Xt.kind==="bench"?10322013:5331793}),le=Q(Xt.l,.04,Xt.w,0,.065,0,pe,ee),on=new Cn(new hr(le.geometry),new $e({color:4471339}));on.position.copy(le.position),ee.add(on)}else if(Xt.kind!=="fire"){let pe=Xt.kind==="table"?5:2;for(let le=0;le<pe;le++)Q(Xt.l,.045,Xt.w/pe-.006,0,Xt.h-.022,(le-(pe-1)/2)*Xt.w/pe,v,ee);for(let le of[-Xt.l*.34,Xt.l*.34]){Zt(ne(le-.08,.04,-Xt.w*.32),ne(le,Xt.h-.05,-Xt.w*.32),.023,b,ee),Zt(ne(le+.08,.04,Xt.w*.32),ne(le,Xt.h-.05,Xt.w*.32),.023,b,ee),Zt(ne(le,.12,-Xt.w*.35),ne(le,.12,Xt.w*.35),.018,b,ee);for(let on of[-Xt.w*.34,Xt.w*.34])Q(.06,.012,.06,le,Xt.h+.002,on,b,ee)}}else{for(let pe=0;pe<4;pe++){let le=.13+pe*.16;Q(1.28,.145,.13,0,le,-.47,m,ee),Q(1.28,.145,.13,0,le,.47,m,ee),Q(.13,.145,1.12,-.57,le,0,m,ee),Q(.13,.145,1.12,.57,le,0,m,ee)}Q(.97,.05,.78,0,.71,0,b,ee);for(let pe of[-.52,.52])for(let le=0;le<2;le++)Q(1.5,.055,.12,0,.77,pe+(le?-.12:.12),v,ee);for(let pe of[-.67,.67])Q(.15,.055,.8,pe,.77,0,v,ee)}ee.traverse(pe=>{pe.isMesh&&(pe.userData={item:zt.id},Ut.push(pe))})}let is=new oe(new cr(5.14,9),new hn({visible:!1}));is.rotation.x=-Math.PI/2,is.position.y=.035,is.userData={part:"tent"},_.add(is),Ut.push(is);for(let zt of[_,T])zt.position.set(tt.x,0,tt.z),zt.rotation.y=-tt.rotation*Math.PI/180;for(let zt of Ut.slice(At))zt.userData.tentId=tt.id;if(H()){let zt=document.createElement("canvas");zt.width=256,zt.height=64;let Xt=zt.getContext("2d");Xt.fillStyle=vt?"#f5cf42":"#fffdf4",Xt.fillRect(0,0,256,64),Xt.fillStyle="#263b2b",Xt.font="600 26px Arial",Xt.textAlign="center",Xt.fillText(tt.name,128,41);let ee=new rr(new ws({map:new lr(zt),depthTest:!1}));ee.position.set(0,.25,0),ee.scale.set(2.8,.7,1),_.add(ee)}}_=C,T=B.get(it.id).furn,z=new qe,C.add(z),Y.length>1&&im(hd,z,D,x,{plan:H(),cutaway:ot}),n.updateMatrixWorld(!0);let st=Y.map(tt=>[tt.id,tt.x,tt.z,tt.rotation].join(",")).join("|")+(ct==="inside"?it.id:"");st!==P&&(P=st,ce()),fe(),M()}function $t(D){if(!Pt)return;let{hood:Y,rim:it,cords:st,nu:tt,nv:ht}=Pt,vt=Y.geometry.getAttribute("position");for(let At=0;At<=ht;At++)for(let N=0;N<=tt;N++){let yt=Os(D,N/tt,At/ht);vt.setXYZ(At*(tt+1)+N,...yt)}vt.needsUpdate=!0,Y.geometry.computeVertexNormals(),Y.geometry.computeBoundingSphere(),it.geometry.dispose(),it.geometry=new Rs(new Es(Array.from({length:73},(At,N)=>ne(...Os(D,N/72,1)))),288,.018,5,!1);for(let{line:At,anchor:N,u:yt}of st){let nt=ne(...Os(D,yt,1)),Tt=N.clone().sub(nt);At.position.copy(N).add(nt).multiplyScalar(.5),At.scale.y=Tt.length(),At.quaternion.setFromUnitVectors(ne(0,1,0),Tt.normalize())}}function Qt(){let D=w.set(A,O);n.background.set(D.background),n.fog.color.set(D.fog),n.fog.near=70,n.fog.far=A==="studio"?220:250,h.color.set(D.sunColor),h.intensity=D.sunIntensity,c.intensity=D.ambientIntensity,e.toneMappingExposure=D.exposure}Qt();let Kt,U;function fe(){if(U&&(n.remove(U),U.traverse(D=>{D.geometry?.dispose(),D.material?.dispose()}),U=null),Kt&&(n.remove(Kt),Kt.geometry.dispose(),Kt.material.dispose(),Kt=null),$){let D=T.children.find(Y=>Y.userData.item===$);if(D&&(D.updateWorldMatrix(!0,!0),Kt=new Fa(D,13019211),n.add(Kt),H()&&ct!=="layout")){let Y=We[W.items.find(At=>At.id===$).type],it=Math.max(Y.l,Y.w)/2+.38,st=D.getWorldPosition(ne()),tt=D.localToWorld(ne(it,.13,0));U=new qe;let ht=new oe(new Zi(it,.018,5,48),new hn({color:11770153}));ht.rotation.x=-Math.PI/2,ht.position.copy(st).y=.12,U.add(ht);let vt=new oe(new Yi(.14,12,8),new hn({color:16109378}));vt.position.copy(tt),vt.userData={rotate:$,tentId:Jn(W).id},U.add(vt),n.add(U)}}}function ce(){if(!k)return;let D=Jn(W);if(ct==="inside")s.position.copy(B.get(D.id).furn.localToWorld(ne(.05,1.65,3.9))),a.target.copy(B.get(D.id).furn.localToWorld(ne(0,2,-1.5)));else{let Y=Math.max(.2,i.clientWidth/i.clientHeight),it=ne(k.x,3.1,k.z),st=ne(.65,.55,.78).normalize(),tt=ne(st.z,0,-st.x).normalize(),ht=st.clone().cross(tt).normalize(),vt=Math.tan(s.fov*Math.PI/360),At=10,N=[];for(let yt of Je(W)){N.push(ne(yt.x,7.4,yt.z));for(let nt=0;nt<9;nt++)for(let[Tt,Nt]of[[5.3,0],[6.5,2.3]]){let pt=De(nt),Wt=Fs({x:Math.sin(pt)*Tt,z:Math.cos(pt)*Tt},yt);N.push(ne(Wt.x,Nt,Wt.z))}}for(let yt of N){let nt=yt.clone().sub(it),Tt=nt.dot(st);At=Math.max(At,Tt+Math.abs(nt.dot(tt))/(vt*Y*.9),Tt+Math.abs(nt.dot(ht))/(vt*.73))}s.position.copy(it).addScaledVector(st,At),a.target.copy(it)}lt=null,a.update()}let R=D=>{for(let Y=D;Y;Y=Y.parent)if(!Y.visible)return!1;return!0};function M(){let{width:D,height:Y}=i.getBoundingClientRect();if(!D||!Y)return;e.setSize(D,Y,!1),s.aspect=D/Y,s.zoom=ct==="outside"?Math.min(1,Math.max(.68,D/Y)):1,s.updateProjectionMatrix();let it=W?Jn(W):null,st=ct==="plan"&&it?{x:it.x,z:it.z,width:15.6,depth:15.6}:k,tt=Qp(D/Y),ht=st?Math.max(st.width/(2*tt.x),st.depth/(2*tt.y),1):1;if(tt.x*=ht*1.18,tt.y*=ht*1.18,st){let vt=st.z+tt.y*.1;r.position.set(st.x,30,vt+.001),r.lookAt(st.x,0,vt)}r.left=-tt.x,r.right=tt.x,r.top=tt.y,r.bottom=-tt.y,r.updateProjectionMatrix()}new ResizeObserver(M).observe(i),M();function X(D){let Y=e.domElement.getBoundingClientRect();j.set((D.clientX-Y.left)/Y.width*2-1,-(D.clientY-Y.top)/Y.height*2+1),q.setFromCamera(j,H()?r:s)}function J(){return q.intersectObjects([...Ut,...U?.children??[]],!1).filter(D=>R(D.object))}a.mouseButtons.RIGHT=null,e.domElement.addEventListener("contextmenu",D=>{D.preventDefault();let Y=!!xt;xt=null,_t=null,a.enabled=!H(),Y&&Yt(W),X(D);let it=J().find(st=>st.object.userData.item);if(it){let st=it.object.userData;if(st.tentId!==Jn(W).id){t.tent(st.tentId);return}$=st.item,t.context(st.item),fe()}}),e.domElement.addEventListener("pointerdown",D=>{if(D.button!==0)return;X(D),_t={x:D.clientX,y:D.clientY,pointerId:D.pointerId};let Y=J(),it=Y.find(ht=>ht.object.userData.rotate)??Y[0];if(!it)return;let st=it.object.userData,tt=Jn(W);if(ct==="layout"&&st.tentId){let ht=ne();q.ray.intersectPlane(gt,ht);let vt=Je(W).find(At=>At.id===st.tentId);xt={tentId:st.tentId,dx:vt.x-ht.x,dz:vt.z-ht.z,x:vt.x,z:vt.z,moved:!1},a.enabled=!1,e.domElement.setPointerCapture(D.pointerId);return}if(st.tentId&&st.tentId!==tt.id){_t=null,t.tent(st.tentId);return}if(st.item||st.rotate){let ht=st.item??st.rotate;$=ht,t.select(ht);let vt=ne();q.ray.intersectPlane(gt,vt),T.worldToLocal(vt);let At=W.items.find(N=>N.id===ht);xt={id:ht,dx:At.x-vt.x,dz:At.z-vt.z,moved:!1,rotate:!!st.rotate,angle:Math.atan2(vt.z-At.z,vt.x-At.x),rotation:At.rotation},a.enabled=!1,e.domElement.setPointerCapture(D.pointerId),fe()}}),e.domElement.addEventListener("pointermove",D=>{if(!xt||D.pointerId!==_t?.pointerId)return;X(D);let Y=ne();if(!q.ray.intersectPlane(gt,Y)||Math.hypot(D.clientX-_t.x,D.clientY-_t.y)<=4&&!xt.moved)return;if(xt.moved=!0,xt.tentId){let tt=Je(W).find(N=>N.id===xt.tentId),ht=Math.round((Y.x+xt.dx)*10)/10,vt=Math.round((Y.z+xt.dz)*10)/10,At=Kn(W.site??{links:[]},xt.tentId);xt.x=ht,xt.z=vt;for(let[N,yt]of B)At.has(N)&&(yt.structure.position.set(yt.entry.x+ht-tt.x,0,yt.entry.z+vt-tt.z),yt.furn.position.copy(yt.structure.position));for(let N of z?.children??[])N.userData.linkTents?.some(yt=>At.has(yt))&&N.position.set(ht-tt.x,0,vt-tt.z);return}T.worldToLocal(Y);let it=T.children.find(tt=>tt.userData.item===xt.id),st=W.items.find(tt=>tt.id===xt.id);if(xt.rotate){let tt=Math.atan2(Y.z-st.z,Y.x-st.x),ht=xt.rotation+(tt-xt.angle)*180/Math.PI;xt.resultRotation=(Math.round(ht/5)*5%360+360)%360,it.rotation.y=-xt.resultRotation*Math.PI/180}else Math.abs(Y.x)<15&&Math.abs(Y.z)<15&&(it.position.x=Math.round((Y.x+xt.dx)*20)/20,it.position.z=Math.round((Y.z+xt.dz)*20)/20);fe()}),e.domElement.addEventListener("pointerup",D=>{if(!(D.button!==0||D.pointerId!==_t?.pointerId)){if(xt){let Y=xt;if(xt=null,_t=null,a.enabled=!H(),Y.tentId)Y.moved?t.moveTent(Y.tentId,Y.x,Y.z):t.tent(Y.tentId);else if(Y.moved){let it=T.children.find(st=>st.userData.item===Y.id);Y.rotate?t.rotate(Y.id,Y.resultRotation):t.move(Y.id,it.position.x,it.position.z)}return}if(_t&&Math.hypot(D.clientX-_t.x,D.clientY-_t.y)<5){X(D);let Y=J().find(it=>it.object.userData.bay!==void 0||it.object.userData.part==="vent");if(Y){let it=Y.object.userData;it.tentId!==Jn(W).id?t.tent(it.tentId):it.part==="vent"?t.vent():it.part==="entrance"?t.entrance():it.part==="door"?t.door(it.bay):t.bay(it.bay)}else $=null,t.select(null),fe()}_t=null}}),e.domElement.addEventListener("pointercancel",()=>{xt=null,_t=null,a.enabled=!H(),W&&Yt(W)});let rt=matchMedia("(prefers-reduced-motion: reduce)"),St=!0,Rt=0;function at(D){if(requestAnimationFrame(at),!(document.hidden||!St)&&!(D-Rt<25)){if(Rt=D,lt){let Y=Math.min((D-lt.time)/900,1),it=1-(1-Y)**3;s.position.lerpVectors(lt.from,lt.to,it),a.target.lerpVectors(lt.targetFrom,lt.targetTo,it),Y===1&&(lt=null)}Pt&&Dt!==Pt.target&&(Dt=rt.matches||Math.abs(Pt.target-Dt)<2e-4?Pt.target:Dt+(Pt.target-Dt)*.13,$t(Dt)),a.update(),e.render(n,H()?r:s)}}return requestAnimationFrame(at),{update:Yt,select(D){$=D,fe()},view(D){ct=D,e.shadowMap.enabled=!H(),a.enabled=!H(),a.minDistance=D==="inside"?.2:5,Yt(W),ce(),M()},cut(D){ot=D,Yt(W)},night(D){O=D,Qt(),Yt(W)},environment(D){A=D,Qt()},ropes(D){K=D,Yt(W)},png(){return e.render(n,H()?r:s),e.domElement.toDataURL("image/png")},canvas:e.domElement}}var et=i=>document.querySelector(i),pn=i=>[...document.querySelectorAll(i)],s_="tentipi-event-studio-v1",te=kp(),fn=0,Ne=null,r_="tent",kn=null,eo=[],md=[],i_,yi=i=>String(i).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);function nn(i){et("#toast").textContent=i,et("#toast").classList.add("show"),clearTimeout(i_),i_=setTimeout(()=>et("#toast").classList.remove("show"),4500)}try{if(location.hash.startsWith("#config="))te=Hp(location.hash.slice(8)),setTimeout(()=>nn("Den delade konfigurationen \xE4r \xF6ppnad."),1200);else{let i=localStorage.getItem(s_);i&&(te=Us(JSON.parse(i)))}}catch{setTimeout(()=>nn("Det sparade projektet kunde inte \xF6ppnas. Ett nytt exempel visas."),1200)}function no(){let i=new URL(location.href);return i.hash="config="+Gp(te),i.toString()}function Pp(){if(window.parent!==window)try{let i=new URL(document.referrer).origin;window.parent.postMessage({type:"tentipi:configuration",text:Uc(te,no()),url:no()},i)}catch{}}function Lp(){location.hash.startsWith("#config=")&&f_(no());try{localStorage.setItem(s_,JSON.stringify(te)),et("#saved-label").textContent="Sparat p\xE5 din enhet"}catch{et("#saved-label").textContent="Kunde inte spara \xB7 h\xE4mta projektfil"}Pp()}function ye(i){let t;try{t=zp(te,i)}catch(e){return kn?.update(te),nn(e.message),!1}return eo.push(structuredClone(te)),eo.length>40&&eo.shift(),md=[],te=t,Lp(),Dp(),kn?.update(te),!0}function Lr(i){r_=i;for(let t of pn("[data-tab]"))t.setAttribute("aria-selected",t.dataset.tab===i),t.tabIndex=t.dataset.tab===i?0:-1;for(let t of pn("[role=tabpanel]"))t.hidden=t.id!=="panel-"+i;et(".panels").scrollTop=0,i==="summary"&&o_(),i==="layout"&&(io("layout"),l_())}function Ns(i){let t=te.items.find(e=>e.id===i);if(t&&Ne!==i&&innerWidth<761&&et(".stage-shell").scrollIntoView({behavior:"smooth",block:"start"}),Ne=t?i:null,et("#selection").hidden=!t,t){et("#selected-name").textContent=We[t.type].name,et("#selected-angle").textContent="Rotation "+t.rotation+"\xB0";let e=We[t.type].kind;et("#item-size").innerHTML=Object.entries(We).filter(([n,s])=>s.kind===e).map(([n,s])=>`<option value="${n}">${s.name} \xB7 ${Math.round(s.l*100)} \xD7 ${Math.round(s.w*100)} cm</option>`).join(""),et("#item-size").value=t.type,et("#item-x").value=t.x.toFixed(2),et("#item-z").value=t.z.toFixed(2)}kn?.select(i)}function ww(){let i=et("#placed-select");i.innerHTML='<option value="">Ingen markerad</option>'+te.items.map((t,e)=>`<option value="${t.id}">${e+1}. ${We[t.type].name}</option>`).join(""),i.value=Ne||"",i.onchange=()=>Ns(i.value||null)}function a_(){let i=document.activeElement?.getAttribute("data-bay"),t=et("#bay-diagram"),e=[];for(let r=0;r<9;r++){let a=De(r)-Math.PI/9,o=De(r)+Math.PI/9,l=f=>[105+88*Math.sin(f),105+88*Math.cos(f)],c=l(a),h=l(o),d=l((a+o)/2),u={open:"#e8eadf",window:"#c4d2cd",canvas:"#d4b98e",down:"#a0aa92"};e.push(`<path class="bay" role="button" tabindex="0" aria-label="Sektion ${r+1}, ${Lc[te.walls[r]]}" aria-pressed="${fn===r}" data-bay="${r}" d="M105 105 L${c.join(" ")} A88 88 0 0 0 ${h.join(" ")} Z" fill="${fn===r?"#e9c64c":u[te.walls[r]]}"/><text x="${105+(d[0]-105)*.72}" y="${105+(d[1]-105)*.72}">${r+1}</text>`)}t.innerHTML=e.join("")+'<circle cx="105" cy="105" r="26" fill="#f9f8f3"/><text x="105" y="105" style="font-size:9px;letter-spacing:1px">72</text>';for(let r of t.querySelectorAll("[data-bay]")){let a=()=>{fn=Number(r.dataset.bay),a_()};r.addEventListener("click",a),r.addEventListener("keydown",o=>{(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),a())})}let n=zc(te).has(fn);et("#wall-mode").disabled=n,et("#toggle-side-btn").disabled=n,et("#wall-mode").title=n?"\xD6ppen passage till n\xE4sta t\xE4lt. Koppla loss i Layout f\xF6r att \xE4ndra.":"",et("#bay-label").textContent=String(fn+1).padStart(2,"0"),et("#wall-mode").value=te.walls[fn],et("#toggle-side-btn").textContent=(te.walls[fn]==="down"?"F\xE4ll upp sida ":"F\xE4ll ned sida ")+String(fn+1).padStart(2,"0");let s=["window","canvas"].includes(te.walls[fn]);et("#door-btn").disabled=!s,et("#door-btn").textContent=te.doors[fn]?"St\xE4ng mittparti":"\xD6ppna mittparti",i!=null&&t.querySelector('[data-bay="'+i+'"]')?.focus()}function o_(){let i=Nc(te);et("#bill").innerHTML=i.map(e=>`<div class="bill-row"><div>${yi(e.name)}${e.sku?`<small>Artikel ${yi(e.sku)}</small>`:""}${e.note?`<small>${yi(e.note)}</small>`:""}</div><b>${e.qty} st</b></div>`).join("");let t=Dc(te);et("#warnings").innerHTML=t.length?`<div class="warning"><b>${t.length} placeringspunkter att se \xF6ver</b><p>${yi(t[0].text)}</p>Flytta m\xF6blerna i planvyn. Detta \xE4r en \xF6versiktlig kontroll, inte en kontroll av utrymning eller s\xE4kerhetsavst\xE5nd.</div>`:'<div class="warning good">Inga uppt\xE4ckta m\xF6bel\xF6verlappningar. Fria passager, takh\xF6jd och stomavst\xE5nd beh\xF6ver \xE4nd\xE5 granskas.</div>',te.items.some(e=>e.type==="bamse")&&(et("#warnings").innerHTML+='<div class="warning">Bamse max: tillverkarens angivna m\xE5tt \xE4r 150 \xD7 120 \xD7 80 cm. Detaljgeometri, brandskydd, r\xF6kgasventilation och avst\xE5nd ska verifieras av Tentipi f\xF6re anv\xE4ndning.</div>'),et("#header-count").textContent=i.reduce((e,n)=>e+n.qty,0)}function Dp(){l_(),et("#environment-select").value=te.environment,et(".stage-shell").dataset.environment=te.environment,a_(),ww();for(let s of pn("[data-fabric]"))s.setAttribute("aria-pressed",s.dataset.fabric===te.fabric);et("#entrance-check").checked=te.entranceOpen,et("#entrance-check").disabled=te.walls[cs]!=="down",et("#entrance-note").textContent=te.walls[cs]!=="down"?"Fri passage \u2013 sida 04 \xE4r uppf\xE4lld":"\xD6ppna eller st\xE4ng entr\xE9n i sida 04",et("#vent-check").checked=te.ventOpen,et("#floor-check").checked=te.floor,et("#lights-check").checked=te.lights;let i=te.items.filter(s=>We[s.type].kind==="table").length,t=te.items.filter(s=>We[s.type].kind==="bench").length,e=Je(te),n=e.flatMap(s=>s.config.items);et("#layout-count").textContent=e.length>1?`${e.length} t\xE4lt \xB7 ${n.filter(s=>We[s.type].kind==="table").length} bord \xB7 ${n.filter(s=>We[s.type].kind==="bench").length} b\xE4nkar`:`${i} bord \xB7 ${t} b\xE4nkar`,et("#undo-btn").disabled=!eo.length,et("#redo-btn").disabled=!md.length,o_(),Ns(Ne)}function gd(i){Ne=null,ye(t=>lo(t,i))}function l_(){let i=Je(te),t=Jn(te),e=te.site;et("#tent-switcher").hidden=i.length<2,et("#active-tent").innerHTML=i.map(c=>`<option value="${c.id}">${yi(c.name)}</option>`).join(""),et("#active-tent").value=t.id,et("#site-total").textContent=i.length+" / 6 t\xE4lt",et("#tent-name").value=t.name,et("#tent-x").value=t.x.toFixed(1),et("#tent-z").value=t.z.toFixed(1),et("#tent-rotation").value=t.rotation.toFixed(1),et("#attach-bay").innerHTML=Array.from({length:9},(c,h)=>`<option value="${h}">Sida ${String(h+1).padStart(2,"0")}</option>`).join(""),et("#attach-bay").value=fn;let n=i.filter(c=>!Kn(e??{links:[]},t.id).has(c.id));et("#connect-target").innerHTML=n.length?n.map(c=>`<option value="${c.id}">${yi(c.name)}</option>`).join(""):'<option value="">Ingen frist\xE5ende grupp</option>',et("#connect-existing").disabled=!n.length,et("#remove-tent").disabled=i.length<2,et("#add-linked-tent").disabled=et("#add-free-tent").disabled=i.length>=6,et("#site-links").innerHTML=(e?.links??[]).map((c,h)=>`<div class="site-link"><b>${yi(i.find(d=>d.id===c.a).name)} \u2194 ${yi(i.find(d=>d.id===c.b).name)}</b><div><select data-link-closure="${h}" aria-label="Sidost\xE4ngning koppling ${h+1}"><option value="open">\xD6ppen sidopassage</option><option value="canvas">Midfill \xB7 duk</option><option value="window">Midfill \xB7 f\xF6nster</option></select><button data-disconnect="${h}" aria-label="Koppla loss koppling ${h+1}">Koppla loss</button></div></div>`).join("")||'<p class="helper">Inga sammankopplingar \xE4nnu. Koppla p\xE5 ett t\xE4lt eller v\xE4lj ett layoutf\xF6rslag.</p>';for(let c of pn("[data-link-closure]"))c.value=e.links[Number(c.dataset.linkClosure)].closure,c.onchange=()=>ye(h=>h.site.links[Number(c.dataset.linkClosure)].closure=c.value);for(let c of pn("[data-disconnect]"))c.onclick=()=>ye(h=>Zp(h,Number(c.dataset.disconnect)));let s=Fc(te);et("#layout-warnings").innerHTML=s.length?'<div class="warning">'+yi(s[0].text)+"</div>":"";let r=Gc(te),a=Math.min(270/r.width,185/r.depth),o=c=>[150+(c.x-r.x)*a,110+(c.z-r.z)*a],l=(e?.links??[]).map(c=>{let h=o(i.find(u=>u.id===c.a)),d=o(i.find(u=>u.id===c.b));return`<line x1="${h[0]}" y1="${h[1]}" x2="${d[0]}" y2="${d[1]}" stroke="#a9af97" stroke-width="14"/>`}).join("");et("#site-map").innerHTML=l+i.map(c=>{let h=o(c),d=Array.from({length:9},(u,f)=>{let p=De(f)-Math.PI/9;return o(Fs({x:Math.sin(p)*5.15,z:Math.cos(p)*5.15},c)).join(",")}).join(" ");return`<g role="button" tabindex="0" aria-label="V\xE4lj ${yi(c.name)}" data-select-tent="${c.id}"><polygon points="${d}" fill="${c.id===t.id?"#efd15e":"#d1d8c2"}" stroke="#718368"/><text x="${h[0]}" y="${h[1]+4}">${yi(c.name)}</text></g>`}).join("");for(let c of pn("[data-select-tent]"))c.onclick=()=>gd(c.dataset.selectTent),c.onkeydown=h=>{(h.key==="Enter"||h.key===" ")&&(h.preventDefault(),gd(c.dataset.selectTent))}}et("#active-tent").onchange=i=>gd(i.target.value);for(let i of pn("[data-site-preset]"))i.onclick=()=>{Ne=null,ye(t=>$p(t,i.dataset.sitePreset)),io("layout"),nn("Layouten \xE4r skapad. V\xE4lj ett t\xE4lt f\xF6r att anpassa det.")};et("#add-linked-tent").onclick=()=>{Ne=null;let i=Number(et("#attach-bay").value);ye(t=>Td(t,{linked:!0,bay:i})),io("layout")};et("#add-free-tent").onclick=()=>{Ne=null,ye(i=>Td(i,{linked:!1})),io("layout")};et("#apply-tent-pose").onclick=()=>{let i=et("#tent-name").value,t=et("#tent-x").value,e=et("#tent-z").value,n=et("#tent-rotation").value;if(![t,e,n].every(s=>s.trim()&&Number.isFinite(Number(s))))return nn("Ange X, Z och rotation.");ye(s=>{let r=hs(s),a=r.activeId;Vc(s,a,Number(t),Number(e),Number(n)),r.tents.find(o=>o.id===a).name=i})};et("#remove-tent").onclick=()=>{Ne=null,ye(i=>qp(i,Jn(i).id))};et("#connect-existing").onclick=()=>{let i=et("#connect-target").value,t=Number(et("#attach-bay").value);ye(e=>Yp(e,Jn(e).id,i,t))};et("#edit-tent").onclick=()=>{Lr("furniture"),io("plan")};et("#item-size").onchange=i=>{let t=i.target.value;Ne&&Object.hasOwn(We,t)&&ye(e=>e.items.find(n=>n.id===Ne).type=t)};et("#catalog").innerHTML=Object.entries(We).map(([i,t])=>`<article class="catalog-item"><img src="${t.image}" alt="${t.name}" width="75" height="65" loading="lazy"><div><h3>${t.name}</h3><small>${t.illustrative?"150 \xD7 120 \xD7 80 cm \xB7 principskiss":`${Math.round(t.l*100)} \xD7 ${Math.round(t.w*100)} \xD7 ${Math.round(t.h*100)} cm`}</small><small>Art. ${t.sku} <button class="tiny-link" data-product="${i}">Info \u2197</button></small></div><button data-add="${i}" aria-label="L\xE4gg till ${t.name}">+</button></article>`).join("");for(let i of pn("[data-tab]"))i.onclick=()=>Lr(i.dataset.tab),i.onkeydown=t=>{if(["ArrowLeft","ArrowRight"].includes(t.key)){t.preventDefault();let e=["tent","furniture","summary","layout"],n=(e.indexOf(r_)+(t.key==="ArrowRight"?1:3))%4;Lr(e[n]),et("[data-tab="+e[n]+"]").focus()}};for(let i of pn("[data-fabric]"))i.onclick=()=>ye(t=>t.fabric=i.dataset.fabric);et("#environment-select").onchange=i=>ye(t=>t.environment=i.target.value);et("#wall-mode").onchange=i=>ye(t=>{t.walls[fn]=i.target.value,t.doors[fn]=!1});function c_(i){if(zc(te).has(i))return nn("Denna sida \xE4r \xF6ppen mot n\xE4sta t\xE4lt. \xC4ndra kopplingen i Layout.");fn=i,Lr("tent"),ye(t=>{t.walls[i]=t.walls[i]==="down"?"open":"down",t.doors[i]=!1})}et("#toggle-side-btn").onclick=()=>c_(fn);et("#vent-check").onchange=i=>ye(t=>t.ventOpen=i.target.checked);et("#entrance-check").onchange=i=>ye(t=>t.entranceOpen=i.target.checked);function h_(i){["window","canvas"].includes(te.walls[i])&&(fn=i,ye(t=>t.doors[i]=!t.doors[i]))}et("#door-btn").onclick=()=>h_(fn);for(let[i,t]of[["all-open","open"],["all-window","window"],["all-down","down"]])et("#"+i).onclick=()=>ye(e=>{e.walls.fill(t),e.doors.fill(!1)});for(let i of pn("[data-preset]"))i.onclick=()=>{ye(t=>t.items=Sd(i.dataset.preset)),Ne=null,nn("M\xF6bleringen \xE4r uppdaterad. Du kan \xE5ngra \xE4ndringen.")};et("#empty-layout").onclick=()=>ye(i=>i.items=[]);function Tw(i){if(te.items.length>=90)return nn("H\xF6gst 90 m\xF6bler i ett projekt.");let t=0,e=0;for(let s=0;s<100;s++){let r=s*2.4,a=Math.sqrt(s)*.36;t=Math.cos(r)*a,e=Math.sin(r)*a;let o=ao(i,t,e),l={...te,items:[...te.items,o]};if(!Dc(l).some(c=>c.ids.includes(o.id)))break}let n=Ur();ye(s=>s.items.push({id:n,type:i,x:Math.round(t*20)/20,z:Math.round(e*20)/20,rotation:0})),Ns(n),nn("Tillagd. Dra m\xF6beln eller justera koordinaterna.")}for(let i of pn("[data-add]"))i.onclick=()=>Tw(i.dataset.add);et("#floor-check").onchange=i=>ye(t=>t.floor=i.target.checked);et("#lights-check").onchange=i=>ye(t=>t.lights=i.target.checked);et("#deselect").onclick=()=>Ns(null);et("#rotate-item").onclick=()=>{Ne&&ye(i=>{let t=i.items.find(e=>e.id===Ne);t.rotation+=15})};et("#delete-item").onclick=()=>{if(Ne){let i=Ne;Ne=null,ye(t=>t.items=t.items.filter(e=>e.id!==i))}};et("#clone-item").onclick=()=>{if(!Ne||te.items.length>=90)return;let i=Vp(te.items.find(t=>t.id===Ne));ye(t=>t.items.push(i))&&Ns(i.id)};et("#apply-position").onclick=()=>{if(Ne)try{let i=bd(et("#item-x").value),t=bd(et("#item-z").value);ye(e=>Object.assign(e.items.find(n=>n.id===Ne),{x:i,z:t}))&&nn("M\xF6belns position \xE4r sparad.")}catch(i){nn(i.message)}};for(let i of["x","z"])et("#item-"+i).onkeydown=t=>{t.key==="Enter"&&(t.preventDefault(),et("#apply-position").click())};function Np(i=!1){let t=i?md:eo,e=i?eo:md;t.length&&(e.push(structuredClone(te)),te=t.pop(),Ne=null,Lp(),Dp(),kn?.update(te))}et("#undo-btn").onclick=()=>Np();et("#redo-btn").onclick=()=>Np(!0);document.addEventListener("keydown",i=>{i.target.matches("input,textarea,select,[contenteditable]")||et("dialog[open]")||((i.ctrlKey||i.metaKey)&&i.key.toLowerCase()==="z"&&(i.preventDefault(),Np(i.shiftKey)),Ne&&i.key.toLowerCase()==="r"&&et("#rotate-item").click(),Ne&&(i.key==="Delete"||i.key==="Backspace")&&(i.preventDefault(),et("#delete-item").click()))});function u_(){Lr("summary"),innerWidth<761&&et("#panel-summary").scrollIntoView({behavior:"smooth",block:"start"})}et("#summary-btn").onclick=u_;et("#footer-summary").onclick=u_;async function d_(i,t){try{await navigator.clipboard.writeText(i),nn(t)}catch{nn("Kopiera texten i f\xE4ltet manuellt."),et("#request-text").value=i,et("#request-dialog").open||et("#request-dialog").showModal(),et("#request-text").focus(),et("#request-text").select()}}et("#share-btn").onclick=async()=>{let i=no();f_(i),await d_(i,"Delningsl\xE4nken \xE4r kopierad. Den inneh\xE5ller bara konfigurationen.")};function f_(i){window.history.replaceState(null,"",i)}function p_(i,t,e="application/json"){let n=document.createElement("a"),s=URL.createObjectURL(new Blob([i],{type:e}));n.href=s,n.download=t,n.click(),setTimeout(()=>URL.revokeObjectURL(s),3e3)}et("#save-btn").onclick=()=>p_(JSON.stringify(Us(te),null,2),"Tentipi-Stratus72-projekt.json");et("#import-btn").onclick=()=>et("#import-file").click();et("#import-file").onchange=async i=>{let t=i.target.files[0];if(t){try{if(t.size>25e4)throw Error("Projektfilen \xE4r f\xF6r stor.");let e=Us(JSON.parse(await t.text()));ye(n=>{for(let s of Object.keys(n))delete n[s];Object.assign(n,e)}),Ns(null),nn("Projektet \xE4r \xF6ppnat.")}catch(e){nn(e.message)}i.target.value=""}};et("#image-btn").onclick=()=>{if(!kn)return;let i=document.createElement("a");i.href=kn.png(),i.download="Tentipi-Stratus72-visualisering.png",i.click()};et("#pdf-btn").onclick=()=>{let i=et("#print-report");if(i.innerHTML="<h1>Tentipi \xB7 Stratus 72 med WallFlex</h1><p>Visuell konfigurationsf\xF6rfr\xE5gan \xB7 "+new Date().toLocaleDateString("sv-SE")+"</p>",kn){let n=document.createElement("img");n.src=kn.png(),i.append(n)}let t=document.createElement("pre");t.textContent=Uc(te),i.append(t);let e=document.createElement("a");e.href=no(),e.textContent="\xD6ppna den valda konfigurationen",i.append(e),window.print()};et("#request-btn").onclick=()=>{et("#request-text").value=Uc(te,no()),et("#embed-note").hidden=window.parent===window,et("#request-dialog").showModal(),Pp()};et("#copy-request").onclick=()=>d_(et("#request-text").value,"Underlaget \xE4r kopierat.");et("#request-download").onclick=()=>p_(et("#request-text").value,"Tentipi-Stratus72-forfragan.txt","text/plain");for(let i of pn(".close-modal"))i.onclick=()=>i.closest("dialog").close();for(let i of pn("dialog"))i.addEventListener("click",t=>{if(t.target===i){let e=i.getBoundingClientRect();(t.clientX<e.left||t.clientX>e.right||t.clientY<e.top||t.clientY>e.bottom)&&i.close()}});var m_='<span class="eyebrow">VERKLIGA PRODUKTER. TYDLIGA UNDERLAG.</span><h2>L\xE4r k\xE4nna Stratus 72.</h2><p>En visuell planering av ett eller flera Stratus 72 med LinkFlex och WallFlex och Tentipis eventinredning. Verifierade ytterdimensioner och m\xF6belm\xE5tt kombineras med illustrativ detaljgeometri. Detta \xE4r ingen CAD-modell eller s\xE4kerhetsprojektering.</p><img src="reference-wallflex-diagram.webp" alt="Tentipis principskiss: WallFlex enkelv\xE4gg med tre partier och \xE4ndutfyllnader"><div class="source-card"><h3>Stratus 72</h3><p>\xD8 10,3 m med nedf\xE4llda sidor och 13 m med uppf\xE4llda sidor. Totalh\xF6jd 7,4 m; dukens topp 6,8 m. Nio huvudst\xE4nger och 18 sekund\xE4rst\xE4nger ing\xE5r enligt tillverkaren. Ingen mittmast. Lyftst\xF6den visas vid uppvikta sidor. Stomdetaljer och placering av extra st\xF6d beh\xF6ver verifieras mot monteringsunderlaget. Tillverkarens t\xE4ckta yta \xE4r 83 respektive 132 m\xB2. Den f\xF6renklade niokantiga ritningen ska inte anv\xE4ndas f\xF6r att h\xE4rleda exakta golvareor.</p><a href="https://tentipi.com/products/stratus-72" target="_blank" rel="noopener">Officiell produktinformation \u2197</a> \xB7 <a href="https://www.oeventura.de/mediafiles/Datenblaetter/Tentipi%20Event/Stratus_2026_product%20sheet.pdf" target="_blank" rel="noopener">Tillverkarens produktblad 2026 \u2197</a></div><div class="source-card"><h3>WallFlex</h3><p>Modul\xE4ra duk- och f\xF6nsterv\xE4ggar under det uppf\xE4llda br\xE4ttet. Mittpartiet kan rullas upp. Nio enkelv\xE4ggar ger ett helt varv. \xC4ndutfyllnader och inf\xE4stningar beh\xF6ver verifieras i slutlig offert. Exakta v\xE4ggbredder och stom-/inf\xE4stningspunkter har inte publicerats i v\xE5ra underlag. Tr\xE4d\xF6rr s\xE4ljs inte av Tentipi p\xE5 den svenska marknaden.</p><a href="https://tentipi.com/products/wallflex" target="_blank" rel="noopener">Om WallFlex \u2197</a></div><div class="source-card"><h3>LinkFlex & layout</h3><p>LinkFlex anv\xE4nder kopplingsst\xE4nger, dukar och sp\xE4nnband. Tentipi anger ett kit f\xE4rre \xE4n antalet t\xE4lt i en sammanh\xE4ngande layout. Tre t\xE4lt i triangel anv\xE4nder tv\xE5 kit. Midfill och utfyllnader st\xE4nger de yttre sidorna mellan t\xE4lt; de ers\xE4tter inte takkopplingen. Layoutf\xF6rslagen f\xF6ljer Tentipis exempel med tv\xE5 t\xE4lt, tre i triangel/b\xE5ge, fyra och sex. Centrumavst\xE5nd och detaljgeometri \xE4r visuella tolkningar, inte monteringsm\xE5tt.</p><a href="https://tentipi.com/en/products/linkflex" target="_blank" rel="noopener">Tillverkarens kopplingar och layoutexempel \u2197</a></div><div class="source-card"><h3>Inredning i skala</h3><p>Bord 200: 198 \xD7 70 \xD7 73 cm. B\xE4nk 200: 198 \xD7 23 \xD7 44 cm. Bord/b\xE4nk 150 \xE4r 155 cm l\xE5nga. M\xE5tten kommer fr\xE5n Tentipis produktsidor. Bamse max: tillverkarens angivna m\xE5tt \xE4r 150 \xD7 120 \xD7 80 cm. Detaljgeometrin \xE4r illustrativ. Fem rullar Eventmatta Sand \xE4r rekommenderat grundpaket, inte en utf\xE4stelse om t\xE4ckning under ut\xF6kat br\xE4tte.</p></div><div class="source-card"><h3>V\xE4v, kapacitet och vikt</h3><p>Beige och naturvit duk finns f\xF6r Stratus. V\xE4vtyp v\xE4ljs och bekr\xE4ftas med Tentipi. Kapacitet beror p\xE5 dukl\xE4ge och m\xF6blering; 72 \xE4r ett modellnamn, inte en godk\xE4nd personkapacitet f\xF6r varje layout. Vikt och byggtid skiljer mellan produktblad och webbsida och anv\xE4nds d\xE4rf\xF6r inte som ett sammanslaget v\xE4rde h\xE4r.</p></div><p>Visningsmilj\xF6erna \xE4r fotografiska panoraman fr\xE5n Poly Haven (CC0), kombinerade med marktexturer i skala. De ing\xE5r inte som produkter i offerten. <a href="environment-sources.json" target="_blank" rel="noopener">Milj\xF6ernas bildk\xE4llor</a>. Underlag kontrollerade 2 november 2026. Foton och logotyp: Tentipi och respektive fotograf enligt originalsidans kreditering. Referensbilder kan visa sammankopplade t\xE4lt och inredning fr\xE5n andra leverant\xF6rer.</p>';function _d(i){et("#info-content").innerHTML=i,et("#info-dialog").showModal()}et("#sources-btn").onclick=()=>_d(m_);for(let i of pn("[data-info]"))i.onclick=()=>_d(m_);et("#reference-btn").onclick=()=>_d('<span class="eyebrow">FR\xC5N VERKLIGHETEN</span><h2>Det \xE4r k\xE4nslan som r\xE4knas.</h2><img class="photo" src="reference-stratus72-exterior.webp" alt="Stratus 72 med uppf\xE4llt br\xE4tte i verklig eventmilj\xF6"><img class="photo" src="reference-stratus72-interior.webp" alt="Inspiration: m\xF6blering och ljus inne i en eventmilj\xF6 med Stratus"><p>Originalfoton fr\xE5n Tentipis produktsida. Exteri\xF6r: Great Ocean Tipis / Tony Evans. Interi\xF6r: Tentipis inspirationsbild, fotograf ej angiven i produktunderlaget. Referensmilj\xF6erna kan visa flera sammankopplade t\xE4lt och annan dekoration. De motsvarar inte automatiskt din valda konfiguration.</p><a href="https://tentipi.com/products/stratus-72" target="_blank" rel="noopener">Uppt\xE4ck Stratus 72 hos Tentipi \u2197</a> \xB7 <a href="asset-sources.json" target="_blank" rel="noopener">Bildk\xE4llor och kreditering \u2197</a>');for(let i of pn("[data-product]"))i.onclick=()=>{let t=We[i.dataset.product];_d(`<span class="eyebrow">TENTIPI EVENT \xB7 ARTIKEL ${t.sku}</span><h2>${t.name}</h2><img src="${t.image}" alt="${t.name}"><p>${t.illustrative?"Kompatibel med Stratus 72 enligt Tentipi. Tillverkarens angivna m\xE5tt \xE4r 150 \xD7 120 \xD7 80 cm. Modellen visar en illustrativ detaljgeometri. Brandskydd, underlag och avst\xE5nd m\xE5ste bekr\xE4ftas innan t\xE4ltet tas i bruk.":`Verifierade produktm\xE5tt: ${t.l*100} \xD7 ${t.w*100} \xD7 ${t.h*100} cm. Utf\xF6randet \xE4r en visuell tolkning av originalprodukten.`}</p><a href="https://tentipi.com/products/${t.handle}" target="_blank" rel="noopener">Se originalprodukten \u2197</a>`)};try{kn=n_(et("#scene"),{select:Ns,move:(i,t,e)=>ye(n=>{let s=n.items.find(r=>r.id===i);s&&(s.x=t,s.z=e)}),rotate:(i,t)=>ye(e=>{let n=e.items.find(s=>s.id===i);n&&(n.rotation=t)}),context:i=>{Ns(i),et("#item-size").focus(),nn("V\xE4lj en verklig Tentipi-storlek f\xF6r den markerade m\xF6beln.")},tent:gd,moveTent:(i,t,e)=>{Ne=null,ye(n=>{Vc(n,i,t,e),lo(n,i)})},door:h_,bay:c_,vent:()=>ye(i=>i.ventOpen=!i.ventOpen),entrance:()=>ye(i=>i.entranceOpen=!i.entranceOpen)}),et("#scene .loading").remove(),kn.update(te)}catch(i){console.error(i),et("#scene").innerHTML='<div class="loading"><b>3D kunde inte starta i den h\xE4r webbl\xE4saren.</b><span>Prova en aktuell webbl\xE4sare med WebGL aktiverat.</span><p>Produktval, koordinater och exportsammanst\xE4llning fungerar \xE4nd\xE5.</p></div>',nn("3D-visningen \xE4r inte tillg\xE4nglig. \xD6vriga produktval fungerar.")}function io(i){if(!kn)return nn("3D-visningen \xE4r inte tillg\xE4nglig.");for(let t of pn("[data-view]"))t.setAttribute("aria-pressed",t.dataset.view===i);kn.view(i),et("#view-help").textContent=i==="layout"?"Dra t\xE4lt f\xF6r att flytta gruppen \xB7 v\xE4lj f\xF6r att inreda":i==="plan"?"H\xE5ll v\xE4nster f\xF6r att flytta \xB7 dra gult handtag f\xF6r att rotera \xB7 h\xF6gerklicka f\xF6r storlek":i==="inside"?"Se dig omkring genom att dra \xB7 klicka p\xE5 WallFlex f\xF6r att \xF6ppna":"Klicka p\xE5 duken f\xF6r att f\xE4lla upp/ned \xB7 dra f\xF6r att rotera"}for(let i of pn("[data-view]"))i.onclick=()=>{i.dataset.view==="layout"?Lr("layout"):io(i.dataset.view)};et("#night-btn").onclick=()=>{let i=et("#night-btn"),t=i.getAttribute("aria-pressed")!=="true";i.setAttribute("aria-pressed",t),et("#light-label").textContent=t?"Kv\xE4llsljus":"Dagsljus",et(".stage-shell").classList.toggle("night",t),kn?.night(t)};et("#cut-btn").onclick=()=>{let i=et("#cut-btn"),t=i.getAttribute("aria-pressed")!=="true";i.setAttribute("aria-pressed",t),kn?.cut(t)};et("#fullscreen-btn").onclick=async()=>{try{document.fullscreenElement?await document.exitFullscreen():await et(".stage-shell").requestFullscreen()}catch{nn("Helsk\xE4rm st\xF6ds inte h\xE4r.")}};window.addEventListener("message",i=>{if(!(window.parent===window||i.source!==window.parent||i.data?.type!=="tentipi:request-configuration"))try{i.origin===new URL(document.referrer).origin&&Pp()}catch{}});Dp();Lp();Lr("tent");
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
