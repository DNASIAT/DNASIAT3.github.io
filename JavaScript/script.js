// Function to generate navigation dynamically (without Wireframes & Comments links)
function generateNavigation(currentPage) {
    let navHTML = "<ul>";
    const pages = [
        { name: "Homepage", url: "index.html" },
        { name: "About Me", url: "aboutme.html" },
        { name: "Gallery", url: "gallery.html" },
        { name: "Contact Me", url: "contactme.html" },
        { name: "Sample Page ", url: "SamplePage.html" },
        
        
    ];

    for (let page of pages) {
        if (page.url === currentPage) {
            navHTML += `<li><strong>${page.name}</strong></li>`; // Highlight current page
        } else {
            navHTML += `<li><a href="${page.url}">${page.name}</a></li>`;
        }
    }
    navHTML += "</ul>";
    document.getElementById("nav-menu").innerHTML = navHTML;
}

// Footer function (ONLY contains Wireframes & Comments links)



// Ensure footer and navigation are generated when the page loads
document.addEventListener("DOMContentLoaded", function () {
    let currentPage = window.location.pathname.split("/").pop();
    
    if (document.getElementById("nav-menu")) {
        generateNavigation(currentPage);
    }

    if (document.getElementById("footer")) {
        generateFooter();
    }
});



    // About Me - Image Fade Effect
    


// Check if on Home page


if (window.location.pathname.includes("gallery.html")) {
    document.addEventListener("DOMContentLoaded", function () {
        const images = [
            "image/Pic3.png",
            "image/Pic4.png",
            "image/Pic5.png",
            "image/Pic6.png",
            "image/Pic7.png"
        ];

        let currentIndex = 0;
        let imageElement = document.createElement("img");
        imageElement.src = images[currentIndex];
        imageElement.style.maxWidth = "100%";
        document.querySelector("main").appendChild(imageElement);

        const prevButton = document.createElement("button");
        prevButton.textContent = "Previous";
        const nextButton = document.createElement("button");
        nextButton.textContent = "Next";

        prevButton.style.margin = "10px";
        nextButton.style.margin = "10px";

        document.querySelector("main").appendChild(prevButton);
        document.querySelector("main").appendChild(nextButton);

        function showImage(index) {
            imageElement.src = images[index];
        }

        prevButton.addEventListener("click", function () {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        });

        nextButton.addEventListener("click", function () {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        });

        setInterval(function () {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        }, 5000);
    });
}

if (window.location.pathname.includes("contactme.html")) 
    {
    document.addEventListener("DOMContentLoaded", function () {
        const form = document.getElementById("contact-form");
        const email = document.getElementById("email");
        const password = document.getElementById("password");
        const passwordStrength = document.getElementById("password-strength");
        const comments = document.getElementById("comments");
        const charCount = document.getElementById("char-count");
        const dateInput = document.getElementById("date");

        form.addEventListener("submit", function (e) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value)) {
                alert("Please enter a valid email address.");
                e.preventDefault();
            }
        });

        password.addEventListener("input", function () {
            const strength = password.value.length;
            if (strength < 6) {
                passwordStrength.textContent = "Weak";
                passwordStrength.style.color = "red";
            } else if (strength < 10) {
                passwordStrength.textContent = "Medium";
                passwordStrength.style.color = "orange";
            } else {
                passwordStrength.textContent = "Strong";
                passwordStrength.style.color = "green";
            }
        });

        comments.addEventListener("input", function () {
            charCount.textContent = `${comments.value.length} / 500`;
        });

        // Simple jQuery popup calendar for date
        $(function () {
            $("#date").datepicker();
        });
    });
}


function openTab(evt, tabName) {
    // Hide all tab content
    var content = document.getElementsByClassName("tab-content");
    for (var i = 0; i < content.length; i++) {
        content[i].classList.remove("active");
    }

    // Deactivate all tab buttons
    var links = document.getElementsByClassName("tab-link");
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
    }

    // Show the current tab and add an "active" class to the button
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}