import{u,r,j as e,F as h,f as n,b as f,A as g}from"./index-Dt3ZiXTE.js";const N=()=>{const i=u(),l=localStorage.getItem("user"),[o,x]=r.useState([]),[c,d]=r.useState("");r.useEffect(()=>{(async()=>{const t=g+`/api/courses?userId=${l}`;try{const a=await f.get(t);x(a.data)}catch{}})()},[]);const m=(s,t)=>{const a=new Date(t).toLocaleDateString();i("/viewcertificate",{state:{courseTitle:s,end:a}})},p=o.filter(s=>s.completed===!0&&s.mainTopic.toLowerCase().includes(c.toLowerCase()));return e.jsxs("div",{className:"mx-4 my-6 font-poppins",children:[e.jsxs("div",{className:"flex justify-between items-center flex-wrap gap-3",children:[e.jsx("p",{className:"text-lg font-extralight",children:"My Certificates"}),e.jsxs("div",{className:"flex items-center gap-3 bg-white w-96 px-6 py-1.5 rounded-md mr-3",children:[e.jsx(h,{className:"text-black text-xl"}),e.jsx("input",{type:"text",placeholder:"Search By Topic Name",className:"bg-transparent w-full outline-none text-center font-extralight text-black",value:c,onChange:s=>d(s.target.value)})]})]}),e.jsx("hr",{className:"my-2"}),p.reverse().map((s,t)=>e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between mx-2 flex-wrap font-extralight",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsxs("p",{className:"text-lg",children:["Topic Name : ",s.mainTopic]}),e.jsxs("p",{children:["Start Date : ",n(s.date)]}),e.jsxs("p",{children:["End Date : ",n(s.end)]})]}),e.jsx("div",{children:e.jsx("button",{className:"text-base bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] w-48 py-2 my-5",onClick:()=>m(s.mainTopic,s.end),children:"View Certificate"})})]}),e.jsx("hr",{className:"my-3 "})]},t))]})};export{N as default};