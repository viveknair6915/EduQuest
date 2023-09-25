let form=document.querySelector("form");

form.addEventListener("submit",(event)=>{
    let email=event.target.lemail.value;
    let password=event.target.lpassword.value;

    let checkStatus=1;

    if(password.length<8)
    {
        alert("Password should contain atleast 8 characters");
        checkStatus=0;
    }

    if(checkStatus=1)
    {
        let userData=JSON.parse(localStorage.getItem("userDetails")) ?? [];
        for(let v of userData)
        {
            if(v.email==email&&v.password==password)
            {
                checkStatus=0;
                break;
            }
        }
    }

    if(checkStatus==0)
    {
        alert("Login Successful!");
        window.location.href = 'port.html'
    }
    else
    {
        alert("Wrong email or password");
        event.preventDefault();

    }
    event.preventDefault();

})