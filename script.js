const btn= document.getElementById("calculate");

btn.addEventListener('click',function(){
    let height = document.querySelector('#height').value;
    let weight = document.querySelector('#weight').value;
    
    if(height =='' || weight=='' ||height<=0 ||weight<=0)
    {
        alert("Fields Cannot Be Empty or Negative or 0");
        location.reload();
        height.focus();
        return;
    }
    //BMI = weight in kg/ height inmeter * height in meter
    height = height/100;
    let BMI = (weight)/(height*height);
    BMI = BMI.toFixed(2);
  document.querySelector('#result').innerHTML = BMI;

   if(BMI>=25)
   {
document.querySelector('#comment2').innerHTML = 'Overweight'

   }
   else if(BMI<=18.5){
    document.querySelector('#comment2').innerHTML = 'Underweight'
   }
   else{
        document.querySelector('#comment2').innerHTML = 'Healthy and Fit'

   }
})