function validateform(){
    var name=document.myform.name.value;
    var password=document.myform.name.value;
    if(name==null || name==""){
        alert("name cannot null praveen");
        return false;
    }if(password.length<6)
    {

    alert("password atleast 6 digit ");
    return false;

    alert("welcome");
    }
}

