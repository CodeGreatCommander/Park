var form=document.getElementById("form");
form.addEventListener('submit',async function(event){
    event.preventDefault();
    var res=await fetch('http://localhost:3000/password/?email='+document.getElementById("email").value+'&password='+document.getElementById("password").value)
    .then(x=>x.json()).then((data)=>{
        const response=document.getElementById("response");
        if(!data[0])response.innerText='Email not found';
        else if(!data[1])response.innerText="wrong password"
        else response.innerText="can login"
    });
});