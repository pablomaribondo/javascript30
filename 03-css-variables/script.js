const inputs = document.querySelectorAll(".controls input");

const handleUpdate = event => {
  const { name, value, dataset } = event.target;
  const suffix = dataset.sizing || "";
  document.documentElement.style.setProperty(`--${name}`, `${value}${suffix}`);
};

inputs.forEach(input => input.addEventListener("change", handleUpdate));
inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));
