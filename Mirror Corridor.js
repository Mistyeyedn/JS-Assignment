var N=parseInt(prompt('Enter positive integer leass than equal to 10**6:- '));
var K=parseInt(prompt('Enter an integer between 2 and 9 (inclusive):- '));

if(N<0 || N>10**6 || K<2 || K>9)
{
    alert('invalid input!');
    return;
}
function isPalindrome(n)
{
    
    var m=n.toString();
    let y=true;
    let end=m.length-1;
    for(var i=0;i<m.length/2;i++)
    {
        if (m[i]!=m[end])
        {
            y=false;
            break;
        }
           
        end--;
    }
    return y;
}
var X=0;
for( X ;X<=10**6;X++)
{
    if((N+X)%K==0 && isPalindrome(N+X))
    {
        alert(X);
        break;
    }
}
if(X>10**6)
{
    alert('-1');
}