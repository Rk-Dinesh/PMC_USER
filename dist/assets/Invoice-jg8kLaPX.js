import{r as l,v as h,j as s,L as j,f as u,d as g,b as f,B as N,A as y}from"./index-Dt3ZiXTE.js";import{t as v}from"./index-Bo5yt8qF.js";const I=()=>{var x;const[t,o]=l.useState(!1),[a,m]=l.useState({}),i=l.useRef(null),r=h(),d=(x=r==null?void 0:r.state)==null?void 0:x.subId;l.useEffect(()=>{(async()=>{const e=y+`/api/getsubonid/${d}`;try{const n=await f.get(e);m(n.data.sub)}catch(n){console.error("Error fetching subscriptions:",n)}})()},[d]);const p=async()=>{o(!0),v(i.current,{cacheBust:!1}).then(c=>{const e=document.createElement("a");e.download="PMC_Invoice.png",e.href=c,e.click(),N.success("Downloaded"),o(!1)}).catch(c=>{})};return s.jsxs("div",{className:"mx-12 my-6 font-poppins font-extralight ",children:[a&&s.jsxs("div",{className:"max-w-xl h-auto bg-white py-1 px-2",ref:i,children:[s.jsx("span",{className:"flex justify-center my-3",children:s.jsx("img",{src:j,alt:"Image",className:"w-48 "})}),s.jsxs("div",{className:"grid grid-cols-12 gap-3 text-black mx-3 my-3",children:[s.jsxs("div",{className:"col-span-6 font-normal",children:[s.jsx("p",{className:"font-normal",children:"Payment Method:"}),s.jsx("p",{children:"Plan:"}),s.jsx("p",{children:"Subscription ID:"}),s.jsx("p",{children:"Customer ID:"}),s.jsx("p",{children:"Amount:"})]}),s.jsxs("div",{className:"col-span-6  ",children:[s.jsx("p",{className:"capitalize",children:a.method}),s.jsx("p",{children:a.plan}),s.jsx("p",{children:a.subscriberId}),s.jsx("p",{children:a.subscription}),s.jsx("p",{children:parseFloat(a.amount).toFixed(2)})]})]}),s.jsx("hr",{className:"my-2 mx-5"}),s.jsxs("div",{className:"grid grid-cols-12 gap-3 text-black mx-3 my-3",children:[s.jsxs("div",{className:"col-span-6 font-normal ",children:[s.jsx("p",{children:"Receipt #:"}),s.jsx("p",{children:"Date:"})]}),s.jsxs("div",{className:"col-span-6 ",children:[s.jsx("p",{children:a.recieptId}),s.jsx("p",{children:u(a.date)})]})]}),s.jsx("hr",{className:"my-2 mx-5"}),s.jsxs("div",{className:"grid grid-cols-12 gap-3 text-black mx-3",children:[s.jsxs("div",{className:"col-span-6 ",children:[s.jsx("p",{className:"font-normal",children:"Basic Monthly Plan:"}),s.jsx("p",{children:"Qty 1"})]}),s.jsx("div",{className:"col-span-6",children:s.jsx("p",{children:a.method==="razorpay"?`₹${parseFloat(a.amount).toFixed(2)}`:`$${parseFloat(a.amount).toFixed(2)}`})})]}),s.jsx("hr",{className:"my-2 mx-5"}),s.jsxs("div",{className:"grid grid-cols-12 gap-3 text-black mx-3 my-3",children:[s.jsxs("div",{className:"col-span-6 ",children:[s.jsx("p",{className:"font-normal",children:"Tax:"}),s.jsxs("p",{children:[a.tax,"%"]})]}),s.jsx("div",{className:"col-span-6",children:s.jsx("p",{children:a.method==="razorpay"?`₹${(parseFloat(a.amount)*(a.tax/100)).toFixed(2)}`:`$${(parseFloat(a.amount)*(a.tax/100)).toFixed(2)}`})})]}),s.jsx("hr",{className:"my-2 mx-5"}),s.jsxs("div",{className:"grid grid-cols-12 gap-3 text-black mx-3 my-8",children:[s.jsx("div",{className:"col-span-6 font-normal",children:s.jsx("p",{children:"Grand Total:"})}),s.jsx("div",{className:"col-span-6 ",children:s.jsx("p",{children:(()=>{const c=parseFloat(a.amount),e=c*(a.tax/100),n=c+e;return a.method==="razorpay"?`₹${n.toFixed(0)}`:`$${n.toFixed(0)}`})()})})]})]}),s.jsx("div",{className:"flex  my-8 ",children:s.jsx("button",{className:`text-lg bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] w-52 py-2.5 ${t?"opacity-15":""}`,disabled:t,onClick:p,children:t?s.jsxs("span",{className:"flex justify-center gap-3",children:[" ",s.jsx(g,{className:"h-6 w-6 animate-spin"})," ",s.jsx("p",{children:"Downloading ...."})]}):"Download Invoice"})})]})};export{I as default};
