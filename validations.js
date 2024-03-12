function Text1()
{
 var correct_way= /^[A-Z a-z]+$ /
 var a= document.getElementById("un").value;
 if(a==" ")
 {
   document.getElementById("message1").innerHTML="* Fill the field";
   return false;
 }
 if(a.length<3)
 {
  document.getElementById("message1").innerHTML="* Length should be more than 3";
  return false;
 }
 if(a.length>15)
 {
  document.getElementById("message1").innerHTML="* Length should be less than 15";
  return false;
 }
}



function Text2()
{
 var b=document.getElementById("pw1").value;
 if(b=="")
 {
  document.getElementById("message2").innerHTML="*Enter password";
  return False;
 }
 if(b.length <5)
 {
  document.getElementById("message2").innerHTML="*password should be atleast 6 charecters long";
  return false;
 }
 if(b.length> 15)
 {
  document.getElementById("message2").innerHTML="*password length cant exceed 15 charecters ";
  return false;
 }
 
}

function Text3()
{
 var x=document.getElementById("pw1").value;
 var y=document.getElementById("pw2").value;
 if(x!=y)
 {
  document.getElementById("message3").innerHTML="*passwords dont match ";
  return false;
 }
}


function mail()
{
 var x=document.getElementById("em").value;
 if(x=="")
 {
  document.getElementById("message4").innerHTML="*email cant be empty";
  return false;
 }
 if(x.indexOf("@")<=0)
 {
  document.getElementById("message4").innerHTML="*invalid email";
  return false;
 }
 if(x.charAt(a.length-4)!=".")
 {
  document.getElementById("message4").innerHTML="*invalid email";
  return false;
 }
}