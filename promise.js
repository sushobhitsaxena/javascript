const promiseONE=new Promise(function(resolve,reject){

    //do async task
    // db calls ,cryptography,network
    
    setTimeout(function(){
    
        console.log('async task is complete ')
        resolve()
    
    },1000)
    
     })
    
     promiseONE.then(function(){
        console.log("promise consumed")
        
     })
    
    //another way to use the promise
    
     new Promise(function(resolve,reject){
    setTimeout(function(){
    
        console.log("async task 2 has been completed ")
    
        resolve()
    },1000)
    
     }).then(function(){  // run when it will encounter the resolve()
    
        console.log("async 2 reolved")
     })
    
     /////////////////////////////////////
    
     const promise3=new Promise(function(resolve,reject)
    {
    
    setTimeout(function(){
    
        resolve({username:"chai",email:"chai@code.com"})
    
    },1000)
    
    })
    
    promise3.then(function(user){
    
        console.log(user) //we get the values passed in resolve function
    
    })
    /////////////////////////
    const promise4=new Promise(function(resolve,reject){
    
        setTimeout(function(){
     let error=true
    if(!error)
    {
        resolve({username:"sushobhit",passcode:"12345"})
    }
    else{
        reject('error:something went wrong')
    }
        },1000)
    
    
    })
    
    promise4
    .then((user)=>{
    
        console.log(user)
        return user.username
    
    })
    .then((username)=>{ //run only when it will encounter the resolve
        console.log(username)
    })
    .catch(function(error){
        console.log(error)      //when error is true then it will run
    })
    .finally(()=>console.log("finally the promise is either resolve or rejected"))  //finally is a default syntax which will always execute
    
    ///////////////////////////////////
    
    const promise5=new Promise(function(resolve , reject){
    
        setTimeout(function(){
            let error=true
           if(!error)
           {
               resolve({username:"javascript",passcode:"123"})
           }
           else{
               reject('error:JS went wrong')
           }
               },1000)
           
           
           })
    //other way to do .then 
    
    async function consumepromise5 (){
    
       try {
        
        const response= await promise5
        console.log(response)
       } 
       catch (error) {
           console.log (error);
       }
    }
           consumepromise5()
    
    
    
    
    