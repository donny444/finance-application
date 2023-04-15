const add = document.getElementById("add");
const form = document.getElementById("userinput");
const conf = document.getElementById("conf");

add.addEventListener("click", visibleForm = () => form.style.display = "inline-block");

conf.addEventListener("click", (event) => {
    event.preventDefault();
    let bal = parseFloat(document.getElementById("bal").textContent);
    let num = parseFloat(document.getElementById("amou").value);
    /*let activity = document.getElementById("activity").value;

    if (activity === "Add") {
        bal += num;
    } else if (activity === "Subtract") {
        bal -= num;
    }*/
    bal += num
    document.getElementById("bal").innerHTML = bal.toString();
    form.reset();
    form.style.display = "none";
});
