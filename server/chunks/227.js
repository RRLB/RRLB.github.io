exports.id=227,exports.ids=[227],exports.modules={4227:(e,s,l)=>{"use strict";l.r(s),l.d(s,{default:()=>App});var r=l(997),a=l(6689),d=l(5675),i=l.n(d),c=l(1664),t=l.n(c),n=l(6904),o=l(5396),h=l(9132),x=l(1163);let components_Navbar=()=>{let[e,s]=(0,a.useState)(!1),[l,d]=(0,a.useState)(!1),[c,m]=(0,a.useState)("#131f29"),[j,u]=(0,a.useState)("#cbd9ec"),p=(0,x.useRouter)();(0,a.useEffect)(()=>{"/shg"===p.asPath||"/docform"===p.asPath||"/netflix"===p.asPath||"/crypto"===p.asPath?m("transparent"):m("#131f29"),u("#cbd9ec")},[p]);let handleNav=()=>{s(!e)};return(0,a.useEffect)(()=>{let handleShadow=()=>{window.scrollY>=90?d(!0):d(!1)};return window.addEventListener("scroll",handleShadow),()=>{window.removeEventListener("scroll",handleShadow)}},[]),(0,r.jsxs)("div",{style:{backgroundColor:`${c}`},id:"navbar",className:`navbar ${l?"fixed w-full h-20 shadow-xl shadow-gray-950 ":"fixed w-full h-20"}`,children:[(0,r.jsxs)("div",{className:"flex justify-between items-center w-full h-full px-2 2xl:px-16",children:[r.jsx(t(),{href:"/",children:r.jsx(i(),{src:"/assets/RB-White.png",alt:"/",className:"logo ",width:"100",height:"40"})}),(0,r.jsxs)("div",{children:[(0,r.jsxs)("ul",{style:{color:`${j}`},className:"hidden md:flex",children:[r.jsx(t(),{href:"/",children:r.jsx("li",{className:"ml-10 text-sm uppercase hover:border-b",children:"Home"})}),r.jsx(t(),{href:"/#about",children:r.jsx("li",{className:"ml-10 text-sm uppercase hover:border-b",children:"About"})}),r.jsx(t(),{href:"/#skills",children:r.jsx("li",{className:"ml-10 text-sm uppercase hover:border-b",children:"Skills"})}),r.jsx(t(),{href:"/#projects",children:r.jsx("li",{className:"ml-10 text-sm uppercase hover:border-b",children:"Project"})}),r.jsx(t(),{href:"/#contact",children:r.jsx("li",{className:"ml-10 text-sm uppercase hover:border-b",children:"Contact"})})]}),r.jsx("div",{onClick:handleNav,className:"md:hidden cursor-pointer",children:r.jsx(n.qTj,{size:"25"})})]})]}),r.jsx("div",{className:e?"md:hidden fixed left-0 top-0 w-full h-screen bg-black/70":"",children:(0,r.jsxs)("div",{className:e?"fixed left-0 top-0 w-[75%] sm:w-[65%] md:w-[45%] h-screen bg-[#c7ced3] p-10 easi-in duration-500":"fixed left-[-100%] top-0 p-10 easi-in duration-500",children:[(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"flex w-full items-center justify-between",children:[r.jsx(t(),{href:"/",children:r.jsx(i(),{src:"/assets/2.png",alt:"/",width:"100",height:"40"})}),r.jsx("div",{onClick:handleNav,className:"rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer text-gray-700",children:r.jsx(n.oHP,{})})]}),r.jsx("div",{className:"border-b border-[#8f6e5d] my-4 text-gray-600",children:r.jsx("p",{className:"w-[85%] md:w-[90%] py-4",children:"Let's build something great together"})})]}),(0,r.jsxs)("div",{className:"py-4 flex flex-col ",children:[(0,r.jsxs)("ul",{className:"uppercase  text-gray-600",children:[r.jsx(t(),{href:"/",children:r.jsx("li",{onClick:()=>s(!1),id:"liNavBar",className:"py-4 text-sm",children:"Home"})}),r.jsx(t(),{href:"/#about",children:r.jsx("li",{onClick:()=>s(!1),id:"liNavBar",className:"py-4 text-sm",children:"About"})}),r.jsx(t(),{href:"/#skills",children:r.jsx("li",{onClick:()=>s(!1),id:"liNavBar",className:"py-4 text-sm",children:"Skills"})}),r.jsx(t(),{href:"/#projects",children:r.jsx("li",{onClick:()=>s(!1),id:"liNavBar",className:"py-4 text-sm",children:"Projects"})}),r.jsx(t(),{href:"/#contact",children:r.jsx("li",{onClick:()=>s(!1),id:"liNavBar",className:"py-4 text-sm",children:"Contact"})})]}),(0,r.jsxs)("div",{className:"pt-40",children:[r.jsx("p",{id:"pConnect",className:"uppercase tracking-widest  text-gray-600",children:"Let's connect"}),(0,r.jsxs)("div",{className:"flex items-center justify-between my-4 w-full sm:w-[8-%]  text-[#8f6e5d]",children:[r.jsx("div",{className:"rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:shadow-gray-800 hover:scale-105 ease-in duration-300",children:r.jsx(o.BUd,{})}),r.jsx("div",{className:"rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:shadow-gray-800 hover:scale-105 ease-in duration-300",children:r.jsx(o.hJX,{})}),r.jsx("div",{className:"rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:shadow-gray-800 hover:scale-105 ease-in duration-300",children:r.jsx(n.Dme,{})}),r.jsx("div",{className:"rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:shadow-gray-800 hover:scale-105 ease-in duration-300",children:r.jsx(h.z8x,{})})]})]})]})]})})]})};function App({Component:e,pageProps:s}){return(0,r.jsxs)(r.Fragment,{children:[r.jsx(components_Navbar,{}),r.jsx(e,{...s})]})}l(6764)},6764:()=>{}};