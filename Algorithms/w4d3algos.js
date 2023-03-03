function OpenClosed(str)
{
    var correct = true;
    var lastpostition;
    for(var i = 0; i<=str.length; i++)
    {
        lastpostition = 
        if(str[i] == '(' )
        {
            lastpostition = i+1;
            correct = false;
            for(var j = lastpostition; j<=str.length; j++)
            {
                if(str[j] == ')')
                {
                    correct = true;
                    lastpostition = j;
                }
            }
        }
    }
}