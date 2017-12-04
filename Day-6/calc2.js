console.log("***Welcome to Calculator***");
var a,b,c,oper="x";
do
{   
    oper= window.prompt("please enter + to add - to subtract * to multiply / to divide or x to exit");
    switch(oper)
    {
    case "+" :
    
        a= +window.prompt("please enter first number");
        b= +window.prompt("please enter second number");
        window.alert(a+b);
        break;
        
  
    case "-":
        
        a= +window.prompt("please enter first number");
        b= +window.prompt("please enter second number");
        window.alert(a-b);
        break;    
        
    case "*":
        a= +window.prompt("please enter first number");
        b= +window.prompt("please enter second number");
        window.alert(a*b);
        break;    
    
    case "/":
    
        a= +window.prompt("please enter first number");
        b= +window.prompt("please enter second number");
        window.alert(a/b);
        break;    
        
    case "%":
        a= +window.prompt("please enter first number");
        b= +window.prompt("please enter second number");
        window.alert(a%b);
        break;    
    
    case "x":
        window.alert("tata");
        console.log(oper);
        break;

    default :
        window.alert("sorry wrong input")
                       
    }
}while(oper!=="x");