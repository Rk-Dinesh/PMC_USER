import{e as B,h as u,r,T as O,u as G,i as H,b as i,A as d,j as e,k as N,d as L,o as W,B as m}from"./index-Dt3ZiXTE.js";const Y=B().shape({category:u().test("not-select","Please select an Category",a=>a!==""&&a!=="Select  Category"),subject:u().required("subject is required"),desc1:u().required("Description is required"),priority:u().test("not-select","Please select an Priority",a=>a!==""&&a!=="Select  Priority")}),K=()=>{var f,y,j,b;const{global:a,setGlobal:k}=r.useContext(O),w=G(),[g,v]=r.useState([]),[h,S]=r.useState([]),[o,F]=r.useState([]),[C,l]=r.useState(!1),{register:p,handleSubmit:D,formState:{errors:x}}=H({resolver:W(Y)});r.useEffect(()=>{T(),P()},[]);const I=async t=>{const s={...t,user:localStorage.getItem("user"),fname:localStorage.getItem("fname"),lname:localStorage.getItem("lname"),email:localStorage.getItem("email"),phone:localStorage.getItem("phone")};try{l(!0);const c=await i.post(`${d}/api/ticket`,s);if(c.status===200){const A=c.data.Ticket;if(m.success("Ticket Raised"),o.length>0?l(!0):l(!1),o.length>0){const R=c.data.Ticket,n=new FormData;n.append("user",localStorage.getItem("user")),n.append("ticketId",R),n.append("createdby","user"),o.forEach(q=>{n.append("files",q)}),(await i.post(`${d}/post`,n,{headers:{"Content-Type":"multipart/form-data"}})).status===200?(m.success("Files uploaded successfully"),l(!1)):m.error("Failed to upload files")}const E={user:localStorage.getItem("user"),subject:" Ticket Confirmation",description:`Your ticket ${A} has been received. We'll be in touch soon! Thank you for contacting support. Here are some resources that might help while you wait: https://helpcenter.pickmycourseai.support`};await i.post(`${d}/api/notify`,E),k(!a),w("/support")}else m.error("Failed to raise ticket"),l(!1)}catch(c){console.log(c),m.error("An error occurred"),l(!1)}},T=async()=>{try{const s=await(await i.get(`${d}/api/getcategory`)).data.cate;v(s)}catch(t){console.log(t)}},P=async()=>{try{const s=await(await i.get(`${d}/api/getpriority`)).data.priority;S(s)}catch(t){console.log(t)}},$=()=>{document.getElementById("file-input").click()};return e.jsxs("div",{className:"font-poppins font-extralight my-5 lg:mx-6 md:mx-6 mx-2",children:[e.jsx("p",{className:"text-center ",children:"Raise Ticket"}),e.jsx("form",{onSubmit:D(I),children:e.jsxs("div",{className:"grid grid-cols-12 gap-1 mt-8 mx-3",children:[e.jsxs("div",{className:"lg:col-span-6 md:col-span-6 col-span-12 ",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("label",{htmlFor:"",className:"my-1 font-normal",children:["Select Category ",e.jsx("span",{className:"text-red-700",children:"*"})]}),e.jsxs("div",{className:"relative inline-block lg:w-3/4 md:w-3/4 w-full",children:[e.jsxs("select",{className:"block w-full text-black px-3 py-2 pr-10 outline-none rounded-lg cursor-pointer ",...p("category"),children:[e.jsx("option",{value:"",hidden:!0,children:"Select Category"}),g&&g.map((t,s)=>e.jsx("option",{value:t.category,children:t.category},s))]}),e.jsx("div",{className:"absolute inset-y-0 right-0 flex items-center pr-5 bg-gray-300 px-4 rounded-lg pointer-events-none outline-none",children:e.jsx(N,{className:"text-black text-2xl"})})]})]}),e.jsx("p",{className:"text-red-300 mt-3",children:(f=x.category)==null?void 0:f.message}),e.jsxs("div",{className:"flex flex-col py-8 gap-1 ",children:[e.jsxs("label",{htmlFor:"subject",className:"font-normal",children:["Subject ",e.jsx("span",{className:"text-red-700",children:"*"})]}),e.jsx("input",{type:"text",placeholder:"Enter Subject",...p("subject"),className:"py-2 px-4  rounded-md  text-black shadow-md outline-none lg:w-3/4 md:w-3/4 w-full"}),e.jsx("p",{className:"text-red-300 mt-3",children:(y=x.subject)==null?void 0:y.message})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsxs("label",{htmlFor:"desc",className:"font-normal",children:["Description ",e.jsx("span",{className:"text-red-700",children:"*"})]}),e.jsx("textarea",{name:"",id:"",rows:8,className:"lg:w-3/4 md:w-3/4 w-full text-black p-3 rounded-3xl outline-none",placeholder:"Describe your issue",...p("desc1")}),e.jsx("p",{className:"text-red-300 mt-3",children:(j=x.desc1)==null?void 0:j.message})]}),e.jsxs("div",{className:"my-5 font-normal flex flex-col",children:[e.jsx("label",{htmlFor:"file-input",children:"Attachments (you can select multiple files)"}),e.jsxs("div",{className:"relative my-1 lg:w-3/4 md:w-3/4 w-full bg-white rounded-lg",children:[e.jsxs("label",{className:"block ",children:[e.jsx("span",{className:"sr-only",children:"Choose File"}),e.jsx("input",{type:"file",className:"hidden",id:"file-input",multiple:!0,accept:".jpg,.jpeg,.png,.gif",onChange:t=>F(Array.from(t.target.files))})]}),e.jsx("p",{className:"bg-gray-300 text-black w-2/6 py-1.5 text-center rounded-md",htmlFor:"file-input",onClick:$,children:"Choose Files"}),e.jsx("span",{className:"absolute top-1/2 -translate-y-1/2 lg:right-4 md:right-4 right-16 text-normal text-black ",id:"file-name",children:o.length>0?`${o.length} Files Selected`:"No Files Chosen"})]})]})]}),e.jsxs("div",{className:"lg:col-span-6 md:col-span-6 col-span-12",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("label",{htmlFor:"",className:"my-1 font-normal",children:["Select Priority ",e.jsx("span",{className:"text-red-700",children:"*"})]}),e.jsxs("div",{className:"relative inline-block lg:w-3/4 md:w-3/4 w-full",children:[e.jsxs("select",{className:"block w-full text-black px-3 py-2 pr-10 outline-none rounded-lg cursor-pointer ",...p("priority"),children:[e.jsx("option",{value:"",hidden:!0,children:"Select Priority"}),h&&h.map((t,s)=>e.jsx("option",{value:t.priority,children:t.priority},s))]}),e.jsx("div",{className:"absolute inset-y-0 right-0 flex items-center pr-5 bg-gray-300 px-4 rounded-lg pointer-events-none outline-none",children:e.jsx(N,{className:"text-black text-2xl"})})]}),e.jsx("p",{className:"text-red-300 mt-3",children:(b=x.priority)==null?void 0:b.message})]}),e.jsx("div",{className:"block text-center  lg:mr-36 md:mr-36 mx-auto",children:e.jsx("button",{className:" text-base bg-gradient-to-r from-[#3D03FA] to-[#A71CD2]   px-6 py-2.5 my-5 cursor-pointer ",children:C?e.jsxs("span",{className:"flex justify-center gap-3",children:[" ",e.jsx(L,{className:"h-6 w-6 animate-spin"})," ",e.jsx("p",{children:"Creating a Ticket...."})]}):"Raise a Ticket"})})]})]})})]})};export{K as default};