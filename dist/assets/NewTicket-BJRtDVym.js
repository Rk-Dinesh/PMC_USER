import{e as P,h as d,u as A,r as m,i as $,b as p,A as x,j as e,k as b,o as R,B as r}from"./index-6WT6uXl3.js";const T=P().shape({category:d().test("not-select","Please select an Category",l=>l!==""&&l!=="Select  Category"),subject:d().required("subject is required"),desc1:d().required("Description is required"),priority:d().test("not-select","Please select an Priority",l=>l!==""&&l!=="Select  Priority")}),B=()=>{var h,y,j,f;const l=A(),[u,N]=m.useState([]),[g,w]=m.useState([]),[c,k]=m.useState([]),{register:o,handleSubmit:v,formState:{errors:n}}=$({resolver:R(T)});m.useEffect(()=>{F(),C()},[]);const S=async s=>{const t={...s,user:localStorage.getItem("user"),fname:localStorage.getItem("fname"),lname:localStorage.getItem("lname"),email:localStorage.getItem("email"),phone:localStorage.getItem("phone")};try{const i=await p.post(`${x}/api/ticket`,t);if(i.status===200){if(r.success("Ticket Raised"),c.length>0){const D=i.data.Ticket,a=new FormData;a.append("user",localStorage.getItem("user")),a.append("ticketId",D),a.append("createdby","user"),c.forEach(I=>{a.append("files",I)}),(await p.post(`${x}/post`,a,{headers:{"Content-Type":"multipart/form-data"}})).status===200?r.success("Files uploaded successfully"):r.error("Failed to upload files")}l("/support")}else r.error("Failed to raise ticket")}catch(i){console.log(i),r.error("An error occurred")}},F=async()=>{try{const t=await(await p.get(`${x}/api/getcategory`)).data.cate;N(t)}catch(s){console.log(s)}},C=async()=>{try{const t=await(await p.get(`${x}/api/getpriority`)).data.priority;w(t)}catch(s){console.log(s)}};return e.jsxs("div",{className:"font-poppins font-extralight my-5 lg:mx-6 md:mx-6 mx-2",children:[e.jsx("p",{className:"text-center ",children:"Raise Ticket"}),e.jsx("form",{onSubmit:v(S),children:e.jsxs("div",{className:"grid grid-cols-12 gap-1 mt-8 mx-3",children:[e.jsxs("div",{className:"lg:col-span-6 md:col-span-6 col-span-12 ",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("label",{htmlFor:"",className:"my-1 font-normal",children:["Select Category ",e.jsx("span",{className:"text-red-700",children:"*"})]}),e.jsxs("div",{className:"relative inline-block lg:w-3/4 md:w-3/4 w-full",children:[e.jsxs("select",{className:"block w-full text-black px-3 py-2 pr-10 outline-none rounded-lg ",...o("category"),children:[e.jsx("option",{value:"",disabled:!0,children:"Select Category"}),u&&u.map((s,t)=>e.jsx("option",{value:s.category,children:s.category},t))]}),e.jsx("div",{className:"absolute inset-y-0 right-0 flex items-center pr-5 bg-gray-300 px-4 rounded-lg pointer-events-none outline-none",children:e.jsx(b,{className:"text-black text-2xl"})})]})]}),e.jsx("p",{className:"text-red-300 mt-3",children:(h=n.category)==null?void 0:h.message}),e.jsxs("div",{className:"flex flex-col py-8 gap-1 ",children:[e.jsxs("label",{htmlFor:"subject",className:"font-normal",children:["Subject ",e.jsx("span",{className:"text-red-700",children:"*"})]}),e.jsx("input",{type:"text",placeholder:"Enter Subject",...o("subject"),className:"py-2 px-4  rounded-md  text-black shadow-md outline-none lg:w-3/4 md:w-3/4 w-full"}),e.jsx("p",{className:"text-red-300 mt-3",children:(y=n.subject)==null?void 0:y.message})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsxs("label",{htmlFor:"desc",className:"font-normal",children:["Description ",e.jsx("span",{className:"text-red-700",children:"*"})]}),e.jsx("textarea",{name:"",id:"",rows:8,className:"lg:w-3/4 md:w-3/4 w-full text-black p-3 rounded-3xl outline-none",placeholder:"Describe your issue",...o("desc1")}),e.jsx("p",{className:"text-red-300 mt-3",children:(j=n.desc1)==null?void 0:j.message})]}),e.jsxs("div",{className:"my-5 font-normal flex flex-col",children:[e.jsx("label",{htmlFor:"file-input",children:"Attachments (you can select multiple files)"}),e.jsxs("div",{className:"relative my-1 lg:w-3/4 md:w-3/4 w-full",children:[e.jsxs("label",{className:"block bg-white rounded-lg",children:[e.jsx("span",{className:"sr-only",children:"Choose File"}),e.jsx("input",{type:"file",className:"hidden",id:"file-input",multiple:!0,onChange:s=>k(Array.from(s.target.files))}),e.jsx("button",{className:"bg-gray-300 text-black px-4 py-2.5 rounded-md",htmlFor:"file-input",children:"Choose Files"})]}),e.jsx("span",{className:"absolute top-1/2 -translate-y-1/2 lg:right-4 md:right-4 right-16 text-normal text-black",id:"file-name",children:c.length>0?`${c.length} Files Selected`:"No Files Chosen"})]})]})]}),e.jsxs("div",{className:"lg:col-span-6 md:col-span-6 col-span-12",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("label",{htmlFor:"",className:"my-1 font-normal",children:["Select Priority ",e.jsx("span",{className:"text-red-700",children:"*"})]}),e.jsxs("div",{className:"relative inline-block lg:w-3/4 md:w-3/4 w-full",children:[e.jsxs("select",{className:"block w-full text-black px-3 py-2 pr-10 outline-none rounded-lg ",...o("priority"),children:[e.jsx("option",{value:"",disabled:!0,children:"Select Priority"}),g&&g.map((s,t)=>e.jsx("option",{value:s.priority,children:s.priority},t))]}),e.jsx("div",{className:"absolute inset-y-0 right-0 flex items-center pr-5 bg-gray-300 px-4 rounded-lg pointer-events-none outline-none",children:e.jsx(b,{className:"text-black text-2xl"})})]}),e.jsx("p",{className:"text-red-300 mt-3",children:(f=n.priority)==null?void 0:f.message})]}),e.jsx("div",{className:"block text-center  lg:mr-36 md:mr-36 mx-auto",children:e.jsx("button",{className:" text-base bg-gradient-to-r from-[#3D03FA] to-[#A71CD2]   px-6 py-2.5 my-5 ",children:"Raise a Ticket"})})]})]})})]})};export{B as default};
