let search;
let searchlistcontainer = document.querySelector(".search-list-container");
let html = "";
(async () => {
    let tools = await fetch("./tools.json");
    tools = await tools.json();
    // Now you can use the 'tools' variable here or perform any further operations
    search = async () => {

    // Filter tools based on the search query
    let searchlist = await tools.filter((e) => e.name.toLowerCase().includes(document.getElementById('search').value.toLowerCase()));

    // Generate HTML for the filtered tools
    html = searchlist.map((tool) => {
        return `<a href="#"><li class="search-list"> ${tool.name} <span>${tool.views}</span></li></a>`;
    }).join("");

    // Update the search list container with the generated HTML
    searchlistcontainer.innerHTML = html;
}

// Add event listener to trigger search on keyup event in the search input
document.getElementById('search').addEventListener("keyup", search);
})();


