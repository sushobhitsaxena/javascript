const form=document.querySelector('form')
 
form.addEventListener('submit',function(e){

    e.preventDefault()

   const height= parseInt(document.querySelector('#height').value) //it will give the value of height given by the user but it will give in string type so we have to convert it in int so we use parseInt which convert any value into int data type

   const weight= parseInt(document.querySelector('#weight').value)

   const result=document.querySelector('#results')

   if(height==''||height<0||isNaN(height))
   {
    result.innerHTML="please give a valid height"

   } //isNan(height)-->this method will check if the value (height) given by the user can be converted in a number or not if it can then it will give true 
  else if(weight ==''||weight < 0||isNaN(weight))
   {
    result.innerHTML="please give a valid weight"

   }
   else
   {
    const bmi= (weight/((height*height)/10000)).toFixed(2)

    result.innerHTML=`<span> ${bmi} </span>`

   } 
})