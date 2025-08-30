function showLoder(){
    document.querySelector('.loader').style.display = 'none';
    document.querySelector('.content').style.display = 'block';
}
setTimeout(showLoder, 3000); 

/* search bar and its associated methods */
 const searchCont = document.querySelector('.search-container');
  const showSearch = document.getElementById('show-search');
  const hideSearch = document.getElementById('canc-search');
 
showSearch.addEventListener('click',()=>{
   searchCont.style.display="block";
}); 

hideSearch.addEventListener('click',()=>{
   searchCont.style.display="none";
}); 

 // Get the search input and button elements
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const searchResults = document.getElementById('search-results');

// Add event listener to the search button
searchButton.addEventListener('click', () => {
  // Get the search query
  const searchQuery = searchInput.value.trim().toLowerCase();

  // Check if the search query is not empty
  if (searchQuery !== '') {
  
    // Get all elements on the page that contain text
    const textElements = document.querySelectorAll('h1,h2,h3');

    // Initialize an empty array to store the search results
    const results = [];

    // Iterate through the text elements
    textElements.forEach(element => {
      // Get the text content of the element
      const text = element.textContent.toLowerCase();

      // Check if the text contains the search query
      if (text.includes(searchQuery)) {
        // Add the element to the search results array
        results.push(element);
      }
    });

    // Display the search results
    displaySearchResults(results);
  }
});

// Function to display the search results
function displaySearchResults(results) {
  // Clear the search results container
  searchResults.innerHTML = '';

  // Loop through the search results
  results.forEach(result => {
    // Create a list item for each search result
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = `#${result.id}`;
    link.textContent = result.textContent;
    link.onclick = () => {
      // Scroll to the element when the link is clicked
      result.scrollIntoView({ behavior: 'smooth' });
    };
    listItem.appendChild(link);
    searchResults.appendChild(listItem);
  });
}

