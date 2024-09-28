const header = document.getElementById("header");
const image = document.getElementById("image");
const textContainer = document.getElementById("textContainer");
const description = document.getElementsByClassName("description")[0];

document.getElementById("changeTextButton").addEventListener("click", function() {
    description.innerHTML = "Welcome to our Page";
    header.innerHTML = "Good morning everyone ";
});

description.style.color = "#4B0082";
header.style.color = "#483D8B";

document.getElementById("changeImageButton").addEventListener("click", function() {
    image.src = "img3.jpeg";
});

document.getElementById("addTextNodeButton").addEventListener("click", function() {
    const newTextNode = document.createTextNode("Nature encompasses the living ecosystems around us, including plants, animals, and landscapes. It's the foundation of all life on Earth, providing essential resources such as air, water, food, and shelter. Nature operates through intricate and balanced systems that sustain biodiversity and ensure survival.");
    textContainer.appendChild(newTextNode);
});

document.getElementById("removeNodeButton").addEventListener("click", function() {
    if (textContainer.firstChild) {
        textContainer.removeChild(textContainer.firstChild);
    } else {
        alert("No more nodes to remove!");
    }
});

$('#changeButtonText').click(function() {
    $(this).text("Submission Completed");
});

$('body').css('background-image', 'url(background.jpg)');

$('#userForm').submit(function(event) {
    event.preventDefault();
    const name = $('#userName').val();
    const email = $('#userEmail').val();
    alert(`Name: ${name}, Email: ${email}`);
    $(this).trigger('reset');
});

$('#submitButton').click(function() {
    $('#userForm input[type="text"]').attr('placeholder', 'Updated Name Placeholder');
});
