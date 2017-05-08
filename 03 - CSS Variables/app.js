window.addEventListener('DOMContentLoaded', () => {

  const inputs = document.querySelectorAll('.controls input');
  // Using this.dataset will then convert all into an array which make sgrabbing more easier.
  function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    // console.log(suffix); to double check in the console
    //we are using the name of each variable which has been defined in the dataset as 'name' to grab the variables of the root document console.log(this.name);//
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
  }

  inputs.forEach(input =>
  input.addEventListener('change', handleUpdate));

  inputs.forEach(input =>
  input.addEventListener('mouseover', handleUpdate));

});
