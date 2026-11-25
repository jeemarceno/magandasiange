
function showLetter() {
    const letter = document.getElementById("letter");
    const response = document.getElementById("response");

    letter.style.display = "block";
    response.style.display = "block";

    letter.scrollIntoView({
        behavior: "smooth"
    });
}

document.getElementById("responseForm").addEventListener("submit",
    function(event) {
        event.preventDefault();

        const reaction = document.getElementById("reaction").value;
        const reply = document.getElementById("reply").value;

        // Save responses in this browser
        const responseData = {
            reaction: reaction,
            reply: reply,
            date: new Date().toLocaleString()
        };

        localStorage.setItem(
            "herResponse",
            JSON.stringify(responseData)
        );

        document.getElementById("responseForm").style.display = "none";
        document.getElementById("thankYou").style.display = "block";

        document.getElementById("thankYou").scrollIntoView({
            behavior: "smooth"
        });
    }
);
