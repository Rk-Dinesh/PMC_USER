import{e as v,h as w,r,i as S,o as F,j as e,M as j,b as f,A as y,B as d,l as C}from"./index-6WT6uXl3.js";const k=v().shape({email:w().email("Invalid email format").required("Email is required")}),A=({CloseEmailModal:l})=>{const n=localStorage.getItem("email"),o=localStorage.getItem("phone"),[x,i]=r.useState(!1),{register:c,handleSubmit:p,setValue:t,formState:{errors:m}}=S({resolver:F(k)});r.useEffect(()=>{n&&t("email",n)},[n,t]);const a=()=>{i(!1),l()},s=async u=>{i(!0);const h={...u};try{(await f.post(`${y}/api/emailupdate?phone=${o}`,h)).status===200?(d.success("Email updated successfully"),localStorage.setItem("email",u.email)):(d.error("Failed to update email"),console.log("Error in posting data"))}catch(g){console.log(g),d.error("An error occurred while updating email")}};return e.jsxs(e.Fragment,{children:[e.jsx(j,{children:e.jsxs("div",{className:"w-[550px] min-h-[330px] my-4 mx-8 font-extralight font-poppins",children:[e.jsx("p",{className:"text-end text-2xl font-medium",onClick:()=>l(),children:"x"}),e.jsx("p",{className:"text-center text-lg my-4",children:"Update Email"}),e.jsx("p",{className:"text-center text-sm lg:mx-12 md:mx-12 mx-4 my-8",children:"Enter your new email id (please note we will be sending a verification link to your new email id)"}),e.jsxs("form",{onSubmit:p(s),children:[e.jsxs("div",{className:"lg:mx-6 md:mx-6 mx-1",children:[e.jsx("label",{htmlFor:"email",className:"text-lg",children:"Email"}),e.jsx("input",{type:"text",className:`py-3 pe-0 ps-2 block w-full bg-transparent border-t-transparent border-b border-x-transparent border-b-gray-400 outline-none disabled:pointer-events-none my-3 ${m.email?"border-red-500":""}`,placeholder:"johndoe@gmail.com",...c("email")}),m.email&&e.jsx("p",{className:"text-red-500 text-sm",children:m.email.message})]}),e.jsx("div",{className:"flex justify-center my-8",children:e.jsx("button",{className:"font-normal bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] text-center w-36 py-2.5 my-2",type:"submit",children:"Verify"})})]})]})}),x&&e.jsx(j,{children:e.jsxs("div",{className:"w-[550px] min-h-[330px] my-4 mx-8 font-extralight font-poppins",children:[e.jsx("p",{className:"text-end text-2xl font-medium",onClick:()=>a(),children:"x"}),e.jsx("p",{className:"text-center text-lg my-4",children:"Update Email"}),e.jsx("p",{className:"text-center text-normal lg:mx-12 md:mx-12 mx-4 my-16",children:"We have sent you a verification link to your email. Please verify your email to continue."})]})})]})},E=v().shape({phone:w().required("Phone is required")}),D=({ClosePhoneModal:l})=>{const n=localStorage.getItem("email"),o=localStorage.getItem("phone"),{register:x,handleSubmit:i,setValue:c,formState:{errors:p}}=S({resolver:F(E)});r.useEffect(()=>{o&&c("phone",o)},[o,c]);const t=async m=>{const a={...m};try{(await f.post(`${y}/api/phoneupdate?email=${n}`,a)).status===200?(d.success("Phone updated successfully"),localStorage.setItem("phone",m.phone),l()):(d.error("Failed to update email"),console.log("Error in posting data"))}catch(s){console.log(s),d.error("An error occurred while updating email")}};return e.jsx(j,{children:e.jsxs("div",{className:"w-[530px] min-h-[330px] my-3 mx-8 font-extralight font-poppins",children:[e.jsx("p",{className:"text-end text-2xl font-medium",onClick:()=>l(),children:"x"}),e.jsx("p",{className:"text-center text-lg my-2",children:"Update Phone"}),e.jsx("p",{className:"text-center text-sm lg:mx-12 md:mx-12 mx-4 my-6",children:"Enter you’re your new Phone Number(please note we will be sending a OTP to your new phone number)"}),e.jsxs("form",{onSubmit:i(t),children:[e.jsxs("div",{className:"lg:mx-6 md:mx-6 mx-1 my-8",children:[e.jsx("label",{htmlFor:"phone",className:"text-normal",children:"Phone"}),e.jsx("input",{type:"text",className:" py-1 pe-0 ps-2 block w-full bg-transparent border-t-transparent border-b border-x-transparent border-b-gray-400 outline-none  disabled:pointer-events-none my-3",placeholder:"1234567890",...x("phone")}),p.phone&&e.jsx("p",{className:"text-red-500 text-sm",children:p.phone.message})]}),e.jsx("div",{className:"flex justify-center my-8",children:e.jsx("button",{className:" font-normal   bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] text-center w-36 py-2.5 my-2 ",type:"submit",children:"Verify"})})]})]})})},U=({CloseProfileModal:l})=>{const[n,o]=r.useState(null),[x,i]=r.useState(""),[c,p]=r.useState(""),t=a=>{const s=a.target.files[0];if(!s){d.error("Please select a file!");return}const u=2*1024*1024;if(s.size>u){d.error("File size exceeds 2MB!");return}o(s);const h=new FileReader;h.onload=()=>{const g=h.result;i(g),p(g)},h.readAsDataURL(s)},m=async()=>{if(!n){d.error("No file selected!");return}const a={name:n.name,user:localStorage.getItem("user"),image:x};try{const s=await f.post(`${y}/api/images`,a);s.status===200?(d.success(s.data.message),l()):console.log("Failed to Upload")}catch(s){console.log(s)}};return e.jsx(j,{children:e.jsxs("div",{className:"w-[530px] min-h-[330px] my-3 mx-8 font-extralight font-poppins",children:[e.jsx("p",{className:"text-end text-2xl font-medium",onClick:()=>l(),children:"x"}),e.jsx("p",{className:"mx-16 text-xl my-2",children:"Choose Profile Image"}),e.jsxs("div",{className:"relative mt-6 mx-16 ",children:[e.jsxs("label",{className:"block bg-white rounded-lg",children:[e.jsx("span",{className:"sr-only",children:"Choose File"}),e.jsx("input",{type:"file",className:"hidden",id:"file-input",onChange:t}),e.jsx("button",{className:"bg-gray-300 text-black px-4 py-2.5 rounded-md",for:"file-input",children:"Choose Files"})]}),e.jsx("span",{className:"absolute top-1/2 -translate-y-1/2 lg:right-4 md:right-4 right-16 text-normal text-black",id:"file-name",children:"No Files Chosen"})]}),c&&e.jsxs("div",{className:"text-center text-lg my-2",children:[e.jsx("p",{className:"text-center text-xl my-2",children:"Preview "}),e.jsx("img",{src:c,alt:"Preview",className:"w-60 mx-auto"})]}),e.jsx("div",{className:"flex justify-center my-8",children:e.jsx("button",{className:" font-normal   bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] text-center w-36 py-2.5 my-2 ",onClick:m,children:"Upload Image"})})]})})},M=()=>{const[l,n]=r.useState(!1),[o,x]=r.useState(!1),[i,c]=r.useState(!1),p=localStorage.getItem("user"),[t,m]=r.useState({}),[a,s]=r.useState({});r.useEffect(()=>{u(),h()},[i]);const u=async()=>{try{const N=(await f.get(`${y}/api/getusersbyid?id=${p}`)).data.user;m(N)}catch(b){console.log(b)}},h=async()=>{try{const N=(await f.get(`${y}/api/getimagebyid?user=${p}`)).data.user;s(N)}catch(b){console.log(b)}},g=()=>{n(!l)},P=()=>{x(!o)},I=()=>{c(!i)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mx-5 my-6 font-poppins",children:[e.jsxs("div",{className:" flex flex-col mx-6",children:[e.jsx("img",{src:a!=null&&a.image?a.image:C,alt:"Profile",className:`w-40 h-40 ${a!=null&&a.image?" rounded-3xl object-cover":""}`}),e.jsx("button",{className:" text-base  bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] lg:w-40 md:w-40 w-40 py-2.5 my-5 ",onClick:()=>c(!0),children:"Change Image"})]}),e.jsxs("div",{className:"my-5",children:[e.jsx("p",{className:"font-extralight text-normal",children:"Personal Information"}),e.jsx("hr",{className:"my-3 border-1 border-gray-600 "}),e.jsxs("div",{className:"grid grid-cols-12 gap-10 font-poppins text-normal font-extralight my-5 mx-2 text-gray-400",children:[e.jsxs("div",{className:"lg:col-span-4 md:col-span-4 col-span-12 ",children:[e.jsx("label",{htmlFor:"fname",children:"First Name"}),e.jsx("input",{type:"text",className:" text-white py-3 pe-0 ps-2 block w-full bg-transparent border-t-transparent border-b border-x-transparent border-b-gray-400 outline-none  disabled:pointer-events-none",placeholder:"John",value:(t==null?void 0:t.fname)||""})]}),e.jsxs("div",{className:"lg:col-span-4 md:col-span-4 col-span-12 ",children:[e.jsx("label",{htmlFor:"lname",children:"Last Name"}),e.jsx("input",{type:"text",className:"text-white py-3 pe-0 ps-2 block w-full bg-transparent border-t-transparent border-b border-x-transparent border-b-gray-400 outline-none  disabled:pointer-events-none",placeholder:"Doe",value:(t==null?void 0:t.lname)||""})]}),e.jsxs("div",{className:"lg:col-span-4 md:col-span-4 col-span-12 ",children:[e.jsx("label",{htmlFor:"dob",children:"Date Of Birth"}),e.jsx("input",{type:"text",className:"text-white py-3 pe-0 ps-2 block w-full bg-transparent border-t-transparent border-b border-x-transparent border-b-gray-400 outline-none  disabled:pointer-events-none",placeholder:"25-12-2024",value:(t==null?void 0:t.dob)||""})]})]})]}),e.jsxs("div",{className:"my-8",children:[e.jsx("p",{className:"font-extralight text-normal",children:"Contact Information"}),e.jsx("hr",{className:"my-3 border-1 border-gray-600 "}),e.jsxs("div",{className:"grid grid-cols-12 gap-10 font-poppins text-normal font-extralight my-5 mx-2 text-white",children:[e.jsxs("div",{className:"lg:col-span-4 md:col-span-4 col-span-12 ",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",children:"Email"}),e.jsx("input",{type:"text",className:" py-3 pe-0 ps-2 block w-full bg-transparent border-t-transparent border-b border-x-transparent border-b-white outline-none  disabled:pointer-events-none text-white",placeholder:"johndoe@gmail.com",value:localStorage.getItem("email")||""})]}),e.jsx("div",{className:"flex justify-center my-2",children:e.jsx("button",{className:" text-base  bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] text-center px-10 py-2.5 my-3 ",onClick:()=>n(!0),children:"Update"})})]}),e.jsxs("div",{className:"lg:col-span-4 md:col-span-4 col-span-12 ",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"phone",children:"Phone"}),e.jsx("input",{type:"text",className:" py-3 pe-0 ps-2 block w-full bg-transparent border-t-transparent border-b border-x-transparent border-b-white outline-none  disabled:pointer-events-none text-white",placeholder:"1234567890",value:localStorage.getItem("phone")||""})]}),e.jsx("div",{className:"flex justify-center my-2",children:e.jsx("button",{className:" text-base  bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] text-center px-10 py-2.5 my-3 ",onClick:()=>x(!0),children:"Update"})})]})]})]})]}),l&&e.jsx(A,{CloseEmailModal:g}),o&&e.jsx(D,{ClosePhoneModal:P}),i&&e.jsx(U,{CloseProfileModal:I})]})};export{M as default};
