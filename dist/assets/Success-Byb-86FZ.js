import{r,b as e,A as t,j as o}from"./index-6WT6uXl3.js";const I=()=>{r.useState(!1);const[m,g]=r.useState({}),[p,i]=r.useState(!0);r.useEffect(()=>{c()},[]);async function c(){if(localStorage.getItem("method")==="stripe"){const a={subscriberId:localStorage.getItem("stripe"),uid:localStorage.getItem("user"),plan:localStorage.getItem("plan")},n=t+"/api/stripedetails";await e.post(n,a).then(s=>{g(s.data),localStorage.setItem("type",localStorage.getItem("plan")),i(!1)});const l={subscriberId:localStorage.getItem("stripe"),subscription:m.customer.id||"id not found",user:localStorage.getItem("user"),plan:localStorage.getItem("plan"),method:"stripe",fname:localStorage.getItem("fname"),lname:localStorage.getItem("lname"),email:localStorage.getItem("email"),phone:localStorage.getItem("phone"),amount:localStorage.getItem("amount"),course:localStorage.getItem("coursecount"),tax:localStorage.getItem("tax")};if((await e.post(`${t}/api/usersubscription`,l)).status===200){const s={user:localStorage.getItem("user"),count:localStorage.getItem("coursecount")};await e.post(`${t}/api/countplan`,s),localStorage.removeItem("amount"),localStorage.removeItem("coursecount"),localStorage.removeItem("stripe"),localStorage.removeItem("method"),localStorage.removeItem("plan")}}else try{if(localStorage.getItem("method")==="razorpay"){const a={subscriberId:localStorage.getItem("razorpay"),subscription:localStorage.getItem("subscription"),user:localStorage.getItem("user"),plan:localStorage.getItem("plan"),method:"razorpay",fname:localStorage.getItem("fname"),lname:localStorage.getItem("lname"),email:localStorage.getItem("email"),phone:localStorage.getItem("phone"),amount:localStorage.getItem("amount"),course:localStorage.getItem("coursecount"),tax:localStorage.getItem("tax")};if((await e.post(`${t}/api/usersubscription`,a)).status===200){const l={user:localStorage.getItem("user"),count:localStorage.getItem("coursecount")},u=await e.post(`${t}/api/countplan`,l);localStorage.removeItem("amount"),localStorage.removeItem("coursecount"),localStorage.removeItem("razorpay"),localStorage.removeItem("method"),localStorage.removeItem("plan"),localStorage.removeItem("subscription")}}}catch{c()}}return o.jsxs("div",{className:"font-poppins font-extralight my-12",children:[o.jsx("p",{className:"text-center text-xl ",children:"Thank You 🎉"}),o.jsxs("p",{className:"text-center font-normal text-black py-4 dark:text-white",children:[o.jsx("strong",{children:localStorage.getItem("fname")})," for subscribing to our"," ",o.jsx("strong",{children:localStorage.getItem("plan")})," Plan."," "]})]})};export{I as default};
