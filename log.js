
let email= document.getElementById('email')
let pass= document.getElementById('pass')
let btn= document.getElementById('btn')
btn.addEventListener('click',()=>{
    if(email.value.trim()==""){
        alert("fill the email box");
    }
    else if(pass.value.trim()==""){
        alert("please enter password");}
        else if(pass.value.length<=6){
            alert("number must  be 6 chanracter");

        }
        else if (NaN!=(pass.value.trim())){
            alert("please enter number only");
        }
        else{
            alert("success");
        }


    })
   



    

