const checkboxes = document.querySelectorAll(".inbox input[type='checkbox']");

let lastChecked;

const handleCheck = (event, selectCheckbox) => {
  let inBetween = false;

  if (event.shiftKey && selectCheckbox.checked) {
    checkboxes.forEach(checkbox => {
      if (checkbox === selectCheckbox || checkbox === lastChecked) {
        inBetween = !inBetween;
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = selectCheckbox;
}

checkboxes.forEach(checkbox => checkbox.addEventListener("click", (event) => handleCheck(event, checkbox)));
