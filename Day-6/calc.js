console.log("***Welcome to Calculator***");
var a,b,c,oper="x";
do
{   
    oper= window.prompt("please enter + to add - to subtract * to multiply / to divide or x to exit");
    
    if (oper=="+")
    {
        a= +window.prompt("please enter first number");
        b= +window.prompt("please enter second number");
        window.alert(a+b);
    }
    else 
    {
        if (oper=="-")
        {
        a= +window.prompt("please enter first number");
        b= +window.prompt("please enter second number");
        window.alert(a-b);    
        }
        else
        { 
            if (oper=="*")
            {
            a= +window.prompt("please enter first number");
            b= +window.prompt("please enter second number");
            window.alert(a*b);    
        }
            else
            {
                if (oper=="/")
                {
                a= +window.prompt("please enter first number");
                b= +window.prompt("please enter second number");
                window.alert(a/b);    
                }
                else
                { 
                    if (oper=="%")
                    {
                    a= +window.prompt("please enter first number");
                    b= +window.prompt("please enter second number");
                    window.alert(a%b);    
                    }
                    else
                    {
                        if(oper=="x")
                        {
                            window.alert("tata");
                            console.log(oper);
                            oper="x";
                        }
                        else 
                        {
                        window.alert("Sorry Wrong input");
                        }
}}}}}}while(oper!=="x");