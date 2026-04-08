var L=parseInt(prompt('Enter the value(must be greater than equal to 1 and less than R):-'));
var R=parseInt(prompt('Enter the value of R(must be greater than L and less than 10**6):-'));
var K=parseInt(prompt('Enter the value of K(must be greater than equal to 2 and less than equal to 9):-'));
var count=0;
var x=L;
if(L<=0 || L>=R || R>10**6 || K<2 || K>9)
    return;

function isprime(m)
{
    if(x<2)
    {
        return false;
    }
    for(var i=2;i<=m**1/2;i++)
    {
        if(m%i===0)
        {
            return false;
        }
    }
    return true;
}
function dig_sum(x)
{
    let sum=0;
    while(x>0)
    {
        sum+=x%10;
        x=Math.floor(x/10);
    }
    return sum;
}

function check_zero(x)
{
    while(x>0)    {
        if(x%10===0)
        {
            return true;
        }
        x=Math.floor(x/10);
    }
    return false;
}

while(x<=R)
{
    if(x%K==0 && isprime(dig_sum(x)) && check_zero(x)==false)
    {
        count++;
    }
    x++;
}

alert('Number of integers between ' + L + ' and ' + R + ' satisfying the given conditions is: ' + count);