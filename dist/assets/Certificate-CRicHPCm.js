import{u,r,j as e,F as h,f as n,b as f,A as g}from"./index-D0jfDX1B.js";const N=()=>{const i=u(),l=localStorage.getItem("user"),[o,x]=r.useState([]),[c,d]=r.useState("");r.useEffect(()=>{const t=async()=>{const s=g+`/api/courses?userId=${l}`;try{const a=await f.get(s);x(a.data)}catch{t()}};t()},[]);const m=(t,s)=>{const a=new Date(s).toLocaleDateString();i("/viewcertificate",{state:{courseTitle:t,end:a}})},p=o.filter(t=>t.completed===!0&&t.mainTopic.toLowerCase().includes(c.toLowerCase()));return e.jsxs("div",{className:"mx-4 my-6 font-poppins",children:[e.jsxs("div",{className:"flex justify-between items-center flex-wrap gap-3",children:[e.jsx("p",{className:"text-lg font-extralight",children:"My Certificates"}),e.jsxs("div",{className:"flex items-center gap-3 bg-white w-96 px-6 py-1.5 rounded-md mr-3",children:[e.jsx(h,{className:"text-black text-xl"}),e.jsx("input",{type:"text",placeholder:"Search By Topic Name",className:"bg-transparent w-full outline-none text-center font-extralight text-black",value:c,onChange:t=>d(t.target.value)})]})]}),e.jsx("hr",{className:"my-2"}),p.map((t,s)=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex justify-between mx-2 flex-wrap font-extralight",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsxs("p",{className:"text-lg",children:["Topic Name : ",t.mainTopic]}),e.jsxs("p",{children:["Start Date : ",n(t.date)]}),e.jsxs("p",{children:["End Date : ",n(t.end)]})]}),e.jsx("div",{children:e.jsx("button",{className:"text-base bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] w-48 py-2 my-5",onClick:()=>m(t.mainTopic,t.end),children:"View Certificate"})})]},s),e.jsx("hr",{className:"my-3 "})]}))]})};export{N as default};
