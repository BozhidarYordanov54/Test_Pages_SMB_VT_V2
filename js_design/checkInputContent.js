function checkIfInputHasValue(){
    var input = document.querySelectorAll(".input-text");

    input.forEach(function(item){
        if(item.value.length > 0){
            item.classList.add("has-content");
        } else {
            item.classList.remove("has-content");
        }
    });
}

checkIfInputHasValue();

document.addEventListener("input", checkIfInputHasValue);