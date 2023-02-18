// console.log("Page opened")

let imgHeight;
let imgWidth;

let getWidth = window.prompt('Please Enter the Width You Want\nIt must be a number')
let getHeight = window.prompt('Please Enter the Height You Want\nIt must be a number')

if (getWidth && getHeight) {
  imgHeight = getHeight
  imgWidth = getWidth
} else {
  window.location.reload()
}

const image_code = document.getElementById("code-img");
const div_code = document.getElementById("code-img-div");
const bg_code = document.getElementById("code-img-bg");


image_code.innerText = `<img src="https://unsplash.it/${imgWidth}/${imgHeight}" alt="">\n`;
div_code.innerText = `<div>\n  <img src="https://unsplash.it/${imgWidth}/${imgHeight}" alt="">\n</div>\n`;
bg_code.innerText = `background-image: url("https://unsplash.it/${imgWidth}/${imgHeight}");\nbackground-size: cover;\nbackground-position: center;\n`;

// Remove the actual images
const images = document.querySelectorAll("img");
images.forEach((img) => {
    img.parentNode.removeChild(img);
});

// Get all copy buttons
const copyButtons = document.querySelectorAll(".copy");

// Add click event listener to each copy button
copyButtons.forEach((button) => {
    button.addEventListener("click", () => {
        // Get the pre tag element that contains the code
        const preTag = button.parentElement.querySelector("pre");

        // Create a temporary textarea element to hold the code
        const tempTextarea = document.createElement("textarea");
        tempTextarea.value = preTag.innerText;

        // Append the textarea to the document
        document.body.appendChild(tempTextarea);

        // Select the text in the textarea
        tempTextarea.select();

        // Copy the selected text to the clipboard
        document.execCommand("copy");

        // Remove the temporary textarea from the document
        document.body.removeChild(tempTextarea);
    });
});