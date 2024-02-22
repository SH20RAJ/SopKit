let search;
let searchlistcontainer = document.querySelector(".search-list-container");
let html = "";
var url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vS7EF_2Yz5C_RbVKsSmOjWWTt2aDWmkb3A1PMbzqQwp8G-FbfxIKEfldhMcMBbdVzhljMSpGHuR7zHV/pub?gid=1011357919&single=true&output=csv";

(async () => {
  // Fetch the CSV data
  let response = await fetch(url);
  let csvData = await response.text();

  // Parse the CSV data using PapaParse
  window.tools = Papa.parse(csvData, {
    header: true,
    dynamicTyping: true
  });

  // Access the parsed data
  tools = tools.data;
  console.log(tools);

  // Function to handle search
  search = async () => {
    // Filter tools based on the search query
    window.searchlist = tools.filter((tool) => {
      return (
        tool.title.toLowerCase().includes(document.getElementById("search").value.toLowerCase()) ||
        tool.desc.toLowerCase().includes(document.getElementById("search").value.toLowerCase()) ||
        tool.link.toLowerCase().includes(document.getElementById("search").value.toLowerCase()) // Assuming 'keywords' is a single string, not an array
      );
    });

    // Generate HTML for the filtered tools
    html = searchlist
      .map((tool) => {
        return `<a href="#"><li class="search-list"> ${tool.title} <span>${tool.views}</span></li></a>`;
      })
      .join("");

    // Update the search list container with the generated HTML
    searchlistcontainer.innerHTML = html;
  };

  // Add event listener to trigger search on keyup event in the search input
  document.getElementById("search").addEventListener("keyup", search);
})();
