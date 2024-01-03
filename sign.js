let password= document.getElementById('password')
let spass= document.getElementById('spass')
let but= document.getElementById('but')

but.addEventListener('click',()=>{
    if(password.value!=spass.value){
        alert("password mismatch");
    }
    else{
        alert("success");
    }

})
