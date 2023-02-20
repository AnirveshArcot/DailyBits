function validateForm() { 
    console.log(69);
    var x = document.forms["loginForm"]["email"].value;
    var y = document.forms["loginForm"]["password"].value;
    let flag=0;
    if ((x == "" || x == null)&&(y == "" || y == null)) {
      alert("Email and Password must be filled out must be filled out");
      return false;
    }
    else if ((x == "" || x == null)&&(y != "" || y != null)) {
      alert("Email must be filled out");
      return false;
    }
    else if ((x != "" || x != null)&&(y == "" || y == null)) {
      alert("Password must be filled out");
      return false;
    }
    else if (y.length<9){
      alert("Password must be longer than 8 characters");
      return false;
    }
    for(let i =0;i < y.length; i++){
      if(y.codePointAt(i)>=33&&y.codePointAt(i)<=122&&y.codePointAt(i)>=58&&y.codePointAt(i)<=64){    // special characters 
        flag++;
      }
      if(y.codePointAt(i)>=48&&y.codePointAt(i)<=57){    // numbers
        flag++;
      }
      if(y.codePointAt(i)>=65&&y.codePointAt(i)<=90){    // lower case letters 
        flag++;
      }
      if(y.codePointAt(i)>=97&&y.codePointAt(i)<=122){    // upper case 
        flag++;
      }
    }
    if(flag<4){
      alert("Password must be contain 1 lower case , 1 upper case , 1 special character and 1 number atleast");
      return false;
    }
  }

function tryLogin(){
    if(validateForm()!=0){
      window.open("./index.html");
      window.close();
    }
  }

