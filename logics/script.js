
//require('dotenv').config();
//const fetch = require('fetch');

// var reqCount = 0;

// fetch(`https://geo.ipify.org/service/account-balance?apiKey=${GEO_IPIFY_KEY}`).then((credits)=>{
    
//     console.log(data);
// })

// console.log(process.env);

// Fetch only Ip Address of the user
fetch('https://api.ipify.org?format=json').then((data)=>{
    return data.json();
}).then((object)=>{
    document.getElementById('marque').innerHTML=`<p>Your ip:- ${object.ip}`
    user_ip = object.ip;
    console.log(user_ip);
})

// var user_ip = "255.255.255.1";
// var user_Country = "IN";

// fetch('https://api.ipify.org?format=json').then((data)=>{
//     return data.json();
// }).then((object)=>{
//     //document.getElementById('u_ip').innerHTML=object.ip;
//     user_ip = object.ip;
//     return object;
// }).then((obj)=>{

//     fetch(`https://geo.ipify.org/api/v2/country?apiKey=${GEO_IPIFY_KEY}&ipAddress=${obj.ip}`)
//         .then((data)=>{
//             console.log(user_ip);
//             return data.json();
        
//     }).then((obj)=>{
//         document.getElementById('marque').innerHTML=`<p class="ipInfo">Your Ip :- ${obj.ip}  |
//           Country code :- ${obj.location.country}  |  Region :- ${obj.location.region}  |
//           Time Zone :- ${obj.location.timezone}</p>`;//obj.location.country`;
//         console.log(obj);
//     })
// })



