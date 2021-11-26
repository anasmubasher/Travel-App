var Client;(()=>{"use strict";var e={d:(t,o)=>{for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function o(){const e=document.getElementById("country").value;n(`http://api.geonames.org/wikipediaSearchJSON?formatted=true&q=${e}&maxRows=1&username=AnasMubasher&style=full`).then((e=>{console.log(e),a("/addData",{countryCode:e.geonames[0].countryCode,lat:e.geonames[0].lat,lng:e.geonames[0].lng})}))}e.r(t),e.d(t,{cityInfo:()=>o,handleSubmit:()=>d,tripDate:()=>c,weatherForcast:()=>l});const n=async e=>{const t=await fetch(e);try{const e=await t.json();return console.log(e),e}catch(e){console.log("error",e)}},a=async(e="",t={})=>{console.log(t);const o=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});try{const e=await o.json();return console.log(e),e}catch(e){console.log("error",e)}};function c(){const e=new Date(document.getElementById("start").value).getTime(),t=new Date(document.getElementById("end").value).getTime();let o=e-(new Date).getTime();var n=t-e;let a=Math.floor(o/864e5),c=Math.floor(o%864e5/36e5),l=Math.floor(o%36e5/6e4),r=Math.floor(n/864e5);console.log(`${a}d ${c}h ${l}m`),console.log(`${r}d`),document.getElementById("remainTime").innerHTML=`${a}d ${c}h ${l}m`,document.getElementById("tripLength").innerHTML=`${r}d`}function l(){r().then((e=>{console.log(e),s(e).then((e=>{console.log("We can access data here"),console.log(e),i(e)}))}))}const r=async()=>{const e=await fetch("/all");try{const t=await e.json();return console.log(t),t}catch(e){console.log("error",e)}},s=async e=>{console.log(e);const t=e[e.length-1].south,o=e[e.length-1].north,n=await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?&lat=${t}&lon=${o}&days=1&key=7ae084a19a1340c997dce57edc354e84`);try{const e=await n.json();return console.log(e),document.getElementById("high-temp").innerHTML=`<span>high_temp: ${e.data[0].high_temp}</span>`,document.getElementById("low-temp").innerHTML=`<span>low_temp: ${e.data[0].low_temp}</span>`,e}catch(e){console.log("error",e)}},i=async e=>{const t=`https://pixabay.com/api/?key=24424801-8737eb1c670dcf9ac7e799f73&q=${e.city_name}&image_type=photo&pretty=true`,o=await fetch(t);try{const e=await o.json();console.log(e),document.getElementById("img").setAttribute("src",e.hits[0].webformatURL)}catch(e){console.log("error",e)}};async function d(e){e.preventDefault(),await Client.cityInfo(),await Client.tripDate(),await Client.weatherForcast()}document.getElementById("generate").addEventListener("click",d),Client=t})();