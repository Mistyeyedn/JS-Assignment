var N =parseInt(prompt('Enter your number:- '));
var seed=parseInt(prompt('Enter your seed-value(between 0 and 9):- '));
var m=1;
var sum=0;

    for(var i=1;i<=m;i++)
    {
        if(i%seed+2!=0)
            sum+=i;
        if(sum>=N)
            break;
        m++;
    }
alert(m+1,sum);