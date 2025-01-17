import{j as e,f as A,r as n,u as S,F as D,b as T,A as L}from"./index-Dt3ZiXTE.js";const x=({courses:a,handleCourse:o,handleCertificate:r})=>e.jsx("div",{className:"grid grid-cols-12 gap-3 mx-2 mt-6 ",children:a&&a.map((s,p)=>e.jsxs("div",{className:"lg:col-span-3 md:col-span-4 col-span-12 overflow-hidden shadow-lg bg-[#110038] font-poppins font-extralight",children:[e.jsx("img",{className:"w-full h-44",src:s.photo,alt:"Images"}),e.jsxs("div",{className:"px-4 py-3",children:[e.jsxs("div",{className:"text-lg truncate",children:[" ",s.mainTopic]}),e.jsx("p",{className:"text-sm pt-1",children:s.type}),e.jsx("p",{className:"text-sm",children:A(s.date)})]}),e.jsx("button",{className:" text-lg bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] w-1/2 py-2.5 font-normal ",onClick:()=>o(s.content,s.mainTopic,s.type,s._id,s.completed,s.end),children:"Continue"}),s.completed===!0&&e.jsx("button",{className:" text-lg bg-white text-black w-1/2 py-2.5 font-normal",onClick:()=>r(s.mainTopic,s.end),children:"Certificate"})]},p))}),F=()=>{const[a,o]=n.useState("tab1"),[r,s]=n.useState([]),[p,j]=n.useState(!0),[c,w]=n.useState(""),v=localStorage.getItem("user"),g=S();n.useEffect(()=>{const t=async()=>{const i=L+`/api/courses?userId=${v}`;try{const l=await T.get(i);s(l.data),j(!1)}catch{t()}};t()},[]);const d=(t,i,l,h,b,k)=>{const f=JSON.parse(t);localStorage.setItem("courseId",h),localStorage.setItem("first",b),localStorage.setItem("jsonData",JSON.stringify(f));let u="";b&&(u=k),g("/content",{state:{jsonData:f,mainTopic:i.toUpperCase(),type:l.toLowerCase(),courseId:h,end:u}})},m=(t,i)=>{const l=new Date(i).toLocaleDateString();g("/viewcertificate",{state:{courseTitle:t,end:l}})},N=r.filter(t=>t.completed===!0),C=r.filter(t=>t.completed!==!0),y=r.filter(t=>t.mainTopic.toLowerCase().includes(c.toLowerCase()));return e.jsxs("div",{className:"overflow-auto -z-10",children:[e.jsxs("div",{className:"flex justify-between mt-8 mx-4 flex-wrap gap-3 font-poppins",children:[e.jsxs("div",{className:"flex justify-start gap-3 flex-wrap",children:[e.jsxs("div",{className:"relative inline-block",children:[e.jsx("button",{className:`text-lg py-1.5 w-36 ${a==="tab1"?"text-white bg-gradient-to-r from-[#3D03FA] to-[#A71CD2]":"text-black bg-white"}`,onClick:()=>o("tab1"),children:"All Courses"}),e.jsx("div",{className:"absolute -top-8 -right-10 w-8 h-8 bg-[#110038] transform rotate-45 -translate-x-1/2 translate-y-1/2"})]}),e.jsxs("div",{className:"relative inline-block",children:[e.jsx("button",{className:`text-lg py-1.5 w-36 ${a==="tab2"?"text-white bg-gradient-to-r from-[#3D03FA] to-[#A71CD2]":"text-black bg-white"}`,onClick:()=>o("tab2"),children:"Completed"}),e.jsx("div",{className:"absolute -top-8 -right-10 w-8 h-8 bg-[#110038] transform rotate-45 -translate-x-1/2 translate-y-1/2"})]}),e.jsxs("div",{className:"relative inline-block",children:[e.jsx("button",{className:`text-lg py-1.5 w-36 ${a==="tab3"?"text-white bg-gradient-to-r from-[#3D03FA] to-[#A71CD2]":"text-black bg-white"}`,onClick:()=>o("tab3"),children:"Active"}),e.jsx("div",{className:"absolute -top-8 -right-10 w-8 h-8 bg-[#110038] transform rotate-45 -translate-x-1/2 translate-y-1/2"})]})]}),e.jsxs("div",{className:"flex items-center gap-3 bg-white w-96 px-6 py-1.5 rounded-md mr-3",children:[e.jsx(D,{className:"text-black text-xl"}),e.jsx("input",{type:"text",placeholder:"Search By Course Name",className:"bg-transparent w-full outline-none text-center font-extralight text-black",value:c,onChange:t=>w(t.target.value)})]})]}),e.jsx("hr",{className:"border-2 my-1 border-white mx-1"}),e.jsx("div",{className:"mx-1 overflow-auto",children:a==="tab1"&&e.jsx(x,{courses:y,handleCourse:d,handleCertificate:m})}),e.jsx("div",{className:"mx-1",children:a==="tab2"&&e.jsx(x,{courses:N.filter(t=>t.mainTopic.toLowerCase().includes(c.toLowerCase())),handleCourse:d,handleCertificate:m})}),e.jsx("div",{className:"mx-1",children:a==="tab3"&&e.jsx(x,{courses:C.filter(t=>t.mainTopic.toLowerCase().includes(c.toLowerCase())),handleCourse:d,handleCertificate:m})})]})};export{F as default};