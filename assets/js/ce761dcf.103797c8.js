"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2052],{5132:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var n=o(4848),r=o(8453);const s={last_modified_on:"2024-10-31",title:"Module Servomoteur",description:"Documentation du backpack Servomoteur"},i=void 0,c={id:"backpacks/servo-motor",title:"Module Servomoteur",description:"Documentation du backpack Servomoteur",source:"@site/docs/backpacks/servo-motor.md",sourceDirName:"backpacks",slug:"/backpacks/servo-motor",permalink:"/docs/backpacks/servo-motor",draft:!1,unlisted:!1,editUrl:"https://github.com/Eliobot/documentation/tree/main/docs/backpacks/servo-motor.md",tags:[],version:"current",frontMatter:{last_modified_on:"2024-10-31",title:"Module Servomoteur",description:"Documentation du backpack Servomoteur"},sidebar:"docSidebar",previous:{title:"Capteur Ultrasonique",permalink:"/docs/backpacks/ultrasonic"},next:{title:"Module Grove",permalink:"/docs/backpacks/grove-module"}},u={},a=[{value:"Documentation du Backpack Servomoteur",id:"documentation-du-backpack-servomoteur",level:2},{value:"1. <strong>Introduction</strong>",id:"1-introduction",level:3},{value:"2. <strong>Caract\xe9ristiques Techniques</strong>",id:"2-caract\xe9ristiques-techniques",level:3},{value:"3. <strong>Configuration des Broches</strong>",id:"3-configuration-des-broches",level:3},{value:"4. <strong>Utilisation de Servomoteur avec CircuitPython</strong>",id:"4-utilisation-de-servomoteur-avec-circuitpython",level:3}];function d(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"documentation-du-backpack-servomoteur",children:"Documentation du Backpack Servomoteur"}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsxs)(t.h3,{id:"1-introduction",children:["1. ",(0,n.jsx)(t.strong,{children:"Introduction"})]}),"\n",(0,n.jsx)(t.p,{children:"Le backpack Servomoteur est un module d'extension qui permet de contr\xf4ler jusqu'\xe0 trois servomoteurs sur trois broches de sortie distinctes.\nLes servomoteurs sont des actionneurs rotatifs qui peuvent \xeatre utilis\xe9s pour contr\xf4ler la position angulaire d'un axe.\nIls sont couramment utilis\xe9s dans les projets de robotique, de mod\xe9lisme et d'automatisation."}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsxs)(t.h3,{id:"2-caract\xe9ristiques-techniques",children:["2. ",(0,n.jsx)(t.strong,{children:"Caract\xe9ristiques Techniques"})]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Nombre de Servomoteurs"})," : 3"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Tension de Fonctionnement"})," : 3,3V \xe0 5V"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Interface"})," : PWM (Pulse Width Modulation)"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Plage de Rotation"})," : 0 \xe0 180 degr\xe9s"]}),"\n"]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsxs)(t.h3,{id:"3-configuration-des-broches",children:["3. ",(0,n.jsx)(t.strong,{children:"Configuration des Broches"})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Brochage du Servomoteur",src:o(8532).A+"",width:"1920",height:"1080"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsxs)(t.h3,{id:"4-utilisation-de-servomoteur-avec-circuitpython",children:["4. ",(0,n.jsx)(t.strong,{children:"Utilisation de Servomoteur avec CircuitPython"})]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Installation de la Biblioth\xe8que"})," :"]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Aucune installation de biblioth\xe8que n'est requise pour utiliser le backpack Servomoteur dans Elioblocs."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Exemple de Code"})," :"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"import board\nimport pwmio\nimport time\n\npwm = pwmio.PWMOut(board.IO15, frequency=50)\n\n\nwhile True:\n    pwm.duty_cycle = int(((90 / 180.0) * (2750 - 750) + 750) * pwm.frequency * 65535 / 1000000)\n    time.sleep(1)\n\n    pwm.duty_cycle = int(((0 / 180.0) * (2750 - 750) + 750) * pwm.frequency * 65535 / 1000000)\n    time.sleep(1)\n"})}),"\n",(0,n.jsx)(t.hr,{})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8532:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/servo_pinout-7ed1564682badda5d522537acf5429a0.jpg"},8453:(e,t,o)=>{o.d(t,{R:()=>i,x:()=>c});var n=o(6540);const r={},s=n.createContext(r);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);