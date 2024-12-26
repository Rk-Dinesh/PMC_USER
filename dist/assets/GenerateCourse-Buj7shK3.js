import{u as J,r,j as e,d as Y,b as d,B as n,A as u}from"./index-uakTF4_L.js";const q=()=>{const N=J(),w=5,[l,p]=r.useState([{sub:""}]),[o,T]=r.useState("4"),[c,v]=r.useState("Text & Image Course"),[M,C]=r.useState(!1),[S,i]=r.useState(!1);r.useState("");const[k,F]=r.useState([]),[I,$]=r.useState(0);let x=localStorage.getItem("type");const f=localStorage.getItem("user");r.useEffect(()=>{(async()=>{localStorage.getItem("type")!=="free"?(C(!0),await A(),await g()):await g()})()},[]);async function A(){const s=u+`/api/getcountplan?user=${f}`;try{const a=(await d.get(s)).data;$(a[0].count)}catch{}}async function g(){const s=u+`/api/courses?userId=${f}`;try{const t=await d.get(s);F(t.data)}catch{}}const D=async()=>{const s={user:localStorage.getItem("user")},t=u+"/api/updatecount";try{const a=await d.post(t,s)}catch(a){console.error(a)}},b=s=>{T(s.target.value)},y=s=>{v(s.target.value)};let V=(s,t)=>{let a=[...l];a[s][t.target.name]=t.target.value,p(a)},L=()=>{l.length<w?p([...l,{sub:""}]):n.error("You can only add 5 sub topics")},E=()=>{let s=[...l];s.pop(),p(s)};const P=s=>{s.preventDefault();const t=[];i(!0),l.forEach(h=>{t.push(h.sub)});const a=document.getElementById("topic1").value;if(!a.trim()){i(!1),n.error("Please fill in all required fields");return}if(t.length===0){i(!1),n.error("Please fill in all required fields");return}const m=`Generate a list of Strict ${o} topics and any number sub topic for each topic for main title ${a.toLowerCase()}, everything in single line. Those ${o} topics should Strictly include these topics :- ${t.join(", ").toLowerCase()}. Strictly Keep theory, youtube, image field empty. Generate in the form of JSON in this format {
        "${a.toLowerCase()}": [
   {
   "title": "Topic Title",
   "subtopics": [
    {
    "title": "Sub Topic Title",
    "theory": "",
    "youtube": "",
    "image": "",
    "done": false
    },
    {
    "title": "Sub Topic Title",
    "theory": "",
    "youtube": "",
    "image": "",
    "done": false
    }
   ]
   },
   {
   "title": "Topic Title",
   "subtopics": [
    {
    "title": "Sub Topic Title",
    "theory": "",
    "youtube": "",
    "image": "",
    "done": false
    },
    {
    "title": "Sub Topic Title",
    "theory": "",
    "youtube": "",
    "image": "",
    "done": false
    }
   ]
   }
  ]
  }`;G(m,a,c)};async function G(s,t,a){const m={prompt:s};try{const R=(await d.post(`${u}/api/prompt`,m)).data.generatedText.replace(/```json/g,"").replace(/```/g,"");try{const j=JSON.parse(R);i(!1),x==="free"&&k.length>=1?n.error("Please subscribe to access more courses."):x!=="free"&&(I>0?(await D(),N("/topics",{state:{jsonData:j,mainTopic:t.toLowerCase(),type:a.toLowerCase()}})):n.error("Your monthly plan has reached the limit. Please upgrade the Monthly plan for further access"))}catch{}}catch{}}return e.jsxs("div",{className:"my-5 text-white font-poppins ",children:[e.jsx("p",{className:"text-center font-extralight",children:"Generate Course"}),e.jsx("form",{onSubmit:P,children:e.jsxs("div",{className:" grid grid-cols-12 gap-3 mx-10 mt-6",children:[e.jsxs("div",{className:"lg:col-span-6 md:col-span-6 col-span-12",children:[e.jsx("p",{className:"text-sm font-extralight",children:"Type the topic on which you want to Generate course."}),e.jsxs("div",{className:"flex flex-col py-8 gap-1",children:[e.jsxs("label",{htmlFor:"topic1",value:"Topic",children:["Course Topic ",e.jsx("span",{className:"text-red-600",children:"*"})]}),e.jsx("input",{type:"text",placeholder:"Enter Topic",id:"topic1",className:"py-2 px-4  rounded-md  text-black shadow-md outline-none lg:w-3/4 md:w-full w-full"})]}),e.jsx("p",{className:"text-sm font-extralight",children:"Select the number of Subtopics you want this course to be spread across."}),e.jsxs("p",{className:"text-lg py-2",children:["No of Subtopic ",e.jsx("span",{className:"text-red-600",children:"*"})]}),e.jsxs("div",{className:"flex flex-col space-y-4",children:[e.jsxs("div",{className:"flex items-center cursor-pointer",children:[e.jsx("input",{type:"radio",name:"value",id:"4",value:"4",onChange:b,checked:o==="4",className:"hidden peer"}),e.jsxs("label",{htmlFor:"4",className:"flex items-center cursor-pointer",children:[e.jsx("span",{className:"w-4 h-4 border-2 border-gray-400 rounded-sm flex items-center justify-center peer-checked:border-blue-500 peer-checked:bg-blue-500",children:e.jsx("span",{className:`w-3 h-3  ${o==="4"?"bg-white":"hidden"}`})}),e.jsx("span",{className:"ml-2",children:"5"})]})]}),e.jsxs("div",{className:"flex items-center cursor-pointer",children:[e.jsx("input",{type:"radio",name:"value",id:"7",value:"7",onChange:b,checked:o==="7",className:"hidden peer"}),e.jsxs("label",{htmlFor:"7",className:"flex items-center cursor-pointer",children:[e.jsx("span",{className:"w-4 h-4 border-2 border-gray-400 rounded-sm flex items-center justify-center peer-checked:border-blue-500 peer-checked:bg-blue-500",children:e.jsx("span",{className:`w-3 h-3  ${o==="7"?"bg-white":"hidden"}`})}),e.jsx("span",{className:"ml-2",children:"10"})]})]})]}),e.jsx("p",{className:"text-sm font-extralight py-5",children:"You can enter a list of subtopics, which are the specifics you want to learn. You can leave this blank if you want our AI to generate the Sub Topics."}),e.jsxs("div",{className:"flex flex-col py-1 gap-1 ",children:[e.jsxs("label",{htmlFor:"subtopic",value:"Sub Topic",className:"text-lg",children:["Enter Subtopic",e.jsx("span",{className:"text-red-600",children:"*"})]}),l.map((s,t)=>e.jsx("div",{children:e.jsx("input",{name:"sub",value:s.sub,onChange:a=>V(t,a),className:"py-2 px-4 rounded-md text-black shadow-md outline-none lg:w-3/4 md:w-full w-full my-1",placeholder:"Enter Subtopic",type:"text"})},t)),e.jsxs("div",{className:" flex flex-wrap gap-3 ",children:[e.jsx("p",{className:` text-base text-center bg-gradient-to-r from-[#3D03FA] to-[#A71CD2]  py-2.5 ${l.length<=1,"lg:w-3/4 md:w-full w-full"}`,onClick:()=>L(),children:"Add Subtopic"}),l.length>1&&e.jsx("p",{className:" text-base text-center bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] lg:w-3/4 md:w-full w-full  py-2.5 ",onClick:()=>E(),children:"Remove Subtopic"})]})]})]}),e.jsxs("div",{className:" lg:col-span-6 md:col-span-6 col-span-12 lg:mx-10 md:mx-10",children:[e.jsx("p",{className:"text-sm font-extralight",children:"Choose your course content type"}),e.jsxs("p",{className:"text-lg py-2",children:["Course Type ",e.jsx("span",{className:"text-red-600",children:"*"})]}),e.jsxs("div",{className:"flex flex-col space-y-4",children:[e.jsxs("div",{className:"flex items-center cursor-pointer",children:[e.jsx("input",{type:"radio",name:"value1",id:"textcourse",value:"Text & Image Course",onChange:y,checked:c==="Text & Image Course",className:"hidden peer"}),e.jsxs("label",{htmlFor:"textcourse",className:"flex items-center cursor-pointer",children:[e.jsx("span",{className:"w-4 h-4 border-2 border-gray-400 rounded-sm flex items-center justify-center peer-checked:border-blue-500 peer-checked:bg-blue-500",children:e.jsx("span",{className:`w-3 h-3  ${c==="Text & Image Course"?"bg-white":"hidden"}`})}),e.jsx("span",{className:"ml-2",children:"Theory & Image Course"})]})]}),e.jsxs("div",{className:"flex items-center cursor-pointer",children:[e.jsx("input",{type:"radio",name:"value1",id:"videocourse",value:"Video & Text Course",onChange:y,checked:c==="Video & Text Course",className:"hidden peer"}),e.jsxs("label",{htmlFor:"videocourse",className:"flex items-center cursor-pointer",children:[e.jsx("span",{className:"w-4 h-4 border-2 border-gray-400 rounded-sm flex items-center justify-center peer-checked:border-blue-500 peer-checked:bg-blue-500",children:e.jsx("span",{className:`w-3 h-3  ${c==="Video & Text Course"?"bg-white":"hidden"}`})}),e.jsx("span",{className:"ml-2",children:"Video & Theory Course"})]})]})]}),e.jsx("div",{className:"flex justify-center",children:e.jsx("button",{className:" text-base bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] lg:w-1/2 md:w-3/4 w-full py-2.5 my-5 ",type:"submit",children:S?e.jsxs("span",{className:"flex justify-center gap-3",children:[" ",e.jsx(Y,{className:"h-6 w-6 animate-spin"})," ",e.jsx("p",{children:"Generating ...."})]}):"Generate Course"})})]})]})})]})};export{q as default};
