import{v as O,r as n,b as h,A as f,j as e,f as A,d as R,B as U}from"./index-Dt3ZiXTE.js";import{t as E}from"./index-Bo5yt8qF.js";const L=({isOpen:j,onClose:l,imageUrl:s})=>{if(!j)return null;const[c,d]=n.useState(!1),r=n.useRef(null),p=async()=>{d(!0),E(r.current,{cacheBust:!1}).then(m=>{const o=document.createElement("a");o.download="Image.png",o.href=m,o.click(),U.success("Downloaded"),d(!1)}).catch(m=>{})};return e.jsx("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50",children:e.jsxs("div",{className:" relative w-[550px]  h-[350px]",children:[e.jsx("img",{src:s,alt:"Modal",className:"object-center",ref:r}),e.jsxs("div",{className:"flex justify-center my-3 gap-3 ",children:[e.jsx("button",{className:`text-base bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] w-36 px-3 py-2 ${c?"opacity-15":""}`,disabled:c,onClick:p,children:c?e.jsxs("span",{className:"flex justify-center gap-3",children:[" ",e.jsx(R,{className:"h-6 w-6 animate-spin"})," ",e.jsx("p",{children:"Downloading..."})]}):"Download"}),e.jsx("button",{className:"text-base text-black bg-white w-36 py-2 ",onClick:l,children:"close"})]})]})})},k=()=>{var N;const l=(N=O().state)==null?void 0:N.ticketId,[s,c]=n.useState({}),[d,r]=n.useState([]),[p,m]=n.useState([]),[o,I]=n.useState([]),[D,u]=n.useState(!1),[S,g]=n.useState("");n.useEffect(()=>{v(),C()},[]);const v=async()=>{try{const t=await(await h.get(`${f}/api/getticketbyid?ticketId=${l}`)).data.ticket;c(t)}catch(a){console.log(a)}},C=async()=>{try{const t=await(await h.get(`${f}/api/getattachments?ticketId=${l}`)).data.attachments;r(t),await T(t)}catch(a){console.log(a)}},T=async a=>{const t=[],b=[];for(const x of a)try{const i=await h.get(`${f}/api/file/${x.attachment}`,{responseType:"blob"}),M=new Blob([i.data],{type:i.headers["content-type"]}),w=URL.createObjectURL(M);x.createdby==="user"?t.push(w):x.createdby==="admin"&&b.push(w)}catch(i){console.log(i)}m(t),I(b)},y=a=>{g(a),u(!0)},$=()=>{u(!1),g("")};return e.jsxs("div",{className:"font-poppins my-5 mx-3 font-extralight",children:[e.jsx("hr",{className:"my-3"}),e.jsxs("div",{className:"mx-5",children:[e.jsx("p",{className:"text-lg mt-3 mb-2 ",children:s==null?void 0:s.fname}),e.jsxs("p",{className:"text-normal mb-4",children:["Ticket No: ",s==null?void 0:s.ticketId]}),e.jsxs("p",{className:"text-normal font-normal",children:["Date : ",A(s==null?void 0:s.createdAt)]}),e.jsxs("p",{className:"text-normal font-normal",children:["Category : ",s==null?void 0:s.category]}),e.jsxs("p",{className:"text-normal font-normal mb-4",children:["Priority : ",s==null?void 0:s.priority]}),e.jsxs("span",{className:"flex items-center gap-2 flex-wrap",children:[e.jsx("p",{className:"text-normal font-normal",children:"Attachments :"}),p.map((a,t)=>e.jsx("span",{onClick:()=>y(a),children:e.jsx("img",{src:a,alt:"User  Attachment",className:"w-10 h-10 cursor-pointer rounded-md"})},t))]}),e.jsx("p",{className:"text-normal font-normal my-2",children:"Description :"}),e.jsx("p",{className:"text-normal mb-3",children:s==null?void 0:s.desc1})]}),e.jsx("hr",{className:"my-3"}),(s==null?void 0:s.desc2)!==null&&e.jsxs("div",{className:"mx-5",children:[e.jsx("p",{className:"text-lg mt-3 mb-2 ",children:"Support"}),e.jsxs("p",{className:"text-normal font-normal my-4",children:["Date : ",A(s==null?void 0:s.updatedAt)]}),e.jsxs("span",{className:"flex items-center gap-2 my-3 flex-wrap",children:[e.jsx("p",{className:"text-normal font-normal ",children:"Attachments :"}),o.map((a,t)=>e.jsx("span",{onClick:()=>y(a),children:e.jsx("img",{src:a,alt:"Admin Attachment",className:"w-10 h-10 cursor-pointer rounded-md"})},t))]}),e.jsx("p",{className:"text-normal font-normal my-2",children:"Description :"}),e.jsx("p",{className:"text-normal mb-5",children:s==null?void 0:s.desc2}),e.jsx("hr",{className:"my-3 mb-12"})]}),e.jsx(L,{isOpen:D,onClose:$,imageUrl:S})]})};export{k as default};
