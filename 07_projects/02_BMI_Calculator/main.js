const form = document.querySelector('form');
//if we take height or weight we get empty value
form.addEventListener('submit',(event) => {
    event.preventDefault();

   const height = parseInt(document.querySelector("#height").value);
   const weight = parseInt(document.querySelector("#weight").value);
   const results = document.querySelector("#results");

   if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = 'Please give a valid height';
   }
   else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = 'Please give a valid weight';
   }
   else {
    const BMI = (weight / ((height*height)/10000)).toFixed(2);
    // show the result
    results.innerHTML = `<span>${BMI}</span>`
   }
});