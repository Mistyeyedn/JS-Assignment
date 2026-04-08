var N=parseInt(prompt('Enter your integer value(1<=N<=10**6):-'));
var seed=parseInt(prompt('Enter the seed value,must(0<=seed<=9):-'));
if(N<=0 || N>10**6 || seed<0 || seed>9)
{
    alert('invalid input!');
        return;
}
var final_value=N;

function mid_digit(n) 
{
    var str=final_value.toString()
    return str[Math.floor(str.length/2)];
    
}
if(N%2==0)
{
    for(var i=1;i<=3;i++)
    {
        final_value=final_value/2 +seed;
    }
}
else
{
    for(var i=1;i<=3;i++)
    {
        final_value=final_value*3 - seed;
    }
}
if(final_value>=100 && final_value<=999 && mid_digit(final_value)==seed)
{
    alert('YES,'+final_value);
}
else
{
    alert('NO,'+final_value);
}