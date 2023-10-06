const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const fullscreenButton = document.getElementById("fullscreenButton");
const fullscreenContainer = document.getElementById("fullscreenContainer");
const searchInput = document.getElementById("searchInput");
const table = document.querySelector("table");
const rows = table.getElementsByTagName("tr");
// JavaScript for showing/hiding the scroll-to-top button
    window.addEventListener("scroll", function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("scrollToTopButton").style.display = "block";
        } else {
            document.getElementById("scrollToTopButton").style.display = "none";
        }
    });

// JavaScript for scrolling to the top of the page
    document.getElementById("scrollToTopButton").addEventListener("click", function() {
        scrollToTop();
    });

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    searchInput.addEventListener("input", function() {
            const searchTerm = searchInput.value.toLowerCase();

            for (let i = 1; i < rows.length; i++) {
                const cells = rows[i].getElementsByTagName("td");
                const match = matchRow(cells, searchTerm);

                if (match) {
                    rows[i].style.display = "";
                } else {
                    rows[i].style.display = "none";
                }
            }
        });

        function matchRow(cells, searchTerm) {
            for (let j = 1; j <= 2; j++) {
                const cellContent = cells[j].textContent.toLowerCase();

                if (cellContent.includes(searchTerm)) {
                    return true;
                }
            }
            return false;
        }
// Function to request full screen
    function requestFullScreen() {
        if (fullscreenContainer.requestFullscreen) {
            fullscreenContainer.requestFullscreen();
        } else if (fullscreenContainer.mozRequestFullScreen) {
            fullscreenContainer.mozRequestFullScreen();
        } else if (fullscreenContainer.webkitRequestFullscreen) {
             fullscreenContainer.webkitRequestFullscreen();
        } else if (fullscreenContainer.msRequestFullscreen) {
                fullscreenContainer.msRequestFullscreen();
        }
    }
        fullscreenButton.addEventListener("click", () => {
            requestFullScreen();
        });
        

const countElement = document.getElementById('count');
update();
function update(){
     fetch('https://api.countapi.xyz/hit/https://robiulhossain180.github.io/robiul/index.html/?amount=1')
     .then(res=> res.json()).then(res => {
        countElement.innerHTML = res.value;
     })
}