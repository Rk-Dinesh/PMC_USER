import{r as c,u as l,b as x,A as d,j as e}from"./index-Dt3ZiXTE.js";const p=()=>{const[a,r]=c.useState([]),i=l(),n=localStorage.getItem("countryCode");c.useEffect(()=>{o()},[]);const o=async()=>{try{const t=(await x.get(`${d}/api/getsubscriptionplan`)).data.plans;r(t)}catch(s){console.log(s)}};return e.jsx("div",{className:"grid grid-cols-12 gap-6 m-8",children:a&&a.map((s,t)=>e.jsx("div",{className:"lg:col-span-3 md:col-span-4 col-span-12 font-poppins font-extralight",children:e.jsxs("div",{className:"flex flex-col p-6 text-center text-white bg-[#000928]   shadow outline-none",children:[e.jsx("h3",{className:"mb-2 text-xl",children:s.packagename}),e.jsxs("div",{className:"flex justify-center items-baseline my-2",children:[e.jsxs("span",{className:"mr-2 text-2xl font-semibold",children:[" ",n==="91"?`₹${s.inr}`:`$${s.price}`]}),e.jsx("span",{className:"text-gray-500 dark:text-gray-400",children:"/month"})]}),e.jsxs("ul",{role:"list",className:"mb-8 space-y-1 text-left",children:[e.jsx("li",{className:"flex items-center space-x-3",children:s.course==="1"?e.jsx("span",{children:"Generate 1 free course"}):e.jsxs("span",{children:["Generate ",s.course," Courses/month"]})}),e.jsx("li",{className:"flex items-center space-x-3",children:e.jsxs("span",{children:["Up to ",s.subtopic," subtopics"]})}),e.jsx("li",{className:"flex items-center space-x-3",children:e.jsx("span",{children:"AI Teacher"})}),e.jsx("li",{className:"flex items-center space-x-3",children:e.jsx("span",{children:"Theory & Image Course"})}),e.jsx("li",{className:`flex items-center space-x-3 ${s.coursetype==="Video & Text Course"?"opacity-100":"opacity-0"}`,children:e.jsx("span",{children:"Theory & Video Course "})})]}),e.jsx("button",{className:"text-base bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] w-full py-2 ",onClick:()=>{i("/payment",{state:{usd:s.price,inr:s.inr,receipt:s.packagename,course:s.course,planId:s.stripeId,tax:s.tax}})},children:"Get started"})]})},t))})};export{p as default};