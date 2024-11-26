// script.js
const funFacts = [
    "Sarah is an enthusiastic hiker who particularly enjoys exploring the Appalachian region, experiencing both Great Smoky Mountains and Shenandoah National Parks.",
    "The Appalachian Trail weaves through both Shenandoah and Great Smoky Mountains National Parks, offering hikers a continuous trail experience.",
    "The Great Smoky Mountains National Park hosts over 1,500 different flowering plant species throughout the year.",
    "Shenandoah National Park features over 500 miles of hiking trails, including 101 miles of the Appalachian Trail.",
    "The Great Smoky Mountains are home to more tree species than all of northern Europe combined."
];

// Get DOM elements
const generateButton = document.getElementById('generateBtn');
const factDisplay = document.getElementById('factDisplay');

// Function to generate random fact
// Function to generate random fact
function generateFact() {
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    factDisplay.textContent = funFacts[randomIndex];
}


// Add click event listener to button
generateButton.addEventListener('click', generateFact);
