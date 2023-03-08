


function factorial(n, sum = n)
{
    if(n >= 1)
    {
        sum = sum * (n-1);
        console.log(sum);
        n -= 1;
        console.log(n);
        return factorial(n, sum);
        
    }

}

factorial(5)