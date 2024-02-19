
let tools= [
    {
        "name" : "Markdown to HTML Convertor",
        "desc" : "Markdown to HTML Convertor",
        "views" : "4k"
    },
    {
        "name" : "JPG to PNG Convertor",
        "desc" : "JPG to PNG Convertor",
        "views" : "48k"
    },
    {
        "name" : "JavaScript Minifier",
        "desc" : "JavaScript Minifier",
        "views" : "64k"
    },
    {
        "name" : "JavaScript Obfuscator",
        "desc" : "JavaScript Obfuscator",
        "views" : "41k"
    },
    {
        "name" : "HTML to JSX Convertor",
        "desc" : "HTML to JSX Convertor",
        "views" : "42k"
    },
    {
        "name" : "Markdown Editor",
        "desc" : "Markdown Editor",
        "views" : "43k"
    },
    {
        "name" : "Code Editor",
        "desc" : "Codes20",
        "views" : "44k"
    }
]

let searchlistcontainer = document.querySelector(".search-list-container");
let html="";
let searchlist = " " ;
// let  search = async () => {
    // let searchlist = await fetch("./tools.json").then(
    //     (res)=>{ window.res = res; res = res.text()}
    // ).then((e)=>{return e.json()});
// tools.map((tool)=>{
//        html+= `<a href="#"><li class="search-list"> ${tool.name} <span>${tool.views}</span></li></a>`;
//     })
let search = e => {
     searchlist = tools.filter((e)=> e.name.toLowerCase().includes(document.getElementById('search').value.toLowerCase()))
    html = searchlist.map((tool)=>{
    return `<a href="#"><li class="search-list"> ${tool.name} <span>${tool.views}</span></li></a>`;
    }
).join("")
searchlistcontainer.innerHTML=html

    
}
// }

document.getElementById('search').addEventListener("keyup",search)


