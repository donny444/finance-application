const add = document.getElementById("add");
const form = document.getElementById("userinput");
const conf = document.getElementById("conf");
add.addEventListener("click", visibleForm = () => form.style.visibility = "visible");
conf.addEventListener("click", hiddenForm = () => form.style.visibility = "hidden");

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

/*
function balance(param) {
    switch(param) {
        case "income":
            balance += income;
            break;
        case "outcome":
            balance -= outcome;
    }
}
*/