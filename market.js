 // Get all buttons with class buy
const buyButtons = document.querySelectorAll('.buy');


// Get the dialogue box
const dialogueBox = document.getElementById('dialogue-box');

// Get the close button
const closeButton = document.getElementById('close-dialogue-box');

// Add event listener to each buy button
buyButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Show the dialogue box
    dialogueBox.classList.remove('hidden');
  });
});

// Add event listener to the close button
closeButton.addEventListener('click', () => {
  // Hide the dialogue box
  dialogueBox.classList.add('hidden');
});  

let images = [
'shoe1.jpg',
'yard1.jpg',
'shoe2.jpg',
'yard2.jpg',
'shoe3.jpg',
'yard3.jpg'];
        let index = 0;
        
        function showImage() {
            document.getElementById("slider").src = images[index];
            index = (index + 1) % images.length;
            setTimeout(showImage, 4000); // Change the image every 2 seconds
        }        
   showImage(); //show slide
  
  /* displaying another interface for different business */ 
function showAbout() {  
  const  about = document.getElementById('about-developers');
about.style.display="block";
}
function hideAbout() {
 document.getElementById('about-developers').style.display="none"; 
}

function Close() { 
 document.getElementById('business-gallery').style.display="none";
 } 



const viewImages = document.querySelectorAll('#item');
const imageContainer = document.getElementById('image_container');

viewImages.forEach(image => {
  image.addEventListener('click', function() {
    const img = document.createElement('img');
    img.src = image.src;
    img.style.width = '100%'; // Make the image full-width in the container
    imageContainer.innerHTML = ''; // Clear previous image
    imageContainer.appendChild(img);
    imageContainer.style.display = 'block';
  });
});

imageContainer.addEventListener('click', function() {
  imageContainer.style.display = 'none';
});