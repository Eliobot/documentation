"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5992],{4021:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var s=i(4848),t=i(8453);const l={last_modified_on:"2024-02-26",title:"Boucles",description:"Elioblocs - Boucles"},o=void 0,c={id:"elioblocs/blocs/loops",title:"Boucles",description:"Elioblocs - Boucles",source:"@site/docs/elioblocs/blocs/loops.md",sourceDirName:"elioblocs/blocs",slug:"/elioblocs/blocs/loops",permalink:"/docs/elioblocs/blocs/loops",draft:!1,unlisted:!1,editUrl:"https://github.com/Eliobot/documentation/tree/main/docs/elioblocs/blocs/loops.md",tags:[],version:"current",frontMatter:{last_modified_on:"2024-02-26",title:"Boucles",description:"Elioblocs - Boucles"},sidebar:"docSidebar",previous:{title:"Conditions",permalink:"/docs/elioblocs/blocs/conditions"},next:{title:"Maths",permalink:"/docs/elioblocs/blocs/maths"}},r={},d=[{value:"R\xe9p\xe9ter X fois",id:"r\xe9p\xe9ter-x-fois",level:2},{value:"R\xe9p\xe9ter tant que",id:"r\xe9p\xe9ter-tant-que",level:2},{value:"Tant que",id:"tant-que",level:4},{value:"Jusqu&#39;\xe0 ce que",id:"jusqu\xe0-ce-que",level:4},{value:"Compter avec <code>i</code>",id:"compter-avec-i",level:2},{value:"D\xe9tail",id:"d\xe9tail",level:4},{value:"Pour <code>i</code> dans la liste",id:"pour-i-dans-la-liste",level:2},{value:"Quitter la boucle ou Passer \xe0 l&#39;it\xe9ration de boucle suivante",id:"quitter-la-boucle-ou-passer-\xe0-lit\xe9ration-de-boucle-suivante",level:2}];function a(e){const n={blockquote:"blockquote",code:"code",h2:"h2",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Les boucles permettent de r\xe9p\xe9ter des actions un certain nombre de fois o\xf9 jusqu'\xe0 ce qu'une condition soit remplie (ou pas). Elles sont tr\xe8s utiles pour automatiser des t\xe2ches r\xe9p\xe9titives."}),"\n",(0,s.jsx)(n.h2,{id:"r\xe9p\xe9ter-x-fois",children:"R\xe9p\xe9ter X fois"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"For loop",src:i(2326).A+"",width:"310",height:"222"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Type"})," : Commande"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"D\xe9finition"})," :"]}),"\n",(0,s.jsx)(n.p,{children:"Cette boucle r\xe9p\xe8te un certain nombre de fois les blocs qu'elle contient. Pour d\xe9finir le nombre de r\xe9p\xe9titions, on peut directement \xe9crire le nombre de fois souhait\xe9 dans la case ou utiliser un bloc contenant une valeur."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Utilisation"})," :"]}),"\n",(0,s.jsx)(n.p,{children:"Si on veut que Eliobot avance 5 fois d'une case."}),"\n",(0,s.jsx)(n.h2,{id:"r\xe9p\xe9ter-tant-que",children:"R\xe9p\xe9ter tant que"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"While loop",src:i(9098).A+"",width:"444",height:"218"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Type"})," : Commande"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"D\xe9finition"})," :"]}),"\n",(0,s.jsx)(n.p,{children:"Cette boucle est compos\xe9e de deux parties :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Condition"})," : tant/jusqu'\xe0 ce que cette condition est/soit vraie."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Condition \xe0 v\xe9rifier"})," : la condition \xe0 v\xe9rifier \xe0 chaque tour de boucle."]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.h4,{id:"tant-que",children:"Tant que"}),"\n",(0,s.jsx)(n.p,{children:"Cette boucle r\xe9p\xe8te les blocs qu'elle contient tant que la condition est vraie."}),"\n",(0,s.jsx)(n.h4,{id:"jusqu\xe0-ce-que",children:"Jusqu'\xe0 ce que"}),"\n",(0,s.jsx)(n.p,{children:"Cette boucle r\xe9p\xe8te les blocs qu'elle contient jusqu'\xe0 ce que la condition soit vraie."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Utilisation"})," :"]}),"\n",(0,s.jsx)(n.p,{children:"Si on veut que Eliobot avance tant qu'un capteur ne d\xe9tecte pas un obstacle."}),"\n",(0,s.jsxs)(n.h2,{id:"compter-avec-i",children:["Compter avec ",(0,s.jsx)(n.code,{children:"i"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"For i loop",src:i(2524).A+"",width:"716",height:"218"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Type"})," : Commande"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"D\xe9finition"})," :"]}),"\n",(0,s.jsxs)(n.p,{children:["Cette boucle permet de r\xe9p\xe9ter un certain nombre de fois les blocs qu'elle contient en utilisant une variable ",(0,s.jsx)(n.code,{children:"i"})," qui va de 0 \xe0 la valeur d\xe9finie. Cette variable ",(0,s.jsx)(n.code,{children:"i"})," est incr\xe9ment\xe9e \xe0 chaque tour de boucle par la derni\xe8re valeur."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.h4,{id:"d\xe9tail",children:"D\xe9tail"}),"\n",(0,s.jsx)("img",{src:i(6290).A,style:{width:"50%",verticalAlign:"middle"},alt:"Example for"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Valeur de d\xe9but des it\xe9rations."}),"\n",(0,s.jsx)(n.li,{children:"Valeur de fin des it\xe9rations."}),"\n",(0,s.jsxs)(n.li,{children:["Incr\xe9mentation de la variable ",(0,s.jsx)(n.code,{children:"i"})," \xe0 chaque tour de boucle."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Utilisation"})," :"]}),"\n",(0,s.jsx)(n.p,{children:"Si on veut que Eliobot avance 5 fois d'une case en affichant le num\xe9ro de la case."}),"\n",(0,s.jsxs)(n.h2,{id:"pour-i-dans-la-liste",children:["Pour ",(0,s.jsx)(n.code,{children:"i"})," dans la liste"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"For j in list loop",src:i(9806).A+"",width:"700",height:"218"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Type"})," : Commande"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"D\xe9finition"})," :"]}),"\n",(0,s.jsx)(n.p,{children:"Cette boucle permet de r\xe9p\xe9ter les blocs qu'elle contient le nombre de fois qu'il y a d'\xe9l\xe9ments dans une liste."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Utilisation"})," :"]}),"\n",(0,s.jsx)(n.p,{children:"Si on veux parcourir une liste de valeurs et les afficher une par une."}),"\n",(0,s.jsx)(n.h2,{id:"quitter-la-boucle-ou-passer-\xe0-lit\xe9ration-de-boucle-suivante",children:"Quitter la boucle ou Passer \xe0 l'it\xe9ration de boucle suivante"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Exit loop",src:i(5481).A+"",width:"406",height:"104"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Type"})," : Commande"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"D\xe9finition"})," :"]}),"\n",(0,s.jsx)(n.p,{children:"Ce bloc \xe0 deux utilisations :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Quitter la boucle"})," : permet de quitter la boucle actuelle."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Passer \xe0 l'it\xe9ration suivante"})," : permet de passer \xe0 l'it\xe9ration suivante de la boucle actuelle."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Utilisation"})," :"]}),"\n",(0,s.jsxs)(n.p,{children:["Si on veut sortir d'une boucle infinie sous certaine condition ou sauter une iteration de boucle dans une boucle ",(0,s.jsx)(n.code,{children:"R\xe9p\xe9ter X fois"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},6290:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/example-boucle-for-ce23bdac93aa485cbb45bc5954ff5d88.jpg"},9806:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/boucle-for-liste-2689898713ad0a2aed45dc30c3fd264b.png"},2524:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/boucle-for-68f1e5ccfe1ecd4a85991627ed407813.png"},2326:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/boucle-repeter-1fdd736262fcb9e306cf15087d29d98c.png"},9098:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/boucle-while-0103349c4e83f008d73e469954fecdb8.png"},5481:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/quitter-boucle-60009e8e5f31d8c70323043fff0e6069.png"},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>c});var s=i(6540);const t={},l=s.createContext(t);function o(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);