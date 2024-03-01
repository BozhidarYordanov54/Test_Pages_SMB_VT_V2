const tx = document.getElementsByTagName("textarea");
for (let i = 0; i < tx.length; i++) {
  tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
  tx[i].addEventListener("input", OnInput, false);
}

function OnInput() {
  this.style.height = 'auto';
  this.style.height = (this.scrollHeight + 4) + "px";

  // Get the label associated with this textarea
  let label = document.querySelector(`label[for=${this.id}]`);

  // If the textarea is empty, reset the styles
  if (this.value === '') {
    this.style.height = 'auto';
    if (label) {
      label.style.top = null;
      label.style.fontWeight = null;
      label.style.fontSize = null;
      label.style.color = null;
      label.style.transition = 'top 0.2s ease-in-out';
    }
  } else {
    // Adjust the position of the label
    if (label) {
      label.style.top = `${-this.scrollHeight - 40}px`;
      label.style.fontWeight = 'bold';
      label.style.fontSize = '0.9em';
      label.style.transition = 'none';
    }
  }
}