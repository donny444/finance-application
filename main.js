const add = document.getElementById("add");
const form = document.getElementById("form");
const conf = document.getElementById("conf");
const container = document.getElementsByClassName("container");
add.addEventListener("click", () => form.style.visibility = "visible");
conf.addEventListener("submit", (event) => {
    event.preventDefault();

    let recordDiv = docoument.createElement("div");
    document.body.appendChild(recordDiv);
    let recordP = document.createElement("p");
    recordP.innerHTML = "Record";
    recordDiv.appendChild(recordP);
    recordDiv.setAttribute("class", "container");

    let bal = parseFloat(document.getElementById("bal").textContent);
    let amou = parseFloat(document.getElementById("amou").value);
    bal += amou;

    document.getElementById("bal").innerHTML = bal.toString();
    form.style.visibility = "hidden";
    form.reset();
});
/*
function create() {
    let createForm = document.createElement("form");
    document.body.appendChild(createForm);
    let arr = ["category", "amount"];
    for(i in arr.length) {
        let createLabel = document.createElement("label");
        switch(arr[i]) {
            case "category":
                let createSelect = docement.createElement("select");
                let node = createLabel.createTextNode = "Select the Category";
                createLabel.appendChild(node);
                document.form.appendChild(createLabel);
                document.form.appendChild(createSelect);
            case "amount":
                createInput.createTextNode = "Enter Amount";
                document.form.appendChild(createLabel);
                let createInput = docement.createElement("input");
                createInput.setAttribute("type", "number");
                document.form.appendChild(createInput);
        }
    }
    return;
}
*/

function create() {
    let recordDiv = docoument.createElement("div");
    document.body.appendChild(recordDiv);
    let recordP = document.createElement("p");
    recordP.innerHTML = "Record";
    recordDiv.appendChild(recordP);
    recordDiv.setAttribute("class", "container");
}

function calculate() {
    let bal = parseFloat(document.getElementById("bal").textContent);
    let amou = parseFloat(document.getElementById("amou").value);
    bal += amou;
}