var base=parseInt(prompt('Enter your base,must(1<=base<=1000):- '));
var distance=parseInt(prompt('Enter the distance,must be less than qual to 100:- '));
var minutelate=parseInt(prompt('Enter the delayed time(must be less than equal to 120):- '));
var seed=parseInt(prompt('Enter your seed value,must(0<=seed<=9):- '));
if(base<1 || base>100 || distance<0 || distance>100 || minutelate<0 || minutelate>120 || seed<0 || seed>9)
{
    alert('invalid input!');
    return;
}

var fare=base+7*distance;
if(minutelate>15)
    fare+=20;
if(distance>10)
    fare+=Math.floor(0.1*fare);
if(seed%2!=0)
    fare-=seed;
else
    fare+=seed;

fare=Math.ceil(fare/5)*5;
alert('final fare is:- '+fare);