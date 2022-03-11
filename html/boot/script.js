
//var tablenum =3;
//var i=0;
//for(i=0;i<=10;i++)
{
    document.writeln(i);
}
//var numbers=[23,56,89,96,45,59,-6 ];
//for(i=numbers.length-1;i>0;i--)
//{
 // document.writeln(numbers[i]+"<br>");
//}
 
function login()
{
    var username=document.getElementById("text1").value;
    var password=document.getElementById("text2").value;
    if(username=="manpreet"&& password=="12345")
    {
        document.getElementById("result").innerHTML="welcome:"+username;
    }
    else
    {
        document.getElementById("result").innerHTML="incorrect";
    }



    
}

