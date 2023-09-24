let form=document.querySelector("form");

form.addEventListener("submit",(event)=>{
    let name=event.target.name.value;
    let email=event.target.email.value;
    let phone=event.target.phone.value;
    let age=event.target.age.value;
    let password=event.target.password.value;
    let cpassword=event.target.cpassword.value;

    var checkStatus=0;

    if(isNaN(age))
    {
        alert("Age should be an integer");
        checkStatus=1;
    }

    if(isNaN(phone)||phone.length!=10)
    {
        alert("Incorrect Phone Number");
        checkStatus=1;
    }

    if(password.length<8)
    {
        alert("Password should contain atleast 8 characters");
        checkStatus=1;
    }

    if(cpassword!=password)
    {
        alert("Please confirm the password again");
        checkStatus=1;
    }

    let userData=JSON.parse(localStorage.getItem("userDetails")) ?? [];
    for(let v of userData)
    {
        if(v.email==email||v.phone==phone){
            checkStatus=1;
            break;
        }
    }
    if(checkStatus==1)
    {
        alert("Email or Phone Already Exists");
    }
    else{
        userData.push({
            'name':name,
            'email':email,
            'phone':phone,
            'age':age,
            'password':password
        })
        localStorage.setItem("userDetails",JSON.stringify(userData))
        window.location.href = "port.html";

    }

    event.preventDefault();
})

