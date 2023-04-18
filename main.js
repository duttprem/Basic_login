function validateForm(){
    let  name = document.myform.name.value;

    let password = document.myform.password.value;

    let x = document.myform.email.value
    let atposition = x.indexOf("@");
    let dotposition =x.lastIndexOf(".");



    if (name==null || name==""){
        alert("Name can not be Blank")
        return false;
    }else if(password.length <6){
        alert("Password must be atleast 6 character");
        return false;
    }else if(atposition<1 || dotposition <atposition+2 ||dotposition+2>=x.length){
        alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition)
        return false
   
    
}

}

function ConfirmForm() {

    let y = document.f1.email.value;
    let atposition = y.indexOf("@");
    let dotposition =y.lastIndexOf(".");

    


     if(atposition<1 || dotposition <atposition+2 ||dotposition+2>=y.length){
        alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition)
        return false
     }
     

}