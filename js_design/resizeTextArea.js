const tx = document.getElementsByTagName("textarea");
for (let i = 0; i < tx.length; i++) {
  tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
  tx[i].addEventListener("input", OnInput, false);
}

function OnInput() {
  this.style.height = 'auto';
  this.style.height = (this.scrollHeight) + "px";

  // Get the label associated with this textarea
  let label = document.querySelector(`label[for=${this.id}]`);

  // If the textarea is empty, reset the styles
  if (this.value === '') {
    this.style.height = null;
    if (label) {
      label.style.top = null;
    }
  } else {
    // Adjust the position of the label
    if (label) {
      label.style.top = `${-this.scrollHeight - 41}px`;
    }
  }
}