const endDate = "20 June 2024 8:00:00 PM";
document.getElementById("date1").innerHTML = endDate;
const input = document.querySelectorAll("input");
function clock() {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000;

    if (diff <= 0) {
        document.querySelector(".col").innerHTML = "";
        document.querySelector(".col").outerHTML = `
    <h1 style="
        font-size: 3.5rem;
        margin-top: 10rem;
        margin-left: 1rem;
        text-align: center;
        background: linear-gradient(45deg, yellow,lightblue);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    ">
        Let's Start Shopping Shopping  and Save More <br>Thank you
    </h1>`;

        return newElement;
    }

    input[0].value = Math.floor(diff / 3600 / 24);
    input[1].value = Math.floor(diff / 3600) % 24;
    input[2].value = Math.floor(diff / 60) % 60;
    input[3].value = Math.floor(diff) % 60;
}

// Ensure this runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('date').style.fontSize = '2.5rem'; 
    document.querySelector('.col').style.fontSize = '40px'; 
    setInterval(clock, 1000);
});
